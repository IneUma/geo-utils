export default class Vector {
  private _x: number;
  private _y: number;

  /**
   *
   *
   *
   * @constructor
   * @see Interface
   * @version 1.0.0
   * -------------------------------------------------------------------------- */
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  set x(x: number) {
    this._x = x;
  }

  set y(y: number) {
    this._y = y;
  }

  /**
   * ベクトルを加算した結果を返す
   * @param Vector
   */
  add(vec: Vector) {
    this._x += vec.x;
    this._y += vec.y;
  }

  /**
   * ベクトルを減算した結果を返す
   * @param Vector
   */
  sub(vec: Vector) {
    this._x -= vec.x;
    this._y -= vec.y;
  }

  /**
   * ベクトルの内積を返す
   * @param Vector
   * @returns ラジアン
   */
  dot(vec: Vector) {
    return this._x * vec.x + this._y * vec.y;
  }
}
