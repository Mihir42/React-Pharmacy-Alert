import PropTypes from "prop-types";
import "./Card.scss";

function Card({ children }) {
  return (
    <div className="card">
      <div className="description">{children}</div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  children: PropTypes.node,
};
