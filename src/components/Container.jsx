import styles from "./Container.module.css";
const Container = ({ children }) => {
  return (
    <>
      <div className={`${styles.itemContainer} d-block mx-auto my-4 mb-4`}>
        {children}
      </div>
    </>
  );
};

export default Container;
