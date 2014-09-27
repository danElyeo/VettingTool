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
	}

	angular.module('vettingToolApp')
	.controller('MainCtrl', MainCtrl);
})();
