const express = require('express');
const router = express.Router();
const User = require('../models/userModel');


router.get("/", (req, res) =>{
  res.send("Hello World");
});

router.post("/", async (req, res) => {
  const userData = req.body; // Access the data sent in the POST request

  // Log the incoming data
  console.log('Received Data:', userData);

  // Create a new document using the Mongoose model
  const newUser = new User(userData);

  // Save the document into MongoDB
  const savedUser = await newUser.save();

});

module.exports = router;