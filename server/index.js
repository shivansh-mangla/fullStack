const express = require('express');
const connectDB = require('./config/db');


const app = express();

app.use(express.json());
connectDB();

//Router
const postRouter = require('./routes/Posts');
app.use("/myPosts", postRouter);


app.listen(3001, ()=>{
  console.log("Server running on port 3001");
})