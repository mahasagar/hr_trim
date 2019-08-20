var User = require('../../model/User');
var Messages = require('../../validation/messages');
var Common = require('../../util/common');
var shortUrlAPI = require('./shortUrlAPI');
var ObjectId = require('mongoose').Types.ObjectId;

function sendRegistrationLink(userData){
     var shortId = Common.createShortUrl(userData.name);
     console.log('shortId:  '+shortId);
     var shortURLParam = {
         userId: userData._id,
         shortId : shortId,
         viewName : 'REGISTRATION',
         email :  userData.email
     };
     shortUrlAPI.createShortUrl(shortURLParam);
}

function addUser(req, res) {
    var result = {
        status : false
    };
    var reqParam = req.body;
    reqParam.roles = [reqParam.role];
   //TODO : Add Json Mapper
    User.create(reqParam,function (err, response) {
        if (response){
            result.message = Messages.empAddedSuccessfully;
            result.status = true;
            sendRegistrationLink(response);
            res.json(result);
        }else{
            if(err && err.errmsg && (err.errmsg.indexOf(Messages.userEmailIndex) > -1)){
                result.message = Messages.userAlreadyExistsMessage;
            }else{
                 result.message = Messages.empAddedFailed;
            }
            res.json(result);
        }
    });
}

function getUser(req,res){
     var result = {
        status : false
    };
    var reqParam = req.query;
    var findQuery = {
        _id : reqParam.userId
    };
    console.log('findQuery: ',findQuery);
    User.findOne(findQuery, function (err, responseData) {
        if (responseData) {
            result.response = User.getSafeJSON(responseData);
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

module.exports.addUser = addUser;
module.exports.getUser = getUser;
