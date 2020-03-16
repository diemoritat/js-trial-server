import generateTransactions from './index';

describe('Transactions', () => {
  it('should have 100 list items', () => {
    const transactions = generateTransactions();

    expect(transactions).toHaveLength(100);
  });

  it('should have a valid payload', () => {
    const transactions = generateTransactions()[0];

    expect(transactions).toHaveProperty('id');
    expect(transactions).toHaveProperty('date');
    expect(transactions).toHaveProperty('amount');
    expect(transactions).toHaveProperty('status');
    expect(transactions).toHaveProperty('currency');
    expect(transactions).toHaveProperty('paymentMethod');
  });
});
