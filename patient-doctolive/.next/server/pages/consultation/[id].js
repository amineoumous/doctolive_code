module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("y7+m");


/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "2FnJ":
/***/ (function(module, exports) {

module.exports = require("react-icons/ti");

/***/ }),

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "57pr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LGnN");

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "f"][0],
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "r"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "f"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "f"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "f"][0]) + ", 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "r"],
      outline: 0,
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "f"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "f"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "a"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "f"][0]) + ", 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal, &.material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      marginTop: "-1em",
      marginBottom: "-1em",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginTop: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  white: {
    "&,&:focus,&:hover": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "r"],
      color: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "f"][0]
    }
  },
  rose: {
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "m"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "m"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "m"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "m"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "m"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "m"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "a"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "m"][0]) + ", 0.2)"
    }
  },
  primary: {
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "k"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "k"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "k"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "k"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "k"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "k"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "a"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "k"][0]) + ", 0.2)"
    }
  },
  info: {
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* infoColor */ "i"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* infoColor */ "i"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* infoColor */ "i"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* infoColor */ "i"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* infoColor */ "i"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* infoColor */ "i"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "a"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* infoColor */ "i"][0]) + ", 0.2)"
    }
  },
  success: {
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* successColor */ "o"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* successColor */ "o"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* successColor */ "o"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* successColor */ "o"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* successColor */ "o"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* successColor */ "o"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "a"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* successColor */ "o"][0]) + ", 0.2)"
    }
  },
  warning: {
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* warningColor */ "q"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* warningColor */ "q"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* warningColor */ "q"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* warningColor */ "q"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* warningColor */ "q"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* warningColor */ "q"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "a"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* warningColor */ "q"][0]) + ", 0.2)"
    }
  },
  danger: {
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* dangerColor */ "d"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* dangerColor */ "d"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* dangerColor */ "d"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* dangerColor */ "d"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* dangerColor */ "d"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* dangerColor */ "d"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* blackColor */ "a"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* hexToRgb */ "g"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__[/* dangerColor */ "d"][0]) + ", 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* whiteColor */ "r"],
      background: "transparent",
      boxShadow: "none"
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* roseColor */ "m"][0]
      }
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* primaryColor */ "k"][0]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* infoColor */ "i"][0]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* successColor */ "o"][0]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* warningColor */ "q"][0]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* dangerColor */ "d"][0]
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover": {
      color: "#1ab9b9",
      fontWeight: 700,
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: _variables_js__WEBPACK_IMPORTED_MODULE_0__[/* grayColor */ "f"][0],
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (buttonStyle);

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "7v8O":
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "A2So":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Card; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/variables.js
var variables = __webpack_require__("LGnN");

// CONCATENATED MODULE: ./assets/jss/cardStyle.js

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + Object(variables["g" /* hexToRgb */])(variables["a" /* blackColor */]) + ", 0.87)",
    background: variables["r" /* whiteColor */],
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + Object(variables["g" /* hexToRgb */])(variables["a" /* blackColor */]) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }
};
/* harmony default export */ var jss_cardStyle = (cardStyle);
// CONCATENATED MODULE: ./components/Card/Card.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(jss_cardStyle);
function Card(props) {
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    profile,
    chart
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile", "chart"]);

  const cardClasses = external_classnames_default()({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({
    className: cardClasses
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ "C9pf":
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "F+5j":
/***/ (function(module, exports) {

module.exports = require("simple-peer");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "FT3n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  profile: {
    heading: "Profile editing",
    nomLabel: "name",
    placeholder1: "change your name",
    placeholder2: "change your first name",
    prenomLabel: "First name",
    emailLabel: "E-mail adress",
    phoneLabel: "Phone number",
    dateLabel: "Date naissance",
    lieuLabel: "Lieu naissance",
    confirm_password: "Confirmer le mot de passe",
    new_password: " New Password",
    old_password: "Password "
  },
  home: {
    title: "DOCTOLIVE - Online doctor's appointment",
    heading1: "Search Doctor, Make an Appointment",
    heading2: "Discover the best doctors, clinic & hospital the city nearest to you.",
    search: {
      recherchelabel: "Doctor, establishment, specialty ...",
      noOption: "No results match",
      noOption2: "Type to get more result",
      loading: "Loading doctors or similar specialties",
      citylabel: "Where ?",
      cityLoading: "Loading similar city"
    },
    about: {
      heading: "about us",
      body: "The idea behind Doctolive was to build a long term concept which aims to improve people’s daily lives. In 2021, two partners chose to tackle the subject of medical appointments.  It quickly became clear that both patients and practitioners were responsive to this innovative tool. ",
      button: "",
      banneritem1: "Appointments 24/7",
      banneritem2: "Automatique reminder",
      banneritem3: "history"
    },
    skip: {
      heading: "Skip the waiting room.",
      subHeading: "Consult with a doctor",
      button: "Consult now",
      banneritem1: "Simple and fixed fees",
      banneritem2: "Verified doctors respond in 5 minutes",
      banneritem3: "100% Private and confidential"
    },
    steps: {
      heading: "Take an appointment in a few clicks.",
      banneritem1: "Find your healthcare professional",
      banneritem12: "25,000+ practitioners for 70 specialties. Filter by speciality, area of expertise, geolocation, and more.",
      banneritem2: "Select your time",
      banneritem22: "Select your slot in the real time agenda of the practitioner.",
      banneritem3: "Book your appointment in 1 minute!",
      banneritem32: "24/7 access to your appointments from all your devices. Confirmation and reminder via email and SMS."
    },
    dowload: {
      heading: "Discover the doctolive mobile application",
      subHeading: "For easier appointments management.",
      app: "Get it now on App Store",
      play: "Get it now on Play Store"
    },
    services: {
      heading: "Services",
      item1heading: "Consult doctors online",
      item1body: "Talk with a doctor using our highly secure video call. Our video call service helps you to speak about your health issues with a doctor on a face to face live interaction.",
      item2heading: "Store health records",
      item2body: "all documents shared with or by your doctors during a teleconsultation will be recorded on the platform with a single access by you and the practitioner.",
      item3heading: "Appointments management",
      item3body: "after confirming an appointment, you will be able to move it or cancel it at any time. you also have the possibility to manage your old appointments.",
      item4heading: "Find doctor",
      item4body: "With the most diverse nationwide practice, it’s easy to select a medical or mental health provider with a background and specialty that are a perfect fit for you."
    }
  },
  navbar: {
    medecin: "Are you a healthcare professional?",
    contact: "Contact us",
    conect: "login",
    rdv: "Manage my appointments"
  },
  pronavbar: {
    contact: "Contactez-nous",
    document: "Documents",
    rdv: "Rendez-vous",
    dropDown1: "My account",
    dropDown2: "log out",
    proche: "Mes proches",
    vous_etes_etudiant_en_medcine: "vous êtes étudiant en médcine?"
  },
  footer: {
    partner: "Become a partner doctor",
    signin: "Register as a patient",
    faq: "Questions ?",
    contact: "ontact us ",
    adress: "Morocco - Casablanca",
    politique: "Privacy Policy",
    condition: "Terms of use",
    condition2: "Conditions d'utilisation du site Doctolive",
    regle_de_r: "Règles de référencement",
    mentions_leg: "Mentions légales",
    mentions_leg: "Mentions légales",
    Cookies: "Cookies",
    protect_donnes_perso: "protection des données personnelles",
    gestion_de_cookies: "Gestion de cookies et consentement"
  },
  new: {
    alreadyHave: "I already have a Doctolive account",
    newIn: "New to Doctolive?",
    signin: "login",
    signup: "Register",
    auth: "Authentication",
    emailLabel: "E-mail adress",
    passLabel: "Password",
    oldpassLabel: "Old password",
    confirmpassLabel: "Confirm password",
    error: "Incorrect password or email address!",
    labelNom: "last name",
    labelPrenom: "fisrt name",
    phoneLabel: "Phone number",
    phoneError: "Email address must be in standard format",
    labelEmailC: "Confirm email address",
    labelEmailCP: "Confirm email address",
    errorSignup: "The information is incorrect",
    successSignup: "Request sent successfully check your email address to confirm your account"
  },
  report: {
    signup: "Add",
    labelNom: "Type",
    labelPrenom: "Description",
    labelEnd: "Appointement have been done ?",
    errorSignup: "Bad request",
    successSignup: "Your request have successfully added a soon response will be sent to your adress mail after handling ..."
  },
  documents: {
    aucun: "No document found",
    donthave: "You have no shared document",
    sharedBy: "Document share by : ",
    sharedWith: "Document you have shared with: "
  },
  appointments: {
    notAuth: "You are not authenticated ...",
    access: "access my account",
    noApp: "You don't have an appointment yet",
    myapp: "My Appointments",
    myHistory: "My appointment history",
    history: "Consultation history",
    nextApp: " My next appointments",
    takeapp: "Make an appointment",
    cardApps: {
      link: "See more details"
    },
    cardApp: {
      link: "See more details",
      accessInfos: "Access Info",
      notSpecified: "The doctor has not yet specified this access information",
      secretariat: "Contact of the secretariat",
      click: "Please click on the button to access the teleconsultation. Your doctor will automatically notify you of your presence.",
      rejoindre: "Join the consultation",
      deplacer: "shift",
      annuler: " Cancel appointment ",
      retour: "Return",
      confirmCancel: "Confirmation of appointment cancellation",
      wantYou: "Would you like to cancel the appointment of",
      with: "with ",
      docAvai: "Physician availability",
      selecTtime: "Time selected for the consultation is",
      confirm: "Confirm the new time slot",
      seeInfosShared: "See the information shared in the consultation"
    }
  },
  resultResearch: {
    noReseault: "Sorry, we couldn't find a professional for your search ... ",
    tryReseault: "Try with other search criteria. ",
    widget: {
      availableVideo: "Consultation video available",
      notSpecified: "The doctor has not yet specified this access information",
      seeProfile: "See profile",
      seeDispo: "Check availability",
      dispo: "doctor's availability",
      timeSelected: "Time slot selected for consultation starts at",
      cancel: "Cancel",
      confirm: "Confirm an appointment"
    }
  },
  validation: {
    confirm: "Your account is validated",
    expired: "Your account is not yet validated, it seems that this link has already expired",
    generateNew: "Generate a new link"
  },
  appointment: {
    steps: ["Choice of pattern", "Identification", "Verification", "Information confirmation", "It's over"],
    takeApp: "Make an appointment",
    step1: {
      label1: "Title:",
      inp1: "Appointment title",
      placeholder1: "Title to display for this appointment",
      label2: "Description :",
      inp2: "description du rendez-vous",
      placeholder2: "Additional information",
      label3: "Type of consultation:",
      inp3: "Video consultation",
      inp4: "Consultation in office practices or in hospital",
      label4: "Consultant Doctor:",
      label5: "Location : ",
      teleconsult: "Remote video consultation",
      label6: " What is the reason for this consultation:",
      motif: "Reason for consultation",
      noMotifs: "No reason specified by doctor",
      label7: "Date and time of consultation:"
    },
    step2: {
      new: "New to Doctolive ?",
      old: "Jalready have a Doctolive account",
      signup: "Register now",
      signin: "log in",
      teleconsult: "Remote video consultation"
    },
    step3: {
      title: " We have sent an email to your address to validate your account",
      generate: "Send another email",
      revirify: "I verified my account"
    },
    step4: {
      title: "Confirmation of the consultation",
      teleconsult: "Remote video consultation",
      confirm: "Confirm this appointment",
      remind: " By confirming this appointment you agree to honor it. Remember to cancel this meeting as soon as possible in the event of an unforeseen event"
    },
    step5: {
      title: "Your appointment was registered.",
      gerer: "Manage your appointments"
    }
  },
  profilPage: {
    accessInfo: "access information",
    secretariat: "Secretariat contact",
    about: "About me",
    general: "General presentation",
    specialite: "Specialty",
    parcour: "Path",
    descriptionPArc: "Description of the doctor's path",
    formation: "Training",
    award: "Awards",
    experience: "experience",
    seeDispo: "See the available slots",
    seeMap: "Show position on map",
    tarif: "Prices",
    details: "Price details for each type of consultation.",
    honore: "These fees are communicated to you for information only by the practitioner. They may vary depending on the type of treatment finally performed in the office, the number of consultations and the additional procedures required. If the prices are exceeded, the practitioner must warn the patient beforehand.",
    service: "Service - Visit",
    prix: "Price",
    horaire: "Hours",
    detailsHeures: "Detail of working hours for each day of the week.",
    confirm: "Confirm",
    cancel: "Cancel",
    timeSelected: "Time slot selected for consultation starts at"
  }
});

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "Jro0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Kg+a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegularButton; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_jss_buttonStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("57pr");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// material-ui components

 // import styles from "../../styles/fileUploader.module.css";


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_buttonStyle_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
function RegularButton(props) {
  const classes = useStyles();

  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses
  } = props,
        rest = _objectWithoutProperties(props, ["color", "round", "children", "disabled", "simple", "size", "block", "link", "justIcon", "className", "muiClasses"]);

  const btnClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread(_objectSpread({}, rest), {}, {
    classes: muiClasses,
    className: btnClasses,
    children: children
  }));
}

/***/ }),

