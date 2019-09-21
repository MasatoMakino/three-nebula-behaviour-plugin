import { Particle } from "three-nebula";

export class ColorCanvas {
  canvas: HTMLCanvasElement;
  buffer?: Uint8ClampedArray;

  private static getColor(colorCanvas: ColorCanvas, energy: number): number[] {
    const canvas = colorCanvas.canvas;
    const buffer = colorCanvas.buffer;

    // @ts-ignore
    const x = Math.floor(canvas.width * (1.0 - energy));
    const index = x * 4;

    return [
      buffer[index] / 255,
      buffer[index + 1] / 255,
      buffer[index + 2] / 255,
      buffer[index + 3] / 255
    ];
  }

  public static updateParticleColor(
    particle: Particle,
    colorCanvas: ColorCanvas,
    energy: number
  ) {
    const val = this.getColor(colorCanvas, energy);

    particle.color.r = val[0];
    particle.color.g = val[1];
    particle.color.b = val[2];
    particle.alpha = val[3];
  }
}
