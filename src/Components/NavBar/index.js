import styles from "./style.module.css";
import cn from "classnames";

const NavBar = ({ openMenu, toggleMenu }) => {
  const onToogleMenu = () => {
    toggleMenu && toggleMenu();
  };
  return (
    <nav id={styles.navbar}>
      <div className={styles.navWrapper}>
        <p className={styles.brand}>LOGO</p>
        <a
          className={cn(styles.menuButton, { [styles.active]: openMenu })}
          onClick={onToogleMenu}
        >
          <span></span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
