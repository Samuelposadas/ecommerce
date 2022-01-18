import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Shopping } from "../Pages/Shopping/Shopping.jsx";

import CreateSupplier from "../Components/CreateSupplier/CreateSupplier.jsx";
import Paypal from "../Components/Paypal/Paypal.jsx";

import CreateProduct from "../Pages/createProduct/createProduct.jsx";

//components
import Home from "../Pages/Home/Home.jsx";

import ProductDetail from "../Pages/productDetail/productDetail.jsx";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct.jsx";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart.jsx";
import AdminPanel from "../Pages/AdminPanel/AdminPanel.jsx";
import AdminUsers from "../Pages/AdminUsers/AdminUsers.jsx";
import AdminCategories from "../Pages/AdminCategories/AdminCategories.jsx";
import AdminProducts from "../Pages/AdminProducts/AdminProducts.jsx";
import Landing from "../Pages/Landing/Landing.jsx";
import Order from "../Pages/Order/Order.js";
import Login from "../Components/login/Login.jsx";
import SignUp from "../Components/signup/SignUp.jsx";
import Profile from "../Pages/profile/Profile..jsx";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/buy" element={<Shopping />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        <Route path="/paypal" element={<Paypal />} />
        <Route path="/create/supplier" element={<CreateSupplier />} />
        <Route path="/admin/" element={<AdminPanel />}>
          <Route index element={<AdminProducts />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
        <Route path="/shop" element={<ShoppingCart />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
