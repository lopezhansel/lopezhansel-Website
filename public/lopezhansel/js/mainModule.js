var app = angular.module('lopezhansel', ['ngAnimate','ngRoute',"ngMaterial"]);

app.config(function($routeProvider){
  $routeProvider
    .when('/', { 
      controller: 'homeCtrl', 
      templateUrl: './views/homeView2.html' 
    })
     .when('/resume', { 
      controller: 'homeCtrl', 
      templateUrl: './views/resumeView.html' 
    })
    .when('/home', { 
      controller: 'homeCtrl', 
      templateUrl: './views/homeView2.html' 
    })
     .when('/blog', { 
      controller: 'homeCtrl', 
      templateUrl: './views/blogView.html' 
    })
     .when('/myWork', { 
      controller: 'homeCtrl', 
      templateUrl: './views/myWorkView.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    });     
});
