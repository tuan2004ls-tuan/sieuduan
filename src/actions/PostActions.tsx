export const addPost = data => {
  return {
    type: "ADD_POST",
    payload: data
  };
};
export const deletePost = id => {
  return {
    type: "DELETE_POST",
    payload: id
  };
};
export const editPost = id => {
  return {
    type: "EDIT_POST",
    payload: id
  };
};
export const update = (id, data) => {
  console.log(id);
  return {
    type: "UPDATE",
    payload: id,
    data
  };
};
