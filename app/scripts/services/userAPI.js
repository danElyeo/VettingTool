'use strict';

(function() {
	var UserAPI = ['$http', '$cookieStore', '$location', '$rootScope', function($http, $cookieStore, $location, $rootScope) {
		var userAPI = {};

		//userAPI.user_id = null;
		userAPI.user_id = null; 	// stores the user_id
		userAPI.username = ''; // stores the username

		if($cookieStore.get('deafine_user') !== undefined) {
			userAPI.username = $cookieStore.get('deafine_user');
		}
		

		// If login is successful, store current user session in cookies
		userAPI.login = function(user, pass) {
			//userAPI.username = user;
			//$http.post('http://ec2-54-86-73-168.compute-1.amazonaws.com:5000/user/login', {username:user, password:pass}).success(function(data) {
			$http.post('http://ec2-54-86-73-168.compute-1.amazonaws.com:5000/user/login', 
			{	
				"username":user, 
				"password":pass
			})
			.success(function(data) {
				console.log('Login successful.');
				console.log('Login data: ' + JSON.stringify(data));
				userAPI.user_id = data.user_id;
				console.log('Current user id: ' + userAPI.user_id);

				$cookieStore.put('deafine_user', user);
				console.log($cookieStore.get('deafine_user') + ' is the current user');
				$rootScope.currentUser = $cookieStore.get('deafine_user');
				userAPI.username = user;

				$location.path('/topics');
			})
			.error(function(data, status, headers, config) {
				    // called asynchronously if an error occurs
				    // or server returns response with an error status.
			});

		};

		return userAPI;
	}];

	angular.module('vettingToolApp')
	.factory('UserAPI', UserAPI);
})();