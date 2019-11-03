import { Bait } from './bait';
import { PositionI, Movable } from './interfaces';
export declare class Snake extends Movable {
    color: string;
    parent: Snake;
    child: Snake;
    constructor(position: PositionI, color?: string, parent?: Snake);
    eat(bait: Bait): void;
    onMove: () => any;
    getPositions(): PositionI[];
    getPreviousPosition(): PositionI;
    getTailEnd(): Snake;
}
