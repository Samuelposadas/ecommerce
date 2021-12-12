/* eslint-disable */
import {
  GET_PRODUCT_BY_NAME,
  GET_ALL_PRODUCTS,
  SET_PRODUCT_DETAIL,
  TOTAL_PAGES,
} from "../constants";

const initialState = {
  productDetail: {},
  allProducts: [],
  renderProducts: [],
  copyAllProducts: [],
  allCategories: [],
  filterProducts: [],
  totalPages: 1,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        renderProducts: payload,
      };

    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
      };
    case SET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: payload,
      };
    case TOTAL_PAGES:
      return {
        ...state,
        totalPages: payload,
      };
    default:
      return state;
  }
};
