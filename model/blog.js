/*
* More details here http://mongoosejs.com/docs/guide.html
*/

var mongoose = require("mongoose");

//connect to database
mdb = "mongodb://heroku:b8e3beea37de75b3784eb57664a65c94@dharma.mongohq.com:10063/app18406894";

if (process.MONGOHQ_URI)
  console("using MONGOHQ_URI");
if (process.MONGOLAB_URI)
  console("using MONGOLAB_URI");

var db = mongoose.connect(process.MONGOHQ_URI || process.MONGOLAB_URI || mdb);

//create schema for blog post
var blogSchema = new mongoose.Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

//compile schema to model
module.exports = db.model('blog', blogSchema)

