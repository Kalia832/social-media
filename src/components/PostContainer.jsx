import styles from "./PostContainer.module.css";
const PostContainer = ({ children }) => {
  return (
    <>
      <div key={"ps"} className={styles.container}>
        {children}
      </div>
    </>
  );
};

export default PostContainer;
