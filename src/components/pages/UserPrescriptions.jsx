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
    <Layout>
      <LargeCard title="Your prescriptions">
        {!prescriptions ? (
          <p>{loadingMessage}</p>
        ) : prescriptions.length === 0 ? (
          <p>No drugs Found</p>
        ) : (
          prescriptions.map((prescription) => (
            <Accordion
              key={prescription.Prescription_ID}
              Drugs_Name={[
                prescription.Drugs_Name,
                " ",
                prescription.Prescriptions_Dose,
                " ",
                prescription.Drugs_Route,
                " ",
                prescription.Prescriptions_Frequency,
                " ",
                prescription.PrescriptionsStartDate,
                " ",
                prescription.PrescriptionsEndDate,
              ]}
              Additional_Information={
                prescription.Prescriptions_Additional_Information
              }
            />
          ))
        )}
      </LargeCard>
    </Layout>
  );
}

export default UserPrescriptions;
