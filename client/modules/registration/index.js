angular.module('appRegistration', ['registrationCtrlJs','registrationServices'])

    .config(function ($stateProvider) {
        $stateProvider
            .state('app.registration', {
                url: "/registration/{userId:[a-zA-Z0-9_-]{1,20}}",
                controller:'RegistrationCtrl',
                templateUrl: "modules/registration/template/registration.html"
            })
    });
