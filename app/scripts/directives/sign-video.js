'use strict';

(function(){
	var signVideo = ['FILE_HOST', function(FILE_HOST) {
		return {
			restrict: 'E',
			scope: {
				path:'@path',
				localpath:'@'
			},
			replace: true,
			template:'<video></video>',
			//templateUrl:'scripts/directives/sign-video.tpl.html',
			link: function($scope, $element, $attr) {
				$element.attr('type', $attr.type);

				if($attr.localpath){
					//console.log('Localpath exists. It is ' + $attr.localpath);
					$element.attr('src', $attr.localpath);
				}
				else {
					$element.attr('src', FILE_HOST + $attr.path);
					//console.log('Path is remote: ' + $element.attr('src'));
				}

				$scope.$watch('localpath', function() {
					//console.log('Path changed!');
					$element.attr('src', $attr.localpath);
				});

				// Turn off volumn by default
				$element[0].volume = 0;
				
				//Play video when mouse over
				$element.on('mouseover', function() {
					$element[0].play();
				});

				// Reset video when mouse leave
				$element.on('mouseout', function() {
					$element[0].pause();
					$element[0].currentTime = 0;
				});	
			}	
		};	
	}];
	// function signVideo(FILE_HOST) {
	// 	return {
	// 		restrict: 'E',
	// 		scope: {
	// 			path:'@path',
	// 			localpath:'@'
	// 		},
	// 		replace: true,
	// 		template:'<video></video>',
	// 		//templateUrl:'scripts/directives/sign-video.tpl.html',
	// 		link: function($scope, $element, $attr) {
	// 			$element.attr('type', $attr.type);

	// 			if($attr.localpath){
	// 				//console.log('Localpath exists. It is ' + $attr.localpath);
	// 				$element.attr('src', $attr.localpath);
	// 			}
	// 			else {
	// 				$element.attr('src', FILE_HOST + $attr.path);
	// 				//console.log('Path is remote: ' + $element.attr('src'));
	// 			}

	// 			$scope.$watch('localpath', function() {
	// 				//console.log('Path changed!');
	// 				$element.attr('src', $attr.localpath);
	// 			});

	// 			// Turn off volumn by default
	// 			$element[0].volume = 0;
				
	// 			//Play video when mouse over
	// 			$element.on('mouseover', function() {
	// 				$element[0].play();
	// 			});

	// 			// Reset video when mouse leave
	// 			$element.on('mouseout', function() {
	// 				$element[0].pause();
	// 				$element[0].currentTime = 0;
	// 			});	
	// 		}	
	// 	};	
	//}

	angular.module('vettingToolApp')
	.directive('signVideo', signVideo);
})();