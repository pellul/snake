import { ElementI } from './interfaces';
export declare class Drawer {
    readonly width: number;
    readonly height: number;
    readonly canvas: HTMLCanvasElement;
    UNIT_SIZE: number;
    BACKGROUND_COLOR: string;
    constructor(width: number, height: number, canvas: HTMLCanvasElement);
    draw(...elements: ElementI[]): void;
    drawElement: (element: ElementI) => void;
    clear(): void;
    drawBackground(): void;
    private getContext;
}
