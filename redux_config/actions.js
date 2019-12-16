export const UPDATE_CART = "UPDATE_CART";

export const update_cart = productId => {
  return {
    type: UPDATE_CART,
    productId: productId
  };
};
