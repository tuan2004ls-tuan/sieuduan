import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../actions/PostActions";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div className="card" key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.message}</p>
      <button
        className="btn editBtn"
        onClick={() => dispatch(editPost(post.id))}
      >
        Edit
      </button>
      <button
        className="btn deleteBtn"
        onClick={() => dispatch(deletePost(post.id))}
      >
        Delete
      </button>
    </div>
  );
};
export default Post;
