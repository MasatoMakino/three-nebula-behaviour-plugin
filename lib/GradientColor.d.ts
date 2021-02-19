import { Behaviour, Particle } from "three-nebula";
import { ColorCanvas } from "./ColorCanvas";
export interface GradientOption {
    offset: number;
    color: string;
}
export declare class GradientColor extends Behaviour {
    static readonly TYPE: string;
    protected gradientCanvas: ColorCanvas;
    constructor(colors: GradientOption[], life?: number, easing?: Function, isEnabled?: boolean);
    reset(colors: GradientOption[], life?: number, easing?: Function): void;
    initCanvas(colors: GradientOption[]): void;
    initialize(particle: Particle): void;
    mutate(particle: Particle, time: any, index: any): void;
}
//# sourceMappingURL=GradientColor.d.ts.map