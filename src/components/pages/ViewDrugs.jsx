import { useState, useEffect } from "react";
import Accordion from "../UI/Accordion";
import API from "../api/API";

function ViewDrugs() {
  // Initialisation -----------------------------
  const endpoint = `/drugs`;

  // State ----------------------------------
  const [drugs, setDrugs] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading Records ...");

  // Context --------------------------------
  // Methods --------------------------------
  const apiCall = async (endpoint) => {
    const response = await API.get(endpoint, "GET");
    response.isSuccess
      ? setDrugs(response.result)
      : setLoadingMessage(response.message);
  };

  useEffect(() => {
    apiCall(endpoint);
  }, [endpoint]);

  // View -----------------------------------
  return (
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
          ></Accordion>
        ))
      )}
    </section>
  );
}

export default ViewDrugs;
