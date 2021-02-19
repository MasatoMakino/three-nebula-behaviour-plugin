/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./demoSrc/Common.js":
/*!***************************!*\
  !*** ./demoSrc/Common.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Common\": () => (/* binding */ Common)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nclass Common {\n  static initScene() {\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    return scene;\n  }\n\n  static initLight(scene) {\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(0xffffff, 1.0);\n    scene.add(ambientLight);\n    return ambientLight;\n  }\n\n  static initCamera(scene, W, H, near = 1, far = 400) {\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, W / H, near, far);\n    camera.position.set(0, 0, 100);\n    camera.updateMatrixWorld(false);\n    scene.add(camera);\n    return camera;\n  }\n\n  static initControl(camera, render) {\n    let domElement;\n\n    if (render) {\n      domElement = render.domElement;\n    }\n\n    const control = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, domElement);\n    control.update();\n    return control;\n  }\n\n  static initRenderer(W, H, option) {\n    option = Object.assign({\n      color: 0x000000,\n      id: \"webgl-canvas\",\n      antialias: true\n    }, option);\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n      canvas: document.getElementById(option.id),\n      antialias: option.antialias\n    });\n    renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__.Color(option.color));\n    renderer.setSize(W, H);\n    renderer.setPixelRatio(window.devicePixelRatio);\n    return renderer;\n  }\n\n  static initHelper(scene) {\n    const axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__.AxesHelper(30);\n    scene.add(axesHelper);\n  }\n\n  static render(control, renderer, scene, camera, onBeforeRender) {\n    const rendering = () => {\n      if (onBeforeRender) {\n        onBeforeRender();\n      }\n\n      control.update();\n      renderer.render(scene, camera);\n      requestAnimationFrame(rendering);\n    };\n\n    rendering();\n  }\n\n}\n\n//# sourceURL=webpack://three-nebula-behaviour-plugin/./demoSrc/Common.js?");

/***/ }),

/***/ "./demoSrc/demoImageColor.js":
/*!***********************************!*\
  !*** ./demoSrc/demoImageColor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Common */ \"./demoSrc/Common.js\");\n/* harmony import */ var _esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../esm */ \"./esm/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three-nebula */ \"./node_modules/three-nebula/build/esm/index.js\");\n\n\n\n\n\nclass Study {\n  constructor() {\n    const W = 640;\n    const H = 480;\n    const scene = _Common__WEBPACK_IMPORTED_MODULE_0__.Common.initScene(); // scene.fog = new Fog(0xffffff, 80, 160);\n\n    _Common__WEBPACK_IMPORTED_MODULE_0__.Common.initLight(scene);\n    const camera = _Common__WEBPACK_IMPORTED_MODULE_0__.Common.initCamera(scene, W, H);\n    const renderer = _Common__WEBPACK_IMPORTED_MODULE_0__.Common.initRenderer(W, H, {\n      color: 0x444444\n    });\n    const control = _Common__WEBPACK_IMPORTED_MODULE_0__.Common.initControl(camera, renderer);\n    _Common__WEBPACK_IMPORTED_MODULE_0__.Common.initHelper(scene);\n    this.initObject(scene);\n    _Common__WEBPACK_IMPORTED_MODULE_0__.Common.render(control, renderer, scene, camera, () => {\n      if (this.system) {\n        this.system.update();\n      }\n    });\n  }\n\n  initObject(scene) {\n    this.system = new three_nebula__WEBPACK_IMPORTED_MODULE_3__.System();\n    this.emitter = new three_nebula__WEBPACK_IMPORTED_MODULE_3__.Emitter();\n    const renderer = new three_nebula__WEBPACK_IMPORTED_MODULE_3__.SpriteRenderer(scene, three__WEBPACK_IMPORTED_MODULE_2__);\n    const imageColor = new _esm__WEBPACK_IMPORTED_MODULE_1__.ImageColor(\"./img/hue_val.png\");\n    document.body.appendChild(imageColor.colorCanvas.canvas);\n    this.range = new three_nebula__WEBPACK_IMPORTED_MODULE_3__.RadialVelocity(45, new three_nebula__WEBPACK_IMPORTED_MODULE_3__.Vector3D(0, 1, 0), 180);\n    this.radius = new three_nebula__WEBPACK_IMPORTED_MODULE_3__.Radius(6, 12);\n    this.life = new three_nebula__WEBPACK_IMPORTED_MODULE_3__.Life(6);\n    this.emitter.setRate(new three_nebula__WEBPACK_IMPORTED_MODULE_3__.Rate(new three_nebula__WEBPACK_IMPORTED_MODULE_3__.Span(4, 16), 0.1)).setInitializers([new three_nebula__WEBPACK_IMPORTED_MODULE_3__.Position(new three_nebula__WEBPACK_IMPORTED_MODULE_3__.PointZone(0, 0)), new three_nebula__WEBPACK_IMPORTED_MODULE_3__.Mass(1), this.radius, this.life, this.range]).setBehaviours([imageColor]).emit();\n    this.system.addEmitter(this.emitter).addRenderer(renderer);\n  }\n\n}\n\nwindow.onload = () => {\n  const study = new Study();\n};\n\n//# sourceURL=webpack://three-nebula-behaviour-plugin/./demoSrc/demoImageColor.js?");

