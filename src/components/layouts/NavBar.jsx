import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav>
      <div className="navItem">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="navItem">
        <NavLink to="/signIn">Sign In</NavLink>
      </div>
      <div className="navItem">
        <NavLink to="/error">PageNotFound</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
