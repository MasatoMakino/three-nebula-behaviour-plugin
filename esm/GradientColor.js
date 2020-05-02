import Behaviour from "three-nebula/src/behaviour/Behaviour";
import { SUPPORTED_JSON_BEHAVIOUR_TYPES } from "three-nebula/src/core/constants";
import { getEasingByName } from "three-nebula/src/ease";
import { ColorCanvas } from "./ColorCanvas";
export class GradientColor extends Behaviour {
    constructor(colors, life, easing, isEnabled = true) {
        super(life, easing, GradientColor.TYPE, isEnabled);
        this.reset(colors);
    }
    //TODO Plugin can not insert Behaviour Type Constant.
    static addSupport() {
        SUPPORTED_JSON_BEHAVIOUR_TYPES.push(this.TYPE);
    }
    reset(colors, life, easing) {
        this.initCanvas(colors);
        life && super.reset(life, easing);
    }
    initCanvas(colors) {
        this.gradientCanvas = {
            canvas: document.createElement("canvas"),
        };
        const canvas = this.gradientCanvas.canvas;
        canvas.width = 256;
        canvas.height = 1;
        const g = canvas.getContext("2d");
        const gradient = g.createLinearGradient(0, canvas.height, canvas.width, canvas.height);
        colors.forEach((color) => {
            gradient.addColorStop(color.offset, color.color);
        });
        g.fillStyle = gradient;
        g.fillRect(0, 0, canvas.width, canvas.height);
        this.gradientCanvas.buffer = g.getImageData(0, 0, canvas.width, canvas.height).data;
    }
    initialize(particle) {
        particle.transform.gradientCanvas = this.gradientCanvas;
        particle.useColor = true;
        particle.useAlpha = true;
    }
    mutate(particle, time, index) {
        // @ts-ignore
        this.energize(particle, time);
        ColorCanvas.updateParticleColor(particle, particle.transform.gradientCanvas, 
        // @ts-ignore
        this.energy);
    }
    /**
     * Creates a GradientColor behaviour from JSON.
     * @param json
     */
    static fromJSON(json) {
        const { colors, life, easing, isEnabled = true } = json;
        return new GradientColor(colors, life, getEasingByName(easing), isEnabled);
    }
}
GradientColor.TYPE = "GradientColor";
