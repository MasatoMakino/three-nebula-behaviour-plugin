import { Particle } from "three-nebula";
import { Behaviour } from "three-nebula/src/behaviour";
import { ColorCanvas } from "./ColorCanvas";
export interface ImageColorCanvas extends ColorCanvas {
    isLoaded: boolean;
}
export interface ImageColorJSON {
    url: string;
    life?: number;
    easing?: string;
    isEnabled?: boolean;
}
export declare class ImageColor extends Behaviour {
    static readonly TYPE: string;
    protected colorCanvas: ImageColorCanvas;
    constructor(url: string, life?: number, easing?: Function, isEnabled?: boolean);
    static addSupport(): void;
    reset(url: string, life?: number, easing?: Function): void;
    initCanvas(url: string): void;
    initialize(particle: Particle): void;
    mutate(particle: Particle, time: any, index: any): void;
    /**
     * Creates a ImageColor behaviour from JSON.
     * @param json
     */
    static fromJSON(json: ImageColorJSON): ImageColor;
}
//# sourceMappingURL=ImageColor.d.ts.map