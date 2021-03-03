import { useState } from "react";
import { NotificationManager } from "react-notifications";

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
  const handleSubmitLoginForm = async ({ email, password, modalType }) => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    };
    if (modalType === "Login") {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA_JheDgSjEyNl1RPH70m94KChdpeiBZi0",
        requestOptions
      ).then((res) => res.json());
      if (response.hasOwnProperty("error")) {
        NotificationManager.error(response.error.message, "Ошибка!");
      } else {
        NotificationManager.success("Вы вошли");
      }
      console.log("response: ", response);
    } else if (modalType === "Register") {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA_JheDgSjEyNl1RPH70m94KChdpeiBZi0",
        requestOptions
      ).then((res) => res.json());
      if (response.hasOwnProperty("error")) {
        NotificationManager.error(response.error.message, "Ошибка!");
      } else {
        NotificationManager.success("Вы зарегистрировались");
      }
      console.log("response: ", response);
    }
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
      <Modal title="Auth" onCloseModal={handleClickLogin} isOpen={isOpenModal}>
        <LoginForm onSubmit={handleSubmitLoginForm} isOpen={isOpenModal} />
      </Modal>
    </>
  );
};

export default MenuNavbar;
