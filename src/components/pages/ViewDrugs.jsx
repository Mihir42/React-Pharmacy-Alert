import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const handleDelete = async (id) => {
    const response = await callFetch(`${endpoint}/${id}`, "DELETE");
    navigate("/viewDrug");
    window.location.reload();
  };

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
    <Layout
      header1="Drugs"
      link1="/viewDrug"
      header2="Add Drugs"
      link2="/addDrug"
      header3="Prescriptions"
      link3="/viewPrescriptions"
    >
      <LargeCard title="Current medication stock">
        {drugs != null ? (
          drugs.map((drug) => (
            <Bar key={drug.DrugID}>
              <div className="item-one">{drug.Drugs_Name}</div>
              <div className="item-two">{drug.Drugs_Route}</div>
              <div className="item-three">{drug.Drugs_Side_Affects}</div>
              <Link className="editlink" to="/editDrug" state={{ from: drug }}>
                Edit
              </Link>

              <button
                className="deleteButton"
                type="submit"
                value="Delete"
                onClick={() => handleDelete(drug.Drugs_ID)}
              >
                Delete
              </button>
            </Bar>
          ))
        ) : (
          <Bar>{"Loading records please wait"}</Bar>
        )}
      </LargeCard>
    </Layout>
  );
}

export default ViewDrugs;
