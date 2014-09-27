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
          LectureData: function(LectureAPI) {
            return LectureAPI.getLectureData().success(function(data) {
              console.log('Resolved: Get Lecture Data...');
              return data.lectures;
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
