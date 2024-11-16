import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom'


function CreatePost(){

  const navigate = useNavigate();

  const initialValues = {
    title: "",
    postText: "",
    username: ""
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/myPosts", data).then((response) => {
      console.log(response);
      console.log("It Worked!!");
      navigate("/");
    })
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  return(
    <>
    <div className="createPostPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component='span' />
          <Field
            className="inputCreatePost"
            name="title"
            placeholder="Enter your title"
          />

          <label>Post Text: </label>
          <ErrorMessage name="postText" component='span' />
          <Field
            className="inputCreatePost"
            name="postText"
            placeholder="Enter your Post text"
          />

          <label>Username: </label>
          <ErrorMessage name="username" component='span' />
          <Field
            className="inputCreatePost"
            name="username"
            placeholder="Enter your Username"
          />

          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
    </>
  );
}

export default CreatePost;