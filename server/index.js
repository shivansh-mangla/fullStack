const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());
connectDB();

//Router
const postRouter = require('./routes/Posts');
app.use("/myPosts", postRouter);  // uses the route /myPosts

const commentRouter = require('./routes/Comments');
app.use("/myComments", commentRouter);


app.listen(3001, ()=>{
  console.log("Server running on port 3001");
})