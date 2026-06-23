const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return state.concat([action.payload]);

    case "DELETE_POST":
      return state.filter(post => post.id !== action.payload);

    case "EDIT_POST":
      return state.map(post =>
        post.id === action.payload ? { ...post, editing: !post.editing } : post
      );
    case "UPDATE":
      return state.map(post => {
        if (post.id === action.payload) {
          console.log(action.payload);
          return {
            ...post,
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !post.editing
          };
        } else return post;
      });

    default:
      return state;
  }
};
export default postReducer;
