import { Movable } from './interfaces';
export declare class Controller {
    player: Movable;
    keyMap: Map<number, Function>;
    lastInput: Function;
    constructor(player: Movable);
    bind(callback: Function, key: number): this;
    handleInput(e: KeyboardEvent): void;
    applyLastInput(): any;
}
