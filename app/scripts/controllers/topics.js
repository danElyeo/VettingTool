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

	var TopicsCtrl = ['$scope', '$http', 'LectureAPI', 'TopicAPI', 'AssignedLectures',
	function($scope, $http, LectureAPI, TopicAPI, AssignedLectures) {
		$scope.selectLecture = function(id) {
			console.log('Lecture selected: ' + id);
			LectureAPI.lectureId = id;
			// redirect to Lecture page
		};

		// 1. Get lecture data from the server
		// 2. Extract topics from the lecture data
		// Generate the view based on number of topics assigned to current user
		
		console.log(JSON.stringify(AssignedLectures.data));
		LectureAPI.setLectures(AssignedLectures.data.lectures);
		TopicAPI.setTopics(LectureAPI.lectures);
		
		$scope.topics = TopicAPI.topics;
		$scope.lectures = LectureAPI.lectures;
		//console.log('Scope lectures: ' + JSON.stringify($scope.lectures));
	}];
	// function TopicsCtrl($scope, $http, LectureAPI, TopicAPI, AssignedLectures) {

	// 	$scope.selectLecture = function(id) {
	// 		console.log('Lecture selected: ' + id);
	// 		LectureAPI.lectureId = id;
	// 		// redirect to Lecture page
	// 	};

	// 	// 1. Get lecture data from the server
	// 	// 2. Extract topics from the lecture data
	// 	// Generate the view based on number of topics assigned to current user
		
	// 	LectureAPI.setLectures(AssignedLectures.data.lectures);
	// 	TopicAPI.setTopics(LectureAPI.lectures);
		
	// 	$scope.topics = TopicAPI.topics;
	// 	$scope.lectures = LectureAPI.lectures;
	// 	//console.log('Scope lectures: ' + JSON.stringify($scope.lectures));
	// }

	angular.module('vettingToolApp')
	.controller('TopicsCtrl', TopicsCtrl);
})();
