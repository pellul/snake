import { PositionI } from './interfaces';

export class Vector {
  static bottom: PositionI = { X: 0, Y: -1 };
  static left: PositionI = { X: -1, Y: 0 };
  static right: PositionI = { X: 1, Y: 0 };
  static top: PositionI = { X: 0, Y: 1 };

  static add(a: PositionI, b: PositionI): PositionI {
    return {
      X: a.X + b.X,
      Y: a.Y + b.Y,
    };
  }

  static sub(a: PositionI, b: PositionI): PositionI {
    return {
      X: a.X - b.X,
      Y: a.Y - b.Y,
    };
  }
}
