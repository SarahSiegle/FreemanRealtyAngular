'use strict';

angular.module('myApp.viewTestStuff', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewTestStuff', {
    templateUrl: 'viewTestStuff/viewTestStuff.html',
    controller: 'ViewTestStuffCtrl'
  });
}])

.controller('ViewTestStuffCtrl', [function() {

}]);