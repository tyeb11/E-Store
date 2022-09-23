import axios from "axios";
import { GET_USER, DELETE_USER } from "./user.types";

export const getUser = () => async (dispatch) => {
  const res = await axios.get("/api/auth/current-user");
  dispatch({ type: GET_USER, payload: res.data });
};
export const removeUser = () => async (dispatch) => {
  dispatch({ type: DELETE_USER, payload: {} });
};
