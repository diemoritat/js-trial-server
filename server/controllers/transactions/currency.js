import { getRandomIndexFromArray } from '../../util';

const generateCurrency = () => {
  const currency = ['EUR'];
  const index = getRandomIndexFromArray(currency);

  return currency[index];
};

export { generateCurrency };
