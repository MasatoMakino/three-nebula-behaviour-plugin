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
/******/ 		"demoImageColorJSON.js": 0
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
/******/ 	deferredModules.push(["./demoSrc/demoImageColorJSON.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bin/ImageColor.js":
/*!***************************!*\
  !*** ./bin/ImageColor.js ***!
  \***************************/
/*! exports provided: ImageColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageColor\", function() { return ImageColor; });\n/* harmony import */ var three_nebula_src_behaviour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-nebula/src/behaviour */ \"./node_modules/three-nebula/src/behaviour/index.js\");\n/* harmony import */ var three_nebula_src_ease__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three-nebula/src/ease */ \"./node_modules/three-nebula/src/ease/index.js\");\n/* harmony import */ var three_nebula_src_core_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three-nebula/src/core/constants */ \"./node_modules/three-nebula/src/core/constants.js\");\n\n\n\nclass ImageColor extends three_nebula_src_behaviour__WEBPACK_IMPORTED_MODULE_0__[\"Behaviour\"] {\n  constructor(url, life, easing, isEnabled = true) {\n    super(life, easing, ImageColor.TYPE, isEnabled);\n    this.reset(url);\n  } //TODO Plugin can not insert Behaviour Type Constant.\n\n\n  static addSupport() {\n    three_nebula_src_core_constants__WEBPACK_IMPORTED_MODULE_2__[\"SUPPORTED_JSON_BEHAVIOUR_TYPES\"].push(this.TYPE);\n  }\n\n  reset(url, life, easing) {\n    this.initCanvas(url);\n    life && super.reset(life, easing);\n  }\n\n  initCanvas(url) {\n    this.colorCanvas = {\n      canvas: document.createElement(\"canvas\"),\n      isLoaded: false\n    };\n    const canvas = this.colorCanvas.canvas;\n    canvas.width = 256;\n    canvas.height = 1;\n    const g = canvas.getContext(\"2d\");\n    const img = new Image();\n\n    img.onload = () => {\n      this.colorCanvas.isLoaded = true;\n      g.drawImage(img, 0, 0, canvas.width, canvas.height);\n      this.colorCanvas.buffer = g.getImageData(0, 0, canvas.width, canvas.height).data;\n    };\n\n    img.src = url;\n  }\n\n  initialize(particle) {\n    //TODO : PR particle.transform type is Object.\n    particle.transform.colorCanvas = this.colorCanvas;\n    particle.useColor = true;\n    particle.useAlpha = true;\n  }\n\n  mutate(particle, time, index) {\n    //TODO : color.mutate.energize has not index prop.\n    // @ts-ignore\n    this.energize(particle, time);\n\n    if (particle.transform.colorCanvas.isLoaded) {\n      const canvas = particle.transform.colorCanvas.canvas;\n      const buffer = particle.transform.colorCanvas.buffer; // @ts-ignore\n\n      const x = Math.floor(canvas.width * (1.0 - this.energy));\n      const index = x * 4;\n      particle.color.r = buffer[index] / 255;\n      particle.color.g = buffer[index + 1] / 255;\n      particle.color.b = buffer[index + 2] / 255;\n      particle.alpha = buffer[index + 3] / 255;\n    } else {\n      particle.color.r = 0;\n      particle.color.g = 0;\n      particle.color.b = 0;\n      particle.alpha = 0.0;\n    }\n  }\n  /**\n   * Creates a ImageColor behaviour from JSON.\n   * @param json\n   */\n\n\n  static fromJSON(json) {\n    const {\n      url,\n      life,\n      easing,\n      isEnabled = true\n    } = json;\n    return new ImageColor(url, life, Object(three_nebula_src_ease__WEBPACK_IMPORTED_MODULE_1__[\"getEasingByName\"])(easing), isEnabled);\n  }\n\n}\nImageColor.TYPE = \"ImageColor\";\n\n//# sourceURL=webpack:///./bin/ImageColor.js?");

/***/ }),

