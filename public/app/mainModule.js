var app = angular.module('lopezhansel', ['ngAnimate','ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', { 
      controller: 'homeCtrl', 
      templateUrl: './app/home/home.html' 
    })
     .when('/mapMe', { 
      controller: 'SubheaderAppCtrl', 
      templateUrl: './app/mapMe/mapMe.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    });     
});