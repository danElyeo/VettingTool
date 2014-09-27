'use strict';

(function() {
	function TopicAPI() {

		var topicAPI = {};

		topicAPI.topics = [];

		// Process all the lectures to extract and group lectures by topics 
		topicAPI.setTopics = function(lectures) {
			// For each e
			lectures.forEach(function(entry) {
				var topicExists = topicAPI.topics.indexOf(entry.topic);

				// If it topic is not in array, add it to the array
				if(topicExists < 0) {
					topicAPI.topics.push(entry.topic);
				}
			});

			console.log('Total number of topics: ' + topicAPI.topics.length);
			console.log('Topics: ' + JSON.stringify(topicAPI.topics));
		};

		return topicAPI;
	}

	angular.module('vettingToolApp')
	.factory('TopicAPI', TopicAPI);
})();