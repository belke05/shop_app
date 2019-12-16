import { UPDATE_CART } from "./actions";

export default function cart(usercart, products, action) {
  switch (action.type) {
    case UPDATE_CART:
      const new_product = products.find(
        product => action.productId === product.id
      );
      return Object.assign(
        {},
        {
          ...usercart,
          products: [...usercart.products, new_product],
          totalprice: (usercart.totalprice += new_product.price)
        }
      );
    default:
      return Object.assign({}, { ...usercart });
  }
}
