import { useState } from "react";
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <Menu openMenu={openMenu} />
      <NavBar openMenu={openMenu} toggleMenu={toggleMenu} />
    </>
  );
};

export default MenuNavbar;
