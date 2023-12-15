import PropTypes from "prop-types";
import { useState } from "react";
import "./FormString.scss";

function FormString(props) {
  const conformance = {
    html2js: {
      DrugName: (value) => (value === "" ? null : value),
      DrugDosage: (value) => (value === "" ? null : value),
      DrugSymptoms: (value) => (value === "" ? null : value),
    },

    js2html: {
      DrugName: (value) => (value === null ? "" : value),
      DrugDosage: (value) => (value === null ? "" : value),
      DrugSymptoms: (value) => (value === null ? "" : value),
    },
  };

  const [drug, setDrug] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDrug({ ...drug, [name]: conformance.html2js[name](value) });
  };

  return (
    <div className="drugForm">
      <div className="formTray">
        <label>
          {props.labelName}
          <input
            type="text"
            name="drugName"
            value={conformance.js2html["DrugName"](props.stateObject.DrugName)}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}

export default FormString;
