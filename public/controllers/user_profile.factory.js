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

	console.log("I am in the UP factory");
	return factory;
});