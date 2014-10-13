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


				$scope.showModal = function() {
					$element.modal('show');
				};
			}	
		};	
	}];
	// function likertScale() {
	// 	return {
	// 		restrict: 'E',
	// 		scope: {
	// 			type:'@'
	// 		},
	// 		replace: true,
	// 		//template:'<video controls></video>',
	// 		templateUrl:'scripts/directives/likert-scale.tpl.html',
	// 		link: function($scope, $element) {
				
	// 			console.log('Initializing likert scale');
	// 			console.log('Checkbox: ' + $element[0].children[1].children[0]);

	// 			// How to get the question type?
	// 			//console.log('Parent: ' + $scope.parent);
	// 		}	
	// 	};	
	// }

	angular.module('vettingToolApp')
	.directive('videoModal', videoModal);
})();