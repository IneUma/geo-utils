import Vector from './Vector';

/**
 * @name dot
 * @summary 2つのベクトルの内積を計算する
 *
 * @param {Vector} vecA - ベクトル１
 * @param {Vector} vecB - ベクトル2
 * @returns {number} 計算結果
 *
 * @example
 * const result = dot(new Vector(10, 20), new Vector(20, 10))
 */
const dot = (vecA: Vector, vecB: Vector): number => {
  return vecA.x * vecB.x + vecA.y * vecB.y;
};

export default dot;
