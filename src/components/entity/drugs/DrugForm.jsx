import { useState } from "react";
import LargeCard from "../../UI/LargeCard.jsx";
import FormItem from "../../UI/FormItem.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import "./DrugForm.scss";

const emptyDrug = {
  DrugName: "Flintstones ",
  DrugDosage: "One before ",
  DrugSymptoms: "Muscle ",
};

function DrugForm({ onSubmit, intialdrug = emptyDrug, cardTitle }) {
  // Intialisation ----------------------------------------------
  const isValid = {
    DrugName: (name) => name.length > 3,
    DrugDosage: (name) => name.length > 3,
    DrugSymptoms: (name) => name.length > 3,
  };

  const errorMessage = {
    DrugName: "Drug name is too short",
    DrugDosage: "Drug dosage is too short",
    DrugSymptoms: "Drug symptoms is too short",
  };

  const navigate = useNavigate();

  // State ------------------------------------------------------
  const [drug, setDrug] = useState(intialdrug);
  const [errors, setErrors] = useState(
    Object.keys(intialdrug).reduce((accum, key) => ({ ...accum, [key]: null })),
    {}
  );

  // Handlers ---------------------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDrug({ ...drug, [name]: value });
    setErrors({
      ...errors,
      [name]: isValid[name](value) ? null : errorMessage[name],
    });
  };

  const isValidDrug = (drug) => {
    let isDrugValid = true;
    Object.keys(drug).forEach((key) => {
      console.log(key);
      if (isValid[key](drug[key])) {
        errors[key] = null;
      } else {
        errors[key] = errorMessage[key];
        isDrugValid = false;
      }
    });
    return isDrugValid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    isValidDrug(drug) && onSubmit(drug);
    setErrors({ ...errors });
    navigate("/viewDrug");
    window.location.reload();
  };
  const handleCancel = () => {};
  // View -------------------------------------------------------
  return (
    <LargeCard title={cardTitle}>
      <form className="borderForm">
        <FormItem
          label="Drug Name"
          htmlFor="DrugName"
          advice="Please enter the name of the drug"
          error={errors.DrugName}
        >
          <input
            className="textForm"
            type="text"
            name="DrugName"
            value={drug.DrugName}
            onChange={handleChange}
          />
        </FormItem>

        <FormItem
          label="Drug Dosage"
          htmlFor="DrugDosage"
          advice="Please enter the dosage of the drug"
          error={errors.DrugDosage}
        >
          <input
            className="textForm"
            type="text"
            name="DrugDosage"
            value={drug.DrugDosage}
            onChange={handleChange}
          />
        </FormItem>

        <FormItem
          label="Drug Symptoms"
          htmlFor="DrugSymptoms"
          advice="Please enter the symptoms of the drug"
          error={errors.DrugSymptoms}
        >
          <input
            className="textForm"
            type="text"
            name="DrugSymptoms"
            value={drug.DrugSymptoms}
            onChange={handleChange}
          />
        </FormItem>

        <button type="submit" value="cancel" onClick={handleCancel}>
          Cancel
        </button>

        <button
          type="submit"
          form="drugForm"
          value="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </LargeCard>
  );
}
//34:39
export default DrugForm;
