'use strict';

(function() {
	//function VettingModalCtrl($scope, $modalInstance, items) {
	
	var VettingModalCtrl = ['$scope', '$rootScope', '$modalInstance', 'QuestionItems', 
	function($scope, $rootScope, $modalInstance, QuestionItems) {

		$scope.answers = []; // array to save the answers, controlled by likert-scale directive
		//console.log('Question Items: ' + QuestionItems.data);
		$scope.questions = QuestionItems.data.questions;
		$scope.questionCount = $scope.questions.length;
		console.log('No. of questions: ' + $scope.questionCount);

		$scope.currIndex = 0;
		$scope.currQuestion = $scope.questions[$scope.currIndex];

		$scope.completed = false;


		//console.log('Current question index: '  + $scope.currIndex);

		$scope.goToPrev = function () {
			// Set current video to false to hide it.
			//$scope.questionVid[currIndex] = false;

			if($scope.currIndex <= 0) {
				$scope.currIndex = 0; 
			}
			else {
				$scope.currIndex--;
			}

			//console.log('Prev question. Current index is now: ' + $scope.currIndex);

			updateQuestion();
			//$scope.currQuestion = $scope.questions[currIndex];			
		};

		$scope.goToNext = function () {
			// Set current video to false to hide it.
			//$scope.questionVid[$scope.currIndex] = false;

			if($scope.currIndex >= $scope.questionCount - 1) {
				$scope.currIndex = $scope.questionCount - 1; 
			}
			else {
				$scope.currIndex++;
			}

			//console.log('Next question. Current index is now: ' + $scope.currIndex);

			//$scope.currQuestion = $scope.questions[currIndex];
			updateQuestion();
		};

		$scope.submit = function () {
			$modalInstance.close($scope.answers);
		};

		function updateQuestion() {
			//console.log('Current Question no: ' + ($scope.currIndex));
			//console.log('Question type: ' + $scope.questions[$scope.currIndex].type);

			$scope.currQuestion = $scope.questions[$scope.currIndex];
		}

		// When all vetting questions have an answer,
		// allow the vetter to submit the questions to the backend.
		$scope.$watchCollection('answers', function() {
			console.log('Current Answers: ' + $scope.answers);
			if($scope.answers.length === 7) {
				//console.log('Show submit button');

				var allAnswered = true;
				// Check if each index has an answers
				for (var i = 0; i < $scope.answers.length; i++) {
					if($scope.answers[i] === undefined) {
						allAnswered = false;
						break;
					}
				}

				if(allAnswered) {
					$scope.completed = true;
				}
			}
		});

		updateQuestion();
	}];

	angular.module('vettingToolApp')
	.controller('VettingModalCtrl', VettingModalCtrl);
})();