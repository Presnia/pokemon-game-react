import './style.module.css';
import PokemonCard from "../../../../../../components/PokemonCard";
import s from "../../style.module.css";

const PlayerBoard = ({ cards }) => {
  return (
    <div>
      {
        cards.map(({id, name, img, type, values}) => (
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
  );
};

export default PlayerBoard;