import { Bait } from './bait';
import { Controller } from './controller';
import { Drawer } from './drawer';
import { PositionI } from './interfaces';
import { Snake } from './snake';

export class Game {
  private readonly drawer: Drawer;
  private readonly controller: Controller;
  private snake: Snake;
  private bait: Bait;
  private gameIsOver: boolean = false;
  private difficulty: number = 0;

  public constructor(width: number, height: number, canvas: HTMLCanvasElement) {
    this.drawer = new Drawer(width, height, canvas);
    this.snake = new Snake(this.getRandomPosition());
    this.bait = new Bait(this.getRandomPosition());
    this.controller = new Controller(this.snake)
      .bind(this.snake.moveBottom, 38)
      .bind(this.snake.moveLeft, 37)
      .bind(this.snake.moveRight, 39)
      .bind(this.snake.moveTop, 40);

    window.addEventListener('keydown', e => this.controller.handleInput(e));
    this.init();
  }

  private handleInput() {
    this.controller.lastInput();
  }

  private update() {
    this.handleSuicide();
    this.handleBoundaries(this.snake);
    this.handleBaits();
  }

  private gameFinished() {
    if (this.snake.getPositions().length >= (this.drawer.width * this.drawer.height)) {
      return this.gameIsOver = true;
    }
  }

  private handleBoundaries(snake: Snake) {
    const position = snake.position;
    if (position.X < 0) {
      snake.position.X = this.drawer.width - 1;
    } else if (position.X >= this.drawer.width) {
      snake.position.X = 0;
    }
    if (position.Y < 0) {
      snake.position.Y = this.drawer.height - 1;
    } else if (position.Y >= this.drawer.height) {
      snake.position.Y = 0;
    }
    if (snake.child) {
      this.handleBoundaries(snake.child);
    }
  }

  private handleBaits() {
    const pos = this.snake.position;
    const baitPos = this.bait.position;
    if (pos.X === baitPos.X && pos.Y === baitPos.Y) {
      this.snake.eat(this.bait);
      this.difficulty++;
      if (!this.gameFinished()) {
        this.bait = this.generateBait();
      }
    }
  }

  private generateBait(): Bait {
    return new Bait(this.getRandomPosition(...this.snake.getPositions()));
  }

  private getRandomPosition(...occupied: PositionI[]): PositionI {
    const random = () => {
      return {
        X: (Math.floor((Math.random() * this.drawer.width))),
        Y: (Math.floor((Math.random() * this.drawer.height))),
      };
    };

    const exists = pos => occupied.some(item => item.X === pos.X && item.Y === pos.Y)

    let position = random();
    while(exists(position)) {
      position = random();
    }
    return position;
  }

  private handleSuicide() {
    const isCommitingSuicide = () => {
      const headPosition = this.snake.position;
      let tail = this.snake.child;
      while (tail) {
        if (tail.position.X === headPosition.X && tail.position.Y === headPosition.Y) {
          return true;
        }
        tail = tail.child;
      }
      return false;
    }
    this.gameIsOver = isCommitingSuicide();
  }

  private render() {
    this.drawer.draw(this.snake, this.bait);
  }

  init = () => {
    if (!this.gameIsOver) {
      setTimeout(this.init, Math.max(20, (200 - this.difficulty * 5)));
      this.handleInput();
      this.update();
      this.render();
    } else {
      alert(`Score: ${this.difficulty * 5}`);
    }
  }
}