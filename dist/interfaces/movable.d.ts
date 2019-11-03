import { ElementI } from './element';
import { PositionI } from './position';
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
    private isGoingBackward;
}
