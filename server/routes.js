var requireDir = require('require-dir');
var controllers = requireDir('./controller/api');
var Common = require('./util/common');


module.exports.register = function (router) {
    // ADD API
    router.route('/user').post(Common.validateRequest,controllers.userAPI.addUser);
    router.route('/user').get(Common.validateRequest,controllers.userAPI.getUser);

    router.route('/shortUrl').get(Common.validateRequest,controllers.shortUrlAPI.getShortUrl);

};