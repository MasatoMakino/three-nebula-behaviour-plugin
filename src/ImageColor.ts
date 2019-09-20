import { Particle } from "three-nebula";
import { Behaviour } from "three-nebula/src/behaviour";

export interface ImageColorCanvas {
  canvas: HTMLCanvasElement;
  buffer?: Uint8ClampedArray;
  isLoaded: boolean;
}

export class ImageColor extends Behaviour {
  public static readonly TYPE: string = "ImageColor";

  protected colorCanvas: ImageColorCanvas;

  constructor(
    url: string,
    life?: number,
    easing?: Function,
    isEnabled: boolean = true
  ) {
    super(life, easing, ImageColor.TYPE, isEnabled);

    //TODO add type list;

    this.reset(url);
  }

  reset(url: string, life?: number, easing?: Function) {
    this.initCanvas(url);
    life && super.reset(life, easing);
  }

  initCanvas(url: string): void {
    this.colorCanvas = {
      canvas: document.createElement("canvas"),
      isLoaded: false
    };

    const canvas = this.colorCanvas.canvas;
    canvas.width = 256;
    canvas.height = 1;
    const g = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      this.colorCanvas.isLoaded = true;
      g.drawImage(img, 0, 0, canvas.width, canvas.height);
      this.colorCanvas.buffer = g.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;
    };
    img.src = url;
  }

  initialize(particle: Particle) {
    //TODO : PR particle.transform type is Object.
    particle.transform.colorCanvas = this.colorCanvas;
    particle.useColor = true;
    particle.useAlpha = true;
  }

  mutate(particle, time, index) {
    //TODO : color.mutate.energize has not index prop.

    // @ts-ignore
    this.energize(particle, time, index);

    if (particle.transform.colorCanvas.isLoaded) {
      const canvas = particle.transform.colorCanvas.canvas;
      const buffer = particle.transform.colorCanvas.buffer;

      // @ts-ignore
      const x = Math.floor(canvas.width * (1.0 - this.energy));
      const index = x * 4;

      particle.color.r = buffer[index] / 255;
      particle.color.g = buffer[index + 1] / 255;
      particle.color.b = buffer[index + 2] / 255;
      particle.alpha = buffer[index + 3] / 255;
    } else {
      particle.color.r = 0;
      particle.color.g = 0;
      particle.color.b = 0;
      particle.alpha = 0.0;
    }
  }
}
