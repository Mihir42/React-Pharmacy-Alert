import { useState } from "react";
import LargeCard from "../../UI/LargeCard.jsx";
import FormItem from "../../UI/FormItem.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import "./PrescriptionForm.scss";

const emptyPrescription = {
  PrescriptionsStartDate: "01-01-2024",
  PrescriptionsEndDate: "02-03-2024",
  PrescriptionsDrugID: 4000,
  Prescriptions_Dose: "2mg",
  Prescriptions_Frequency: "Weekly",
  Prescriptions_Additional_Information: "Be careful lad",
  Prescriptions_Patient_ID: 100000,
};

function PrescriptionForm({
  onSubmit,
  initialPrescription = emptyPrescription,
  cardTitle,
}) {
  // Intialisation ----------------------------------------------
  const isValid = {
    PrescriptionsStartDate: (name) => name.length > 1,
    PrescriptionsEndDate: (name) => name.length > 9,
    PrescriptionsDrugID: (name) => name >= 4000,
    Prescriptions_Dose: (name) => name.length > 3,
    Prescriptions_Frequency: (name) => name.length > 3,
    Prescriptions_Additional_Information: (name) => name.length > 3,
    Prescriptions_Patient_ID: (name) => name >= 100000,
  };

  const errorMessage = {
    PrescriptionsStartDate: "Too short",
    PrescriptionsEndDate: "Too short",
    PrescriptionsDrugID: "Not a valid Drug",
    Prescriptions_Dose: "Too short",
    Prescriptions_Frequency: "Too short",
    Prescriptions_Additional_Information: "Too short",
    Prescriptions_Patient_ID: "Not a real patient",
  };

  const navigate = useNavigate();

  // State ------------------------------------------------------
  const [prescriptions, setPrescriptions] = useState(initialPrescription);
  const [errors, setErrors] = useState(
    Object.keys(initialPrescription).reduce((accum, key) => ({
      ...accum,
      [key]: null,
    })),
    {}
  );

  // Handlers ---------------------------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPrescriptions({ ...prescriptions, [name]: value });
    setErrors({
      ...errors,
      [name]: isValid[name](value) ? null : errorMessage[name],
    });
  };

  const isValidPrescription = (prescription) => {
    let isPrescriptionValid = true;
    Object.keys(prescription).forEach((key) => {
      console.log(key);
      if (isValid[key](prescription[key])) {
        errors[key] = null;
      } else {
        errors[key] = errorMessage[key];
        isPrescriptionValid = false;
      }
    });
    return isPrescriptionValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(prescriptions);
    setErrors({ ...errors });
    navigate("/");
    window.location.reload();
  };
  const handleCancel = () => {};

  return (
    <LargeCard title={cardTitle}>
      <form className="borderFormPrescriptions">
        <FormItem
          label="PrescriptionsStartDate"
          htmlFor="PrescriptionsStartDate"
          advice="Please enter date"
          error={errors.PrescriptionsStartDate}
        >
          <input
            className="textForm"
            type="text"
            name="PrescriptionsStartDate"
            value={prescriptions.PrescriptionsStartDate}
            onChange={handleChange}
          />
        </FormItem>

        <FormItem
          label="PrescriptionsEndDate"
          htmlFor="PrescriptionEndDate"
          advice="Please enter the date"
          error={errors.PrescriptionsEndDate}
        >
          <input
            className="textForm"
            type="text"
            name="PrescriptionsEndDate"
            value={prescriptions.PrescriptionsEndDate}
            onChange={handleChange}
          />
        </FormItem>

        <FormItem
          label="PrescriptionsDrugID"
          htmlFor="PrescriptionsDrugID"
          advice="Please enter the drug medication"
          error={errors.PrescriptionsDrugID}
        >
          <input
            className="textForm"
            type="text"
            name="PrescriptionsDrugID"
            value={prescriptions.PrescriptionsDrugID}
            onChange={handleChange}
          />
        </FormItem>

        <FormItem
          label="Prescriptions_Dose"
          htmlFor="Prescriptions_Dose"
          advice="Please enter the dose"
          error={errors.Prescriptions_Dose}
        >
          <input
            className="textForm"
            type="text"
            name="Prescriptions_Dose"
            value={prescriptions.Prescriptions_Dose}
            onChange={handleChange}
          />
        </FormItem>

        <FormItem
          label="Prescriptions_Frequency"
          htmlFor="Prescriptions_Frequency"
          advice="Please enter the frequency"
          error={errors.Prescriptions_Frequency}
        >
          <input
            className="textForm"
            type="text"
            name="Prescriptions_Frequency"
            value={prescriptions.Prescriptions_Frequency}
            onChange={handleChange}
          />
        </FormItem>

        <FormItem
          label="Prescriptions_Additional_Information"
          htmlFor="Prescriptions_Additional_Information"
          advice="Please enter the additional information"
          error={errors.Prescriptions_Additional_Information}
        >
          <input
            className="textForm"
            type="text"
            name="Prescriptions_Additional_Information"
            value={prescriptions.Prescriptions_Additional_Information}
            onChange={handleChange}
          />
        </FormItem>

        <FormItem
          label="Prescriptions_Patient_ID"
          htmlFor="Prescriptions_Patient_ID"
          advice="Prescriptions_Patient_ID"
          error={errors.Prescriptions_Patient_ID}
        >
          <input
            className="textForm"
            type="text"
            name="Prescriptions_Patient_ID"
            value={prescriptions.Prescriptions_Patient_ID}
            onChange={handleChange}
          />
        </FormItem>

        <button type="submit" value="cancel" onClick={handleCancel}>
          Cancel
        </button>

        <button
          type="submit"
          form="prescriptionForm"
          value="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </LargeCard>
  );
}

export default PrescriptionForm;
