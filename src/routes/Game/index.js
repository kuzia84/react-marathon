import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import PokemonCard from "../../Components/PokemonCard";
import styles from "./style.module.css";
import database from "../../services/firebase";

const GamePage = () => {
  const [pokemons, setPokemons] = useState({});
  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val());
    });
  }, []);

  const onCardClick = (id) => {
    const pokemon = pokemons[id];
    database
      .ref("pokemons/" + id)
      .set({ ...pokemon, active: !pokemon.active })
      .then(
        database.ref("pokemons").once("value", (snapshot) => {
          setPokemons(snapshot.val());
        })
      );
    // const newPokemons = Object.entries(pokemons).map(([key, item]) =>
    //   key === id ? { ...item, active: !item.active } : item
    // );
    // setPokemons(newPokemons);
  };
  const addPokemon = () => {
    const data = Object.entries(pokemons);
    const [key, value] = data[0];
    const newKey = database.ref().child("pokemons").push().key;
    database
      .ref("pokemons/" + newKey)
      .set(value)
      .then(
        setPokemons((prevState) => {
          return { ...prevState, [newKey]: value };
        })
      );
  };

  return (
    <Layout title="This is game page!">
      <button onClick={addPokemon}>Add pokemon</button>
      <div className={styles.flex}>
        {Object.entries(pokemons).map(([key, item]) => (
          <PokemonCard
            key={key}
            keyId={key}
            name={item.name}
            img={item.img}
            id={item.id}
            type={item.type}
            values={item.values}
            isActive={item.active}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </Layout>
  );
};

export default GamePage;
