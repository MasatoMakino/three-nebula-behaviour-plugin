"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradientColor = void 0;
const three_nebula_1 = require("three-nebula");
const ColorCanvas_1 = require("./ColorCanvas");
class GradientColor extends three_nebula_1.Behaviour {
    constructor(colors, life, easing, isEnabled = true) {
        super(life, easing, GradientColor.TYPE, isEnabled);
        this.reset(colors);
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
        ColorCanvas_1.ColorCanvas.updateParticleColor(particle, particle.transform.gradientCanvas, 
        // @ts-ignore
        this.energy);
    }
}
exports.GradientColor = GradientColor;
GradientColor.TYPE = "GradientColor";
