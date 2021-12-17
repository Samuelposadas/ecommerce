import { combineReducers } from "redux";
import { reducer } from "../reducers/productsReducer";
const rootRedurcer = combineReducers({ products: reducer });

export default rootRedurcer;
