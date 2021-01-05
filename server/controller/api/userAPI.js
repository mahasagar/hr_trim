var User = require('../../model/User');
var nodemailer = require('nodemailer');
var fs = require('fs');
require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};





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

var transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
        user: '',
        pass: ''
    }
});

function sendEmail(req,res){
    var result = {
       status : false
   };

   console.log('contact req.body------------',req.body);
   if (req.body.email == ""){
    res.status(200);
    result.message = "fromEmail field missing"
    res.json(result);
    return
   }
   var emailTemplate = require('./../orderPlaced.html');

   emailTemplate = emailTemplate.replace('NAME',req.body.name);
   emailTemplate = emailTemplate.replace('COMPANY_NAME',req.body.company_name);
   emailTemplate = emailTemplate.replace('PHONE',req.body.phone);
   emailTemplate = emailTemplate.replace('EMAIL',req.body.email);
   emailTemplate = emailTemplate.replace('MESSAGE',req.body.message);


   const mailOptions = {
    from: 'auramedilifeemails@gmail.com', // sender address
    to: 'chaudharisagard@gmail.com', // list of receivers
    subject: 'User Email', // Subject line
    html: emailTemplate,// plain text body
    generateTextFromHTML: true
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
    

  result.status = true
  res.status(200);
  res.json(result);
 });
 
}

module.exports.getUserCount = getUserCount;
module.exports.sendEmail = sendEmail;