/***/ }),

/***/ "./esm/ColorCanvas.js":
/*!****************************!*\
  !*** ./esm/ColorCanvas.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorCanvas\": () => (/* binding */ ColorCanvas)\n/* harmony export */ });\nclass ColorCanvas {\n  static getColor(colorCanvas, energy) {\n    const canvas = colorCanvas.canvas;\n    const buffer = colorCanvas.buffer; // @ts-ignore\n\n    const x = Math.floor(canvas.width * (1.0 - energy));\n    const index = x * 4;\n    return [buffer[index] / 255, buffer[index + 1] / 255, buffer[index + 2] / 255, buffer[index + 3] / 255];\n  }\n\n  static updateParticleColor(particle, colorCanvas, energy) {\n    const val = this.getColor(colorCanvas, energy);\n    particle.color.r = val[0];\n    particle.color.g = val[1];\n    particle.color.b = val[2];\n    particle.alpha = val[3];\n  }\n\n}\n\n//# sourceURL=webpack://three-nebula-behaviour-plugin/./esm/ColorCanvas.js?");

/***/ }),

/***/ "./esm/GradientColor.js":
/*!******************************!*\
  !*** ./esm/GradientColor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GradientColor\": () => (/* binding */ GradientColor)\n/* harmony export */ });\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-nebula */ \"./node_modules/three-nebula/build/esm/index.js\");\n/* harmony import */ var _ColorCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorCanvas */ \"./esm/ColorCanvas.js\");\n\n\nclass GradientColor extends three_nebula__WEBPACK_IMPORTED_MODULE_0__.Behaviour {\n  constructor(colors, life, easing, isEnabled = true) {\n    super(life, easing, GradientColor.TYPE, isEnabled);\n    this.reset(colors);\n  }\n\n  reset(colors, life, easing) {\n    this.initCanvas(colors);\n    life && super.reset(life, easing);\n  }\n\n  initCanvas(colors) {\n    this.gradientCanvas = {\n      canvas: document.createElement(\"canvas\")\n    };\n    const canvas = this.gradientCanvas.canvas;\n    canvas.width = 256;\n    canvas.height = 1;\n    const g = canvas.getContext(\"2d\");\n    const gradient = g.createLinearGradient(0, canvas.height, canvas.width, canvas.height);\n    colors.forEach(color => {\n      gradient.addColorStop(color.offset, color.color);\n    });\n    g.fillStyle = gradient;\n    g.fillRect(0, 0, canvas.width, canvas.height);\n    this.gradientCanvas.buffer = g.getImageData(0, 0, canvas.width, canvas.height).data;\n  }\n\n  initialize(particle) {\n    particle.transform.gradientCanvas = this.gradientCanvas;\n    particle.useColor = true;\n    particle.useAlpha = true;\n  }\n\n  mutate(particle, time, index) {\n    // @ts-ignore\n    this.energize(particle, time);\n    _ColorCanvas__WEBPACK_IMPORTED_MODULE_1__.ColorCanvas.updateParticleColor(particle, particle.transform.gradientCanvas, // @ts-ignore\n    this.energy);\n  }\n\n}\nGradientColor.TYPE = \"GradientColor\";\n\n//# sourceURL=webpack://three-nebula-behaviour-plugin/./esm/GradientColor.js?");

