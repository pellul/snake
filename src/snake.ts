import { Bait } from './bait';
import { PositionI, Movable } from './interfaces';
import { Vector } from './vector';

export class Snake extends Movable {
  public child: Snake;

  public constructor(
    position: PositionI,
    public color = '#0f380f',
    public parent: Snake = undefined
  ) {
    super(position, color);
  }

  /**
   * Eat a bait and append it to the snake
   */
  public eat(bait: Bait) {
    // The new part will have the tail's end previous position
    const tailEnd = this.getTailEnd();
    tailEnd.child = new Snake(tailEnd.getPreviousPosition(), bait.color, tailEnd);
  }

  // When moving, propagate the action to the child
  onMove = () => void (this.child && this.child.moveBy(this.inertia));

  // Get the positions array of the snake and all its children
  public getPositions(): PositionI[] {
    return this.child
      ? [...this.child.getPositions(), this.position]
      : [this.position];
  }

  public getPreviousPosition(): PositionI {
    return Vector.sub(this.position, this.inertia);
  }

  getTailEnd(): Snake {
    return this.child ? this.child.getTailEnd() : this;
  }
}