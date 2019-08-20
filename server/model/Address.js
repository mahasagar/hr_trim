'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var schema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId},
  addressType : {type: String, default:'PRESENT', enum:['PERMANENT','CONTACT','EMERGENCY']},
  fullAddress : { type: String },
  contactNo : { type: Number},
  documents :  {type: [mongoose.Schema.Types.ObjectId ]}, //document collection id

  createdBy:{type: mongoose.Schema.Types.ObjectId, require: true},
  createdDate: {type: Date, default: Date.now,require: true}
});

// Model
var model = mongoose.model('Address', schema);

// Public API
module.exports = model;
