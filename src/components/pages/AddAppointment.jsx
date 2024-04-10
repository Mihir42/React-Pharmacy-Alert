import callFetch from "../api/API";
import { useState } from "react";
import LargeCard from "../UI/LargeCard";
import Layout from "../layouts/Layout";
import AppointmentForm from "../entity/appointments/AppointmentForm";

function AddAppointment() {
  // Initialisation -----------------------------
  const endpoint = `/appointments`;
  // State ----------------------------------
  const [appointments, setAppointments] = useState(null);
  // Context --------------------------------
  // Methods --------------------------------
  const handleSubmit = async (appointment) => {
    const response = await callFetch(endpoint, "POST", appointment);
    return response.isSuccess ? setAppointments() || true : false;
  };
  // View -----------------------------------
  return (
    <Layout>
      <LargeCard title="Book an appointment">
        <AppointmentForm onSubmit={handleSubmit} />
      </LargeCard>
    </Layout>
  );
}

export default AddAppointment;
