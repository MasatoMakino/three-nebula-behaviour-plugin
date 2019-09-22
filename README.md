# three-nebula-behaviour-plugin

Custom behaviours for three-nebula.

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

[GitHub repository](https://github.com/MasatoMakino/three-nebula-behaviour-plugin)

## Demo

[Color behaviour from an image](https://masatomakino.github.io/three-nebula-behaviour-plugin/demo/image_color)

[Color behaviour from canvas gradients](https://masatomakino.github.io/three-nebula-behaviour-plugin/demo/gradient_color)

## Getting Started

### Install

```bash
npm install three three-nebula --save-dev
```

and

```bash
npm install https://github.com/MasatoMakino/three-nebula-behaviour-plugin.git --save-dev
```

### Import

three-nebula-behaviour-plugin is composed of ES6 modules and TypeScript d.ts files.

At first, import classes,

```javascript
import { ImageColor } from "../three-nebula-behaviour-plugin";
import * as THREE from "three";
import {
  Emitter,
  Mass,
  Rate,
  Span,
  SpriteRenderer,
  System
} from "three-nebula";
```

and set behaviour to emitter

```javascript
const system = new System();
const emitter = new Emitter();
const renderer = new SpriteRenderer(scene, THREE);

const imageColor = new ImageColor("./img/hue_val.png");

this.emitter
  .setRate(new Rate(new Span(2, 8), 0.1))
  .setInitializers([new Mass(1)])
  .setBehaviours([imageColor])
  .emit();

system.addEmitter(emitter).addRenderer(renderer);
```

## Unimplemented features

### System.fromJson and fromJSONAsync

[System.fromJson()](https://creativelifeform.github.io/three-nebula/api/function/index.html#static-function-fromJSON) is not supported.

#### Why

- Plugin script can not add custom type to [SUPPORTED_JSON_BEHAVIOUR_TYPES](https://creativelifeform.github.io/three-nebula/api/variable/index.html#static-variable-SUPPORTED_JSON_BEHAVIOUR_TYPES).
  It use in [this](https://creativelifeform.github.io/three-nebula/api/file/src/core/fromJSON.js.html#lineNumber62).
- Plugin script can not add custom constructor to [behaviour/index.js](https://github.com/creativelifeform/three-nebula/blob/master/src/behaviour/index.js).
  It use in [this](https://creativelifeform.github.io/three-nebula/api/file/src/core/fromJSON.js.html#lineNumber68).

## API documents

[API documents](https://masatomakino.github.io/three-nebula-behaviour-plugin/api/)

## License

[MIT licensed](LICENSE).
