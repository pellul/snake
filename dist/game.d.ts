export declare class Game {
    private readonly drawer;
    private readonly controller;
    private snake;
    private bait;
    private gameIsOver;
    private difficulty;
    constructor(width: number, height: number, canvas: HTMLCanvasElement);
    private handleInput;
    private update;
    private gameFinished;
    private handleBoundaries;
    private handleBaits;
    private generateBait;
    private getRandomPosition;
    private handleSuicide;
    private render;
    init: () => void;
}
