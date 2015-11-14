app.controller('indexController', ['$routeParams', '$mdMedia', '$mdDialog', '$mdToast', "$http", "$interval", "$location", "$timeout", 
	function( $routeParams, $mdMedia, $mdDialog, $mdToast, $http, $interval, $location, $timeout) {
	this.redirect = function(urlStr) {
		console.log("hello");
		$location.path(urlStr);
	};


		
}])	;
