/// <reference path="controllers/mainController.ts" />
/// <reference path="controllers/navbarController.ts" />
/// <reference path="controllers/BlogController.ts" />
/// <reference path="index.route.ts" />
module App {
  export var app = angular.module('personalApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'hc.marked',
  'bc.imagesloaded', 'angularSpinner'])
      .controller('mainController', MainController)
      .controller('aboutController', AboutController)
      .controller('blogController', BlogController)
      .config(routerConfig);
  app.directive("vNavbar", vNavbar);
  app.run(['$rootScope', '$route', function($rootScope, $route) {
  $rootScope.$on('$routeChangeSuccess', function() {
      document.title = $route.current.title + " - Alymbek Sadybakasov";
  });
  updateImageSize();
  linkInNewTab();
}]);

  function updateImageSize() {
    marked.Renderer.prototype.image = function(href, title, text) {
        if (title) {
            var size = title.split('x');
            if (size[1]) {
                size = 'width=' + size[0] + ' height=' + size[1];
            } else {
                size = 'width=' + size[0];
            }
        } else {
            size = '';
        }
        return ('<img src="' + href + '" alt="' + text + '" ' + size + '>');
    };
  }

  function linkInNewTab() {
    marked.Renderer.prototype.link = function( href, title, text ) {
      return '<a target="_blank" href="'+ href +'" title="' + title + '">' + text + '</a>';
    }
  }
}
