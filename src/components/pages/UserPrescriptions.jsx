import { useState, useEffect, useContext } from "react";
import Layout from "../layouts/Layout";
import { LoginContext } from "../../App";
import API from "../api/API";
import "../UI/Table.scss";
import callFetch from "../api/API";

function UserPrescriptions() {
  // Initialisation -----------------------------
  const [id, setID] = useContext(LoginContext);

  const endpoint = `/prescriptions/${id}`;

  // State ----------------------------------
  const [drugs, setDrugs] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading Records ...");

  // Context --------------------------------
  // Methods --------------------------------
  const apiCall = async (endpoint) => {
    const response = await callFetch(endpoint, "GET");
    response.isSuccess
      ? setDrugs(response.result)
      : setLoadingMessage(response.message);
  };

  useEffect(() => {
    apiCall(endpoint);
  }, [endpoint]);

  // View -----------------------------------
  return (
    <Layout>
      <table>
        <tr>
          <th>Drug Name</th>
          <th>Drug Dosage</th>
          <th>Drug Symptoms</th>
        </tr>

        {!drugs ? (
          <p>{loadingMessage}</p>
        ) : drugs.length === 0 ? (
          <p>No drugs Found</p>
        ) : (
          drugs.map((drug) => (
            <tr>
              <td>{drug.DrugName}</td>
              <td>{drug.DrugDosage}</td>
              <td>{drug.DrugSymptoms}</td>
            </tr>
          ))
        )}
      </table>
    </Layout>
  );
}
UserPrescriptions.propTypes = {};
export default UserPrescriptions;
