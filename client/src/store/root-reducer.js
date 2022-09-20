import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { feedsReducer } from "./feeds/feeds.reducer";
import { modalReducer } from "./modal/modal.reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  feeds: feedsReducer,
  modal: modalReducer,
});