/***/ "LGnN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return hexToRgb; });
/* unused harmony export drawerWidth */
/* unused harmony export transition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return container; });
/* unused harmony export boxShadow */
/* unused harmony export card */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return roseBoxShadow; });
/* unused harmony export warningCardHeader */
/* unused harmony export successCardHeader */
/* unused harmony export dangerCardHeader */
/* unused harmony export infoCardHeader */
/* unused harmony export primaryCardHeader */
/* unused harmony export roseCardHeader */
/* unused harmony export cardActions */
/* unused harmony export cardHeader */
/* unused harmony export defaultBoxShadow */
/* unused harmony export title */
/* unused harmony export cardTitle */
/* unused harmony export cardSubtitle */
/* unused harmony export cardLink */
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }

  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
};

const drawerWidth = 260;
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const primaryColor = ["#1ab9b9", "#1ab9b9", "#1ab9b9", "#1ab9b9"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];
const dangerColor = ["#f1000f", "#ff1d1f", "#ff3a2e", "#ff523d"];
const successColor = ["#4caf50", "#62c463", "#8dca89", "#c7e5c3"];
const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#eb3573"];
const grayColor = ["#999", "#777", "#3C4858", "#AAAAAA", "#D2D2D2", "#DDD", "#b4b4b4", "#555555", "#333", "#a9afbb", "#eee", "#e7e7e7"];
const blackColor = "#000";
const whiteColor = "#FFF";
const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const primaryBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(primaryColor[0]) + ",.4)"
};
const infoBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(infoColor[0]) + ",.4)"
};
const successBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(successColor[0]) + ",.4)"
};
const warningBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(warningColor[0]) + ",.4)"
};
const dangerBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(dangerColor[0]) + ",.4)"
};
const roseBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ",.4)"
};

const warningCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

const dangerCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid " + grayColor[10],
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const title = {
  color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: grayColor[1],
    fontWeight: "400",
    lineHeight: "1"
  }
};

const cardTitle = _objectSpread(_objectSpread({}, title), {}, {
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": _objectSpread(_objectSpread({}, title), {}, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
});

const cardSubtitle = {
  marginTop: "-.375rem"
};
const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};


/***/ }),

/***/ "T00j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAuth; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Kg+a");
/* harmony import */ var _contentFR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("kv0W");
/* harmony import */ var _contentEN__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("FT3n");
/* harmony import */ var _contentAR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ZkZy");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zOcm");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("lWoh");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("ZVla");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("lj8g");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("j3R+");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _EndPoint__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("lIVJ");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// src/context/state.js







 // @material-ui/icons









const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
function AuthWrapper({
  children
}) {
  let existinguserData = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("patientData");
  existinguserData = existinguserData != undefined ? JSON.parse(existinguserData) : {};
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    locale
  } = router;
  const content = locale === "ar" ? _contentAR__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"] : locale === "en" ? _contentEN__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"] : _contentFR__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"];
  const {
    0: userData,
    1: setUserData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(existinguserData);
  const {
    0: addedByAdmin,
    1: setAddedByAdmin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    password_confirmation: "",
    password: "",
    old_password: ""
  });

  const setUser = data => {
    if (!data.token) {
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('patientData', {}, {
        expires: -1000
      });
      setUserData({
        isAuth: false
      });
      return router.push({
        pathname: `/account/new`
      });
    } else {
      setAddedByAdmin(data.user.addedByAdmin && !data.user.passwordChanged);
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('patientData', JSON.stringify(data));
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('token', data.token);
      setUserData(data);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (userData.token) {
      setAddedByAdmin(userData.user.addedByAdmin && !userData.user.passwordChanged);
      fetch(`${_EndPoint__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].BACKEND_URL}/patient/verify`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `token ${userData.token}`
        }
      }).then(r => r.json().then(res => {
        if (!res.error) {// setUserData(existinguserData);
        } else {
          setUserData({
            isAuth: false
          });
        }
      })).catch(error => {
        setUserData({
          isAuth: false
        });
      });
    }

    return () => {};
  }, []);

  const handleConfirmation = () => {
    let testPass = state.password.trimStart();

    if (testPass.length > 6) {
      let data = {
        password: state.password,
        password_confirmation: state.password_confirmation,
        old_password: state.old_password,
        email: userData.user.email
      };
      fetch(`${_EndPoint__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"].BACKEND_URL}/patient/new-password`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `token ${userData.token}`
        }
      }).then(res => {
        console.log(res);
        setAddedByAdmin(false);
        setUserData(res.data.updatePatient);
      }).catch(err => {
        console.log(err.response);
      });
    }
  };

  const handleChange = ({
    target: {
      value,
      name
    }
  }) => {
    setState(old => {
      return _objectSpread(_objectSpread({}, old), {}, {
        [name]: value
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(AppContext.Provider, {
    value: {
      userData,
      setUser
    },
    children: [children, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Dialog"] // open={false}
    , {
      open: addedByAdmin,
      onClose: () => {},
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["DialogTitle"], {
        id: "alert-dialog-title",
        children: " Renouveler le mot de passe "
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["DialogContent"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["DialogContentText"], {
          id: "alert-dialog-description",
          children: "Ce compte \xE0 tait cr\xE9er avec un administrateur, alors ce mot de passe \xE0 \xE9tait g\xE9n\xE9rer d'une mani\xE9re al\xE9atoir. On vous recomande de saisir un nouveau mot de passe pour la scuit\xE9 de vos information."
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9___default.a, {
          className: "mt-3",
          fullWidth: true,
          variant: "outlined",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
            htmlFor: "standard-adornment-password",
            children: [" ", content.new.oldpassLabel, " "]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default.a, {
            id: "standard-adornment-password",
            type: state.showPassword ? 'text' : 'password',
            value: state.old_password,
            onChange: handleChange,
            required: true,
            label: content.new.oldpassLabel,
            name: "old_password",
            endAdornment: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default.a, {
              position: "end",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
                "aria-label": "toggle password visibility",
                onClick: () => setState(old => {
                  return _objectSpread(_objectSpread({}, old), {}, {
                    showPassword: !state.showPassword
                  });
                }),
                children: state.showPassword ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdVisibility"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdVisibilityOff"], {})
              })
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9___default.a, {
          className: "mt-3",
          fullWidth: true,
          variant: "outlined",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
            htmlFor: "standard-adornment-password",
            children: [" ", content.new.passLabel, " "]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default.a, {
            id: "standard-adornment-password",
            type: state.showPassword ? 'text' : 'password',
            value: state.password,
            onChange: handleChange,
            required: true,
            label: content.new.passLabel,
            name: "password",
            endAdornment: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default.a, {
              position: "end",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
                "aria-label": "toggle password visibility",
                onClick: () => setState(old => {
                  return _objectSpread(_objectSpread({}, old), {}, {
                    showPassword: !state.showPassword
                  });
                }),
                children: state.showPassword ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdVisibility"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdVisibilityOff"], {})
              })
            })
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9___default.a, {
          className: "mt-3",
          fullWidth: true,
          variant: "outlined",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
            htmlFor: "standard-adornment-password",
            children: [" ", content.new.confirmpassLabel, " "]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default.a, {
            id: "standard-adornment-password",
            type: state.showPassword ? 'text' : 'password',
            value: state.password_confirmation,
            onChange: handleChange,
            required: true,
            label: content.new.confirmpassLabel,
            name: "password_confirmation",
            endAdornment: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default.a, {
              position: "end",
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
                "aria-label": "toggle password visibility",
                onClick: () => setState(old => {
                  return _objectSpread(_objectSpread({}, old), {}, {
                    showPassword: !state.showPassword
                  });
                }),
                children: state.showPassword ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdVisibility"], {}) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdVisibilityOff"], {})
              })
            })
          })]
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["DialogActions"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
          onClick: handleConfirmation,
          color: "danger",
          children: "Confirmer"
        })
      })]
    })]
  });
}
function useAuth() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AppContext);
}

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Udb8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ StyledCheckbox; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./assets/jss/variables.js
var variables = __webpack_require__("LGnN");

// CONCATENATED MODULE: ./assets/jss/CheckboxStyle.js

const buttonStyle = {
  checkboxLabel: {
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: 1,
    margin: "12px 7px"
  },
  span: {
    position: "relative",
    top: 0,
    borderColor: variables["k" /* primaryColor */][2],
    border: "1px solid",
    borderRadius: "50%",
    float: "left",
    height: "14px",
    width: "14px",
    margin: "0 14px 0 0px",
    outlineColor: "#fff",
    transition: "all 0.2s ease-in-out",
    zIndex: 1
  },
  spanText: {
    color: "black"
  },
  input: {
    display: "none",
    '&:disabled + span': {
      borderColor: "#eee" + "!important"
    },
    '&:checked + span': {
      borderRadius: "0%",
      top: "-2px",
      borderColor: variables["k" /* primaryColor */][0] + "!important"
    },
    '&.rtl:checked + span': {
      borderRight: "2px solid",
      borderBottom: "4px solid",
      transform: "rotate(45deg) scaleY(0.5)",
      borderTop: 0,
      borderLeft: 0
    },
    '&.ltr:checked + span': {
      transform: "rotate(-45deg) scaleY(0.5)",
      borderLeft: "2px solid",
      borderBottom: "4px solid",
      borderTop: 0,
      borderRight: 0
    }
  }
};
/* harmony default export */ var CheckboxStyle = (buttonStyle);
// CONCATENATED MODULE: ./components/Checkbox/Checkbox.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const useStyles = Object(styles_["makeStyles"])(CheckboxStyle); // Inspired by blueprintjs

