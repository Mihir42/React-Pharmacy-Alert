import callFetch from "../api/API";
import DrugForm from "../entity/drugs/DrugForm";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import { useState } from "react";

function EditDrug({ reloadDrugs }) {
  // Initialisation -----------------------------
  const location = useLocation();
  const navigate = useNavigate();
  const drugObj = location.state.from;
  const endpoint = "/drugs";
  // console.log(drug); // The medication ID https://ui.dev/react-router-pass-props-to-link 17:18
  // State ----------------------------------
  const [drugs, setDrugs] = useState(drugObj);
  const drugInfo = {
    DrugName: drugs.DrugName,
    DrugDosage: drugs.DrugDosage,
    DrugSymptoms: drugs.DrugSymptoms,
  };
  console.log(drugs);
  console.log(drugInfo);

  // Context --------------------------------
  // Methods --------------------------------
  const handleModify = (event) => {};
  const handleDelete = () => {};

  const handleSubmit = async (drug) => {
    const response = await callFetch(
      `${endpoint}/${drugs.DrugID}`,
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
