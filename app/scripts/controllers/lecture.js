'use strict';

(function() {

	var LectureCtrl = ['$scope', '$routeParams', '$log', '$modal', 'LectureInfo', 'TermAPI', 'LectureAPI',
	function($scope, $routeParams, $log, $modal, LectureInfo, TermAPI, LectureAPI) {
		console.log('Initializing Lecture Controller');

		// Variables
		console.log('Lecture file: ' + LectureInfo.data.lecture_path);
		$scope.lectureInfo = LectureInfo.data;
		LectureAPI.currentLectureFile = LectureInfo.data.lecture_path;

		$scope.activeVideoFile = null;

		$scope.lectureId = $routeParams.lectureId;
		console.log('LectureId: ' + $scope.lectureId);

		//var modalInstance;

		$scope.showModal = false;

		// console.log('LectureInfo: ' + JSON.stringify(LectureInfo.data));
		//$scope.lectureInfo = LectureInfo.data;
		//$scope.activeVideoFile = $scope.lectureInfo.lecture_path;

		$scope.setActiveTerm = function(term) {
			TermAPI.setActiveTerm(term);

			// Once a term has been selected, video player shows the sign.
			$scope.setSignVideo();
		};

		$scope.setSignVideo = function() {
			$scope.activeVideoFile = TermAPI.activeTerm.sign_video;
		};

		// Set video player to the current term's definition video
		$scope.setDefVideo = function() {
			$scope.activeVideoFile = TermAPI.activeTerm.def_video;		
		};

		// Set video player to the current term's example video
		$scope.setExVideo = function() {
			$scope.activeVideoFile = TermAPI.activeTerm.ex_video;
		};

		// Opens up modal window to play lecture video
		$scope.openLectureVideo = function() {
			//console.log('Opening lecture video');
			$scope.$broadcast('openLectureVideo');
		};

		$scope.openVettingModal = function(size) {
			var modalInstance = $modal.open({
				templateUrl: 'views/vetting-modal.html',
				controller: 'VettingModalCtrl',
				size: size,
				resolve: {
					QuestionItems: ['$http', function ($http) {
				  		return $http.get('data/vetting-questions.json').success(function(data) {
				  			return data;
				  		});
					}]
				}
			});

			modalInstance.result.then(function (answers) {//selectedItem) {
				// Create JSON for answers and send to backend here.
				var objToSend = {
					'lectureId':$scope.lectureId,
					'termId':TermAPI.activeTerm.term_id,
					'answers':answers
				};

				console.log('Send to Backend: ' + JSON.stringify(objToSend));

			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};

	}];


	angular.module('vettingToolApp')
	.controller('LectureCtrl', LectureCtrl);

})();