function StyledCheckbox(_ref) {
  let {
    name,
    label,
    rtl
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["name", "label", "rtl"]);

  const classes = useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
    className: classes.checkboxLabel,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", _objectSpread({
      name: name,
      type: "checkbox",
      className: classes.input + (rtl ? " rtl" : " ltr")
    }, rest)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: classes.span
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      className: classes.spanText,
      children: [" ", label, " "]
    })]
  });
}
StyledCheckbox.defaultProps = {
  checked: false,
  onClick: () => {},
  label: "",
  name: "checkbox",
  rtl: false
};

/***/ }),

/***/ "UsYt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CardBody; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./assets/jss/cardBodyStyle.js
const cardBodyStyle = {
  cardBody: {
    padding: "3rem 40px",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative",
    '@media (max-width: 768px)': {
      // Adjust the max-width as needed for your mobile breakpoint
      padding: "3rem 15px"
    }
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    '@media (max-width: 768px)': {
      paddingLeft: "15px",
      paddingRight: "15px"
    }
  },
  cardBodyProfile: {
    marginTop: "15px"
  }
};
/* harmony default export */ var jss_cardBodyStyle = (cardBodyStyle);
// CONCATENATED MODULE: ./components/Card/CardBody.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// @material-ui/core components
 // @material-ui/icons
// core components


const useStyles = Object(styles_["makeStyles"])(jss_cardBodyStyle);
function CardBody(props) {
  const classes = useStyles();

  const {
    className,
    children,
    plain,
    profile
  } = props,
        rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile"]);

  const cardBodyClasses = external_classnames_default()({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", _objectSpread(_objectSpread({
    className: cardBodyClasses
  }, rest), {}, {
    children: children
  }));
}

/***/ }),

/***/ "VuiC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Accordion");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "ZVla":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "ZkZy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  profile: {
    heading: "تعديل الملف الشخصي",
    nomLabel: "اسم",
    placeholder1: "غير اسمك",
    placeholder2: "تغيير اسمك الأول ",
    prenomLabel: "الاسم الأول",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "رقم الهاتف",
    lieuLabel: "Lieu naissance",
    dateLabel: "رقم الهاتف",
    confirm_password: "أكد كلمة المرور",
    new_password: " كلمة السر جديدة",
    old_password: "كلمة السر"
  },
  home: {
    title: "DOCTOLIVE - موعد مع طبيبك عبر الإنترنت",
    heading1: "ابحث عن طبيب ، حدد موعدًا",
    heading2: "اكتشف أفضل الأطباء والعيادات والمستشفيات في المدينة الأقرب إليك",
    search: {
      recherchelabel: "دكتور ، مؤسسة ، تخصص ...",
      noOption: "لا توجد نتائج مطابقة",
      noOption2: "اكتب للحصول على المزيد من النتائج",
      loading: "تحميل الأطباء أو التخصصات المماثلة",
      citylabel: "أين ؟",
      cityLoading: "تحميل مدن مماثلة"
    },
    about: {
      heading: "معلومات عنا",
      body: "كانت الفكرة وراء Doctolive هي بناء مفهوم طويل المدى يهدف إلى تحسين حياة الناس اليومية. في عام 2021 ، اختار شريكان معالجة موضوع المواعيد الطبية. سرعان ما أصبح واضحًا أن المرضى والممارسين على حد سواء كانوا حساسين",
      button: "",
      banneritem1: "موعد 24/7",
      banneritem2: "تذكير تلقائي",
      banneritem3: "سجل البيانات"
    },
    skip: {
      heading: "تجنب غرفة الانتظار.",
      subHeading: "رؤية الطبيب",
      button: "تحديد موعد",
      banneritem1: "تكاليف بسيطة وثابتة",
      banneritem2: "الأطباء الذين تم التحقق منهم يستجيبون في 5",
      banneritem3: "100٪ خاص وسري"
    },
    steps: {
      heading: "حدد موعدًا ببضع نقرات.",
      subHeading: "رؤية الطبيب",
      button: "تحديد موعد",
      banneritem1: "ابحث عن أخصائي الرعاية الصحية الخاص بك",
      banneritem12: "أكثر من 25000 ممارس في 70 تخصصًا. تصفية حسب التخصص ، مجال الخبرة ، الموقع الجغرافي ، إلخ.",
      banneritem2: "اختر وقتك",
      banneritem22: "حدد تخصصك في جدول أعمال الممارس في الوقت الفعلي.",
      banneritem3: "احجز موعدك في دقيقة واحدة!",
      banneritem32: "24/7 الوصول إلى مواعيدك من جميع أجهزتك. التأكيد والتذكير عن طريق البريد الإلكتروني والرسائل القصيرة."
    },
    dowload: {
      heading: "اكتشف تطبيق الهاتف المحمول ",
      subHeading: "لإدارة مواعيدك بشكل أسهل.",
      app: "في متجر التطبيقات APP STORE ",
      play: "في متجر التطبيقات PLAY STORE"
    },
    services: {
      heading: "خدماتنا",
      item1heading: "استشر الأطباء عبر الإنترنت",
      item1body: "تحدث مع طبيب باستخدام مكالمة الفيديو عالية الأمان الخاصة بنا. تساعدك خدمة مكالمات الفيديو الخاصة بنا على مناقشة مخاوفك الصحية مع طبيب في تفاعل مباشر وجهاً لوجه.",
      item2heading: "قم بتخزين المستندات الطبية الخاصة بك",
      item2body: "سيتم تسجيل جميع المستندات التي تمت مشاركتها مع أطبائك أو بواسطتهم أثناء الاستشارة عن بُعد على المنصة. ستكون هذه المعلومات متاحة لك أنت والممارس فقط.",
      item3heading: "إدارة المواعيد",
      item3body: "بعد تأكيد الموعد ، ستتمكن من نقله أو إلغائه في أي وقت. لديك أيضًا إمكانية إدارة مواعيدك القديمة.",
      item4heading: "ابحث عن طبيبك",
      item4body: "مع وجود عدد كبير من الممارسين المتنوعين على الصعيد الوطني ، من السهل اختيار مقدم رعاية طبية أو صحة عقلية يتمتع بالخبرة والتخصص المناسبين لك."
    }
  },
  navbar: {
    medecin: "هل أنت متخصص في الرعاية الصحية؟",
    contact: "اتصل بنا",
    conect: "تسجيل الدخول",
    rdv: "إدارة مواعيدي"
  },
  pronavbar: {
    contact: "اتصل بنا",
    document: "وثائق",
    rdv: "مواعيد",
    dropDown1: "حسابي",
    dropDown2: "تسجيل الخروج",
    proche: "Mes proches",
    vous_etes_etudiant_en_medcine: "vous êtes étudiant en médcine?"
  },
  footer: {
    partner: "كن طبيبًا شريكًا",
    signin: "سجل كمريض",
    faq: "أسئلة ؟",
    contact: "اتصل بنا ",
    adress: "المغرب - الدار البيضاء",
    politique: "سياسة الخصوصية",
    condition: "شروط الاستعمال",
    condition2: "Conditions d'utilisation du site Doctolive",
    regle_de_r: "Règles de référencement",
    mentions_leg: "Mentions légales",
    mentions_leg: "Mentions légales",
    Cookies: "Cookies",
    protect_donnes_perso: "protection des données personnelles",
    gestion_de_cookies: "Gestion de cookies et consentement"
  },
  new: {
    alreadyHave: "لدي بالفعل حساب Doctolive",
    newIn: "جديد على Doctolive؟",
    signin: "تسجيل الدخول",
    signup: " سجل الان",
    auth: "الدخول إلى حسابي",
    emailLabel: "عنوان البريد الإلكتروني",
    passLabel: "كلمة السر",
    oldpassLabel: "كلمة سر قديمة",
    confirmpassLabel: "أكد كلمة السر",
    error: "كلمة مرور أو عنوان بريد إلكتروني غير صحيح!",
    labelNom: "الكنية",
    labelPrenom: "الاسم الأول",
    phoneLabel: "رقم الهاتف",
    phoneError: "يجب أن يكون عنوان البريد الإلكتروني بتنسيق العام",
    labelEmailC: "أكد عنوانك الإلكتروني",
    labelEmailCP: "أكد عنوانك الإلكتروني",
    errorSignup: "المعلومات غير صحيحة",
    successSignup: "تم إرسال الطلب بنجاح تحقق من عنوان بريدك الإلكتروني لتأكيد حسابك"
  },
  report: {
    signup: "اضافة",
    labelNom: "النوع",
    labelPrenom: "وصف",
    labelEnd: "انتهت الاستشارة؟",
    errorSignup: "المعلومات غير صحيحة",
    successSignup: "تم إرسال الطلب بنجاح تحقق من بريدك الالكتروني للحصول على رد مسبق في الأيام القليلة المقبلة"
  },
  documents: {
    aucun: "لم يتم العثور على أي مستند",
    donthave: "ليس لديك وثيقة للمشاركة",
    sharedBy: " مشاركة المستند من طرف: ",
    sharedWith: "المستند الذي قمت بمشاركته معه:"
  },
  appointments: {
    notAuth: "أنت غير مصدق ...",
    access: "الدخول إلى حسابي",
    noApp: " ليس لديك موعد بعد",
    myapp: "المواعيد الخاصة بي",
    myHistory: "سجل اللقائات الطبية",
    history: "سجل اللقائات الطبية",
    nextApp: " المواعيد القادمة",
    takeapp: "اخذ موعد",
    cardApps: {
      link: "انظر المزيد من التفاصيل"
    },
    cardApp: {
      link: "انظر المزيد من التفاصيل",
      accessInfos: "معلومات الولوج ",
      notSpecified: "لم يحدد الطبيب بعد معلومات الوصول",
      secretariat: "الاتصال بالأمانة",
      click: "الرجاء الضغط على الزر للوصول إلى الاستشارة عن بعد. سنخبر طبيبك تلقائيًا بوجودك.",
      rejoindre: "انضم إلى الاستشارة",
      deplacer: "انقل الموعد",
      annuler: " الموعد ",
      retour: "رجوع",
      confirmCancel: "تأكيد إلغاء الموعد",
      wantYou: "هل ترغب في إلغاء موعد",
      with: "مع ",
      docAvai: "توافر الطبيب",
      selecTtime: "الوقت المحدد للاستشارة هو",
      confirm: "قم بتأكيد الفترة الزمنية الجديدة",
      seeInfosShared: "انظر المعلومات المشتركة في الاستشارة"
    }
  },
  resultResearch: {
    noReseault: "عذرا ، لم نتمكن من العثور على محترف لبحثك ...",
    tryReseault: "حاول بمعايير بحث أخرى.",
    widget: {
      availableVideo: "التشاور بالفيديو متاح",
      notSpecified: "لم يحدد الطبيب بعد معلومات الوصول هذه",
      seeProfile: "انظر الملف الشخصي",
      seeDispo: "التحقق من الصلاحية",
      dispo: "الاوقات المتاحة عند هذا الطبيب",
      timeSelected: "تبدأ الفترة الزمنية المحددة للتشاور ",
      cancel: "لالغاء",
      confirm: "تحديد موعد"
    }
  },
  validation: {
    confirm: "تم التحقق من صحة حسابك",
    expired: "لم يتم التحقق من صحة حسابك حتى الآن ، يبدو أن هذا الارتباط قد انتهت صلاحيته بالفعل",
    generateNew: "قم بإنشاء ارتباط جديد"
  },
  appointment: {
    steps: ["اختيار النمط", "تعريف", "تحقق", "تأكيد المعلومات", "لقد انتهى"],
    takeApp: "تحديد موعد",
    step1: {
      label1: "عنوان : ",
      inp1: "عنوان التعيين",
      placeholder1: "العنوان المراد عرضه لهذا الموعد",
      label2: "وصف :",
      inp2: "وصف الموعد",
      placeholder2: "معلومات إضافية",
      label3: "نوع الاستشارة:",
      inp3: "استشارة فيديو",
      inp4: "الإستشارة في المكتب",
      label4: "طبيب استشاري:",
      label5: "موقع : ",
      teleconsult: "استشارة عن بعد بالفيديو",
      label6: " ما سبب هذه الاستشارة:",
      motif: "سبب الاستشارة",
      noMotifs: "لا يوجد سبب محدد من قبل الطبيب",
      label7: "تاريخ ووقت الاستشارة: "
    },
    step2: {
      new: "جديد على Doctolive؟",
      old: "لدي بالفعل حساب Doctolive",
      signup: "سجل الان",
      signin: "تسجيل الدخول",
      teleconsult: "استشارة عن بعد بالفيديو"
    },
    step3: {
      title: "لقد أرسلنا بريدًا إلكترونيًا إلى عنوانك للتحقق من صحة حسابك",
      generate: "أرسل بريدًا إلكترونيًا آخر",
      revirify: "لقد تحققت من حسابي"
    },
    step4: {
      title: "تأكيد الاستشارة",
      teleconsult: "استشارة عن بعد بالفيديو",
      confirm: "تأكيد الموعد ",
      remind: "بتأكيد هذا الموعد فإنك توافق على احترامه. تذكر إلغاء هذا الاجتماع في أقرب وقت ممكن في حالة وقوع حدث غير متوقع"
    },
    step5: {
      title: " تم تسجيل موعدك.",
      gerer: "إدارة مواعيدك"
    }
  },
  profilPage: {
    accessInfo: "معلومات الوصول للعيادة",
    secretariat: "الاتصال بالسكرتارية",
    about: "عني",
    general: "تقديم عام",
    specialite: "تخصص",
    parcour: "مسار",
    descriptionPArc: "وصف مسار الطبيب",
    formation: "تمرين",
    award: "الجوائز",
    experience: "خبرة",
    seeDispo: "عرض الفترات المتاحة",
    seeMap: "إظهار الموقع على الخريطة",
    tarif: "الأسعار",
    details: "تفاصيل السعر لكل نوع من الاستشارة.",
    honore: "يتم إرسال هذه الرسوم إليك للحصول على معلومات فقط من قبل الطبيب. قد تختلف اعتمادًا على نوع العلاج الذي يتم إجراؤه أخيرًا في العيادة ، وعدد الاستشارات والإجراءات الإضافية المطلوبة. في حالة تجاوز الأسعار ، يجب على الممارس تحذير المريض مسبقًا.",
    service: "الخدمة - زيارة",
    prix: "سعر",
    horaire: "جدول مواعيد",
    detailsHeures: "تفصيل ساعات العمل لكل يوم من أيام الأسبوع.",
    confirm: "أكد",
    cancel: "إلغاء",
    timeSelected: "تبدأ الفترة الزمنية المحددة للتشاور "
  }
});

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

