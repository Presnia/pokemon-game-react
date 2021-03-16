import React from "react";
import s from './style.module.css';
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {
  return (
    <div className={s.menuHeader}>
      <Menu />
      <NavBar />
    </div>
  );
};

export default MenuHeader;