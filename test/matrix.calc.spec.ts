import GeoUtils from '../packages/matrix';

describe('Matrix Calucation', () => {
  test('アフィン変換 移動行列の取得', () => {
    const matrix = GeoUtils.getTranslateMatrix(100, 100);
    expect(matrix.data).toMatchObject([
      [1, 0, 100],
      [0, 1, 100],
      [0, 0, 1],
    ]);
  });

  test('アフィン変換 拡大縮小行列の取得', () => {
    const matrix = GeoUtils.getScaleMatrix(1.3, 1.3);
    expect(matrix.data).toMatchObject([
      [1.3, 0, 0],
      [0, 1.3, 0],
      [0, 0, 1],
    ]);
  });

  test('アフィン変換 回転行列の取得', () => {
    const radian = (60 * Math.PI) / 180;
    const matrix = GeoUtils.getRotateMatrix(radian);
    expect(matrix.data).toMatchObject([
      [Math.cos(radian), -Math.sin(radian), 0],
      [Math.sin(radian), Math.cos(radian), 0],
      [0, 0, 1],
    ]);
  });

  test('アフィン変換 せん断行列の取得', () => {
    const xradian = (60 * Math.PI) / 180;
    const yradian = (60 * Math.PI) / 180;
    const matrix = GeoUtils.getSkewMatrix(xradian, yradian);
    expect(matrix.data).toMatchObject([
      [1, Math.tan(xradian), 0],
      [Math.tan(yradian), 1, 0],
      [0, 0, 1],
    ]);
  });
});
