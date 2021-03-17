import s from './style.module.css';
import cn from 'classnames';

const NavBar = ({ clickOnHamburg, isActive, bgActive = false}) => {
  const handleClick = () => {
    clickOnHamburg && clickOnHamburg('menuItems');
  }
  return (
    <nav id={s.navbar} className={cn({
      [s.bgActive]: bgActive
    })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <div className={cn(s.menuButton, {
              [s.active]: isActive
           })}
           onClick={() => handleClick()}
        >
          <span/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;