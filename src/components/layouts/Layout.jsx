import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import propTypes from "prop-Types";

import "./Layout.scss";

function Layout(props) {
  // Properties --------------------------------
  // Hooks -------------------------------------
  // Context -----------------------------------
  // Methods -----------------------------------
  // View --------------------------------------
  return (
    <div className="centerpane">
      <Header />
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = { children: propTypes.element };

export default Layout;
