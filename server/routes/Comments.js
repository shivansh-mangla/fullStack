const express = require('express');
const router = express.Router();
const Posts = require('../models/postModel');
const Comments = require('../models/commentModel');

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const myPost = await Posts.findById(postId).populate('comments');
  const commentsArray = myPost.comments;
  res.json(commentsArray);
});

router.post("/:postId", async(req, res) => {
  const postId = req.params.postId;
  const commentData = req.body;
  commentData.postId = postId;
  const newComment = new Comments(commentData);
  console.log(newComment);
  const savedComment = await newComment.save();

  const updatedPost = await Posts.findByIdAndUpdate(
    postId,
    { $push: { comments: savedComment._id } }
  );

  res.json(savedComment);
});


module.exports = router;