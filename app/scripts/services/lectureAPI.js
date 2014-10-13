'use strict';

(function() {
	var LectureAPI = ['$http', function($http) {
		var lectureAPI = {};

		lectureAPI.lectures = [];

		lectureAPI.currentLectureFile = '';

		// Requests user assigned lectures from the backend
		// Gives user_id, expects a list of lectures in return
		lectureAPI.getAssignedLectures = function() {
			return $http.get('data/lectures.json');
			//return $http.get('http://ec2-54-86-73-168.compute-1.amazonaws.com:5000/lectures');
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
			//return $http.get('http://ec2-54-86-73-168.compute-1.amazonaws.com:5000/lectures/' + lectureId);
		};

		return lectureAPI;	
	}];
	// function LectureAPI($http) {

	// 	var lectureAPI = {};

	// 	lectureAPI.lectures = [];

	// 	// Requests user assigned lectures from the backend
	// 	// Gives user_id, expects a list of lectures in return
	// 	lectureAPI.getAssignedLectures = function() {
	// 		return $http.get('data/lectures.json');
	// 		//return $http.get('http://ec2-54-86-73-168.compute-1.amazonaws.com:5000/lectures');
	// 	};

	// 	// Stores assigned lectures into an array
	// 	lectureAPI.setLectures = function(arr) {
	// 		lectureAPI.lectures = arr;
	// 		console.log('Lectures SET');
	// 		console.log('No. of lectures: ' + lectureAPI.lectures.length);
	// 	};


	// 	lectureAPI.getLectures = function() {
	// 		return lectureAPI.lectures;
	// 	};

	// 	// Requests lecture info from the backend.
	// 	// Gives lecture_id, expects lecture_info json in return
	// 	lectureAPI.getLectureInfo = function(lectureId) {
	// 		return $http.get('data/' + lectureId + '.json');
	// 		//return $http.get('http://ec2-54-86-73-168.compute-1.amazonaws.com:5000/lectures/' + lectureId);
	// 	};

	// 	return lectureAPI;	
	// }



	angular.module('vettingToolApp')
	.factory('LectureAPI', LectureAPI);
})();