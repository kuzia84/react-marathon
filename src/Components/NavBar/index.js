import styles from "./style.module.css";
import cn from "classnames";
import { ReactComponent as LoginSVG } from "../../img/login.svg";

const NavBar = ({
  isOpen,
  bgActive = false,
  onClickHamburger,
  onClickLogin,
}) => {
  return (
    <nav id={styles.navbar} className={cn({ [styles.bgActive]: bgActive })}>
      <div className={styles.navWrapper}>
        <p className={styles.brand}>LOGO</p>
        <div className={styles.loginAndMenu}>
          <div className={styles.loginWrap} onClick={onClickLogin}>
            <LoginSVG />
          </div>
          <div
            className={cn(styles.menuButton, { [styles.active]: isOpen })}
            onClick={onClickHamburger}
          >
            <span />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
