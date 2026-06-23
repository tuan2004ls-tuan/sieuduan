import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { update } from "../actions/PostActions";

const PostForm = ({ post }) => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const handleEdit = e => {
    e.preventDefault();
    const data = {
      newTitle,
      newMessage
    };
    dispatch(update(post.id, data));
  };
  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          required
          value={newTitle}
          type="text"
          name="title"
          placeholder="Enter Post Title"
          onChange={e => setNewTitle(e.target.value)}
        />
        <br /> <br />
        <textarea
          required
          value={newMessage}
          name="message"
          rows="5"
          cols="28"
          placeholder="Enter Post"
          onChange={e => setNewMessage(e.target.value)}
        />
        <br /> <br />
        <button>Update</button>
      </form>
    </div>
  );
};
export default PostForm;
