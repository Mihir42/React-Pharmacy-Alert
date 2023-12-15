import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PropTypes from "prop-types";

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
      <main> {props.children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = { children: PropTypes.object };

export default Layout;
