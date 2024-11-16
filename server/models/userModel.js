const mongoose = require('mongoose');

// Define schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, default: 0 },
});

// Create model
const User = mongoose.model('UserHahah', userSchema);

module.exports = User;
