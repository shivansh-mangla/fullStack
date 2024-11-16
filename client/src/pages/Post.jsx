import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Post(){

  let { id } = useParams();

  const [myPost, setMyPost] = useState("");

  const [commentsList, setCommentsList] = useState([]);

  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/myPosts/byId/${id}`).then((response) => {
      console.log(response.data);
      setMyPost(response.data);
    })
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/myComments/${id}`).then((response) => {
      console.log(response.data);
      setCommentsList(response.data);
    })
  }, []);

  const addComment = (data) => {
    axios.post(`http://localhost:3001/myComments/${id}`, {commentBody: newComment}).then((response) => {
      console.log("Comment added:", response.data);

      // Update commentsList without reloading
      setCommentsList((prevComments) => [...prevComments, response.data]);
      setNewComment("");
    });
  };

  return (
    <div className="post">
      <div className="title">
        {myPost.title}
      </div>
      <div className="body">
        {myPost.postText}
      </div>
      <div className="footer">
        {myPost.username}
      </div>
      <div className="add-comment-container">
        <input type="text" placeholder='Add comment...' onChange={(event)=>{setNewComment(event.target.value)}} value={newComment}/>
        <button type='submit' onClick={addComment}>Add Comment</button>
      </div>
      {commentsList.map((value, index) =>{
        return (
          <div className="comment" key={index}>
            <div className="comment-date">{value.createdAt}</div>
            <div className="comment-body">{value.commentBody}</div>
          </div>
          );
      })}
    </div>
  );
}

export default Post;