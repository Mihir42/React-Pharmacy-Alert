import PropTypes from "prop-types";
import "./Bar.scss";

function Bar({ key, children, title }) {
  return (
    <div className="bar">
      <div className="bar-contents">{children}</div>
    </div>
  );
}

export default Bar;

Bar.PropTypes = {
  key: PropTypes.Integer,
  children: PropTypes.object,
};
