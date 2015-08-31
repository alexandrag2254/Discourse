//user_profile factory
mainApplicationModule.factory('UserProfileFactory', function($http){
	var factory = {};

	factory.editEmail = function(info) {
		var email = info.email;
		console.log(info);
		// $http.post('/edit_email', info).success(function(output){
		// 	console.log(output);
		// });	

	};

	factory.getUser = function(id, callback) {
		console.log(id)
		$http.get('/get_user/'+id).success(function(output){
			 console.log(output);
			callback(output);
		});
	};

	console.log("I am in the UP factory");
	return factory;
});