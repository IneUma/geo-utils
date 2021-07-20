import Vector from './Vector';

/**
 * @name normalize
 * @summary 単位ベクトルを生成する
 *
 * @param {Vector} vec - ベクトル
 * @returns {Vector} 単位ベクトル
 *
 * @example
 * const result = normalize(new Vector(10, 10))
 */
const normalize = (vec: Vector): Vector => {
  const length = Math.sqrt(vec.x ** 2 + vec.y ** 2);
  return new Vector(vec.x / length, vec.y / length);
};

export default normalize;
