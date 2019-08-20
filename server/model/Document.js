'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema
var schema = new mongoose.Schema({
  docType : {type: String},
  accessLevel : {type: String, enum : ['ALL','EMPLOYEE','ADMIN','HR']},
  documentLinks :  {type: [String]}, //cloudinary_link / azure_blob_link

  userId: {type: mongoose.Schema.Types.ObjectId},
  createdBy:{type: mongoose.Schema.Types.ObjectId, require: true},
  createdDate: {type: Date, default: Date.now,require: true}
});

// Model
var model = mongoose.model('Address', schema);

// Public API
module.exports = model;
