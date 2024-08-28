import { useContext, useRef } from "react";
import { PostListContext } from "../store/PostList-store";

const Form = () => {
  const { addNewPost } = useContext(PostListContext);
  let title = useRef();
  let description = useRef();

  return (
    <>
      <form
        onSubmit={(event) => {
          // let postObj = { title, description };
          addNewPost(title.current.value, description.current.value);
          title.current.value = "";
          description.current.value = "";
          console.log("hi");
          event.preventDefault();
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            ref={title}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            ref={description}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
