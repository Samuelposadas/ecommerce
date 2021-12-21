/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./redux/store/index";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import dotenv from "dotenv";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API;

const domain = process.env.REACT_APP_AUTH0_DOMAIN;

const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
console.log(clientId, domain);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
console.log(window.location.origin);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
