/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/build/faq.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/build/faq.js":
/*!*****************************!*\
  !*** ./src/js/build/faq.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_sticky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/sticky */ \"./src/js/lib/sticky.js\");\n/* harmony import */ var _lib_sticky__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_sticky__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * FAQ\n *\n * import dependencies\n * namespace\n * run dom ready\n * fire functions\n */\n\n/**\n * import dependencies\n */\n\n\n/**\n * namespace\n * @type {Object}\n */\nSDG.FAQ = SDG.FAQ || {};\n\n/**\n * run dom ready\n * @type {Function}\n */\nSDG.FAQ.run = function () {\n\tconst accordion = SDG.accordion({\n\t\tdom: {\n\t\t\tid: 'faqAccordion'\n\t\t},\n\t\tscroll: {\n\t\t\tscope: false\n\t\t},\n\t\tresponsive: true,\n\t\tviews: {\n\t\t\tactive: ['phone', 'tablet'],\n\t\t\tinactive: ['desktop']\n\t\t}\n\t});\n\tconst stickySidebar = SDG.sticky({\n\t\tfixed_header: true,\n\t\toffset_bottom: 99,\n\t\toffset_top: 50\n\t});\n\n\t// accordion\n\taccordion.init();\n\n\t// sticky sidebar\n\tstickySidebar.init();\n};\n\n/**\n * fire functions\n */\nSDG.FAQ.run();\n\n//# sourceURL=webpack:///./src/js/build/faq.js?");

/***/ }),

