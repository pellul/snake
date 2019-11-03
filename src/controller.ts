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

  // If the input is bound to a function, then save the input
  public handleInput(e: KeyboardEvent) {
    if (this.keyMap.get(e.keyCode)) {
      this.lastInput = this.keyMap.get(e.keyCode).bind(this.player);
    }
  }

  public applyLastInput() {
    return this.lastInput();
  }
}
