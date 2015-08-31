//userprofile controller
mainApplicationModule.controller('ChapterProfileController', function($scope, $routeParams, $location, ChapterProfileFactory){

	console.log("I am in the UP controller");
	console.log("routeParams", $routeParams);


	ChapterProfileFactory.getChapter($routeParams, function(data){
		$scope.chapter = data[0];
		 console.log($scope.chapter);


	});

	$scope.editEmail = function(id){
		// ChapterProfileFactory.editEmail(id, $scope.new_email);
	};

	$scope.newImage = function(){
		$scope.chapter.img_url = $scope.new_image.img_url;
		$scope.new_image.img_url = "";
		// ChapterProfileFactory.newImage()
	} 

	//updating description if user is admin or moderator
	if ($scope.authentication.user == null){
		$location.path("/signin");
	}

	else{
	//ability to update email if user is admin or moderator
		if ($scope.authentication.user.level == "admin") {
			console.log("it is true");
			$scope.admin_access = true;
		} else {
			console.log("it is false");
			$scope.admin_access = false
		}
	}

	$scope.addMember = function() {
		ChapterProfileFactory.addMember($scope.add);
	}

});