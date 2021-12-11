import axios from "axios";
import { GET_PRODUCT_BY_NAME } from "../constants";

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
