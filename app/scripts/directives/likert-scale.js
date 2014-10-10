'use strict';

(function(){
	function likertScale() {
		return {
			restrict: 'E',
			scope: {
			},
			replace: true,
			//template:'<video controls></video>',
			templateUrl:'scripts/directives/likert-scale.tpl.html',
			link: function() {
				//$element.attr('type', $attr.type);

				// if($attr.localpath){
				// 	$element.attr('src', $attr.localpath);
				// }
				// else {
				// 	$element.attr('src', FILE_HOST + $attr.path);
				// }

				// Turn off volumn by default
				//$element[0].volume = 0;
				console.log('Initializing likert scale');
			}	
		};	
	}

	angular.module('vettingToolApp')
	.directive('likertScale', likertScale);
})();