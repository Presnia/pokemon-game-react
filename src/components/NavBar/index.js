import s from './style.module.css';
import cn from 'classnames';

const NavBar = ({ clickOnBtn, isActive}) => {
  const handleClick = () => {
    clickOnBtn && clickOnBtn('menuItems');
  }
  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <a className={cn(s.menuButton, {[s.active]: isActive}, {[s.deactive]: !isActive})}
           onClick={() => handleClick()}
        >
          <span/>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;