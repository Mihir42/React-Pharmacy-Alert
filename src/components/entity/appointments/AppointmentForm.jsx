import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormItem from "../../UI/FormItem";

const emptyAppointment = {
  Appointment_Name: "Appointment 1",
  Appointment_Details: "Appointment details 1",
  Appointment_GP_ID: 400000,
  Appointment_Patient_ID: 100000,
};
function AppointmentForm({
  onSubmit,
  initialAppointment = emptyAppointment,
  cardTitle,
}) {
  // Initialisation -----------------------------
  const isValid = {
    Appointment_Name: (name) => name.length > 3,
    Appointment_Details: (name) => name.length > 3,
    Appointment_GP_ID: (name) => name == 400000,
    Appointment_Patient_ID: (name) => name == 100000 || name == 100001,
  };

  const errorMessage = {
    Appointment_Name: "Appointment name is too short",
    Appointment_Details: "Appointment description is too short",
    Appointment_GP_ID: "Appointment GP ID is not valid",
    Appointment_Patient_ID: "Appointment Patient ID is not valid",
  };

  const navigate = useNavigate();

  // State ----------------------------------
  const [appointments, setAppointments] = useState(initialAppointment);
  const [errors, setErrors] = useState(
    Object.keys(initialAppointment).reduce((accum, key) => ({
      ...accum,
      [key]: null,
    })),
    {}
  );
  // Context --------------------------------
  // Methods --------------------------------
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppointments({ ...appointments, [name]: value });
    setErrors({
      ...errors,
      [name]: isValid[name](value) ? null : errorMessage[name],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(appointments);
    setErrors({ ...errors });
    navigate("/viewPatientAppointments");
    window.location.reload();
  };
  const handleCancel = () => {};

  console.log(appointments);
  // View -----------------------------------
  return (
    <form className="borderFormAppointments">
      <FormItem
        label="Appointment Name"
        htmlFor="Appointment Name"
        advice="Please enter appointment name"
        error={errors.Appointment_Name}
      >
        <input
          className="textForm"
          type="text"
          name="Appointment_Name"
          value={appointments.Appointment_Name}
          onChange={handleChange}
        />
      </FormItem>

      <FormItem
        label="Appointment Details"
        htmlFor="Appointment Details"
        advice="Please enter appointment details"
        error={errors.Appointment_Details}
      >
        <input
          className="textForm"
          type="text"
          name="Appointment_Details"
          value={appointments.Appointment_Details}
          onChange={handleChange}
        />
      </FormItem>

      <FormItem
        label="Appointment GP"
        htmlFor="Appointment GP"
        advice="Please enter appointment GP"
        error={errors.Appointment_GP_ID}
      >
        <input
          className="textForm"
          type="text"
          name="Appointment_GP_ID"
          value={appointments.Appointment_GP_ID}
          onChange={handleChange}
        />
      </FormItem>

      <FormItem
        label="Appointment Patient"
        htmlFor="Appointment Patient"
        advice="Please enter appointment patient details"
        error={errors.Appointment_Patient_ID}
      >
        <input
          className="textForm"
          type="text"
          name="Appointment_Patient_ID"
          value={appointments.Appointment_Patient_ID}
          onChange={handleChange}
        />
      </FormItem>

      <button
        className="bookAppointmentSubmitButton"
        type="submit"
        form="borderFormAppointments"
        value="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}

export default AppointmentForm;
