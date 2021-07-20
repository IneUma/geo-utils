import Vector from './Vector';

/**
 * @name sub
 * @summary 2つのベクトルを減算する
 *
 * @param {Vector} vec1 - ベクトル１
 * @param {Vector} vec2 - ベクトル2
 * @returns {Vector} 合成ベクトル
 *
 * @example
 * const result = sub(new Vector(10, 20), new Vector(20, 10))
 */
const sub = (vec1: Vector, vec2: Vector): Vector => {
  return new Vector(vec1.x - vec2.x, vec1.y - vec2.y);
};

export default sub;