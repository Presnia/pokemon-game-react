import './style.module.css';
import {PokemonContext} from "../../../../context/pokemonContext";

const FinishPage = () => {
  return (
    <PokemonContext.Provider value={{pokemon: []}}>
      <div>
        <h1>This is Finish Page</h1>
      </div>
    </PokemonContext.Provider>
  )
};

export default FinishPage;