import { legacy_createStore as createStore } from "redux";
import expensesReducer from "../reducers/expensesReducer";

let store = createStore(expensesReducer);

export default store;