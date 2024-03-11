import { useEffect, useState } from "react";
import LargeCard from "../UI/LargeCard";
import Layout from "../layouts/Layout";
import { LoginContext } from "../../App";
import callFetch from "../api/API";
import Accordion from "../UI/Accordion";

function ViewDiagnosis() {
  // Intialisation ------------------------------------
  const [id, setID] = useState(LoginContext);
  const endpoint = `/diagnosis`;

  // State --------------------------------------------
  const [diagnosis, setDiagnosis] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading records...");

  // Context ------------------------------------------
  // Methods ------------------------------------------
  const apiCall = async (endpoint) => {
    const response = await callFetch(endpoint, "GET");
    response.isSuccess
      ? setDiagnosis(response.result)
      : setLoadingMessage(response.message);
  };

  useEffect(() => {
    apiCall(endpoint);
  }, [endpoint]);

  // View ---------------------------------------------
  return (
    <Layout>
      <LargeCard title="Diagnosis">
        {diagnosis == null ? (
          <p>{loadingMessage}</p>
        ) : (
          diagnosis.map((diag) => (
            <Accordion
              key={diag.Diagnosis_ID}
              index={diag.Diagnosis_ID}
              title={diag.Diagnosis_Title}
              item1={
                "Patient " + diag.PatientFirstName + " " + diag.PatientLastName
              }
              item2={"GP " + diag.GP_First_Name + " " + diag.GP_Last_Name}
              item3={"E mail " + diag.GP_E_Mail_Address}
            >
              {diag.Diagnosis_Description}
            </Accordion>
          ))
        )}
      </LargeCard>
    </Layout>
  );
}

export default ViewDiagnosis;
