var Schema = mongoose.Schema;

var chapterSchema = new mongoose.Schema({
	chapter_name: String,
	chapter_email: String,
	location: String,
	state: String,
	country:String,
	description: String,
	logo_url: String,
	status: String,
	years_active: String,
	amount_raised: Number,
	rescued_count: Number,
	img_url: String,
	created_at: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Chapter', ChapterSchema);