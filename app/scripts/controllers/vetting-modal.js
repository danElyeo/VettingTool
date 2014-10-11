'use strict';

(function() {
	//function VettingModalCtrl($scope, $modalInstance, items) {
	
	var VettingModalCtrl = ['$scope', '$rootScope', '$modalInstance', 'QuestionItems', 
	function($scope, $rootScope, $modalInstance, QuestionItems) {

		$scope.answers = [7]; // array to save the answers
		//console.log('Question Items: ' + QuestionItems.data);
		$scope.questions = QuestionItems.data.questions;
		$scope.questionCount = $scope.questions.length;
		console.log('No. of questions: ' + $scope.questionCount);

		$scope.currIndex = 0;
		$scope.currQuestion = $scope.questions[$scope.currIndex];

		$scope.goToPrev = function () {
			if($scope.currIndex <= 0) {
				$scope.currIndex = 0; 
			}
			else {
				$scope.currIndex--;
			}

			updateQuestion();
			//$scope.currQuestion = $scope.questions[currIndex];			
		};

		$scope.goToNext = function () {
			if($scope.currIndex >= $scope.questionCount - 1) {
				$scope.currIndex = $scope.questionCount - 1; 
			}
			else {
				$scope.currIndex++;
			}
			//$scope.currQuestion = $scope.questions[currIndex];
			updateQuestion();
		};

		$scope.submit = function () {
			$modalInstance.dismiss('cancel');
		};

		function updateQuestion() {
			//console.log('Current Question no: ' + ($scope.currIndex+1));

			// Before updating, be sure to save the current choices seleected, if any.
			//document.getElementbyId()

			$scope.currQuestion = $scope.questions[$scope.currIndex];
			
			// Check for answers and display the choices accordingly
			// If vetter did not answer before, clear all choices
			// Otherwise select the answer that was chosen previously
			
		}
	}];
	// function VettingModalCtrl($scope, $rootScope, $modalInstance, QuestionItems) {
	// 	//console.log('Initializing Vetting Modal Controller');
	// 	//$scope.items = items;
	// 	// $scope.selected = {
	// 	// 	item: $scope.items[0]
	// 	// };
	// 	//console.log('Parent scope: ' + JSON.stringify($rootScope));

	// 	$scope.answers = [7]; // array to save the answers
	// 	//console.log('Question Items: ' + QuestionItems.data);
	// 	$scope.questions = QuestionItems.data.questions;
	// 	$scope.questionCount = $scope.questions.length;
	// 	console.log('No. of questions: ' + $scope.questionCount);

	// 	$scope.currIndex = 0;
	// 	$scope.currQuestion = $scope.questions[$scope.currIndex];

	// 	$scope.goToPrev = function () {
	// 		//$modalInstance.close($scope.selected.item);
	// 		//$modalInstance.close()
	// 		if($scope.currIndex <= 0) {
	// 			$scope.currIndex = 0; 
	// 		}
	// 		else {
	// 			$scope.currIndex--;
	// 		}

	// 		updateQuestion();
	// 		//$scope.currQuestion = $scope.questions[currIndex];			
	// 	};

	// 	$scope.goToNext = function () {
	// 		if($scope.currIndex >= $scope.questionCount - 1) {
	// 			$scope.currIndex = $scope.questionCount - 1; 
	// 		}
	// 		else {
	// 			$scope.currIndex++;
	// 		}
	// 		//$scope.currQuestion = $scope.questions[currIndex];
	// 		updateQuestion();
	// 	};

	// 	$scope.submit = function () {
	// 		$modalInstance.dismiss('cancel');
	// 	};

	// 	function updateQuestion() {
	// 		//console.log('Current Question no: ' + ($scope.currIndex+1));

	// 		// Before updating, be sure to save the current choices seleected, if any.
	// 		//document.getElementbyId()

	// 		//$scope.currQuestion = $scope.questions[$scope.currIndex];
			
	// 		// Check for answers and display the choices accordingly
	// 		// If vetter did not answer before, clear all choices
	// 		// Otherwise select the answer that was chosen previously
			
	// 	}
	// }

	angular.module('vettingToolApp')
	.controller('VettingModalCtrl', VettingModalCtrl);
})();