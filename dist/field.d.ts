import { PositionI, ElementI } from './interfaces';
export declare class Field {
    readonly width: number;
    readonly height: number;
    readonly canvas: HTMLCanvasElement;
    UNIT_SIZE: number;
    BACKGROUND_COLOR: string;
    constructor(width: number, height: number, canvas: HTMLCanvasElement);
    getRandomPosition(): PositionI;
    draw(elements: ElementI[]): void;
    drawElement: (element: ElementI) => void;
    drawBackground(): void;
}
