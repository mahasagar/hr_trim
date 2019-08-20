'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var schema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId},
  shortId : {type : String},
  viewName : {type : String},
  data :   { type: Schema.Types.Mixed },
  email :  {type : String},

  expiredDate : {type: Date},
  createdBy:{type: mongoose.Schema.Types.ObjectId, require: true},
  createdDate: {type: Date, default: Date.now,require: true}
});

// Model
var model = mongoose.model('ShortURL', schema);

// Public API
module.exports = model;