/***/ "./src/js/lib/sticky.js":
/*!******************************!*\
  !*** ./src/js/lib/sticky.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * sticky\n * @version  0.0.2\n * @param    {Object} opts\n * @return   {Object}\n * @requires [lib/util.js]\n */\nSDG.sticky = function (opts) {\n\tconst config = {\n\t\tcls: {\n\t\t\tbottom: 'is-bottom',\n\t\t\tfixed: 'is-fixed'\n\t\t},\n\t\tid: {\n\t\t\tel: 'sticky',\n\t\t\tpage_content: 'main',\n\t\t\theader: 'hdr'\n\t\t},\n\t\tfixed: false, // boolean\n\t\tfixed_header: false, // boolean\n\t\toffset_bottom: null, // number\n\t\toffset_top: null, // number, should match top positioning of fixed class\n\t\t// when fixed_header = false\n\t\tviews_stick: 'desktop',\n\t\tviews_unstick: 'mobile'\n\t};\n\tconst c = _.extend(config, opts);\n\n\t// state\n\tconst state = {\n\t\tis_active: false,\n\t\tis_bottom: false,\n\t\tis_bound: false,\n\t\tis_fixed: false\n\t};\n\n\t// cached globals\n\tconst $body = document.body;\n\tconst $docEl = document.documentElement;\n\tconst $pageContent = document.getElementById(c.id.page_content);\n\tconst $header = document.getElementById(c.id.header);\n\tconst $el = document.getElementById(c.id.el);\n\n\t// global values\n\tlet bottom;\n\tlet headerHeight;\n\tlet pageContentHeight;\n\tlet pageContentOffset;\n\n\tlet elHeight;\n\tlet elOffset;\n\tlet elWidth;\n\n\tlet isPastBottom;\n\tlet isPastEl;\n\tlet view;\n\tlet windowPos;\n\n\t/**\n  * init\n  */\n\tfunction init() {\n\n\t\t// set active\n\t\tstate.is_active = true;\n\n\t\t// add events\n\t\tif (!state.is_bound) {\n\t\t\taddEvents();\n\t\t\tstate.is_bound = true;\n\t\t}\n\n\t\t// init responsive\n\t\tresponsive();\n\t}\n\n\t/**\n  * stick\n  */\n\tfunction stick() {\n\n\t\t// add sticky\n\t\taddScrollEventSticky();\n\t\tresetStickyStyles();\n\t\tsetValuesResponsive();\n\t\tcheckWindowPosition();\n\t}\n\n\t/**\n  * unstick\n  */\n\tfunction unstick() {\n\n\t\t// remove sticky\n\t\tremoveScrollEventSticky();\n\t\tresetAllStyles();\n\t}\n\n\t/**\n  * responsive\n  */\n\tfunction responsive() {\n\n\t\t// if state is inactive, exit function\n\t\tif (!state.is_active) return;\n\n\t\t// sticky view\n\t\t_.mq({\n\t\t\tview: c.views_stick,\n\t\t\tcallback() {\n\t\t\t\tview = this.view;\n\t\t\t\tstick();\n\t\t\t}\n\t\t});\n\n\t\t// unsticky view\n\t\t_.mq({\n\t\t\tview: c.views_unstick,\n\t\t\tcallback() {\n\t\t\t\tif (view !== this.view) {\n\t\t\t\t\tview = this.view;\n\t\t\t\t\tunstick();\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t}\n\n\t/**\n  * add events\n  */\n\tfunction addEvents() {\n\n\t\t// resize\n\t\t_.windowResize(responsive, 200);\n\t}\n\n\t/**\n  * add scroll event sticky\n  */\n\tfunction addScrollEventSticky() {\n\t\twindow.addEventListener('scroll', checkWindowPosition, false);\n\t}\n\n\t/**\n  * remove scroll event sticky\n  */\n\tfunction removeScrollEventSticky() {\n\t\twindow.removeEventListener('scroll', checkWindowPosition, false);\n\t}\n\n\t/**\n  * set values responsive\n  */\n\tfunction setValuesResponsive() {\n\n\t\t// set values\n\t\telHeight = $el.scrollHeight;\n\t\telWidth = $el.offsetWidth;\n\t\telOffset = getOffsetTop($el);\n\n\t\t// fixed offset\n\t\tif (c.fixed) {\n\n\t\t\telOffset = 0;\n\t\t} else {\n\n\t\t\t// top offset\n\t\t\tif (c.offset_top) elOffset -= c.offset_top;\n\n\t\t\t// header offset\n\t\t\tif (c.fixed_header) {\n\t\t\t\theaderHeight = $header.offsetHeight;\n\t\t\t\tpageContentOffset = getOffsetTop($pageContent) - headerHeight;\n\t\t\t\telOffset -= headerHeight;\n\t\t\t}\n\t\t}\n\t}\n\n\t/**\n  * check window position\n  */\n\tfunction checkWindowPosition(force) {\n\t\tif (typeof force === 'undefined') force = false;\n\n\t\t// set values\n\t\tpageContentHeight = $pageContent.scrollHeight;\n\t\twindowPos = window.pageYOffset || $docEl.scrollTop;\n\t\tbottom = pageContentHeight - elHeight;\n\n\t\t// bottom offsets\n\t\tif (c.offset_bottom) bottom -= c.offset_bottom;\n\t\tif (c.offset_top) bottom -= c.offset_top;\n\t\tif (c.fixed_header && !c.fixed) bottom += pageContentOffset;\n\n\t\t// set booleans\n\t\tisPastEl = windowPos >= elOffset;\n\t\tisPastBottom = windowPos > bottom;\n\n\t\t// check scroll positions\n\t\tif (isPastEl) {\n\t\t\tif (!isPastBottom) {\n\t\t\t\tremoveBottomStyles();\n\t\t\t\taddStickyStyles();\n\t\t\t} else {\n\t\t\t\tremoveStickyStyles(force);\n\t\t\t\taddBottomStyles();\n\t\t\t}\n\t\t} else {\n\t\t\tremoveStickyStyles();\n\t\t}\n\t}\n\n\t/**\n  * add sticky styles\n  */\n\tfunction addStickyStyles() {\n\n\t\t// if already sticky, exit function\n\t\tif (state.is_fixed) return;\n\n\t\t// set sticky state\n\t\tstate.is_fixed = true;\n\n\t\t// add sticky styles\n\t\t_.addClass($el, c.cls.fixed);\n\t\t$el.style.width = `${elWidth}px`;\n\t}\n\n\t/**\n  * remove sticky styles\n  * @param {boolean} force\n  */\n\tfunction removeStickyStyles(force) {\n\n\t\t// if state is already not sticky, exit function\n\t\tif (!state.is_fixed && !force) return;\n\n\t\t// set sticky state to false\n\t\tstate.is_fixed = false;\n\n\t\t// remove sticky styles\n\t\t_.removeClass($el, c.cls.fixed);\n\t\t$el.style.width = 'auto';\n\t}\n\n\t/**\n  * add bottom styles\n  */\n\tfunction addBottomStyles() {\n\n\t\t// if state is already bottom, exit function\n\t\tif (state.is_bottom) return;\n\n\t\t// set state\n\t\tstate.is_bottom = true;\n\n\t\t// add bottom class\n\t\t_.addClass($el, c.cls.bottom);\n\t}\n\n\t/**\n  * remove bottom styles\n  * @param {boolean} force\n  */\n\tfunction removeBottomStyles(force) {\n\n\t\t// if state is already not bottom, exit function\n\t\tif (!state.is_bottom && !force) return;\n\n\t\t// set state\n\t\tstate.is_bottom = false;\n\n\t\t// remove bottom styles\n\t\t_.removeClass($el, c.cls.bottom);\n\t}\n\n\t/**\n  * reset sticky styles\n  */\n\tfunction resetStickyStyles() {\n\t\tremoveStickyStyles(true);\n\t}\n\n\t/**\n  * reset all styles\n  */\n\tfunction resetAllStyles() {\n\t\tremoveStickyStyles(true);\n\t\tremoveBottomStyles(true);\n\t}\n\n\t/**\n  * destroy\n  */\n\tfunction destroy() {\n\t\tstate.is_active = false;\n\t\tunstick();\n\t}\n\n\t/**\n  * get offset top\n  * @param  {Element} el\n  * @return {number}\n  */\n\tfunction getOffsetTop(el) {\n\t\tconst box = el.getBoundingClientRect();\n\t\tconst scrollTop = window.pageYOffset || $docEl.scrollTop || $body.scrollTop;\n\t\tconst clientTop = $docEl.clientTop || $body.clientTop || 0;\n\t\tconst top = box.top + scrollTop - clientTop;\n\n\t\treturn Math.round(top);\n\t}\n\n\t/**\n  * return\n  * @type {Object}\n  */\n\treturn {\n\t\tinit,\n\t\tdestroy,\n\t\tstick,\n\t\tunstick\n\t};\n};\n\n//# sourceURL=webpack:///./src/js/lib/sticky.js?");

/***/ })

/******/ });