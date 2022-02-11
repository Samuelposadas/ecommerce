import axios from "axios";

import {
  POST_PRODUCT,
  SET_PRODUCT_DETAIL,
  URL_BASE,
  GET_SUPPLIERS,
  GET_ALL_CATEGORIES,
  TOTAL_PAGES,
  GET_CATEGORIES,
  GET_PRODUCTS_DEFAULT,
  GET_ACCESORIES,
  GET_PRODUCTS_BY_FILTERS,
  GET_ALL_PRODUCTS_NAMES,
  PRODUCTS_CONTROLLER,
} from "../constants/index";
import { actionGenerator, reqGetAxios } from "./metodos";

export const postProducts = (payload) => {
  return async function () {
    try {
      const postProduct = await axios.post(
        `${URL_BASE}/products/create`,
        payload
      );
      return {
        type: POST_PRODUCT,
        postProduct,
      };
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSuppliers = () => {
  return async function (dispatch) {
    try {
      const getSupplier = await axios.get(`${URL_BASE}/suppliers`);
      return dispatch({
        type: GET_SUPPLIERS,
        payload: getSupplier.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllCategories = () => {
  return async function (dispatch) {
    try {
      const categories = await axios.get(`${URL_BASE}/categories`);
      return dispatch({
        type: GET_ALL_CATEGORIES,
        payload: categories.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductDetail = (idProduct) => {
  return async function (dispatch) {
    try {
      const result = await reqGetAxios(`${URL_BASE}/products/${idProduct}`);
      dispatch(actionGenerator(SET_PRODUCT_DETAIL, result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCategoryAll = () => {
  return async function (dispatch) {
    try {
      const categories = await axios.get(`${URL_BASE}/categories`);

      return dispatch({
        type: GET_CATEGORIES,
        payload: categories.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const action_defaul_values = () => {
  return async (dispatch) => {
    try {
      const product = await axios.get(`${URL_BASE}/products?page=1`);
      dispatch({
        type: GET_PRODUCTS_DEFAULT,
        payload: {
          products: product.data.products,
          totalPages: product.data.totalPages,
          category: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (payload) => {
  const { id } = payload;
  return async () => {
    try {
      const { data } = await axios.put(
        `${URL_BASE}/products/update/${id}`,
        payload
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
};

export const addComment = (review) => {
  return async () => {
    try {
      await axios.post("http://localhost:3001/comments", review);
      return;
    } catch (e) {
      console.log(e);
    }
  };
};

export const getProductByFilter = (payload) => {
  return async function (dispatch) {
    const {
      ram,
      storage,
      opeSystem,
      processor,
      display,
      typeScreen,
      resolution,
      sizeScreen,
      category,
      accessories,
      order,
      typeOrder,
      nameProduct,
      page,
    } = payload;
    try {
      let products;
      if (category && nameProduct.length == 0) {
        products = await axios.get(
          `${URL_BASE}/products?&order=${order}&typeOrder=${typeOrder}&Pcategory=${category}&ram=${ram}&catSpecifict=${accessories}&storage=${storage}&opeSystem=${opeSystem}&processor=${processor}&display=${display}&typeScreen=${typeScreen}&resolution=${resolution}&sizeScreen=${sizeScreen}&page=${page}`
        );
        console.log("if uno", products);
      }
      if (!category && nameProduct.length == 0) {
        products = await axios.get(
          `${URL_BASE}/products?order=${order}&typeOrder=${typeOrder}&page=${page}`
        );
        console.log("if dos", products);
      }
      if (!category && nameProduct.length > 0) {
        products = await axios.get(
          `${URL_BASE}/products?NProduct=${nameProduct}&order=${order}&typeOrder=${typeOrder}&page=${page}`
        );
        console.log("if tres", products);
      }

      dispatch({
        type: GET_PRODUCTS_BY_FILTERS,
        payload: products.data.products,
      });
      dispatch({
        type: TOTAL_PAGES,
        payload: products.data.totalPages,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProductsNames = () => {
  return async function (dispatch) {
    try {
      const products = await axios.get(`${URL_BASE}/products/all`);
      dispatch({
        type: GET_ALL_PRODUCTS_NAMES,
        payload: products.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const get_accesories = () => {
  return async (dispatch) => {
    let accesories = await axios.get(`${URL_BASE}/categories/accesory`);
    dispatch({
      type: GET_ACCESORIES,
      payload: accesories.data,
    });
  };
};

export const action_products_controllers = (payload) => {
  return {
    type: PRODUCTS_CONTROLLER,
    payload,
  };
};
