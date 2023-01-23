import { LoginReducer, SignUpReducer } from "./DialogReducer";
import { combineReducers } from "redux";

const combReducers = combineReducers({
  loginReducer: LoginReducer,
  signUpReducer: SignUpReducer,
});

//Exporting all combined reducers
export default combReducers;
