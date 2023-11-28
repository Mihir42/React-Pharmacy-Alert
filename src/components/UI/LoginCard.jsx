import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../../App";
import "./Logincard.scss";

function LoginCard() {
  // Initialisation ------------------------------------
  const navigate = useNavigate();
  // State ---------------------------------------------
  const [id, setID] = useState("");
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  // Handlers ------------------------------------------
  const handleChange = (event) => {
    setID(parseInt(event.target.value));
    setLoggedIn(id);
  };

  const handleSubmit = (event) => {
    if (id === 1000) {
      navigate("/home");
    } else {
      console.log("Not a patient");
    }
    event.preventDefault();
  };

  // Methods --------------------------------

  // View -----------------------------------

  return (
    <div className="card">
      <div className="container">
        <div className="title">
          <p>Enter your login ID</p>
        </div>
        <form className="idForm" onSubmit={handleSubmit}>
          <label className="idLabel">ID Number:</label>
          <input className="idInput" type="text" onChange={handleChange} />
          <input className="submitButton" type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

export default LoginCard;
