export const UPDATE_CART = "UPDATE_CART";
export const REMOVE_ITEM_CART = "REMOVE_ITEM_CART";

export const update_cart = productId => {
  return {
    type: UPDATE_CART,
    productId: productId
  };
};

export const remove_item_cart = productId => {
  return {
    type: REMOVE_ITEM_CART,
    productId: productId
  };
};
