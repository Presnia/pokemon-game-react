import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import s from './style.module.css';
import POKEMONS from '../../components/Pokemons/index';
import Button from "../../components/Button";
import cn from 'classnames';
import PokemonCard from "../../components/PokemonCard";

const GamePage = () => {
  const[isCard, setCard] = useState(POKEMONS);
  const cardId = POKEMONS.map(card => card.id);


  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  }
  return (
    <>
      <div className={s.div}>
        <div className={s.flex}>
          {
            POKEMONS.map((e) =>
              <PokemonCard key={e.id}
                           type={e.type}
                           name={e.name}
                           img={e.img}
                           id={e.id}
                           values={e.values}/>)
          }
        </div>
        <button className={cn(Button, s.back)}
                text="Going Home"
                onClick={handleClick}>
          Going Home
        </button>
      </div>
    </>
  );
};

export default GamePage;