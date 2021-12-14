import axios from "axios";

import {
  GET_PRODUCT_BY_NAME,
  GET_ALL_PRODUCTS,
  POST_PRODUCT,
  SET_PRODUCT_DETAIL,
  URL_BASE_PRODUCTS,
  GET_SUPPLIERS,
  GET_ALL_CATEGORIES,
  TOTAL_PAGES,
  GET_CATEGORIES,
  GET_CATEGORY,
  ORDER,
  GET_PRODUCTS_DEFAULT,
  SAVENAME,
} from "../constants";
import { actionGenerator, reqGetAxios } from "./metodos";

export const getProductByName = (name) => {
  return async function (dispatch) {
    try {
      const product = await axios.get(
        `http://localhost:3001/products/search?name=${name}`
      );
      return dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: {
          products: product.data.products,
          totalPages: product.data.totalPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllProducts = (numPage, category, order, nameProduct) => {
  return async function (dispatch) {
    if (numPage && category) {
      try {
        let products;
        if (!order) {
          products = await axios.get(
            `http://localhost:3001/products?page=${numPage}&category=${category}`
          );
        } else {
          products = await axios.get(
            `http://localhost:3001/products?page=${numPage}&category=${category}&orderPrice=${order}`
          );
        }

        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: products.data.products,
        });
        dispatch({
          type: TOTAL_PAGES,
          payload: products.data.totalPages,
        });
      } catch (error) {
        console.log(error);
      }
    } else if (numPage && nameProduct) {
      try {
        let products;
        if (!order) {
          products = await axios.get(
            `http://localhost:3001/products?page=${numPage}&nameproduct=${nameProduct}`
          );
        } else {
          products = await axios.get(
            `http://localhost:3001/products?page=${numPage}&nameproduct=${nameProduct}&orderPrice=${order}`
          );
        }

        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: products.data.products,
        });
        dispatch({
          type: TOTAL_PAGES,
          payload: products.data.totalPages,
        });
      } catch (error) {
        console.log(error);
      }
    } else if (numPage && !nameProduct && !category) {
      try {
        let products;
        if (!order) {
          products = await axios.get(
            `http://localhost:3001/products?page=${numPage}`
          );
        } else {
          products = await axios.get(
            `http://localhost:3001/products?page=${numPage}&orderPrice=${order}`
          );
        }
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: products.data.products,
        });
        dispatch({
          type: TOTAL_PAGES,
          payload: products.data.totalPages,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export const postProducts = (payload) => {
  return async function () {
    try {
      const postProduct = await axios.post(
        "http://localhost:3001/products/create",
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
      const getSupplier = await axios.get("http://localhost:3001/suppliers");
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
      const categories = await axios.get("http://localhost:3001/categories");
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
      const result = await reqGetAxios(`${URL_BASE_PRODUCTS}/${idProduct}`);
      dispatch(actionGenerator(SET_PRODUCT_DETAIL, result));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCategoryAll = () => {
  return async function (dispatch) {
    try {
      const categories = await axios.get("http://localhost:3001/categories");

      return dispatch({
        type: GET_CATEGORIES,
        payload: categories.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getCategory = (payload) => {
  return {
    type: GET_CATEGORY,
    payload,
  };
};

export const order = (payload) => {
  return {
    type: ORDER,
    payload,
  };
};

export const action_defaul_values = () => {
  return async (dispatch) => {
    try {
      const product = await axios.get("http://localhost:3001/products?page=1");
      dispatch({
        type: GET_PRODUCTS_DEFAULT,
        payload: {
          products: product.data.products,
          totalPages: product.data.totalPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveName = (payload) => {
  return {
    type: SAVENAME,
    payload,
  };
};
