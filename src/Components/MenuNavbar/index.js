import { useState } from "react";
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuNavbar = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const handleClickHamburger = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <Menu isOpen={isOpen} onClickHamburger={handleClickHamburger} />
      <NavBar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickHamburger={handleClickHamburger}
      />
    </>
  );
};

export default MenuNavbar;
