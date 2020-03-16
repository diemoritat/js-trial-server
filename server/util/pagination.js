const pagination = (array, pageSize, currentPage) => {
  --currentPage;

  return array.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
};

export default pagination;
