import s from './style.module.css';
import cn from 'classnames';

const Menu = ({ changePage }) => {
  const handleChange = () => {
    console.log('===> <Menu/>')
    changePage && changePage();
  }
  return (
    <div className={cn(s.menuContainer, s.deactive)}
         onChange={handleChange}
    >
      <div className={s.overlay}/>
      <div className="menuItems">
        <ul>
          <li>
            <a href="#welcome">
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