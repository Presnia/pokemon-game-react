import { useRouteMatch, Switch, Route } from 'react-router-dom';
import { PokemonContext } from '../../context/pokemonContext';
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from './routes/Finish/index';

const GamePage = () => {
  const match = useRouteMatch();

  const handleSelectedPokemons = () => {
    console.log('==> handleSelectedPokemons')
  }

  return (
    <PokemonContext.Provider value={{
      pokemon: [],
      onSelectedPokemons: handleSelectedPokemons
    }}>
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default GamePage;

