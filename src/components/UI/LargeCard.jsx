import PropTypes from "prop-types";
import "./LargeCard.scss";

function LargeCard({ children, title }) {
  return (
    <div className="card">
      <div className="container">
        <div className="title">{title}</div>
        {children}
      </div>
    </div>
  );
}

export default LargeCard;

LargeCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
};
