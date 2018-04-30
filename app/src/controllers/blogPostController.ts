module App {
    export class BlogPostController {
      public content: string;
      public id: number;
      public hostUrl: strin;
      constructor(
        $http: angular.IHttpService,
        $routeParams: angular.route.IRouteParamsService,
        private $location: angular.ILocationService
      ){
        this.id = $routeParams.id;
        $http.get("dist/posts/posts.json").then(posts => {
          posts.data.forEach(post => {
            if (post.id == this.id)
              document.title = post.title + " - Alymbek Sadybakasov";
          })
        });
        $http.get("dist/posts/" + this.id + ".md").then((result) => {
          this.content = "dist/posts/" + this.id + ".md";
        })
      }

      public toContent: string = "#!/blog";

    }

}
