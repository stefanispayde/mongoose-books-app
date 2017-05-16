// book.js
var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var BookSchema = new mongoose.Schema({
     title: String,
     author: String,
     image: String,
     release_Date: String
 });

 var Book = mongoose.model('Book', BookSchema);

 module.exports = Book;
