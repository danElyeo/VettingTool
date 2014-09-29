'use strict';

(function() {
	function LectureAPI($http) {

		var lectureAPI = {};

		lectureAPI.lectures = [];

		// Requests user assigned lectures from the backend
		// Gives user_id, expects a list of lectures in return
		lectureAPI.getAssignedLectures = function() {
			return $http.get('data/lectures.json');
		};

		// Stores assigned lectures into an array
		lectureAPI.setLectures = function(arr) {
			lectureAPI.lectures = arr;
			console.log('Lectures SET');
			console.log('No. of lectures: ' + lectureAPI.lectures.length);
		};


		lectureAPI.getLectures = function() {
			return lectureAPI.lectures;
		};

		// Requests lecture info from the backend.
		// Gives lecture_id, expects lecture_info json in return
		lectureAPI.getLectureInfo = function(lectureId) {
			return $http.get('data/' + lectureId + '.json');
		};

		return lectureAPI;	
	}



	angular.module('vettingToolApp')
	.factory('LectureAPI', LectureAPI);
})();