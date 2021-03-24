import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCard from "../../../../components/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";

import s from './style.module.css';

const BoardPage = () => {
  const [board, setBoard] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const { pokemons } = useContext(PokemonContext);
  const history = useHistory();
  console.log('###: player2', player2)

  useEffect(async () => {
    const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
    const boardRequest = await boardResponse.json();

    setBoard(boardRequest.data);

    const playerResponse = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
    const playerRequest = await playerResponse.json();

    setPlayer2(playerRequest.data);
  }, []);

  // if (Object.keys(pokemons).length === 0) {
  //   history.replace('/game');
  // }

  const handleClickBoardPlate = (position) => {
    console.log('###: position', position)
  }

  return (
      <div className={s.root}>
        <div className={s.playerOne}>
          {
            Object.values(pokemons).map(({id, name, img, type, values}) => (
              <PokemonCard className={s.card}
                           key={id}
                           type={type}
                           name={name}
                           img={img}
                           id={id}
                           values={values}
                           minimize
                           isActive
              />
            ))
          }
        </div>

        <div className={s.board}>
          {
            board.map(item => (
              <div key={item.position}
                   className={s.boardPlate}
                   onClick={() => !item.card && handleClickBoardPlate(item.position)}
              >
                {
                  item.card && <PokemonCard {...item} minimize />
                }
              </div>
            ))
          }
        </div>

        <div className={s.playerTwo}>
          {
            player2.map(({id, name, img, type, values}) => (
              <PokemonCard className={s.card}
                           key={id}
                           type={type}
                           name={name}
                           img={img}
                           id={id}
                           values={values}
                           minimize
                           isActive
              />
            ))
          }
        </div>
      </div>
  );
};

export default BoardPage;