import pagination from './pagination';

describe('Pagination', () => {
  it('should return paginate an array correctly', () => {
    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l'];
    const pageSize = 2;

    expect(pagination(array, pageSize, 1)).toStrictEqual(['a', 'b']);
    expect(pagination(array, pageSize, 2)).toStrictEqual(['c', 'd']);
    expect(pagination(array, pageSize, 3)).toStrictEqual(['e', 'f']);
    expect(pagination(array, pageSize, 4)).toStrictEqual(['g', 'h']);
    expect(pagination(array, pageSize, 5)).toStrictEqual(['i', 'j']);
    expect(pagination(array, pageSize, 6)).toStrictEqual(['l']);
  });
});
