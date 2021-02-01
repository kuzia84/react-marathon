import styles from "./style.module.css";

const Header = ({ title, descr, onClickButton }) => {
  const handleClick = () => {
    console.log("<Header />");
    onClickButton && onClickButton("game");
  };
  return (
    <header className={styles.root}>
      <div className={styles.forest}></div>
      <div className={styles.container}>
        {title && <h1>{title}</h1>}
        {descr && <p>{descr}</p>}
        <button onClick={handleClick}>Start game</button>
      </div>
    </header>
  );
};

export default Header;
