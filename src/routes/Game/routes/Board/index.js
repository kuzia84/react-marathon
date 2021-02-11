import { useContext } from "react";
import { PokemonContext } from "../../../../context/pokemonContext";
import PokemonCard from "../../../../Components/PokemonCard";
import s from "./style.module.css";

const BoardPage = () => {
  const pokemonContext = useContext(PokemonContext);
  // console.log("pokemonContext: ", pokemonContext.pokemon[0][0]);
  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        {pokemonContext.pokemon.map((element) => {
          const key = element[0][0];
          const { name, img, id, type, values } = element[0][1];

          return (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              className={s.card}
            />
          );
        })}
      </div>
      <div className={s.board}>
        <div className={s.boardPlate}>1</div>
        <div className={s.boardPlate}>2</div>
        <div className={s.boardPlate}>3</div>
        <div className={s.boardPlate}>4</div>
        <div className={s.boardPlate}>5</div>
        <div className={s.boardPlate}>6</div>
        <div className={s.boardPlate}>7</div>
        <div className={s.boardPlate}>8</div>
        <div className={s.boardPlate}>9</div>
      </div>
    </div>
  );
};

export default BoardPage;
