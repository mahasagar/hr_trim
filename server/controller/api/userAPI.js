var User = require('../../model/User');


function getUserCount(req,res){
     var result = {
        status : false,
        userCount : 0
    };
    User.findOne({}, async function (err, responseData) {
        if (responseData) {
            if(responseData.userCount == null){
                responseData.userCount = 0
            }
            responseData.userCount = responseData.userCount + 1;
            var userSaved = await responseData.save();
            if(userSaved){
                result.userCount = responseData.userCount;
                result.status = true;
            }
            res.status(200);
            res.json(result);
        } else {
            var reqParam = {
                userCount : 1
            };
            User.create(reqParam,function (err, response) {
                result.userCount = 1
                res.status(200);
                res.json(result);
            });
        }
    });
}

module.exports.getUserCount = getUserCount;
