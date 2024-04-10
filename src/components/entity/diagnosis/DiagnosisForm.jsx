import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormItem from "../../UI/FormItem";

const emptyDiagnosis = {
  Diagnosis_Title: "Diagnosis title",
  Diagnosis_Description: "Diagnosis Description",
  Diagnosis_Patient: 100000,
  Diagnosis_GP: 400000,
};

function DiagnosisForm({
  onSubmit,
  initialDiagnosis = emptyDiagnosis,
  cardTitle,
}) {
  // Initialisation -----------------------------
  const isValid = {
    Diagnosis_Title: (name) => name.length > 3,
    Diagnosis_Description: (name) => name.length > 3,
    Diagnosis_Patient: (name) => name == 100000 || name == 100001,
    Diagnosis_GP: (name) => name == 400000,
  };

  const errorMessage = {
    Diagnosis_Title: "Diagnosis title is too short",
    Diagnosis_Description: "Diagnosis description is too short",
    Diagnosis_Patient: "Patient ID not valid",
    Diagnosis_GP: "GP ID not valid",
  };

  const navigate = useNavigate();

  // State ----------------------------------
  const [diagnosis, setDiagnosis] = useState(initialDiagnosis);
  const [errors, setErrors] = useState(
    Object.keys(initialDiagnosis).reduce((accum, key) => ({
      ...accum,
      [key]: null,
    })),
    {}
  );
  // Context --------------------------------
  // Methods --------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDiagnosis({ ...diagnosis, [name]: value });
    setErrors({
      ...errors,
      [name]: isValid[name](value) ? null : errorMessage[name],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(diagnosis);
    setErrors({ ...errors });
    navigate("/viewDiagnosis");
    window.location.reload();
  };

  const handleCancel = () => {};

  console.log(diagnosis);

  return (
    <form className="borderFormDiagnosis">
      <FormItem
        label="Diagnosis title"
        htmlFor="Diagnosis title"
        advice="Please enter diagnosis title"
        error={errors.Diagnosis_Title}
      >
        <input
          className="textForm"
          type="text"
          name="Diagnosis_Title"
          value={diagnosis.Diagnosis_Title}
          onChange={handleChange}
        />
      </FormItem>

      <FormItem
        label="Diagnosis description"
        htmlFor="Diagnosis description"
        advice="Please enter diagnosis description"
        error={errors.Diagnosis_Description}
      >
        <input
          className="textForm"
          type="text"
          name="Diagnosis_Description"
          value={diagnosis.Diagnosis_Description}
          onChange={handleChange}
        />
      </FormItem>

      <FormItem
        label="Diagnosis patient"
        htmlFor="Diagnosis patient"
        advice="Please enter diagnosis patient"
        error={errors.Diagnosis_Patient}
      >
        <input
          className="textForm"
          type="text"
          name="Diagnosis_Patient"
          value={diagnosis.Diagnosis_Patient}
          onChange={handleChange}
        />
      </FormItem>

      <FormItem
        label="Diagnosis GP"
        htmlFor="Diagnosis GP"
        advice="Please enter diagnosis GP"
        error={errors.Diagnosis_GP}
      >
        <input
          className="textForm"
          type="text"
          name="Diagnosis_GP"
          value={diagnosis.Diagnosis_GP}
          onChange={handleChange}
        />
      </FormItem>

      <button
        className="bookAppointmentSubmitButton"
        type="submit"
        form="borderFormDiagnosis"
        value="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}

export default DiagnosisForm;
