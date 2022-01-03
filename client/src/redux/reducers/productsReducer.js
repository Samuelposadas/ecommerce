/* eslint-disable */

import {
  GET_PRODUCT_BY_NAME,
  GET_ALL_PRODUCTS,
  SET_PRODUCT_DETAIL,
  POST_PRODUCT,
  GET_SUPPLIERS,
  GET_ALL_CATEGORIES,
  TOTAL_PAGES,
  GET_CATEGORIES,
  GET_CATEGORY,
  ORDER,
  GET_PRODUCTS_DEFAULT,
  SAVENAME,
  GET_PRODUCTS_BY_FILTERS,
  GET_ACCESORIES,
} from "../constants/index";

const initialState = {
  productDetail: {},
  allProducts: [],
  renderProducts: [],
  copyAllProducts: [],
  allCategories: [],
  filterProducts: [],
  accessories: [],

  allSuppliers: [],

  totalPages: 1,
  category: "",
  order: "",
  nameProduct: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_BY_NAME:
      return {
        ...state,
        allProducts: payload.products,
        totalPages: payload.totalPages,
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
        nameProduct: "",
      };
    case ORDER:
      return {
        ...state,
        order: payload,
      };

    case POST_PRODUCT:
      return {
        ...state,
      };

    case GET_SUPPLIERS:
      return {
        ...state,
        allSuppliers: payload,
      };
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: payload,
      };
    case GET_PRODUCTS_DEFAULT:
      return {
        ...state,
        allProducts: payload.products,
        totalPages: payload.totalPages,
        category: "",
        nameProduct: "",
      };
    case SAVENAME:
      return {
        ...state,
        nameProduct: payload,
        category: "",
      };
    case GET_PRODUCTS_BY_FILTERS:
      return {
        ...state,
        allProducts: payload,
      };
    case GET_ACCESORIES:
      return {
        ...state,
        accessories: payload,
      };
    default:
      return state;
  }
};
