import { PositionI, Movable } from './interfaces';
import { Bait } from './bait';
export declare class Snake extends Movable {
    color: string;
    parent: Snake;
    child: Snake;
    newBorn: boolean;
    constructor(position: PositionI, color?: string, parent?: Snake);
    eat(bait: Bait): void;
    onMove: () => void;
    getPositions(): PositionI[];
}
