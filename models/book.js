// book.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new mongoose.Schema({
     title: String,
     author: {
       type: Schema.Types.ObjectId,
       ref: 'Author'
     },
     image: String,
     release_Date: String
 });

 var Book = mongoose.model('Book', BookSchema);

 module.exports = Book;
