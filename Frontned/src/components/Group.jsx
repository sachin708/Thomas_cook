import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteGroup, updateGroupRange } from "../actions";
import "./Group.css";

const Group = ({ index, group }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteGroup(index));
  };

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateGroupRange(index, { [name]: parseInt(value, 10) }));
  };

  return (
    <div>
      <h2>
        Group: {group.from} to {group.to}
      </h2>
      <div className="allcontent">
        <button onClick={handleDelete} className="deletebtn">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
          <span className="material-symbols-outlined">delete</span>
        </button>

        <div className="inputcontentbox">
          <h4>Group 1</h4>
          <input
            type="number"
            name="from"
            value={group.from}
            onChange={handleRangeChange}
            min="1"
            max="10"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
          <span className="material-symbols-outlined">arrow_right_alt</span>

          <input
            type="number"
            name="to"
            value={group.to}
            onChange={handleRangeChange}
            min="1"
            max="10"
          />
        </div>
      </div>
      <ul>
        {group.from < group.to ? (
          group.status.map((item) => (
            <li key={item.id}>
              Item {item.id}: {item.completed ? "Done" : "Not Done"}
            </li>
          ))
        ) : (
          <span>not sequence</span>
        )}
      </ul>
    </div>
  );
};

// Define prop types for Group component
Group.propTypes = {
  index: PropTypes.number.isRequired,
  group: PropTypes.shape({
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    status: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Group;
