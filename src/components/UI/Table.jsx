import PropTypes from "prop-types";
import "./Table.scss";

/* Maybe seperate table row and table data into two different components 
   so that table heading row does not duplicate*/

function Table(props) {
  return (
    <tr>
      <th>Balls1</th>
      <th>Balls2</th>
      <th>Balls3</th>
    </tr>
  );
}

Table.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  symptoms: PropTypes.string,
};

export default Table;
