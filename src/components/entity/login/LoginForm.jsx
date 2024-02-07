import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../App";
import "./LoginForm.scss";
import callFetch from "../../api/API";

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
    if (id >= 100000 && id <= 199999) {
      apiCallPatients(`/patients/${id}`);
      console.log(loadingMessage);
    } else if (id >= 300000 && id <= 399999) {
      apiCallPharmacists(`/pharmacists/${id}`);
      console.log(loadingMessage);
    }

    event.preventDefault();
  };

  // Methods ---------------------------------------------
  const apiCallPatients = async (endpoint) => {
    const response = await callFetch(endpoint, "GET");
    response.isSuccess
      ? navigate("/home")
      : setLoadingMessage(response.message);
  };

  const apiCallPharmacists = async (endpoint) => {
    const response = await callFetch(endpoint, "GET");
    response.isSuccess
      ? navigate(`/viewDrug`)
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
