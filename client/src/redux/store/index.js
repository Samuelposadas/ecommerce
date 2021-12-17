import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootRedurcer from "./rootReducer";
// import { reducer } from "../reducers/productsReducer";
import thunk from "redux-thunk";

export const store = createStore(
  rootRedurcer,
  composeWithDevTools(applyMiddleware(thunk))
);
