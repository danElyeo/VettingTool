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
	function MainCtrl($scope) {
		$scope.username = 'deafine_user';
		$scope.showEnglish = false;
		$scope.usingSafari = false;
		$scope.format = 'video/webm';
		$scope.ext = '.webm';

		$scope.setEnglish = function() {
			console.log('Setting english option: ' + $scope.showEnglish);
		};

		$scope.detectIfSafari = function() {
			var userAgent = navigator.userAgent;
			if(userAgent.indexOf('Safari') !== -1) {
				$scope.usingSafari = true;
				$scope.ext = '.mp4';
				$scope.format = 'video/mp4';
			}
		};

		$scope.detectIfSafari();
	}



	angular.module('vettingToolApp')
	.controller('MainCtrl', MainCtrl);
})();
