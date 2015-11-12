'use strict';

angular.module('myApp.viewAbout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewAbout', {
    templateUrl: 'viewAbout/viewAbout.html',
    controller: 'ViewAboutCtrl'
  });
}])

.controller('ViewAboutCtrl', [function() {

}]);