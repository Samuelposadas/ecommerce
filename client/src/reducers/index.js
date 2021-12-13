/* eslint-disable */
import {
  GET_PRODUCT_BY_NAME,
  GET_ALL_PRODUCTS,
  SET_PRODUCT_DETAIL,
  TOTAL_PAGES,
  GET_CATEGORIES,
  GET_CATEGORY,
} from "../constants";

const initialState = {
  productDetail: {},
  allProducts: [],
  renderProducts: [],
  copyAllProducts: [],
  allCategories: [],
  filterProducts: [],
  totalPages: 1,
  category: "",
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
    case GET_CATEGORIES:
      return {
        ...state,
        allCategories: payload,
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    default:
      return state;
  }
};
