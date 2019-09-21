import { Particle } from "three-nebula";
import { Behaviour } from "three-nebula/src/behaviour";
import { ColorCanvas } from "./ColorCanvas";
export interface GradientOption {
    offset: number;
    color: string;
}
export interface GradientColorJSON {
    colors: GradientOption[];
    life?: number;
    easing?: string;
    isEnabled?: boolean;
}
export declare class GradientColor extends Behaviour {
    static readonly TYPE: string;
    protected gradientCanvas: ColorCanvas;
    constructor(colors: GradientOption[], life?: number, easing?: Function, isEnabled?: boolean);
    static addSupport(): void;
    reset(colors: GradientOption[], life?: number, easing?: Function): void;
    initCanvas(colors: GradientOption[]): void;
    initialize(particle: Particle): void;
    mutate(particle: Particle, time: any, index: any): void;
    /**
     * Creates a GradientColor behaviour from JSON.
     * @param json
     */
    static fromJSON(json: GradientColorJSON): GradientColor;
}
//# sourceMappingURL=GradientColor.d.ts.map