import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';


function CreatePost(){
  return(
    <>
    <div className="createPostPage">
      <Formik>
        <Form className="formContainer">
          <label>Title: </label>
          <Field
            className="inputCreatePost"
            name="title"
            placeholder="Enter your title"
          />

          <label>Post Text: </label>
          <Field
            className="inputCreatePost"
            name="postText"
            placeholder="Enter your Post text"
          />

          <label>Username: </label>
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