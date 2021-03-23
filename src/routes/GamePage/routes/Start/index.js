import { useState, useEffect, useContext } from 'react';
import {FireBaseContext} from "../../../../context/firebaseContext";
import Button from "../../../../components/Button/index";
import cn from 'classnames';
import PokemonCard from "../../../../components/PokemonCard/index";

import s from './style.module.css';
import {PokemonContext} from "../../../../context/pokemonContext";

const StartPage = ({ isActive }) => {
  const firebase = useContext(FireBaseContext);
  const pokemonsContext = useContext(PokemonContext);
  console.log('==> pokemonsContext', pokemonsContext);
  const[pokemons, setPokemons] = useState({});

  const getPokemons = () => {
    firebase.getPokemonSocket((pokemons) => {
      setPokemons(pokemons);
    });

    return () => firebase.getPokemonSocket();
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const handleAddPokemon = (cb) => {
      const newPokemon = {
        "abilities": ["keen-eye", "tangled-feet", "big-pecks"],
        "base_experience": 122,
        "height": 11,
        "id": 17,
        "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        "name": "pidgeotto",
        "type": "normal",
        "values":  {bottom: 1, left: 2, right: 5, top: 7},
        "weight": 340,
      };

      firebase.addPokemon(newPokemon, () => getPokemons());
  };

  const handleChangeSelected = (key) => {
    pokemonsContext.onSelectedPokemons();

    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }))
  };

  return (
    <PokemonContext.Provider value={{pokemon: []}}>
      <>
        <div className={s.div}>
          <button className={cn(Button, s.back)}
                  onClick={handleAddPokemon}>
            Start Game
          </button>
          <div className={s.flex}>
            {
              Object.entries(pokemons).map(([key,
                                              {name, img, id, type, values, selected}]) =>
                <PokemonCard className={s.card}
                             key={key}
                             type={type}
                             name={name}
                             img={img}
                             id={id}
                             values={values}
                             isActive={true}
                             isSelected={selected}
                             onClick={() => handleChangeSelected(key)}/>)
            }
          </div>
        </div>
      </>
    </PokemonContext.Provider>
  );
};

export default StartPage;