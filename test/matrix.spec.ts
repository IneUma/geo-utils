import { Matrix, Matrix2D } from '../packages/matrix';

describe('Matrix', () => {
  test('行列オブジェクトの作成', () => {
    const _data: Matrix2D = [
      [100, 0, 0],
      [0, 100, 0],
      [0, 0, 1],
    ];

    const matrix = new Matrix(_data);
    expect(matrix.data).toMatchObject(_data);
  });
});
