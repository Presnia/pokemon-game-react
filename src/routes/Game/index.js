import s from './style.module.css';
import Button from "../../components/Button";
import cn from 'classnames';

const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage('app');
  }
  return (
    <div className={s.div}>
      This is Game Page!!!
      <button className={cn(Button, s.back)} text="Going Home" onClick={handleClick}>
        Going Home
      </button>
    </div>
  );
};

export default GamePage;