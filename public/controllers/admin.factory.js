//chapter_profile factory
mainApplicationModule.factory('AdminFactory', function($http){
	var factory = {};

	factory.getChapters = function(callback) {

		$http.get('/get_chapters').success(function(output){
			console.log(output);
			chapters = output;
			callback(chapters);
		});	
	};

	factory.deleteChapter = function(id) {
		// console.log("factory", id)
		$http.get('/delete_chapter/'+ id).success(function(output){
			console.log("success, deleted");
		});
	}

	factory.newChapter = function(chapter) {
		// console.log(chapter);
		$http.post('/new_chapter/', chapter).success(function(output){
			console.log(output);
			// callback(output);
		});
	}

	return factory;
});