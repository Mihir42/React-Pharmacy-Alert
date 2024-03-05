import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import LargeCard from "../UI/LargeCard";
import Accordion from "../UI/Accordion";
import callFetch from "../api/API";

function PharmacistPrescriptions() {
  // Initialisation -----------------------------
  const endpoint = "/prescriptions";

  // State --------------------------------------
  const [prescriptions, setPrescriptions] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading records...");

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
      header1="Drugs"
      link1="/viewDrug"
      header2="Add Drugs"
      link2="/addDrug"
      header3="Add Prescriptions"
      link3="/addPrescription"
    >
      <LargeCard title={"Patients prescriptions"}>
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
              item4={
                prescription.PatientFirstName +
                " " +
                prescription.PatientLastName
              }
            >
              {prescription.Prescriptions_Additional_Information}
            </Accordion>
          ))
        )}
      </LargeCard>
    </Layout>
  );
}

export default PharmacistPrescriptions;
