import { getRandomIndexFromArray } from '../../util';

const generateAmount = (min = 1, max = 20000, decimal = 2) => {
  let randomAmount = Math.random() * (max - min) + min;

  return randomAmount.toFixed(decimal);
};

const generatePaymentMethod = () => {
  const paymentMethods = ['card', 'cash'];
  const index = getRandomIndexFromArray(paymentMethods);

  return paymentMethods[index];
};

export { generateAmount, generatePaymentMethod };
