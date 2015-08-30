//userprofile controller
mainApplicationModule.controller('ChapterProfileController', function($scope, $routeParams, $location, ChapterProfileFactory){

	console.log("I am in the UP controller");
	console.log("routeParams", $routeParams);

	ChapterProfileFactory.getChapter($routeParams, function(data){
		$scope.chapter = data[0];
		// console.log($scope.chapter);
	});

	$scope.editEmail = function(id){
		ChapterProfileFactory.editEmail(id, $scope.new_email);
	};

	//updating description if user is admin or moderator
	// if ((user.level == "admin") || (user.level == "moderator" && user.chapter == currentChapter)){
	// 	admin_access = false
	// } else {
	// 	admin_access = true
	// }

	$scope.admin_access = true;

	$scope.addMember = function() {
		ChapterProfileFactory.addMember($scope.add);
	}

});