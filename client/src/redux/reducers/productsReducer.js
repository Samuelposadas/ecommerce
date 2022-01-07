/* eslint-disable */

import {
  SET_PRODUCT_DETAIL,
  POST_PRODUCT,
  GET_SUPPLIERS,
  GET_ALL_CATEGORIES,
  TOTAL_PAGES,
  GET_CATEGORIES,
  GET_PRODUCTS_DEFAULT,
  GET_PRODUCTS_BY_FILTERS,
  GET_ALL_PRODUCTS_NAMES,
  GET_ACCESORIES,
  PRODUCTS_CONTROLLER,
} from "../constants/index";

const initialState = {
  productDetail: {},
  categoryProduct: "",
  allProducts: [],
  renderProducts: [],
  copyAllProducts: [],
  allCategories: [],
  filterProducts: [],
  allProductsNames: [],
  accessories: [],

  allSuppliers: [],

  totalPages: 1,

  productsControllers: {
    ram: false,
    storage: false,
    opeSystem: false,
    processor: false,
    display: false,
    typeScreen: false,
    resolution: false,
    sizeScreen: false,
    accessories: false,
    category: false,
    nameProduct: "",
    order: "ASC",
    typeOrder: "salePrice",
    page: 1,
  },
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCT_DETAIL:
      return {
        ...state,
        categoryProduct: payload.Category.name,
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

    case PRODUCTS_CONTROLLER:
      return {
        ...state,
        productsControllers: { ...state.productsControllers, ...payload },
      };
    case GET_PRODUCTS_BY_FILTERS:
      return {
        ...state,
        allProducts: payload,
      };
    case GET_ALL_PRODUCTS_NAMES:
      return {
        ...state,
        allProductsNames: payload,
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
