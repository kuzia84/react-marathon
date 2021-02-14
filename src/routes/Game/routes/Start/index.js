import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../../../Components/Layout";
import PokemonCard from "../../../../Components/PokemonCard";

import styles from "./style.module.css";

import { PokemonContext } from "../../../../context/pokemonContext";
import { FireBaseContext } from "../../../../context/firebaseContext";

const StartPage = () => {
  const firebase = useContext(FireBaseContext);
  const pokemonContext = useContext(PokemonContext);

  const history = useHistory();
  const handleStartGameClick = () => {
    history.push("/game/board");
  };
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
    return () => firebase.offPokemonSoket();
  }, [firebase]);

  const handleChangeSelected = (key) => {
    const pokemon = { ...pokemons[key] };
    pokemonContext.onSelectedPokemons(key, pokemon);
    setPokemons((prevState) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      },
    }));
  };

  return (
    <Layout title="This is game page!">
      <div className={styles.buttonWrap}>
        <button
          onClick={handleStartGameClick}
          disabled={Object.keys(pokemonContext.pokemons).length < 5}
        >
          Start game
        </button>
      </div>
      <div className={styles.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values, selected }]) => (
            <PokemonCard
              className={styles.card}
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              isSelected={selected}
              onCardClick={() => {
                if (
                  Object.keys(pokemonContext.pokemons).length < 5 ||
                  selected
                ) {
                  handleChangeSelected(key);
                }
              }}
            />
          )
        )}
      </div>
    </Layout>
  );
};

export default StartPage;
