import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Shopping } from "../Pages/shopping/shopping.jsx";

import CreateSupplier from "../Components/createSupplier/createSupplier.jsx";
import Paypal from "../Components/paypal/paypal.jsx";

import CreateProduct from "../Pages/createProduct/createProduct.jsx";

//components
import Home from "../Pages/home/home.jsx";

import ProductDetail from "../Pages/productDetail/productDetail.jsx";
import UpdateProduct from "../Pages/updateProduct/updateProduct.jsx";
import ShoppingCart from "../Pages/shoppingCart/shoppingCart.jsx";
import AdminPanel from "../Pages/adminPanel/adminPanel.jsx";
import AdminUsers from "../Pages/adminUsers/adminUsers.jsx";
import AdminCategories from "../Pages/adminCategories/adminCategories.jsx";
import AdminProducts from "../Pages/adminProducts/adminProducts.jsx";

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
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
