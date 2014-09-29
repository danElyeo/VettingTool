'use strict';

(function(){
	function videoPlayer(FILE_HOST) {
		return {
			restrict: 'E',
			scope: {
				path:'@path',
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
				}

				// Turn off volumn by default
				$element[0].volume = 0;
			}	
		};	
	}

	angular.module('vettingToolApp')
	.directive('videoPlayer', videoPlayer);
})();