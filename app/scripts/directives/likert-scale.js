'use strict';

(function(){
	function likertScale() {
		return {
			restrict: 'E',
			scope: {
				type:'@'
			},
			replace: true,
			//template:'<video controls></video>',
			templateUrl:'scripts/directives/likert-scale.tpl.html',
			link: function($scope, $element) {
				
				console.log('Initializing likert scale');
				console.log('Checkbox: ' + $element[0].children[1].children[0]);

				// How to get the question type?
				//console.log('Parent: ' + $scope.parent);
			}	
		};	
	}

	angular.module('vettingToolApp')
	.directive('likertScale', likertScale);
})();