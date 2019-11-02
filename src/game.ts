import { Drawer } from './drawer';
import { Snake } from './snake';
import { Controller } from './controller';
import { Bait } from './bait';

export class Game {
  private readonly drawer: Drawer;
  private readonly controller: Controller;
  private snake: Snake;
  private bait: Bait;
  private gameIsOver: boolean = false;
  private difficulty: number = 0;

  public constructor(width: number, height: number, canvas: HTMLCanvasElement) {
    this.drawer = new Drawer(width, height, canvas);
    this.snake = new Snake(this.drawer.getRandomPosition());
    this.bait = new Bait(this.drawer.getRandomPosition());
    this.controller = new Controller(this.snake)
      .bind(this.snake.moveBottom, 38)
      .bind(this.snake.moveLeft, 37)
      .bind(this.snake.moveRight, 39)
      .bind(this.snake.moveTop, 40);

    window.addEventListener('keydown', e => this.controller.handleInput(e));
    this.init();
  }

  private handleInput() {
    this.controller.applyLastInput();
  }

  private update() {
    this.handleBoundaries(this.snake);
    this.handleBaits();
    this.handleSuicide();
  }

  private gameFinished() {
    if (this.snake.getPositions().length >= (this.drawer.width * this.drawer.height)) {
      console.log('H4rD K0r3')
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
    return new Bait(this.drawer.getRandomPosition(...this.snake.getPositions()));
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