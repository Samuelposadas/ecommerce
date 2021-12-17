import axios from "axios";
import { URL_BASE } from "../constants";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

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