/***/ }),

/***/ "bleF":
/***/ (function(module, exports) {

module.exports = require("react-autobind");

/***/ }),

/***/ "cD5v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CSOn");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import closeImg from './close.svg'
// import { Transition } from 'react-transition-group';



class ReactFancyBox extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      show: false,
      maxHeight: 0
    });

    _defineProperty(this, "setShow", () => {
      this.setState({
        show: true
      }); // this.props.onOpen()
    });

    _defineProperty(this, "handleClickBox", event => {
      if (this.box.contains(event.target)) {
        return;
      }

      this.close();
    });

    _defineProperty(this, "close", () => {
      this.setState({
        show: false
      });
    });

    _defineProperty(this, "renderThumbnail", () => {
      const {
        thumbnail,
        image,
        defaultThumbnailWidth,
        defaultThumbnailHeight
      } = this.props;

      if (!thumbnail) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          onClick: this.setShow,
          className: "thumbnail",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            style: {
              width: defaultThumbnailWidth,
              height: defaultThumbnailHeight,
              objectFit: 'cover'
            },
            className: "img-fluid",
            src: image,
            alt: "thumbnail"
          })
        });
      }

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        onClick: this.setShow,
        className: "thumbnail",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          src: thumbnail,
          className: "img-fluid",
          alt: "thumbnail"
        })
      });
    });
  }

  componentDidMount() {
    this.setState({
      maxHeight: window.innerHeight * 0.7
    });
  }

  render() {
    const {
      image,
      caption
    } = this.props;
    const imageStyle = {
      maxHeight: this.state.maxHeight,
      height: "100%",
      width: 'auto'
    };
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "react-fancybox",
      children: [this.renderThumbnail(), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"], {
        children: this.state.show ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["CSSTransition"], {
          timeout: 500,
          classNames: "item",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "box",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              ref: box => this.box = box,
              className: "image-box",
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                onClick: this.close,
                className: "img-fluid",
                className: "close-btn",
                src: "/image/close.svg",
                alt: "close"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
                style: imageStyle,
                className: "img-fluid",
                src: image,
                alt: "original"
              }), caption && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
                className: "caption",
                children: caption
              })]
            })
          })
        }) : null
      })]
    });
  }

}

ReactFancyBox.defaultProps = {
  thumbnail: '',
  image: '',
  defaultThumbnailWidth: 300,
  defaultThumbnailHeight: 250,
  caption: '',
  onOpen: () => {},
  onClose: () => {},
  showCloseBtn: true
};
/* harmony default export */ __webpack_exports__["a"] = (ReactFancyBox);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cVsR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionSummary");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "g/N5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegularButton; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_jss_buttonStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("57pr");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1imS");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("5mtF");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_8__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

// material-ui components






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_buttonStyle_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
function RegularButton(props) {
  const classes = useStyles();

  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    successRequest,
    link,
    justIcon,
    className,
    muiClasses,
    sending
  } = props,
        rest = _objectWithoutProperties(props, ["color", "round", "children", "disabled", "simple", "size", "block", "successRequest", "link", "justIcon", "className", "muiClasses", "sending"]);

  const btnClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: classes.wrapper,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread(_objectSpread({}, rest), {}, {
      disabled: sending,
      classes: muiClasses,
      className: btnClasses,
      children: [children, props.successRequest ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaCheck"], {
        className: "mx-3"
      }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosSend"], {
        className: "mx-3"
      })]
    })), props.sending && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_6___default.a, {
      size: 24,
      className: classes.buttonProgress
    })]
  });
}

/***/ }),

