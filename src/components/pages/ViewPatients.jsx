import { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import callFetch from "../api/API";
import { Navigate, useNavigate } from "react-router-dom";
import LargeCard from "../UI/LargeCard";
import Bar from "../UI/Bar";
import Card from "../UI/Card";

function ViewPatients() {
  // Initialisation -----------------------------
  const endpoint = `/patients`;
  const navigate = useNavigate();

  // State ----------------------------------
  const [patients, setPatients] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading Records ...");

  // Context --------------------------------
  // Methods --------------------------------

  const handleNavigate = (patient) => {
    navigate("/patientDetails", { state: { patient } });
  };

  const apiCall = async (endpoint) => {
    const response = await callFetch(endpoint, "GET");
    response.isSuccess
      ? setPatients(response.result)
      : setLoadingMessage(response.message);
  };

  useEffect(() => {
    apiCall(endpoint);
  }, [endpoint]);

  // View -----------------------------------
  return (
    <Layout>
      <LargeCard title="Your patients">
        <div className="border-patients">
          {patients != null ? (
            patients.map((patient) => (
              <Card key={patient.PatientID}>
                <img className="patient-image" src={patient.PatientImage}></img>
                <div className="line-1">
                  {patient.PatientFirstName} {patient.PatientLastName}
                </div>
                <div className="line-2">{patient.PatientPhoneNumber}</div>
                <button
                  className="patient-button"
                  onClick={() => handleNavigate(patient)}
                >
                  Click for more info
                </button>
              </Card>
            ))
          ) : (
            <Bar>{"Loading records please wait"}</Bar>
          )}
        </div>
      </LargeCard>
    </Layout>
  );
}

export default ViewPatients;
