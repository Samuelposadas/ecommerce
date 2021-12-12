import axios from "axios";
import {
  GET_PRODUCT_BY_NAME,
  GET_ALL_PRODUCTS,
  SET_PRODUCT_DETAIL,
  URL_BASE_PRODUCTS,
  TOTAL_PAGES,
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

export const getAllProducts = (numPage) => {
  return async function (dispatch) {
    if (numPage) {
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
