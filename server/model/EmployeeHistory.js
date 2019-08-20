'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var schema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId},
  toDate :  {type: Date},
  fromDate :  {type: Date},
  designation : {type : String},
  companyName : {type : String},
  companyAddress: {type : String},
  companyContact: {type : Number},
  references : [{
     name : {type : String},
     designation : {type : String},
     mobileNumber : { type: Number}
  }],
  createdBy:{type: mongoose.Schema.Types.ObjectId, require: true},
  createdDate: {type: Date, default: Date.now,require: true}
});

// Model
var model = mongoose.model('ShortURL', schema);

// Public API
module.exports = model;
