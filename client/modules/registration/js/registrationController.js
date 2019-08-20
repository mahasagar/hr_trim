angular.module('registrationCtrlJs', [])
    .controller('RegistrationCtrl', function ($scope,$timeout,$rootScope,$state,RegistrationService,$stateParams) {
        console.log('RegistrationCtrl')
        console.log('$stateParams:  '+JSON.stringify($stateParams));
        if($stateParams.userId){
            var userParam = {
                userId : $stateParams.userId
            };
            RegistrationService.getUserDetails(userParam,function (err,result) {
                if(result){
                   $scope.userData = result.response;
                }
            });
        }

        $scope.changePassword = function(userData){
            RegistrationService.changePassword(userParam,function (err,result) {
                if(result){
                   $state.go('app.home');
                }
            });
        }
    });