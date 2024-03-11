import UserPrescriptions from "./components/pages/UserPrescriptions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginIn from "./components/pages/LoginIn";
import PageNotFound from "./components/pages/PageNotFound";
import AddDrug from "./components/pages/AddDrug";
import ViewDrugs from "./components/pages/ViewDrugs";
import { createContext, useState } from "react";
export const LoginContext = createContext();
import "./App.scss";
import EditDrug from "./components/pages/EditDrug";
import ViewPatients from "./components/pages/viewPatients";
import AddPrescription from "./components/pages/AddPrescription";
import PharmacistPrescriptions from "./components/pages/PharmacistPrescriptions";
import ViewDiagnosis from "./components/pages/ViewDiagnosis";

// 1:08 :43
function App() {
  const [id, setID] = useState(0);
  return (
    <LoginContext.Provider value={[id, setID]}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<UserPrescriptions />} />
          <Route path="/" element={<LoginIn />} />
          <Route path="/addDrug" element={<AddDrug />} />
          <Route path="/editDrug" element={<EditDrug />} />
          <Route path="/viewDrug" element={<ViewDrugs />} />
          <Route path="/viewPatient" element={<ViewPatients />} />
          <Route path="/addPrescription" element={<AddPrescription />} />
          <Route path="viewDiagnosis" element={<ViewDiagnosis />} />
          <Route
            path="/viewPrescriptions"
            element={<PharmacistPrescriptions />}
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
