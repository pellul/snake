import { ElementI } from './element';
import { PositionI } from './position';
import { Vector } from '../vector';

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
    /*
     * If the player tries to go backward, then ignore the input and continue
     * strait
     */
    if (this.isGoingBackward(vector)) {
      vector = this.inertia;
    }
    this.onMove();
    this.position = Vector.add(this.position, vector);
    this.inertia = vector;
  }

  private isGoingBackward(vector: PositionI): boolean {
    const direction = Vector.add(this.inertia, vector);
    return direction.X === 0 && direction.Y === 0;
  }
}