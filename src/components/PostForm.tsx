import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../actions/PostActions";

const PostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    };
    dispatch(addPost(data));
    setTitle("");
    setMessage("");
  };
  return (
    <div>
      <h1>Create Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          value={title}
          type="text"
          name="title"
          placeholder="Enter Post Title"
          onChange={e => setTitle(e.target.value)}
        />
        <br /> <br />
        <textarea
          required
          value={message}
          name="message"
          rows="5"
          cols="28"
          placeholder="Enter Post"
          onChange={e => setMessage(e.target.value)}
        />
        <br /> <br />
        <button>Post</button>
      </form>
    </div>
  );
};
export default PostForm;
