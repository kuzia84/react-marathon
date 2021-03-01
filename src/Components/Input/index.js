import s from "./style.module.css";
import cn from "classnames";

const Input = ({
  type = "text",
  label,
  required = null,
  name,
  value,
  onChange,
}) => {
  return (
    <div className={s.root}>
      <input
        name={name}
        type={type}
        className={cn(s.input, { [s.valid]: value })}
        value={value}
        onChange={onChange}
        required={required}
      />
      <span className={s.highlight}></span>
      <span className={s.bar}></span>
      <label className={s.label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Input;
