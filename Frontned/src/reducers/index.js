// reducers/index.js
import { combineReducers } from 'redux';
import groups from './groups'; // Ensure this file exists and exports the groups reducer

const rootReducer = combineReducers({
  groups,
});

export default rootReducer;
