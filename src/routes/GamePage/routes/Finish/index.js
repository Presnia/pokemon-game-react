import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { PokemonContext } from "../../../../context/pokemonContext";
import { FireBaseContext } from "../../../../context/firebaseContext";
import s from './style.module.css';
import PokemonCard from "../../../../components/PokemonCard";

const FinishPage = () => {
  const { pokemons, cardsPlayer2, youWin, setSelectedPokemons } = useContext(PokemonContext);
  const firebase = useContext(FireBaseContext);
  const [statePokemon, setStatePokemon] = useState({});
  const history = useHistory();

  const checkCards = (item) => {
    const player2Cards = {
      ...item
    };
    setStatePokemon(player2Cards);
  }

  const handleClickBtn = () => {
    history.replace('/game');
    // setSelectedPokemons({});
  }

  const handleClickCard = () => {
    Object.values(cardsPlayer2.data).filter(item => item.id);
    console.log('###: card is clicked',)
    if (youWin === true) {
      firebase.addPokemon(statePokemon);
    }
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
                onClick={handleClickBtn}
        >
          END GAME
        </button>

        <section className={s.player2}>
          {
            Object.values(cardsPlayer2.data).map(item => (
              <PokemonCard className={s.card}
                           key={item.key}
                           type={item.type}
                           name={item.name}
                           img={item.img}
                           id={item.id}
                           values={item.values}
                           isActive
                           onClick={handleClickCard}
              />
            ))
          }
        </section>
      </div>
  )
};

export default FinishPage;