angular.module('appMain', ['HomePage','mainServices'])

    .config(function ($stateProvider,$urlRouterProvider,$locationProvider) {
        $stateProvider
            .state('app.home', {
                url: "/home/{shortId:[a-zA-Z0-9_-]{1,20}}",
                controller:'homeCtrl',
                templateUrl: "modules/main/template/main.html"
            })
    });
