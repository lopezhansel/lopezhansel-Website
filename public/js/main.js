var app = angular.module('lopezHansel',['ngAnimate', 'ngMaterial', 'ngRoute']); 

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      controller: 'mainController as main',
      templateUrl: 'views/homeView.html'
    })
    .when('/resume', {
      controller: 'mainController as main',
      templateUrl: 'views/resumeView.html'
    })
    .when('/portfolio', {
      controller: 'mainController',
      templateUrl: 'views/portfolioView.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});