'use strict';


var todoApp = angular.module('todo', [
  'ngRoute',
  'todoControllers',
  'todoFilters'
]);


todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/notes', {
        templateUrl: 'partials/todo-list.html',
        controller: 'todoListCtrl'
      }).
      when('/note/:noteId', {
        templateUrl: 'partials/note-detail.html',
        controller: 'NoteDetailCtrl'
      }).
      otherwise({
        redirectTo: '/notes'
      });
  }]);





