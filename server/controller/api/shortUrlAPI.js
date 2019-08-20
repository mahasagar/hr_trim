var ShortURL = require('../../model/ShortURL');
var Messages = require('../../validation/messages');
var Common = require('../../util/common');
var ObjectId = require('mongoose').Types.ObjectId;

function createShortUrl(reqParam) {
    var result = {
        status : false
    };
    //TODO : Add JSON Validator
    ShortURL.create(reqParam,function (err, response) {
        if (response){
            result.message = Messages.shortUrlAdded;
            //send Email
            console.log('email :'+response.email +'----- ShortId : '+response.shortId);
            console.log('Link : http://localhost:3000/registration/'+response.shortId);
            result.status = true;
        }else{
            result.message = Messages.shortUrlFailed;
        }
        // TODO : Logger to be added
    });
}

function getShortUrl(req,res){
     var result = {
        status : false
    };
    var reqParam = req.query;
    var findQuery = {
        shortId : reqParam.shortId
    };
    ShortURL.findOne(findQuery, function (err, responseData) {
        if (responseData) {
            result.response = responseData;
            result.status = true;
            res.status(200);
            res.json(result);
        } else {
            result.message = Messages.noDataFound;
            res.status(200);
            res.json(result);
        }
    });
}


module.exports.createShortUrl = createShortUrl;
module.exports.getShortUrl = getShortUrl;