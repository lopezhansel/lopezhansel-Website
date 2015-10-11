var app = angular.module('lopezhansel', ['ngAnimate','ngRoute',"ngMaterial"]);

app.config(function($routeProvider){
  $routeProvider
    .when('/', { 
      controller: 'homeCtrl', 
      templateUrl: './app/lopezhansel/homeView.html' 
    })
     .when('/resume', { 
      controller: 'homeCtrl', 
      templateUrl: './app/lopezhansel/resumeView.html' 
    })
    .when('/home', { 
      controller: 'homeCtrl', 
      templateUrl: './app/lopezhansel/homeView.html' 
    })
     .when('/blog', { 
      controller: 'homeCtrl', 
      templateUrl: './app/lopezhansel/blogView.html' 
    })
     .when('/myWork', { 
      controller: 'homeCtrl', 
      templateUrl: './app/lopezhansel/myWorkView.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    });     
});