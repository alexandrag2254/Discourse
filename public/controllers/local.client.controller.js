//local_post controller
mainApplicationModule.controller('LocalController', function($scope, $location, $routeParams, Localfactory){
	$scope.topic = {};
	$scope.posts = [];
	$scope.post = {};
	$scope.comments = [];
	$scope.comment = {};
	// var chapter_id = ....;
  console.log("Local controller was loaded");
  var user = $scope.authentication.user;

	// chapter_id = "55e277626bb9ed915ff91c07";
 
      if ($routeParams.id){
      		var post_id = $routeParams.id;
      		// console.log(post_id);
            factory.gotoPost(post_id, function(post){
            $scope.post = post;
            console.log($scope.post);
            factory.commentsGet(post_id, function(comments){
            	$scope.comments = comments;
            	console.log($scope.comments);
            })
          })
        } 
         else{
           console.log(user);
          factory.postsGet(user._chapter, function(data){
		      
          $scope.posts = data;
		     })	
          }

        factory.postsGet(user._chapter, function(data){
        console.log(data);  
          $scope.posts = data;
         }) 

     $scope.topicAdd = function (topic){
    // add to the array
      // var date = 
      // $scope.topic.dateCreated = new Date();
      if (topic.title.length < 7){
        $scope.error = 'Topic must have 7 characters';
        alert('Title must have 7 characters');
        console.log($scope.error);
        } else{
        topic.chapter = user._chapter;
        topic.user = user._id;
        console.log(topic);
        factory.topicAdd(topic,user);
      // clear the form values
        $scope.topic = {};
        // factory.topicList(function(data){
        // $scope.topics = data;
        // });
        }
  
      }

      $scope.addComment = function(comment, post) {
      		console.log(comment);
      	// console.log(post._id);
      	if (comment.comment.length < 2){
      	
        	$scope.error = 'Comment must have 2 characters';
        	alert('Comment must have 2 characters');
        	console.log($scope.error);
        } else {
        	comment._post = post._id;
	        comment.user = user._id;
	        console.log(comment);
	        factory.commentAdd(comment);
      // clear the form values
       		$scope.comment = {};

        }
  
      }





})