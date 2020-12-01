"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageColor = void 0;
var three_nebula_1 = require("three-nebula");
var ColorCanvas_1 = require("./ColorCanvas");
var ImageColor = /** @class */ (function (_super) {
    __extends(ImageColor, _super);
    function ImageColor(url, life, easing, isEnabled) {
        if (isEnabled === void 0) { isEnabled = true; }
        var _this = _super.call(this, life, easing, ImageColor.TYPE, isEnabled) || this;
        _this.reset(url);
        return _this;
    }
    ImageColor.prototype.reset = function (url, life, easing) {
        this.initCanvas(url);
        life && _super.prototype.reset.call(this, life, easing);
    };
    ImageColor.prototype.initCanvas = function (url) {
        var _this = this;
        this.colorCanvas = {
            canvas: document.createElement("canvas"),
            isLoaded: false,
        };
        var canvas = this.colorCanvas.canvas;
        canvas.width = 256;
        canvas.height = 1;
        var g = canvas.getContext("2d");
        var img = new Image();
        img.onload = function () {
            _this.colorCanvas.isLoaded = true;
            g.drawImage(img, 0, 0, canvas.width, canvas.height);
            _this.colorCanvas.buffer = g.getImageData(0, 0, canvas.width, canvas.height).data;
        };
        img.src = url;
    };
    ImageColor.prototype.initialize = function (particle) {
        //TODO : PR particle.transform type is Object.
        particle.transform.colorCanvas = this.colorCanvas;
        particle.useColor = true;
        particle.useAlpha = true;
    };
    ImageColor.prototype.mutate = function (particle, time, index) {
        //TODO : color.mutate.energize has not index prop.
        // @ts-ignore
        this.energize(particle, time);
        if (particle.transform.colorCanvas.isLoaded) {
            ColorCanvas_1.ColorCanvas.updateParticleColor(particle, particle.transform.colorCanvas, 
            // @ts-ignore
            this.energy);
        }
        else {
            particle.color.r = 0;
            particle.color.g = 0;
            particle.color.b = 0;
            particle.alpha = 0.0;
        }
    };
    ImageColor.TYPE = "ImageColor";
    return ImageColor;
}(three_nebula_1.Behaviour));
exports.ImageColor = ImageColor;
