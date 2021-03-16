import s from './style.module.css';
import cn from 'classnames';

const NavBar = ({ clickOnBtn }) => {
  const handleClick = () => {
    console.log('===> <NavBar/>');
    clickOnBtn && clickOnBtn();
  }
  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          LOGO
        </p>
        <a className={cn(s.menuButton, s.deactive)}
           onClick={handleClick}
        >
          <span/>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;