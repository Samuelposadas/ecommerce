import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Shopping } from "../Pages/Shopping/Shopping";

import CreateSupplier from "../Components/CreateSupplier/CreateSupplier";
import Paypal from "../Components/Paypal/Paypal";

import CreateProduct from "../Pages/CreateProduct/CreateProduct";

//components
import Home from "../Pages/Home/Home";
import Navbar from "../common/Navbar/Navbar";

import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import AdminPanel from "../Pages/AdminPanel/AdminPanel";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/buy" element={<Shopping />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/paypal" element={<Paypal />} />
        <Route path="/create/supplier" element={<CreateSupplier />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/shop" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
