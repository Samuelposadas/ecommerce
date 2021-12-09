import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "../Pages/Home/Home";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
