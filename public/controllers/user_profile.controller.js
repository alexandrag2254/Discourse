
//userprofile controller
mainApplicationModule.controller('UserProfileController', function($scope, $routeParams, $location, UserProfileFactory){
	// console.log($scope.authentication);
	// console.log($scope.authentication.user._id);
	console.log("I am in the UP controller");
	console.log($scope.authentication)
	if ($scope.authentication.user == null)
	{
		$location.path("/signin");
	}


	
	UserProfileFactory.getUser($scope.authentication.user._id, function(data){
		$scope.realname = data[0].name;
		$scope.info = data[0];
		 //console.log("The name is", $scope.realname);
	});
	


	$scope.editdescription = function(id){
		UserProfileFactory.editEmail(id, $scope.new_description);
	};


	// console.log("HHIIIIII", $scope.authentication.user);

	if ($scope.authentication.user == null){
		$location.path("/signin");
	}

	else{
	//ability to update email if user is admin or moderator

		if ($scope.authentication.user.level == "admin") {
			console.log("it is true");
			$scope.admin_access = true
		} else {
			console.log("it is false");
			$scope.admin_access = false
		}
	}

	//$scope.admin_access = true;
});