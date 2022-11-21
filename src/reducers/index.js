import { combineReducers } from "@reduxjs/toolkit";
import stableReducer from "./stable.reducer";
import listReducer from "./list.reducer";

export default combineReducers({
  stableReducer,
  listReducer,
});
