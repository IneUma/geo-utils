import Matrix from './Matrix';

/**
 * @name getScaleMatrix
 * @summary 拡大縮小行列を返す
 *
 * @param {number} x - X軸倍率
 * @param {number} y - y軸倍率
 *
 * @returns {Matrix} 行列
 *
 * @example
 * const result = getScaleMatrix(1.3, 1.3)
 */
const getScaleMatrix = (x: number, y: number): Matrix => {
  return new Matrix([
    [x, 0, 0],
    [0, y, 0],
    [0, 0, 1],
  ]);
};

export default getScaleMatrix;
