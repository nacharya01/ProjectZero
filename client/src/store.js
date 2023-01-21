import { createStore } from "redux";
import combReducers from "./reducers/index";

//creating store
const store = createStore(combReducers);

//exporting the instance of store
export default store;
