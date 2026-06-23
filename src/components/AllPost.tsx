import React from "react";
import Post from "./Post";
import EditComponent from "./EditComponent";
import { useSelector } from "react-redux";

const AllPost = () => {
  const posts = useSelector(state => state.postReducer);
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          {post.editing ? (
            <EditComponent key={post.id} post={post} />
          ) : (
            <Post key={post.id} post={post} />
          )}
        </div>
      ))}
    </div>
  );
};
export default AllPost;
