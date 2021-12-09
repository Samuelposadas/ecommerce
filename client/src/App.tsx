import React, { FC } from "react";

import "./App.css";

//components at the bottom of this line
import Router from "./Routes/Router";

const App: FC = () => {
  return (
    <div className="app">
      <Router />
    </div>
  );
};

export default App;
