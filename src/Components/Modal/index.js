import { useRef, useEffect } from "react";
import cn from "classnames";
import s from "./style.module.css";

const Modal = ({ title, children, onCloseModal, isOpen }) => {
  useEffect(() => {
    document.querySelector("body").style.overflow = isOpen ? "hidden" : null;
  }, [isOpen]);
  const modalEl = useRef();
  const handleCloseModal = () => {
    onCloseModal && onCloseModal(false);
  };
  const handleClickRoot = (event) => {
    if (!modalEl.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  return (
    <div className={cn(s.root, { [s.open]: isOpen })} onClick={handleClickRoot}>
      <div className={s.modal} ref={modalEl}>
        <div className={s.head}>
          {title}
          <span className={s.btnClose} onClick={handleCloseModal}></span>
        </div>
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
