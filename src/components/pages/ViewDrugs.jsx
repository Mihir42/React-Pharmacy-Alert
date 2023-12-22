import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import callFetch from "../api/API";
import LargeCard from "../UI/LargeCard";
import Bar from "../UI/Bar";

function ViewDrugs() {
  // Initialisation -----------------------------
  const endpoint = `/drugs`;
  const navigate = useNavigate();

  // State ----------------------------------
  const [drugs, setDrugs] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading Records ...");

  // Context --------------------------------
  // Methods --------------------------------
  const handleModify = () => {};

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
      <LargeCard title="Current medication stock">
        {drugs != null ? (
          drugs.map((drug) => (
            <Bar key={drug.DrugID}>
              <div className="item-one">{drug.DrugName}</div>
              <div className="item-two">{drug.DrugDosage}</div>
              <div className="item-three">{drug.DrugSymptoms}</div>
              <Link to="/editDrug" state={{ from: drug }}>
                Edit
              </Link>

              <button type="submit" value="Delete" onClick={null}>
                Delete
              </button>
            </Bar>
          ))
        ) : (
          <Bar>{"Loading records unsuccessfull"}</Bar>
        )}
      </LargeCard>
    </Layout>
  );
}

export default ViewDrugs;
