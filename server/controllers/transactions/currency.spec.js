import { generateCurrency } from './currency';

describe('Currency', () => {
  it('should return a valid currency code', () => {
    expect(generateCurrency()).toEqual('EUR');
  });
});
