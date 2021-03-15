import s from './style.module.css';

const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage('app');
  }
  return (
    <div className={s.div}>
      This is Game Page!!!
      <button className={s.backHomeBtn} onClick={handleClick}>
        Going Home
      </button>
    </div>
  );
};

export default GamePage;