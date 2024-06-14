import {
    ADD_GROUP,
    DELETE_GROUP,
    UPDATE_GROUP_RANGE,
    SET_TODO_STATUSES
  } from '../actions';
  
  const initialState = [
    { from: 1, to: 10, status: [] }
  ];
  
  const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_GROUP: {
        const newGroup = { from: 1, to: 1, status: [] }; // Default values for the new group
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
  
  

// import {
//     ADD_GROUP,
//     DELETE_GROUP,
//     UPDATE_GROUP_RANGE,
//     SET_GROUP_STATUS
//   } from '../actions';
  
//   const initialState = [
//     { from: 1, to: 10, status: [] }
//   ];
  
//   const groupsReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case ADD_GROUP: {
//         const newGroup = { from: 1, to: 1, status: [] }; // Default values for the new group
//         return [...state, newGroup];
//       }
//       case DELETE_GROUP: {
//         const updatedState = state.filter((_, index) => index !== action.payload);
//         return updatedState;
//       }
//       case UPDATE_GROUP_RANGE: {
//         const updatedState = state.map((group, index) => {
//           if (index === action.payload.index) {
//             return { ...group, ...action.payload.range };
//           }
//           return group;
//         });
//         return updatedState;
//       }
//       case SET_GROUP_STATUS: {
//         const updatedState = state.map((group, index) => {
//           if (index === action.payload.index) {
//             return { ...group, status: action.payload.status };
//           }
//           return group;
//         });
//         return updatedState;
//       }
//       default:
//         return state;
//     }
//   };
  
//   export default groupsReducer;
  