/***/ "j3R+":
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "kv0W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  profile: {
    heading: "Éditer votre profil",
    nomLabel: "Nom",
    placeholder1: "modifier votre nom",
    placeholder2: "modifier votre prénom",
    prenomLabel: "Prénom",
    emailLabel: "Adresse email",
    phoneLabel: "Numéro de téléphone",
    dateLabel: "Date naissance",
    lieuLabel: "Lieu naissance",
    confirm_password: "Confirmer le mot de passe",
    new_password: " Nouveau mot de passe",
    old_password: "Mot de passe "
  },
  home: {
    title: "DOCTOLIVE - Rendez-vous chez un médecin en ligne",
    heading1: "Rechercher un médecin, prendre rendez-vous",
    heading2: "Découvrez les meilleurs médecins, cliniques et hôpitaux de la ville la plus proche de chez vous.",
    search: {
      recherchelabel: "Médecin, établissement, spécialité…",
      noOption: "Aucun résultat ne correspond",
      noOption2: "Tapez pour obtenir plus de résultat",
      loading: "Chargement des médecin ou spécialité similaire",
      citylabel: "Où ?",
      cityLoading: "Chargement des villes similaire"
    },
    about: {
      heading: "À propos de nous",
      body: "Nous sommes une équipe qui a pris en charge de contribuer à résoudre les problèmes auxquels nous sommes confrontés quotidiennement dans le secteur de la santé et de faciliter l'accès aux soins de santé.Grâce à notre plate-forme de téléconsultation médicale, des milliers des marocains pourront passer une consultation médicale, de prendre un rendez-vous physique ou video et de suivre leur état de santé en ligne.De plus, les professionnels de la santé auront une meilleure alternative au travail de secrétariat et un bon système de gestion des rendez-vous.",
      button: "",
      banneritem1: "Rendez-vous 24/7",
      banneritem2: "Rappels automatiques",
      banneritem3: "Historique"
    },
    skip: {
      heading: "Éviter la salle d'attente.",
      subHeading: "Consulter un médecin",
      button: "Prendre un rendez-vous",
      banneritem1: "Frais simples et fixes",
      banneritem2: "Médecins vérifiés répondent en 5 minutes",
      banneritem3: "100% privé et confidentiel"
    },
    steps: {
      heading: "Prenez rendez-vous en quelques clics.",
      subHeading: "Consulter un médecin",
      button: "Prendre un rendez-vous",
      banneritem1: "Trouvez votre professionnel de santé",
      banneritem12: "25 000+ praticiens pour 70 spécialités. Filtrer par spécialité, domaine d'expertise, géolocalisation, etc.",
      banneritem2: "Choisissez votre temps",
      banneritem22: "Sélectionnez votre créneau dans l'agenda en temps réel du praticien.",
      banneritem3: "Réservez votre rendez-vous en 1 minute!",
      banneritem32: "Accès 24h / 24 et 7j / 7 à vos rendez-vous depuis tous vos appareils. Confirmation et rappel par e-mail et SMS."
    },
    dowload: {
      heading: "Découvrez l’application mobile doctolive",
      subHeading: "Pour une gestion encore plus simple de vos rendez-vous.",
      app: "sur l’App Store ",
      play: "sur le play Store "
    },
    services: {
      heading: "au service de votre santé",
      item1heading: "Consulter des médecins en ligne",
      item1body: "Parlez avec un médecin à l'aide de notre appel vidéo hautement sécurisé. Notre service d'appel vidéo vous aide à parler de vos problèmes de santé avec un médecin lors d'une interaction en direct face à face.",
      item2heading: "Stocker vos documents médicale",
      item2body: "Tous les documents partagés avec ou par vos médecins lors d'une téléconsultation seront enregistrés sur la plateforme avec un accès unique par vous et le praticien.",
      item3heading: "Gestion des rendez-vous",
      item3body: "Aprés avoir valider un rendez-vous, vous aurez la possibilité de le déplacer où bien l'annuler à n'importe quel moment. vous avez aussi la possibilité de gérer vos anciens rendez-vous.",
      item4heading: "Trouver votre médecin",
      item4body: "Avec un grand nombre de pratient diversifiée à l'échelle nationale, il est facile de sélectionner un fournisseur de soins médicaux ou de santé mentale avec une expérience et une spécialité qui vous conviennent parfaitement."
    }
  },
  navbar: {
    medecin: "Vous êtes professionnel de santé ?",
    contact: "Contactez-nous",
    conect: "Se connecter",
    rdv: "Gérer mes RDV"
  },
  pronavbar: {
    contact: "Contactez-nous",
    document: "Documents",
    rdv: "Rendez-vous",
    dropDown1: "Mon compte",
    dropDown2: "Se déconnecter",
    proche: "Mes proches",
    vous_etes_etudiant_en_medcine: "vous êtes étudiant en médcine?"
  },
  footer: {
    partner: "Devenir Médecin partenaire",
    signin: "S'inscrire en tant que patient",
    faq: "Des questions ?",
    contact: "Nous Contacter ",
    adress: "Maroc - Casablanca",
    politique: "Politique de confidentialité",
    condition: "Conditions d'utilisation",
    condition2: "Conditions d'utilisation du site Doctolive",
    regle_de_r: "Règles de référencement",
    mentions_leg: "Mentions légales",
    mentions_leg: "Mentions légales",
    Cookies: "Cookies",
    protect_donnes_perso: "protection des données personnelles",
    gestion_de_cookies: "Gestion de cookies et consentement"
  },
  new: {
    alreadyHave: "J'ai dèjà un compte Doctolive",
    newIn: "Nouveaux sur Doctolive ?",
    signin: "Se connecter",
    signup: " S'inscrire",
    auth: "Authentification",
    emailLabel: "Adresse email",
    passLabel: "Mot de passe",
    oldpassLabel: "Ancien mot de passe",
    confirmpassLabel: "Confirmez le mot de passe",
    error: "Mot de passe ou adresse email incorrect!",
    labelNom: "Nom",
    labelPrenom: "Prénom",
    phoneLabel: "Numéro de téléphone",
    phoneError: "L'adresse email est doit être au format standard",
    labelEmailC: "Confirmer l'adresse email",
    labelEmailCP: "Confirmer l'adresse email",
    errorSignup: "Les information sont incorrecte",
    successSignup: "Demande envoyée avec succés vérifier votre adresse émail pour confirmer votre compte"
  },
  report: {
    signup: "Ajouter",
    labelNom: "Type",
    labelPrenom: "Déscription",
    labelEnd: "La consultation à bien était términé",
    errorSignup: "Les information sont incorrecte",
    successSignup: "Demande envoyée avec succés vérifier votre adresse pour une réponse préalable dans les prochains jours"
  },
  documents: {
    aucun: "Aucun document trouvé",
    donthave: "Vous n'avez aucun document partager",
    sharedBy: " Document partager de la part : ",
    sharedWith: "Document que vous avez partager avec : "
  },
  appointments: {
    notAuth: "Vous n'êtes pas authentifié ...",
    access: "Accéder à mon compte",
    noApp: " vous n'avez pas encore de rendez-vous pour l'instant",
    myapp: "Mes Rendez-vous",
    myHistory: "Mon historique de rendez-vous",
    history: "Historique des consultation",
    nextApp: " Mes prochain rendez-vous",
    takeapp: "Prendre un rendez-vous",
    cardApps: {
      link: "Voir plus de détails"
    },
    cardApp: {
      link: "Voir plus de détails",
      accessInfos: "Informations d'accès",
      notSpecified: "Le médecin n'a pas encore spécifier ces information d'accés",
      secretariat: "Contact du secrétariat",
      click: "Merci de cliquer sur le bouton pour accéder à la téléconsultation. Votre médecin sera automatiquement notifer de votre présence.",
      rejoindre: "Rejoindre la consultation",
      deplacer: "Déplacer",
      annuler: " Annuler le rendez-vous ",
      retour: "Retour",
      confirmCancel: "Confirmation d'annulation du rendez-vous",
      wantYou: "Souhaitez-vous annuler le rendez-vous du",
      with: "avec ",
      docAvai: "Disponibilité du médecin",
      selecTtime: "Temps séléctionné pour la consultation est ",
      confirm: "Confirmer le nouveau créneau",
      seeInfosShared: "Voir les information partager dans la consultation"
    }
  },
  resultResearch: {
    noReseault: "Désolé, nous n'avons trouvé aucun professionnel pour votre recherche… ",
    tryReseault: "Essayez avec d'autres critères de recherche. ",
    widget: {
      availableVideo: "Consultation vidéo disponible",
      notSpecified: "Le médecin n'a pas encore spécifier ces information d'accés",
      seeProfile: "Voir le profile",
      seeDispo: "Voir la disponibilité",
      dispo: "disponibilité du médecin",
      timeSelected: "Créneau séléctionné pour la consultation commence à ",
      cancel: "Annuler",
      confirm: "Prendre rendez-vous"
    }
  },
  validation: {
    confirm: "Votre compte est validé",
    expired: "Votre compte n'est pas encore validé, il semble que ce lien est déja expirer",
    generateNew: "Générer un nouveau lien"
  },
  appointment: {
    steps: ["Choix du motif", "Identification", "Vérification", "Confirmation des information", "C'est terminé"],
    takeApp: "Prendre un rendez-vous",
    step1: {
      label1: "Titre :",
      inp1: "Titre du rendez-vous",
      placeholder1: "Titre à afficher pour ce rendez-vous",
      label2: "Description :",
      inp2: "description du rendez-vous",
      placeholder2: "Information supplémentaire",
      label3: "Type de consultation :",
      inp3: "Consultation vidéo",
      inp4: "Consultation au cabinet",
      label4: "Médecin consultant :",
      label5: "Lieu : ",
      teleconsult: "Consultation vidéo à distance",
      label6: " Quelle est le motif de cette consultation :",
      motif: "Motif de consultation",
      noMotifs: "Aucun motif spécifié par le médecin",
      label7: "Date et heure du consultation : "
    },
    step2: {
      new: "Nouveaux sur Doctolive ?",
      old: "J'ai dèjà un compte Doctolive",
      signup: "S'inscrire",
      signin: "Se connecter",
      teleconsult: "Consultation vidéo à distance"
    },
    step3: {
      title: "Nous avons envoyé un mail à votre adresse pour valider votre compte",
      generate: "Envoyer autre email",
      revirify: "J'ai vérifié mon compte"
    },
    step4: {
      title: "Confirmation de la consultation",
      teleconsult: "Consultation vidéo à distance",
      confirm: "Confirmer le rendez-vous ",
      remind: " En confirmant ce rendez-vous vous vous engagez à l'honorer. Pensez bien à anuler ce rendez-vous le plutôt possible en cas d'imprévu"
    },
    step5: {
      title: " Votre rendez-vous à bien était enregistrer.",
      gerer: "Gérer vos rendez-vous"
    }
  },
  profilPage: {
    accessInfo: "informations d'accès",
    secretariat: "Contact du secrétariat",
    about: "À propos de moi",
    general: "Présentation générale",
    availableVideo: "Consultation vidéo disponible",
    specialite: "Spécialité",
    parcour: "Parcours",
    descriptionPArc: "Description du parcours du médecin",
    formation: "Formation",
    award: "Récompenses",
    experience: "expérience",
    seeDispo: "Afficher la disponibilité",
    seeDispo2: "Prenez un rendez-vous en ligne",
    seeMap: "Afficher la position à la map",
    tarif: "Tarifs",
    details: "Détail des prix de chaque type de consultation.",
    honore: "Ces honoraires vous sont communiqués à titre indicatif par le praticien. Ils peuvent varier selon le type de soins finalement réalisés en cabinet, le nombre de consultations et les actes additionnels nécessaires. En cas de dépassement des tarifs, le praticien doit en avertir préalablement le patient.",
    service: "Service - Visite",
    prix: "Prix",
    horaire: "Horaires",
    detailsHeures: "Détail des heurs de travail pour chaque jour de la semaine.",
    confirm: "Confirmer",
    cancel: "annuler",
    timeSelected: "Créneau séléctionné pour la consultation commence à "
  }
});

/***/ }),

/***/ "lIVJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const LocalConfig = {
  BACKEND_URL: "http://localhost:4400",
  LOCAL_URL: "http://localhost:9000/",
  CURRENT_URL: "http://localhost:9000/",
  apiKey: "AIzaSyD6tk8dFF4GDnB0iABV95Zs_CCOZ92K9sw"
};
const prodConfig = {
  BACKEND_URL: "https://doctoliveapi.thesporteasy.com",
  CURRENT_URL: "https://doctoliveapi.thesporteasy.com",
  apiKey: "AIzaSyD6tk8dFF4GDnB0iABV95Zs_CCOZ92K9sw"
};
/* harmony default export */ __webpack_exports__["a"] = (prodConfig);

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lj8g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "y7+m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ConsultationContainer; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./EndPoint.js
var EndPoint = __webpack_require__("lIVJ");

// EXTERNAL MODULE: ./components/Card/Card.js + 1 modules
var Card = __webpack_require__("A2So");

// EXTERNAL MODULE: ./components/Card/CardBody.js + 1 modules
var CardBody = __webpack_require__("UsYt");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/CustomButtons/SubmitButton.js
var SubmitButton = __webpack_require__("g/N5");

// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__("aNEW");

// EXTERNAL MODULE: ./context/AuthContext.js
var AuthContext = __webpack_require__("T00j");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./components/fancyBox/fancybox/ReactFancyBox.js
var ReactFancyBox = __webpack_require__("cD5v");

// EXTERNAL MODULE: external "react-icons/ti"
var ti_ = __webpack_require__("2FnJ");

// CONCATENATED MODULE: ./components/Documents/DocumentsC.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import AddIcon from '@material-ui/icons/Add';







const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 20px',
  cursor: 'pointer',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};
