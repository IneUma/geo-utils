import { Vector } from '../packages/vector';

describe('Vector', () => {
  test('ベクトルオブジェクトの作成', () => {
    const vec = new Vector(100, 200);
    expect(vec.x).toBe(100);
    expect(vec.y).toBe(200);
  });

  test('ベクトル変更', () => {
    const vec = new Vector(100, 200);
    vec.x = 999;
    vec.y = 111;
    expect(vec.x).toBe(999);
    expect(vec.y).toBe(111);
  });

  test('ベクトルを2次行列形式で取得', () => {
    const vec = new Vector(100, 200);
    expect(vec.toMatrix().data).toMatchObject([
      [100, 0, 0],
      [0, 200, 0],
      [0, 0, 1],
    ]);
  });
});
