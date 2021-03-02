import { useState, useEffect } from "react";
import Input from "../Input";

const LoginForm = ({ onSubmit, isOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit && onSubmit({ email, password });
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);
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
      <button>LOGIN</button>
    </form>
  );
};
export default LoginForm;
