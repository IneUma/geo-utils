import Matrix from './Matrix';

/**
 * @name getSkewMatrix
 * @summary せん断行列を返す
 *
 * @param {number} theta - ラジアン角
 *
 * @returns {Matrix} 行列
 *
 * @example
 * const result = getSkewMatrix(radian)
 */
const getSkewMatrix = (theta: number): Matrix => {
  return new Matrix([
    [1, 0, 0],
    [Math.tan(theta), 1, 0],
    [0, 0, 1],
  ]);
};

export default getSkewMatrix;
