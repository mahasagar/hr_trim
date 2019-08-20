'use strict';

var apiParamValidation = require('./../validation/apiParamValidation');
var Ajv = require('ajv');
var ajv = new Ajv();

async function validateRequest(req,res,next) {
    var params = null;
    if(req.method === 'GET'){
        params = req.query;
    }else if(req.method === 'POST'){
        params = req.body;
    }else if(req.method === 'PUT'){
         params = req.body;
         if(req.params.id){
            params.id = req.params.id;
         }
     }
    var route = req.route.path.split('/');
    route = route[1].toUpperCase();
    var schema = apiParamValidation[route][req.method];
    var valid = await ajv.validate(schema, params);
    if (!valid) {
        var result = {
            status : false
        };
        var errorMessage = 'Unknown Error(Wrong paramters)';
        if(ajv.errors && ajv.errors[0] ){
            errorMessage =  ajv.errors[0].message;
            if(ajv.errors[0].dataPath && ajv.errors[0].dataPath !== ''){
                errorMessage = errorMessage + ' in \'' + ajv.errors[0].dataPath +'\'';
            }
        }
        result.message = errorMessage;
        res.status(400);
        res.json(result);
    }else{
        next();
    }
}

function createShortUrl(user_fullName){
    var str = user_fullName;
    if (str.length > 8) {
        str = str.substring(0, 8);
    }
    var shortIdName = str.replace(/ /g,'');
    function getGUID() {
        return shortIdName.toUpperCase() + 'xxxxxxxxxxxx'.replace(/[x]/g, function (c) {
            var num = (Math.random() * 8) | 0, v = c === 'x' ? num : (num & 0x2 | 0x6);
            return v.toString(8);
        });
    }
    var shortId = getGUID();
    return shortId;
}

exports.createShortUrl = createShortUrl;
exports.validateRequest = validateRequest;