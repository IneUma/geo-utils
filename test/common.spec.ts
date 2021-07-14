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

  test('ベクトルの加算', () => {
    const vecA = new Vector(100, 200, 300);
    const vecB = new Vector(400, 500, 600);
    vecA.add(vecB);
    expect(vecA.x).toBe(500);
    expect(vecA.y).toBe(700);
    expect(vecA.z).toBe(900);
  });

  test('ベクトルの減算', () => {
    const vecA = new Vector(100, 200, 300);
    const vecB = new Vector(400, 500, 600);
    vecA.sub(vecB);
    expect(vecA.x).toBe(-300);
    expect(vecA.y).toBe(-300);
    expect(vecA.z).toBe(-300);
  });
});
