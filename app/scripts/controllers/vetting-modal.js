'use strict';

(function() {
	//function VettingModalCtrl($scope, $modalInstance, items) {
	
	var VettingModalCtrl = ['$scope', '$modalInstance', 'VettingAPI',
	function($scope, $modalInstance, VettingAPI) {

		//$scope.answers = []; // array to save the answers, controlled by likert-scale directive
		//console.log('Question Items: ' + QuestionItems.data);
		//$scope.questions = QuestionItems.data.questions;
		//$scope.questionCount = $scope.questions.length;
		//console.log('No. of questions: ' + $scope.questionCount);

		//$scope.currIndex = 0;
		//$scope.currQuestion = $scope.questions[$scope.currIndex];
		
		$scope.currQuestion = VettingAPI.getCurrQuestion();
		$scope.questionCount = VettingAPI.getQuestionCount();
		//$scope.currQuestionNum = VettingAPI.getQuestionNum();

		//console.log('Current Question Num: ' + $scope.currQuestionNum);
		//$scope.$apply();

		$scope.completed = false;


		//console.log('Current question index: '  + $scope.currIndex);

		$scope.goToPrev = function () {
			// Set current video to false to hide it.
			//$scope.questionVid[currIndex] = false;

			// if($scope.currIndex <= 0) {
			// 	$scope.currIndex = 0; 
			// }
			// else {
			// 	$scope.currIndex--;
			// }

			VettingAPI.prevQuestion();
			updateQuestion();
			//console.log('Prev question. Current index is now: ' + $scope.currIndex);

			//$scope.currQuestion = VettingAPI.getCurrQuestion();
			//$scope.currQuestion = $scope.questions[currIndex];			
		};

		$scope.goToNext = function () {
			// Set current video to false to hide it.
			//$scope.questionVid[$scope.currIndex] = false;

			// if($scope.currIndex >= $scope.questionCount - 1) {
			// 	$scope.currIndex = $scope.questionCount - 1; 
			// }
			// else {
			// 	$scope.currIndex++;
			// }

			//console.log('Next question. Current index is now: ' + $scope.currIndex);

			//$scope.currQuestion = $scope.questions[currIndex];
			//updateQuestion();
			VettingAPI.nextQuestion();
			updateQuestion();
			//$scope.currQuestion = VettingAPI.getCurrQuestion();
			//$scope.questionNum = VettingAPI.getCurrQuestionNum();
		};

		$scope.submit = function () {
			$modalInstance.close($scope.answers);
		};

		function updateQuestion() {
			//console.log('Current Question no: ' + ($scope.currIndex));
			//console.log('Question type: ' + $scope.questions[$scope.currIndex].type);

			$scope.currQuestion = VettingAPI.getCurrQuestion();
			$scope.currQuestionNum = VettingAPI.getQuestionNum();
		}

		$scope.$on('All_Questions_Answered', function() {
			$scope.completed = true;
		});
		// When all vetting questions have an answer,
		// allow the vetter to submit the questions to the backend.
		// $scope.$watch(VettingAPI.answers, function() {
		// 	//console.log('Current Answers: ' + VettingAPI.answers);
		// 	if(VettingAPI.answers.length === VettingAPI.questionCount) {
		// 		//console.log('Show submit button');

		// 		var allAnswered = true;
		// 		// Check if each index has an answers
		// 		for (var i = 0; i < VettingAPI.answers.length; i++) {
		// 			if(VettingAPI.answers[i] === undefined) {
		// 				allAnswered = false;
		// 				break;
		// 			}
		// 		}

		// 		if(allAnswered) {
		// 			$scope.completed = true;
		// 		}
		// 	}
		// }, true);

		updateQuestion();
	}];

	angular.module('vettingToolApp')
	.controller('VettingModalCtrl', VettingModalCtrl);
})();