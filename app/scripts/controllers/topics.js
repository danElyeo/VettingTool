'use strict';

/**
 * @ngdoc function
 * @name vettingToolApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vettingToolApp
 */
// angular.module('vettingToolApp')
//   .controller('TopicsCtrl', function ($scope) {
//     // $scope.awesomeThings = [
//     //   'HTML5 Boilerplate',
//     //   'AngularJS',
//     //   'Karma'
//     // ];
//   });

(function() {
	function TopicsCtrl($scope, $http, LectureAPI, TopicAPI, LectureData) {
		$scope.usingSafari = false;
		$scope.format = 'video/webm';
		$scope.ext = '.webm';

		$scope.detectIfSafari = function() {
			var userAgent = navigator.userAgent;
			if(userAgent.indexOf('Safari') !== -1) {
				$scope.usingSafari = true;
				$scope.ext = '.mp4';
				$scope.format = 'video/mp4';
			}
		};

		$scope.detectIfSafari();

		// 1. Get lecture data from the server
		// 2. Extract topics from the lecture data
		// Generate the view based on number of topics assigned to current user
		
		// Get user lectures
		// $http.get('data/lectures.json').success(function(data) {
		// 	console.log('Lecture GET: SUCCESS');
		// 	//console.log('Lecture data: ' + JSON.stringify(data.lectures));
		// 	LectureAPI.setLectures(data.lectures);

		// 	$scope.topics = TopicAPI.topics;
		// 	$scope.lectures = LectureAPI.lectures;
		// });
		//console.log('LectureData: ' + JSON.stringify(LectureData));
		LectureAPI.setLectures(LectureData.data.lectures);
		$scope.topics = TopicAPI.topics;
		$scope.lectures = LectureAPI.lectures;
		console.log('Scope lectures: ' + JSON.stringify($scope.lectures));
	}

	angular.module('vettingToolApp')
	.controller('TopicsCtrl', TopicsCtrl);
})();
