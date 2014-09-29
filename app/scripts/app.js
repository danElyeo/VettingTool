'use strict';

/**
 * @ngdoc overview
 * @name vettingToolApp
 * @description
 * # vettingToolApp
 *
 * Main module of the application.
 */
angular
  .module('vettingToolApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/topics', {
        templateUrl: 'views/topics.html',
        controller: 'TopicsCtrl',
        controllerAs: 'topic',
        resolve: {
          AssignedLectures: function(LectureAPI) {
            return LectureAPI.getAssignedLectures().success(function(data) {
              console.log('Resolved: Get Lecture Data...');
              return data;
            });
          }
        }
      })
      .when('/lecture/:lectureId', {
        templateUrl: 'views/lecture.html',
        controller: 'LectureCtrl',
        resolve: {
          LectureInfo: function(LectureAPI, $route) {
            return LectureAPI.getLectureInfo($route.current.params.lectureId).success(function(data) {
              console.log('Resolved: Get Lecture Info');
              return data;
            });
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'https://s3.amazonaws.com/**'
    ]);
  })
  .constant('FILE_HOST', 'https://s3.amazonaws.com/ASLDeafine/')
  ;
