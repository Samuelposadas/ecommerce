import { combineReducers } from "redux";
import { cartReducer } from "../reducers/cartReducer";
import { reducer } from "../reducers/productsReducer";

const rootRedurcer = combineReducers({ products: reducer, cart: cartReducer });

export default rootRedurcer;
