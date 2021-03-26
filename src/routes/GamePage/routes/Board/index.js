import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Result from "../Result";
import PokemonCard from "../../../../components/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";
import { BoardContext } from "../../../../context/boardContext";
import s from './style.module.css';
import PlayerBoard from "./component/PlayerBoard";

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach(item => {
      if (item.card.possession === 'red') {
          player2Count++;
      }

      if (item.card.possession === 'blue') {
        player1Count++;
      }
    });

    return [player1Count, player2Count];
}

  const BoardPage = () => {
    const { pokemons } = useContext(PokemonContext);
    const [board, setBoard] = useState([]);
    const [player2, setPlayer2] = useState([]);
    const [player1, setPlayer1] = useState(() => {
      return Object.values(pokemons).map(item => ({
        ...item,
        possession: 'blue'
      }))
    });
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(0);

    const history = useHistory();


  useEffect(async () => {
    const boardRequest = await fetch('https://reactmarathon-api.netlify.app/api/board');
    const boardResponse = await boardRequest.json();

    setBoard(boardResponse.data);

    const player2Request = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
    const player2Response = await player2Request.json();

    setPlayer2(() => {
      return player2Response.data.map(item => ({
        ...item,
        possession: 'red'
      }))
    });
  }, []);

  if (Object.keys(pokemons).length === 0) {
    history.replace('/game');
  }

  const handleClickBoardPlate = async (position) => {
    if (choiceCard) {
      const params = {
        position,
        card: choiceCard,
        board
      };

      const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      const request = await res.json();

      if (choiceCard.player === 1) {
        setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id))
      }

      if (choiceCard.player === 2) {
        setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id))
      }

      setBoard(request.data);
      setSteps(prevState => {
        const count = prevState + 1;
        return count;
      });
    }
  }

  const [result, setResult] = useState('');
  const [isActive, setActive] = useState(null);

  useEffect(() => {
      if (steps === 9) {
          const [count1, count2] = counterWin(board, player1, player2);

          if (count1 > count2) {
            setResult(() => 'win');
            setActive(!isActive);
          } else if (count1 < count2) {
            setResult(() => 'lose');
            setActive(!isActive);
          } else {
            setResult(() => 'draw');
            setActive(!isActive);
          }
      }
  }, [steps]);

  return (
    <BoardContext.Provider value={[player1, player2]}>
      <div className={s.root}>
        <div className={s.playerOne}>
          <PlayerBoard
            player={1}
            cards={player1}
            onClickCard={(card) => setChoiceCard(card)}
          />
        </div>

        <div className={s.board}>
          {
            board.map(item => (
              <div key={item.position}
                   className={s.boardPlate}
                   onClick={() => !item.card && handleClickBoardPlate(item.position)}
              >
                {
                  item.card && <PokemonCard {...item.card} isActive minimize />
                }
              </div>
            ))
          }
        </div>

        <div className={s.playerTwo}>
          <PlayerBoard
            player={2}
            cards={player2}
            onClickCard={(card) => setChoiceCard(card)}
          />
        </div>

        <Result
          type={result}
          isActive={isActive}
        />
      </div>
    </BoardContext.Provider>
  );
};

export default BoardPage;