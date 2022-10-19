module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/404.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error404; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\moi\\Desktop\\doctolive\\doctolive_code\\medecin-doctolive\\pages\\404.js";

function Error404() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      marginTop: "6rem",
      position: "relative"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "background-404",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ground-404"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 2
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-404",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "left-section-404",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "inner-content-404",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: "heading-404",
            children: "404"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 4
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "subheading-404",
            children: "Il semble que la page que vous recherchiez ne soit plus ici."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 4
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 3
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 2
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "right-section-404",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
          className: "svgimg-404",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "51.5 -15.288 385 505.565",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
            className: "bench-legs-404",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M202.778,391.666h11.111v98.611h-11.111V391.666z M370.833,390.277h11.111v100h-11.111V390.277z M183.333,456.944h11.111\r v33.333h-11.111V456.944z M393.056,456.944h11.111v33.333h-11.111V456.944z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
            className: "top-bench-404",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M396.527,397.917c0,1.534-1.243,2.777-2.777,2.777H190.972c-1.534,0-2.778-1.243-2.778-2.777v-8.333\r c0-1.535,1.244-2.778,2.778-2.778H393.75c1.534,0,2.777,1.243,2.777,2.778V397.917z M400.694,414.583\r c0,1.534-1.243,2.778-2.777,2.778H188.194c-1.534,0-2.778-1.244-2.778-2.778v-8.333c0-1.534,1.244-2.777,2.778-2.777h209.723\r c1.534,0,2.777,1.243,2.777,2.777V414.583z M403.473,431.25c0,1.534-1.244,2.777-2.778,2.777H184.028\r c-1.534,0-2.778-1.243-2.778-2.777v-8.333c0-1.534,1.244-2.778,2.778-2.778h216.667c1.534,0,2.778,1.244,2.778,2.778V431.25z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
            className: "bottom-bench-404",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M417.361,459.027c0,0.769-1.244,1.39-2.778,1.39H170.139c-1.533,0-2.777-0.621-2.777-1.39v-4.86\r c0-0.769,1.244-0.694,2.777-0.694h244.444c1.534,0,2.778-0.074,2.778,0.694V459.027z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M185.417,443.75H400c0,0,18.143,9.721,17.361,10.417l-250-0.696C167.303,451.65,185.417,443.75,185.417,443.75z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
            id: "lamp",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              className: "lamp-details-404",
              d: "M125.694,421.997c0,1.257-0.73,3.697-1.633,3.697H113.44c-0.903,0-1.633-2.44-1.633-3.697V84.917\r c0-1.257,0.73-2.278,1.633-2.278h10.621c0.903,0,1.633,1.02,1.633,2.278V421.997z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              className: "lamp-accent-404",
              d: "M128.472,93.75c0,1.534-1.244,2.778-2.778,2.778h-13.889c-1.534,0-2.778-1.244-2.778-2.778V79.861\r c0-1.534,1.244-2.778,2.778-2.778h13.889c1.534,0,2.778,1.244,2.778,2.778V93.75z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
              className: "lamp-light-404",
              cx: "119.676",
              cy: "44.22",
              r: "40.51"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              className: "lamp-details-404",
              d: "M149.306,71.528c0,3.242-13.37,13.889-29.861,13.889S89.583,75.232,89.583,71.528c0-4.166,13.369-13.889,29.861-13.889\r S149.306,67.362,149.306,71.528z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("radialGradient", {
              className: "light-gradient-404",
              id: "SVGID_1_",
              cx: "119.676",
              cy: "44.22",
              r: "65",
              gradientUnits: "userSpaceOnUse",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
                offset: "0%",
                style: {
                  stopColor: "#FFFFFF",
                  stopCpacity: 1
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
                offset: "50%",
                style: {
                  stopColor: "#EDEDED",
                  stopOpacity: 0.5
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("animate", {
                  attributeName: "stop-opacity",
                  values: "0.0; 0.5; 0.0",
                  dur: "5000ms",
                  repeatCount: "indefinite"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
                offset: "100%",
                style: {
                  stopColor: '#EDEDED',
                  stopOpacity: 0
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
              className: "lamp-light__glow-404",
              fill: "url(#SVGID_1_)",
              cx: "119.676",
              cy: "44.22",
              r: "65"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 11
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              className: "lamp-bottom-404",
              d: "M135.417,487.781c0,1.378-1.244,2.496-2.778,2.496H106.25c-1.534,0-2.778-1.118-2.778-2.496v-74.869\r c0-1.378,1.244-2.495,2.778-2.495h26.389c1.534,0,2.778,1.117,2.778,2.495V487.781z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 3
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 2
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 1
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvNDA0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRXJyb3I0MDQiLCJtYXJnaW5Ub3AiLCJwb3NpdGlvbiIsInN0b3BDb2xvciIsInN0b3BDcGFjaXR5Iiwic3RvcE9wYWNpdHkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFDL0Isc0JBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsZUFBUyxFQUFFLE1BQVo7QUFBb0JDLGNBQVEsRUFBRTtBQUE5QixLQUFaO0FB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TSxFQUFDLE1BQWQ7QUFBcUIscUJBQUssRUFBRTtBQUFDRiwyQkFBUyxFQUFDLFNBQVg7QUFBc0JFLDZCQUFXLEVBQUU7QUFBbkM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVkYsZUFpQkU7QUFBUSx1QkFBUyxFQUFDLHNCQUFsQjtBQUF5QyxrQkFBSSxFQUFDLGdCQUE5QztBQUErRCxnQkFBRSxFQUFDLFNBQWxFO0FBQTRFLGdCQUFFLEVBQUMsT0FBL0U7QUFBdUYsZUFBQyxFQUFDO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBakJGLGVBa0JFO0FBQU0sdUJBQVMsRUFBQyxpQkFBaEI7QUFBa0MsZUFBQyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFsQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeURILEM7Ozs7Ozs7Ozs7O0FDNURELGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzLzQwNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvNDA0LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3I0MDQoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiNnJlbVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC00MDRcIj5cclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImdyb3VuZC00MDRcIj48L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLTQwNFwiPlxyXG5cdDxkaXYgY2xhc3NOYW1lPVwibGVmdC1zZWN0aW9uLTQwNFwiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJpbm5lci1jb250ZW50LTQwNFwiPlxyXG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaGVhZGluZy00MDRcIj40MDQ8L2gxPlxyXG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJzdWJoZWFkaW5nLTQwNFwiPklsIHNlbWJsZSBxdWUgbGEgcGFnZSBxdWUgdm91cyByZWNoZXJjaGlleiBuZSBzb2l0IHBsdXMgaWNpLjwvcD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtc2VjdGlvbi00MDRcIj5cclxuXHRcdDxzdmcgY2xhc3NOYW1lPVwic3ZnaW1nLTQwNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiNTEuNSAtMTUuMjg4IDM4NSA1MDUuNTY1XCI+XHJcbiAgICAgICAgPGcgY2xhc3NOYW1lPVwiYmVuY2gtbGVncy00MDRcIj5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMjAyLjc3OCwzOTEuNjY2aDExLjExMXY5OC42MTFoLTExLjExMVYzOTEuNjY2eiBNMzcwLjgzMywzOTAuMjc3aDExLjExMXYxMDBoLTExLjExMVYzOTAuMjc3eiBNMTgzLjMzMyw0NTYuOTQ0aDExLjExMVxyXG4gICAgICAgICAgdjMzLjMzM2gtMTEuMTExVjQ1Ni45NDR6IE0zOTMuMDU2LDQ1Ni45NDRoMTEuMTExdjMzLjMzM2gtMTEuMTExVjQ1Ni45NDR6XCIgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPGcgY2xhc3NOYW1lPVwidG9wLWJlbmNoLTQwNFwiPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0zOTYuNTI3LDM5Ny45MTdjMCwxLjUzNC0xLjI0MywyLjc3Ny0yLjc3NywyLjc3N0gxOTAuOTcyYy0xLjUzNCwwLTIuNzc4LTEuMjQzLTIuNzc4LTIuNzc3di04LjMzM1xyXG4gICAgICAgICAgYzAtMS41MzUsMS4yNDQtMi43NzgsMi43NzgtMi43NzhIMzkzLjc1YzEuNTM0LDAsMi43NzcsMS4yNDMsMi43NzcsMi43NzhWMzk3LjkxN3ogTTQwMC42OTQsNDE0LjU4M1xyXG4gICAgICAgICAgYzAsMS41MzQtMS4yNDMsMi43NzgtMi43NzcsMi43NzhIMTg4LjE5NGMtMS41MzQsMC0yLjc3OC0xLjI0NC0yLjc3OC0yLjc3OHYtOC4zMzNjMC0xLjUzNCwxLjI0NC0yLjc3NywyLjc3OC0yLjc3N2gyMDkuNzIzXHJcbiAgICAgICAgICBjMS41MzQsMCwyLjc3NywxLjI0MywyLjc3NywyLjc3N1Y0MTQuNTgzeiBNNDAzLjQ3Myw0MzEuMjVjMCwxLjUzNC0xLjI0NCwyLjc3Ny0yLjc3OCwyLjc3N0gxODQuMDI4XHJcbiAgICAgICAgICBjLTEuNTM0LDAtMi43NzgtMS4yNDMtMi43NzgtMi43Nzd2LTguMzMzYzAtMS41MzQsMS4yNDQtMi43NzgsMi43NzgtMi43NzhoMjE2LjY2N2MxLjUzNCwwLDIuNzc4LDEuMjQ0LDIuNzc4LDIuNzc4VjQzMS4yNXpcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPGcgY2xhc3NOYW1lPVwiYm90dG9tLWJlbmNoLTQwNFwiPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk00MTcuMzYxLDQ1OS4wMjdjMCwwLjc2OS0xLjI0NCwxLjM5LTIuNzc4LDEuMzlIMTcwLjEzOWMtMS41MzMsMC0yLjc3Ny0wLjYyMS0yLjc3Ny0xLjM5di00Ljg2XHJcbiAgICAgICAgICBjMC0wLjc2OSwxLjI0NC0wLjY5NCwyLjc3Ny0wLjY5NGgyNDQuNDQ0YzEuNTM0LDAsMi43NzgtMC4wNzQsMi43NzgsMC42OTRWNDU5LjAyN3pcIiAvPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0xODUuNDE3LDQ0My43NUg0MDBjMCwwLDE4LjE0Myw5LjcyMSwxNy4zNjEsMTAuNDE3bC0yNTAtMC42OTZDMTY3LjMwMyw0NTEuNjUsMTg1LjQxNyw0NDMuNzUsMTg1LjQxNyw0NDMuNzV6XCIgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgICAgPGcgaWQ9XCJsYW1wXCI+XHJcbiAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJsYW1wLWRldGFpbHMtNDA0XCIgZD1cIk0xMjUuNjk0LDQyMS45OTdjMCwxLjI1Ny0wLjczLDMuNjk3LTEuNjMzLDMuNjk3SDExMy40NGMtMC45MDMsMC0xLjYzMy0yLjQ0LTEuNjMzLTMuNjk3Vjg0LjkxN1xyXG4gICAgICAgICAgYzAtMS4yNTcsMC43My0yLjI3OCwxLjYzMy0yLjI3OGgxMC42MjFjMC45MDMsMCwxLjYzMywxLjAyLDEuNjMzLDIuMjc4VjQyMS45OTd6XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJsYW1wLWFjY2VudC00MDRcIiBkPVwiTTEyOC40NzIsOTMuNzVjMCwxLjUzNC0xLjI0NCwyLjc3OC0yLjc3OCwyLjc3OGgtMTMuODg5Yy0xLjUzNCwwLTIuNzc4LTEuMjQ0LTIuNzc4LTIuNzc4Vjc5Ljg2MVxyXG4gICAgICAgICAgYzAtMS41MzQsMS4yNDQtMi43NzgsMi43NzgtMi43NzhoMTMuODg5YzEuNTM0LDAsMi43NzgsMS4yNDQsMi43NzgsMi43NzhWOTMuNzV6XCIgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJsYW1wLWxpZ2h0LTQwNFwiIGN4PVwiMTE5LjY3NlwiIGN5PVwiNDQuMjJcIiByPVwiNDAuNTFcIiAvPlxyXG4gICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwibGFtcC1kZXRhaWxzLTQwNFwiIGQ9XCJNMTQ5LjMwNiw3MS41MjhjMCwzLjI0Mi0xMy4zNywxMy44ODktMjkuODYxLDEzLjg4OVM4OS41ODMsNzUuMjMyLDg5LjU4Myw3MS41MjhjMC00LjE2NiwxMy4zNjktMTMuODg5LDI5Ljg2MS0xMy44ODlcclxuICAgICAgICAgIFMxNDkuMzA2LDY3LjM2MiwxNDkuMzA2LDcxLjUyOHpcIi8+XHJcbiAgICAgICAgICA8cmFkaWFsR3JhZGllbnQgY2xhc3NOYW1lPVwibGlnaHQtZ3JhZGllbnQtNDA0XCIgaWQ9XCJTVkdJRF8xX1wiIGN4PVwiMTE5LjY3NlwiIGN5PVwiNDQuMjJcIiByPVwiNjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cclxuICAgICAgICAgICAgPHN0b3AgIG9mZnNldD1cIjAlXCIgc3R5bGU9e3tzdG9wQ29sb3I6XCIjRkZGRkZGXCIsIHN0b3BDcGFjaXR5OiAxfX0vPlxyXG4gICAgICAgICAgICA8c3RvcCAgb2Zmc2V0PVwiNTAlXCIgc3R5bGU9e3tzdG9wQ29sb3I6XCIjRURFREVEXCIsIHN0b3BPcGFjaXR5OiAwLjV9fT5cclxuICAgICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwic3RvcC1vcGFjaXR5XCIgdmFsdWVzPVwiMC4wOyAwLjU7IDAuMFwiIGR1cj1cIjUwMDBtc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiPjwvYW5pbWF0ZT5cclxuICAgICAgICAgICAgPC9zdG9wPlxyXG4gICAgICAgICAgICA8c3RvcCAgb2Zmc2V0PVwiMTAwJVwiIHN0eWxlPXt7c3RvcENvbG9yOicjRURFREVEJywgc3RvcE9wYWNpdHk6IDB9fS8+XHJcbiAgICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxyXG4gICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJsYW1wLWxpZ2h0X19nbG93LTQwNFwiIGZpbGw9XCJ1cmwoI1NWR0lEXzFfKVwiIGN4PVwiMTE5LjY3NlwiIGN5PVwiNDQuMjJcIiByPVwiNjVcIi8+XHJcbiAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJsYW1wLWJvdHRvbS00MDRcIiBkPVwiTTEzNS40MTcsNDg3Ljc4MWMwLDEuMzc4LTEuMjQ0LDIuNDk2LTIuNzc4LDIuNDk2SDEwNi4yNWMtMS41MzQsMC0yLjc3OC0xLjExOC0yLjc3OC0yLjQ5NnYtNzQuODY5XHJcbiAgICAgICAgICBjMC0xLjM3OCwxLjI0NC0yLjQ5NSwyLjc3OC0yLjQ5NWgyNi4zODljMS41MzQsMCwyLjc3OCwxLjExNywyLjc3OCwyLjQ5NVY0ODcuNzgxelwiIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L3N2Zz5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=