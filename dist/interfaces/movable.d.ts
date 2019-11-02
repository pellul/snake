import { PositionI } from './position';
import { ElementI } from './element';
export declare abstract class Movable implements ElementI {
    position: PositionI;
    color: string;
    inertia: PositionI;
    onMove: Function;
    constructor(position: PositionI, color: string, inertia?: PositionI);
    moveBottom(): void;
    moveLeft(): void;
    moveRight(): void;
    moveTop(): void;
    moveBy(vector?: PositionI): void;
}
