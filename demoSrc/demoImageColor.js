import { Common } from "./Common";
import { ImageColor } from "../bin";
import * as THREE from "three";
import {
  Emitter,
  Life,
  Mass,
  PointZone,
  Position,
  RadialVelocity,
  Radius,
  Rate,
  Span,
  SpriteRenderer,
  System,
  Vector3D
} from "three-nebula";

class Study {
  constructor() {
    const W = 640;
    const H = 480;

    const scene = Common.initScene();
    // scene.fog = new Fog(0xffffff, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, W, H);
    const renderer = Common.initRenderer(W, H, { color: 0x444444 });
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);

    Common.render(control, renderer, scene, camera, () => {
      if (this.system) {
        this.system.update();
      }
    });
  }

  initObject(scene) {
    this.system = new System();
    this.emitter = new Emitter();
    const renderer = new SpriteRenderer(scene, THREE);

    const imageColor = new ImageColor("./img/hue_val.png");
    document.body.appendChild(imageColor.colorCanvas.canvas);

    this.range = new RadialVelocity(45, new Vector3D(0, 1, 0), 180);
    this.radius = new Radius(6, 12);
    this.life = new Life(6);

    this.emitter
      .setRate(new Rate(new Span(1, 4), 0.1))
      .setInitializers([
        new Position(new PointZone(0, 0)),
        new Mass(1),
        this.radius,
        this.life,
        this.range
      ])
      .setBehaviours([imageColor])
      .emit();

    this.system.addEmitter(this.emitter).addRenderer(renderer);
  }
}

window.onload = () => {
  const study = new Study();
};
