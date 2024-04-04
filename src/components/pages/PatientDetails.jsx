import Layout from "../layouts/Layout";
import MediumCard from "../UI/MediumCard";
import { useLocation } from "react-router-dom";

function PatientDetails() {
  // Initialisation -----------------------------
  const location = useLocation();
  // State ----------------------------------
  const patient = location.state;
  // Context --------------------------------
  // Methods --------------------------------
  // View -----------------------------------
  console.log(patient.patient.PatientFirstName);

  return (
    <Layout
      header1={"Prescriptions"}
      link1={"/viewPrescriptions"}
      header2={"Drugs"}
      link2={"/viewDrugs"}
    >
      <MediumCard title={"Patient Record"}>
        <div className="record">
          <img className="patient-image" src={patient.patient.PatientImage} />
          {patient.patient.PatientFirstName} {patient.patient.PatientLastName}
          <br />
          {patient.patient.PatientAddress}
          <br />
          {patient.patient.PatientEmailAddress}
        </div>
      </MediumCard>
    </Layout>
  );
}

export default PatientDetails;
