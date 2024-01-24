import callFetch from "../api/API";
import DrugForm from "../entity/drugs/DrugForm";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import { useState } from "react";

function EditDrug() {
  // Initialisation -----------------------------
  const location = useLocation();
  const navigate = useNavigate();
  const drugObj = location.state.from;
  const endpoint = "/drugs";
  // State ----------------------------------
  const [drugs, setDrugs] = useState(drugObj);
  const drugInfo = {
    Drugs_Name: drugs.Drugs_Name,
    Drugs_Route: drugs.Drugs_Route,
    Drugs_Side_Affects: drugs.Drugs_Side_Affects,
  };
  console.log(drugs);
  console.log(drugInfo);

  // Context --------------------------------
  // Methods --------------------------------

  const handleSubmit = async (drug) => {
    const response = await callFetch(
      `${endpoint}/${drugs.Drugs_ID}`,
      "PUT",
      drug
    );
    if (response.isSuccess) {
      navigate("/viewDrug");
      window.location.reload();
    }
  };

  // View -----------------------------------

  return (
    <Layout>
      <DrugForm
        onSubmit={handleSubmit}
        cardTitle="Edit existing medication"
        intialdrug={drugInfo}
      ></DrugForm>
    </Layout>
  );
}

export default EditDrug;
