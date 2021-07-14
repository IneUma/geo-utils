/**
 * GeoJson の種類の定義
 *
 *
 * @see Enum
 * @version 1.0.0
 * -------------------------------------------------------------------------- */
export enum GeoJsonType {
  Point = 'Point',
  LineString = 'LineString',
  Polygon = 'Polygon',
  MultiPoint = 'MultiPoint',
  MultiLineString = 'MultiLineString',
  MultiPolygon = 'MultiPolygon',
}

/**
 * GeoJson の出力形式
 *
 *
 * @see Interface
 * @version 1.0.0
 * -------------------------------------------------------------------------- */
type Vector = [number, number];
export type GeoJson = {
  type: GeoJsonType;
  coordinates: Vector | Vector[];
};

/**
 * Geo 基底クラス のインターフェース
 *
 *
 * @see Interface
 * @version 1.0.0
 * -------------------------------------------------------------------------- */
export type GeoClassObject = {
  /**
   * GeoJson を返す
   */
  toGeoJson: () => object;
};

/**
 * Geo 基底クラス
 *
 *
 * @see Class
 * @version 1.0.0
 * -------------------------------------------------------------------------- */
export default class Geo {
  protected type: GeoJsonType;
}
