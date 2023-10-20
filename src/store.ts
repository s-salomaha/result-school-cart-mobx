import { makeAutoObservable } from 'mobx'
import { initialProducts } from "./initialProducts";
import { IProduct } from "./types/IProduct";
import { round } from "./utils";

export function calcCartTotal(cartProducts: IProduct[]) {
  const subtotal = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);
  const tax = subtotal * .13;
  const total = subtotal + tax;

  return {
    subtotal: round(subtotal),
    tax: round(tax),
    total: round(total)
  };
}

export const store = makeAutoObservable({
  products: initialProducts,
  headerClicks: 0,
  increaseHeaderClicks() {
    store.headerClicks++
  },
  increaseQuantity(id: IProduct['id']) {
    const product = store.products.find((product) => product.id === id)

    if (product) {
      product.quantity++
    }
  },
  decreaseQuantity(id: IProduct['id']) {
    const product = store.products.find((product) => product.id === id)

    if (product && product.quantity > 0) {
      product.quantity--
    }
  },
  get total() {
    return calcCartTotal(store.products)
  }
})
