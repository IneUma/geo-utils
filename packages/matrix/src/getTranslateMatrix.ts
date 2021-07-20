import Matrix from './Matrix';

/**
 * @name getTranslateMatrix
 * @summary 移動行列を返す
 *
 * @param {number} x - X軸移動値
 * @param {number} y - y軸移動値
 *
 * @returns {Matrix} 行列
 *
 * @example
 * const result = getTranslateMatrix(10, 10)
 */
const getTranslateMatrix = (x: number, y: number): Matrix => {
  return new Matrix([
    [1, 0, x],
    [0, 1, y],
    [0, 0, 1],
  ]);
};

export default getTranslateMatrix;
