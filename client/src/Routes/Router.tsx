import React, { FC } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//components
import Home from "../Pages/Home/Home";
import Navbar from "../common/Navbar/Navbar";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
