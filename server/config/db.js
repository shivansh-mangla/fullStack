const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/myApp';


const connectDB = async () => {
  try {
      await mongoose.connect(mongoURI);
      console.log('MongoDB connected');
  } catch (error) {
      console.error('MongoDB connection failed:', error.message);
      process.exit(1);
  }
};


module.exports = connectDB;
