module App {
  export function routerConfig($routeProvider: angular.route.IRouteProvider, $locationProvider: angular.location.ILocationProvider) {
    $routeProvider
      .when('/about', {
        title: "About",
        templateUrl: 'dist/views/aboutview.html',
        controller: AboutController,
        controllerAs: 'aboutController'
      })
      .when('/stuff', {
        title: "Stuff",
        templateUrl: 'dist/views/mainview.html',
        controller: MainController,
        controllerAs: 'controller'
      })
      .when('/blog', {
        title: "Blog",
        templateUrl: 'dist/views/blogview.html',
        controller: BlogController,
        controllerAs: 'blogController'
      })
      .when('/blog/:id', {
        title: "Blog",
        templateUrl: 'dist/views/blogpostview.html',
        controller: BlogPostController,
        controllerAs: 'blogPostController'
      })
      .otherwise({
        redirectTo: '/about'
      });
  }
}
