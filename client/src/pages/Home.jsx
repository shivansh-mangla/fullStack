import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {

  const [listOfPosts, setListOfPosts] = useState([]);

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
          <div className="post">
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