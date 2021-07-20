import { Vector } from '../../vector';

/**
 * @name Matrix2D
 * @summary 2次行列の型
 */
export type Matrix2D = [[number, number, number], [number, number, number], [number, number, number]];

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

  set data(matrix: Matrix2D) {
    this._matrix = matrix;
  }

  /**
   * ベクトルオブジェクトで返す
   * @returns Vector
   */
  public toVector = (): Vector => {
    return new Vector(this._matrix[0][0], this._matrix[1][1]);
  };
}
