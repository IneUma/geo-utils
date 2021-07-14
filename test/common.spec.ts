import Vector from '../src/common/Vector';

describe('ベクトル', () => {
  test('データ格納テスト (2次元)', () => {
    const vec = new Vector(100, 300);
    expect(vec.x).toBe(100);
    expect(vec.y).toBe(300);
    expect(vec.z).toBe(undefined);
  });

  test('データ格納テスト (3次元)', () => {
    const vec = new Vector(100, 300, 500);
    expect(vec.x).toBe(100);
    expect(vec.y).toBe(300);
    expect(vec.z).toBe(500);
  });
});
