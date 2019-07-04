import { combineReducers } from "redux";
import aplicationReducer from "./reducers";
import taskReducer from "./taskReducer";

export default combineReducers({
  app: aplicationReducer,
  task: taskReducer
});
