'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var schema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId},
  name : { type: String },
  relation :  { type: String },
  contact : {type : Number},
  createdBy:{type: mongoose.Schema.Types.ObjectId, require: true},
  createdDate: {type: Date, default: Date.now,require: true}
});

// Model
var model = mongoose.model('ShortURL', schema);

// Public API
module.exports = model;
