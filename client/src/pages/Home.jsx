import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Home() {

  const [listOfPosts, setListOfPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/myPosts").then((response) => {
      console.log(response.data);
      setListOfPosts(response.data);
    })
  }, []);

  return(
    <>
      {listOfPosts.map((value, index) => {
        return (
          <div className="post" onClick={() => {navigate(`/post/${value._id}`)}} key={index}>
            <div className="title">
              {value.title}
            </div>
            <div className="body">
              {value.postText}
            </div>
            <div className="footer">
              {value.username}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Home;