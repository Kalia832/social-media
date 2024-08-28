import styles from "./Container.module.css";
const Container = ({ children }) => {
  return (
    <>
      <div className={styles.itemContainer}>{children}</div>
    </>
  );
};

export default Container;
