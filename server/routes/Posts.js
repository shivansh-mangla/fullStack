const express = require('express');
const router = express.Router();
const Posts = require('../models/postModel');


// A basic GET request to get list of all Posts
router.get("/", async (req, res) =>{
  // res.send("Hello World");
  const listOfPosts = await Posts.find();
  res.json(listOfPosts);
});


// A basic POST request to add a new Post into database
router.post("/", async (req, res) => {
  const postsData = req.body; // Access the data sent in the POST request
  // Log the incoming data
  console.log('Received Data:', postsData);
  // Create a new document using the Mongoose model
  const newPost = new Posts(postsData);
  // Save the document into MongoDB
  const savedPost = await newPost.save();
});


router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const myPost = await Posts.findById(id);
  res.json(myPost);
});


module.exports = router;