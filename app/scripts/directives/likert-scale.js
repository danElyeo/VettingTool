'use strict';

(function(){
	var likertScale = ['VettingAPI', function(VettingAPI) {
		return {
			restrict: 'E',
			scope: {
				//qtype:'@',
				answer:'@'
				//index:'='
			},
			replace: true,
			//template:'<video controls></video>',
			templateUrl:'views/templates/likert-scale.tpl.html',
			link: function($scope) {

				console.log('Initializing likert scale');

				$scope.qtype = VettingAPI.getCurrQuestion().type;

				// Watch for changes in the index coming from vetting-modal.js
				$scope.$watch(VettingAPI.getQuestionNum, function() {
					$scope.qtype = VettingAPI.getCurrQuestion().type;
					//console.log('Question chagned!');
					//console.log('From the directive, current index is: ' + $scope.index);
					//console.log('From the directive, previous index is: ' + prevIndex);

					// Check for answer of current index
					//console.log('Current index: ' + VettingAPI.currIndex);
					//console.log('Checking for answers...');
					if(VettingAPI.answers[VettingAPI.currIndex] !== undefined ) {
						//console.log('Previous stored answer is ' + VettingAPI.answers[VettingAPI.currIndex]);
						setCurrentAnswer(VettingAPI.answers[VettingAPI.currIndex]);
					}
					else {
						//console.log('No answer yet');
					}
					// If answer exists, show the answer on the likert/binary scale
					if(VettingAPI.answers[VettingAPI.currIndex] === undefined ) {
						$scope.clearRadioGroup();
					}
					
					//console.log('Current Answers: ' + $scope.answers);
					//console.log('Answers length: ' + $scope.answers.length);
				});


				$scope.$watch('answer', function() {
					if($scope.answer !== undefined) {
						//console.log('Answer is ' + getAnswer());

						// Save the answer into VettingAPI.
						VettingAPI.answers[VettingAPI.currIndex] = getAnswer();
						console.log('VettingAPI answers: ' + VettingAPI.answers);

						if(VettingAPI.answers.length === VettingAPI.questionCount) {
							// Check if each index has an answer
							var allAnswered = true;
							// Check if each index has an answers
							for (var i = 0; i < VettingAPI.answers.length; i++) {
								if(VettingAPI.answers[i] === undefined) {
									allAnswered = false;
									break;
								}
							}

							if(allAnswered) {
								$scope.$emit('All_Questions_Answered');
							}
						}
					}
				});

				function getAnswer() {
					if(VettingAPI.getCurrQuestion().type === 'likert') {
						var likertGroup = document.getElementsByName('likert');
   						for(var i = 0; i < likertGroup.length; i++) {
   							if(likertGroup[i].checked) {
   								return likertGroup[i].value;
   							}
   						}
      						
					} else if (VettingAPI.getCurrQuestion().type === 'binary') {
						var binaryGroup = document.getElementsByName('binary');
   						for(var j=0; j < binaryGroup.length; j++) {
   							if(binaryGroup[j].checked) {
   								return binaryGroup[j].value;
   							}
   						}
					} else {
						console.log('Error: Not supposed to get here.');
					}
				}

				function setCurrentAnswer(value) {
					if(VettingAPI.getCurrQuestion().type === 'likert') {
						var likertGroup = document.getElementsByName('likert');
   						for(var i = 0; i < likertGroup.length; i++) {
   							if(likertGroup[i].value === value) {
   								likertGroup[i].checked = true;
   							}
   						}
      						
					} else if (VettingAPI.getCurrQuestion().type === 'binary') {
						var binaryGroup = document.getElementsByName('binary');
   						for(var j=0; j < binaryGroup.length; j++) {
   							if(binaryGroup[j].value === value) {
   								binaryGroup[j].checked = true;
   							}
   						}
					} else {
						console.log('Error: Not supposed to get here.');
					}
				}

				// Clear radio group, called by parent controller 
				$scope.clearRadioGroup = function() {
					if(VettingAPI.getCurrQuestion().type === 'likert') {
						var likertGroup = document.getElementsByName('likert');
   						for(var i = 0; i < likertGroup.length; i++) {
   							likertGroup[i].checked = false;
   						}
      						
					} else if (VettingAPI.getCurrQuestion().type === 'binary') {
						var binaryGroup = document.getElementsByName('binary');
   						for(var j=0; j < binaryGroup.length; j++) {
   							binaryGroup[j].checked = false;
   						}
					} else {
						console.log('Error: Not supposed to get here.');
					}
				};
			}	
		};	
	}];
	
	angular.module('vettingToolApp')
	.directive('likertScale', likertScale);
})();