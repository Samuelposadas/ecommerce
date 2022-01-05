import React from "react";
import styled from "styled-components";

import "./App.css";
import { createGlobalStyle } from "styled-components";

import RouterApp from "./Routes/RouterApp.jsx";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
	font-size: 11px;
	font-weight: lighter;
	color: #242323dd;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <Wrapper>
      <RouterApp />
      <GlobalStyle />
    </Wrapper>
  );
};

export default App;
