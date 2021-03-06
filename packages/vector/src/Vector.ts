import { Matrix } from '../../matrix';

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

  /**
   * ベクトルを2次行列形式で返す
   * @returns Matrix2D
   */
  public toMatrix = (): Matrix => {
    return new Matrix([
      [this.x, 0, 0],
      [0, this.y, 0],
      [0, 0, 1],
    ]);
  };
}
