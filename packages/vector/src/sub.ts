import Vector from './Vector';

/**
 * @name sub
 * @summary 2つのベクトルを減算する
 *
 * @param {Vector} vecA - ベクトル１
 * @param {Vector} vecB - ベクトル2
 * @returns {Vector} 合成ベクトル
 *
 * @example
 * const result = sub(new Vector(10, 20), new Vector(20, 10))
 */
const sub = (vecA: Vector, vecB: Vector): Vector => {
  return new Vector(vecA.x - vecB.x, vecA.y - vecB.y);
};

export default sub;
