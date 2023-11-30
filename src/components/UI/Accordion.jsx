import PropTypes from "prop-types";
import { useState } from "react";
import "./Accordion.scss";

function Accordion(props) {
  const title = props.title;
  const description = props.description;
  const symptoms = props.symptoms;

  const [isActive, setIsActive] = useState(false);

  //State ---------------------------------------

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>{title}</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && (
            <>
              <div className="accordion-description">{description}</div>
              <div className="accordion-symptoms">{symptoms}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  symptoms: PropTypes.string,
};

export default Accordion;
