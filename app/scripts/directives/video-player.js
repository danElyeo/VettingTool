'use strict';

(function(){
	var videoPlayer = ['FILE_HOST', function(FILE_HOST) {
		return {
			restrict: 'E',
			scope: {
				path:'@',
				localpath:'@',
				lecture:'@'
			},
			replace: true,
			template:'<video controls></video>',
			//templateUrl:'scripts/directives/sign-video.tpl.html',
			link: function($scope, $element, $attr) {
				$element.attr('type', $attr.type);

				if($attr.localpath){
					$element.attr('src', $attr.path);
				}
				else {
					$element.attr('src', FILE_HOST + $attr.path);
					//console.log('Path: ' + $element.attr('path'));
				}

				// Turn off volumn by default
				$element[0].volume = 0;

				// $element[0].onloadedmetadata = function() {
    // 				//alert('Meta data for video loaded');
    // 				//console.log('Video loaded');
    // 				//$scope.$emit('lectureVideoLoaded');
				// };	

				// Path is a custom attribute, so we need to change the 
				// src manually.
				$scope.$watch('path', function() {
					//console.log('Path is changed!' + $scope.path);
					// Update the player's new source file
					$element.attr('src', FILE_HOST + $attr.path);
				});

				// When video has played till the end, reset the video automatically
				$element.on('ended', function() {
					// Reset the current video time
					$element[0].currentTime = 0;
					$element[0].pause();

					// If video is a lecture video, broadcast finish event
					if($attr.lecture) {
						console.log('Lecture ended! Woohoo!');
						$scope.$emit('LectureEndedEvent');
					}		
				});

				$scope.$on('PauseLecture', function() {
					$element[0].pause();
				});
				
			}	
		};	
	}];

	angular.module('vettingToolApp')
	.directive('videoPlayer', videoPlayer);
})();