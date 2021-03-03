import { useState, useEffect } from "react";
import Input from "../Input";
import s from "./style.module.css";

const LoginForm = ({ onSubmit, isOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalType, setModalType] = useState("Login");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({ email, password, modalType });
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);
  const changeModalType = () => {
    setModalType(modalType === "Login" ? "Register" : "Login");
  };

  return (
    <form onSubmit={handleSubmitForm} id="loginForm">
      <Input
        name="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required="required"
      />
      <Input
        type="password"
        name="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required="required"
      />
      <button>{modalType}</button>
      <span className={s.switch} onClick={changeModalType}>
        {modalType === "Login" ? "Register?" : "Login?"}
      </span>
    </form>
  );
};
export default LoginForm;
