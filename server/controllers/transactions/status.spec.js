import { generateStatus } from './status';

describe('Status', () => {
  it('should return a valid status code', () => {
    expect(generateStatus()).toMatch(/successful|refunded|failed/);
  });
});