const activeStyle = {
  borderColor: '#2196f3'
};
const acceptStyle = {
  borderColor: '#00e676'
};
const rejectStyle = {
  borderColor: '#ff1744'
};
function Images(props) {
  const {
    userData
  } = Object(AuthContext["b" /* useAuth */])();
  const {
    0: etatRequest,
    1: setEtatRequest
  } = Object(external_react_["useState"])({
    success: false,
    sending: false,
    donneIncorrect: false
  });
  const {
    0: files,
    1: setFiles
  } = Object(external_react_["useState"])([]);
  const {
    0: rejectedFiles,
    1: setRejectedFiles
  } = Object(external_react_["useState"])([]);
  const {
    0: savedPictures,
    1: setSavedPictures
  } = Object(external_react_["useState"])([]);
  const {
    0: canceledPictures,
    1: setCanceledPictures
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    if (props.documents) {
      setSavedPictures(props.documents);
    }

    return () => {};
  }, [props.documents]);
  Object(external_react_["useEffect"])(() => {
    if (props.socket) {
      props.socket.on('newDocuments', response => {
        if (response.consultationId === props.consultation.id) {
          setSavedPictures(oldPic => [...oldPic, ...response.uploadedFiles]);
        }
      });
    }

    return () => {
      if (props.socket) {
        props.socket.removeAllListeners('newDocuments');
      }
    };
  }, [props.socket]);

  const handleSubmit = async e => {
    e.preventDefault();
    setEtatRequest(oldData => {
      return _objectSpread(_objectSpread({}, oldData), {}, {
        sending: true
      });
    });

    try {
      let response = await fetch(`${EndPoint["a" /* default */].BACKEND_URL}/upload/document`, {
        method: 'POST',
        body: JSON.stringify({
          data: files,
          consultation: props.consultation,
          sentTo: "medecin"
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `token ${userData.token}`
        }
      });
      response.json().then(uploadingFile => {
        if (!uploadingFile.error) {
          setEtatRequest(oldData => {
            return _objectSpread(_objectSpread({}, oldData), {}, {
              sending: false,
              success: true
            });
          });

          if (uploadingFile.savedPictures.length > 0) {
            setSavedPictures(oldPic => [...oldPic, ...uploadingFile.savedPictures]);
          }

          if (uploadingFile.canceledData.length > 0) {
            uploadingFile.canceledData.map(dd => {
              setCanceledPictures(oldData => [...oldData, files[dd.index]]);
            });
            setFiles([]);
            setRejectedFiles([]);
          } else {
            setFiles([]);
            setRejectedFiles([]);
          }

          props.socket.emit('newDocuments', {
            uploadedFiles: uploadingFile.savedPictures,
            consultationId: props.consultation.id,
            selectedUser: "m" + props.consultation.medecin.id
          }, response => {});
        } else {
          setEtatRequest(oldData => {
            return _objectSpread(_objectSpread({}, oldData), {}, {
              sending: false,
              success: false,
              donneIncorrect: true
            });
          });
        }
      }).catch(err => {
        setEtatRequest(oldData => {
          return _objectSpread(_objectSpread({}, oldData), {}, {
            sending: false,
            success: false,
            donneIncorrect: true
          });
        });
      });
    } catch (err) {
      console.log(err);
      setEtatRequest(oldData => {
        return _objectSpread(_objectSpread({}, oldData), {}, {
          sending: false,
          success: false,
          donneIncorrect: true
        });
      });
    }
  };

  const deleteImageHandle = async file => {
    let response = await fetch(`${EndPoint["a" /* default */].BACKEND_URL}/upload/document`, {
      method: 'DELETE',
      body: JSON.stringify({
        path: file.path,
        id: file.id
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `token ${userData.token}`
      }
    });
    response.json().then(response => {
      let index = savedPictures.findIndex(fl => fl.id === file.id);
      setSavedPictures(oldFiles => {
        let clone = [...oldFiles];
        clone.splice(index, 1);
        return clone;
      });
    }).catch(error => {});
  };

  const removeImageHandle = file => {
    let index = files.findIndex(fl => fl.id === file.id);
    setFiles(oldFiles => {
      let clone = [...oldFiles];
      clone.splice(index, 1);
      return clone;
    });
  };

  const onDrop = Object(external_react_["useCallback"])((acceptedFiles, rejectedFiles) => {
    rejectedFiles.map(rejectedFile => {
      if (rejectedFile.file.type.split('/')[0] === "image") {
        const reader = new FileReader();
        reader.readAsDataURL(rejectedFile.file);

        reader.onloadend = () => {
          let newFile = {
            filePath: reader.result,
            realName: rejectedFile.file.name,
            type: 'file',
            fileType: rejectedFile.file.type.split('/')[0]
          };
          setRejectedFiles(existing => [...existing, {
            file: newFile,
            errors: rejectedFile.errors
          }]);
        };
      } else {
        let newFile = {
          realName: rejectedFile.file.name,
          type: 'file',
          fileType: rejectedFile.file.type.split('/')[0]
        };
        setRejectedFiles(existing => [...existing, {
          file: newFile,
          errors: rejectedFile.errors
        }]);
      }
    });
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        let newFile = {
          filePath: reader.result,
          realName: file.name,
          type: 'file',
          fileType: "image",
          kind: file.type
        };
        setFiles(existing => [...existing, newFile]);
      };
    });
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = Object(external_react_dropzone_["useDropzone"])({
    onDrop,
    accept: 'image/jpeg, image/png, image/jpg, application/pdf'
  });
  const style = Object(external_react_["useMemo"])(() => _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, baseStyle), isDragActive ? activeStyle : {}), isDragAccept ? acceptStyle : {}), isDragReject ? rejectStyle : {}), [isDragActive, isDragReject, isDragAccept]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
    onSubmit: handleSubmit,
    autoComplete: "off",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
      children: [savedPictures.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
        className: "mb-3",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
          variant: "h5",
          component: "h5",
          children: " Documents d\xE9j\xE0 partager dans cette consultation "
        })
      }) : null, savedPictures.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
        className: "images-saved",
        children: savedPictures.map((file, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            className: "mt-5",
            lg: "2",
            md: "4",
            xs: "6",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "image-saved",
              children: [file.type === "application/pdf" ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                href: EndPoint["a" /* default */].BACKEND_URL + file.path,
                download: file.name,
                target: "_blank",
                rel: "noopener noreferrer",
                children: ["  ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "/image/pdf.png",
                  alt: "...",
                  className: "img-fluid"
                }), " "]
              }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(ReactFancyBox["a" /* default */], {
                thumbnail: `${EndPoint["a" /* default */].BACKEND_URL}${file.path}`,
                showCloseBtn: false,
                image: `${EndPoint["a" /* default */].BACKEND_URL}${file.path}`
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                onClick: () => deleteImageHandle(file),
                className: "delete-button",
                children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(ti_["TiDeleteOutline"], {}), " "]
              })]
            })
          }, index);
        })
      }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
        className: "align-items-center justify-content-around mt-4 ",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", _objectSpread(_objectSpread({}, getRootProps({
          style,
          className: "dropzone"
        })), {}, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", _objectSpread({}, getInputProps())), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "Glisser d\xE9poser des fichiers ici ou"
          }), " ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            children: " PARCOURIR SUR MON ORDINATEUR "
          })]
        }))
      }), canceledPictures.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
        className: "mt-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
          variant: "h5",
          component: "h5",
          color: "error",
          children: " Ces documents n'on pas pus s'enregistrer au sein de nos serveur. essayer ult\xE9ri\xE9rement o\xF9 bien essayer d'autre images "
        })
      }) : null, canceledPictures.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
        className: "images-canceled",
        children: canceledPictures.map((file, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            className: "mt-5",
            lg: "2",
            md: "4",
            xs: "6",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "image-canceled",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ReactFancyBox["a" /* default */], {
                thumbnail: file.filePath,
                showCloseBtn: false,
                image: file.filePath
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
                color: "error",
                children: " Le serveur n'a pas pus suporter ces fichier "
              })
            })]
          }, index);
        })
      }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
        className: "align-items-center justify-content-around mt-4 ",
        children: files.map((file, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            className: "mt-5",
            lg: "6",
            md: "6",
            xs: "6",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "selecting-img-container",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ReactFancyBox["a" /* default */], {
                thumbnail: file.kind === "application/pdf" ? '/image/fileaccepted.png' : file.filePath,
                showCloseBtn: false,
                image: file.kind === "application/pdf" ? '/image/fileaccepted.png' : file.filePath
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                onClick: () => removeImageHandle(file),
                className: "delete-button",
                children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(ti_["TiDeleteOutline"], {}), " "]
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                className: "mt-3",
                children: [" ", file.realName, " "]
              })
            })]
          }, index);
        })
      }), rejectedFiles.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
        className: "mt-5",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
          variant: "h5",
          component: "h5",
          color: "error",
          children: " Fichier non acc\xE9pter ils ne seront pas enregistrer sur le serveur "
        })
      }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
        className: "align-items-center mt-4 ",
        children: rejectedFiles.map((rejectedFile, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            className: "",
            lg: "6",
            md: "12",
            xs: "12",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "rejected-img-container",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/img/file-rejected.png",
                alt: "fichier rejeter",
                className: "img-fluid"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "mt-3",
                children: rejectedFile.errors.map((err, ind) => {
                  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    children: err.code === "file-invalid-type" ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
                      color: "error",
                      children: [" Ce fichier ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                        className: "type-file-span",
                        children: [" ", rejectedFile.file.realName, " "]
                      }), " est de type ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                        className: "type-file-span",
                        children: [" ", rejectedFile.file.fileType, " "]
                      }), " . Seulement les images ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "type-file-span",
                        children: "png, jpg et jpeg et document pdf  "
                      }), "  sont acc\xE9pter "]
                    }) : ""
                  }, ind);
                })
              })
            })]
          }, index);
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Collapse"], {
          in: etatRequest.donneIncorecte,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Alert"], {
              variant: "danger",
              children: "Un ou plusieur document n'a pas pus enregistrer"
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Collapse"], {
          in: etatRequest.success,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Alert"], {
              variant: "success",
              children: "Les document sont enregistrer avec succ\xE9s"
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
        className: "align-items-center justify-content-around mt-4 ",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SubmitButton["a" /* default */], {
          disabled: files.length <= 0,
          sending: etatRequest.sending,
          successRequest: etatRequest.success,
          type: "submit",
          color: "primary",
          children: " Enregistrer "
        })
      })]
    })
  });
}
// CONCATENATED MODULE: ./components/Chat/messages/index.jsx




const Messages = ({
  messages,
  storedMessages
}) => {
  const messagesEndRef = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(() => {
    if (messagesEndRef !== null) {
      if (messagesEndRef !== null) {
        let timer = setTimeout(() => {
          if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "start"
            });
          }
        }, 200);
        return () => clearTimeout(timer);
      }
    }
  }, [messages]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "content",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "messages",
      children: [storedMessages ? storedMessages.map((message, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(StoredMessage, {
        message: message
      }, i)) : null, messages ? messages.map((message, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Message, {
        message: message
      }, i)) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        ref: messagesEndRef
      })]
    })
  });
};

/* harmony default export */ var Chat_messages = (Messages);

const Message = ({
  message: {
    data,
    isSentByCurrentUser
  }
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: isSentByCurrentUser ? "messageContainer sent" : "messageContainer replies",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "message",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "messageText",
        children: data.message
      })
    })
  });
};

const StoredMessage = ({
  message
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: message.sentTo === "medecin" ? "messageContainer sent" : "messageContainer replies",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "message",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "messageText",
        children: message.message
      })
    })
  });
};
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__("7v8O");

// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__("C9pf");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/Accordion"
var Accordion_ = __webpack_require__("VuiC");
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);

// EXTERNAL MODULE: external "@material-ui/core/AccordionDetails"
var AccordionDetails_ = __webpack_require__("Jro0");
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_);

// EXTERNAL MODULE: external "@material-ui/core/AccordionSummary"
var AccordionSummary_ = __webpack_require__("cVsR");
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__("j3R+");

// CONCATENATED MODULE: ./components/Chat/infoBar/index.jsx











 // import patientAvatar from 'assets/img/patient.png'


const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    width: "100%"
  },
  accordion: {
    backgroundColor: "#008ea2",
    borderRadius: "4px 4px 0 0",
    boxShadow: "none"
  },
  accordionContent: {
    "& .MuiAccordionSummary-content": {
      margin: 0
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(18),
    color: "#fff"
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20
  },
  details: {
    alignItems: 'center'
  },
  column: {
    flexBasis: '33.33%',
    display: "flex",
    alignItems: "center"
  },
  column2: {
    flexBasis: '50%',
    padding: 10
  },
  columnend: {
    justifyContent: "flex-end"
  },
  columncenter: {
    justifyContent: "center"
  },
  title: {
    fontSize: theme.typography.pxToRem(18),
    color: "#fff"
  },
  label: {
    fontSize: theme.typography.pxToRem(16),
    color: "#fff",
    margin: 0
  },
  paragraph: {
    fontSize: theme.typography.pxToRem(14),
    color: "#eee",
    margin: 0,
    marginLeft: 15
  }
}));

