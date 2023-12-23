import Modal from "../UI/Modal";
import Header from "./Header";
import NavBar from "./NavBar";
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
    </div>
  );
}

Layout.propTypes = { children: PropTypes.object };

export default Layout;
