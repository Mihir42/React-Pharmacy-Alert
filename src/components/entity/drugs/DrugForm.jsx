import { useState } from "react";
import PropTypes from "prop-types";
import "./DrugForm.scss";

const initialDrug = {
  DrugName: "Flintstones gummies",
  DrugDosage: "How many you can handle",
  DrugSymptoms: "MAximum power",
};

function DrugForm() {
  // Initialisation ------------------------------------
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

  const apiURL = "http://localhost:5000/api";
  const postEndpoint = `${apiURL}/drugs`;
  // State ---------------------------------------------
  const [drug, setDrug] = useState(initialDrug);

  const apiPost = async (postEndpoint, record) => {
    // Build request
    const request = {
      method: "POST",
      body: JSON.stringify(record),
      headers: { "Content-type": "application/json" },
    };

    // Call fetch
    const response = await fetch(postEndpoint, request);
    const result = await response.json();
    return response.status >= 200 && response.status <= 300
      ? { isSuccess: true }
      : { isSuccess: false, message: result.message };
  };
  // Handlers ------------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDrug({ ...drug, [name]: conformance.html2js[name](value) });
  };

  const handleSubmit = async () => {
    console.log(`Drugs=[${JSON.stringify(drug)}]`);
    const result = await apiPost(postEndpoint, drug);
    result.isSuccess
      ? console.log("Insert successful")
      : console.log(`Insert not successfull: ${result.message}`);
  };
  // View ----------------------------------------------
  return (
    <div className="drugForm">
      <div className="formTray">
        <label>
          Drug Name
          <input
            type="text"
            name="drugName"
            value={conformance.js2html["DrugName"](drug.DrugName)}
            onChange={handleChange}
          />
        </label>
        <label>
          Drug Dosage
          <input
            type="text"
            name="drugDosage"
            value={conformance.js2html["DrugDosage"](drug.DrugDosage)}
            onChange={handleChange}
          />
        </label>

        <label>
          Drug Symptoms
          <input
            type="text"
            name="drugSymptoms"
            value={conformance.js2html["DrugSymptoms"](drug.DrugSymptoms)}
            onChange={handleChange}
          />
        </label>
      </div>
      <button
        type="submit"
        form="drugForm"
        value="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default DrugForm;
