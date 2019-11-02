import { Movable } from './interfaces';

export class Controller {
  public keyMap: Map<number, Function>;
  public lastInput: Function = () => undefined;

  public constructor(public player: Movable) {
    this.keyMap = new Map();
  }

  public bind(callback: Function, key: number) {
    this.keyMap.set(key, callback);
    return this;
  }

  public handleInput(e: KeyboardEvent) {
    this.lastInput = this.keyMap.get(e.keyCode);
    if (this.lastInput) {
      this.lastInput = this.lastInput.bind(this.player);
    }
  }

  public applyLastInput() {
    return this.lastInput();
  }
}
