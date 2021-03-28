import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { PokemonContext } from "../../../../context/pokemonContext";
import { FireBaseContext } from "../../../../context/firebaseContext";
import { BoardContext } from "../../../../context/boardContext";
import s from './style.module.css';
import PokemonCard from "../../../../components/PokemonCard";

const FinishPage = () => {
  const { pokemons, setCardsPlayer2 } = useContext(PokemonContext);
  const firebase = useContext(FireBaseContext);
  console.log(useContext(PokemonContext))
  const [statePokemon, setStatePokemon] = useState({});
  const history = useHistory();

  const checkCards = (item) => {
    const player2Cards = {
      ...item
    }
    setStatePokemon(player2Cards);
  }

  const handleClick = () => {
    history.replace('/game');
    firebase.addPokemon(statePokemon)
  }

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
            Object.values(setCardsPlayer2).map(item => (
                <PokemonCard key={item.key}
                             type={item.type}
                             name={item.name}
                             img={item.img}
                             id={item.id}
                             values={item.values}
                             isActive
                             onClick={() => checkCards(item.id, item)}
                />
            ))
          }
        </section>
      </div>
  )
};

export default FinishPage;