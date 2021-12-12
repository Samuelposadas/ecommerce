import axios from "axios";
import {
  GET_PRODUCT_BY_NAME,
  GET_ALL_PRODUCTS,
  SET_PRODUCT_DETAIL,
  URL_BASE_PRODUCTS,
} from "../constants";
import { actionGenerator, reqGetAxios } from "./metodos";

export const getProductByName = (name) => {
  return async function (dispatch) {
    try {
      const product = await axios.get(
        "http://localhost:3001/products/search?name=" + name
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

export const getAllProducts = () => {
  return async function (dispatch) {
    try {
      const products = await axios.get("http://localhost:3001/products/");
      return dispatch({
        type: GET_ALL_PRODUCTS,
        payload: products.data.products,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getProductDetail = (idProduct) => {
  return async function (dispatch) {
    try {
      const result = reqGetAxios(`${URL_BASE_PRODUCTS}/${idProduct}`);
      dispatch(actionGenerator(SET_PRODUCT_DETAIL, result));
    } catch (error) {
      console.log(error);
    }
  };
};
