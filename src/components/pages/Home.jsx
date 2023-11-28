import { useState, useEffect, useContext } from "react";
import Layout from "../layouts/Layout";
import Accordion from "../UI/Accordion";
import { LoginContext } from "../../App";
import API from "../api/API";

function Home() {
  // Initialisation -----------------------------
  const loggedInUserID = 1001;
  const [id, setID] = useContext(LoginContext);

  const endpoint = `/prescriptions/${id}`;

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
            ></Accordion>
          ))
        )}
      </section>
    </Layout>
  );
}

export default Home;
