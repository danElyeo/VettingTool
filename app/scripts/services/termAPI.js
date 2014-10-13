'use strict';

(function() {
	var TermAPI = [function() {
		var termAPI = {};
		
		termAPI.activeTerm = null;

		// Sets the current active term
		termAPI.setActiveTerm = function(term) {
			console.log('Current Term: ' + JSON.stringify(term));
			termAPI.activeTerm = term;
		};

		// Term video file info is already provided by 
		// LectureAPI's get lectureInfo function

		// Get definition video source 
		termAPI.getDefVideo = function () {

		};



		return termAPI;	
	}];
	// function TermAPI() {

	// 	var termAPI = {};
		
	// 	termAPI.activeTerm = null;

	// 	// Sets the current active term
	// 	termAPI.setActiveTerm = function(term) {
	// 		//console.log('Current Term: ' + JSON.stringify(term));
	// 		termAPI.activeTerm = term;
	// 	};

	// 	// Term video file info is already provided by 
	// 	// LectureAPI's get lectureInfo function

	// 	// Get definition video source 
	// 	termAPI.getDefVideo = function () {

	// 	};



	// 	return termAPI;	
	// }



	angular.module('vettingToolApp')
	.factory('TermAPI', TermAPI);
})();