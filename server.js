/*
* More details here http://mongoosejs.com/docs/queries.html
*/

//require mongoose model defines in model/blog.js (see Files)
var BlogPost = require("./model/blog");

//Find one blog post by this
// BlogPost.findOne({author: "rjjm"}, function(err, doc) {
// 	if (err) {
// 		return err
// 	}
// 	else {
// 		console.log(doc);
// 	}
// });

function getpost(params, res){
	BlogPost.findOne(params, function(err, doc){
		if (err || !(doc))
			res.send({'error': err});
		else
			res.send(doc);
	});
}

var express = require('express');
var app = express();
app.use(express.bodyParser());

app.get('/', function(req, res){
	res.send('Please give us an author');
});

app.get('/authors(/:author)', function(req, res){
	if (req.params.author)
		getpost({author: req.params.author}, res);
	else
		res.send({err: 'no author specified'});
});


app.get('/posts/:id', function(req, res){
	getpost({_id: req.params.id}, res);
});

// app.post('/post', function(req, res))

app.listen(3000);