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
      if (this.system && this.spriteRenderer) {
        this.system.update();
      }
    });
  }

  initObject(scene) {
    ImageColor.addSupport();

    const json = {
      preParticles: 500,
      integrationType: "euler",
      emitters: [
        {
          rate: {
            particlesMin: 5,
            particlesMax: 7,
            perSecondMin: 0.1,
            perSecondMax: 0.2
          },
          position: {
            x: 0,
            y: 0
          },
          initializers: [
            {
              type: "Mass",
              properties: {
                min: 1,
                max: 1
              }
            },
            {
              type: "Life",
              properties: {
                min: 2,
                max: 2
              }
            },
            {
              type: "Radius",
              properties: {
                width: 6,
                height: 8
              }
            },
            {
              type: "RadialVelocity",
              properties: {
                radius: 45,
                x: 0,
                y: 1,
                z: 0,
                theta: 180
              }
            }
          ],
          behaviours: [
            // {
            //   type: "ImageColor",
            //   properties: {
            //     url: "./img/hue_val.png"
            //   }
            // },
            {
              type: "Scale",
              properties: {
                scaleA: 1,
                scaleB: 0.2
              }
            },
            {
              type: "Force",
              properties: {
                fx: 0,
                fy: 0,
                fz: 0
              }
            }
          ]
        }
      ]
    };

    new System.fromJSONAsync(json, THREE).then(system => {
      this.system = system;
      this.spriteRenderer = new SpriteRenderer(scene, THREE);
      system.addRenderer(this.spriteRenderer);

      system.emitters[0].addBehaviour(
        ImageColor.fromJSON({
          url: "./img/hue_val.png"
        })
      );
    });
  }
}

window.onload = () => {
  const study = new Study();
};
