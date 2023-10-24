import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home";
import SignIn from "./components/pages/SignIn";
import PageNotFound from "./components/pages/PageNotFound";
import "./App.scss";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
