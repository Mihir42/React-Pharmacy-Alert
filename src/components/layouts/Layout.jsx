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
      <Header
        header1={props.header1}
        link1={props.link1}
        header2={props.header2}
        link2={props.link2}
      />
      <main> {props.children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
  header1: PropTypes.string,
  link1: PropTypes.string,
  header2: PropTypes.string,
  link2: PropTypes.string,
};

export default Layout;
