var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
var Chapter = mongoose.model('Chapter');

module.exports = (function() {
	return {

	topicAdd: function(req, res) {
    	console.log(req.body);
    // User.find({name: req.body.name}, function(err, user){
      // if(!user){
        var newpost = new Post(req.body);
          // {title: req.body.title,
          //  discuss: req.body.discuss,
          //  category: req.body.cat, 
          //  dateCreated: req.body.dateCreated,
          //  dateUpdated: req.body.dateUpdated,
          //  user: req.session.user
          // });
        newpost.save(function(err) {
        if(err) {
          console.log(err);
          } else {
          console.log(newpost.title + ' has been added!');
          // res.render('/index');
          }
        // })
      // } else{
      //     res.render('/main', {user: user})
      // }
    })},

    topicsGet: function(req,res){

    console.log('blahblah');
    console.log(req.query.chapter);
    var infotopic = {chapter: req.query.chapter};
    Post.find(infotopic, function(err, posts) {
    if(err) {
          console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully collected information of topic!');
          console.log(posts);
          // res.json(posts);
        }
      })
    	.populate('user')
    	// .populate('chapter')
  		.exec(function(err, posts) {

  		// Chapter.model.populate(posts, 'user.chapter', function(err, results){
    // 	 	console.log(results);
    // 	});

  		var options = {
      	path: 'user._chapter',
      	model: 'Chapter'
    	};

  			Post.populate(posts, options, function (err, result) {
     	 // res.json(result);
     	 	console.log(result);
     	 	res.json(result);
    		});

        });
	  },
   
   postGet: function(req,res){

    console.log('blahblah');
    console.log(req.query.post_id);
    var infopost = {_id: req.query.post_id};
    console.log(infopost);
    Post.findOne(infopost, function(err, posts) {
    if(err) {
          console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully collected information of topic!');
          // console.log(posts);
          // res.json(posts);
        }
      })
    	// .populate('comments')
    	.populate('user')
  		.exec(function(err, posts) {

       var options = {
        path: 'user._chapter',
        model: 'Chapter'
          };

        Post.populate(posts, options, function (err, result) {
       // res.json(result);
        console.log(result);
        res.json(result);
        });
    // 	res.json(posts);
        });

	  },

	commentAdd: function(req, res) {
    	console.log(req.body);
    // User.find({name: req.body.name}, function(err, user){
      // if(!user){
      	Post.findOne({_id: req.body._post}, function(err, post){
        // data from form on the front end
        var comment = new Comment(req.body);
        //  set the reference like this:
        post.comments.push(comment);
        // now save both to the 
        comment.save(function(err) {
           post.save(function(err){
        if(err) {
          console.log(err);
          } else {
          console.log(comment.comment + ' has been added!');
          }
    	})
       })	 
      })
    },

   commentsGet: function(req,res){
    console.log(req.query.post_id);
    var infoComment = {_post: req.query.post_id};
    console.log(infoComment);
    Comment.find(infoComment, function(err, comments) {
    if(err) {
          console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully collected information of topic!');
          console.log(comments);
          // res.json(posts);
        }
      })
    	.populate('user')
  		.exec(function(err, comments) {

	  		var options = {
	      	path: 'user._chapter',
	      	model: 'Chapter'
	    	};

  			Comment.populate(comments, options, function (err, result) {
     	 // res.json(result);
     	 	console.log(result);
     	 	res.json(result);
    		});
        });
	}
	
  }
})();

