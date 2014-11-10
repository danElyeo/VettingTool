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
    'ngResource',
    'ngRoute',
    'ngCookies',
    'ui.bootstrap',
    'angular-loading-bar'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          loggedIn: ['$cookieStore', '$location', 'UserAPI', function($cookieStore, $location, UserAPI) {
            console.log('Resolving log in...');
            if($cookieStore.get('deafine_user') !== undefined) {
              console.log('User logged in previously...');
              UserAPI.username = $cookieStore.get('deafine_user');
              $location.path('/topics');
            } else {
              console.log('User is not logged in.');
            }
          }]
        }
      })
      .when('/topics', {
        templateUrl: 'views/topics.html',
        controller: 'TopicsCtrl',
        controllerAs: 'topic',
        resolve: {
          AssignedLectures: ['$cookieStore', '$location','LectureAPI', 'UserAPI', function($cookieStore, $location, LectureAPI, UserAPI) {
            if($cookieStore.get('deafine_user') !== undefined) {
              UserAPI.username = $cookieStore.get('deafine_user');
              return LectureAPI.getAssignedLectures().success(function(data) {
                console.log('Resolved: Get Lecture Data...');
                return data;
              });
            } else {
              $location.path('/');
            }
            // return LectureAPI.getAssignedLectures().success(function(data) {
            //   console.log('Resolved: Get Lecture Data...');
            //   return data;
            // });
          }]
        }
      })
      .when('/lecture/:lectureId', {
        templateUrl: 'views/lecture.html',
        controller: 'LectureCtrl',
        resolve: {
          LectureInfo: ['$route', 'LectureAPI', function($route, LectureAPI) {
            return LectureAPI.getLectureInfo($route.current.params.lectureId).success(function(data) {
              console.log('Resolved: Get Lecture Info');
              LectureAPI.currentLectureFile = data.lecture_path;
              console.log('Resolved lecture file: ' + LectureAPI.currentLectureFile);
              return data;
            });
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .config(['$sceDelegateProvider', function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
        'self',
        // Allow loading from our assets domain.  Notice the difference between * and **.
        'https://s3.amazonaws.com/**'
    ]);
  }])
  .constant('FILE_HOST', 'https://s3.amazonaws.com/ASLDeafine/')
  ;
