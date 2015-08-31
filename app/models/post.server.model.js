var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
	post: String,
	category: String,
	title: String,
	pin: Boolean,
	user: {type: Schema.Types.ObjectId, ref: 'User'},
	chapter: {type: Schema.Types.ObjectId, ref: "Chapter"},
	comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
	vote_count: Number,
	flag_count: Number,
	created_at: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Post', PostSchema);