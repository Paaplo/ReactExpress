'use strict';
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
	title: String,
	text: String,
	created_by: String,
    created_at: {type: Date, default: Date.now}
});

var Post = mongoose.model('Post', postSchema);

export default Post;