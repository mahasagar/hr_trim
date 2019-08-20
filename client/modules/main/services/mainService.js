angular.module('mainServices', [])

    .service('Main', function(Common) {

        var addFeeds = function(req, callback) {
            var method = 'POST';
            var URL = "/api/feed";
            Common.callAPI(method,URL,req,function(response){
                if(response.data.status){
                    callback(null,response.data.message);
                }else{
                    callback(null,false);
                }
            });
        };

        var getFeeds = function(req, callback) {
            var method = 'GET';
            var URL = "/api/feed";
            Common.callAPI(method,URL,req,function(response){
                if(response.data.status){
                    callback(null,response.data);
                }else{
                    callback(null,false);
                }
            });
        };

        var getShortId = function(req, callback) {
            var method = 'GET';
            var URL = "/api/shortUrl";
            Common.callAPI(method,URL,req,function(response){
                if(response.data.status){
                    callback(null,response.data);
                }else{
                    callback(null,false);
                }
            });
        };

        return {
            addFeeds : addFeeds,
            getShortId:  getShortId,
            getFeeds : getFeeds
        }
    });