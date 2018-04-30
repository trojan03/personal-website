/** @ngInject */
module App {
  export function vNavbar(): angular.IDirective {
      return {
        restrict: 'E',
        templateUrl: "../../dist/views/navbarview.html",
        controller: NavbarController,
        controllerAs: 'navbar',
        bindToController: true
      }
  }

  /** @ngInject */
  export class NavbarController {

    public tab: string;

    constructor(private $location: angular.ILocationService) {
      if ($location.path().indexOf("blog") >= 0){
        this.tab = "blog";
      }
      else {
        this.tab = $location.path().replace("/", "");
      }
    }

    public switchTab(name: string) {
      this.tab = name;
      if (name === "about")
        this.$location.path("about");
      else if (name === "blog")
        this.$location.path("blog");
      else
        this.$location.path("stuff");
      }
    }
  }
