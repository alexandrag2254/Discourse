var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
	post: String,
	category: String,
	title: String,
	name: String,
	pin: Boolean,
	chapter: String,
	comments: [{type: Schema.Types.ObjectId, ref: "Comment"}],
	vote_count: Number,
	flag_count: Number,
	created_at: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Post', PostSchema);