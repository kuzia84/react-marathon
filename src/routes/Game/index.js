import { useRouteMatch, Route, Switch } from "react-router-dom";
import { useState } from "react";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import { PokemonContext } from "../../context/pokemonContext";

const GamePage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const match = useRouteMatch();
  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];
        return copyState;
      }

      return {
        ...prevState,
        [key]: pokemon,
      };
    });
  };
  const [player2Cards, setPlayer2Cards] = useState([]);
  const handlePlayer2Cards = (player2) => {
    setPlayer2Cards((prevState) => ({ ...prevState, player2 }));
  };
  const [gameResult, setGameResult] = useState(null);
  const handleGameResult = (data) => {
    setGameResult(data);
  };
  const handleResetContext = () => {
    setSelectedPokemons({});
    setPlayer2Cards([]);
    setGameResult(null);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons: selectedPokemons,
        onSelectedPokemons: handleSelectedPokemons,
        player2: player2Cards,
        onPlayer2Cards: handlePlayer2Cards,
        finalResult: gameResult,
        writeGameResult: handleGameResult,
        resetContext: handleResetContext,
      }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;
