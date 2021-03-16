import s from './style.module.css';
import Button from "../Button";

const Header = ({ title, descr, onClickBtn }) => {
  const handleClick = () => {
    onClickBtn && onClickBtn('game');
  }
  return (
    <header className={s.root}>
      <div className={s.forest}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button className={Button}
                text="Start Game"
                onClick={handleClick}>
          Start Game
        </button>
      </div>
    </header>
  )
}

export default Header;