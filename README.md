## Personal Website and a Simple Blog Using AngularJS, Typescript and Bootstrap.
### Project Description
This repository contains the underlying source code for http://trojan03.github.io.  
The site is built with AngularJS, Typescript and Bootstrap.  
It also contains a simple blog using json data for the content.  
The site is ready to be deployed on github pages.
### Installation on github Pages/local server
Clone repository
```
git clone https://github.com/trojan03/personal-website.git
cd personal-website
```
Install bower dependencies  
```
bower install
```
For Atom IDE, a tsconfig.json handles the compilation process. In case you want to build the site by yourself, navigate to app/src and run `tsc`. This command will generate `app/dist/app.js`.
To deploy on github pages, push the all files from `app` except for `src`.
For local deployment, I recommend to use [live-server](https://github.com/tapio/live-server).
## TODO
- [ ] Migrate packages from bower to npm
## License
MIT © [Alymbek Sadybakasov](http://trojan03.github.io)
