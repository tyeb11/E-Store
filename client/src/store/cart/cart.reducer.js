import { ADD_CART_ITEM, GET_CART_ITEM } from "./cart.types";

const INITIAL = {
  cartItems: [],
};

export const cartReducer = (state = INITIAL, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CART_ITEM:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
};
