import { Link } from "react-router-dom";
import styles from "./style.module.css";
import cn from "classnames";

const MENU = [
  {
    title: "HOME",
    to: "/",
  },
  {
    title: "GAME",
    to: "/game",
  },
  {
    title: "ABOUT",
    to: "/about",
  },
  {
    title: "CONTACT",
    to: "/contact",
  },
];

const Menu = ({ isOpen, onClickHamburger }) => {
  return (
    <div
      className={cn(styles.menuContainer, {
        [styles.active]: isOpen === true,
        [styles.deactive]: isOpen === false,
      })}
    >
      <div className={styles.overlay}></div>
      <div className={styles.menuItems}>
        <ul>
          {MENU.map(({ title, to }, index) => (
            <li key={index}>
              <Link to={to} onClick={onClickHamburger}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
