import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "../Pages/Home/Home";
import Navbar from "../common/Navbar/Navbar";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
