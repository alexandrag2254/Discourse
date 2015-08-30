
//userprofile controller
mainApplicationModule.controller('UserProfileController', function($scope, $location, UserProfileFactory){

	console.log("I am in the CP controller");

	$scope.editdescription = function(id){
		UserProfileFactory.editEmail(id, $scope.new_description);
	};

	//updating email if user is admin or moderator

	// if ((user.level == "admin") || (user.level == "moderator" && user.chapter == currentChapter)){
	// 	admin_access = true
	// } else {
	// 	admin_access = false
	// }

	$scope.admin_access = true;
});