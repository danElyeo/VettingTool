'use strict';

(function() {
	var VettingAPI = [function() {
		var vettingAPI = {};

		vettingAPI.questions = [];
		vettingAPI.answers = [];

		return vettingAPI;
	}];
	// function VettingAPI() {

	// 	var vettingAPI = {};

	// 	vettingAPI.questions = [];
	// 	vettingAPI.answers = [];

	// 	return vettingAPI;
	// }

	angular.module('vettingToolApp')
	.factory('VettingAPI', VettingAPI);
})();