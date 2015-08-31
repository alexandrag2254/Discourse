mainApplicationModule.factory('Localfactory', function($http){
	factory ={};
	
	factory.topicAdd = function (topic){
		console.log(user);
        date = new Date();
        var data = {
          title: topic.title, 
          post: topic.text, 
          category: topic.cat,
          chapter: topic.chapter,
          user: topic.user,
          // name: user, //chapter is in user object
          // chapter: user.chapter, 
          created_date: date, 
          updated_date: date}
        console.log(data);
        $http.post('/topic_add', data).success(function(output){
            // orders = output;       
            // callback(orders);  
            alert("Your topic has been successfully added!") 
        });
      }

  factory.postsGet = function(chapter, callback){
  	   // console.log(chapter);
      $http.get('/topics_get', {params: {chapter: chapter}}).success(function (data) {
        console.log(data);
        topics = data;
        callback(topics);
      }) 
    }

  factory.gotoPost = function(post_id, callback){
      $http.get('/post_get', {params: {post_id: post_id}}).success(function (data) {
        post = data;
        callback(post);
      }) 
    }

  factory.commentsGet = function(post_id, callback){
      $http.get('/comments_get', {params: {post_id: post_id}}).success(function (data) {
         comments = data;
        callback(comments);
      }) 
    }  
  
  factory.commentAdd = function(comment) {
    $http.post('/comment_add', comment).success(function (data){

    })
  }

	return factory;
})
