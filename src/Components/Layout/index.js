import styles from "./style.module.css";
import cn from "classnames";

const Layout = ({
  id,
  title,
  descr,
  urlBg = false,
  colorBg = false,
  children,
}) => {
  const styleRoot = urlBg
    ? { backgroundImage: `url(${urlBg})` }
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

          <div className={cn(styles.desc, styles.full)}>
            {descr && <p>{descr}</p>}
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
