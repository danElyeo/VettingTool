'use strict';

(function() {
	var UserAPI = ['$http', function($http) {
		var userAPI = {};

		//userAPI.user_id = null;
		userAPI.user_id = 'jhenner';

		userAPI.login = function(user, pass) {
			//$http.post('http://ec2-54-86-73-168.compute-1.amazonaws.com:5000/user/login', {username:user, password:pass}).success(function(data) {
			$http.post('http://ec2-54-86-73-168.compute-1.amazonaws.com:5000/user/login{"username":"jhenner", "password":"asl123"}').success(function(data) {
				console.log('Login successful.');
				console.log('Login data: ' + JSON.stringify(data));
			});
		};

		// Just to get rid of the error
		//userAPI.user_id = "jhenner";

		return userAPI;
	}];

	angular.module('vettingToolApp')
	.factory('UserAPI', UserAPI);
})();