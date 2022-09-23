import { MODAL_ACTION_TYPES } from "./modal.types";

const INITIAL_STATE = {
  sign_in_modal: false,
  cart_modal: false,
  user_modal: false,
};

export const modalReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL_ACTION_TYPES.TOGGEL_SIGNN_IN_MODAL:
      return { ...state, sign_in_modal: payload };
      break;
    case MODAL_ACTION_TYPES.TOGGEL_CART_MODAL:
      return { ...state, cart_modal: payload };
      break;
    case MODAL_ACTION_TYPES.TOGGEL_USER_MODAL:
      return { ...state, user_modal: payload };
      break;
    default:
      return state;
      break;
  }
};
