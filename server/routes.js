var requireDir = require('require-dir');
var controllers = requireDir('./controller/api');
var Common = require('./util/common');


module.exports.register = function (router) {
    // ADD API
    router.route('/user').post(Common.validateRequest,controllers.userAPI.addUser);
    router.route('/user').get(Common.validateRequest,controllers.userAPI.getUser);


    router.route('/login').post(Common.validateRequest,controllers.userAPI.login);
    router.route('/changePassword').put(Common.validateRequest,controllers.userAPI.changePassword);



    router.route('/shortUrl').get(Common.validateRequest,controllers.shortUrlAPI.getShortUrl);

};