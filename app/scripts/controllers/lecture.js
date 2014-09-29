'use strict';

(function() {

	function LectureCtrl($scope, $routeParams, LectureInfo) {
		console.log('Initializing Lecture Controller');

		$scope.lectureId = $routeParams.lectureId;
		console.log('LectureId: ' + $scope.lectureId);

		//console.log('LectureInfo: ' + JSON.stringify(LectureInfo.data));
		$scope.lectureInfo = LectureInfo.data;
	}

	angular.module('vettingToolApp')
	.controller('LectureCtrl', LectureCtrl);

})();