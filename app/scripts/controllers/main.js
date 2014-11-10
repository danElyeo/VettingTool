'use strict';

/**
 * @ngdoc function
 * @name vettingToolApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vettingToolApp
 */
// angular.module('vettingToolApp')
//   .controller('MainCtrl', function ($scope) {
//     // $scope.awesomeThings = [
//     //   'HTML5 Boilerplate',
//     //   'AngularJS',
//     //   'Karma'
//     // ];
//   });

(function() {

	var MainCtrl = ['$scope', '$rootScope', '$cookieStore', '$location','UserAPI', function($scope, $rootScope, $cookieStore, $location, UserAPI) {
		//$rootScope.username = 'jhenner';
		//$rootScope.userpass = 'asl123';
		$rootScope.showEnglish = false;
		$rootScope.usingSafari = false;
		$rootScope.format = 'video/webm';
		$rootScope.ext = '.webm';
		$rootScope.lectureViewed = false;
		$rootScope.currentUser = null;

		if($cookieStore.get('deafine_user') !== undefined) {
			$rootScope.currentUser = $cookieStore.get('deafine_user');
			$location.path('/topics');
		}

		$scope.setEnglish = function(showEnglish) {
			$rootScope.showEnglish = showEnglish;
			console.log('Setting english option: ' + showEnglish);
		};

		$scope.setLectureViewed = function(lectureViewed) {
			$rootScope.lectureViewed = lectureViewed;
			console.log('Setting lecture viewed option: ' + lectureViewed);
		};

		$scope.detectIfSafari = function() {
			var userAgent = navigator.userAgent;
			if(userAgent.indexOf('Safari') !== -1) {
				$rootScope.usingSafari = true;
				$rootScope.ext = '.mp4';
				$rootScope.format = 'video/mp4';
			}
		};

		$scope.login = function() {
			console.log('Attempting to log in username: ' + $scope.username);
			if($scope.username === undefined || $scope.userpass === undefined) {
				console.log('Invalid user name or password!');
			}
			else {
				UserAPI.login($scope.username, $scope.userpass);
			}
			
			//console.log('Current User: ' + UserAPI.user_id);
			//console.log('Login username: ' + $scope.username);
			//console.log('Password: ' + $scope.userpass);
		};

		// Signsout the current user
		$scope.signout = function() {
			console.log('Signing out');
			$cookieStore.remove('deafine_user');
			$location.path('/');
		};

		$scope.detectIfSafari();

		//console.log('Current user is: ' + $cookieStore.get('deafine_user'));
	}];
	
	angular.module('vettingToolApp')
	.controller('MainCtrl', MainCtrl);
})();
