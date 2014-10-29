'use strict';

(function() {
	var VettingAPI = ['$http', function($http) {
		var vettingAPI = {};

		vettingAPI.questions = [];
		vettingAPI.answers = [];
		vettingAPI.currIndex = 0;
		vettingAPI.questionCount = 0;

		// Set up the questions
		$http.get('data/vetting-questions.json').success(function(data) {
			vettingAPI.questions = data.questions;
			//console.log('Data: ' + JSON.stringify(data));
			console.log('Number of vetting questions: ' + vettingAPI.questions.length);
			vettingAPI.questionCount = vettingAPI.questions.length;
		});

		// Initializes the API for use. Called when a new lecture is initialized.
		vettingAPI.init = function() {
			// Clear the answers array, if any;
			vettingAPI.answers = [];
			vettingAPI.currIndex = 0;
		};

		vettingAPI.getQuestionNum = function() {
			return vettingAPI.currIndex + 1;
		};

		vettingAPI.getQuestionCount = function() {
			return vettingAPI.questionCount;
		};

		// Gets the current question object
		vettingAPI.getCurrQuestion = function() {
			return vettingAPI.questions[vettingAPI.currIndex];
		};

		vettingAPI.nextQuestion = function() {
			if(vettingAPI.currIndex >= vettingAPI.questionCount - 1) {
				vettingAPI.currIndex = vettingAPI.questionCount - 1; 
			}
			else {
				vettingAPI.currIndex++;
			}
		};

		vettingAPI.prevQuestion = function() {
			if(vettingAPI.currIndex <= 0) {
				vettingAPI.currIndex = 0; 
			}
			else {
				vettingAPI.currIndex--;
			}
		};

		vettingAPI.getAnswers = function() {
			return vettingAPI.answers;
		};

		vettingAPI.submitAnswers = function() {
			console.log('Submitting answers to backend: ');
		};

		return vettingAPI;
	}];
	// function VettingAPI() {

	// 	var vettingAPI = {};

	// 	vettingAPI.questions = [];
	// 	vettingAPI.answers = [];

	// 	return vettingAPI;
	// }

	angular.module('vettingToolApp')
	.factory('VettingAPI', VettingAPI);
})();