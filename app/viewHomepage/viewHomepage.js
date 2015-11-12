'use strict';

angular.module('myApp.viewHomepage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewHomepage', {
    templateUrl: 'viewHomepage/viewHomepage.html',
    controller: 'ViewHomepageCtrl'
  });
}])

.controller('ViewHomepageCtrl', [function() {

}]);