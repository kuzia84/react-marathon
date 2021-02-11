import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../../../Components/Layout";
import PokemonCard from "../../../../Components/PokemonCard";

import styles from "./style.module.css";

import { PokemonContext } from "../../../../context/pokemonContext";
import { FireBaseContext } from "../../../../context/firebaseContext";

const StartPage = () => {
  const firebase = useContext(FireBaseContext);
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);
  const pokemonContext = useContext(PokemonContext);

  const onCardClick = (id) => {
    const newPokemon = Object.entries(pokemons).filter(
      (item) => item[1].id === id
    );
    pokemonContext.addPokemon(newPokemon);
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] };
        if (pokemon.id === id) {
          pokemon.isSelected = !pokemon.isSelected;
        }
        acc[item[0]] = pokemon;
        // firebase.postPokemon(item[0], pokemon);
        return acc;
      }, {});
    });
  };
  const addPokemon = () => {
    const data = {
      abilities: ["blaze", "solar-power"],
      stats: {
        hp: 39,
        attack: 52,
        defense: 43,
        "special-attack": 60,
        "special-defense": 50,
        speed: 65,
      },
      type: "fire",
      img:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      name: "charmander",
      base_experience: 62,
      height: 6,
      id: 4,
      values: {
        top: 7,
        right: 6,
        bottom: 1,
        left: 4,
      },
    };
    firebase.addPokemon(data);
  };
  const history = useHistory();
  const startGame = () => {
    history.push("/game/board");
  };

  return (
    <Layout title="This is game page!">
      {/* <button onClick={addPokemon}>Add pokemon</button> */}
      <div className={styles.flex}>
        <button onClick={startGame}>Start game</button>
      </div>
      <div className={styles.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values, isActive, isSelected }]) => (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              isSelected={isSelected}
              onCardClick={onCardClick}
            />
          )
        )}
      </div>
    </Layout>
  );
};

export default StartPage;
