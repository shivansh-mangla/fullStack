const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  commentBody: { type: String, required: true },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true } // Reference back to the post
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;