app.controller('indexController', ['$scope',  '$routeParams', '$mdMedia', '$mdDialog', '$mdToast', "$http", "$interval", "$location", "$timeout", 
	function($scope, $routeParams, $mdMedia, $mdDialog, $mdToast, $http, $interval, $location, $timeout) {
	$scope.redirect = function(urlStr) {
		console.log("hello");
		$location.path(urlStr);
	};


		
}])	;
