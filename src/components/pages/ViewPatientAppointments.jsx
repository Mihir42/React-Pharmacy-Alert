import { useState, useEffect } from "react";
import callFetch from "../api/API";
import Layout from "../layouts/Layout";
import LargeCard from "../UI/LargeCard";
import Bar from "../UI/Bar";
import { Navigate, useNavigate } from "react-router-dom";

function ViewPatientAppointments() {
  // Initialisation -----------------------------
  const endpoint = `/appointments`;
  const navigate = useNavigate();

  // State ----------------------------------
  const [appointments, setAppointments] = useState();
  const [loadingMessage, setLoadingMessage] = useState("Loading Records ...");

  // Context --------------------------------
  // Methods --------------------------------

  const handleNavigateAppointment = () => {
    navigate("/bookAppointments");
  };

  const apiCall = async (endpoint) => {
    const response = await callFetch(endpoint, "GET");
    response.isSuccess
      ? setAppointments(response.result)
      : setLoadingMessage(response.message);
  };

  useEffect(() => {
    apiCall(endpoint);
  }, [endpoint]);

  // View -----------------------------------
  return (
    <Layout
      header1="Prescriptions"
      link1="/home"
      header2={"Appointments"}
      link2="/viewPatientAppointments"
    >
      <LargeCard title="Your appointments">
        <button className="add-appointment" onClick={handleNavigateAppointment}>
          Book a new appointment
        </button>
        {appointments != null ? (
          appointments.map((appointment) => (
            <Bar key={appointment.Appointment_ID}>
              <div className="item-one">{appointment.Appointment_Name}</div>
              <div className="item-one">{appointment.Appointment_Details}</div>
              <div className="item-one">
                GP: {appointment.GP_First_Name} {appointment.GP_Last_Name}{" "}
              </div>
              <div className="item-one">
                {" "}
                E Mail: {appointment.GP_E_Mail_Address}
              </div>
            </Bar>
          ))
        ) : (
          <Bar>{loadingMessage}</Bar>
        )}
      </LargeCard>
    </Layout>
  );
}

export default ViewPatientAppointments;
