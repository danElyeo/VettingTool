'use strict';

(function(){
	var videoPlayer = ['FILE_HOST', function(FILE_HOST) {
		//var videoElement = angular.element('<video ng-show="videoLoaded"></video>');

		return {
			restrict: 'E',
			scope: {
				path:'@',
				localpath:'@',
				lecture:'@'
			},

			replace: true,
			//transclude:true,
			template:'<video></video>',
			//templateUrl:'views/templates/video-player.tpl.html',
			// link: function(tElem) {
			// 	//tElem.append(videoElement);
			compile: function(tElem) {
				tElem.after('<img ng-hide="videoLoaded" src="images/ajax-loader.gif">');
			
				return function($scope, $element, $attr) {
					//var videoElement = angular.element('video');
					//console.log('Vid element: ' + videoElement)

					$scope.videoLoaded = false;

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
					//videoElement.volume = 0;

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
						//videoElement.currentTime = 0;
						//videoElement.pause();

						// If video is a lecture video, broadcast finish event
						if($attr.lecture) {
							console.log('Lecture ended! Woohoo!');
							$scope.$emit('LectureEndedEvent');
						}		
					});
					
					$element[0].oncanplaythrough = function() {
						console.log('Video loaded: ' + $element[0].src);
						$scope.videoLoaded = true;
						//console.log('Parent: ' + $scope.$parent);
						$scope.$parent.videoLoaded = true;
						$scope.$parent.$apply(); // to make the 'Please wait' statement disappear
					};

					$scope.$on('PauseLecture', function() {
						$element[0].pause();
						//videoElement.pause();
					});
				};
			}
		};	
	}];

	angular.module('vettingToolApp')
	.directive('videoPlayer', videoPlayer);
})();