/***/ "./bin/index.js":
/*!**********************!*\
  !*** ./bin/index.js ***!
  \**********************/
/*! exports provided: ImageColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ImageColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageColor */ \"./bin/ImageColor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ImageColor\", function() { return _ImageColor__WEBPACK_IMPORTED_MODULE_0__[\"ImageColor\"]; });\n\n\n\n//# sourceURL=webpack:///./bin/index.js?");

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

/***/ "./demoSrc/demoImageColorJSON.js":
/*!***************************************!*\
  !*** ./demoSrc/demoImageColorJSON.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Common */ \"./demoSrc/Common.js\");\n/* harmony import */ var _bin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bin */ \"./bin/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three-nebula */ \"./node_modules/three-nebula/build/three-nebula.js\");\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three_nebula__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nclass Study {\n  constructor() {\n    const W = 640;\n    const H = 480;\n    const scene = _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initScene(); // scene.fog = new Fog(0xffffff, 80, 160);\n\n    _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initLight(scene);\n    const camera = _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initCamera(scene, W, H);\n    const renderer = _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initRenderer(W, H, {\n      color: 0x444444\n    });\n    const control = _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initControl(camera, renderer);\n    _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].initHelper(scene);\n    this.initObject(scene);\n    _Common__WEBPACK_IMPORTED_MODULE_0__[\"Common\"].render(control, renderer, scene, camera, () => {\n      if (this.system && this.spriteRenderer) {\n        this.system.update();\n      }\n    });\n  }\n\n  initObject(scene) {\n    _bin__WEBPACK_IMPORTED_MODULE_1__[\"ImageColor\"].addSupport();\n    const json = {\n      preParticles: 500,\n      integrationType: \"euler\",\n      emitters: [{\n        rate: {\n          particlesMin: 5,\n          particlesMax: 7,\n          perSecondMin: 0.1,\n          perSecondMax: 0.2\n        },\n        position: {\n          x: 0,\n          y: 0\n        },\n        initializers: [{\n          type: \"Mass\",\n          properties: {\n            min: 1,\n            max: 1\n          }\n        }, {\n          type: \"Life\",\n          properties: {\n            min: 2,\n            max: 2\n          }\n        }, {\n          type: \"Radius\",\n          properties: {\n            width: 6,\n            height: 8\n          }\n        }, {\n          type: \"RadialVelocity\",\n          properties: {\n            radius: 45,\n            x: 0,\n            y: 1,\n            z: 0,\n            theta: 180\n          }\n        }],\n        behaviours: [// {\n        //   type: \"ImageColor\",\n        //   properties: {\n        //     url: \"./img/hue_val.png\"\n        //   }\n        // },\n        {\n          type: \"Scale\",\n          properties: {\n            scaleA: 1,\n            scaleB: 0.2\n          }\n        }, {\n          type: \"Force\",\n          properties: {\n            fx: 0,\n            fy: 0,\n            fz: 0\n          }\n        }]\n      }]\n    };\n    new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"System\"].fromJSONAsync(json, three__WEBPACK_IMPORTED_MODULE_2__).then(system => {\n      this.system = system;\n      this.spriteRenderer = new three_nebula__WEBPACK_IMPORTED_MODULE_3__[\"SpriteRenderer\"](scene, three__WEBPACK_IMPORTED_MODULE_2__);\n      system.addRenderer(this.spriteRenderer);\n      system.emitters[0].addBehaviour(_bin__WEBPACK_IMPORTED_MODULE_1__[\"ImageColor\"].fromJSON({\n        url: \"./img/hue_val.png\"\n      }));\n    });\n  }\n\n}\n\nwindow.onload = () => {\n  const study = new Study();\n};\n\n//# sourceURL=webpack:///./demoSrc/demoImageColorJSON.js?");

/***/ })

/******/ });