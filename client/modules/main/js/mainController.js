angular.module('HomePage', [])
    .controller('homeCtrl', function ($scope,$timeout,$rootScope,$state,Main,$stateParams) {
        console.log('homeCtrl')
        function getFeeds(){

        };
        console.log('$stateParams:  '+JSON.stringify($stateParams));
        if($stateParams.shortId){
            var shortIdParam = {
                shortId : $stateParams.shortId
            };
            Main.getShortId(shortIdParam,function (err,result) {
                if(result){
                    if(result.response && result.response.viewName === "REGISTRATION"){
                       console.log('getShortId:  '+JSON.stringify(result.response.viewName));
                        $state.go('app.registration',{userId : result.response.userId});
                    }
                }
            });
        }
        getFeeds();

    });