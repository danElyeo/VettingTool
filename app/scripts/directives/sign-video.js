'use strict';

(function(){
	function signVideo(FILE_HOST) {
		return {
			restrict: 'E',
			scope: {
				path:'@path'
			},
			replace: true,
			template:'<video></video>',
			//templateUrl:'scripts/directives/sign-video.tpl.html',
			link: function($scope, $element, $attr) {
				$element.attr('type', $attr.type);
				$element.attr('src', FILE_HOST + $attr.path);
				//$attr.src = FILE_HOST + $attr.src ;
				//console.log('SRC: ' + $element.attr('src'));
				// Play video when mouse over
				// $element.on('mouseover', function() {
				// 	console.log('Video Mouse over!');
				// 	$element[0].play();
				// });
			}	
		};	
	}

	angular.module('vettingToolApp')
	.directive('signVideo', signVideo);
})();