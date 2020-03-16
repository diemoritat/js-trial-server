const getDateDifferenceInMonths = (from, to) => {
  const fromYear = from.getFullYear();
  const fromMonth = from.getMonth();

  const toYear = to.getFullYear();
  const toMonth = to.getMonth();

  return fromMonth + 12 * fromYear - (toMonth + 12 * toYear);
};

export { getDateDifferenceInMonths };
