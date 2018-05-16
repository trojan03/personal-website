module App {
    export class AboutController {
        constructor(private usSpinnerService){
        }

        public startSpinner(){
          this.usSpinnerService.spin('image-spinner')
        }

        public stopSpinner(){
          this.usSpinnerService.stop('image-spinner')
        }
    }
}
