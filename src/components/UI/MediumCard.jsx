import PropTypes from "prop-types";
import "./MediumCard.scss";

function MediumCard({ title, children }) {
  return (
    <div className="medium-card">
      <div className="medium-container">
        <div className="medium-title">{title}</div>
        {children}
      </div>
    </div>
  );
}

export default MediumCard;

MediumCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
