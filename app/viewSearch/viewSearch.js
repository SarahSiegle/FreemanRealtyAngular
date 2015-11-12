'use strict';

angular.module('myApp.viewSearch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewSearch', {
    templateUrl: 'viewSearch/viewSearch.html',
    controller: 'ViewSearchCtrl'
  });
}])

.controller('ViewSearchCtrl', [function() {

}]);