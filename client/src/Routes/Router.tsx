import React, { FC } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "../Pages/Home/Home";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="*" element={<Navigate to="/home" />} /> */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
