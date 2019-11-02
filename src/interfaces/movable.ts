import { Vector } from '../vectors';
import { PositionI } from './position';
import { ElementI } from './element';

export abstract class Movable implements ElementI {
  public onMove: Function;

  public constructor(
    public position: PositionI,
    public color: string,
    public inertia: PositionI = { X: 0, Y: 0},
  ) {}

  public moveBottom() {
    this.moveBy(Vector.bottom);
  }

  public moveLeft() {
    this.moveBy(Vector.left);
  }

  public moveRight() {
    this.moveBy(Vector.right);
  }

  public moveTop() {
    this.moveBy(Vector.top);
  }

  public moveBy(vector: PositionI = { X: 0, Y: 0 }) {
    this.onMove();
    this.position = Vector.add(this.position, vector);
    this.inertia = vector;
  }
}