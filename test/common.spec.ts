import Vector from '../src/common/Vector';

describe('Vector', () => {
  test('Object Value', () => {
    const vec = new Vector(100, 300);
    expect(vec.x).toBe(100);
  });
});
