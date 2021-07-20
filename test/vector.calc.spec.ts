import GeoUtils, { Vector } from '../packages/vector';

describe('Vector Calucation', () => {
  test('正のベクトル加算', () => {
    const vecA = new Vector(100, 200);
    const vecB = new Vector(400, 500);
    const result = GeoUtils.add(vecA, vecB);
    expect(result.x).toBe(500);
    expect(result.y).toBe(700);
  });

  test('ベクトル減算', () => {
    const vecA = new Vector(-100, 200);
    const vecB = new Vector(-400, -500);
    const result = GeoUtils.sub(vecA, vecB);
    expect(result.x).toBe(300);
    expect(result.y).toBe(700);
  });

  test('単位ベクトルの生成', () => {
    const vec = new Vector(100, 0);
    const result = GeoUtils.normalize(vec);
    expect(result.x).toBe(1);
    expect(result.y).toBe(0);
  });

  test('ベクトルの内積', () => {
    const vecA = new Vector(300, 0);
    const vecB = new Vector(0, 300);
    const result = GeoUtils.dot(vecA, vecB);
    expect(result).toBe(0);
  });
});
