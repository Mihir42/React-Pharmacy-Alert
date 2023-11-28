import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../App";
import API from "../../api/API";
import "./LoginForm.scss";
function LoginForm() {
  // Initialisation ------------------------------------------

  const navigate = useNavigate();

  // State ---------------------------------------------
  const [id, setID] = useContext(LoginContext);
  const [loadingMessage, setLoadingMessage] = useState("");

  // Handlers ------------------------------------------
  const handleChange = async (event) => {
    setID(event.target.value);
  };
  const handleSubmit = (event) => {
    apiCall(`/patients/${id}`);
    console.log(loadingMessage);
    event.preventDefault();
  };

  // Methods ---------------------------------------------
  const apiCall = async (endpoint) => {
    const response = await API.get(endpoint, "GET");
    response.isSuccess
      ? navigate("/home")
      : setLoadingMessage(response.message);
  };

  // View ------------------------------------------
  return (
    <form className="idForm" onSubmit={handleSubmit}>
      <label className="idLabel">ID Number:</label>
      <input className="idInput" type="text" onChange={handleChange} />
      <input className="submitButton" type="submit" value="submit" />
    </form>
  );
}

export default LoginForm;
