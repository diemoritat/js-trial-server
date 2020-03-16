import { getRandomInteger, getRandomIndexFromArray } from './random';

describe('Random', () => {
  it('should return an random integer number less than a given number', () => {
    expect(getRandomInteger(3)).toBeLessThanOrEqual(3);
    expect(getRandomInteger(5)).toBeLessThanOrEqual(5);
    expect(getRandomInteger(0)).toBeLessThanOrEqual(0);
  });

  it('should return a random index from a given array', () => {
    const array = ['a', 'b', 'c'];
    expect(getRandomIndexFromArray(array)).toBeLessThanOrEqual(2);
  });
});
