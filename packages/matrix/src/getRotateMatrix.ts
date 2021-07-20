import Matrix from './Matrix';

/**
 * @name getRotateMatrix
 * @summary 回転行列を返す
 *
 * @param {number} theta - ラジアン角
 *
 * @returns {Matrix} 行列
 *
 * @example
 * const result = getRotateMatrix(radian)
 */
const getRotateMatrix = (theta: number): Matrix => {
  return new Matrix([
    [Math.cos(theta), -Math.sin(theta), 0],
    [Math.sin(theta), Math.cos(theta), 0],
    [0, 0, 1],
  ]);
};

export default getRotateMatrix;
