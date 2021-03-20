import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import s from './style.module.css';
import database from "../../service/firebase";
import Button from "../../components/Button";
import cn from 'classnames';
import PokemonCard from "../../components/PokemonCard";

const GamePage = ({ isActive }) => {
  const[pokemons, setPokemons] = useState({});

  useEffect(() => {
    database.ref('pokemons').once('value', snapshot => {
      setPokemons(snapshot.val());
    })
  }, []);

  const handleClickOnCards = () => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id) {
          pokemon.active = true;
        };

        acc[item[0]] = pokemon;

        return acc;
      }, {});
    });
  };

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
            Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) =>
              <PokemonCard key={key}
                           type={type}
                           name={name}
                           img={img}
                           id={id}
                           values={values}
                           isActive={active}
                           clickOn={handleClickOnCards}/>)
          }
        </div>
      </div>
    </>
  );
};

export default GamePage;