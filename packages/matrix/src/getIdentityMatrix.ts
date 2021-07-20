import Matrix from './Matrix';

/**
 * @name getIdentityMatrix
 * @summary 単位行列を返す
 *
 * @returns {Matrix} 行列
 *
 * @example
 * const result = getIdentityMatrix()
 */
const getIdentityMatrix = (): Matrix => {
  return new Matrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]);
};

export default getIdentityMatrix;
