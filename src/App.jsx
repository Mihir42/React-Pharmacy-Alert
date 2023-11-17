import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/pages/SignIn";
import PageNotFound from "./components/pages/PageNotFound";
import AddDrug from "./components/pages/AddDrug";
import ViewDrugs from "./components/pages/ViewDrugs";
import "./App.scss";
// 1:08 :43
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/addDrug" element={<AddDrug />} />
          <Route path="/viewDrug" element={<ViewDrugs />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
