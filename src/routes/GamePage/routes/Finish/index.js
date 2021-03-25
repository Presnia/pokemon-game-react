import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { PokemonContext } from "../../../../context/pokemonContext";
import { BoardContext } from "../../../../context/boardContext";
import s from './style.module.css';
import PokemonCard from "../../../../components/PokemonCard";

const FinishPage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.replace('/game');
  }

  const { pokemons } = useContext(PokemonContext);


  const value = useContext(BoardContext);
  console.log('===> value', value)

  return (
      <div className={s.container}>
        <section className={s.player1}>
          {
            Object.values(pokemons).map(item => (
              <PokemonCard key={item.key}
                           type={item.type}
                           name={item.name}
                           img={item.img}
                           id={item.id}
                           values={item.values}
                           isActive
              />
            ))
          }
        </section>
        <button className={s.button}
                onClick={handleClick}
        >
          END GAME
        </button>
        <section className={s.player2}>
          {
            Object.values(pokemons).map(item => (
              <PokemonCard key={item.key}
                           type={item.type}
                           name={item.name}
                           img={item.img}
                           id={item.id}
                           values={item.values}
                           isActive
              />
            ))
          }
        </section>
      </div>
  )
};

export default FinishPage;