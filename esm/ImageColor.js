import {Behaviour} from "three-nebula";
import {ColorCanvas} from "./ColorCanvas";

export class ImageColor extends Behaviour {
    constructor(url, life, easing, isEnabled = true) {
        super(life, easing, ImageColor.TYPE, isEnabled);
        this.reset(url);
    }
    reset(url, life, easing) {
        this.initCanvas(url);
        life && super.reset(life, easing);
    }
    initCanvas(url) {
        this.colorCanvas = {
            canvas: document.createElement("canvas"),
            isLoaded: false,
        };
        const canvas = this.colorCanvas.canvas;
        canvas.width = 256;
        canvas.height = 1;
        const g = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
            this.colorCanvas.isLoaded = true;
            g.drawImage(img, 0, 0, canvas.width, canvas.height);
            this.colorCanvas.buffer = g.getImageData(0, 0, canvas.width, canvas.height).data;
        };
        img.src = url;
    }
    initialize(particle) {
        //TODO : PR particle.transform type is Object.
        particle.transform.colorCanvas = this.colorCanvas;
        particle.useColor = true;
        particle.useAlpha = true;
    }
    mutate(particle, time, index) {
        //TODO : color.mutate.energize has not index prop.
        // @ts-ignore
        this.energize(particle, time);
        if (particle.transform.colorCanvas.isLoaded) {
            ColorCanvas.updateParticleColor(particle, particle.transform.colorCanvas, 
            // @ts-ignore
            this.energy);
        }
        else {
            particle.color.r = 0;
            particle.color.g = 0;
            particle.color.b = 0;
            particle.alpha = 0.0;
        }
    }
}
ImageColor.TYPE = "ImageColor";
