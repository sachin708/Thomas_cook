import PropTypes from "prop-types";
import Group from "./Group";

const GroupList = ({ groups }) => {
  return (
    <div>
      {groups.map((group, index) => (
        <Group key={index} index={index} group={group} />
      ))}
    </div>
  );
};

// Define prop types for GroupList component
GroupList.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.number.isRequired,
      to: PropTypes.number.isRequired,
      status: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          completed: PropTypes.bool.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default GroupList;
