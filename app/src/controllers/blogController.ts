module App {
  export interface IBlogPost {
    id:    string;
    title:     string;
    summary: string;
    date: string;
}
  export class BlogPost implements IBlogPost {
    public id: string;
    public title: string;
    public summary: string;
    public date: string;
    constructor(id: string, title: string, summary: string, date: string) {
      this.id = id;
      this.title = title;
      this.summary = summary;
      this.date = date;
    }
  }

  export class BlogController {
      public posts: Array<BlogPost>;
      private hostUrl: string;
      constructor($http: angular.IHttpService, private $location: angular.ILocationService){
        this.posts = new Array<BlogPost>();
        var url = "dist/posts/posts.json"
        $http.get(url).then((result) => {
          result.data.forEach(post => {
            this.posts.push(new BlogPost(post.id, post.title, post.summary, post.date))
          });
          this.posts = this.posts.slice().reverse();
        });
      }

      public openPost(postId: number): string {
        return "#!/blog/" + postId;
      }
    }
  }
