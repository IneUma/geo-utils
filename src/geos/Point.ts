import Geo, { GeoJsonType, GeoClassObject } from './Geo';

export default class Point extends Geo implements GeoClassObject {
  protected type = GeoJsonType.Point;

  toGeoJson() {
    return {};
  }
}
