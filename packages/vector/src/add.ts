import Vector from './Vector';

/**
 * @name sub
 * @summary 2つのベクトルを加算する
 *
 * @param {Vector} vecA - ベクトル１
 * @param {Vector} vecB - ベクトル2
 * @returns {Vector} 合成ベクトル
 *
 * @example
 * const result = add(new Vector(10, 20), new Vector(20, 10))
 */
const add = (vecA: Vector, vecB: Vector): Vector => {
  return new Vector(vecA.x + vecB.x, vecA.y + vecB.y);
};

export default add;
