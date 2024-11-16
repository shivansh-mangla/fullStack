# fullStack1
 Creating a full stack web application

# Steps 00->

1) Divide main folder into server and client

2) cd server

3) npm init

4) npm install express cors

5) create index.js in server folder

6) npm install nodemon (to automatically refresh and rerun server on saving)

7) do changes in package.json -> scripts

8) npm install mongodb mongoose

9) npm start (for backend server)

# Steps 01->

1) Create directory structure
  server
  |
  |- config/
  |     |- db.js
  |
  |- models/
  |    |- userModel.js
  |
  |- routes/
  |     |- Posts.js
  |- index.js

2) go to parent directory and create react frontend in client using->

3) npm create vite@latest client

4) Remove everything from App.jsx and main.jsx

5) npm install axios

6) use useEffect hook for getting data

7) Use CORS in backend, run frontend using npm run dev

# Steps 02 ->

1) cd client

2) npm install react-router-dom

3) Create a folder named 'pages' inside src of frontend

4) create CreatePost.jsx

5) npm install formik yup

6) Create form and add validationSchema, initialValues, onSubmit function, errorMessage

# Steps 03->

1) import useParams hook from react-router-dom

2) import { useNavigate } from 'react-router-dom';

3) Add comments

4) // Update commentsList without reloading
      setCommentsList((prevComments) => [...prevComments, response.data]);
      setNewComment("");

   for input -> onChange={(event)=>{setNewComment(event.target.value)}} value={newComment}


