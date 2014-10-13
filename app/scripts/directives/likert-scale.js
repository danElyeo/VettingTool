'use strict';

(function(){
	var likertScale = [function() {
		return {
			restrict: 'E',
			scope: {
				qtype:'@',
				answers:'=',
				index:'='
			},
			replace: true,
			//template:'<video controls></video>',
			templateUrl:'views/templates/likert-scale.tpl.html',
			link: function($scope) {

				console.log('Initializing likert scale');

				// Watch for changes in the index coming from vetting-modal.js
				$scope.$watch('index', function() {
					//console.log('From the directive, current index is: ' + $scope.index);
					//console.log('From the directive, previous index is: ' + prevIndex);

					// Check for answer of current index
					// If answer exists, show the answer on the likert/binary scale
					if($scope.answers[$scope.index] === null ) {
						$scope.clearRadioGroup();
					}
					
					//console.log('Current Answers: ' + $scope.answers);
					//console.log('Answers length: ' + $scope.answers.length);
				});

				// Clear radio group, called by parent controller 
				$scope.clearRadioGroup = function() {
					if($scope.qtype === 'likert') {
						var likertGroup = document.getElementsByName('likert');
   						for(var i = 0; i < likertGroup.length; i++) {
   							likertGroup[i].checked = false;
   						}
      						
					} else if ($scope.qtype === 'binary') {
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