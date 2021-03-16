import s from './style.module.css';
import cn from 'classnames';

const Menu = ({ changePage,isActive }) => {
const handleClick = () => {
  console.log('home')
  changePage && changePage('home')
}
  return (
    <div className={cn(s.menuContainer, {[s.active]: isActive })}>
      <div className={s.overlay}/>
      <div className="menuItems">
        <ul>
          <li>
            <a href="#welcome"
               onClick={handleClick}
            >
              HOME
            </a>
          </li>
          <li>
            <a href="#game">
              GAME
            </a>
          </li>
          <li>
            <a href="#about">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;