import { MODAL_ACTION_TYPES } from "./modal.types";

export const toggleSignInModal = (data) => ({
  type: MODAL_ACTION_TYPES.TOGGEL_SIGNN_IN_MODAL,
  payload: data,
});
export const toggleCartModal = (data) => ({
  type: MODAL_ACTION_TYPES.TOGGEL_CART_MODAL,
  payload: data,
});
export const toggleUserModal = (data) => ({
  type: MODAL_ACTION_TYPES.TOGGEL_USER_MODAL,
  payload: data,
});
export const toggleSuccessModal = (data) => ({
  type: MODAL_ACTION_TYPES.TOGGEL_SUCCESS_MODAL,
  payload: data,
});
