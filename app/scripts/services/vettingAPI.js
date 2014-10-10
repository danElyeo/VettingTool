'use strict';

(function() {
	function VettingAPI() {

		var vettingAPI = {};

		vettingAPI.questions = [];
		vettingAPI.answers = [];

		return vettingAPI;
	}

	angular.module('vettingToolApp')
	.factory('VettingAPI', VettingAPI);
})();