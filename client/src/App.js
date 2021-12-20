import React, { useState } from "react";

import "./App.css";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./darkTheme/themes";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { Toggle } from "./darkTheme/style.js";
import { Toaster, toast } from "react-hot-toast";

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
    if (theme === "dark") {
      toast("dark mode!", {
        icon: "🌙",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    if (theme === "light") {
      toast("light mode!", {
        icon: "🌞",
        style: {
          borderRadius: "10px",
          background: "white",
          color: "black",
        },
      });
    }
  };
  const icon = theme == "light" ? <CgSun size={40} /> : <HiMoon size={40} />;
  return (
    <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
      <div className="app">
        <Toggle onClick={themeToggle}>{icon}</Toggle>
        <RouterApp />
        <GlobalStyle />
      </div>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
