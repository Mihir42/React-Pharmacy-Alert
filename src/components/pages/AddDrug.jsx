import Layout from "../layouts/Layout";
import DrugForm from "../entity/drugs/DrugForm";

function AddDrug() {
  return (
    <>
      <Layout>
        <h1>Add a Drug</h1>
        <DrugForm />
      </Layout>
    </>
  );
}

export default AddDrug;
