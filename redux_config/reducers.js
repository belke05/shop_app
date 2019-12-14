import PRODUCTS from "../data/product_data";
import userproducts from "./userproducts";
import availableproducts from "./availableproducts";

const StartState = {
  availableproducts: PRODUCTS,
  userproducts: PRODUCTS.filter(product => product.user_id === "u1")
};

export const productReducer = (state = StartState, action) => {
  return {
    userproducts: userproducts(state.userproducts, action),
    availableproducts: availableproducts(state.availableproducts, action)
  };
};
