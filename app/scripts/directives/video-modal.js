'use strict';

(function(){
	var videoModal = [function() {
		return {
			restrict: 'E',
			replace:true,
			scope: {
				path:'@',
				format:'@'
			},
			templateUrl:'views/templates/video-modal.tpl.html',
			link: function($scope, $element) {
				//console.log('Launching custom modal');

				//$element.modal('show');
				$scope.videoLoaded = false;

				$scope.$on('openLectureVideo', function() {
					$scope.showModal();
				});

				$scope.$on('LectureEndedEvent', function() {
					console.log('Set lectureViewed to true');
					$scope.lectureViewed = true;
					$scope.$apply();
				});

				$element.on('hidden.bs.modal', function() {
					// When the modal is dismissed, make sure the video is paused
					$scope.$broadcast('PauseLecture');
				});

				// $element.on('load', function() {
				// 	$scope.videoLoaded = true;
				// 	console.log('Video loaded.');
				// 	//alert('Video loaded');
				// });

				$scope.showModal = function() {
					$element.modal('show');
				};
			}	
		};	
	}];

	angular.module('vettingToolApp')
	.directive('videoModal', videoModal);
})();