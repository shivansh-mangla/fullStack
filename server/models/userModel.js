const mongoose = require('mongoose');

// Define schema for Users
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  comments: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'} ], // Reference to comments
  posts: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Post'} ] // Reference to posts
}, { timestamps: true });

// Create model for Posts
const User = mongoose.model('User', userSchema);  // Automatically creates a collection by the name 'users'

module.exports = User;
