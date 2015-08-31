var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');

module.exports = function(app) {
	// Setting up the local authentication
	app.route('/auth/signup').post(users.signup);
	app.route('/auth/signin').post(users.signin);
	app.route('/auth/signout').get(users.signout);

	app.get('/get_chapter/:chapter', function(req, res){
		// console.log(req.params.chapter);
    	users.get_chapter(req.params.chapter, res);
  });

	app.get('/delete_chapter/:id', function(req, res){
		console.log(req.params);
    	users.delete_chapter(req.params, res);
  });

	//getting chapters for admin page
	app.get('/get_chapters', function(req, res){
		// console.log("routes");
    	users.get_chapters(req, res);
  });

	app.get('/get_user/:id', function(req, res){
		 console.log(req.params);
    	users.get_user(req.params.id, res);
  });


	app.post('/new_chapter', function(req, res){
		// console.log(req.body);
    	users.new_chapter(req.body, res);
  });

	// Setting the facebook oauth routes
	app.route('/auth/facebook').get(passport.authenticate('facebook', {
		scope: ['email']
	}));
	app.route('/auth/facebook/callback').get(users.oauthCallback('facebook'));
};