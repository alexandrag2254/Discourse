var Local = require('../controllers/locals.server.controller');
	passport = require('passport');

module.exports = function(app, upload){

	app.get('/topics_get', function(req, res){
		Local.topicsGet(req, res);
	})

	app.post('/topic_add', function(req, res){
		Local.topicAdd(req, res);
	})

	app.get('/post_get', function(req, res){
		Local.postGet(req, res);
	})

	app.post('/comment_add', function(req, res){
		Local.commentAdd(req, res);
	})

	app.get('/comments_get', function(req, res){
		Local.commentsGet(req, res);
	})
}