import React, { useState } from "react";
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = ({ bgActive }) => {
  const [isActive, setActive] = useState(null);

  const handleClickHamburg = () => {
    setActive(isActive => !isActive);
  };

  return (
    <div className="menuHeader">
      <Menu isActive={isActive} clickOnHamburg={handleClickHamburg}/>
      <NavBar clickOnHamburg={handleClickHamburg}
              isActive={isActive}
              bgActive={bgActive}
      />
    </div>
  );
};

export default MenuHeader;