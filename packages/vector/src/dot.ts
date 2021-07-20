import Vector from './Vector';

/**
 * @name dot
 * @summary 2つのベクトルの内積を計算する
 *
 * @param {Vector} vec1 - ベクトル１
 * @param {Vector} vec2 - ベクトル2
 * @returns {number} 計算結果
 *
 * @example
 * const result = dot(new Vector(10, 20), new Vector(20, 10))
 */
const dot = (vec1: Vector, vec2: Vector): number => {
  return vec1.x * vec2.x + vec1.y * vec2.y;
};

export default dot;
