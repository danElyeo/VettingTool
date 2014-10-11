'use strict';

(function(){
	function videoPlayer(FILE_HOST) {
		return {
			restrict: 'E',
			scope: {
				path:'@',
				localpath:'@'
			},
			replace: true,
			template:'<video controls></video>',
			//templateUrl:'scripts/directives/sign-video.tpl.html',
			link: function($scope, $element, $attr) {
				$element.attr('type', $attr.type);

				if($attr.localpath){
					$element.attr('src', $attr.localpath);
				}
				else {
					$element.attr('src', FILE_HOST + $attr.path);
					console.log('Path: ' + $element.attr('path'));
				}

				// Turn off volumn by default
				$element[0].volume = 0;

				// Path is a custom attribute, so we need to change the 
				// src manually.
				$scope.$watch('path', function() {
					//console.log('Path is changed!' + $scope.path);
					// Update the player's new source file
					$element.attr('src', FILE_HOST + $attr.path);
				});

				// When video has played till the end, reset the video automatically
				$element.on('ended', function() {
					//console.log('Vided ended event.');
					// Reset the current video time
					$element[0].currentTime = 0;			
				});
			}	
		};	
	}

	angular.module('vettingToolApp')
	.directive('videoPlayer', videoPlayer);
})();