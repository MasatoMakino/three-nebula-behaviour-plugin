import { Behaviour, Particle } from "three-nebula";
import { ColorCanvas } from "./ColorCanvas";
export interface ImageColorCanvas extends ColorCanvas {
    isLoaded: boolean;
}
export declare class ImageColor extends Behaviour {
    static readonly TYPE: string;
    protected colorCanvas: ImageColorCanvas;
    constructor(url: string, life?: number, easing?: Function, isEnabled?: boolean);
    reset(url: string, life?: number, easing?: Function): void;
    initCanvas(url: string): void;
    initialize(particle: Particle): void;
    mutate(particle: Particle, time: any, index: any): void;
}
//# sourceMappingURL=ImageColor.d.ts.map