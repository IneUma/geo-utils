export default class Vector {
  private _x: number;
  private _y: number;
  private _z?: number;

  constructor(x: number, y: number, z?: number) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._x;
  }

  get z() {
    return this._z;
  }
}
