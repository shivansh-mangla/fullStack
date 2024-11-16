const mongoose = require('mongoose');

// Define schema for Posts
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  postText: { type: String, required: true },
  username: { type: String, required: true },
  comments: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'} ] // Reference to comments
}, { timestamps: true });

// Create model for Posts
const Post = mongoose.model('Post', postSchema);  // Automatically creates a collection by the name 'Posts'

module.exports = Post;

