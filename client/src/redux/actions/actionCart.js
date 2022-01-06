import axios from "axios";
import { URL_BASE } from "../constants";
import {
  ADD_TO_CART,
  CLEAN_CART,
  EDIT_QUANTITY,
  REMOVE_FROM_CART,
  SET_TOTAL_PRICE,
} from "../constants/cartConstants";

export const addToCart = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${URL_BASE}/products/${id}`);
      dispatch({
        type: ADD_TO_CART,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const editQuantity = (value, id) => {
  return {
    type: EDIT_QUANTITY,
    payload: {
      value,
      id,
    },
  };
};

export const cleanCart = () => {
  return {
    type: CLEAN_CART,
  };
};

export const setCartTotalPrice = (value) => {
  return {
    type: SET_TOTAL_PRICE,
    payload: value,
  };
};
