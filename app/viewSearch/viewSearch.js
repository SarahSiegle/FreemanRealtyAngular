'use strict';

angular.module('myApp.viewSearch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewSearch', {
    templateUrl: 'view2/viewSearch.html',
    controller: 'ViewSearchCtrl'
  });
}])

.controller('ViewSearchCtrl', [function() {

}]);