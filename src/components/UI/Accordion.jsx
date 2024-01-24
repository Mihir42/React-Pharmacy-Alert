import PropTypes from "react";
import "./Accordion.scss";

function Accordion(props) {
  return (
    <div className="wrapper">
      <div className="accordion">
        <div className="title">
          {props.Drugs_Name}
          <span>⌄</span>
        </div>

        <div className="content">{props.Additional_Information}</div>
      </div>
    </div>
  );
}

export default Accordion;

Accordion.propTypes = {
  Drugs_Name: PropTypes.string,
  Additional_Information: PropTypes.string,
  Prescription_Dose: PropTypes.string,
};
