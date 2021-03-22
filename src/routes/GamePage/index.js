import { useState, useEffect } from 'react';
import database from "../../service/firebase";
import Button from "../../components/Button";
import cn from 'classnames';
import PokemonCard from "../../components/PokemonCard";

import s from './style.module.css';

const GamePage = ({ isActive }) => {
  const[pokemons, setPokemons] = useState({});

  const data = () => {
    database.ref('pokemons').once('value', snapshot => {
      setPokemons(snapshot.val());
    });
  };

  useEffect(() => {
    data()
  }, []);

  const handleAddPokemon = () => {
    function addPokemon() {
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

      const newKey = database.ref().child('pokemons').push().key;
      return database.ref('pokemons/' + newKey).set(newPokemon);
    }

    addPokemon().then(data());
  };

  const handleClickOnCards = (key) => {
        database.ref('pokemons/' + key).update(
            {active: !pokemons[key].active}, (error) => {
              if (error) {
                console.log('Error ===>', error)
              }
          }).then(data());
  };

  return (
    <>
      <div className={s.div}>
        <button className={cn(Button, s.back)}
                onClick={handleAddPokemon}>
          Add New Pokemon
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
                           active={active}
                           clickOn={handleClickOnCards}/>)
          }
        </div>
      </div>
    </>
  );
};

export default GamePage;