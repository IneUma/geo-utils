import { Vector } from '../packages/vector';

describe('Vector', () => {
  test('ベクトルオブジェクトの作成', () => {
    const vec = new Vector(100, 200);
    expect(vec.x).toBe(100);
    expect(vec.y).toBe(200);
  });
});
