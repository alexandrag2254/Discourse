//admin controller
mainApplicationModule.controller('AdminController', function($scope, AdminFactory){

	//get all chapters on load
	AdminFactory.getChapters(function(data){
		console.log("in get chapters");
		console.log(data);
		$scope.chapters = data;
		// console.log($scope.chapter);
	});

	$scope.deleteChapter = function(id){

		if(confirm("Would you like to delete?") == true) {
			console.log("I want to delete");
			AdminFactory.deleteChapter(id);

		AdminFactory.getChapters(function(data){
			console.log("in get chapters");
			console.log(data);
			$scope.chapters = data;
			// console.log($scope.chapter);
		});

		} else {
			console.log("no");
		}
	};

	// updating description if user is admin or moderator
	// if ((user.level == "admin") || (user.level == "moderator" && user.chapter == currentChapter)){
	// 	admin_access = false
	// } else {
	// 	admin_access = true
	// }

	$scope.admin_access = true;

	$scope.newChapter = function() {
		// console.log($scope.new_c)
		AdminFactory.newChapter($scope.new_c);
		$scope.new_c = "";

		AdminFactory.getChapters(function(data){
		console.log("in get chapters");
		console.log(data);
		$scope.chapters = data;
		// console.log($scope.chapter);
	});
	}

});