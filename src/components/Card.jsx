import styles from "./Card.module.css";
import { MdDelete } from "react-icons/md";
import { BiLike, BiDislike } from "react-icons/bi";

const Card = ({ post, deletePost }) => {
  return (
    <>
      <div key={post.id} className={`card shadow-sm ${styles.container}`}>
        <div className="card-body">
          <span className="badge text-bg-secondary m-1">
            User Id- {post.userId}
          </span>
          <span className="badge text-bg-secondary m-1">
            Post Id- {post.id}
          </span>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post)}
          >
            <MdDelete />
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>

          <span className={`badge text-bg-primary m-1 ${styles.reactions}`}>
            <BiLike></BiLike>
            {post.reactions.likes}
          </span>
          <span className={`badge text-bg-danger m-1 ${styles.reactions}`}>
            <BiDislike></BiDislike>
            {post.reactions.dislikes}
          </span>
          {post.tags.map((item) => (
            <span className={`badge text-bg-info m-1 ${styles.reactions}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
