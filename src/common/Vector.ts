export default class Vector {
  private _x: number;
  private _y: number;
  private _z?: number;

  /**
   *
   *
   *
   * @constructor
   * @see Interface
   * @version 1.0.0
   * -------------------------------------------------------------------------- */
  constructor(x: number, y: number, z?: number) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get z() {
    return this._z;
  }

  set x(x: number) {
    this._x = x;
  }

  set y(y: number) {
    this._y = y;
  }

  set z(z: number) {
    this._z = z;
  }

  add(vec: Vector) {
    this._x += vec.x;
    this._y += vec.y;
    this._z += vec.z;
  }

  sub(vec: Vector) {
    this._x -= vec.x;
    this._y -= vec.y;
    this._z -= vec.z;
  }
}
