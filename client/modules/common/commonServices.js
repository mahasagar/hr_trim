
/*global moment*/
angular.module('commonServices', [])
    .filter('formatDate', function() {
        return function(input,format) {
            if (input !== null) {
                return  moment(input).format(format);
            }
        };
    })
    .factory('Common', function ($http) {
        var common = {};
        common.callAPI = function(method,URL,param,callback) {
            if(method === "GET"){
                $http({
                    method: 'GET',
                    url: URL,
                    params : param
                }).then(function success(response) {
                    callback(response);
                }, function error(response) {
                    callback(null);
                });
            }else if(method === "POST") {
                $http.post( URL, param).then(function (data,error) {
                    if (error) {
                        callback(null);
                    } else {
                        callback(data);
                    }
                })
            }else if(method === "PUT") {
                 $http.put( URL, param).then(function (data,error) {
                     if (error) {
                         callback(null);
                     } else {
                         callback(data);
                     }
                 })
            }else{
                callback({error : 'No Method Found'});
            }
        };
        return common;
    });