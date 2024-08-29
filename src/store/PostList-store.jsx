import { Children, createContext, useReducer } from "react";
const DEFAULT_CONTEXT = {
  postList: [],
  addNewPost: () => {},
  deletePost: () => {},
  fetchPost: () => {},
};

export const PostListContext = createContext(DEFAULT_CONTEXT);

const postListReducer = (currentState, action) => {
  let updatedState = currentState;
  if (action.type === "addNewPostAction") {
    updatedState = [...currentState, action.payload.obj];
  } else if (action.type === "deletePostAction") {
    updatedState = currentState.filter((item) => item != action.payload.obj);
  } else if (action.type === "FETCH_POST") {
    updatedState = action.payload.posts;
  }
  console.log(updatedState);
  return updatedState;
};

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addNewPost = (obj) => {
    const addNewPostAction = {
      type: "addNewPostAction",
      payload: {
        obj,
      },
    };
    console.log(obj);
    dispatchPostList(addNewPostAction);
  };
  const deletePost = (obj) => {
    const deletePostAction = {
      type: "deletePostAction",
      payload: { obj },
    };
    dispatchPostList(deletePostAction);
  };
  const fetchPost = (posts) => {
    const fetchPostAction = {
      type: "FETCH_POST",
      payload: {
        posts,
      },
    };
    // console.log(posts);
    dispatchPostList(fetchPostAction);
  };
  return (
    <PostListContext.Provider
      key={"PLCP"}
      value={{ postList, addNewPost, deletePost, fetchPost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListContextProvider;
