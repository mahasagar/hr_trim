'use strict';

var App = angular.module('hrApp', ['ui.router','commonServices','appMain','appRegistration']);

App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/app/home");
    $stateProvider
        .state('app', {
            url: "/app",
             abstract: true
        })
}]);

App.controller('appCtrl', function ($state) {
    $state.go('app.home');
});