var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
	comment: String,
	_post: {type: Schema.ObjectId, ref: "Post"},
	name: String,
	vote_count: Number,
	flag_count: Number,
	created_at: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Comment', CommentSchema);