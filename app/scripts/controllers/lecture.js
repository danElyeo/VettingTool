'use strict';

(function() {

	function LectureCtrl($scope, $routeParams, $log, $modal, LectureInfo) {
		console.log('Initializing Lecture Controller');

		$scope.lectureId = $routeParams.lectureId;
		console.log('LectureId: ' + $scope.lectureId);

		//console.log('LectureInfo: ' + JSON.stringify(LectureInfo.data));
		$scope.lectureInfo = LectureInfo.data;

		//$scope.items = ['item1', 'item2', 'item3'];

		$scope.openVettingModal = function(size) {
			var modalInstance = $modal.open({
				templateUrl: 'views/vetting-modal.html',
				controller: 'VettingModalCtrl',
				size: size,
				resolve: {
					QuestionItems: function ($http) {
				  		return $http.get('data/vetting-questions.json').success(function(data) {
				  			return data;
				  		});
					}
				}
			});

			modalInstance.result.then(function () {//selectedItem) {
				//$scope.selected = selectedItem;
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
	}

	angular.module('vettingToolApp')
	.controller('LectureCtrl', LectureCtrl);

})();