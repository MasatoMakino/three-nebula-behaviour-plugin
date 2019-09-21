/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"demoGradientColor.js": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./demoSrc/demoGradientColor.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bin/ColorCanvas.js":
/*!****************************!*\
  !*** ./bin/ColorCanvas.js ***!
  \****************************/
/*! exports provided: ColorCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColorCanvas\", function() { return ColorCanvas; });\nclass ColorCanvas {\n  static getColor(colorCanvas, energy) {\n    const canvas = colorCanvas.canvas;\n    const buffer = colorCanvas.buffer; // @ts-ignore\n\n    const x = Math.floor(canvas.width * (1.0 - energy));\n    const index = x * 4;\n    return [buffer[index] / 255, buffer[index + 1] / 255, buffer[index + 2] / 255, buffer[index + 3] / 255];\n  }\n\n  static updateParticleColor(particle, colorCanvas, energy) {\n    const val = this.getColor(colorCanvas, energy);\n    particle.color.r = val[0];\n    particle.color.g = val[1];\n    particle.color.b = val[2];\n    particle.alpha = val[3];\n  }\n\n}\n\n//# sourceURL=webpack:///./bin/ColorCanvas.js?");

/***/ }),

/***/ "./bin/GradientColor.js":
/*!******************************!*\
  !*** ./bin/GradientColor.js ***!
  \******************************/
/*! exports provided: GradientColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GradientColor\", function() { return GradientColor; });\n/* harmony import */ var three_nebula_src_behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-nebula/src/behaviour */ \"./node_modules/three-nebula/src/behaviour/index.js\");\n/* harmony import */ var three_nebula_src_ease__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-nebula/src/ease */ \"./node_modules/three-nebula/src/ease/index.js\");\n/* harmony import */ var three_nebula_src_core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three-nebula/src/core/constants */ \"./node_modules/three-nebula/src/core/constants.js\");\n/* harmony import */ var _ColorCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorCanvas */ \"./bin/ColorCanvas.js\");\n\n\n\n\nclass GradientColor extends three_nebula_src_behaviour__WEBPACK_IMPORTED_MODULE_0__[\"Behaviour\"] {\n  constructor(colors, life, easing, isEnabled = true) {\n    super(life, easing, GradientColor.TYPE, isEnabled);\n    this.reset(colors);\n  } //TODO Plugin can not insert Behaviour Type Constant.\n\n\n  static addSupport() {\n    three_nebula_src_core_constants__WEBPACK_IMPORTED_MODULE_2__[\"SUPPORTED_JSON_BEHAVIOUR_TYPES\"].push(this.TYPE);\n  }\n\n  reset(colors, life, easing) {\n    this.initCanvas(colors);\n    life && super.reset(life, easing);\n  }\n\n  initCanvas(colors) {\n    this.gradientCanvas = {\n      canvas: document.createElement(\"canvas\")\n    };\n    const canvas = this.gradientCanvas.canvas;\n    canvas.width = 256;\n    canvas.height = 1;\n    const g = canvas.getContext(\"2d\");\n    const gradient = g.createLinearGradient(0, canvas.height, canvas.width, canvas.height);\n    colors.forEach(color => {\n      gradient.addColorStop(color.offset, color.color);\n    });\n    g.fillStyle = gradient;\n    g.fillRect(0, 0, canvas.width, canvas.height);\n    this.gradientCanvas.buffer = g.getImageData(0, 0, canvas.width, canvas.height).data;\n  }\n\n  initialize(particle) {\n    particle.transform.gradientCanvas = this.gradientCanvas;\n    particle.useColor = true;\n    particle.useAlpha = true;\n  }\n\n  mutate(particle, time, index) {\n    // @ts-ignore\n    this.energize(particle, time);\n    _ColorCanvas__WEBPACK_IMPORTED_MODULE_3__[\"ColorCanvas\"].updateParticleColor(particle, particle.transform.gradientCanvas, // @ts-ignore\n    this.energy);\n  }\n  /**\n   * Creates a GradientColor behaviour from JSON.\n   * @param json\n   */\n\n\n  static fromJSON(json) {\n    const {\n      colors,\n      life,\n      easing,\n      isEnabled = true\n    } = json;\n    return new GradientColor(colors, life, Object(three_nebula_src_ease__WEBPACK_IMPORTED_MODULE_1__[\"getEasingByName\"])(easing), isEnabled);\n  }\n\n}\nGradientColor.TYPE = \"GradientColor\";\n\n//# sourceURL=webpack:///./bin/GradientColor.js?");

