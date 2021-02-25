import { useState } from "react";
import Menu from "../Menu";
import Modal from "../Modal";
import NavBar from "../NavBar";

const MenuNavbar = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);
  const handleClickHamburger = () => {
    setOpen((prevState) => !prevState);
  };
  const [isOpenModal, setOpenModal] = useState(false);
  const handleClickLogin = () => {
    setOpenModal((prevState) => !prevState);
  };
  return (
    <>
      <Menu isOpen={isOpen} onClickHamburger={handleClickHamburger} />
      <NavBar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickHamburger={handleClickHamburger}
        onClickLogin={handleClickLogin}
      />
      <Modal
        title="Log in ..."
        onCloseModel={handleClickLogin}
        isOpen={isOpenModal}
      >
        Some text here...
      </Modal>
    </>
  );
};

export default MenuNavbar;
