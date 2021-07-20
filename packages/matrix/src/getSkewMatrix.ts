import Matrix from './Matrix';

/**
 * @name getSkewMatrix
 * @summary せん断行列を返す
 *
 * @param {number} xtheta - ラジアン角
 * @param {number} ytheta - ラジアン角
 *
 * @returns {Matrix} 行列
 *
 * @example
 * const result = getSkewMatrix(radian)
 */
const getSkewMatrix = (xtheta: number, ytheta: number): Matrix => {
  return new Matrix([
    [1, Math.tan(xtheta), 0],
    [Math.tan(ytheta), 1, 0],
    [0, 0, 1],
  ]);
};

export default getSkewMatrix;
