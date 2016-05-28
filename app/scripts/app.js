'use strict';

/**
 * @ngdoc overview
 * @name dothello
 * @description
 * # dotHelloWorld
 *
 * Main module of the application.
 */
angular
  .module('dothello', [
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function($routeProvider){
    $routeProvider
    .when('/home',{
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo:'/home'
    });
  });
