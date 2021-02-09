import { useRouteMatch, Route, Switch } from "react-router-dom";
import { useState } from "react";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import { PokemonContext } from "../../context/pokemonContext";

const GamePage = () => {
  const match = useRouteMatch();
  const [pokemon, setPokemon] = useState("");
  const addPokemon = (newPokemon) => {
    setPokemon((prevState) => {
      const newPok = [...prevState, newPokemon];
      // newPok.filter((item) => item[0][0] !== newPokemon[0][0]);
      // console.log("newPok: ", newPok);
      return newPok;
    });
  };

  return (
    <PokemonContext.Provider value={{ pokemon, addPokemon: addPokemon }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
