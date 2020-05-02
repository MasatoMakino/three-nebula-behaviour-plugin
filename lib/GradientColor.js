"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Behaviour_1 = __importDefault(require("three-nebula/src/behaviour/Behaviour"));
var constants_1 = require("three-nebula/src/core/constants");
var ease_1 = require("three-nebula/src/ease");
var ColorCanvas_1 = require("./ColorCanvas");
var GradientColor = /** @class */ (function (_super) {
    __extends(GradientColor, _super);
    function GradientColor(colors, life, easing, isEnabled) {
        if (isEnabled === void 0) { isEnabled = true; }
        var _this = _super.call(this, life, easing, GradientColor.TYPE, isEnabled) || this;
        _this.reset(colors);
        return _this;
    }
    //TODO Plugin can not insert Behaviour Type Constant.
    GradientColor.addSupport = function () {
        constants_1.SUPPORTED_JSON_BEHAVIOUR_TYPES.push(this.TYPE);
    };
    GradientColor.prototype.reset = function (colors, life, easing) {
        this.initCanvas(colors);
        life && _super.prototype.reset.call(this, life, easing);
    };
    GradientColor.prototype.initCanvas = function (colors) {
        this.gradientCanvas = {
            canvas: document.createElement("canvas"),
        };
        var canvas = this.gradientCanvas.canvas;
        canvas.width = 256;
        canvas.height = 1;
        var g = canvas.getContext("2d");
        var gradient = g.createLinearGradient(0, canvas.height, canvas.width, canvas.height);
        colors.forEach(function (color) {
            gradient.addColorStop(color.offset, color.color);
        });
        g.fillStyle = gradient;
        g.fillRect(0, 0, canvas.width, canvas.height);
        this.gradientCanvas.buffer = g.getImageData(0, 0, canvas.width, canvas.height).data;
    };
    GradientColor.prototype.initialize = function (particle) {
        particle.transform.gradientCanvas = this.gradientCanvas;
        particle.useColor = true;
        particle.useAlpha = true;
    };
    GradientColor.prototype.mutate = function (particle, time, index) {
        // @ts-ignore
        this.energize(particle, time);
        ColorCanvas_1.ColorCanvas.updateParticleColor(particle, particle.transform.gradientCanvas, 
        // @ts-ignore
        this.energy);
    };
    /**
     * Creates a GradientColor behaviour from JSON.
     * @param json
     */
    GradientColor.fromJSON = function (json) {
        var colors = json.colors, life = json.life, easing = json.easing, _a = json.isEnabled, isEnabled = _a === void 0 ? true : _a;
        return new GradientColor(colors, life, ease_1.getEasingByName(easing), isEnabled);
    };
    GradientColor.TYPE = "GradientColor";
    return GradientColor;
}(Behaviour_1.default));
exports.GradientColor = GradientColor;
