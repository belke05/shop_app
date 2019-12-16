import PRODUCTS from "../data/product_data";
import userproducts from "./userproducts";
import availableproducts from "./availableproducts";
import cart from "./cart";

const StartState = {
  availableproducts: PRODUCTS,
  userproducts: PRODUCTS.filter(product => product.user_id === "u1"),
  usercart: []
};

export const productReducer = (state = StartState, action) => {
  return {
    userproducts: userproducts(state.userproducts, action),
    availableproducts: availableproducts(state.availableproducts, action),
    usercart: cart(state.usercart, action)
  };
};
