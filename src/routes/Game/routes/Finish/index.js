import { useContext } from "react";
import { PokemonContext } from "../../../../context/pokemonContext";

const FinishPage = () => {
  const pokemonContext = useContext(PokemonContext);
  console.log("pokemonContext: ", pokemonContext);
  return <div>FinishPage</div>;
};

export default FinishPage;
