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

	var MainCtrl = ['$scope', '$rootScope', 'UserAPI', function($scope, $rootScope, UserAPI) {
		$rootScope.username = 'deafine_user';
		$rootScope.showEnglish = false;
		$rootScope.usingSafari = false;
		$rootScope.format = 'video/webm';
		$rootScope.ext = '.webm';
		$rootScope.lectureViewed = false;

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
			//UserAPI.login();
			console.log('Current User: ' + UserAPI.user_id);
		};

		$scope.detectIfSafari();
	}];
	
	angular.module('vettingToolApp')
	.controller('MainCtrl', MainCtrl);
})();
