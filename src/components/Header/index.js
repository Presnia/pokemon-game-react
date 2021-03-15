import s from './style.module.css';

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
        <button className={s.start} onClick={handleClick}>
          Start Game
        </button>
      </div>
    </header>
  )
}

export default Header;