import styles from "./style.module.css";
import { useState } from "react";
import cardBack from "../../img/card-back-side.jpg";
import cn from "classnames";

const PokemonCard = ({ name, img, id, type, values }) => {
  const [isActive, setActive] = useState(false);
  const handleActive = () => {
    setActive(!isActive);
  };
  return (
    <div className={styles.root} onClick={handleActive}>
      <div className={cn(styles.pokemonCard, { [styles.active]: isActive })}>
        <div className={styles.cardFront}>
          <div className={`${styles.wrap} ${styles.front}`}>
            <div className={`${styles.pokemon} ${styles[type]}`}>
              <div className={styles.values}>
                <div className={`${styles.count} ${styles.top}`}>
                  {values.top}
                </div>
                <div className={`${styles.count} ${styles.right}`}>
                  {values.right}
                </div>
                <div className={`${styles.count} ${styles.bottom}`}>
                  {values.bottom}
                </div>
                <div className={`${styles.count} ${styles.left}`}>
                  {values.left}
                </div>
              </div>
              <div className={styles.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={styles.info}>
                <span className={styles.number}>#{id}</span>
                <h3 className={styles.name}>{name}</h3>
                <small className={styles.type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cardBack}>
          <div className={cn(styles.wrap, styles.back)}>
            <img src={cardBack} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
