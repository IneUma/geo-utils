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
   * ベクトルを正規化して返す
   */
  normalize() {
    const length = Math.sqrt(this._x ** 2 + this._y ** 2);
    return { x: this._x / length, y: this._y / length };
  }

  /**
   * ベクトルの内積を返す
   * @param Vector
   */
  dot(vec: Vector) {
    return this._x * vec.x + this._y * vec.y;
  }
}
