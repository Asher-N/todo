'use strict';

/* Controllers */

var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('todoListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.notes = data;
    });

    $scope.orderProp = 'age';
  }]);

todoControllers.controller('NoteDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }]);
