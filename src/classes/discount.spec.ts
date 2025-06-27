import { Discount, NoDiscount, FiftyPercentDiscount, TenPercentDiscount, ThirtyPercentDiscount } from './discount';

const createSut = (className: new () => Discount ) => {
  return new className()
}

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.90)).toBe(10.90);
  });

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });

  it('should apply 30% discount on price', () => {
    const sut = createSut(ThirtyPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(7);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(100)).toBeCloseTo(50);
  });
});
