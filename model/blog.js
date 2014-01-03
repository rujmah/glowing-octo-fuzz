/*
* More details here http://mongoosejs.com/docs/guide.html
*/

var mongoose = require("mongoose");

//connect to database
mdb = "mongodb://localhost:27017";

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