/***/ }),

/***/ "./esm/ImageColor.js":
/*!***************************!*\
  !*** ./esm/ImageColor.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ImageColor\": () => (/* binding */ ImageColor)\n/* harmony export */ });\n/* harmony import */ var three_nebula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-nebula */ \"./node_modules/three-nebula/build/esm/index.js\");\n/* harmony import */ var _ColorCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorCanvas */ \"./esm/ColorCanvas.js\");\n\n\nclass ImageColor extends three_nebula__WEBPACK_IMPORTED_MODULE_0__.Behaviour {\n  constructor(url, life, easing, isEnabled = true) {\n    super(life, easing, ImageColor.TYPE, isEnabled);\n    this.reset(url);\n  }\n\n  reset(url, life, easing) {\n    this.initCanvas(url);\n    life && super.reset(life, easing);\n  }\n\n  initCanvas(url) {\n    this.colorCanvas = {\n      canvas: document.createElement(\"canvas\"),\n      isLoaded: false\n    };\n    const canvas = this.colorCanvas.canvas;\n    canvas.width = 256;\n    canvas.height = 1;\n    const g = canvas.getContext(\"2d\");\n    const img = new Image();\n\n    img.onload = () => {\n      this.colorCanvas.isLoaded = true;\n      g.drawImage(img, 0, 0, canvas.width, canvas.height);\n      this.colorCanvas.buffer = g.getImageData(0, 0, canvas.width, canvas.height).data;\n    };\n\n    img.src = url;\n  }\n\n  initialize(particle) {\n    //TODO : PR particle.transform type is Object.\n    particle.transform.colorCanvas = this.colorCanvas;\n    particle.useColor = true;\n    particle.useAlpha = true;\n  }\n\n  mutate(particle, time, index) {\n    //TODO : color.mutate.energize has not index prop.\n    // @ts-ignore\n    this.energize(particle, time);\n\n    if (particle.transform.colorCanvas.isLoaded) {\n      _ColorCanvas__WEBPACK_IMPORTED_MODULE_1__.ColorCanvas.updateParticleColor(particle, particle.transform.colorCanvas, // @ts-ignore\n      this.energy);\n    } else {\n      particle.color.r = 0;\n      particle.color.g = 0;\n      particle.color.b = 0;\n      particle.alpha = 0.0;\n    }\n  }\n\n}\nImageColor.TYPE = \"ImageColor\";\n\n//# sourceURL=webpack://three-nebula-behaviour-plugin/./esm/ImageColor.js?");

/***/ }),

/***/ "./esm/index.js":
/*!**********************!*\
  !*** ./esm/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ImageColor\": () => (/* reexport safe */ _ImageColor__WEBPACK_IMPORTED_MODULE_0__.ImageColor),\n/* harmony export */   \"GradientColor\": () => (/* reexport safe */ _GradientColor__WEBPACK_IMPORTED_MODULE_1__.GradientColor),\n/* harmony export */   \"ColorCanvas\": () => (/* reexport safe */ _ColorCanvas__WEBPACK_IMPORTED_MODULE_2__.ColorCanvas)\n/* harmony export */ });\n/* harmony import */ var _ImageColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageColor */ \"./esm/ImageColor.js\");\n/* harmony import */ var _GradientColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradientColor */ \"./esm/GradientColor.js\");\n/* harmony import */ var _ColorCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorCanvas */ \"./esm/ColorCanvas.js\");\n\n\n\n\n//# sourceURL=webpack://three-nebula-behaviour-plugin/./esm/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demoImageColor": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./demoSrc/demoImageColor.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthree_nebula_behaviour_plugin"] = self["webpackChunkthree_nebula_behaviour_plugin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;