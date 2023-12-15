import { useState, useEffect } from "react";
import Layout from "../layouts/Layout";
import Accordion from "../UI/Accordion";
import API from "../api/API";
import callFetch from "../api/API";

function ViewDrugs() {
  // Initialisation -----------------------------
  const endpoint = `/drugs`;

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
      <section>
        {!drugs ? (
          <p>{loadingMessage}</p>
        ) : drugs.length === 0 ? (
          <p>No drugs Found</p>
        ) : (
          drugs.map((drug) => (
            <Accordion
              key={drug.DrugID}
              title={drug.DrugName}
              description={drug.DrugDosage}
            >
              <button type="submit" form="editForm" value="submit">
                Edit Drug
              </button>

              <button type="submit" form="editForm" value="submit">
                Delete Drug
              </button>
            </Accordion>
          ))
        )}
      </section>
    </Layout>
  );
}

export default ViewDrugs;
