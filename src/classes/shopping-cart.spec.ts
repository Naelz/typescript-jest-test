import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();

};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor (public name: string, public price: number) {};
  };
  return new CartItemMock(name, price);
};

describe('Shopping Cart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  })

    it('should have 2 carts items', () => {
    const { sut } = createSut();
    const cartItem1 = createCartItem('Camisa', 80);
    const cartItem2 = createCartItem('Bermuda', 50);
    sut.addItem(cartItem1)
    sut.addItem(cartItem2)
    expect(sut.items.length).toBe(2);
  })
});
