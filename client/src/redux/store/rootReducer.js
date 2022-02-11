import { combineReducers } from "redux";
import { cartReducer } from "../reducers/cartReducer";
import { reducer } from "../reducers/productsReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({ products: reducer, cart: cartReducer });

export default persistReducer(persistConfig, rootReducer);
