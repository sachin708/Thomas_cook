import { useSelector, useDispatch } from "react-redux";

import { addGroup, fetchTodoStatuses } from "./actions";
import GroupList from "./components/GroupList";
import "./App.css";

const App = () => {
  const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  const handleAddGroup = () => {
    dispatch(addGroup());
  };

  const handleShowStatus = () => {
    dispatch(fetchTodoStatuses(groups));
  };

  return (
    <div>
      <h1>To-Do List Status</h1>

      <GroupList groups={groups} />
      <button onClick={handleAddGroup} className="positive">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <span className="material-symbols-outlined">add</span>Add Group
      </button>
      <button onClick={handleShowStatus} className="showbtn">
        Show Status
      </button>
    </div>
  );
};

export default App;
