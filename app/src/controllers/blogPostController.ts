/// <reference path="../index.main.ts" />
module App {
    export class BlogPostController {
      public content_url;
      public content;
      public content_compiled: string;
      public id: number;
      constructor(
        $http: angular.IHttpService,
        $routeParams: angular.route.IRouteParamsService,
        $location: angular.ILocationService
      ){
        this.id = $routeParams.id;
        $http.get("dist/posts/posts.json").then(posts => {
          posts.data.forEach(post => {
            if (post.id == this.id) {
              this.content_url = "dist/posts/" + this.id + ".md";
              document.title = post.title + " - Alymbek Sadybakasov";
            }
          })
          $http.get(this.content_url).then((result) => {
            this.content = result.data;
          })
        });
      }

      public toContent: string = "#!/blog";
}
app.controller('blogPostController', BlogPostController);
app.config(['markedProvider', function (markedProvider) {
  markedProvider.setOptions({
    gfm: true,
    tables: true,
    highlight: function (code, lang) {
      if (lang) {
        return hljs.highlight(lang, code, true).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    }
  });
}]);