/***/ }),

/***/ "./bin/ImageColor.js":
/*!***************************!*\
  !*** ./bin/ImageColor.js ***!
  \***************************/
/*! exports provided: ImageColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageColor\", function() { return ImageColor; });\n/* harmony import */ var three_nebula_src_behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-nebula/src/behaviour */ \"./node_modules/three-nebula/src/behaviour/index.js\");\n/* harmony import */ var three_nebula_src_ease__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-nebula/src/ease */ \"./node_modules/three-nebula/src/ease/index.js\");\n/* harmony import */ var three_nebula_src_core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three-nebula/src/core/constants */ \"./node_modules/three-nebula/src/core/constants.js\");\n/* harmony import */ var _ColorCanvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorCanvas */ \"./bin/ColorCanvas.js\");\n\n\n\n\nclass ImageColor extends three_nebula_src_behaviour__WEBPACK_IMPORTED_MODULE_0__[\"Behaviour\"] {\n  constructor(url, life, easing, isEnabled = true) {\n    super(life, easing, ImageColor.TYPE, isEnabled);\n    this.reset(url);\n  } //TODO Plugin can not insert Behaviour Type Constant.\n\n\n  static addSupport() {\n    three_nebula_src_core_constants__WEBPACK_IMPORTED_MODULE_2__[\"SUPPORTED_JSON_BEHAVIOUR_TYPES\"].push(this.TYPE);\n  }\n\n  reset(url, life, easing) {\n    this.initCanvas(url);\n    life && super.reset(life, easing);\n  }\n\n  initCanvas(url) {\n    this.colorCanvas = {\n      canvas: document.createElement(\"canvas\"),\n      isLoaded: false\n    };\n    const canvas = this.colorCanvas.canvas;\n    canvas.width = 256;\n    canvas.height = 1;\n    const g = canvas.getContext(\"2d\");\n    const img = new Image();\n\n    img.onload = () => {\n      this.colorCanvas.isLoaded = true;\n      g.drawImage(img, 0, 0, canvas.width, canvas.height);\n      this.colorCanvas.buffer = g.getImageData(0, 0, canvas.width, canvas.height).data;\n    };\n\n    img.src = url;\n  }\n\n  initialize(particle) {\n    //TODO : PR particle.transform type is Object.\n    particle.transform.colorCanvas = this.colorCanvas;\n    particle.useColor = true;\n    particle.useAlpha = true;\n  }\n\n  mutate(particle, time, index) {\n    //TODO : color.mutate.energize has not index prop.\n    // @ts-ignore\n    this.energize(particle, time);\n\n    if (particle.transform.colorCanvas.isLoaded) {\n      _ColorCanvas__WEBPACK_IMPORTED_MODULE_3__[\"ColorCanvas\"].updateParticleColor(particle, particle.transform.colorCanvas, // @ts-ignore\n      this.energy);\n    } else {\n      particle.color.r = 0;\n      particle.color.g = 0;\n      particle.color.b = 0;\n      particle.alpha = 0.0;\n    }\n  }\n  /**\n   * Creates a ImageColor behaviour from JSON.\n   * @param json\n   */\n\n\n  static fromJSON(json) {\n    const {\n      url,\n      life,\n      easing,\n      isEnabled = true\n    } = json;\n    return new ImageColor(url, life, Object(three_nebula_src_ease__WEBPACK_IMPORTED_MODULE_1__[\"getEasingByName\"])(easing), isEnabled);\n  }\n\n}\nImageColor.TYPE = \"ImageColor\";\n\n//# sourceURL=webpack:///./bin/ImageColor.js?");

/***/ }),

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/*! exports provided: ImageColor, GradientColor, ColorCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ImageColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageColor */ \"./bin/ImageColor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ImageColor\", function() { return _ImageColor__WEBPACK_IMPORTED_MODULE_0__[\"ImageColor\"]; });\n\n/* harmony import */ var _GradientColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradientColor */ \"./bin/GradientColor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GradientColor\", function() { return _GradientColor__WEBPACK_IMPORTED_MODULE_1__[\"GradientColor\"]; });\n\n/* harmony import */ var _ColorCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorCanvas */ \"./bin/ColorCanvas.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ColorCanvas\", function() { return _ColorCanvas__WEBPACK_IMPORTED_MODULE_2__[\"ColorCanvas\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./bin/index.js?");

/***/ }),

/***/ "./demoSrc/Common.js":
/*!***************************!*\
  !*** ./demoSrc/Common.js ***!
  \***************************/
