/* eslint-disable */
import {
  GET_PRODUCT_BY_NAME,
  GET_ALL_PRODUCTS,
  SET_PRODUCT_DETAIL,
} from "../constants";

const initialState = {
  productDetail: {},
  allProducts: [],
  renderProducts: [],
  copyAllProducts: [],
  allCategories: [],
  filterProducts: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        renderProducts: action.payload,
      };

    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case SET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    default:
      return state;
  }
};
