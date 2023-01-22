import LoginReducer from "./reducer";
import { combineReducers } from "redux";

const combReducers = combineReducers({
  loginReducer: LoginReducer,
  //you can add other reducers to change the state
});

//Exporting all combined reducers
export default combReducers;
