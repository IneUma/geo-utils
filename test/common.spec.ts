import Vector from '../src/common/Vector';

describe('ベクトル', () => {
  test('データ格納テスト', () => {
    const vec = new Vector(100, 300);
    expect(vec.x).toBe(100);
    expect(vec.y).toBe(300);
  });

  test('ベクトルの加算', () => {
    const vecA = new Vector(100, 200);
    const vecB = new Vector(400, 500);
    vecA.add(vecB);
    expect(vecA.x).toBe(500);
    expect(vecA.y).toBe(700);
  });

  test('ベクトルの減算', () => {
    const vecA = new Vector(100, 200);
    const vecB = new Vector(400, 500);
    vecA.sub(vecB);
    expect(vecA.x).toBe(-300);
    expect(vecA.y).toBe(-300);
  });

  test('ベクトルの正規化', () => {
    const vec = new Vector(3, 10);
    const norm = vec.normalize();
    expect(norm.x).toBe(0.2873478855663454);
    expect(norm.y).toBe(0.9578262852211513);
  });

  test('ベクトルの内積', () => {
    const vecA = new Vector(10, 0);
    const vecB = new Vector(0, 10);
    expect(vecA.dot(vecB)).toBe(0);
  });
});
