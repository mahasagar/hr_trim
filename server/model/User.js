var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
// Schema
var schema = new mongoose.Schema({
    userCount : { type : Number },
    updatedAt: {type: Date, default: Date.now},
    createdDate: {type: Date, require: true, default: Date.now}
});

// Model
var model = mongoose.model('Users', schema);

// Public API
module.exports = model;
