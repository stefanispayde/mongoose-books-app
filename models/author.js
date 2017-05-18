// author.js
var mongoose = require('mongoose');
var schema = mongoose.Schema

var AuthorSchema = new mongoose.Schema({
  name: String,
  alive: Boolean,
  image: String
});
//created Author model
var Author = mongoose.model('Author', AuthorSchema);
//exported Author model
module.exports = Author;
