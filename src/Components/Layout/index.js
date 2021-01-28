import styles from "./style.module.css";

const Layout = ({ id, title, descr, urlBg = false, colorBg = false }) => {
  const styleRoot = urlBg
    ? { backgroundImage: "url(" + urlBg + ")" }
    : colorBg
    ? { backgroundColor: colorBg }
    : {};

  return (
    <section className={styles.root} id={id} style={styleRoot}>
      <div className={styles.wrapper}>
        <article>
          {title && (
            <div className={styles.title}>
              <h3>{title}</h3>
              <span className={styles.separator}></span>
            </div>
          )}
          {descr && (
            <div className={styles.desc + " " + styles.full}>
              <p>{descr}</p>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default Layout;
