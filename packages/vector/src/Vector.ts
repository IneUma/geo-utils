export type Matrix1D = [[number, number, number]];

/**
 * @name Vector
 * @summary ベクトルオブジェクト
 */
export default class Vector {
  private _matrix: Matrix1D;

  constructor(x: number, y: number) {
    this._matrix = [[x, y, 1]];
  }

  get x() {
    return this._matrix[0][0];
  }

  get y() {
    return this._matrix[0][1];
  }

  set x(x: number) {
    this._matrix[0][0] = x;
  }

  set y(y: number) {
    this._matrix[0][1] = y;
  }

  get matrix() {
    return this._matrix;
  }
}
