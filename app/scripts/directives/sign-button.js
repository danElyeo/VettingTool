'use strict';

// Sign Button is a button that consists of a video label.
// The difference between Sign Button and Sign Video is 
// when you hover a sign button, it plays the video within it. 
// For Sign Video, you hover the video, then it plays. 

(function(){
	var signButton = [function() {
		return {
			restrict: 'E',
			scope: {
			},
			// replace: true,
			transclude:true,
			template:'<button></button>',
			//templateUrl:'views/templates/sign-button.tpl.html',
			link: function($scope, $element) {
				//$element.attr('type', $attr.type);
				//console.log('Element: ' + $element[0]);
				
				//Play video when mouse over
				$element.on('mouseenter', function() {
					$element[0].children[1].play();
				});

				//Reset video when mouse leave
				$element.on('mouseleave', function() {
					$element[0].children[1].pause();
					$element[0].children[1].currentTime = 0;
				});	
			}	
		};	
	}];

	angular.module('vettingToolApp')
	.directive('signButton', signButton);
})();