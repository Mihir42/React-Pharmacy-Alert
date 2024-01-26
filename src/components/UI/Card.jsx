import PropTypes from "prop-types";
import "./Card.scss";

function Card({ key, children, title }) {
  return (
    <div className="card">
      <img
        className="image"
        src="https://static.vecteezy.com/system/resources/thumbnails/020/911/732/small/profile-icon-avatar-icon-user-icon-person-icon-free-png.png"
        alt="patientImage"
      ></img>
      <div className="container">{children}</div>
    </div>
  );
}

export default Card;
