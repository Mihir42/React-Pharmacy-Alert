import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import callFetch from "../api/API";
import LargeCard from "../UI/LargeCard";
import Bar from "../UI/Bar";

function ViewPatients() {
  // Initialisation -----------------------------
  const endpoint = `/patients`;
  const navigate = useNavigate();

  // State ----------------------------------
  const [patients, setPatients] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading Records ...");

  // Context --------------------------------
  // Methods --------------------------------

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
        {patients != null ? (
          patients.map((patient) => (
            <Bar key={patient.PatientID}>
              <div className="item-one">{patient.PatientFirstName}</div>
              <div className="item-two">{patient.PatientLastName}</div>
              <div className="item-three">{patient.PatientEmailAddress}</div>
              <div className="item-four">{patient.PatientPhoneNumber}</div>
            </Bar>
          ))
        ) : (
          <Bar>{"Loading records please wait"}</Bar>
        )}
      </LargeCard>
    </Layout>
  );
}

export default ViewPatients;
