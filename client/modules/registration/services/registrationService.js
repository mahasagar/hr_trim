angular.module('registrationServices', [])

    .service('RegistrationService', function(Common) {

        var getUserDetails = function(req, callback) {
            var method = 'GET';
            var URL = "/api/user";
            Common.callAPI(method,URL,req,function(response){
                if(response.data.status){
                    callback(null,response.data);
                }else{
                    callback(null,false);
                }
            });
        };
        var changePassword = function(req, callback) {
            var method = 'PUT';
            var URL = "/api/user";
            Common.callAPI(method,URL,req,function(response){
                if(response.data.status){
                    callback(null,response.data);
                }else{
                    callback(null,false);
                }
            });
        };


        return {
            getUserDetails:  getUserDetails,
            changePassword : changePassword
        }
    });