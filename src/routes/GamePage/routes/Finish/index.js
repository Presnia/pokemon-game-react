import { useHistory } from 'react-router-dom';
import {PokemonContext} from "../../../../context/pokemonContext";
import s from './style.module.css';

const FinishPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.replace('/game');
  }

  return (
    <PokemonContext.Provider value={{pokemon: []}}>
      <div className={s.container}>
        <section className={s.player1}>

        </section>
        <button className={s.button}
                onClick={handleClick}
        >
          END GAME
        </button>
        <section className={s.player2}>

        </section>
      </div>
    </PokemonContext.Provider>
  )
};

export default FinishPage;