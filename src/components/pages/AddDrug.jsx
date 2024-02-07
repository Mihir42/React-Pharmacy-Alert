import API from "../api/API";
import callFetch from "../api/API";
import Layout from "../layouts/Layout";
import DrugForm from "../entity/drugs/DrugForm";
import { useEffect } from "react";
import { useState } from "react";

function AddDrug() {
  const endpoint = `/drugs`;

  const [drugs, setDrugs] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading records ...");

  const getDrugs = async () => {
    const response = await callFetch(endpoint, "GET");
    response.isSuccess
      ? setDrugs(response.result)
      : setLoadingMessage(response.message);
  };

  useEffect(() => {
    getDrugs();
  }, []);

  const handleSubmit = async (drug) => {
    const response = await callFetch(endpoint, "POST", drug);
    return response.isSuccess ? getDrugs() || true : false;
  };
  return (
    <>
      <Layout
        header1="Drugs"
        link1="/viewDrug"
        header2="Add Drugs"
        link2="/addDrug"
      >
        <DrugForm onSubmit={handleSubmit} cardTitle={"Create new Medication"} />
      </Layout>
    </>
  );
}

export default AddDrug;
