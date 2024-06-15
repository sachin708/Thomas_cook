import {
  ADD_GROUP,
  DELETE_GROUP,
  UPDATE_GROUP_RANGE,
  SET_TODO_STATUSES
} from '../actions';

// const initialState = [
//   { from: 1, to: 10, status: [] }
// ];

const initialState = [
  { groupNumber: 1, from: 1, to: 2, status: [] }, // Group 1: Items 1 and 2
  { groupNumber: 2, from: 3, to: 10, status: [] }, // Group 2: Items 3 to 10, all pending initially
];

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROUP: {
      const newGroupNumber = state.length + 1;
      const newGroup = { groupNumber: newGroupNumber, from: 1, to: 1, status: [] }; // Default values for the new group
      return [...state, newGroup];
    }
    case DELETE_GROUP: {
      const updatedState = state.filter((_, index) => index !== action.index);
      return updatedState;
    }
    case UPDATE_GROUP_RANGE: {
      const updatedState = state.map((group, index) => {
        if (index === action.index) {
          return { ...group, ...action.range };
        }
        return group;
      });
      return updatedState;
    }
    case SET_TODO_STATUSES: {
      return state.map((group, index) => ({
        ...group,
        status: action.statuses[index],
      }));
    }
    default:
      return state;
  }
};

export default groupsReducer;

