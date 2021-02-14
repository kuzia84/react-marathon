import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { PokemonContext } from "../../../../context/pokemonContext";
import Layout from "../../../../Components/Layout";
import PokemonCard from "../../../../Components/PokemonCard";
import s from "./style.module.css";
import cn from "classnames";
import { FireBaseContext } from "../../../../context/firebaseContext";

const FinishPage = () => {
  const firebase = useContext(FireBaseContext);
  const { pokemons, player2, finalResult, resetContext } = useContext(
    PokemonContext
  );
  console.log("finalResult: ", finalResult);
  const history = useHistory();
  if (Object.keys(pokemons).length === 0) history.replace("/game");
  const [isSelected, setSelected] = useState(null);
  const [newPokemon, setNewPokemon] = useState({});
  console.log("newPokemon: ", newPokemon);
  const handleNewPokemon = (id) => {
    setNewPokemon(() => player2.player2.filter((item) => item.id === id));
  };
  const addNewPokemon = () => {
    firebase.addPokemon(newPokemon[0]);
  };
  const handleEndGame = () => {
    if (finalResult === "Win") {
      addNewPokemon();
      resetContext();
    }
    resetContext();
  };

  return (
    <Layout title={`You ${finalResult} the game`}>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values }]) => (
            <PokemonCard
              className={s.card}
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive
            />
          )
        )}
      </div>
      <div className={s.buttonWrap}>
        <button onClick={handleEndGame}>End game</button>
      </div>
      <div className={s.flex}>
        {player2.player2 &&
          player2.player2.map(({ name, img, id, type, values, selected }) => (
            <div
              className={cn(s.cardBoard, {
                [s.selected]: isSelected === id,
              })}
              onClick={() => {
                if (finalResult === "Win") {
                  setSelected(id);
                }
              }}
            >
              <PokemonCard
                className={s.card}
                key={id}
                name={name}
                img={img}
                id={id}
                type={type}
                values={values}
                isActive
                isSelected={selected}
                onClick={() => setSelected(id)}
                onCardClick={() => {
                  handleNewPokemon(id);
                }}
              />
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default FinishPage;
