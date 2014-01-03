/*
* This file is called by package.json's postinstall script to create a new blog post entry
*/

//require mongoose model defines in model/blog.js (see Files)
var BlogPost = require("./model/blog");

//create new model
var post = new BlogPost({title: "Simon's first line", author: "rjjm", 
													body: "There is only one Roderic Moulé, and you are not he!"});

//save model to MongoDB
post.save(function (err) {
  if (err) {
	process.exit(1);
  }
  else {
  	process.exit(0);
  }
});

