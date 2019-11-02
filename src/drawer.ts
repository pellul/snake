import { PositionI, ElementI } from './interfaces';

export class Drawer {
  public UNIT_SIZE = 8;
  public BACKGROUND_COLOR = '#8bac0f';

  public constructor(
    public readonly width: number,
    public readonly height: number,
    public readonly canvas: HTMLCanvasElement,
  )
  {
    this.canvas.width = this.width * this.UNIT_SIZE;
    this.canvas.height = this.height * this.UNIT_SIZE;
  }

  public getRandomPosition(...occupied: PositionI[]): PositionI {
    const random = () => {
      return {
        X: (Math.floor((Math.random() * this.width))),
        Y: (Math.floor((Math.random() * this.height))),
      };
    };

    const exists = pos => occupied.some(item => item.X === pos.X && item.Y === pos.Y)

    let position = random();
    while(exists(position)) {
      position = random();
    }
    return position;
}

  public draw(...elements: ElementI[]) {
    this.clear();
    this.drawBackground();
    elements.forEach(this.drawElement)
  }

  drawElement = (element: ElementI) => {
    const context = this.getContext();
    context.fillStyle = element.color;
    context.fillRect(
      element.position.X * this.UNIT_SIZE,
      element.position.Y * this.UNIT_SIZE,
      this.UNIT_SIZE,
      this.UNIT_SIZE,
    );
    if (element['child']) {
      this.drawElement(element['child']);
    }
  }

  public clear() {
    this.getContext().clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public drawBackground() {
    const context = this.getContext();
		context.fillStyle = this.BACKGROUND_COLOR;
		context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		context.fill();
  }

  private getContext() {
    return this.canvas.getContext('2d');
  }
}