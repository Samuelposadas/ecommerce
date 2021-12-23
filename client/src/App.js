import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/themes.jsx";

import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { Toggle } from "./themes/styled.jsx";
import { Toaster, toast } from "react-hot-toast";

//components at the bottom of this line
import RouterApp from "./routes/routerApp.jsx";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Trebuchet MS', sans-serif;
	font:menu;
    background-color : ${(props) => props.theme.body};
    color : ${(props) => props.theme.fontColor};
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  const icon =
    theme == "light" ? (
      <MdOutlineDarkMode size={30} />
    ) : (
      <MdDarkMode size={30} />
    );
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Wrapper>
        <Toggle onClick={themeToggle}>{icon}</Toggle>
        <RouterApp />
        <GlobalStyle />
      </Wrapper>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
