import { GET_USER, DELETE_USER } from "./user.types";
const INITIAL = {
  current_user: {},
};

export const userReducer = (state = INITIAL, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return { ...state, current_user: payload };
      break;
    case DELETE_USER:
      return { ...state, current_user: payload };
    default:
      return state;
      break;
  }
};
