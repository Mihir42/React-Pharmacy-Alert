import { useState, useEffect, useContext } from "react";
import Layout from "../layouts/Layout";
import Accordion from "../UI/Accordion";
import { LoginContext } from "../../App";
import callFetch from "../api/API";
import LargeCard from "../UI/LargeCard";

function UserPrescriptions() {
  // Initialisation -----------------------------
  const [id, setID] = useContext(LoginContext);
  const endpoint = `/prescriptions/patients/${id}`;

  // State ----------------------------------
  const [prescriptions, setPrescriptions] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading Records ...");

  // Context --------------------------------
  // Methods --------------------------------
  const apiCall = async (endpoint) => {
    const response = await callFetch(endpoint, "GET");
    response.isSuccess
      ? setPrescriptions(response.result)
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
      header2="Appointments"
      link2="/viewPatientAppointments"
    >
      <LargeCard title="Your prescriptions">
        {prescriptions == null ? (
          <p>{loadingMessage}</p>
        ) : (
          prescriptions.map((prescription) => (
            <Accordion
              key={prescription.Prescriptions_ID}
              index={prescription.Prescriptions_ID}
              title={prescription.Drugs_Name}
              item1={prescription.Prescriptions_Dose}
              item2={"Start Date " + prescription.PrescriptionsStartDate}
              item3={"End Date " + prescription.PrescriptionsEndDate}
              item4={"Frequency " + prescription.Prescriptions_Frequency}
            >
              {prescription.Prescriptions_Additional_Information}
            </Accordion>
          ))
        )}
      </LargeCard>
    </Layout>
  );
}

export default UserPrescriptions;
