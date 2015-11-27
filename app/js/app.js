'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.viewHomepage',
  'myApp.viewAbout',
  'myApp.viewSearch',
  'myApp.viewContact', 
  'myApp.viewTestStuff',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      
      .otherwise({redirectTo: '/viewHomepage'});
}]);

