import { PositionI, Movable } from './interfaces';
import { Bait } from './bait';
import { Vector } from './vectors';

export class Snake extends Movable {
  public child: Snake;
  public newBorn = false;

  public constructor(
    position: PositionI,
    public color = '#0f380f',
    public parent: Snake = undefined
  )
  {
    super(position, color);
  }

  public eat(bait: Bait) {
    const giveChildTo = item => {
      const position = Vector.sub(item.position, item.inertia);
      item.child = new Snake(position, bait.color, item)
    }
    const TheDeepest = (item: Snake) => item.child ? TheDeepest(item.child) : item;
    giveChildTo(TheDeepest(this));
  }

  onMove = () => {
    if (this.child) {
      this.child.moveBy(this.inertia);
    }
  }

  public getPositions(): PositionI[] {
    return this.child
      ? [...this.child.getPositions(), this.position]
      : [this.position];
  }
}