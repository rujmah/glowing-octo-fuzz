process.NODE_ENV 						= 'test';

var 
		port 				= 4433 
		, expect 		= require('expect.js')
		, should 		= require('should')
		, supertest = require('supertest')
		, app
		, request
		;


describe('routes test', function(){
	this.timeout(5000);

	before(function(done){
		// start the app
		app 		= require('../server').listen(port);
		request = supertest(app);
		done();
	})

	after(function(){
  	app.close();
  })

	describe('routes', function () {
		it('get root', function(done) {
			request
				.get('/')
				.end(function(err, res) {
					expect(res.status).to.be(200);
					expect(err).to.be(null);
					done();
				});
		});
	});
});