const InfoBar = ({
  medecin,
  onConsuting,
  teleconsultation
}) => {
  const classes = useStyles();

  const handleVideoCall = e => {
    e.stopPropagation();
  };

  const handleExpand = () => {};

  if (!medecin) {
    return null;
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Accordion_default.a, {
      className: classes.accordion,
      square: true //  expanded={false}
      //   onClick={handleExpand}
      ,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(AccordionSummary_default.a, {
        className: classes.accordionContent,
        expandIcon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(md_["MdExpandMore"], {}),
        "aria-controls": "panel1c-content",
        id: "panel1c-header",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: classes.column,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "leftInnerContainer",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(bs_["BsCircleFill"], {
              className: "circle_online"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "profile",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: "profile-img",
                src: medecin.image ? medecin.image : "/image/doctor.png",
                alt: ""
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: external_clsx_default()(classes.column, classes.columncenter),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Typography_default.a, {
            className: classes.secondaryHeading,
            children: medecin.nom ? medecin.nom + " " + medecin.prenom : "Aucun nom à afficher"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: external_clsx_default()(classes.column, classes.columnend)
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AccordionDetails_default.a, {
        className: classes.details,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: classes.column2,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
            className: "m-0",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: classes.title,
              children: " Information du medecin "
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
            className: "align-items-center m-0",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              className: classes.label,
              children: " T\xE9l\xE9phone: "
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: classes.paragraph,
              children: [" ", teleconsultation.medecin ? teleconsultation.medecin.phone : " "]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
            className: "align-items-center m-0",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              className: classes.label,
              children: " Email: "
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: classes.paragraph,
              children: [" ", teleconsultation.medecin ? teleconsultation.medecin.email : " "]
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: classes.column2,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
            className: "m-0",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: classes.title,
              children: " Information du rendez-vous "
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
            className: "align-items-center m-0",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              className: classes.label,
              children: " Titre: "
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: classes.paragraph,
              children: [" ", teleconsultation.title ? teleconsultation.title : "Aucun titre mentionnée", " "]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
            className: "align-items-center m-0",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              className: classes.label,
              children: " Description: "
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: classes.paragraph,
              children: [" ", teleconsultation.description ? teleconsultation.description : "Aucune déscription mentionnée", " "]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
            className: "align-items-center m-0",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
              className: classes.label,
              children: " Type de consultation: "
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              className: classes.paragraph,
              children: [" ", teleconsultation.tarif ? teleconsultation.tarif.name : "Aucune catégorie mentionnée", " "]
            })]
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ var infoBar = (InfoBar);
// EXTERNAL MODULE: external "simple-peer"
var external_simple_peer_ = __webpack_require__("F+5j");
var external_simple_peer_default = /*#__PURE__*/__webpack_require__.n(external_simple_peer_);

// EXTERNAL MODULE: external "react-autobind"
var external_react_autobind_ = __webpack_require__("bleF");
var external_react_autobind_default = /*#__PURE__*/__webpack_require__.n(external_react_autobind_);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./components/Chat/videoChat.jsx




 // import Axios from 'axios'
// import baseUrl from './../../config'



 // import callerTone from './../../assets/media/callertone.mp3'
// import LogoPng from './../../assets/img/pelia_logo.png'

class videoChat_ElemenetsCall extends external_react_["Component"] {
  constructor(props) {
    super(props);
    external_react_autobind_default()(this);
    this.state = {
      stream: null,
      respondingProcess: true,
      errorMedia: {
        error: false
      }
    };
  }

  componentDidMount() {
    const constraints = {
      video: {
        facingMode: "user",
        width: 640,
        height: 480,
        cursor: "motion"
      },
      audio: true
    };
    this.initiatorCallVideo(constraints).then(stream => {
      window.streamReference = stream;
      this.props.socket.emit('patient-ready', {
        selectedUser: 'm' + this.props.medecin.id
      }, () => {}); // let videoStream = new MediaStream(stream.getVideoTracks(), options);

      try {
        this.myVideo.srcObject = stream;
      } catch (e) {
        this.myVideo.src = URL.createObjectURL(stream);
      }

      this.myVideo.play(); // try {
      //     this.callerTone.src = callerTone
      // } catch (e) {
      //     this.callerTone.srcObject =  URL.createObjectURL(callerTone) 
      // }
      // this.callerTone.play();

      this.setState({
        stream: stream,
        respondingProcess: false
      });
    }).catch(err => {
      this.cameraAuthDenied();
      console.log(`Unable to fetsh stream ${err}`);
    });
    this.setupSocket();
  }

  componentWillUnmount() {
    this.props.socket.removeAllListeners('patient-signal-call');
    this.props.socket.removeAllListeners('patient-call');
    this.props.socket.removeAllListeners('reject-call-patient');

    if (this.state.peer) {
      this.state.peer.destroy();
    }
  }

  setupSocket() {
    let socket = this.props.socket;
    socket.on('patient-call', response => {});
    socket.on('reject-call-patient', response => {
      this.stopStream();
      this.setState({
        respondingProcess: false,
        passingCall: false,
        responding: false
      });
      this.props.setonCalling(false);
    });
    socket.on('patient-signal-call', ({
      data
    }) => {
      this.setState({
        responding: true
      });
      this.state.peer.signal(data);
    });
  }

  cameraAuthDenied(reason) {
    this.setState({
      errorMedia: {
        error: true,
        reason
      }
    });
  }

  initiatorCallVideo(constraints) {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        resolve(stream);
      }).catch(err => {
        reject(err);
      });
    });
  }

  stopStream() {
    if (this.callerTone !== null) {
      this.callerTone.muted = true;
      this.callerTone = null;
    }

    if (!window.streamReference) return;
    window.streamReference.getAudioTracks().forEach(track => {
      track.stop();
    });
    window.streamReference.getVideoTracks().forEach(track => {
      track.stop();
    });
    window.streamReference = null;
  }

  confirmCall() {
    const peer = new external_simple_peer_default.a({
      initiator: true,
      stream: this.state.stream,
      config: {
        iceServers: [{
          urls: "stun:pelia.ma:3478"
        }, {
          urls: "turn:pelia.ma:3478",
          username: "peliaturn",
          credential: "ejfLUNE6C=fM&4P!"
        }]
      },
      trickle: false
    });
    peer.on('signal', data => {
      this.props.socket.emit('confirm-call', {
        selectedUser: 'm' + this.props.medecin.id,
        data
      }, () => {});
    });
    peer.on('stream', stream => {
      this.callerTone.pause();

      try {
        this.userVideo.srcObject = stream;
      } catch (e) {
        this.userVideo.src = URL.createObjectURL(stream);
      }

      this.userVideo.play();
      this.setState({
        passingCall: true,
        respondingProcess: false,
        timeAppel: Date.now()
      });
    });
    peer.on('close', () => {
      this.stopStream();
      this.setState({
        respondingProcess: false,
        passingCall: false,
        responding: false
      }); // this.props.setonCalling(false)

      if (this.state.peer) {
        this.state.peer.destroy();
      }
    });
    peer.on('error', err => {
      console.log(`vous avez perdue la connextion avec votre patient ${err}`);
    });
    this.setState({
      respondingProcess: true,
      peer
    });
  }

  rejectCall() {
    this.stopStream();
    this.setState({
      respondingProcess: false,
      passingCall: false,
      responding: false
    });
    this.props.socket.emit('patient-reject-call', {
      selectedUser: 'm' + this.props.medecin.id
    });
    this.props.setonCalling(false);
  }

  render() {
    let {
      responding,
      passingCall,
      respondingProcess
    } = this.state;
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "video patient",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("audio", {
        ref: ref => this.callerTone = ref,
        playsInline: true,
        loop: true
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: responding ? "repondre video-container" : "video-container",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("video", {
          id: "peerVid",
          ref: ref => {
            this.userVideo = ref;
          },
          playsInline: true,
          autoPlay: true
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          className: "justify-content-center m-0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("video", {
            id: "myVid",
            muted: true,
            ref: ref => {
              this.myVideo = ref;
            },
            playsInline: true,
            autoPlay: true
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          className: !passingCall ? "responding process m-0" : "responding m-0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
            className: "p-0",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "layer"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
              className: "mt-5",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Collapse"], {
                in: this.state.errorMedia.error,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  id: "example-collapse-text",
                  style: {
                    zIndex: 999
                  },
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Alert"], {
                    variant: "danger",
                    children: "Vous ne autoris\xE9 pas l'acc\xE9s au camera pour le site ocp.pelia.ma. Changer vos param\xE9tre pour pouvoir communiquer avec votre m\xE9decin"
                  })
                })
              })
            }), !passingCall && /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
              className: "text-center d-flex justify-content-around w-100 p-4 ml-1 mt-5",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "text-center caller ",
                style: {
                  maxHeight: "20%"
                },
                children: " Un appel entrant de la part de votre m\xE9decin"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
              className: "end-call",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonProcess, {
                className: "action",
                onClick: this.rejectCall,
                type: "button",
                variant: "danger",
                sending: respondingProcess,
                IconSuccess: fa_["FaCheck"],
                Icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaPhoneSlash"], {
                  size: "1.5rem"
                })
              }), !passingCall && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonProcess, {
                className: "action",
                onClick: this.confirmCall,
                type: "button",
                variant: "success",
                sending: respondingProcess,
                IconSuccess: fa_["FaCheck"],
                Icon: /*#__PURE__*/Object(jsx_runtime_["jsx"])(fa_["FaPhone"], {
                  size: "1.5rem"
                })
              })]
            })]
          })
        })]
      })]
    });
  }

}

function ButtonProcess(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      position: 'relative'
    },
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Button"], {
      onClick: props.onClick,
      className: props.className,
      type: props.type,
      variant: props.variant,
      disabled: props.sending,
      children: props.Icon
    }), props.sending && /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["CircularProgress"], {
      size: 24,
      style: {
        color: "#8dc63f",
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
      }
    })]
  });
}
// CONCATENATED MODULE: ./components/Chat/sendingMessage/index.jsx


 // import {isAndroid, isBrowser} from 'react-device-detect'




const Input = ({
  setMessage,
  sendMessage,
  message,
  active,
  inputKey
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("form", {
    className: "messageForm",
    autoComplete: "off",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
      className: "chatContainer m-0",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
        lg: "10",
        md: "10",
        className: "input_width pl-5",
        children: active ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
          type: "text",
          name: "message",
          className: "inputChat",
          placeholder: "Ecrivez votre message ici",
          style: {
            width: "100%"
          },
          value: message,
          autoFocus: true,
          autoComplete: "off",
          onChange: ({
            target: {
              value
            }
          }) => setMessage(value.replace(/^\s+/g, '')),
          onKeyPress: event => event.key === 'Enter' && sendMessage(event)
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "inputChat",
          children: " Cette consultation est t\xE9rminer vous pouvez plus envoyer des m\xE9ssage "
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
        lg: "2",
        className: "btn_width",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          className: "justify-content-around",
          children: active ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
            className: "SendMsgBtn",
            type: "button",
            onClick: e => sendMessage(e),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(fi_["FiSend"], {
              size: '1.5rem'
            }), " "]
          }) : null
        })
      })]
    })
  });
};

/* harmony default export */ var sendingMessage = (Input);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/Chat/CountDown/CountDown.js



function CountDown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import Cookies from 'js-cookie'
// import content from './../../Content'
// let lang = Cookies.get('lang')
// lang = (lang === undefined)? "fr" : lang

class CountDown_Countdown extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    CountDown_defineProperty(this, "state", {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
      difference: this.props.difference
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.difference >= 1000) {
        let diff = this.state.difference - 1000;
        const days = external_moment_default()(diff).format('DDD') - 1;
        const hours = external_moment_default()(diff).format('HH');
        const minutes = external_moment_default()(diff).format('mm');
        const seconds = external_moment_default()(diff).format('s');
        this.setState({
          days,
          hours,
          minutes,
          seconds,
          difference: diff
        });
      } else {// clearInterval(this.interval)
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const {
      days,
      hours,
      minutes,
      seconds
    } = this.state;
    const daysRadius = mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
        children: [" La consultation commancera  ", external_moment_default.a.utc(this.props.now + this.props.difference).calendar(), " "]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "countdown-wrapper",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "countdown-item",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SVGCircle, {
            radius: daysRadius
          }), Math.floor(days), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: " jours "
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "countdown-item",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SVGCircle, {
            radius: hoursRadius
          }), Math.floor(hours), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: " heurs "
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "countdown-item",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SVGCircle, {
            radius: minutesRadius
          }), Math.floor(minutes), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: " minutes "
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "countdown-item",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SVGCircle, {
            radius: secondsRadius
          }), seconds, /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            children: " secondes "
          })]
        })]
      })]
    });
  }

}

