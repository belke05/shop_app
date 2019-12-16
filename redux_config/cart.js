import { UPDATE_CART, REMOVE_ITEM_CART } from "./actions";

export default function cart(usercart, products, action) {
  switch (action.type) {
    case UPDATE_CART:
      const new_product = products.find(
        product => action.productId === product.id
      );
      productInCart = usercart.products.some(product => {
        return product.item.id === new_product.id;
      });
      if (productInCart) {
        return Object.assign(
          {},
          {
            ...usercart,
            products: usercart.products.map(product => {
              if (product.item.id === new_product.id) {
                return { ...product, qty: (product.qty += 1) };
              } else {
                return product;
              }
            }),
            totalprice: (usercart.totalprice += new_product.price)
          }
        );
      }
      return Object.assign(
        {},
        {
          ...usercart,
          products: [...usercart.products, { qty: 1, item: new_product }],
          totalprice: (usercart.totalprice += new_product.price)
        }
      );
    case REMOVE_ITEM_CART:
      const removed_product = products.find(
        product => action.productId === product.id
      );
      const new_cart = products.filter(
        product => action.productId !== product.id
      );
      return Object.assign(
        {},
        {
          ...usercart,
          products: new_cart,
          totalprice: (usercart.totalprice -= removed_product.price)
        }
      );
    default:
      return Object.assign({}, { ...usercart });
  }
}
