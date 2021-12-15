import React from "react";

import "./App.css";
import { createGlobalStyle } from "styled-components";

//components at the bottom of this line
import RouterApp from "./Routes/RouterApp";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Trebuchet MS', sans-serif;
    
  }
`;

const App = () => {
  return (
    <div className="app">
      <RouterApp />
      <GlobalStyle />
    </div>
  );
};

export default App;
