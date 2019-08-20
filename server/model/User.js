var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
// Schema
var schema = new mongoose.Schema({
    username: {type: String},
    password: {type: String},

    name: {type: String},
    dateOfBirth :  {type: Date},
    email: { type: String},
    mobileNumber : [{ type: Number}],
    address : {
        fullAddress : { type : String },
        city : { type : String },
        pincode : { type : Number },
    },
    roles :  {type: [String] ,enum : ['ADMIN','HR','EMPLOYEE'], default : 'EMPLOYEE'},
    designation : {type : String},
    status: {type: String, default:'ACTIVE', enum:['ACTIVE','IN_ACTIVE','LEFT','BLOCKED']},
    panNumber:  { type: String},

    joiningDate : {type: Date},
    confirmationDate :  {type: Date},
    leavingDate : {type: Date},

    bloodGroup : { type: String},
    maritalStatus :  { type: String},
    probationPeriod : { type: Number}, // in months
    socialPortal : [
        {
            name :{type : String}, //LinkedIn
            link : {type : String}
        }
    ],
    bankDetails: {
        holderName:{type : String},
        accountType : {type : String},
        bankName:{type : String},
        branchName : {type : String},
        accountNumber:{type : Number},
        ifscCode:{type : String}
    },

    updatedAt: {type: Date},
    createdDate: {type: Date, require: true, default: Date.now}
});

// Model
var model = mongoose.model('Users', schema);

// Safe JSON (internal data removed)
function getSafeJSON(user) {
    var user = user.toJSON();
    delete user.__v;
    if (user.password) {
        delete user.password;
    }
    return user;
};

// Public API
module.exports = model;
module.exports.getSafeJSON = getSafeJSON;
