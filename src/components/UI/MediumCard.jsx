import PropTypes from "prop-types";
import "./MediumCard.scss";

function MediumCard(props) {
  return (
    <div className="card">
      <div className="container">
        <div className="title">{props.title}</div>
        {props.content}
      </div>
    </div>
  );
}

export default MediumCard;

MediumCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
};
