import { getDateDifferenceInMonths } from './date';

describe('Date', () => {
  it('should return the difference in months between dates', () => {
    const date1 = new Date('2019-11-07');
    const date2 = new Date('2019-05-07');
    expect(getDateDifferenceInMonths(date1, date2)).toEqual(6);

    const date3 = new Date('2019-11-07');
    const date4 = new Date('2019-10-07');
    expect(getDateDifferenceInMonths(date3, date4)).toEqual(1);
  });
});
