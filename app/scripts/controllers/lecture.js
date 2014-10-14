'use strict';

(function() {

	var LectureCtrl = ['$scope', '$rootScope', '$routeParams', '$log', '$modal', 'LectureInfo', 'TermAPI', 'LectureAPI',
	function($scope, $rootScope, $routeParams, $log, $modal, LectureInfo, TermAPI, LectureAPI) {
		console.log('Initializing Lecture Controller');

		// Variables
		console.log('Lecture file: ' + LectureInfo.data.lecture_path);
		$scope.lectureInfo = LectureInfo.data;
		LectureAPI.currentLectureFile = LectureInfo.data.lecture_path;

		$scope.activeVideoFile = null;

		$scope.lectureId = $routeParams.lectureId;
		console.log('LectureId: ' + $scope.lectureId);

		$scope.showModal = false;

		//$scope.lectureViewed = $rootScope.lectureViewed;

		$scope.termSelected = false;

		$scope.defVideoFile = null;
		$scope.signVideoFile = null;
		$scope.exVideoFile = null;

		$scope.exampleExists = true;
		$scope.definitionExists = true;

		// console.log('LectureInfo: ' + JSON.stringify(LectureInfo.data));
		//$scope.lectureInfo = LectureInfo.data;
		//$scope.activeVideoFile = $scope.lectureInfo.lecture_path;

		$scope.setActiveTerm = function(term) {
			TermAPI.setActiveTerm(term);
			$scope.termSelected = true;

			// Once a term has been selected, set all the appropriate video files
			//$scope.setSignVideo();
			$scope.signVideoFile = TermAPI.activeTerm.sign_video;
			$scope.defVideoFile = TermAPI.activeTerm.def_video;
			$scope.exVideoFile = TermAPI.activeTerm.ex_video;

			//console.log('Def: ' + TermAPI.activeTerm.def_video);
			//console.log('Ex: ' + TermAPI.activeTerm.ex_video);

			if(TermAPI.activeTerm.def_video === undefined) {
				$scope.definitionExists = false;
			}
			else {
				$scope.definitionExists = true;
			}

			if(TermAPI.activeTerm.ex_video === undefined) {
				$scope.exampleExists =  false;
			}
			else {
				$scope.exampleExists = true;
			}

			// Switch to sign video and play it.
			//$scope.playSignVideo();	
			document.getElementById('sign-tab').click();
		};

		$scope.playSignVideo = function() {
			console.log('Play sign video...');
			document.getElementById('signVideoPlayer').play();
		};

		$scope.playDefVideo = function() {
			console.log('Play definition video...');
			document.getElementById('defVideoPlayer').play();
		};

		$scope.playExVideo = function() {
			console.log('Play example video...');
			document.getElementById('exVideoPlayer').play();
		};

		// $scope.setSignVideo = function() {
		// 	//$scope.activeVideoFile = TermAPI.activeTerm.sign_video;
		// 	$scope.signVideoFile = TermAPI.activeTerm.sign_video;
		// };

		// // Set video player to the current term's definition video
		// $scope.setDefVideo = function() {
		// 	$scope.activeVideoFile = TermAPI.activeTerm.def_video;		
		// };

		// // Set video player to the current term's example video
		// $scope.setExVideo = function() {
		// 	$scope.activeVideoFile = TermAPI.activeTerm.ex_video;
		// };

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

		$scope.$on('LectureEndedEvent', function() { // called by video-player
			//console.log('Set lectureViewed to true');
			$rootScope.lectureViewed = true;
			$scope.$apply();
		});
		

	}];


	angular.module('vettingToolApp')
	.controller('LectureCtrl', LectureCtrl);

})();