import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";

export const configureStore = (initialState: object = {}) => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  return createStore(rootReducer, initialState, compose(...enhancers));
};
