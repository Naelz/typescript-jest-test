import { Discount } from './discount';
import { ShoppingCart } from './shopping-cart';

describe('Shopping Cart', () => {
  it('should be an empty cart when no product is added', () => {
    class DiscountMock extends Discount {}

    const sut = new ShoppingCart(new DiscountMock());
    expect(sut.isEmpty()).toBe(true);
  })
});
