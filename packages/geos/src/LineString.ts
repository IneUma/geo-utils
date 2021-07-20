import Geo, { GeoJsonType, GeoClassObject } from './Geo';

export default class LineString extends Geo implements GeoClassObject {
  protected type = GeoJsonType.LineString;

  toGeoJson() {
    return {};
  }
}
