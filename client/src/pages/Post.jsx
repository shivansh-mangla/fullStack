import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Post(){

  let { id } = useParams();

  const [myPost, setMyPost] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/myPosts/byId/${id}`).then((response) => {
      console.log(response.data);
      setMyPost(response.data);
    })
  }, []);

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
    </div>
  );
}

export default Post;