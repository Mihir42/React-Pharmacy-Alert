import PropTypes from "prop-types";
import "./LargeCard.scss";

function LargeCard({ children, title }) {
  return (
    <div className="large-card">
      <div className="large-container">
        <div className="large-title">{title}</div>
        {children}
      </div>
    </div>
  );
}

export default LargeCard;

LargeCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
