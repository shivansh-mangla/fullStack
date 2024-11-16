const mongoose = require('mongoose');

// Define schema for Posts
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  postText: { type: String, required: true },
  username: { type: String, required: true },
}, { timestamps: true }); // Automatically adds `createdAt` and `updatedAt` fields

// Create model for Posts
const Post = mongoose.model('Post', postSchema);  // Automatically creates a collection by the name 'Posts'

module.exports = Post;

