import axios from "axios";

import {
  GET_PRODUCT_BY_NAME,
  GET_ALL_PRODUCTS,
  SET_PRODUCT_DETAIL,
  URL_BASE_PRODUCTS,
  TOTAL_PAGES,
  GET_CATEGORIES,
  GET_CATEGORY,
} from "../constants";
import { actionGenerator, reqGetAxios } from "./metodos";

export const getProductByName = (name) => {
  return async function (dispatch) {
    try {
      const product = await axios.get(
        `http://localhost:3001/products/search?name=${name}`
      );
      console.log(product.data);
      return dispatch({
        type: GET_PRODUCT_BY_NAME,
        payload: product.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllProducts = (numPage, category) => {
  return async function (dispatch) {
    if (numPage && category) {
      try {
        const products = await axios.get(
          `http://localhost:3001/products?page=${numPage}&category=${category}`
        );

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
    } else if (numPage) {
      try {
        const products = await axios.get(
          `http://localhost:3001/products?page=${numPage}`
        );
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
