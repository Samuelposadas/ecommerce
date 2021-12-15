import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import CreateProduct from "../Pages/CreateProduct/CreateProduct";

//components
import Home from "../Pages/Home/Home";

import ProductDetail from "../Pages/ProductDetail/ProductDetail";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
