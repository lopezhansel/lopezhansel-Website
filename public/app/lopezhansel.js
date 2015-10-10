var app = angular.module('lopezhansel', []);

app.controller('homeCtrl', ['$scope', function ($scope) {
	$scope.greeting = "Welcome to my Page";
}]);