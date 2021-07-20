type Matrix2D = [[number, number, number], [number, number, number], [number, number, number]];

/**
 * @name Matrix
 * @summary 行列オブジェクト
 */
export default class Matrix {
  private _matrix: Matrix2D;

  constructor(matrix: Matrix2D) {
    this._matrix = matrix;
  }

  get data() {
    return this._matrix;
  }

  set data(_matrix: Matrix2D) {}
}
