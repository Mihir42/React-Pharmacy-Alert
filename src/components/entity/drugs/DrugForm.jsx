import { useState } from "react";
import LargeCard from "../../UI/LargeCard.jsx";
import MediumCard from "../../UI/MediumCard.jsx";
import FormItem from "../../UI/FormItem.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import "./DrugForm.scss";

const emptyDrug = {
  Drugs_Name: "Flintstones gummies ",
  Drugs_Route: "Oral ",
  Drugs_Side_Affects: "Increase muscle mass ",
};

function DrugForm({ onSubmit, intialdrug = emptyDrug, cardTitle }) {
  // Intialisation ----------------------------------------------
  const isValid = {
    Drugs_Name: (name) => name.length > 3,
    Drugs_Route: (name) => name.length > 3,
    Drugs_Side_Affects: (name) => name.length > 3,
  };

  const errorMessage = {
    Drugs_Name: "Drug name is too short",
    Drugs_Route: "Drug dosage is too short",
    Drugs_Side_Affects: "Drug symptoms is too short",
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
          htmlFor="Drugs_Name"
          advice="Please enter the name of the drug"
          error={errors.Drugs_Name}
        >
          <input
            className="textForm"
            type="text"
            name="Drugs_Name"
            value={drug.Drugs_Name}
            onChange={handleChange}
          />
        </FormItem>

        <FormItem
          label="Drug Route"
          htmlFor="Drugs_Route"
          advice="Please enter the dosage of the drug"
          error={errors.Drugs_Route}
        >
          <input
            className="textForm"
            type="text"
            name="Drugs_Route"
            value={drug.Drugs_Route}
            onChange={handleChange}
          />
        </FormItem>

        <FormItem
          label="Drug Side Affects"
          htmlFor="Drugs_Side_Affects"
          advice="Please enter the side affects of the drug"
          error={errors.Drugs_Side_Affects}
        >
          <input
            className="textForm"
            type="text"
            name="Drugs_Side_Affects"
            value={drug.Drugs_Side_Affects}
            onChange={handleChange}
          />
        </FormItem>
      </form>
      <button
        className="cancelButton"
        type="submit"
        value="cancel"
        onClick={handleCancel}
      >
        Cancel
      </button>
      <button
        className="submitButton"
        type="submit"
        form="drugForm"
        value="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </LargeCard>
  );
}
//34:39
export default DrugForm;
