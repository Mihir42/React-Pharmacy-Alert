import callFetch from "../api/API";
import Layout from "../layouts/Layout";
import PrescriptionForm from "../entity/prescriptions/PrescriptionForm";
import { useEffect } from "react";
import { useState } from "react";

function AddPrescription() {
  const endpoint = `/prescriptions`;

  const [prescriptions, setPrescriptions] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Loading records ...");

  const getPrescriptions = async () => {
    const response = await callFetch(endpoint, "GET");
    response.isSuccess
      ? setPrescriptions(response.result)
      : setLoadingMessage(response.message);
  };

  useEffect(() => {
    getPrescriptions();
  }, []);

  const handleSubmit = async (prescription) => {
    const response = await callFetch(endpoint, "POST", prescription);
    return response.isSuccess ? getPrescriptions() || true : false;
  };
  return (
    <Layout
      header1="Drugs"
      link1="/viewDrug"
      header2="Add Drugs"
      link2="/addDrug"
    >
      <PrescriptionForm onSubmit={handleSubmit} cardTitle="Add prescription" />
    </Layout>
  );
}

export default AddPrescription;
