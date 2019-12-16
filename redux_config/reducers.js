import PRODUCTS from "../data/product_data";
import userproducts from "./userproducts";
import availableproducts from "./availableproducts";
import cart from "./cart";

const StartState = {
  availableproducts: PRODUCTS,
  userproducts: PRODUCTS.filter(product => product.user_id === "u1"),
  usercart: { products: [], totalprice: 0 }
};

export const productReducer = (state = StartState, action) => {
  return {
    userproducts: userproducts(state.userproducts, action),
    availableproducts: [...state.availableproducts],
    usercart: cart(state.usercart, state.availableproducts, action)
  };
};
