import { useState } from "react";
import LoginForm from "../LoginForm";
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
  const handleSubmitLoginForm = (values) => {
    console.log("values: ", values);
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
        onCloseModal={handleClickLogin}
        isOpen={isOpenModal}
      >
        <LoginForm onSubmit={handleSubmitLoginForm} isOpen={isOpenModal} />
      </Modal>
    </>
  );
};

export default MenuNavbar;
