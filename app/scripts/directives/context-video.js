// Context Video is a video element that plays from 
// a specified start and end time. 

'use strict';

(function(){
	var contextVideo = ['FILE_HOST', function(FILE_HOST) {
		return {
			restrict: 'E',
			scope: {
				path:'@', // path of the file
				localpath:'@',
				start:'@',
				end:'@'
			},
			replace: true,
			template:'<video></video>',
			//templateUrl:'scripts/directives/sign-video.tpl.html',
			link: function($scope, $element, $attr) {
				$element.attr('type', $attr.type);

				if($attr.localpath){
					//console.log('Localpath exists. It is ' + $attr.localpath);
					$element.attr('src', $attr.path);
				}
				else {
					$element.attr('src', FILE_HOST + $attr.path);
					//console.log('Path is remote: ' + $element.attr('src'));
				}

				//$element[0].currentTime = $scope.start;
				// $scope.$watch('localpath', function() {
				// 	//console.log('Path changed!');
				// 	$element.attr('src', $attr.localpath);
				// });

				// Turn off volumn by default
				$element[0].volume = 0;

				var interval;
				var contextPlayed = false;

				$scope.$on('PlayContextVideo', function() {
					console.log('Play context video event...');
					$element[0].currentTime = $scope.start;
					console.log('Start time is: ' + $scope.start);
					console.log('End time is: ' + $scope.end);
					//console.log($element[0]);
					$element[0].play();

					if(!contextPlayed) {
						contextPlayed = true;
						interval = setInterval(checkTime, 1000);
					}
					
				});

				function checkTime() {
					console.log('Time Check: ' + $element[0].currentTime);
					if($element[0].currentTime >= $scope.end) {
						console.log('Timer stop.');
						contextPlayed = false;
						$element[0].pause();
						$element[0].currentTime = $scope.start;
						clearInterval(interval);
					}
				}
				
				// Called by controller
				// function play(start_time) {
				// 	$element[0].currentTime = start_time;
				// 	console.log('Playing context video');
				// 	console.log('Start time is: ' + start_time);
				// }
			}	
		};	
	}];

	angular.module('vettingToolApp')
	.directive('contextVideo', contextVideo);
})();