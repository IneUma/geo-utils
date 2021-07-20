import Geo, { GeoJsonType, GeoClassObject } from './Geo';

export default class Polygon extends Geo implements GeoClassObject {
  protected type = GeoJsonType.Polygon;

  toGeoJson() {
    return {};
  }
}
