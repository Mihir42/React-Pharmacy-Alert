import { useContext, useEffect } from "react";
import { LoginContext } from "../../App";
import "./Header.scss";

function Header() {
  // Properties -----------------------------
  // Hooks ----------------------------------
  // Context --------------------------------
  const loggedIn = useContext(LoginContext);
  // Methods --------------------------------
  useEffect(() => {
    console.log(loggedIn);
  });
  // Views ----------------------------------
  return (
    <header>
      <h1>Pharmacy Alert</h1>
      <div className="login">
        <p>Welcome</p>
      </div>
    </header>
  );
}

export default Header;
