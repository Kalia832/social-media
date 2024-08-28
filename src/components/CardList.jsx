import { useContext } from "react";
import { PostListContext } from "../store/PostList-store";
import Card from "./Card";

const CardList = () => {
  const postListContext = useContext(PostListContext);
  const postList = postListContext.postList;
  const deletePost = postListContext.deletePost;
  const fetchPost = postListContext.fetchPost;
  return (
    <>
      {postList.length === 0 && (
        <>
          <center>
            <h4>List is Empty</h4>
            <br />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                fetch("https://dummyjson.com/posts")
                  .then((res) => res.json())
                  .then((data) => fetchPost(data.posts));
              }}
            >
              Fetch Posts
            </button>
          </center>
        </>
      )}
      {postList.map((item, index) => (
        <Card post={item} key={item.id} deletePost={deletePost} index={index} />
      ))}
    </>
  );
};
export default CardList;
