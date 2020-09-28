var requireDir = require('require-dir');
var controllers = requireDir('./controller/api');

module.exports.register = function (router) {
    // ADD API
    router.route('/user_count').get(controllers.userAPI.getUserCount);

};