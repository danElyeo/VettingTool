'use strict';

(function(){
	var likertPanel = ['VettingAPI', function(VettingAPI) {
		return {
			restrict: 'E',
			scope: {
			},
			transclude:true,
			//template:'<video controls></video>',
			//templateUrl:'views/templates/likert-scale.tpl.html',
			link: function($scope, $element) {
				console.log('Initializing likert panel' + VettingAPI.questionCount);
				//console.log('Button Element: ' + $element[0].children[1]);
				console.log('Child0: ' + $element[0].children[0]);
				console.log('Child1: ' + $element[0].children[1]);
				console.log('Child2: ' + $element[0].children[2]);
				// Get the current question number.
				// If current question number is 1, disable btn_prev
				// if current question number is 7 or last, disable btn_next
				// $scope.$watch(VettingAPI.getQuestionNum(), function() {
				// 	if(VettingAPI.getQuestionNum() === 1 ) {
				// 		// Go to prev button
				// 		$element[0].children[0].disabled = true;
				// 	} 
				// 	else {
				// 		$element[0].children[0].disabled = false;
				// 	}

				// 	if(VettingAPI.getQuestionNum() === VettingAPI.questions.length) {
				// 		$element[0].children[1].disabled = true;
				// 	}
				// 	else {
				// 		$element[0].children[1].disabled = false;
				// 	}

				// 	// If current question number does not have an answer, clear the radio group
				// 	if(VettingAPI.answers[VettingAPI.currIndex] === undefined) {
				// 		$element[0].children[2].clearRadioGroup();
				// 	}
				// });
			}	
		};	
	}];
	
	angular.module('vettingToolApp')
	.directive('likertPanel', likertPanel);
})();