import { useState } from "react";
import LargeCard from "../UI/LargeCard";
import Layout from "../layouts/Layout";
import callFetch from "../api/API";
import DiagnosisForm from "../entity/diagnosis/DiagnosisForm";

function AddDiagnosis() {
  // Initialisation -----------------------------
  const endpoint = `/diagnosis`;
  // State ----------------------------------
  const [diagnosis, setDiagnosis] = useState(null);
  // Context --------------------------------
  // Methods --------------------------------
  const handleSubmit = async (diagnosi) => {
    const response = await callFetch(endpoint, "POST", diagnosi);
    return response.isSuccess ? setDiagnosis() || true : false;
  };
  // View -----------------------------------
  return (
    <Layout>
      <LargeCard title="Add diagnosis">
        <DiagnosisForm onSubmit={handleSubmit} />
      </LargeCard>
    </Layout>
  );
}

export default AddDiagnosis;
