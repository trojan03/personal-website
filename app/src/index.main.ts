module App {
    var app = angular.module('personalApp', ['ngRoute', 'ngAnimate', 'btford.markdown'])
        .controller('mainController', MainController)
        .controller('aboutController', AboutController)
        .controller('blogController', BlogController)
        .directive('blogPostController', BlogPostController)
        .config(routerConfig);
    app.directive("vNavbar", vNavbar);
    app.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title + " - Alymbek Sadybakasov";
    });
}]);
}
