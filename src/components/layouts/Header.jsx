import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.scss";

function Header(props) {
  // Properties -----------------------------
  // Hooks ----------------------------------
  // Context --------------------------------
  // Methods --------------------------------
  // Views ----------------------------------
  return (
    <header>
      <h1>Pharmacy Alert</h1>
      <NavLink className="link" to={props.link1}>
        {props.header1}
      </NavLink>
      <NavLink className="link" to={props.link2}>
        {props.header2}
      </NavLink>
    </header>
  );
}

Header.propTypes = {
  header1: PropTypes.string,
  link1: PropTypes.string,
  header2: PropTypes.string,
  link2: PropTypes.string,
};

export default Header;
