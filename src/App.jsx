import UserPrescriptions from "./components/pages/UserPrescriptions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginIn from "./components/pages/LoginIn";
import PageNotFound from "./components/pages/PageNotFound";
import AddDrug from "./components/pages/AddDrug";
import ViewDrugs from "./components/pages/ViewDrugs";
import { createContext, useState } from "react";
export const LoginContext = createContext();
import "./App.scss";

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
          <Route path="/viewDrug" element={<ViewDrugs />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;

/* Things to refactor 
Use fetch api to select all patient ID to see if patient ID entered in form is correct
Make sure login is navigating to home 
Re design accordion to tables 
Form video
Refactor backend video
*/
