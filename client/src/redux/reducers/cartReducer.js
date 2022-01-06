/* eslint-disable */

import {
  ADD_TO_CART,
  CLEAN_CART,
  EDIT_QUANTITY,
  REMOVE_FROM_CART,
  SET_TOTAL_PRICE,
} from "../constants/cartConstants";

const cartInitialState = {
  cart: [],
  totalPrice: 0,
};

export const cartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const inCart = state.cart.find((p) => p.id === product.id);
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...product, quantity: 1 }],
      };
    case CLEAN_CART:
      return {
        ...state,
        cart: [],
      };
    case EDIT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: +action.payload.value }
            : item
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => +item.id !== +action.payload),
      };
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
};
