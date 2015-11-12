'use strict';

angular.module('myApp.viewContact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewContact', {
    templateUrl: 'viewContact/viewContact.html',
    controller: 'ViewContactCtrl'
  });
}])

.controller('ViewContactCtrl', [function() {

}]);