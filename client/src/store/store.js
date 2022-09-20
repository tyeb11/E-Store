import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middleWares = [thunk];

const composedEnhancer = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancer);
