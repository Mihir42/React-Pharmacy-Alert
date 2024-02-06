import { useState } from "react";
import PropTypes from "prop-types";
import "./Accordion.scss";

function Accordion(props) {
  // Initialisation -----------------------------
  // State --------------------------------------
  const [selected, setSelected] = useState(null);
  const [index] = useState(0);
  // Context ------------------------------------
  // Methods ------------------------------------

  const toggle = (index) => {
    if (selected == index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  // View ---------------------------------------

  return (
    <div className="wrapper">
      <div className="accordion" onClick={() => toggle(index)}>
        <div className="title">{props.title}</div>
        <div className="item-1">{props.item1}</div>
        <div className="item-2">{props.item2}</div>
        <div className="item-3">{props.item3}</div>
        <span className="toggle">{selected == index ? "▼" : "◀"}</span>
      </div>
      <div
        className={
          selected == index
            ? "additional-information-show"
            : "additional-information"
        }
      >
        Additional Information:
        <div className="basement">{props.children}</div>
      </div>
    </div>
  );
}

export default Accordion;

Accordion.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  item1: PropTypes.string,
  item2: PropTypes.string,
  item3: PropTypes.string,
  children: PropTypes.node,
};
