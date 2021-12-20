import React, { useState } from "react";

import "./App.css";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./darkTheme/themes";

import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { Toggle } from "./darkTheme/style.js";

//components at the bottom of this line
import RouterApp from "./Routes/RouterApp";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Trebuchet MS', sans-serif;
    background-color : ${(props) => props.theme.body};
    color : ${(props) => props.theme.fontColor};
  }
`;

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const icon =
    theme == "light" ? (
      <MdOutlineDarkMode size={30} />
    ) : (
      <MdDarkMode size={30} />
    );
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="app">
        <Toggle onClick={themeToggle}>{icon}</Toggle>
        <RouterApp />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

export default App;
