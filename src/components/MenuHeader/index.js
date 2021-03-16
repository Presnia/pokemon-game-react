import React, { useState } from "react";
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {
  const [isActive, setActive] = useState(null);

  const handleClick = (val) => {
    setActive(val);
  };

  return (
    <div className="menuHeader">
      <Menu changePage={handleClick}
            isActive={isActive}
      />
      <NavBar clickOnBtn={handleClick}
              isActive={isActive}
      />
    </div>
  );
};

export default MenuHeader;