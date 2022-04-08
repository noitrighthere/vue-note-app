import { sum } from './math';

// sum(10, 20);

describe('math.js', () => {
  test('10 + 29 = 20', () => {
    const result = sum(10, 20);
    result === 30;
    expect(result).toBe(30);
  });
});
