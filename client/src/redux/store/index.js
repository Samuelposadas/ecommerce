import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
// import { reducer } from "../reducers/productsReducer";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
