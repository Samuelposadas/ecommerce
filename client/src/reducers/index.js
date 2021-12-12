import { GET_PRODUCT_BY_NAME, GET_ALL_PRODUCTS } from "../constants";

/* eslint-disable */
const initialState = {
  product: {},
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
    default:
      return state;
  }
};
