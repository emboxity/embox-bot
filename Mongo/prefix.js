const mclient = require('mongodb').mclient
const mongoose = require('mongoose');
const { Schema } = mongoose;

const testSchema = new Schema({
  prefix: String, // String is shorthand for {type: String}
  Guild: String,
});
module.exports = mongoose.model('testSchema', testSchema)