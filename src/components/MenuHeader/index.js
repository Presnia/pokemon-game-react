import React, { useState } from "react";
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="menuHeader">
      <Menu changePage={handleClick}/>
      <NavBar clickOnBtn={handleClick}/>
    </div>
  );
};

export default MenuHeader;