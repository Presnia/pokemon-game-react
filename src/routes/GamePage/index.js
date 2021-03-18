import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import s from './style.module.css';
import POKEMONS from '../../components/Pokemons/index';
import Button from "../../components/Button";
import cn from 'classnames';
import PokemonCard from "../../components/PokemonCard";

const GamePage = ({ isActive }) => {
  const[isCards, setCards] = useState(POKEMONS);

  const handleClickOnCard = () => {
    setCards(isCards.map(card => card.id ? card.active === true : card.active === false));
  }

  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  }
  return (
    <>
      <div className={s.div}>
        <button className={cn(Button, s.back)}
                text="Going Home"
                onClick={handleClick}>
          Going Home
        </button>
        <div className={s.flex}>
          {
            POKEMONS.map((e) =>
              <PokemonCard key={e.id}
                           type={e.type}
                           name={e.name}
                           img={e.img}
                           id={e.id}
                           values={e.values}
                           clickOn={handleClickOnCard}/>)
          }
        </div>
      </div>
    </>
  );
};

export default GamePage;