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

		// When a lecture is changed or opened, reset and store the 
		termAPI.initTerms = function(terms) {
			termAPI.currentTerms = [];
			termAPI.currentTerms = terms;
			console.log('Current Terms: ' + JSON.stringify(terms));
		};

		// Gets the next term that vetters should vet next
		termAPI.getNextTermIndex = function() {
			var allVetted = true;
			var nextTermIndex = -1;
			for (var i = 0; i < termAPI.currentTerms.length; i++) {
				if(termAPI.currentTerms[i].vetted === false) {
					nextTermIndex = i;
					allVetted = false;
					break;
				}
			}

			// if (allVetted === false && nextTermIndex !== null) {
			// 	return nextTerm;
			// } else {
			// 	console.log('All Terms VETTED!');
			// }
			console.log('Next term index: ' + nextTermIndex);
			return nextTermIndex;
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