import { Particle } from "three-nebula";
import { Behaviour } from "three-nebula/src/behaviour";
export interface ImageColorCanvas {
    canvas: HTMLCanvasElement;
    buffer?: Uint8ClampedArray;
    isLoaded: boolean;
}
export declare class ImageColor extends Behaviour {
    static readonly TYPE: string;
    protected colorCanvas: ImageColorCanvas;
    constructor(url: string, life?: number, easing?: Function, isEnabled?: boolean);
    reset(url: string, life?: number, easing?: Function): void;
    initCanvas(url: string): void;
    initialize(particle: Particle): void;
    mutate(particle: any, time: any, index: any): void;
}
//# sourceMappingURL=ImageColor.d.ts.map