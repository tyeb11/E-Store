import axios from "axios";
import { ADD_CART_ITEM, REMOVE_CART_ITEM, GET_CART_ITEM } from "./cart.types";

export const getCartItems = () => async (dispatch) => {
  const res = await axios.get("/api/cart");
  console.log("getcart", res.data);
  dispatch({ type: GET_CART_ITEM, payload: res.data });
};

export const addCartItem = (id) => async (dispatch) => {
  await axios.post("/api/add-cart-item", { cartID: id });

  dispatch(getCartItems());
};
export const removeCartItem = (id) => async (dispatch) => {
  console.log(id);
  await axios.delete("/api/remove-cart-item", { data: { cartID: id } });

  dispatch(getCartItems());
};
