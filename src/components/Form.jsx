import { useContext, useRef } from "react";
import { PostListContext } from "../store/PostList-store";

const Form = () => {
  const { addNewPost } = useContext(PostListContext);
  let title = useRef();
  let body = useRef();
  let userId = useRef();
  let id = useRef();
  let likes = useRef();
  let dislikes = useRef();
  let tags = useRef();
  let obj;
  return (
    <form
      onSubmit={(event) => {
        obj = {
          title: title.current.value,
          body: body.current.value,
          userId: userId.current.value,
          id: id.current.value,
          reactions: {
            likes: likes.current.value,
            dislikes: dislikes.current.value,
          },
          tags: tags.current.value.split(","),
        };
        addNewPost(obj);
        event.preventDefault();
      }}
    >
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="firstName" className="form-label">
            UserId
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder=""
            required=""
            ref={userId}
          />
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>

        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">
            Id
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder=""
            required=""
            ref={id}
          />
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>

        <div className="col-12">
          <label className="form-label">Title</label>
          <div className="input-group has-validation">
            <input type="text" className="form-control" ref={title} />
            <div className="invalid-feedback">Your Title is required.</div>
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Body
          </label>
          <textarea className="form-control" rows="3" ref={body}></textarea>
        </div>

        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Tags
          </label>
          <input type="text" className="form-control" ref={tags} />
        </div>

        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">
            Likes
          </label>
          <input type="text" className="form-control" ref={likes} />
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">
            Dislikes
          </label>
          <input type="text" className="form-control" ref={dislikes} />
        </div>
        <button className="w-75 mx-auto btn btn-primary btn-lg" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
