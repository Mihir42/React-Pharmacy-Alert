import PropTypes from "prop-types";
import "./Bar.scss";

function Bar({ children }) {
  return (
    <div className="bar">
      <div className="bar-contents">{children}</div>
    </div>
  );
}

export default Bar;

Bar.propTypes = {
  key: PropTypes.Integer,
  children: PropTypes.node,
};
