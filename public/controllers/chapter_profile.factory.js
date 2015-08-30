//chapter_profile factory
mainApplicationModule.factory('ChapterProfileFactory', function($http){
	var factory = {};

	factory.editdescription = function(info) {
		var description = info.description;
		console.log(info);
		// $http.post('/edit_email', info).success(function(output){
		// 	console.log(output);
		// });	
	};

	factory.addMember = function(info) {
		// $http.post('/add_member', info).success(function(output){
		// 	console.log(output);
		// });
	}

	console.log("I am in the UP factory");
	return factory;
});