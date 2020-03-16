import { generateAmount, generatePaymentMethod } from './payment';

describe('Payment', () => {
  it('should return a valid formatted amount', () => {
    expect(generateAmount()).toMatch(/^[0-9]+(\.[0-9]{1,2})?$/);
  });

  it('should return a valid payment method', () => {
    expect(generatePaymentMethod()).toMatch(/card|cash/);
  });
});
