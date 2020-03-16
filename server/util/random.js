const getRandomInteger = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getRandomIndexFromArray = arr => {
  return Math.floor(Math.random() * Math.floor(arr.length));
};

export { getRandomInteger, getRandomIndexFromArray };
