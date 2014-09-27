'use strict';

(function() {
	function LectureAPI($http, TopicAPI) {

		var lectureAPI = {};

		lectureAPI.lectures = [];

		lectureAPI.getLectureData = function() {
			return $http.get('data/lectures.json');
		};

		lectureAPI.setLectures = function(arr) {
			lectureAPI.lectures = arr;
			console.log('Lectures SET');
			console.log('No. of lectures: ' + lectureAPI.lectures.length);
			TopicAPI.setTopics(lectureAPI.lectures);
		};

		lectureAPI.getLectures = function() {
			return lectureAPI.lectures;
		};

		return lectureAPI;	
	}



	angular.module('vettingToolApp')
	.factory('LectureAPI', LectureAPI);
})();