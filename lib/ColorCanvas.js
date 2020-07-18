"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorCanvas = void 0;
var ColorCanvas = /** @class */ (function () {
    function ColorCanvas() {
    }
    ColorCanvas.getColor = function (colorCanvas, energy) {
        var canvas = colorCanvas.canvas;
        var buffer = colorCanvas.buffer;
        // @ts-ignore
        var x = Math.floor(canvas.width * (1.0 - energy));
        var index = x * 4;
        return [
            buffer[index] / 255,
            buffer[index + 1] / 255,
            buffer[index + 2] / 255,
            buffer[index + 3] / 255
        ];
    };
    ColorCanvas.updateParticleColor = function (particle, colorCanvas, energy) {
        var val = this.getColor(colorCanvas, energy);
        particle.color.r = val[0];
        particle.color.g = val[1];
        particle.color.b = val[2];
        particle.alpha = val[3];
    };
    return ColorCanvas;
}());
exports.ColorCanvas = ColorCanvas;
