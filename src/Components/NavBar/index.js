import styles from "./style.module.css";
import cn from "classnames";

const NavBar = ({ isOpen, bgActive = false, onClickHamburger }) => {
  return (
    <nav id={styles.navbar} className={cn({ [styles.bgActive]: bgActive })}>
      <div className={styles.navWrapper}>
        <p className={styles.brand}>LOGO</p>
        <div
          className={cn(styles.menuButton, { [styles.active]: isOpen })}
          onClick={onClickHamburger}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
