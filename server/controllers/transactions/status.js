import { getRandomIndexFromArray } from '../../util';

const generateStatus = () => {
  const statuses = [
    'successful',
    'refunded',
    'failed',
    'successful',
    'successful'
  ];
  const index = getRandomIndexFromArray(statuses);

  return statuses[index];
};

export { generateStatus };
