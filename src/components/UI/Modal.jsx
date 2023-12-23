import { createContext, useContext, useState, useCallBack } from "react";
import MediumCard from "./MediumCard";
import "./Modal.scss";

const ModalContext = createContext();

function Modal() {
  // Properties ---------------------------------------
  // State --------------------------------------------
  // Context ------------------------------------------
  const {
    modal: { show, title, content },
  } = useModal();
  // Methods ------------------------------------------
  // View ---------------------------------------------

  return show ? (
    <div className="ModalOverlay">
      <main className="ModalPane">
        <MediumCard>
          <header>
            <p>{title}</p>
          </header>
          <main className="ModalContent">{content}</main>
        </MediumCard>
      </main>
    </div>
  ) : null;
}

export default Modal;