function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const SVGCircle = ({
  radius
}) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
  className: "countdown-svg",
  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
    fill: "none",
    stroke: "#333",
    strokeWidth: "4",
    d: describeArc(50, 50, 48, 0, radius)
  })
});

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  var d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
  return d;
}
// EXTERNAL MODULE: ./components/CustomButtons/Button.js
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./components/Checkbox/Checkbox.js + 1 modules
var Checkbox = __webpack_require__("Udb8");

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./contentFR.js
var contentFR = __webpack_require__("kv0W");

// EXTERNAL MODULE: ./contentEN.js
var contentEN = __webpack_require__("FT3n");

// EXTERNAL MODULE: ./contentAR.js
var contentAR = __webpack_require__("ZkZy");

// CONCATENATED MODULE: ./pages/consultation/[id].js



function _id_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _id_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _id_ownKeys(Object(source), true).forEach(function (key) { _id_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _id_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _id_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import Config from 'Config'


















 // export async function getServerSideProps(context) {
//     const res = await fetch(`${Config.BACKEND_URL}/consultation/${context.params.id}`)
//     const data = await res.json();
//     console.log(data)
//     if(!data){
//         return {
//             props: {teleconsultation: {}},
//           }
//     }
//     return {
//       props: {teleconsultation: data.consultation},
//     }
// }

async function getServerSideProps(context) {
  const {
    req
  } = context;
  const cookies = getAppCookies(req);

  if (!cookies.token) {
    return {
      props: {
        isAuth: false
      }
    };
  } else {
    const res = await fetch(`${EndPoint["a" /* default */].BACKEND_URL}/consultation/${context.params.id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `token ${cookies.token}`
      }
    });
    const data = await res.json();
    return {
      props: {
        isAuth: true,
        teleconsultation: data.consultation
      }
    };
  }
}

function getAppCookies(req) {
  const parsedItems = {};

  if (req.headers.cookie) {
    const cookiesItems = req.headers.cookie.split('; ');
    cookiesItems.forEach(cookies => {
      const parsedItem = cookies.split('=');
      parsedItems[parsedItem[0]] = decodeURI(parsedItem[1]);
    });
  }

  return parsedItems;
}

function ConsultationContainer({
  teleconsultation,
  socket
}) {
  const {
    0: addRapport,
    1: setAddRapport
  } = Object(external_react_["useState"])(false);
  const {
    0: fieldValidationErrors,
    1: setFieldValidationErrors
  } = Object(external_react_["useState"])({});
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    isCompleted: false
  });
  const {
    0: response,
    1: setResponse
  } = Object(external_react_["useState"])({
    sending: false,
    success: false,
    donneIncorecte: false
  });
  const router = Object(router_["useRouter"])();
  const {
    locale
  } = router;
  const content = locale === "ar" ? contentAR["a" /* default */] : locale === "en" ? contentEN["a" /* default */] : contentFR["a" /* default */];
  const {
    userData
  } = Object(AuthContext["b" /* useAuth */])();

  const handleSubmit = e => {
    e.preventDefault();
    setResponse(old => {
      return _id_objectSpread(_id_objectSpread({}, old), {}, {
        sending: true
      });
    });
    let data = state;
    fetch(`${EndPoint["a" /* default */].BACKEND_URL}/feedback`, {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${userData.token}`
      },
      body: JSON.stringify(_id_objectSpread(_id_objectSpread({}, data), {}, {
        consultationId: teleconsultation.id
      }))
    }).then(r => r.json().then(res => {
      if (!res.error) {
        // props.setUserData(res);
        setResponse({
          sending: false,
          success: true,
          donneIncorecte: false
        });
      } else {
        setResponse({
          sending: false,
          success: false,
          donneIncorecte: true
        });

        if (res.validator) {} else {}
      }
    })).catch(error => {
      console.log(error);
      setResponse({
        sending: false,
        success: false,
        donneIncorecte: true
      });
    });
  };

  const validateField = () => {};

  const handleChange = ({
    target: {
      value,
      name
    }
  }) => {
    if (name === "isCompleted") {
      setState(old => {
        return _id_objectSpread(_id_objectSpread({}, old), {}, {
          isCompleted: !state.isCompleted
        });
      });
    } else {
      setState(old => {
        return _id_objectSpread(_id_objectSpread({}, old), {}, {
          [name]: value
        });
      });
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "teleconsultation",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
      className: "m-0",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
        lg: "6",
        md: 12,
        sm: 12,
        xs: 12,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChatContainer, {
          teleconsultation: teleconsultation,
          socket: socket
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
        lg: "6",
        md: 12,
        sm: 12,
        xs: 12,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* default */], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardBody["a" /* default */], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: " Document \xE0 partager dans cette consultation "
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Images, {
                documents: teleconsultation ? teleconsultation.documents : [],
                socket: socket,
                consultation: teleconsultation
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Card["a" /* default */], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CardBody["a" /* default */], {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
                children: " Ajouter un rapport  "
              }), addRapport ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
                  onSubmit: handleSubmit,
                  autoComplete: "off",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
                      xs: "12",
                      md: "6",
                      className: "mt-3",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, {
                        error: fieldValidationErrors.nomError,
                        placeholder: "",
                        label: content.report.labelNom,
                        required: false,
                        variant: "outlined",
                        name: "type",
                        onBlur: validateField,
                        value: state.nom,
                        onChange: handleChange
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
                      xs: "12",
                      md: "12",
                      className: "mt-3",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, {
                        placeholder: "",
                        variant: "outlined",
                        required: false,
                        error: fieldValidationErrors.prenomError,
                        label: content.report.labelPrenom,
                        onBlur: validateField,
                        name: "description",
                        fullWidth: true,
                        value: state.description,
                        onChange: handleChange
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
                      xs: "12",
                      md: "6",
                      className: "mt-3",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Checkbox["a" /* default */], {
                        placeholder: "",
                        variant: "outlined",
                        required: false,
                        error: fieldValidationErrors.prenomError,
                        label: content.report.labelEnd,
                        name: "isCompleted",
                        checked: state.isCompleted,
                        rtl: locale === "ar" ? true : false,
                        onChange: handleChange
                      })
                    })]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
                    className: "justify-content-center",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Collapse"], {
                      in: response.donneIncorecte,
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "mt-5",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Alert"], {
                          variant: "danger",
                          children: content.report.errorSignup
                        })
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
                    className: "justify-content-center",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Collapse"], {
                      in: response.success,
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "mt-5",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Alert"], {
                          variant: "success",
                          children: content.report.successSignup
                        })
                      })
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
                    className: "align-items-center justify-content-around mt-4 ",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
                      type: "submit",
                      color: "primary",
                      children: [" ", content.report.signup, " "]
                    })
                  })]
                })
              }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                  color: "primary",
                  onClick: () => setAddRapport(true),
                  children: " Ajouter rapport "
                })
              })]
            })
          })
        })]
      })]
    })
  });
}

function ChatContainer(props) {
  const {
    0: onConsuting,
    1: setonConsuting
  } = Object(external_react_["useState"])(false);
  const {
    0: onCalling,
    1: setonCalling
  } = Object(external_react_["useState"])(false);
  const {
    0: difference,
    1: setdifference
  } = Object(external_react_["useState"])(0);
  const {
    0: now,
    1: setnow
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    if (props.socket) {
      props.socket.on("call-entring", () => {
        setonCalling(true);
      });
      props.socket.emit('check-time', {
        consultationId: props.teleconsultation.id
      }, response => {
        setdifference(response.diff);
        setnow(response.now);
        setonConsuting(response.isTime);
      });
    }
  }, [props.socket]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: props.teleconsultation ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
      className: "justify-content-around m-0",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
        lg: "12",
        className: "bg-white p-0 discussion-container",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          className: "m-0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(infoBar, {
            onConsuting: onConsuting,
            medecin: props.teleconsultation.medecin,
            teleconsultation: props.teleconsultation
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
          className: "discussion m-0",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProcessZone, _id_objectSpread({
            onConsuting: onConsuting,
            medecin: props.teleconsultation.medecin,
            difference: difference,
            now: now,
            setonCalling: setonCalling,
            onCalling: onCalling
          }, props))
        })]
      })
    }) : null
  });
}

function ProcessZone(props) {
  Object(external_react_["useEffect"])(() => {
    if (navigator) {
      if (navigator.permissions) {
        navigator.permissions.query({
          name: "camera"
        }).then(res => console.log(res), e => console.log(e.name + ": " + e.message)).catch(err => {
          console.log(e.name + ": " + e.message);
        });
        navigator.permissions.query({
          name: "microphone"
        }).then(({
          state
        }) => console.log(state), e => console.log(e.name + ": " + e.message)); // navigator.mediaDevices.enumerateDevices()
        // .then(devices => {
        //     const filtered = devices.filter(device => device.kind === 'videoinput');
        //     // console.log('Cameras found', filtered)
        //     // callback(filtered);
        // })
        // .catch(err=> {
        //     console.log(`Unable to fetsh stream ${err}`)
        // })
      }
    }

    return () => {};
  }, []);

  if (props.onCalling) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(videoChat_ElemenetsCall, _id_objectSpread({}, props));
  }

  if (props.onConsuting) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Chat, _id_objectSpread({}, props));
  }

  switch (true) {
    case props.difference > 0:
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(FutureConsultation, {
        difference: props.difference,
        now: props.now
      });

    case props.difference < 0:
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(OldConsultation, {});

    default:
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: " Nous avons pas pus d\xE9duire le cr\xE9neau de cette consultation. Veillez rafr\xE9chir la page pour r\xE9ssayer "
        })
      });
  }
}

function Chat(props) {
  const {
    0: messages,
    1: setMessages
  } = Object(external_react_["useState"])([]);
  const {
    0: message,
    1: setMessage
  } = Object(external_react_["useState"])("");

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      setMessage('');
      let data = {
        message: message,
        type: "text",
        sentBy: "patient",
        sentTo: "medecin",
        selectedUser: "m" + props.medecin.id,
        consultationId: props.teleconsultation.id
      };
      setMessages(messages => [...messages, {
        isSentByCurrentUser: true,
        data
      }]);
      props.socket.emit('sendMessage', data, () => {});
    }
  };

  Object(external_react_["useEffect"])(() => {
    if (props.socket) {
      props.socket.on('message', message => {
        setMessages(messages => [...messages, message]);
      });
    }

    return () => {
      if (props.socket) {
        props.socket.removeAllListeners('message');
      }
    };
  }, [props.socket]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
    lg: "12",
    md: "12",
    sm: "12",
    xs: "12",
    className: "chat-messages p-0",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Chat_messages, {
      messages: messages,
      user: props.medecin,
      storedMessages: props.teleconsultation.messages
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(sendingMessage, {
      message: message,
      setMessage: setMessage,
      sendMessage: sendMessage,
      active: props.teleconsultation.active
    })]
  });
}

function FutureConsultation({
  difference,
  now
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
    lg: "12",
    md: "12",
    sm: "12",
    xs: "12",
    className: "chat-messages p-5",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
      className: "justify-content-center align-items-center h-100",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CountDown_Countdown, {
        difference: difference,
        now: now
      })
    })
  });
}

function OldConsultation(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
    lg: "12",
    md: "12",
    sm: "12",
    xs: "12",
    className: "chat-messages p-0",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
      className: "justify-content-center align-items-center h-100",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: " consultation passer "
        })
      })
    })
  });
}

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ })

/******/ });