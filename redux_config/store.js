import React from "react";
import { createStore, combineReducers } from "redux";
import { productReducer } from "./reducers";
import { Provider } from "react-redux";

const store = createStore(combineReducers({ products: productReducer }));

export default function ReduxProvider(props) {
  return <Provider store={store}>{props.children}</Provider>;
}
