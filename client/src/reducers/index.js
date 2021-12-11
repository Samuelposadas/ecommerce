import { GET_PRODUCT_BY_NAME } from "../constants";

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
    default:
      return state;
  }
};
