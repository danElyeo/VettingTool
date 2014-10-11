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

	var MainCtrl = ['$scope', '$rootScope', function($scope, $rootScope) {
		$rootScope.username = 'deafine_user';
		$rootScope.showEnglish = false;
		$rootScope.usingSafari = false;
		$rootScope.format = 'video/webm';
		$rootScope.ext = '.webm';

		$scope.setEnglish = function(showEnglish) {
			$rootScope.showEnglish = showEnglish;
			console.log('Setting english option: ' + showEnglish);
		};

		$scope.detectIfSafari = function() {
			var userAgent = navigator.userAgent;
			if(userAgent.indexOf('Safari') !== -1) {
				$rootScope.usingSafari = true;
				$rootScope.ext = '.mp4';
				$rootScope.format = 'video/mp4';
			}
		};

		$scope.detectIfSafari();
	}];
	// function MainCtrl($scope, $rootScope) {
	// 	$rootScope.username = 'deafine_user';
	// 	$rootScope.showEnglish = false;
	// 	$rootScope.usingSafari = false;
	// 	$rootScope.format = 'video/webm';
	// 	$rootScope.ext = '.webm';

	// 	$scope.setEnglish = function(showEnglish) {
	// 		$rootScope.showEnglish = showEnglish;
	// 		console.log('Setting english option: ' + showEnglish);
	// 	};

	// 	$scope.detectIfSafari = function() {
	// 		var userAgent = navigator.userAgent;
	// 		if(userAgent.indexOf('Safari') !== -1) {
	// 			$rootScope.usingSafari = true;
	// 			$rootScope.ext = '.mp4';
	// 			$rootScope.format = 'video/mp4';
	// 		}
	// 	};

	// 	$scope.detectIfSafari();
	// }



	angular.module('vettingToolApp')
	.controller('MainCtrl', MainCtrl);
})();