/*! exports provided: Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Common\", function() { return Common; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nclass Common {\n  static initScene() {\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n    return scene;\n  }\n\n  static initLight(scene) {\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](0xffffff, 1.0);\n    scene.add(ambientLight);\n    return ambientLight;\n  }\n\n  static initCamera(scene, W, H, near = 1, far = 400) {\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"](45, W / H, near, far);\n    camera.position.set(0, 0, 100);\n    camera.updateMatrixWorld(false);\n    scene.add(camera);\n    return camera;\n  }\n\n  static initControl(camera, render) {\n    let domElement;\n\n    if (render) {\n      domElement = render.domElement;\n    }\n\n    const control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__[\"OrbitControls\"](camera, domElement);\n    control.update();\n    return control;\n  }\n\n  static initRenderer(W, H, option) {\n    option = Object.assign({\n      color: 0x000000,\n      id: \"webgl-canvas\",\n      antialias: true\n    }, option);\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n      canvas: document.getElementById(option.id),\n      antialias: option.antialias\n    });\n    renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](option.color));\n    renderer.setSize(W, H);\n    renderer.setPixelRatio(window.devicePixelRatio);\n    return renderer;\n  }\n\n  static initHelper(scene) {\n    const axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__[\"AxesHelper\"](30);\n    scene.add(axesHelper);\n  }\n\n  static render(control, renderer, scene, camera, onBeforeRender) {\n    const rendering = () => {\n      if (onBeforeRender) {\n        onBeforeRender();\n      }\n\n      control.update();\n      renderer.render(scene, camera);\n      requestAnimationFrame(rendering);\n    };\n\n    rendering();\n  }\n\n}\n\n//# sourceURL=webpack:///./demoSrc/Common.js?");

/***/ }),

/***/ "./demoSrc/demoGradientColor.js":
/*!**************************************!*\
  !*** ./demoSrc/demoGradientColor.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Common */ \"./demoSrc/Common.js\");\n/* harmony import */ var _bin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bin */ \"./bin/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three-nebula */ \"./node_modules/three-nebula/build/three-nebula.js\");\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three_nebula__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nclass Study {\n  constructor() {\n    const W = 640;\n    const H = 480;\n    const scene = _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initScene(); // scene.fog = new Fog(0xffffff, 80, 160);\n\n    _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initLight(scene);\n    const camera = _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initCamera(scene, W, H);\n    const renderer = _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initRenderer(W, H, {\n      color: 0x444444\n    });\n    const control = _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initControl(camera, renderer);\n    _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initHelper(scene);\n    this.initObject(scene);\n    _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].render(control, renderer, scene, camera, () => {\n      if (this.system) {\n        this.system.update();\n      }\n    });\n  }\n\n  initObject(scene) {\n    this.system = new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"System\"]();\n    this.emitter = new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"Emitter\"]();\n    const renderer = new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"SpriteRenderer\"](scene, three__WEBPACK_IMPORTED_MODULE_2__);\n    const gradientColor = new _bin__WEBPACK_IMPORTED_MODULE_1__[\"GradientColor\"]([{\n      offset: 0.0,\n      color: \"rgba(255, 0, 0, 0.0)\"\n    }, {\n      offset: 0.25,\n      color: \"rgba(255, 255, 0, 1.0)\"\n    }, {\n      offset: 0.5,\n      color: \"rgba(0, 255, 0, 0.0)\"\n    }, {\n      offset: 0.75,\n      color: \"rgba(0, 0, 255, 1.0)\"\n    }, {\n      offset: 1.0,\n      color: \"rgba(255, 0, 255, 0.0)\"\n    }]);\n    document.body.appendChild(gradientColor.gradientCanvas.canvas);\n    this.range = new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"RadialVelocity\"](45, new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"Vector3D\"](0, 1, 0), 180);\n    this.radius = new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"Radius\"](6, 12);\n    this.life = new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"Life\"](6);\n    this.emitter.setRate(new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"Rate\"](new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"Span\"](4, 16), 0.1)).setInitializers([new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"Position\"](new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"PointZone\"](0, 0)), new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"Mass\"](1), this.radius, this.life, this.range]).setBehaviours([gradientColor]).emit();\n    this.system.addEmitter(this.emitter).addRenderer(renderer);\n  }\n\n}\n\nwindow.onload = () => {\n  const study = new Study();\n};\n\n//# sourceURL=webpack:///./demoSrc/demoGradientColor.js?");

/***/ })

/******/ });