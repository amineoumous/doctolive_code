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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./EndPoint.js":
/*!*********************!*\
  !*** ./EndPoint.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const LocalConfig = {
  BACKEND_URL: "http://localhost:4400",
  LOCAL_URL: "http://localhost:5000/",
  apiKey: "AIzaSyD6tk8dFF4GDnB0iABV95Zs_CCOZ92K9sw"
};
const prodConfig = {
  BACKEND_URL: "https://api.doctolive.ma",
  apiKey: "AIzaSyD6tk8dFF4GDnB0iABV95Zs_CCOZ92K9sw"
};
/* harmony default export */ __webpack_exports__["default"] = (prodConfig);

/***/ }),

/***/ "./assets/jss/PatientPublicNavbarStyle.js":
/*!************************************************!*\
  !*** ./assets/jss/PatientPublicNavbarStyle.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkboxAdnRadioStyle = {
  navWrap: {
    position: "relative",
    width: "100%",
    top: 0,
    padding: 0,
    border: 0,
    borderRadius: 0,
    height: "120px",
    backgroundColor: "#1ab9b9",
    transition: "background-color 0.3s"
  },
  navContent: {
    padding: "0 20px",
    height: "100%",
    // display: -webkit-box,
    // display: -webkit-flex,
    // display: -ms-flexbox,
    display: "flex",
    width: "100%",
    // -webkit-box-pack: justify,
    // -webkit-justify-content: space-between,
    // -ms-flex-pack: justify,
    justifyContent: "space-between"
  },
  navbarNav: {
    "& .nav-item .nav-link": {
      color: "#fff !important",
      cursor: "pointer",
      textDecoration: "none",
      padding: "0 20px 0",
      fontWeight: 500,
      display: "flex",
      alignItems: "center",
      flexGrow: 0,
      fontSize: 14,
      height: "100%",
      flexShrink: 0,
      userSelect: "none"
    },
    "& .nav-item .nav-link svg": {
      width: 16,
      height: 16,
      marginRight: "8px !important"
    },
    "& .professionel": {
      "& .nav-link": {
        color: "#1AB9B9 !important"
      },
      "& span": {
        backgroundColor: "#fff",
        borderRadius: 8
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (checkboxAdnRadioStyle);

/***/ }),

/***/ "./assets/jss/buttonStyle.js":
/*!***********************************!*\
  !*** ./assets/jss/buttonStyle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./assets/jss/variables.js");

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.12)",
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
      color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      outline: 0,
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]) + ", 0.2)"
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
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0]
    }
  },
  rose: {
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]) + ", 0.2)"
    }
  },
  primary: {
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]) + ", 0.2)"
    }
  },
  info: {
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]) + ", 0.2)"
    }
  },
  success: {
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]) + ", 0.2)"
    }
  },
  warning: {
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]) + ", 0.2)"
    }
  },
  danger: {
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
    boxShadow: "0 2px 2px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
      boxShadow: "0 14px 26px -12px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 8px 10px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]) + ", 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover": {
      color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      background: "transparent",
      boxShadow: "none"
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][0]
      }
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][0]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][0]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0]
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
      color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][0],
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
/* harmony default export */ __webpack_exports__["default"] = (buttonStyle);

/***/ }),

/***/ "./assets/jss/headerLinksStyle.js":
/*!****************************************!*\
  !*** ./assets/jss/headerLinksStyle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./assets/jss/variables.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const headerLinksStyle = theme => _objectSpread(_objectSpread({}, dropdownStyle(theme)), {}, {
  appBar: {
    backgroundColor: _variables__WEBPACK_IMPORTED_MODULE_0__["infoColor"][0],
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: _variables__WEBPACK_IMPORTED_MODULE_0__["grayColor"][7],
    border: "0",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block"
  },
  container: _objectSpread(_objectSpread({}, _variables__WEBPACK_IMPORTED_MODULE_0__["container"]), {}, {
    minHeight: "50px"
  }),
  search: {
    "& > div": {
      marginTop: "0"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 15px !important",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "0!important",
      width: "60%",
      marginTop: "40px",
      "& input": {
        color: _variables__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
      }
    }
  },
  linkText: _objectSpread(_objectSpread({
    color: "#fff",
    zIndex: "4"
  }, _variables__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    fontSize: "14px",
    margin: "0px"
  }),
  buttonLink: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "10px 15px 0",
      width: "-webkit-fill-available",
      "& svg": {
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "24px",
        lineHeight: "30px",
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& > span": {
        justifyContent: "flex-start",
        width: "100%"
      }
    }
  },
  searchButton: {
    [theme.breakpoints.down("sm")]: {
      top: "-50px !important",
      marginRight: "22px",
      float: "right"
    }
  },
  margin: {
    zIndex: "4",
    margin: "0"
  },
  searchIcon: {
    width: "17px",
    zIndex: "4"
  },
  notifications: {
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "2px",
      border: "1px solid " + _variables__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      right: "4px",
      fontSize: "9px",
      background: _variables__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][0],
      color: _variables__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "16px",
      verticalAlign: "middle",
      display: "block"
    },
    [theme.breakpoints.down("sm")]: _objectSpread(_objectSpread({}, _variables__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
      fontSize: "14px",
      marginRight: "8px"
    })
  },
  manager: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    display: "inline-block"
  },
  searchWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "-webkit-fill-available",
      margin: "10px 15px 0"
    },
    display: "inline-block"
  },
  transparent: {
    backgroundColor: "transparent",
    color: _variables__WEBPACK_IMPORTED_MODULE_0__["whiteColor"] // ...defaultBoxShadow

  }
});

/* harmony default export */ __webpack_exports__["default"] = (headerLinksStyle);

const dropdownStyle = theme => ({
  buttonLink: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      marginLeft: "30px",
      width: "auto"
    }
  },
  links: {
    width: "20px",
    height: "20px",
    zIndex: "4",
    [theme.breakpoints.down("md")]: {
      display: "block",
      width: "30px",
      height: "30px",
      color: _variables__WEBPACK_IMPORTED_MODULE_0__["grayColor"][9],
      marginRight: "15px"
    }
  },
  linkText: _objectSpread(_objectSpread({
    zIndex: "4"
  }, _variables__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    fontSize: "14px"
  }),
  popperClose: {
    pointerEvents: "none"
  },
  icons: {
    color: "#fff !important"
  },
  popperResponsive: {
    [theme.breakpoints.down("md")]: {
      zIndex: "1640",
      position: "static",
      float: "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      WebkitBoxShadow: "none",
      boxShadow: "none",
      color: "black"
    }
  },
  popperNav: {
    zIndex: 899,
    [theme.breakpoints.down("sm")]: {
      position: "static !important",
      left: "unset !important",
      top: "unset !important",
      transform: "none !important",
      willChange: "unset !important",
      "& > div": {
        boxShadow: "none !important",
        marginLeft: "0rem",
        marginRight: "0rem",
        transition: "none !important",
        marginTop: "0px !important",
        marginBottom: "0px !important",
        padding: "0px !important",
        backgroundColor: "transparent !important",
        "& ul li": {
          color: _variables__WEBPACK_IMPORTED_MODULE_0__["whiteColor"] + " !important",
          margin: "10px 15px 0!important",
          padding: "10px 15px !important",
          "&:hover": {
            backgroundColor: "hsla(0,0%,78%,.2)",
            boxShadow: "none"
          }
        }
      }
    }
  },
  dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + Object(_variables__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "160px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: _variables__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    WebkitBackgroundClip: "padding-box",
    backgroundClip: "padding-box"
  },
  dropdownItem: _objectSpread(_objectSpread({}, _variables__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    WebkitTransition: "all 150ms linear",
    MozTransition: "all 150ms linear",
    OTransition: "all 150ms linear",
    MsTransition: "all 150ms linear",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "1.42857143",
    color: _variables__WEBPACK_IMPORTED_MODULE_0__["grayColor"][8],
    whiteSpace: "nowrap",
    height: "unset",
    minHeight: "unset",
    "&:hover": _objectSpread({
      backgroundColor: _variables__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][0],
      color: _variables__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
    }, _variables__WEBPACK_IMPORTED_MODULE_0__["primaryBoxShadow"])
  })
});

/***/ }),

/***/ "./assets/jss/snackbarContentStyle.js":
/*!********************************************!*\
  !*** ./assets/jss/snackbarContentStyle.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./assets/jss/variables.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const snackbarContentStyle = {
  root: _objectSpread(_objectSpread({}, _variables_js__WEBPACK_IMPORTED_MODULE_0__["defaultFont"]), {}, {
    flexWrap: "unset",
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"],
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"][7],
    borderRadius: "3px",
    minWidth: "unset",
    maxWidth: "unset",
    boxShadow: "0 12px 20px -10px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ", 0.28), 0 4px 20px 0px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["blackColor"]) + ", 0.12), 0 7px 8px -5px rgba(" + Object(_variables_js__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"])(_variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]) + ", 0.2)"
  }),
  top20: {
    top: "20px"
  },
  top40: {
    top: "40px"
  },
  info: _objectSpread({
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][3],
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }, _variables_js__WEBPACK_IMPORTED_MODULE_0__["infoBoxShadow"]),
  success: _objectSpread({
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][3],
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }, _variables_js__WEBPACK_IMPORTED_MODULE_0__["successBoxShadow"]),
  warning: _objectSpread({
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][3],
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }, _variables_js__WEBPACK_IMPORTED_MODULE_0__["warningBoxShadow"]),
  danger: _objectSpread({
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][3],
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }, _variables_js__WEBPACK_IMPORTED_MODULE_0__["dangerBoxShadow"]),
  primary: _objectSpread({
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][3],
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }, _variables_js__WEBPACK_IMPORTED_MODULE_0__["primaryBoxShadow"]),
  rose: _objectSpread({
    backgroundColor: _variables_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][3],
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["whiteColor"]
  }, _variables_js__WEBPACK_IMPORTED_MODULE_0__["roseBoxShadow"]),
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: "11px",
    height: "11px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    padding: "0px"
  },
  icon: {
    display: "block",
    left: "15px",
    position: "absolute",
    top: "50%",
    marginTop: "-15px",
    width: "30px",
    height: "30px"
  },
  infoIcon: {
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"][3]
  },
  successIcon: {
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["successColor"][3]
  },
  warningIcon: {
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"][3]
  },
  dangerIcon: {
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"][3]
  },
  primaryIcon: {
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"][3]
  },
  roseIcon: {
    color: _variables_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"][3]
  },
  iconMessage: {
    paddingLeft: "50px",
    display: "block"
  },
  actionRTL: {
    marginLeft: "-8px",
    marginRight: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (snackbarContentStyle);

/***/ }),

/***/ "./assets/jss/variables.js":
/*!*********************************!*\
  !*** ./assets/jss/variables.js ***!
  \*********************************/
/*! exports provided: hexToRgb, drawerWidth, transition, container, boxShadow, card, defaultFont, primaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, blackColor, whiteColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, cardActions, cardHeader, defaultBoxShadow, title, cardTitle, cardSubtitle, cardLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFont", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColor", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackColor", function() { return blackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whiteColor", function() { return whiteColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryBoxShadow", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxShadow", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoxShadow", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningBoxShadow", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerBoxShadow", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseBoxShadow", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningCardHeader", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCardHeader", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerCardHeader", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoCardHeader", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryCardHeader", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseCardHeader", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBoxShadow", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitle", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSubtitle", function() { return cardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLink", function() { return cardLink; });
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

/***/ "./components/CustomButtons/Button.js":
/*!********************************************!*\
  !*** ./components/CustomButtons/Button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegularButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_jss_buttonStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/jss/buttonStyle.js */ "./assets/jss/buttonStyle.js");

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\components\\CustomButtons\\Button.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // material-ui components


 // import styles from "../../styles/fileUploader.module.css";


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(_assets_jss_buttonStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, _objectSpread(_objectSpread({}, rest), {}, {
    classes: muiClasses,
    className: btnClasses,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
RegularButton.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "transparent"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["sm", "lg"]),
  simple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  round: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  justIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  // use this to pass the classes props from Material-UI
  muiClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DivFooter; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io5 */ "react-icons/io5");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contentFR__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../contentFR */ "./contentFR.js");
/* harmony import */ var _contentEN__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../contentEN */ "./contentEN.js");
/* harmony import */ var _contentAR__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../contentAR */ "./contentAR.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\components\\Footer.js";

 // import {Link } from "react-router-dom";










function DivFooter() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_11__["useRouter"])();
  const [screenWidth, setScreenWidth] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(1);
  const {
    locale
  } = router;
  const content = locale === "ar" ? _contentAR__WEBPACK_IMPORTED_MODULE_10__["default"] : locale === "en" ? _contentEN__WEBPACK_IMPORTED_MODULE_9__["default"] : _contentFR__WEBPACK_IMPORTED_MODULE_8__["default"];
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    function updateSize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "div-footer",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: " pt-5 pb-1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          className: "justify-content-around footer-element copyright-parent",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            xs: "12",
            md: "12",
            lg: "12",
            className: "copyright text-left",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "img-fluid logo",
              src: "/image/Doctolive.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 28
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "\xA9 2021 Doctolive tous droits r\xE9serv\xE9s.  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          className: "justify-content-around footer-element",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            xs: "12",
            md: "4",
            lg: "4",
            className: "first-column text-left",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
              as: "ul",
              className: "d-flex flex-column",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "https://doctor.doctolive.ma/",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "yb-link",
                    children: [content.footer.partner, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/account/new",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "yb-link",
                    children: [content.footer.signin, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 61,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/privacy-policy",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "yb-link",
                    children: [" ", content.footer.politique, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 36
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/terms-of-use",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "yb-link",
                    children: [" ", content.footer.condition, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 26
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/terms-of-use",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "yb-link",
                    children: [" ", content.footer.condition2, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            xs: "12",
            md: "4",
            lg: "4",
            className: "first-column text-left",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
              as: "ul",
              className: "d-flex flex-column",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "https://doctor.doctolive.ma/",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "yb-link",
                    children: [content.footer.regle_de_r, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/account/new",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "yb-link",
                    children: [content.footer.mentions_leg, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/privacy-policy",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "yb-link",
                    children: [" ", content.footer.Cookies, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 36
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/terms-of-use",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "yb-link",
                    children: [" ", content.footer.protect_donnes_perso, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 26
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/terms-of-use",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "yb-link",
                    children: [" ", content.footer.gestion_de_cookies, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
            xs: "12",
            md: "4",
            lg: "4",
            className: "contact",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoLocationOutline"], {
                size: "24"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 32
              }, this), " ", content.footer.adress, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosPhonePortrait"], {
                size: "24"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 32
              }, this), " +212 688739472 "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          className: "justify-content-center text-center mt-5 mb-5 reseau-sciaux",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            target: "_blank",
            href: "https://facebook.com/DoctoliveApp",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "img-fluid icon-logo",
              src: "/image/facebook-logo.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            target: "_blank",
            href: "https://www.instagram.com/doctolive_officiel/?hl=fr",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "img-fluid icon-logo",
              src: "/image/instagram-icon.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            target: "_blank",
            href: "https://www.instagram.com/doctolive_officiel/?hl=fr",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "img-fluid icon-logo",
              src: "/image/linkedin-logo.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            target: "_blank",
            href: "https://www.instagram.com/doctolive_officiel/?hl=fr",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "img-fluid icon-logo",
              src: "/image/email-logo.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            target: "_blank",
            href: "https://www.instagram.com/doctolive_officiel/?hl=fr",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "img-fluid icon-logo",
              src: "/image/tiktok-logo.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/LangSwitcher.jsx":
/*!*************************************!*\
  !*** ./components/LangSwitcher.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return angSwitcher; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\components\\LangSwitcher.jsx";


function angSwitcher(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    locale,
    pathname
  } = router;

  const switchLang = lang => {
    try {
      router.push(router.asPath, router.asPath, {
        locale: lang
      });
    } catch (error) {
      console.log(error);
    }
  };

  const Arab = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "selecting-lang",
    id: "ar",
    onClick: () => switchLang("ar"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "lang-flag",
      src: "/image/morocco-circular.png",
      alt: "arab"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "lang-text",
      children: "  "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);

  const frensh = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "selecting-lang",
    onClick: () => switchLang("fr"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "lang-flag",
      src: "/image/france.png",
      alt: "fran\xE7ais"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "lang-text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);

  const english = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "selecting-lang",
    onClick: () => switchLang("en"),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: "lang-flag",
      src: "/image/united-kingdom.png",
      alt: "English"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "lang-text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "switch-lang",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row",
        children: [locale === "en" ? null : english(), locale === "fr" ? null : frensh(), locale === "ar" ? null : Arab()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PatientPublicNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/PatientPublicNavbar */ "./components/PatientPublicNavbar.js");
/* harmony import */ var _components_PatientProNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/PatientProNavbar */ "./components/PatientProNavbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/Footer */ "./components/Footer.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _components_Snackbar_Snackbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Snackbar/Snackbar.js */ "./components/Snackbar/Snackbar.js");
/* harmony import */ var _context_AppointementContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../context/AppointementContext */ "./context/AppointementContext.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\components\\Layout.js";








function Layout({
  children,
  locale,
  pathname
}) {
  const {
    temporary_appointment,
    setUserTemporary
  } = Object(_context_AppointementContext__WEBPACK_IMPORTED_MODULE_7__["useAppContext"])();
  const {
    0: ShowNotif,
    1: setShowNotif
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(temporary_appointment !== null && temporary_appointment !== void 0 && temporary_appointment.medecinId && pathname !== "/doctor/[id]/appointment" ? true : false);
  const {
    0: hide,
    1: setHidef
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isAuth,
    1: setIsAuth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    userData
  } = Object(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__["useAuth"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (userData) {
      setIsAuth(userData.isAuth);
    }

    return () => {};
  }, [userData]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(pathname);
    setShowNotif(temporary_appointment !== null && temporary_appointment !== void 0 && temporary_appointment.medecinId && pathname !== "/doctor/[id]/appointment" ? true : false);
    return () => {};
  }, [temporary_appointment]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [isAuth ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PatientProNavbar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PatientPublicNavbar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      style: locale === "ar" ? {
        direction: "rtl",
        textAlign: "right"
      } : {
        direction: "ltr"
      },
      className: "main" + (isAuth ? " authentified" : ""),
      children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Snackbar_Snackbar_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
          place: "br",
          color: "info",
          icon: react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdAddAlert"],
          message: "Attention, votre RDV n'est pas encore confirm\xE9.",
          open: ShowNotif && !hide,
          link: "Finir le processus de r\xE9servation.",
          linkPath: "/doctor/1/appointment",
          closeNotification: () => {
            setHidef(true);
          },
          close: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/MomentLangu.js":
/*!***********************************!*\
  !*** ./components/MomentLangu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let MomentLangue = {
  fr: {
    invalidDate: "Date non précisée",
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY à HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Aujourd’hui à] LT',
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'LLL'
    },
    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function (number) {
      return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
      return input.charAt(0) === 'M';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem: function (hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // Used to determine first week of the year.

    }
  },
  ma: {
    invalidDate: "تاريخ غير محدد",
    months: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    monthsShort: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    monthsParseExact: true,
    weekdays: ["َالأَحَدِ", "الاثْنَيْنِ", "الثُّلاَثَاءِ", "الأَرْبِعَاءِ", "الْخَمِيسِ", "الْجُمُعَةِ", "السَّبْتِ"],
    weekdaysShort: ["َالأَحَدِ", "الاثْنَيْنِ", "الثُّلاَثَاءِ", "الأَرْبِعَاءِ", "الْخَمِيسِ", "الْجُمُعَةِ", "السَّبْتِ"],
    weekdaysMin: ["َالأَحَدِ", "الاثْنَيْنِ", "الثُّلاَثَاءِ", "الأَرْبِعَاءِ", "الْخَمِيسِ", "الْجُمُعَةِ", "السَّبْتِ"],
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'dddd D MMMM YYYY على الساعة HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[الامس على الساعة] LT',
      lastWeek: 'dddd [الماضي على الساعة] LT',
      sameElse: 'LLL'
    },
    relativeTime: {
      future: 'خلال %s',
      past: 'قبل %s',
      s: 'غضون ثواني',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أَيَّام',
      M: 'أَيَّام',
      MM: '%d شهور',
      y: 'سنة',
      yy: '%d سنوات'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
    ordinal: function (number) {
      return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
      return input.charAt(0) === 'M';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem: function (hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // Used to determine first week of the year.

    }
  },
  en: {
    invalidDate: "Invalide date",
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_')
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MomentLangue);

/***/ }),

/***/ "./components/PatientProNavbar.js":
/*!****************************************!*\
  !*** ./components/PatientProNavbar.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _contentFR__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../contentFR */ "./contentFR.js");
/* harmony import */ var _contentEN__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../contentEN */ "./contentEN.js");
/* harmony import */ var _contentAR__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../contentAR */ "./contentAR.js");
/* harmony import */ var _LangSwitcher__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./LangSwitcher */ "./components/LangSwitcher.jsx");
/* harmony import */ var _CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var _assets_jss_PatientPublicNavbarStyle_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/jss/PatientPublicNavbarStyle.js */ "./assets/jss/PatientPublicNavbarStyle.js");
/* harmony import */ var _assets_jss_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/jss/headerLinksStyle.js */ "./assets/jss/headerLinksStyle.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_23__);

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\components\\PatientProNavbar.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import {Link } from "react-router-dom";


















 // core components





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(_assets_jss_PatientPublicNavbarStyle_js__WEBPACK_IMPORTED_MODULE_21__["default"]);
const useStyles1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(_assets_jss_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_22__["default"]);

function PatientPublicNavbar(props) {
  const classes = useStyles();
  const classes2 = useStyles1();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    locale
  } = router;
  const content = locale === "ar" ? _contentAR__WEBPACK_IMPORTED_MODULE_18__["default"] : locale === "en" ? _contentEN__WEBPACK_IMPORTED_MODULE_17__["default"] : _contentFR__WEBPACK_IMPORTED_MODULE_16__["default"];
  const {
    0: colapsed,
    1: setColapsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: openProfile,
    1: setOpenProfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    userData,
    setUser
  } = Object(_context_AuthContext__WEBPACK_IMPORTED_MODULE_15__["useAuth"])();

  const isToggled = etat => {
    setColapsed(etat);
  };

  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };

  const handleCloseProfile = () => {
    setUser({});
    setOpenProfile(null);
  };

  const appBarClasses = classnames__WEBPACK_IMPORTED_MODULE_6___default()({
    [" " + classes["transparent"]]: true
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      className: classes.navWrap,
      collapseOnSelect: true,
      expand: "lg",
      as: "nav",
      onToggle: isToggled,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.navContent,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex header-100-md",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            to: "/",
            className: "navbar-brand",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                display: "inline-block",
                width: "95px",
                height: "50px",
                backgroundImage: `url(/image/doctoLogo-white.png)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "95px auto"
              },
              children: "  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 49
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 45
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
            "aria-expanded": colapsed,
            "aria-controls": "basic-navbar-nav",
            className: "mx-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "icon-bar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 49
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "icon-bar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 49
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "icon-bar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 49
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 45
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 41
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          className: "m-0",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
            id: "basic-navbar-nav",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
              as: "ul",
              activeKey: props.router ? props.router.pathname : null,
              className: classes.navbarNav,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/account/appointments",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [" ", content.pronavbar.rdv, "  "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 65
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 61
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 57
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 53
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/account/documents",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    className: "",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: ["  ", content.pronavbar.document, " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 65
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 61
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 57
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 53
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12___default.a, {
                mdUp: true,
                implementation: "css",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                  as: "li",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                    href: "/account/profile",
                    passHref: true,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                      className: "",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        children: ["  ", content.pronavbar.dropDown1, " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 69
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 65
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 61
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 57
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  role: "menu",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default.a, {
                    light: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 69
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
                    onClick: handleCloseProfile,
                    className: classes2.dropdownItem,
                    children: content.pronavbar.dropDown2
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 69
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 57
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 53
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 49
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12___default.a, {
              mdDown: true,
              implementation: "css",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classes2.manager,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
                  color: window.innerWidth > 959 ? "transparent" : "white" // justIcon={window.innerWidth > 959}
                  ,
                  simple: !(window.innerWidth > 959),
                  "aria-owns": openProfile ? "profile-menu-list-grow" : null,
                  "aria-haspopup": "true",
                  onClick: handleClickProfile,
                  className: classes2.buttonLink,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_23__["BsFillPersonFill"], {
                    className: classes2.icons
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 57
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12___default.a, {
                    mdDown: true,
                    implementation: "css",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      className: classes2.linkText,
                      children: !userData.user ? null : userData.user.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 61
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 57
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 57
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13___default.a, {
                  placement: 'bottom' // style={{right: -10}}
                  ,
                  open: window.innerWidth < 959 || Boolean(openProfile),
                  anchorEl: openProfile,
                  transition: true,
                  disablePortal: true,
                  className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
                    [classes2.popperClose]: !openProfile
                  }) + " mr-4 " + classes2.popperNav,
                  children: ({
                    TransitionProps,
                    placement
                  }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_9___default.a, _objectSpread(_objectSpread({}, TransitionProps), {}, {
                    id: "profile-menu-list-grow",
                    style: {
                      transformOrigin: placement === "bottom" ? "center top" : "center bottom"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10___default.a, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_11___default.a, {
                        onClickAway: () => {
                          setOpenProfile(null);
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_8___default.a, {
                          role: "menu",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
                            onClick: () => {
                              router.push('/account/profile');
                            },
                            className: classes2.dropdownItem,
                            children: content.pronavbar.dropDown1
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 185,
                            columnNumber: 69
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default.a, {
                            light: true
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 191,
                            columnNumber: 69
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
                            onClick: handleCloseProfile,
                            className: classes2.dropdownItem,
                            children: content.pronavbar.dropDown2
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 192,
                            columnNumber: 69
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                          columnNumber: 65
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 65
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 61
                    }, this)
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 61
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 57
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 49
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 49
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LangSwitcher__WEBPACK_IMPORTED_MODULE_19__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 53
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 45
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 41
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 37
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 33
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 17
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(PatientPublicNavbar));

/***/ }),

/***/ "./components/PatientPublicNavbar.js":
/*!*******************************************!*\
  !*** ./components/PatientPublicNavbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_jss_PatientPublicNavbarStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/jss/PatientPublicNavbarStyle.js */ "./assets/jss/PatientPublicNavbarStyle.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _contentFR__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../contentFR */ "./contentFR.js");
/* harmony import */ var _contentEN__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../contentEN */ "./contentEN.js");
/* harmony import */ var _contentAR__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../contentAR */ "./contentAR.js");
/* harmony import */ var _LangSwitcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LangSwitcher */ "./components/LangSwitcher.jsx");

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\components\\PatientPublicNavbar.js";

 // import {Link } from "react-router-dom";











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(_assets_jss_PatientPublicNavbarStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

function PatientPublicNavbar(props) {
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    locale
  } = router;
  const content = locale === "ar" ? _contentAR__WEBPACK_IMPORTED_MODULE_10__["default"] : locale === "en" ? _contentEN__WEBPACK_IMPORTED_MODULE_9__["default"] : _contentFR__WEBPACK_IMPORTED_MODULE_8__["default"];
  const {
    0: colapsed,
    1: setColapsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const isToggled = etat => {
    setColapsed(etat);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      className: classes.navWrap,
      collapseOnSelect: true,
      expand: "lg",
      as: "nav",
      onToggle: isToggled,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.navContent,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex header-100-md",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "view-pro-btn",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  display: "inline-block",
                  marginTop: "31px",
                  width: "146px",
                  height: "32px",
                  backgroundImage: `url(/image/Doctolive.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 35
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 31
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
            "aria-expanded": colapsed,
            "aria-controls": "basic-navbar-nav",
            className: "mx-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "icon-bar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "icon-bar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "icon-bar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 29
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
            id: "basic-navbar-nav",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              id: "two-button",
              className: "navbar-docto makeStyles-navbarNav-103 ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                className: "professionel",
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                  href: "https://doctor.doctolive.ma",
                  className: "",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "span-first",
                    children: ["  ", content.navbar.medecin, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 47
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 43
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                className: "professionel",
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                  href: "https://doctor.doctolive.ma",
                  className: "",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "span-second",
                    children: ["  ", content.navbar.medecin, " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 47
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 43
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 39
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
              as: "ul",
              activeKey: props.router ? props.router.pathname : null,
              className: classes.navbarNav,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
                as: "li",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  href: "/account/new",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Link, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__["BsPerson"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 47
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: [" ", content.navbar.conect, " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 51
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          opacity: 0.7,
                          fontSize: 12
                        },
                        children: [" ", content.navbar.rdv, " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 51
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 47
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 39
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LangSwitcher__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 33
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 29
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 17
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(PatientPublicNavbar));

/***/ }),

/***/ "./components/Snackbar/Snackbar.js":
/*!*****************************************!*\
  !*** ./components/Snackbar/Snackbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Snackbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_jss_snackbarContentStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/jss/snackbarContentStyle.js */ "./assets/jss/snackbarContentStyle.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\components\\Snackbar\\Snackbar.js";


 // @material-ui/core components




 // core components



const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(_assets_jss_snackbarContentStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function Snackbar(props) {
  const classes = useStyles();
  const {
    message,
    color,
    close,
    icon,
    place,
    open,
    rtlActive,
    link,
    linkPath
  } = props;
  var action = [];
  const messageClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    [classes.iconMessage]: icon !== undefined
  });

  if (close !== undefined) {
    action = [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.iconButton,
      "aria-label": "Close",
      color: "inherit",
      onClick: () => props.closeNotification(),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__["AiOutlineClose"], {
        className: classes.close
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, "close", false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)];
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_5___default.a, {
    anchorOrigin: {
      vertical: place.indexOf("t") === -1 ? "bottom" : "top",
      horizontal: place.indexOf("l") !== -1 ? "left" : place.indexOf("c") !== -1 ? "center" : "right"
    },
    open: open,
    message: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [icon !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(props.icon, {
        className: classes.icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 33
      }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: messageClasses,
        children: [message, link ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: linkPath,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "link",
            children: [" ", link, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 19
        }, this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this),
    action: action,
    ContentProps: {
      classes: {
        root: classes.root + " " + classes[color],
        message: classes.message,
        action: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          [classes.actionRTL]: rtlActive
        })
      }
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
Snackbar.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  // icon: PropTypes.function,
  place: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["tl", "tr", "tc", "br", "bl", "bc"]),
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  closeNotification: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  link: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  linkPath: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string // link : propTypes.string,
  // linkPath: propTypes.string,

};

/***/ }),

/***/ "./contentAR.js":
/*!**********************!*\
  !*** ./contentAR.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  profile: {
    heading: "تعديل الملف الشخصي",
    nomLabel: "اسم",
    placeholder1: "غير اسمك",
    placeholder2: "تغيير اسمك الأول ",
    prenomLabel: "الاسم الأول",
    emailLabel: "البريد الإلكتروني",
    phoneLabel: "رقم الهاتف",
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
    dropDown2: "تسجيل الخروج"
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

/***/ "./contentEN.js":
/*!**********************!*\
  !*** ./contentEN.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  profile: {
    heading: "Profile editing",
    nomLabel: "name",
    placeholder1: "change your name",
    placeholder2: "change your first name",
    prenomLabel: "First name",
    emailLabel: "E-mail adress",
    phoneLabel: "Phone number",
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
    dropDown2: "log out"
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

/***/ "./contentFR.js":
/*!**********************!*\
  !*** ./contentFR.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  profile: {
    heading: "Éditer votre profil",
    nomLabel: "Nom",
    placeholder1: "modifier votre nom",
    placeholder2: "modifier votre prénom",
    prenomLabel: "Prénom",
    emailLabel: "Adresse email",
    phoneLabel: "Numéro de téléphone",
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
    dropDown2: "Se déconnecter"
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
      availablevidéo: "Consultation vidéo disponible",
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
    specialite: "Spécialité",
    parcour: "Parcours",
    descriptionPArc: "Description du parcours du médecin",
    formation: "Formation",
    award: "Récompenses",
    experience: "expérience",
    seeDispo: "Afficher la disponibilité",
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

/***/ "./context/AppointementContext.js":
/*!****************************************!*\
  !*** ./context/AppointementContext.js ***!
  \****************************************/
/*! exports provided: AppWrapper, useAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWrapper", function() { return AppWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppContext", function() { return useAppContext; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\context\\AppointementContext.js";
// src/context/state.js


const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
function AppWrapper({
  children
}) {
  const {
    0: temporary_appointment,
    1: setTemporary_appointment
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});

  const setUserTemporary = data => {
    localStorage.setItem("temporary_appointment", JSON.stringify(data));
    setTemporary_appointment(data);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let existingtemporary_appointment = localStorage.getItem("temporary_appointment");
    existingtemporary_appointment = existingtemporary_appointment != "undefined" ? JSON.parse(existingtemporary_appointment) : {};
    setTemporary_appointment(existingtemporary_appointment);
    return () => {};
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: {
      temporary_appointment,
      setUserTemporary
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
function useAppContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AppContext);
}

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/*! exports provided: AuthWrapper, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthWrapper", function() { return AuthWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/CustomButtons/Button */ "./components/CustomButtons/Button.js");
/* harmony import */ var _contentFR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../contentFR */ "./contentFR.js");
/* harmony import */ var _contentEN__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../contentEN */ "./contentEN.js");
/* harmony import */ var _contentAR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../contentAR */ "./contentAR.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "@material-ui/core/OutlinedInput");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _EndPoint__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../EndPoint */ "./EndPoint.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\context\\AuthContext.js";

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
  const content = locale === "ar" ? _contentAR__WEBPACK_IMPORTED_MODULE_7__["default"] : locale === "en" ? _contentEN__WEBPACK_IMPORTED_MODULE_6__["default"] : _contentFR__WEBPACK_IMPORTED_MODULE_5__["default"];
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
      fetch(`${_EndPoint__WEBPACK_IMPORTED_MODULE_14__["default"].BACKEND_URL}/patient/verify`, {
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
      fetch(`${_EndPoint__WEBPACK_IMPORTED_MODULE_14__["default"].BACKEND_URL}/patient/new-password`, {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppContext.Provider, {
    value: {
      userData,
      setUser
    },
    children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Dialog"] // open={false}
    , {
      open: addedByAdmin,
      onClose: () => {},
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["DialogTitle"], {
        id: "alert-dialog-title",
        children: " Renouveler le mot de passe "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["DialogContent"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["DialogContentText"], {
          id: "alert-dialog-description",
          children: "Ce compte \xE0 tait cr\xE9er avec un administrateur, alors ce mot de passe \xE0 \xE9tait g\xE9n\xE9rer d'une mani\xE9re al\xE9atoir. On vous recomande de saisir un nouveau mot de passe pour la scuit\xE9 de vos information."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9___default.a, {
          className: "mt-3",
          fullWidth: true,
          variant: "outlined",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
            htmlFor: "standard-adornment-password",
            children: [" ", content.new.oldpassLabel, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default.a, {
            id: "standard-adornment-password",
            type: state.showPassword ? 'text' : 'password',
            value: state.old_password,
            onChange: handleChange,
            required: true,
            label: content.new.oldpassLabel,
            name: "old_password",
            endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default.a, {
              position: "end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
                "aria-label": "toggle password visibility",
                onClick: () => setState(old => {
                  return _objectSpread(_objectSpread({}, old), {}, {
                    showPassword: !state.showPassword
                  });
                }),
                children: state.showPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdVisibility"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 41
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdVisibilityOff"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 60
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9___default.a, {
          className: "mt-3",
          fullWidth: true,
          variant: "outlined",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
            htmlFor: "standard-adornment-password",
            children: [" ", content.new.passLabel, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default.a, {
            id: "standard-adornment-password",
            type: state.showPassword ? 'text' : 'password',
            value: state.password,
            onChange: handleChange,
            required: true,
            label: content.new.passLabel,
            name: "password",
            endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default.a, {
              position: "end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
                "aria-label": "toggle password visibility",
                onClick: () => setState(old => {
                  return _objectSpread(_objectSpread({}, old), {}, {
                    showPassword: !state.showPassword
                  });
                }),
                children: state.showPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdVisibility"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 41
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdVisibilityOff"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 60
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_9___default.a, {
          className: "mt-3",
          fullWidth: true,
          variant: "outlined",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
            htmlFor: "standard-adornment-password",
            children: [" ", content.new.confirmpassLabel, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default.a, {
            id: "standard-adornment-password",
            type: state.showPassword ? 'text' : 'password',
            value: state.password_confirmation,
            onChange: handleChange,
            required: true,
            label: content.new.confirmpassLabel,
            name: "password_confirmation",
            endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default.a, {
              position: "end",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
                "aria-label": "toggle password visibility",
                onClick: () => setState(old => {
                  return _objectSpread(_objectSpread({}, old), {}, {
                    showPassword: !state.showPassword
                  });
                }),
                children: state.showPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdVisibility"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 41
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_13__["MdVisibilityOff"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 60
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["DialogActions"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onClick: handleConfirmation,
          color: "danger",
          children: "Confirmer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 5
  }, this);
}
function useAuth() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AppContext);
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_fancybox_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/fancybox.css */ "./styles/fancybox.css");
/* harmony import */ var _styles_fancybox_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_fancybox_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context_AppointementContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../context/AppointementContext */ "./context/AppointementContext.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../context/AuthContext */ "./context/AuthContext.js");
/* harmony import */ var _EndPoint__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../EndPoint */ "./EndPoint.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jss-rtl */ "jss-rtl");
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jss_rtl__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_MomentLangu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./../components/MomentLangu */ "./components/MomentLangu.js");

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















const jss = Object(jss__WEBPACK_IMPORTED_MODULE_15__["create"])({
  plugins: [...Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["jssPreset"])().plugins, jss_rtl__WEBPACK_IMPORTED_MODULE_16___default()()]
});
function MyApp(props) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_17__["useRouter"])();
  const {
    locale
  } = router;
  const momentLoc = locale === "ar" ? "ma" : locale;
  moment__WEBPACK_IMPORTED_MODULE_18___default.a.updateLocale(momentLoc, _components_MomentLangu__WEBPACK_IMPORTED_MODULE_19__["default"][momentLoc]);
  const [socket, setSocket] = react__WEBPACK_IMPORTED_MODULE_5___default.a.useState();
  const {
    Component,
    pageProps
  } = props;
  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(() => {
    const options = {
      path: "/socket.io",
      reconnection: true,
      reconnectionAttempts: Infinity,
      transports: ['websocket']
    };
    let connection = socket_io_client__WEBPACK_IMPORTED_MODULE_14___default.a.connect(_EndPoint__WEBPACK_IMPORTED_MODULE_13__["default"].BACKEND_URL, options);
    connection.on('connect', () => {
      console.log('connect');
      connection.emit('join-patient', {
        id: "p" + 1
      }, ({
        error,
        message
      }) => {
        console.log(error, message);

        if (error) {
          setSocketError(error, message);
        } else {}
      });
    });
    connection.on('connect_error', error => {
      console.log('connect_error', error);
    });
    connection.on('disconnect', reason => {
      console.log('disconnect', reason);
    });
    connection.on('reconnect_attempt', () => {
      console.log('reconnect_attempt');
    });
    connection.on('reconnecting', () => {
      console.log('reconnecting');
    });
    connection.on('reconnect', () => {
      console.log('reconnect');
    });
    setSocket(connection);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    return () => {};
  }, []);
  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(() => {
    switch (locale) {
      case "ar":
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
        break;

      case "en":
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
        break;

      default:
        document.documentElement.lang = 'fr';
        document.documentElement.dir = 'ltr';
        break;
    }

    return () => {};
  }, [locale]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: " Doctolive "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["StylesProvider"], {
      jss: jss,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
        theme: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["createMuiTheme"])({
          direction: locale === "ar" ? 'rtl' : "ltr",
          palette: {
            primary: {
              main: '#1ab9b9'
            },
            secondary: {
              main: '#19857b'
            },
            error: {
              main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__["red"].A400
            },
            background: {
              default: '#fff'
            },
            typography: {
              fontFamily: ['Barlow', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(',')
            }
          }
        }),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_AppointementContext__WEBPACK_IMPORTED_MODULE_11__["AppWrapper"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_12__["AuthWrapper"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
              locale: locale,
              pathname: router.pathname,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
                socket: socket
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 5
  }, this);
}
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired
}; // Create a theme instance.

/***/ }),

/***/ "./styles/fancybox.css":
/*!*****************************!*\
  !*** ./styles/fancybox.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/Grow":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grow" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/OutlinedInput":
/*!**************************************************!*\
  !*** external "@material-ui/core/OutlinedInput" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "jss-rtl":
/*!**************************!*\
  !*** external "jss-rtl" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-rtl");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-icons/io5":
/*!**********************************!*\
  !*** external "react-icons/io5" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io5");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9FbmRQb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL1BhdGllbnRQdWJsaWNOYXZiYXJTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL2J1dHRvblN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvaGVhZGVyTGlua3NTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL3NuYWNrYmFyQ29udGVudFN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvdmFyaWFibGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYW5nU3dpdGNoZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9tZW50TGFuZ3UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXRpZW50UHJvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGF0aWVudFB1YmxpY05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NuYWNrYmFyL1NuYWNrYmFyLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnRBUi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50RU4uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudEZSLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvQXBwb2ludGVtZW50Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzcy1ydGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW81XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvbWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCIiXSwibmFtZXMiOlsiTG9jYWxDb25maWciLCJCQUNLRU5EX1VSTCIsIkxPQ0FMX1VSTCIsImFwaUtleSIsInByb2RDb25maWciLCJjaGVja2JveEFkblJhZGlvU3R5bGUiLCJuYXZXcmFwIiwicG9zaXRpb24iLCJ3aWR0aCIsInRvcCIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwibmF2Q29udGVudCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm5hdmJhck5hdiIsImNvbG9yIiwiY3Vyc29yIiwidGV4dERlY29yYXRpb24iLCJmb250V2VpZ2h0IiwiYWxpZ25JdGVtcyIsImZsZXhHcm93IiwiZm9udFNpemUiLCJmbGV4U2hyaW5rIiwidXNlclNlbGVjdCIsIm1hcmdpblJpZ2h0IiwiYnV0dG9uU3R5bGUiLCJidXR0b24iLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImdyYXlDb2xvciIsIndoaXRlQ29sb3IiLCJib3hTaGFkb3ciLCJoZXhUb1JnYiIsIm1hcmdpbiIsInRleHRUcmFuc2Zvcm0iLCJsZXR0ZXJTcGFjaW5nIiwid2lsbENoYW5nZSIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwidmVydGljYWxBbGlnbiIsInRvdWNoQWN0aW9uIiwib3V0bGluZSIsImJsYWNrQ29sb3IiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ0cmFuc2Zvcm0iLCJsZWZ0Iiwid2hpdGUiLCJyb3NlIiwicm9zZUNvbG9yIiwicHJpbWFyeSIsInByaW1hcnlDb2xvciIsImluZm8iLCJpbmZvQ29sb3IiLCJzdWNjZXNzIiwic3VjY2Vzc0NvbG9yIiwid2FybmluZyIsIndhcm5pbmdDb2xvciIsImRhbmdlciIsImRhbmdlckNvbG9yIiwic2ltcGxlIiwiYmFja2dyb3VuZCIsInRyYW5zcGFyZW50IiwiZGlzYWJsZWQiLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsImxnIiwic20iLCJyb3VuZCIsImJsb2NrIiwibGluayIsImp1c3RJY29uIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJoZWFkZXJMaW5rc1N0eWxlIiwidGhlbWUiLCJkcm9wZG93blN0eWxlIiwiYXBwQmFyIiwiYm9yZGVyQm90dG9tIiwicGFkZGluZ1RvcCIsInpJbmRleCIsImNvbnRhaW5lciIsInNlYXJjaCIsImJyZWFrcG9pbnRzIiwiZG93biIsImZsb2F0IiwicGFkZGluZ0JvdHRvbSIsImxpbmtUZXh0IiwiZGVmYXVsdEZvbnQiLCJidXR0b25MaW5rIiwibWFyZ2luTGVmdCIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaEljb24iLCJub3RpZmljYXRpb25zIiwidXAiLCJyaWdodCIsIm1hbmFnZXIiLCJzZWFyY2hXcmFwcGVyIiwibGlua3MiLCJwb3BwZXJDbG9zZSIsImljb25zIiwicG9wcGVyUmVzcG9uc2l2ZSIsIldlYmtpdEJveFNoYWRvdyIsInBvcHBlck5hdiIsImRyb3Bkb3duIiwibGlzdFN0eWxlIiwiV2Via2l0QmFja2dyb3VuZENsaXAiLCJiYWNrZ3JvdW5kQ2xpcCIsImRyb3Bkb3duSXRlbSIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJNc1RyYW5zaXRpb24iLCJjbGVhciIsInByaW1hcnlCb3hTaGFkb3ciLCJzbmFja2JhckNvbnRlbnRTdHlsZSIsInJvb3QiLCJmbGV4V3JhcCIsIm1heFdpZHRoIiwidG9wMjAiLCJ0b3A0MCIsImluZm9Cb3hTaGFkb3ciLCJzdWNjZXNzQm94U2hhZG93Iiwid2FybmluZ0JveFNoYWRvdyIsImRhbmdlckJveFNoYWRvdyIsInJvc2VCb3hTaGFkb3ciLCJtZXNzYWdlIiwiY2xvc2UiLCJpY29uQnV0dG9uIiwiaWNvbiIsImluZm9JY29uIiwic3VjY2Vzc0ljb24iLCJ3YXJuaW5nSWNvbiIsImRhbmdlckljb24iLCJwcmltYXJ5SWNvbiIsInJvc2VJY29uIiwiaWNvbk1lc3NhZ2UiLCJhY3Rpb25SVEwiLCJpbnB1dCIsInJlcGxhY2UiLCJoZXhSZWdleCIsInRlc3QiLCJsZW5ndGgiLCJFcnJvciIsImZpcnN0Iiwic2Vjb25kIiwibGFzdCIsInRvVXBwZXJDYXNlIiwicGFyc2VJbnQiLCJkcmF3ZXJXaWR0aCIsImZvbnRGYW1pbHkiLCJ3YXJuaW5nQ2FyZEhlYWRlciIsInN1Y2Nlc3NDYXJkSGVhZGVyIiwiZGFuZ2VyQ2FyZEhlYWRlciIsImluZm9DYXJkSGVhZGVyIiwicHJpbWFyeUNhcmRIZWFkZXIiLCJyb3NlQ2FyZEhlYWRlciIsImNhcmRBY3Rpb25zIiwiYm9yZGVyVG9wIiwiY2FyZEhlYWRlciIsImNhcmQiLCJkZWZhdWx0Qm94U2hhZG93IiwidGl0bGUiLCJjYXJkVGl0bGUiLCJjYXJkU3VidGl0bGUiLCJjYXJkTGluayIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJSZWd1bGFyQnV0dG9uIiwicHJvcHMiLCJjbGFzc2VzIiwiY2hpbGRyZW4iLCJzaXplIiwiY2xhc3NOYW1lIiwibXVpQ2xhc3NlcyIsInJlc3QiLCJidG5DbGFzc2VzIiwiY2xhc3NOYW1lcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiYm9vbCIsInN0cmluZyIsIm9iamVjdCIsIm5vZGUiLCJEaXZGb290ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzY3JlZW5XaWR0aCIsInNldFNjcmVlbldpZHRoIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvY2FsZSIsImNvbnRlbnQiLCJjb250ZW50QVIiLCJjb250ZW50RU4iLCJjb250ZW50RlIiLCJ1c2VFZmZlY3QiLCJ1cGRhdGVTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZm9vdGVyIiwicGFydG5lciIsInNpZ25pbiIsInBvbGl0aXF1ZSIsImNvbmRpdGlvbiIsImNvbmRpdGlvbjIiLCJyZWdsZV9kZV9yIiwibWVudGlvbnNfbGVnIiwiQ29va2llcyIsInByb3RlY3RfZG9ubmVzX3BlcnNvIiwiZ2VzdGlvbl9kZV9jb29raWVzIiwiYWRyZXNzIiwiYW5nU3dpdGNoZXIiLCJwYXRobmFtZSIsInN3aXRjaExhbmciLCJsYW5nIiwicHVzaCIsImFzUGF0aCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkFyYWIiLCJmcmVuc2giLCJlbmdsaXNoIiwiTGF5b3V0IiwidGVtcG9yYXJ5X2FwcG9pbnRtZW50Iiwic2V0VXNlclRlbXBvcmFyeSIsInVzZUFwcENvbnRleHQiLCJTaG93Tm90aWYiLCJzZXRTaG93Tm90aWYiLCJtZWRlY2luSWQiLCJoaWRlIiwic2V0SGlkZWYiLCJpc0F1dGgiLCJzZXRJc0F1dGgiLCJ1c2VyRGF0YSIsInVzZUF1dGgiLCJkaXJlY3Rpb24iLCJNZEFkZEFsZXJ0IiwiTW9tZW50TGFuZ3VlIiwiZnIiLCJpbnZhbGlkRGF0ZSIsIm1vbnRocyIsInNwbGl0IiwibW9udGhzU2hvcnQiLCJtb250aHNQYXJzZUV4YWN0Iiwid2Vla2RheXMiLCJ3ZWVrZGF5c1Nob3J0Iiwid2Vla2RheXNNaW4iLCJ3ZWVrZGF5c1BhcnNlRXhhY3QiLCJsb25nRGF0ZUZvcm1hdCIsIkxUIiwiTFRTIiwiTCIsIkxMIiwiTExMIiwiTExMTCIsImNhbGVuZGFyIiwic2FtZURheSIsIm5leHREYXkiLCJuZXh0V2VlayIsImxhc3REYXkiLCJsYXN0V2VlayIsInNhbWVFbHNlIiwicmVsYXRpdmVUaW1lIiwiZnV0dXJlIiwicGFzdCIsInMiLCJtIiwibW0iLCJoIiwiaGgiLCJkIiwiZGQiLCJNIiwiTU0iLCJ5IiwieXkiLCJkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIiwib3JkaW5hbCIsIm51bWJlciIsIm1lcmlkaWVtUGFyc2UiLCJpc1BNIiwiY2hhckF0IiwibWVyaWRpZW0iLCJob3VycyIsIm1pbnV0ZXMiLCJpc0xvd2VyIiwid2VlayIsImRvdyIsImRveSIsIm1hIiwiZW4iLCJ1c2VTdHlsZXMxIiwic3R5bGVzRHJvcGRvd24iLCJQYXRpZW50UHVibGljTmF2YmFyIiwiY2xhc3NlczIiLCJjb2xhcHNlZCIsInNldENvbGFwc2VkIiwib3BlblByb2ZpbGUiLCJzZXRPcGVuUHJvZmlsZSIsInNldFVzZXIiLCJpc1RvZ2dsZWQiLCJldGF0IiwiaGFuZGxlQ2xpY2tQcm9maWxlIiwiZXZlbnQiLCJjb250YWlucyIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZVByb2ZpbGUiLCJhcHBCYXJDbGFzc2VzIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicHJvbmF2YmFyIiwicmR2IiwiZG9jdW1lbnQiLCJkcm9wRG93bjEiLCJkcm9wRG93bjIiLCJ1c2VyIiwiZW1haWwiLCJCb29sZWFuIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3JpZ2luIiwid2l0aFJvdXRlciIsIm5hdmJhciIsIm1lZGVjaW4iLCJjb25lY3QiLCJTbmFja2JhciIsInBsYWNlIiwib3BlbiIsInJ0bEFjdGl2ZSIsImxpbmtQYXRoIiwiYWN0aW9uIiwibWVzc2FnZUNsYXNzZXMiLCJ1bmRlZmluZWQiLCJjbG9zZU5vdGlmaWNhdGlvbiIsInZlcnRpY2FsIiwiaW5kZXhPZiIsImhvcml6b250YWwiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInByb2ZpbGUiLCJoZWFkaW5nIiwibm9tTGFiZWwiLCJwbGFjZWhvbGRlcjEiLCJwbGFjZWhvbGRlcjIiLCJwcmVub21MYWJlbCIsImVtYWlsTGFiZWwiLCJwaG9uZUxhYmVsIiwiY29uZmlybV9wYXNzd29yZCIsIm5ld19wYXNzd29yZCIsIm9sZF9wYXNzd29yZCIsImhvbWUiLCJoZWFkaW5nMSIsImhlYWRpbmcyIiwicmVjaGVyY2hlbGFiZWwiLCJub09wdGlvbiIsIm5vT3B0aW9uMiIsImxvYWRpbmciLCJjaXR5bGFiZWwiLCJjaXR5TG9hZGluZyIsImFib3V0IiwiYm9keSIsImJhbm5lcml0ZW0xIiwiYmFubmVyaXRlbTIiLCJiYW5uZXJpdGVtMyIsInNraXAiLCJzdWJIZWFkaW5nIiwic3RlcHMiLCJiYW5uZXJpdGVtMTIiLCJiYW5uZXJpdGVtMjIiLCJiYW5uZXJpdGVtMzIiLCJkb3dsb2FkIiwiYXBwIiwicGxheSIsInNlcnZpY2VzIiwiaXRlbTFoZWFkaW5nIiwiaXRlbTFib2R5IiwiaXRlbTJoZWFkaW5nIiwiaXRlbTJib2R5IiwiaXRlbTNoZWFkaW5nIiwiaXRlbTNib2R5IiwiaXRlbTRoZWFkaW5nIiwiaXRlbTRib2R5IiwiY29udGFjdCIsImZhcSIsIm5ldyIsImFscmVhZHlIYXZlIiwibmV3SW4iLCJzaWdudXAiLCJhdXRoIiwicGFzc0xhYmVsIiwib2xkcGFzc0xhYmVsIiwiY29uZmlybXBhc3NMYWJlbCIsImxhYmVsTm9tIiwibGFiZWxQcmVub20iLCJwaG9uZUVycm9yIiwibGFiZWxFbWFpbEMiLCJsYWJlbEVtYWlsQ1AiLCJlcnJvclNpZ251cCIsInN1Y2Nlc3NTaWdudXAiLCJyZXBvcnQiLCJsYWJlbEVuZCIsImRvY3VtZW50cyIsImF1Y3VuIiwiZG9udGhhdmUiLCJzaGFyZWRCeSIsInNoYXJlZFdpdGgiLCJhcHBvaW50bWVudHMiLCJub3RBdXRoIiwiYWNjZXNzIiwibm9BcHAiLCJteWFwcCIsIm15SGlzdG9yeSIsImhpc3RvcnkiLCJuZXh0QXBwIiwidGFrZWFwcCIsImNhcmRBcHBzIiwiY2FyZEFwcCIsImFjY2Vzc0luZm9zIiwibm90U3BlY2lmaWVkIiwic2VjcmV0YXJpYXQiLCJjbGljayIsInJlam9pbmRyZSIsImRlcGxhY2VyIiwiYW5udWxlciIsInJldG91ciIsImNvbmZpcm1DYW5jZWwiLCJ3YW50WW91Iiwid2l0aCIsImRvY0F2YWkiLCJzZWxlY1R0aW1lIiwiY29uZmlybSIsInNlZUluZm9zU2hhcmVkIiwicmVzdWx0UmVzZWFyY2giLCJub1Jlc2VhdWx0IiwidHJ5UmVzZWF1bHQiLCJ3aWRnZXQiLCJhdmFpbGFibGVWaWRlbyIsInNlZVByb2ZpbGUiLCJzZWVEaXNwbyIsImRpc3BvIiwidGltZVNlbGVjdGVkIiwiY2FuY2VsIiwidmFsaWRhdGlvbiIsImV4cGlyZWQiLCJnZW5lcmF0ZU5ldyIsImFwcG9pbnRtZW50IiwidGFrZUFwcCIsInN0ZXAxIiwibGFiZWwxIiwiaW5wMSIsImxhYmVsMiIsImlucDIiLCJsYWJlbDMiLCJpbnAzIiwiaW5wNCIsImxhYmVsNCIsImxhYmVsNSIsInRlbGVjb25zdWx0IiwibGFiZWw2IiwibW90aWYiLCJub01vdGlmcyIsImxhYmVsNyIsInN0ZXAyIiwib2xkIiwic3RlcDMiLCJnZW5lcmF0ZSIsInJldmlyaWZ5Iiwic3RlcDQiLCJyZW1pbmQiLCJzdGVwNSIsImdlcmVyIiwicHJvZmlsUGFnZSIsImFjY2Vzc0luZm8iLCJnZW5lcmFsIiwic3BlY2lhbGl0ZSIsInBhcmNvdXIiLCJkZXNjcmlwdGlvblBBcmMiLCJmb3JtYXRpb24iLCJhd2FyZCIsImV4cGVyaWVuY2UiLCJzZWVNYXAiLCJ0YXJpZiIsImRldGFpbHMiLCJob25vcmUiLCJzZXJ2aWNlIiwicHJpeCIsImhvcmFpcmUiLCJkZXRhaWxzSGV1cmVzIiwiYXZhaWxhYmxldmlkw6lvIiwiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJBcHBXcmFwcGVyIiwic2V0VGVtcG9yYXJ5X2FwcG9pbnRtZW50IiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZXhpc3Rpbmd0ZW1wb3JhcnlfYXBwb2ludG1lbnQiLCJnZXRJdGVtIiwicGFyc2UiLCJ1c2VDb250ZXh0IiwiQXV0aFdyYXBwZXIiLCJleGlzdGluZ3VzZXJEYXRhIiwiZ2V0Iiwic2V0VXNlckRhdGEiLCJhZGRlZEJ5QWRtaW4iLCJzZXRBZGRlZEJ5QWRtaW4iLCJzdGF0ZSIsInNldFN0YXRlIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwicGFzc3dvcmQiLCJ0b2tlbiIsInNldCIsImV4cGlyZXMiLCJwYXNzd29yZENoYW5nZWQiLCJmZXRjaCIsIkNvbmZpZyIsImhlYWRlcnMiLCJ0aGVuIiwiciIsImpzb24iLCJyZXMiLCJjYXRjaCIsImhhbmRsZUNvbmZpcm1hdGlvbiIsInRlc3RQYXNzIiwidHJpbVN0YXJ0IiwibWV0aG9kIiwidXBkYXRlUGF0aWVudCIsImVyciIsInJlc3BvbnNlIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJuYW1lIiwic2hvd1Bhc3N3b3JkIiwicHJlZmV0Y2hlZCIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJocmVmIiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJwIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImdlbmVyYXRvciIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJwYXRobmFtZVBhcnRzIiwibG9jYWxlcyIsImRldGVjdGVkTG9jYWxlIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiaXNMb2NhbFVSTCIsInJlc29sdmVBcyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlZFVybCIsImFkZEJhc2VQYXRoIiwicHJlcGFyZWRBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiaXNTc2ciLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJqc3MiLCJjcmVhdGUiLCJwbHVnaW5zIiwianNzUHJlc2V0IiwicnRsIiwiTXlBcHAiLCJtb21lbnRMb2MiLCJtb21lbnQiLCJ1cGRhdGVMb2NhbGUiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJyZWNvbm5lY3Rpb24iLCJyZWNvbm5lY3Rpb25BdHRlbXB0cyIsIkluZmluaXR5IiwidHJhbnNwb3J0cyIsImNvbm5lY3Rpb24iLCJpbyIsImNvbm5lY3QiLCJzZXRTb2NrZXRFcnJvciIsInJlYXNvbiIsImpzc1N0eWxlcyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJkb2N1bWVudEVsZW1lbnQiLCJkaXIiLCJjcmVhdGVNdWlUaGVtZSIsInBhbGV0dGUiLCJtYWluIiwic2Vjb25kYXJ5IiwicmVkIiwiQTQwMCIsImRlZmF1bHQiLCJ0eXBvZ3JhcGh5Iiwiam9pbiIsImVsZW1lbnRUeXBlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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LEVBQUVua0IsaURBQVMsQ0FBQ290QixXQUFWLENBQXNCOWlCLFVBRGpCO0FBRWhCc2dCLFdBQVMsRUFBRTVxQixpREFBUyxDQUFDSSxNQUFWLENBQWlCa0s7QUFGWixDQUFsQixDLENBTUEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNMQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImNvbnN0IExvY2FsQ29uZmlnID0ge1xyXG4gICAgQkFDS0VORF9VUkwgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDQwMFwiLFxyXG4gICAgTE9DQUxfVVJMIDogXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvXCIsXHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5RDZ0azhkRkY0R0RuQjBpQUJWOTVac19DQ09aOTJLOXN3XCJcclxufVxyXG5jb25zdCBwcm9kQ29uZmlnID0ge1xyXG4gICAgQkFDS0VORF9VUkwgOiBcImh0dHBzOi8vYXBpLmRvY3RvbGl2ZS5tYVwiLFxyXG4gICAgYXBpS2V5OiBcIkFJemFTeUQ2dGs4ZEZGNEdEbkIwaUFCVjk1WnNfQ0NPWjkySzlzd1wiXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcHJvZENvbmZpZyIsIlxyXG4gIGNvbnN0IGNoZWNrYm94QWRuUmFkaW9TdHlsZSA9IHtcclxuICAgIG5hdldyYXA6e1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEyMHB4XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMxYWI5YjlcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMC4zc1wiLFxyXG4gICAgfSxcclxuICAgIG5hdkNvbnRlbnQgOiB7XHJcbiAgICAgICAgcGFkZGluZzogXCIwIDIwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIC8vIGRpc3BsYXk6IC13ZWJraXQtYm94LFxyXG4gICAgICAgIC8vIGRpc3BsYXk6IC13ZWJraXQtZmxleCxcclxuICAgICAgICAvLyBkaXNwbGF5OiAtbXMtZmxleGJveCxcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgLy8gLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeSxcclxuICAgICAgICAvLyAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbixcclxuICAgICAgICAvLyAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5LFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgIH0sXHJcbiAgICBuYXZiYXJOYXY6IHtcclxuICAgICAgICBcIiYgLm5hdi1pdGVtIC5uYXYtbGlua1wiIDp7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmYgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAyMHB4IDBcIixcclxuICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZmxleEdyb3c6IDAsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgZmxleFNocmluazogMCxcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB1c2VyU2VsZWN0OiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiJiAubmF2LWl0ZW0gLm5hdi1saW5rIHN2Z1wiIDp7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNixcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNixcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiOHB4ICFpbXBvcnRhbnRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiJiAucHJvZmVzc2lvbmVsXCIgOiB7XHJcbiAgICAgICAgICAgIFwiJiAubmF2LWxpbmtcIiA6e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzFBQjlCOSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiJiBzcGFuXCIgOntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBjaGVja2JveEFkblJhZGlvU3R5bGU7XHJcbiAgIiwiaW1wb3J0IHtcclxuICBncmF5Q29sb3IsXHJcbiAgcHJpbWFyeUNvbG9yLFxyXG4gIGluZm9Db2xvcixcclxuICBzdWNjZXNzQ29sb3IsXHJcbiAgd2FybmluZ0NvbG9yLFxyXG4gIGRhbmdlckNvbG9yLFxyXG4gIHJvc2VDb2xvcixcclxuICB3aGl0ZUNvbG9yLFxyXG4gIGJsYWNrQ29sb3IsXHJcbiAgaGV4VG9SZ2JcclxufSBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuXHJcbmNvbnN0IGJ1dHRvblN0eWxlID0ge1xyXG4gIGJ1dHRvbjoge1xyXG4gICAgbWluSGVpZ2h0OiBcImF1dG9cIixcclxuICAgIG1pbldpZHRoOiBcImF1dG9cIixcclxuICAgIGJhY2tncm91bmRDb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgIHBhZGRpbmc6IFwiMTJweCAzMHB4XCIsXHJcbiAgICBtYXJnaW46IFwiLjMxMjVyZW0gMXB4XCIsXHJcbiAgICBmb250U2l6ZTogXCIxMnB4XCIsXHJcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgIGxldHRlclNwYWNpbmc6IFwiMFwiLFxyXG4gICAgd2lsbENoYW5nZTogXCJib3gtc2hhZG93LCB0cmFuc2Zvcm1cIixcclxuICAgIHRyYW5zaXRpb246XHJcbiAgICAgIFwiYm94LXNoYWRvdyAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKVwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjQyODU3MTQzXCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgIHRvdWNoQWN0aW9uOiBcIm1hbmlwdWxhdGlvblwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiXHJcbiAgICB9LFxyXG4gICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsICYubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiLTFlbVwiLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiLTFlbVwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxLjFyZW1cIixcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiNHB4XCIsXHJcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJcclxuICAgIH0sXHJcbiAgICBcIiYgc3ZnXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgd2lkdGg6IFwiMThweFwiLFxyXG4gICAgICBoZWlnaHQ6IFwiMThweFwiLFxyXG4gICAgICBtYXJnaW5SaWdodDogXCI0cHhcIixcclxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxyXG4gICAgfSxcclxuICAgIFwiJiRqdXN0SWNvblwiOiB7XHJcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMHB4XCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgdHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgICAgICBsZWZ0OiBcIjBweFwiLFxyXG4gICAgICAgIHRvcDogXCIwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNDFweFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB3aGl0ZToge1xyXG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogd2hpdGVDb2xvcixcclxuICAgICAgY29sb3I6IGdyYXlDb2xvclswXVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcm9zZToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcm9zZUNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBwcmltYXJ5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJpbWFyeUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByaW1hcnlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByaW1hcnlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByaW1hcnlDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHByaW1hcnlDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCJcclxuICAgIH1cclxuICB9LFxyXG4gIGluZm86IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc3VjY2Vzczoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiXHJcbiAgICB9XHJcbiAgfSxcclxuICB3YXJuaW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCJcclxuICAgIH1cclxuICB9LFxyXG4gIGRhbmdlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCJcclxuICAgIH1cclxuICB9LFxyXG4gIHNpbXBsZToge1xyXG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlclwiOiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCJcclxuICAgIH0sXHJcbiAgICBcIiYkcm9zZVwiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogcm9zZUNvbG9yWzBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIiYkcHJpbWFyeVwiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogcHJpbWFyeUNvbG9yWzBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIiYkaW5mb1wiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogaW5mb0NvbG9yWzBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIiYkc3VjY2Vzc1wiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogc3VjY2Vzc0NvbG9yWzBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIiYkd2FybmluZ1wiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogd2FybmluZ0NvbG9yWzBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIiYkZGFuZ2VyXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBkYW5nZXJDb2xvclswXVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB0cmFuc3BhcmVudDoge1xyXG4gICAgXCImLCY6Zm9jdXMsJjpob3ZlclwiOiB7XHJcbiAgICAgIGNvbG9yOiBcIiMxYWI5YjlcIixcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCJcclxuICAgIH1cclxuICB9LFxyXG4gIGRpc2FibGVkOiB7XHJcbiAgICBvcGFjaXR5OiBcIjAuNjVcIixcclxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXHJcbiAgfSxcclxuICBsZzoge1xyXG4gICAgcGFkZGluZzogXCIxLjEyNXJlbSAyLjI1cmVtXCIsXHJcbiAgICBmb250U2l6ZTogXCIwLjg3NXJlbVwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjMzMzMzM1wiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuMnJlbVwiXHJcbiAgfSxcclxuICBzbToge1xyXG4gICAgcGFkZGluZzogXCIwLjQwNjI1cmVtIDEuMjVyZW1cIixcclxuICAgIGZvbnRTaXplOiBcIjAuNjg3NXJlbVwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIwLjJyZW1cIlxyXG4gIH0sXHJcbiAgcm91bmQ6IHtcclxuICAgIGJvcmRlclJhZGl1czogXCIzMHB4XCJcclxuICB9LFxyXG4gIGJsb2NrOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIlxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgXCImLCY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBqdXN0SWNvbjoge1xyXG4gICAgcGFkZGluZ0xlZnQ6IFwiMTJweFwiLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjEycHhcIixcclxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgIGhlaWdodDogXCI0MXB4XCIsXHJcbiAgICBtaW5XaWR0aDogXCI0MXB4XCIsXHJcbiAgICB3aWR0aDogXCI0MXB4XCIsXHJcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIHN2ZywmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiXHJcbiAgICB9LFxyXG4gICAgXCImJGxnXCI6IHtcclxuICAgICAgaGVpZ2h0OiBcIjU3cHhcIixcclxuICAgICAgbWluV2lkdGg6IFwiNTdweFwiLFxyXG4gICAgICB3aWR0aDogXCI1N3B4XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMzJweFwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjMycHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMzJweFwiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIiYkc21cIjoge1xyXG4gICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICBtaW5XaWR0aDogXCIzMHB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcclxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjI5cHhcIlxyXG4gICAgICB9LFxyXG4gICAgICBcIiYgc3ZnXCI6IHtcclxuICAgICAgICB3aWR0aDogXCIxN3B4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjE3cHhcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uU3R5bGU7XHJcbiIsIlxyXG5pbXBvcnQge1xyXG4gIHByaW1hcnlDb2xvcixcclxuICBkYW5nZXJDb2xvcixcclxuICB3aGl0ZUNvbG9yLFxyXG4gIHByaW1hcnlCb3hTaGFkb3csXHJcbiAgZGVmYXVsdEZvbnQsXHJcbiAgYmxhY2tDb2xvcixcclxuICBncmF5Q29sb3IsXHJcbiAgaGV4VG9SZ2IsXHJcbiAgY29udGFpbmVyLFxyXG4gIGluZm9Db2xvclxyXG59IGZyb20gXCIuL3ZhcmlhYmxlc1wiO1xyXG5cclxuXHJcbmNvbnN0IGhlYWRlckxpbmtzU3R5bGUgPSB0aGVtZSA9PiAoe1xyXG4gIC4uLmRyb3Bkb3duU3R5bGUodGhlbWUpLFxyXG4gIGFwcEJhcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAgaW5mb0NvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgIGJvcmRlckJvdHRvbTogXCIwXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMFwiLFxyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxyXG4gICAgekluZGV4OiBcIjEwMjlcIixcclxuICAgIGNvbG9yOiBncmF5Q29sb3JbN10sXHJcbiAgICBib3JkZXI6IFwiMFwiLFxyXG4gICAgcGFkZGluZzogXCIxMHB4IDBcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGVhc2UgMHNcIixcclxuICAgIG1pbkhlaWdodDogXCI1MHB4XCIsXHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCJcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgLi4uY29udGFpbmVyLFxyXG4gICAgbWluSGVpZ2h0OiBcIjUwcHhcIlxyXG4gIH0sXHJcbiAgc2VhcmNoOiB7XHJcbiAgICBcIiYgPiBkaXZcIjoge1xyXG4gICAgICBtYXJnaW5Ub3A6IFwiMFwiXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgbWFyZ2luOiBcIjEwcHggMTVweCAhaW1wb3J0YW50XCIsXHJcbiAgICAgIGZsb2F0OiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICBwYWRkaW5nVG9wOiBcIjFweFwiLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjFweFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjAhaW1wb3J0YW50XCIsXHJcbiAgICAgIHdpZHRoOiBcIjYwJVwiLFxyXG4gICAgICBtYXJnaW5Ub3A6IFwiNDBweFwiLFxyXG4gICAgICBcIiYgaW5wdXRcIjoge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZUNvbG9yXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGxpbmtUZXh0OiB7XHJcbiAgICBjb2xvcjpcIiNmZmZcIixcclxuICAgIHpJbmRleDogXCI0XCIsXHJcbiAgICAuLi5kZWZhdWx0Rm9udCxcclxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgIG1hcmdpbjogXCIwcHhcIlxyXG4gIH0sXHJcbiAgYnV0dG9uTGluazoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgIG1hcmdpbjogXCIxMHB4IDE1cHggMFwiLFxyXG4gICAgICB3aWR0aDogXCItd2Via2l0LWZpbGwtYXZhaWxhYmxlXCIsXHJcbiAgICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjI0cHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcIi0xNXB4XCJcclxuICAgICAgfSxcclxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjI0cHhcIixcclxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICB3aWR0aDogXCIyNHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjMwcHhcIixcclxuICAgICAgICBtYXJnaW5SaWdodDogXCIxNXB4XCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCItMTVweFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJiA+IHNwYW5cIjoge1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VhcmNoQnV0dG9uOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICB0b3A6IFwiLTUwcHggIWltcG9ydGFudFwiLFxyXG4gICAgICBtYXJnaW5SaWdodDogXCIyMnB4XCIsXHJcbiAgICAgIGZsb2F0OiBcInJpZ2h0XCJcclxuICAgIH1cclxuICB9LFxyXG4gIG1hcmdpbjoge1xyXG4gICAgekluZGV4OiBcIjRcIixcclxuICAgIG1hcmdpbjogXCIwXCJcclxuICB9LFxyXG4gIHNlYXJjaEljb246IHtcclxuICAgIHdpZHRoOiBcIjE3cHhcIixcclxuICAgIHpJbmRleDogXCI0XCJcclxuICB9LFxyXG4gIG5vdGlmaWNhdGlvbnM6IHtcclxuICAgIHpJbmRleDogXCI0XCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJtZFwiKV06IHtcclxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgdG9wOiBcIjJweFwiLFxyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIFwiICsgd2hpdGVDb2xvcixcclxuICAgICAgcmlnaHQ6IFwiNHB4XCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjlweFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBkYW5nZXJDb2xvclswXSxcclxuICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIG1pbldpZHRoOiBcIjE2cHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjE2cHhcIixcclxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjE2cHhcIixcclxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcclxuICAgICAgZGlzcGxheTogXCJibG9ja1wiXHJcbiAgICB9LFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgLi4uZGVmYXVsdEZvbnQsXHJcbiAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiOHB4XCJcclxuICAgIH1cclxuICB9LFxyXG4gIG1hbmFnZXI6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgfSxcclxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJcclxuICB9LFxyXG4gIHNlYXJjaFdyYXBwZXI6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgIHdpZHRoOiBcIi13ZWJraXQtZmlsbC1hdmFpbGFibGVcIixcclxuICAgICAgbWFyZ2luOiBcIjEwcHggMTVweCAwXCJcclxuICAgIH0sXHJcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiXHJcbiAgfSxcclxuICB0cmFuc3BhcmVudDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIC8vIC4uLmRlZmF1bHRCb3hTaGFkb3dcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyTGlua3NTdHlsZTtcclxuXHJcblxyXG5jb25zdCBkcm9wZG93blN0eWxlID0gdGhlbWUgPT4gKHtcclxuICBidXR0b25MaW5rOiB7XHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgbWFyZ2luTGVmdDogXCIzMHB4XCIsXHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGlua3M6IHtcclxuICAgIHdpZHRoOiBcIjIwcHhcIixcclxuICAgIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgICB6SW5kZXg6IFwiNFwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICB3aWR0aDogXCIzMHB4XCIsXHJcbiAgICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgIGNvbG9yOiBncmF5Q29sb3JbOV0sXHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjE1cHhcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbGlua1RleHQ6IHtcclxuICAgIHpJbmRleDogXCI0XCIsXHJcbiAgICAuLi5kZWZhdWx0Rm9udCxcclxuICAgIGZvbnRTaXplOiBcIjE0cHhcIlxyXG4gIH0sXHJcbiAgcG9wcGVyQ2xvc2U6IHtcclxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXHJcbiAgfSxcclxuICBpY29uczp7XHJcbiAgICBjb2xvcjpcIiNmZmYgIWltcG9ydGFudFwiLFxyXG5cclxuICB9LFxyXG4gIHBvcHBlclJlc3BvbnNpdmU6IHtcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgIHpJbmRleDogXCIxNjQwXCIsXHJcbiAgICAgIHBvc2l0aW9uOiBcInN0YXRpY1wiLFxyXG4gICAgICBmbG9hdDogXCJub25lXCIsXHJcbiAgICAgIHdpZHRoOiBcImF1dG9cIixcclxuICAgICAgbWFyZ2luVG9wOiBcIjBcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJvcmRlcjogXCIwXCIsXHJcbiAgICAgIFdlYmtpdEJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgIGNvbG9yOiBcImJsYWNrXCJcclxuICAgIH1cclxuICB9LFxyXG4gIHBvcHBlck5hdjoge1xyXG4gICAgekluZGV4OiA4OTksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBwb3NpdGlvbjogXCJzdGF0aWMgIWltcG9ydGFudFwiLFxyXG4gICAgICBsZWZ0OiBcInVuc2V0ICFpbXBvcnRhbnRcIixcclxuICAgICAgdG9wOiBcInVuc2V0ICFpbXBvcnRhbnRcIixcclxuICAgICAgdHJhbnNmb3JtOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICB3aWxsQ2hhbmdlOiBcInVuc2V0ICFpbXBvcnRhbnRcIixcclxuICAgICAgXCImID4gZGl2XCI6IHtcclxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogXCIwcmVtXCIsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMHJlbVwiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjBweCAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjBweCAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwcHggIWltcG9ydGFudFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudCAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgXCImIHVsIGxpXCI6IHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZUNvbG9yICsgXCIgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjEwcHggMTVweCAwIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIxMHB4IDE1cHggIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImhzbGEoMCwwJSw3OCUsLjIpXCIsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGRyb3Bkb3duOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgICBib3JkZXI6IFwiMFwiLFxyXG4gICAgYm94U2hhZG93OiBcIjAgMnB4IDVweCAwIHJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjI2KVwiLFxyXG4gICAgdG9wOiBcIjEwMCVcIixcclxuICAgIHpJbmRleDogXCIxMDAwXCIsXHJcbiAgICBtaW5XaWR0aDogXCIxNjBweFwiLFxyXG4gICAgcGFkZGluZzogXCI1cHggMFwiLFxyXG4gICAgbWFyZ2luOiBcIjJweCAwIDBcIixcclxuICAgIGZvbnRTaXplOiBcIjE0cHhcIixcclxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgV2Via2l0QmFja2dyb3VuZENsaXA6IFwicGFkZGluZy1ib3hcIixcclxuICAgIGJhY2tncm91bmRDbGlwOiBcInBhZGRpbmctYm94XCJcclxuICB9LFxyXG4gIGRyb3Bkb3duSXRlbToge1xyXG4gICAgLi4uZGVmYXVsdEZvbnQsXHJcbiAgICBmb250U2l6ZTogXCIxM3B4XCIsXHJcbiAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiLFxyXG4gICAgbWFyZ2luOiBcIjAgNXB4XCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMnB4XCIsXHJcbiAgICBXZWJraXRUcmFuc2l0aW9uOiBcImFsbCAxNTBtcyBsaW5lYXJcIixcclxuICAgIE1velRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGxpbmVhclwiLFxyXG4gICAgT1RyYW5zaXRpb246IFwiYWxsIDE1MG1zIGxpbmVhclwiLFxyXG4gICAgTXNUcmFuc2l0aW9uOiBcImFsbCAxNTBtcyBsaW5lYXJcIixcclxuICAgIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGxpbmVhclwiLFxyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgY2xlYXI6IFwiYm90aFwiLFxyXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1NzE0M1wiLFxyXG4gICAgY29sb3I6IGdyYXlDb2xvcls4XSxcclxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICBoZWlnaHQ6IFwidW5zZXRcIixcclxuICAgIG1pbkhlaWdodDogXCJ1bnNldFwiLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3JbMF0sXHJcbiAgICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgICAuLi5wcmltYXJ5Qm94U2hhZG93XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbiIsImltcG9ydCB7XHJcbiAgZGVmYXVsdEZvbnQsXHJcbiAgcHJpbWFyeUJveFNoYWRvdyxcclxuICBpbmZvQm94U2hhZG93LFxyXG4gIHN1Y2Nlc3NCb3hTaGFkb3csXHJcbiAgd2FybmluZ0JveFNoYWRvdyxcclxuICBkYW5nZXJCb3hTaGFkb3csXHJcbiAgcm9zZUJveFNoYWRvdyxcclxuICB3aGl0ZUNvbG9yLFxyXG4gIGJsYWNrQ29sb3IsXHJcbiAgZ3JheUNvbG9yLFxyXG4gIGluZm9Db2xvcixcclxuICBzdWNjZXNzQ29sb3IsXHJcbiAgZGFuZ2VyQ29sb3IsXHJcbiAgcm9zZUNvbG9yLFxyXG4gIHByaW1hcnlDb2xvcixcclxuICB3YXJuaW5nQ29sb3IsXHJcbiAgaGV4VG9SZ2JcclxufSBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuXHJcbmNvbnN0IHNuYWNrYmFyQ29udGVudFN0eWxlID0ge1xyXG4gIHJvb3Q6IHtcclxuICAgIC4uLmRlZmF1bHRGb250LFxyXG4gICAgZmxleFdyYXA6IFwidW5zZXRcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjIwcHggMTVweFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIyMHB4XCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMjBweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTRweFwiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgY29sb3I6IGdyYXlDb2xvcls3XSxcclxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICAgIG1pbldpZHRoOiBcInVuc2V0XCIsXHJcbiAgICBtYXhXaWR0aDogXCJ1bnNldFwiLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMTJweCAyMHB4IC0xMHB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3aGl0ZUNvbG9yKSArXHJcbiAgICAgIFwiLCAwLjI4KSwgMCA0cHggMjBweCAwcHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgXCIsIDAuMTIpLCAwIDdweCA4cHggLTVweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iod2hpdGVDb2xvcikgK1xyXG4gICAgICBcIiwgMC4yKVwiXHJcbiAgfSxcclxuICB0b3AyMDoge1xyXG4gICAgdG9wOiBcIjIwcHhcIlxyXG4gIH0sXHJcbiAgdG9wNDA6IHtcclxuICAgIHRvcDogXCI0MHB4XCJcclxuICB9LFxyXG4gIGluZm86IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yWzNdLFxyXG4gICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAuLi5pbmZvQm94U2hhZG93XHJcbiAgfSxcclxuICBzdWNjZXNzOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvclszXSxcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgLi4uc3VjY2Vzc0JveFNoYWRvd1xyXG4gIH0sXHJcbiAgd2FybmluZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3JbM10sXHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIC4uLndhcm5pbmdCb3hTaGFkb3dcclxuICB9LFxyXG4gIGRhbmdlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBkYW5nZXJDb2xvclszXSxcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgLi4uZGFuZ2VyQm94U2hhZG93XHJcbiAgfSxcclxuICBwcmltYXJ5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvclszXSxcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgLi4ucHJpbWFyeUJveFNoYWRvd1xyXG4gIH0sXHJcbiAgcm9zZToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3JbM10sXHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIC4uLnJvc2VCb3hTaGFkb3dcclxuICB9LFxyXG4gIG1lc3NhZ2U6IHtcclxuICAgIHBhZGRpbmc6IFwiMFwiLFxyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgbWF4V2lkdGg6IFwiODklXCJcclxuICB9LFxyXG4gIGNsb3NlOiB7XHJcbiAgICB3aWR0aDogXCIxMXB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiMTFweFwiXHJcbiAgfSxcclxuICBpY29uQnV0dG9uOiB7XHJcbiAgICB3aWR0aDogXCIyNHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiMjRweFwiLFxyXG4gICAgcGFkZGluZzogXCIwcHhcIlxyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgbGVmdDogXCIxNXB4XCIsXHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgbWFyZ2luVG9wOiBcIi0xNXB4XCIsXHJcbiAgICB3aWR0aDogXCIzMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiMzBweFwiXHJcbiAgfSxcclxuICBpbmZvSWNvbjoge1xyXG4gICAgY29sb3I6IGluZm9Db2xvclszXVxyXG4gIH0sXHJcbiAgc3VjY2Vzc0ljb246IHtcclxuICAgIGNvbG9yOiBzdWNjZXNzQ29sb3JbM11cclxuICB9LFxyXG4gIHdhcm5pbmdJY29uOiB7XHJcbiAgICBjb2xvcjogd2FybmluZ0NvbG9yWzNdXHJcbiAgfSxcclxuICBkYW5nZXJJY29uOiB7XHJcbiAgICBjb2xvcjogZGFuZ2VyQ29sb3JbM11cclxuICB9LFxyXG4gIHByaW1hcnlJY29uOiB7XHJcbiAgICBjb2xvcjogcHJpbWFyeUNvbG9yWzNdXHJcbiAgfSxcclxuICByb3NlSWNvbjoge1xyXG4gICAgY29sb3I6IHJvc2VDb2xvclszXVxyXG4gIH0sXHJcbiAgaWNvbk1lc3NhZ2U6IHtcclxuICAgIHBhZGRpbmdMZWZ0OiBcIjUwcHhcIixcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxyXG4gIH0sXHJcbiAgYWN0aW9uUlRMOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcIi04cHhcIixcclxuICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIlxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNuYWNrYmFyQ29udGVudFN0eWxlO1xyXG4iLCJcclxuY29uc3QgaGV4VG9SZ2IgPSBpbnB1dCA9PiB7XHJcbiAgaW5wdXQgPSBpbnB1dCArIFwiXCI7XHJcbiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuICBsZXQgaGV4UmVnZXggPSAvWzAtOUEtRmEtZl0vZztcclxuICBpZiAoIWhleFJlZ2V4LnRlc3QoaW5wdXQpIHx8IChpbnB1dC5sZW5ndGggIT09IDMgJiYgaW5wdXQubGVuZ3RoICE9PSA2KSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiaW5wdXQgaXMgbm90IGEgdmFsaWQgaGV4IGNvbG9yLlwiKTtcclxuICB9XHJcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgbGV0IGZpcnN0ID0gaW5wdXRbMF07XHJcbiAgICBsZXQgc2Vjb25kID0gaW5wdXRbMV07XHJcbiAgICBsZXQgbGFzdCA9IGlucHV0WzJdO1xyXG4gICAgaW5wdXQgPSBmaXJzdCArIGZpcnN0ICsgc2Vjb25kICsgc2Vjb25kICsgbGFzdCArIGxhc3Q7XHJcbiAgfVxyXG4gIGlucHV0ID0gaW5wdXQudG9VcHBlckNhc2UoKTtcclxuICBsZXQgZmlyc3QgPSBpbnB1dFswXSArIGlucHV0WzFdO1xyXG4gIGxldCBzZWNvbmQgPSBpbnB1dFsyXSArIGlucHV0WzNdO1xyXG4gIGxldCBsYXN0ID0gaW5wdXRbNF0gKyBpbnB1dFs1XTtcclxuICByZXR1cm4gKFxyXG4gICAgcGFyc2VJbnQoZmlyc3QsIDE2KSArXHJcbiAgICBcIiwgXCIgK1xyXG4gICAgcGFyc2VJbnQoc2Vjb25kLCAxNikgK1xyXG4gICAgXCIsIFwiICtcclxuICAgIHBhcnNlSW50KGxhc3QsIDE2KVxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI2MDtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgdHJhbnNpdGlvbjogXCJhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKVwiXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXIgPSB7XHJcbiAgcGFkZGluZ1JpZ2h0OiBcIjE1cHhcIixcclxuICBwYWRkaW5nTGVmdDogXCIxNXB4XCIsXHJcbiAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxyXG4gIG1hcmdpbkxlZnQ6IFwiYXV0b1wiXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0Rm9udCA9IHtcclxuICBmb250RmFtaWx5OiAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyxcclxuICBmb250V2VpZ2h0OiBcIjMwMFwiLFxyXG4gIGxpbmVIZWlnaHQ6IFwiMS41ZW1cIlxyXG59O1xyXG5cclxuY29uc3QgcHJpbWFyeUNvbG9yID0gW1wiIzFhYjliOVwiLCBcIiMxYWI5YjlcIiwgXCIjMWFiOWI5XCIsIFwiIzFhYjliOVwiXTtcclxuY29uc3Qgd2FybmluZ0NvbG9yID0gW1wiI2ZmOTgwMFwiLCBcIiNmZmE3MjZcIiwgXCIjZmI4YzAwXCIsIFwiI2ZmYTIxYVwiXTtcclxuY29uc3QgZGFuZ2VyQ29sb3IgPSBbXCIjZjEwMDBmXCIsIFwiI2ZmMWQxZlwiLCBcIiNmZjNhMmVcIiwgXCIjZmY1MjNkXCJdO1xyXG5jb25zdCBzdWNjZXNzQ29sb3IgPSBbXCIjNGNhZjUwXCIsIFwiIzYyYzQ2M1wiLCBcIiM4ZGNhODlcIiwgXCIjYzdlNWMzXCJdO1xyXG5jb25zdCBpbmZvQ29sb3IgPSBbXCIjMDBhY2MxXCIsIFwiIzI2YzZkYVwiLCBcIiMwMGFjYzFcIiwgXCIjMDBkM2VlXCJdO1xyXG5jb25zdCByb3NlQ29sb3IgPSBbXCIjZTkxZTYzXCIsIFwiI2VjNDA3YVwiLCBcIiNkODFiNjBcIiwgXCIjZWIzNTczXCJdO1xyXG5jb25zdCBncmF5Q29sb3IgPSBbXHJcbiAgXCIjOTk5XCIsXHJcbiAgXCIjNzc3XCIsXHJcbiAgXCIjM0M0ODU4XCIsXHJcbiAgXCIjQUFBQUFBXCIsXHJcbiAgXCIjRDJEMkQyXCIsXHJcbiAgXCIjREREXCIsXHJcbiAgXCIjYjRiNGI0XCIsXHJcbiAgXCIjNTU1NTU1XCIsXHJcbiAgXCIjMzMzXCIsXHJcbiAgXCIjYTlhZmJiXCIsXHJcbiAgXCIjZWVlXCIsXHJcbiAgXCIjZTdlN2U3XCJcclxuXTtcclxuY29uc3QgYmxhY2tDb2xvciA9IFwiIzAwMFwiO1xyXG5jb25zdCB3aGl0ZUNvbG9yID0gXCIjRkZGXCI7XHJcblxyXG5jb25zdCBib3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDEwcHggMzBweCAtMTJweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjQyKSwgMCA0cHggMjVweCAwcHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjIpXCJcclxufTtcclxuXHJcbmNvbnN0IHByaW1hcnlCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiXHJcbn07XHJcbmNvbnN0IGluZm9Cb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiXHJcbn07XHJcbmNvbnN0IHN1Y2Nlc3NCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiXHJcbn07XHJcbmNvbnN0IHdhcm5pbmdCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiXHJcbn07XHJcbmNvbnN0IGRhbmdlckJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIlxyXG59O1xyXG5jb25zdCByb3NlQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIlxyXG59O1xyXG5cclxuY29uc3Qgd2FybmluZ0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHdhcm5pbmdDb2xvclsxXSArIFwiLCBcIiArIHdhcm5pbmdDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLndhcm5pbmdCb3hTaGFkb3dcclxufTtcclxuY29uc3Qgc3VjY2Vzc0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHN1Y2Nlc3NDb2xvclsxXSArIFwiLCBcIiArIHN1Y2Nlc3NDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLnN1Y2Nlc3NCb3hTaGFkb3dcclxufTtcclxuY29uc3QgZGFuZ2VyQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgZGFuZ2VyQ29sb3JbMV0gKyBcIiwgXCIgKyBkYW5nZXJDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLmRhbmdlckJveFNoYWRvd1xyXG59O1xyXG5jb25zdCBpbmZvQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgaW5mb0NvbG9yWzFdICsgXCIsIFwiICsgaW5mb0NvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uaW5mb0JveFNoYWRvd1xyXG59O1xyXG5jb25zdCBwcmltYXJ5Q2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgcHJpbWFyeUNvbG9yWzFdICsgXCIsIFwiICsgcHJpbWFyeUNvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4ucHJpbWFyeUJveFNoYWRvd1xyXG59O1xyXG5jb25zdCByb3NlQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgcm9zZUNvbG9yWzFdICsgXCIsIFwiICsgcm9zZUNvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4ucm9zZUJveFNoYWRvd1xyXG59O1xyXG5cclxuY29uc3QgY2FyZEFjdGlvbnMgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMjBweCAxMHB4XCIsXHJcbiAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXHJcbiAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCBcIiArIGdyYXlDb2xvclsxMF0sXHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAuLi5kZWZhdWx0Rm9udFxyXG59O1xyXG5cclxuY29uc3QgY2FyZEhlYWRlciA9IHtcclxuICBtYXJnaW46IFwiLTIwcHggMTVweCAwXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gIHBhZGRpbmc6IFwiMTVweFwiXHJcbn07XHJcblxyXG5jb25zdCBjYXJkID0ge1xyXG4gIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgbWFyZ2luOiBcIjI1cHggMFwiLFxyXG4gIGJveFNoYWRvdzogXCIwIDFweCA0cHggMCByZ2JhKFwiICsgaGV4VG9SZ2IoYmxhY2tDb2xvcikgKyBcIiwgMC4xNClcIixcclxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgY29sb3I6IFwicmdiYShcIiArIGhleFRvUmdiKGJsYWNrQ29sb3IpICsgXCIsIDAuODcpXCIsXHJcbiAgYmFja2dyb3VuZDogd2hpdGVDb2xvclxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdEJveFNoYWRvdyA9IHtcclxuICBib3JkZXI6IFwiMFwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgMTBweCAyMHB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuNDIpLCAwIDNweCAyMHB4IDBweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMilcIixcclxuICBwYWRkaW5nOiBcIjEwcHggMFwiLFxyXG4gIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGVhc2UgMHNcIlxyXG59O1xyXG5cclxuY29uc3QgdGl0bGUgPSB7XHJcbiAgY29sb3I6IGdyYXlDb2xvclsyXSxcclxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgZm9udFdlaWdodDogXCIzMDBcIixcclxuICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxyXG4gIG1hcmdpbkJvdHRvbTogXCIyNXB4XCIsXHJcbiAgbWluSGVpZ2h0OiBcIjMycHhcIixcclxuICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZlwiLFxyXG4gIFwiJiBzbWFsbFwiOiB7XHJcbiAgICBjb2xvcjogZ3JheUNvbG9yWzFdLFxyXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMVwiXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2FyZFRpdGxlID0ge1xyXG4gIC4uLnRpdGxlLFxyXG4gIG1hcmdpblRvcDogXCIwXCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjNweFwiLFxyXG4gIG1pbkhlaWdodDogXCJhdXRvXCIsXHJcbiAgXCImIGFcIjoge1xyXG4gICAgLi4udGl0bGUsXHJcbiAgICBtYXJnaW5Ub3A6IFwiLjYyNXJlbVwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjAuNzVyZW1cIixcclxuICAgIG1pbkhlaWdodDogXCJhdXRvXCJcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjYXJkU3VidGl0bGUgPSB7XHJcbiAgbWFyZ2luVG9wOiBcIi0uMzc1cmVtXCJcclxufTtcclxuXHJcbmNvbnN0IGNhcmRMaW5rID0ge1xyXG4gIFwiJiArICRjYXJkTGlua1wiOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcIjEuMjVyZW1cIlxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgaGV4VG9SZ2IsXHJcbiAgLy92YXJpYWJsZXNcclxuICBkcmF3ZXJXaWR0aCxcclxuICB0cmFuc2l0aW9uLFxyXG4gIGNvbnRhaW5lcixcclxuICBib3hTaGFkb3csXHJcbiAgY2FyZCxcclxuICBkZWZhdWx0Rm9udCxcclxuICBwcmltYXJ5Q29sb3IsXHJcbiAgd2FybmluZ0NvbG9yLFxyXG4gIGRhbmdlckNvbG9yLFxyXG4gIHN1Y2Nlc3NDb2xvcixcclxuICBpbmZvQ29sb3IsXHJcbiAgcm9zZUNvbG9yLFxyXG4gIGdyYXlDb2xvcixcclxuICBibGFja0NvbG9yLFxyXG4gIHdoaXRlQ29sb3IsXHJcbiAgcHJpbWFyeUJveFNoYWRvdyxcclxuICBpbmZvQm94U2hhZG93LFxyXG4gIHN1Y2Nlc3NCb3hTaGFkb3csXHJcbiAgd2FybmluZ0JveFNoYWRvdyxcclxuICBkYW5nZXJCb3hTaGFkb3csXHJcbiAgcm9zZUJveFNoYWRvdyxcclxuICB3YXJuaW5nQ2FyZEhlYWRlcixcclxuICBzdWNjZXNzQ2FyZEhlYWRlcixcclxuICBkYW5nZXJDYXJkSGVhZGVyLFxyXG4gIGluZm9DYXJkSGVhZGVyLFxyXG4gIHByaW1hcnlDYXJkSGVhZGVyLFxyXG4gIHJvc2VDYXJkSGVhZGVyLFxyXG4gIGNhcmRBY3Rpb25zLFxyXG4gIGNhcmRIZWFkZXIsXHJcbiAgZGVmYXVsdEJveFNoYWRvdyxcclxuICB0aXRsZSxcclxuICBjYXJkVGl0bGUsXHJcbiAgY2FyZFN1YnRpdGxlLFxyXG4gIGNhcmRMaW5rXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG4vLyBtYXRlcmlhbC11aSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5cclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZpbGVVcGxvYWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL2Fzc2V0cy9qc3MvYnV0dG9uU3R5bGUuanNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ3VsYXJCdXR0b24ocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgY29sb3IsXHJcbiAgICByb3VuZCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBzaW1wbGUsXHJcbiAgICBzaXplLFxyXG4gICAgYmxvY2ssXHJcbiAgICBsaW5rLFxyXG4gICAganVzdEljb24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBtdWlDbGFzc2VzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBidG5DbGFzc2VzID0gY2xhc3NOYW1lcyh7XHJcbiAgICBbY2xhc3Nlcy5idXR0b25dOiB0cnVlLFxyXG4gICAgW2NsYXNzZXNbc2l6ZV1dOiBzaXplLFxyXG4gICAgW2NsYXNzZXNbY29sb3JdXTogY29sb3IsXHJcbiAgICBbY2xhc3Nlcy5yb3VuZF06IHJvdW5kLFxyXG4gICAgW2NsYXNzZXMuZGlzYWJsZWRdOiBkaXNhYmxlZCxcclxuICAgIFtjbGFzc2VzLnNpbXBsZV06IHNpbXBsZSxcclxuICAgIFtjbGFzc2VzLmJsb2NrXTogYmxvY2ssXHJcbiAgICBbY2xhc3Nlcy5saW5rXTogbGluayxcclxuICAgIFtjbGFzc2VzLmp1c3RJY29uXToganVzdEljb24sXHJcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gey4uLnJlc3R9IGNsYXNzZXM9e211aUNsYXNzZXN9IGNsYXNzTmFtZT17YnRuQ2xhc3Nlc30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn1cclxuXHJcblJlZ3VsYXJCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgXCJwcmltYXJ5XCIsXHJcbiAgICBcImluZm9cIixcclxuICAgIFwic3VjY2Vzc1wiLFxyXG4gICAgXCJ3YXJuaW5nXCIsXHJcbiAgICBcImRhbmdlclwiLFxyXG4gICAgXCJyb3NlXCIsXHJcbiAgICBcIndoaXRlXCIsXHJcbiAgICBcInRyYW5zcGFyZW50XCJcclxuICBdKSxcclxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJsZ1wiXSksXHJcbiAgc2ltcGxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICByb3VuZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGJsb2NrOiBQcm9wVHlwZXMuYm9vbCxcclxuICBsaW5rOiBQcm9wVHlwZXMuYm9vbCxcclxuICBqdXN0SWNvbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8vIHVzZSB0aGlzIHRvIHBhc3MgdGhlIGNsYXNzZXMgcHJvcHMgZnJvbSBNYXRlcmlhbC1VSVxyXG4gIG11aUNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuLy8gaW1wb3J0IHtMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IHtGYVR3aXR0ZXIsIEZhRmFjZWJvb2tGLCBGYUxpbmtlZGluSW59IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQgeyBJb0xvY2F0aW9uT3V0bGluZX0gZnJvbSAncmVhY3QtaWNvbnMvaW81J1xyXG5pbXBvcnQge0lvSW9zUGhvbmVQb3J0cmFpdH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nXHJcbmltcG9ydCB7QWlPdXRsaW5lSW5zdGFncmFtfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuXHJcblxyXG5pbXBvcnQgY29udGVudEZSIGZyb20gJy4vLi4vY29udGVudEZSJ1xyXG5pbXBvcnQgY29udGVudEVOIGZyb20gJy4vLi4vY29udGVudEVOJ1xyXG5pbXBvcnQgY29udGVudEFSIGZyb20gJy4vLi4vY29udGVudEFSJ1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGl2Rm9vdGVyKCl7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbc2NyZWVuV2lkdGgsIHNldFNjcmVlbldpZHRoXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnN0IHtsb2NhbGV9ID0gcm91dGVyO1xyXG4gICAgY29uc3QgY29udGVudCA9IGxvY2FsZSA9PT0gXCJhclwiID8gY29udGVudEFSIDogbG9jYWxlID09PSBcImVuXCIgPyBjb250ZW50RU4gOiBjb250ZW50RlI7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XHJcbiAgICAgICAgICAgICAgc2V0U2NyZWVuV2lkdGgod2luZG93LmlubmVyV2lkdGgpXHJcbiAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTaXplKTtcclxuICAgICAgICAgIHVwZGF0ZVNpemUoKTtcclxuICAgIFxyXG4gICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlU2l6ZSlcclxuICAgICAgICAgIH1cclxuICAgICAgfSwgW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHB0LTUgcGItMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWFyb3VuZCBmb290ZXItZWxlbWVudCBjb3B5cmlnaHQtcGFyZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiMTJcIiBsZz1cIjEyXCIgY2xhc3NOYW1lPVwiY29weXJpZ2h0IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBsb2dvXCIgc3JjPXtcIi9pbWFnZS9Eb2N0b2xpdmUuc3ZnXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7CqSAyMDIxIERvY3RvbGl2ZSB0b3VzIGRyb2l0cyByw6lzZXJ2w6lzLiAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1hcm91bmQgZm9vdGVyLWVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI0XCIgbGc9XCI0XCIgY2xhc3NOYW1lPVwiZmlyc3QtY29sdW1uIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBhcz1cInVsXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIGFzPVwibGlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2RvY3Rvci5kb2N0b2xpdmUubWEvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwieWItbGlua1wiID57Y29udGVudC5mb290ZXIucGFydG5lcn0gPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIGFzPVwibGlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50L25ld1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cInliLWxpbmtcIiA+e2NvbnRlbnQuZm9vdGVyLnNpZ25pbn0gPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gYXM9XCJsaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpdmFjeS1wb2xpY3lcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJ5Yi1saW5rXCIgPiB7Y29udGVudC5mb290ZXIucG9saXRpcXVlfSA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIGFzPVwibGlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZXJtcy1vZi11c2VcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJ5Yi1saW5rXCIgPiB7Y29udGVudC5mb290ZXIuY29uZGl0aW9ufSA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSBhcz1cImxpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVybXMtb2YtdXNlXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwieWItbGlua1wiID4ge2NvbnRlbnQuZm9vdGVyLmNvbmRpdGlvbjJ9IDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI0XCIgbGc9XCI0XCIgY2xhc3NOYW1lPVwiZmlyc3QtY29sdW1uIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBhcz1cInVsXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIGFzPVwibGlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2RvY3Rvci5kb2N0b2xpdmUubWEvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwieWItbGlua1wiID57Y29udGVudC5mb290ZXIucmVnbGVfZGVfcn0gPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIGFzPVwibGlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50L25ld1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGNsYXNzTmFtZT1cInliLWxpbmtcIiA+e2NvbnRlbnQuZm9vdGVyLm1lbnRpb25zX2xlZ30gPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gYXM9XCJsaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJpdmFjeS1wb2xpY3lcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBjbGFzc05hbWU9XCJ5Yi1saW5rXCIgPiB7Y29udGVudC5mb290ZXIuQ29va2llc30gPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSBhcz1cImxpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVybXMtb2YtdXNlXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwieWItbGlua1wiID4ge2NvbnRlbnQuZm9vdGVyLnByb3RlY3RfZG9ubmVzX3BlcnNvfSA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSBhcz1cImxpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVybXMtb2YtdXNlXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwieWItbGlua1wiID4ge2NvbnRlbnQuZm9vdGVyLmdlc3Rpb25fZGVfY29va2llc30gPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNFwiIGxnPVwiNFwiIGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxJb0xvY2F0aW9uT3V0bGluZSBzaXplPVwiMjRcIiAvPiB7Y29udGVudC5mb290ZXIuYWRyZXNzfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48SW9Jb3NQaG9uZVBvcnRyYWl0IHNpemU9XCIyNFwiIC8+ICsyMTIgNjg4NzM5NDcyIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBtdC01IG1iLTUgcmVzZWF1LXNjaWF1eFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2ZhY2Vib29rLmNvbS9Eb2N0b2xpdmVBcHBcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgaWNvbi1sb2dvXCIgc3JjPXtcIi9pbWFnZS9mYWNlYm9vay1sb2dvLnN2Z1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9kb2N0b2xpdmVfb2ZmaWNpZWwvP2hsPWZyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGljb24tbG9nb1wiIHNyYz17XCIvaW1hZ2UvaW5zdGFncmFtLWljb24uc3ZnXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZG9jdG9saXZlX29mZmljaWVsLz9obD1mclwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpY29uLWxvZ29cIiBzcmM9e1wiL2ltYWdlL2xpbmtlZGluLWxvZ28uc3ZnXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZG9jdG9saXZlX29mZmljaWVsLz9obD1mclwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpY29uLWxvZ29cIiBzcmM9e1wiL2ltYWdlL2VtYWlsLWxvZ28uc3ZnXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZG9jdG9saXZlX29mZmljaWVsLz9obD1mclwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBpY29uLWxvZ29cIiBzcmM9e1wiL2ltYWdlL3Rpa3Rvay1sb2dvLnN2Z1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuZ1N3aXRjaGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCB7bG9jYWxlLCBwYXRobmFtZX0gPSByb3V0ZXI7XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoTGFuZyA9IChsYW5nKSA9PntcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChyb3V0ZXIuYXNQYXRoLCByb3V0ZXIuYXNQYXRoLCB7IGxvY2FsZTogbGFuZyB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBBcmFiID0gKCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW5nLWxhbmdcIiAgaWQ9XCJhclwiIG9uQ2xpY2s9eygpID0+IHN3aXRjaExhbmcoXCJhclwiKX0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGFuZy1mbGFnXCIgc3JjPVwiL2ltYWdlL21vcm9jY28tY2lyY3VsYXIucG5nXCIgYWx0PVwiYXJhYlwiLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGFuZy10ZXh0XCI+ICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBjb25zdCBmcmVuc2ggPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwic2VsZWN0aW5nLWxhbmdcIiBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hMYW5nKFwiZnJcIil9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxhbmctZmxhZ1wiIHNyYz1cIi9pbWFnZS9mcmFuY2UucG5nXCIgYWx0PVwiZnJhbsOnYWlzXCIvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYW5nLXRleHRcIiA+PC9wPlxyXG5cdCAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIGNvbnN0IGVuZ2xpc2ggPSAoKSA9PiAoXHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwic2VsZWN0aW5nLWxhbmdcIiBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hMYW5nKFwiZW5cIil9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxhbmctZmxhZ1wiIHNyYz1cIi9pbWFnZS91bml0ZWQta2luZ2RvbS5wbmdcIiBhbHQ9XCJFbmdsaXNoXCIvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsYW5nLXRleHRcIiA+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoLWxhbmdcIj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeyAgbG9jYWxlID09PSBcImVuXCIgPyBudWxsIDogZW5nbGlzaCgpICB9XHJcbiAgICAgICAgICAgICAgICAgICAgeyBsb2NhbGUgPT09IFwiZnJcIiA/IG51bGwgOiAgZnJlbnNoKCkgfVxyXG4gICAgICAgICAgICAgICAgICAgIHsgbG9jYWxlID09PSBcImFyXCI/ICBudWxsIDogQXJhYigpICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAgTmF2YmFyICBmcm9tICcuLy4uL2NvbXBvbmVudHMvUGF0aWVudFB1YmxpY05hdmJhcic7XHJcbmltcG9ydCAgQXV0aE5hdmJhciAgZnJvbSAnLi8uLi9jb21wb25lbnRzL1BhdGllbnRQcm9OYXZiYXInO1xyXG5pbXBvcnQgIEZvb3RlciAgZnJvbSAnLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5pbXBvcnQge3VzZUF1dGh9IGZyb20gJy4vLi4vY29udGV4dC9BdXRoQ29udGV4dCdcclxuXHJcbmltcG9ydCBTbmFja2JhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TbmFja2Jhci9TbmFja2Jhci5qc1wiO1xyXG5cclxuaW1wb3J0IHt1c2VBcHBDb250ZXh0fSBmcm9tICcuLy4uL2NvbnRleHQvQXBwb2ludGVtZW50Q29udGV4dCdcclxuXHJcbmltcG9ydCB7TWRBZGRBbGVydH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe2NoaWxkcmVuLCBsb2NhbGUsIHBhdGhuYW1lfSkge1xyXG4gICAgY29uc3QgeyB0ZW1wb3JhcnlfYXBwb2ludG1lbnQsIHNldFVzZXJUZW1wb3JhcnkgfSA9IHVzZUFwcENvbnRleHQoKTtcclxuXHJcbiAgICBjb25zdCBbU2hvd05vdGlmLCBzZXRTaG93Tm90aWZdID0gdXNlU3RhdGUodGVtcG9yYXJ5X2FwcG9pbnRtZW50Py5tZWRlY2luSWQgJiYgcGF0aG5hbWUgIT09IFwiL2RvY3Rvci9baWRdL2FwcG9pbnRtZW50XCIgID8gdHJ1ZSA6IGZhbHNlIClcclxuICAgIGNvbnN0IFtoaWRlLCBzZXRIaWRlZl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbaXNBdXRoLCBzZXRJc0F1dGhdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHsgdXNlckRhdGEgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZih1c2VyRGF0YSl7XHJcbiAgICAgICAgICAgIHNldElzQXV0aCh1c2VyRGF0YS5pc0F1dGgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZXJEYXRhXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGF0aG5hbWUpXHJcblxyXG4gICAgICAgIHNldFNob3dOb3RpZih0ZW1wb3JhcnlfYXBwb2ludG1lbnQ/Lm1lZGVjaW5JZCAmJiBwYXRobmFtZSAhPT0gXCIvZG9jdG9yL1tpZF0vYXBwb2ludG1lbnRcIiA/IHRydWUgOiBmYWxzZSlcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RlbXBvcmFyeV9hcHBvaW50bWVudF0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpc0F1dGggPyBcclxuICAgICAgICAgICAgICAgIDxBdXRoTmF2YmFyIC8+XHJcbiAgICAgICAgICAgICAgICA6IDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPG1haW4gc3R5bGU9eyBsb2NhbGUgPT09IFwiYXJcIiA/IHtkaXJlY3Rpb246IFwicnRsXCIsIHRleHRBbGlnbjogXCJyaWdodFwifToge2RpcmVjdGlvbjogXCJsdHJcIn19IGNsYXNzTmFtZT17XCJtYWluXCIgKyAoaXNBdXRoPyBcIiBhdXRoZW50aWZpZWRcIiA6IFwiXCIpfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZT1cImJyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e01kQWRkQWxlcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT1cIkF0dGVudGlvbiwgdm90cmUgUkRWIG4nZXN0IHBhcyBlbmNvcmUgY29uZmlybcOpLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17U2hvd05vdGlmICYmICFoaWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCJGaW5pciBsZSBwcm9jZXNzdXMgZGUgcsOpc2VydmF0aW9uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua1BhdGg9XCIvZG9jdG9yLzEvYXBwb2ludG1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlTm90aWZpY2F0aW9uPXsoKSA9PntzZXRIaWRlZih0cnVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwibGV0IE1vbWVudExhbmd1ZSA9e1xyXG4gICAgZnI6IHtcclxuICAgIGludmFsaWREYXRlIDogXCJEYXRlIG5vbiBwcsOpY2lzw6llXCIsXHJcbiAgICBtb250aHMgOiAnamFudmllcl9mw6l2cmllcl9tYXJzX2F2cmlsX21haV9qdWluX2p1aWxsZXRfYW/Du3Rfc2VwdGVtYnJlX29jdG9icmVfbm92ZW1icmVfZMOpY2VtYnJlJy5zcGxpdCgnXycpLFxyXG4gICAgbW9udGhzU2hvcnQgOiAnamFudi5fZsOpdnIuX21hcnNfYXZyLl9tYWlfanVpbl9qdWlsLl9hb8O7dF9zZXB0Ll9vY3QuX25vdi5fZMOpYy4nLnNwbGl0KCdfJyksXHJcbiAgICBtb250aHNQYXJzZUV4YWN0IDogdHJ1ZSxcclxuICAgIHdlZWtkYXlzIDogJ2RpbWFuY2hlX2x1bmRpX21hcmRpX21lcmNyZWRpX2pldWRpX3ZlbmRyZWRpX3NhbWVkaScuc3BsaXQoJ18nKSxcclxuICAgIHdlZWtkYXlzU2hvcnQgOiAnZGltLl9sdW4uX21hci5fbWVyLl9qZXUuX3Zlbi5fc2FtLicuc3BsaXQoJ18nKSxcclxuICAgIHdlZWtkYXlzTWluIDogJ0RpX0x1X01hX01lX0plX1ZlX1NhJy5zcGxpdCgnXycpLFxyXG4gICAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcclxuICAgIGxvbmdEYXRlRm9ybWF0IDoge1xyXG4gICAgICAgTFQgOiAnSEg6bW0nLFxyXG4gICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcclxuICAgICAgIEwgOiAnREQvTU0vWVlZWScsXHJcbiAgICAgICBMTCA6ICdEIE1NTU0gWVlZWScsXHJcbiAgICAgICBMTEwgOiAnRCBNTU1NIFlZWVkgw6AgSEg6bW0nLFxyXG4gICAgICAgTExMTCA6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xyXG4gICB9LFxyXG4gICBjYWxlbmRhciA6IHtcclxuICAgICAgIHNhbWVEYXkgOiAnW0F1am91cmTigJlodWkgw6BdIExUJyxcclxuICAgICAgIG5leHREYXkgOiAnW0RlbWFpbiDDoF0gTFQnLFxyXG4gICAgICAgbmV4dFdlZWsgOiAnZGRkZCBbw6BdIExUJyxcclxuICAgICAgIGxhc3REYXkgOiAnW0hpZXIgw6BdIExUJyxcclxuICAgICAgIGxhc3RXZWVrIDogJ2RkZGQgW2Rlcm5pZXIgw6BdIExUJyxcclxuICAgICAgIHNhbWVFbHNlIDogJ0xMTCdcclxuICAgfSxcclxuICAgcmVsYXRpdmVUaW1lIDoge1xyXG4gICAgICAgZnV0dXJlIDogJ2RhbnMgJXMnLFxyXG4gICAgICAgcGFzdCA6ICdpbCB5IGEgJXMnLFxyXG4gICAgICAgcyA6ICdxdWVscXVlcyBzZWNvbmRlcycsXHJcbiAgICAgICBtIDogJ3VuZSBtaW51dGUnLFxyXG4gICAgICAgbW0gOiAnJWQgbWludXRlcycsXHJcbiAgICAgICBoIDogJ3VuZSBoZXVyZScsXHJcbiAgICAgICBoaCA6ICclZCBoZXVyZXMnLFxyXG4gICAgICAgZCA6ICd1biBqb3VyJyxcclxuICAgICAgIGRkIDogJyVkIGpvdXJzJyxcclxuICAgICAgIE0gOiAndW4gbW9pcycsXHJcbiAgICAgICBNTSA6ICclZCBtb2lzJyxcclxuICAgICAgIHkgOiAndW4gYW4nLFxyXG4gICAgICAgeXkgOiAnJWQgYW5zJ1xyXG4gICB9LFxyXG4gICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIDogL1xcZHsxLDJ9KGVyfGUpLyxcclxuICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcclxuICAgICAgIHJldHVybiBudW1iZXIgKyAobnVtYmVyID09PSAxID8gJ2VyJyA6ICdlJyk7XHJcbiAgIH0sXHJcbiAgIG1lcmlkaWVtUGFyc2UgOiAvUER8TUQvLFxyXG4gICBpc1BNIDogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICByZXR1cm4gaW5wdXQuY2hhckF0KDApID09PSAnTSc7XHJcbiAgIH0sXHJcbiAgIC8vIEluIGNhc2UgdGhlIG1lcmlkaWVtIHVuaXRzIGFyZSBub3Qgc2VwYXJhdGVkIGFyb3VuZCAxMiwgdGhlbiBpbXBsZW1lbnRcclxuICAgLy8gdGhpcyBmdW5jdGlvbiAobG9vayBhdCBsb2NhbGUvaWQuanMgZm9yIGFuIGV4YW1wbGUpLlxyXG4gICAvLyBtZXJpZGllbUhvdXIgOiBmdW5jdGlvbiAoaG91ciwgbWVyaWRpZW0pIHtcclxuICAgLy8gICAgIHJldHVybiAvKiAwLTIzIGhvdXIsIGdpdmVuIG1lcmlkaWVtIHRva2VuIGFuZCBob3VyIDEtMTIgKi8gO1xyXG4gICAvLyB9LFxyXG4gICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xyXG4gICAgICAgcmV0dXJuIGhvdXJzIDwgMTIgPyAnUEQnIDogJ01EJztcclxuICAgfSxcclxuICAgd2VlayA6IHtcclxuICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgICAgZG95IDogNCAgLy8gVXNlZCB0byBkZXRlcm1pbmUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICAgfVxyXG59LFxyXG5tYTogIHtcclxuICAgaW52YWxpZERhdGUgOiBcItiq2KfYsdmK2K4g2LrZitixINmF2K3Yr9ivXCIsXHJcbiAgIG1vbnRocyA6IFtcItmK2YbYp9mK2LFcIiAsXCLZgdio2LHYp9mK2LFcIiAsXCLZhdin2LHYs1wiICxcItin2KjYsdmK2YRcIiAsXCLZhdin2YrZiFwiLCBcItmK2YjZhtmK2YhcIiAsXCLZitmI2YTZitmIXCIsIFwi2KPYutiz2LfYs1wiICxcItiz2KjYqtmF2KjYsVwiLCBcItij2YPYqtmI2KjYsVwiLCBcItmG2YjZgdmF2KjYsVwiLFwi2K/Zitiz2YXYqNixXCJdLFxyXG4gICBtb250aHNTaG9ydCA6IFtcItmK2YbYp9mK2LFcIiAsXCLZgdio2LHYp9mK2LFcIiAsXCLZhdin2LHYs1wiICxcItin2KjYsdmK2YRcIiAsXCLZhdin2YrZiFwiLCBcItmK2YjZhtmK2YhcIiAsXCLZitmI2YTZitmIXCIsIFwi2KPYutiz2LfYs1wiICxcItiz2KjYqtmF2KjYsVwiLCBcItij2YPYqtmI2KjYsVwiLCBcItmG2YjZgdmF2KjYsVwiLFwi2K/Zitiz2YXYqNixXCJdLFxyXG4gICBtb250aHNQYXJzZUV4YWN0IDogdHJ1ZSxcclxuICAgd2Vla2RheXMgOiAgW1wi2Y7Yp9mE2KPZjtit2Y7Yr9mQXCIsXCLYp9mE2KfYq9mS2YbZjtmK2ZLZhtmQXCIsXCLYp9mE2KvZkdmP2YTYp9mO2KvZjtin2KHZkFwiLFwi2KfZhNij2Y7YsdmS2KjZkNi52Y7Yp9ih2ZBcIiAsXCLYp9mE2ZLYrtmO2YXZkNmK2LPZkFwiLFwi2KfZhNmS2KzZj9mF2Y/YudmO2KnZkFwiLCBcItin2YTYs9mR2Y7YqNmS2KrZkFwiXSxcclxuICAgd2Vla2RheXNTaG9ydCA6IFtcItmO2KfZhNij2Y7YrdmO2K/ZkFwiLFwi2KfZhNin2KvZktmG2Y7ZitmS2YbZkFwiLFwi2KfZhNir2ZHZj9mE2KfZjtir2Y7Yp9ih2ZBcIixcItin2YTYo9mO2LHZktio2ZDYudmO2KfYodmQXCIgLFwi2KfZhNmS2K7ZjtmF2ZDZitiz2ZBcIixcItin2YTZktis2Y/ZhdmP2LnZjtip2ZBcIiwgXCLYp9mE2LPZkdmO2KjZktiq2ZBcIl0sXHJcbiAgIHdlZWtkYXlzTWluIDogW1wi2Y7Yp9mE2KPZjtit2Y7Yr9mQXCIsXCLYp9mE2KfYq9mS2YbZjtmK2ZLZhtmQXCIsXCLYp9mE2KvZkdmP2YTYp9mO2KvZjtin2KHZkFwiLFwi2KfZhNij2Y7YsdmS2KjZkNi52Y7Yp9ih2ZBcIiAsXCLYp9mE2ZLYrtmO2YXZkNmK2LPZkFwiLFwi2KfZhNmS2KzZj9mF2Y/YudmO2KnZkFwiLCBcItin2YTYs9mR2Y7YqNmS2KrZkFwiXSxcclxuICAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcclxuICAgbG9uZ0RhdGVGb3JtYXQgOiB7XHJcbiAgICAgICBMVCA6ICdISDptbScsXHJcbiAgICAgICBMVFMgOiAnSEg6bW06c3MnLFxyXG4gICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcclxuICAgICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcclxuICAgICAgIExMTCA6ICdkZGRkIEQgTU1NTSBZWVlZINi52YTZiSDYp9mE2LPYp9i52KkgSEg6bW0nLFxyXG4gICAgICAgTExMTCA6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xyXG4gICB9LFxyXG4gICBjYWxlbmRhciA6IHtcclxuICAgICAgIHNhbWVEYXkgOiAnW9in2YTZitmI2YUg2LnZhNmJINin2YTYs9in2LnYqV0gTFQnLFxyXG4gICAgICAgbmV4dERheSA6ICdb2LrYr9inINi52YTZiSDYp9mE2LPYp9i52KldIExUJyxcclxuICAgICAgIG5leHRXZWVrIDogJ2RkZGQgW9i52YTZiSDYp9mE2LPYp9i52KldIExUJyxcclxuICAgICAgIGxhc3REYXkgOiAnW9in2YTYp9mF2LMg2LnZhNmJINin2YTYs9in2LnYqV0gTFQnLFxyXG4gICAgICAgbGFzdFdlZWsgOiAnZGRkZCBb2KfZhNmF2KfYttmKINi52YTZiSDYp9mE2LPYp9i52KldIExUJyxcclxuICAgICAgIHNhbWVFbHNlIDogJ0xMTCdcclxuICAgfSxcclxuICAgcmVsYXRpdmVUaW1lIDoge1xyXG4gICAgICAgZnV0dXJlIDogJ9iu2YTYp9mEICVzJyxcclxuICAgICAgIHBhc3QgOiAn2YLYqNmEICVzJyxcclxuICAgICAgIHMgOiAn2LrYttmI2YYg2KvZiNin2YbZiicsXHJcbiAgICAgICBtIDogJ9iv2YLZitmC2KknLFxyXG4gICAgICAgbW0gOiAnJWQg2K/Zgtin2KbZgicsXHJcbiAgICAgICBoIDogJ9iz2KfYudipJyxcclxuICAgICAgIGhoIDogJyVkINiz2KfYudin2KonLFxyXG4gICAgICAgZCA6ICfZitmI2YUnLFxyXG4gICAgICAgZGQgOiAnJWQg2KPZjtmK2ZHZjtin2YUnLFxyXG4gICAgICAgTSA6ICfYo9mO2YrZkdmO2KfZhScsXHJcbiAgICAgICBNTSA6ICclZCDYtNmH2YjYsScsXHJcbiAgICAgICB5IDogJ9iz2YbYqScsXHJcbiAgICAgICB5eSA6ICclZCDYs9mG2YjYp9iqJ1xyXG4gICB9LFxyXG4gICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIDogL1xcZHsxLDJ9KGVyfGUpLyxcclxuICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcclxuICAgICAgIHJldHVybiBudW1iZXIgKyAobnVtYmVyID09PSAxID8gJ2VyJyA6ICdlJyk7XHJcbiAgIH0sXHJcbiAgIG1lcmlkaWVtUGFyc2UgOiAvUER8TUQvLFxyXG4gICBpc1BNIDogZnVuY3Rpb24gKGlucHV0KSB7XHJcbiAgICAgICByZXR1cm4gaW5wdXQuY2hhckF0KDApID09PSAnTSc7XHJcbiAgIH0sXHJcbiAgIC8vIEluIGNhc2UgdGhlIG1lcmlkaWVtIHVuaXRzIGFyZSBub3Qgc2VwYXJhdGVkIGFyb3VuZCAxMiwgdGhlbiBpbXBsZW1lbnRcclxuICAgLy8gdGhpcyBmdW5jdGlvbiAobG9vayBhdCBsb2NhbGUvaWQuanMgZm9yIGFuIGV4YW1wbGUpLlxyXG4gICAvLyBtZXJpZGllbUhvdXIgOiBmdW5jdGlvbiAoaG91ciwgbWVyaWRpZW0pIHtcclxuICAgLy8gICAgIHJldHVybiAvKiAwLTIzIGhvdXIsIGdpdmVuIG1lcmlkaWVtIHRva2VuIGFuZCBob3VyIDEtMTIgKi8gO1xyXG4gICAvLyB9LFxyXG4gICBtZXJpZGllbSA6IGZ1bmN0aW9uIChob3VycywgbWludXRlcywgaXNMb3dlcikge1xyXG4gICAgICAgcmV0dXJuIGhvdXJzIDwgMTIgPyAnUEQnIDogJ01EJztcclxuICAgfSxcclxuICAgd2VlayA6IHtcclxuICAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgICAgZG95IDogNCAgLy8gVXNlZCB0byBkZXRlcm1pbmUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICAgfVxyXG59LFxyXG5lbjp7XHJcbiAgICBpbnZhbGlkRGF0ZSA6IFwiSW52YWxpZGUgZGF0ZVwiLFxyXG4gICAgXHJcbiAgICBtb250aHMgOiAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcclxuICAgIG1vbnRoc1Nob3J0IDogJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxyXG4gICAgd2Vla2RheXMgOiAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KCdfJyksXHJcbiAgICB3ZWVrZGF5c1Nob3J0IDogJ1N1bl9Nb25fVHVlX1dlZF9UaHVfRnJpX1NhdCcuc3BsaXQoJ18nKSxcclxuICAgIHdlZWtkYXlzTWluIDogJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxyXG4gICAgXHJcblxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9tZW50TGFuZ3VlIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgUm93LCBDb250YWluZXIsIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuLy8gaW1wb3J0IHtMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IE1lbnVMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdFwiO1xyXG5pbXBvcnQgR3JvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3Jvd1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIjtcclxuaW1wb3J0IEhpZGRlbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCI7XHJcbmltcG9ydCBQb3BwZXJzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuXHJcbmltcG9ydCB7dXNlQXV0aH0gZnJvbSAnLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0J1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IGNvbnRlbnRGUiBmcm9tICcuLy4uL2NvbnRlbnRGUidcclxuaW1wb3J0IGNvbnRlbnRFTiBmcm9tICcuLy4uL2NvbnRlbnRFTidcclxuaW1wb3J0IGNvbnRlbnRBUiBmcm9tICcuLy4uL2NvbnRlbnRBUidcclxuXHJcbmltcG9ydCBMYW5nU3dpdGNoIGZyb20gJy4vTGFuZ1N3aXRjaGVyJ1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzXCI7XHJcblxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vYXNzZXRzL2pzcy9QYXRpZW50UHVibGljTmF2YmFyU3R5bGUuanNcIjtcclxuaW1wb3J0IHN0eWxlc0Ryb3Bkb3duIGZyb20gXCIuLi9hc3NldHMvanNzL2hlYWRlckxpbmtzU3R5bGUuanNcIjtcclxuXHJcbmltcG9ydCB7ICBCc0ZpbGxQZXJzb25GaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcbmNvbnN0IHVzZVN0eWxlczEgPSBtYWtlU3R5bGVzKHN0eWxlc0Ryb3Bkb3duKTtcclxuXHJcbmZ1bmN0aW9uIFBhdGllbnRQdWJsaWNOYXZiYXIocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IGNsYXNzZXMyID0gdXNlU3R5bGVzMSgpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHtsb2NhbGV9ID0gcm91dGVyO1xyXG4gICAgY29uc3QgY29udGVudCA9IGxvY2FsZSA9PT0gXCJhclwiID8gY29udGVudEFSIDogbG9jYWxlID09PSBcImVuXCIgPyBjb250ZW50RU4gOiBjb250ZW50RlI7XHJcblxyXG4gICAgY29uc3QgW2NvbGFwc2VkLCBzZXRDb2xhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbb3BlblByb2ZpbGUsIHNldE9wZW5Qcm9maWxlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHsgdXNlckRhdGEsIHNldFVzZXIgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgICBjb25zdCBpc1RvZ2dsZWQgPSAoZXRhdCkgPT4ge1xyXG4gICAgICAgIHNldENvbGFwc2VkKGV0YXQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVDbGlja1Byb2ZpbGUgPSBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKG9wZW5Qcm9maWxlICYmIG9wZW5Qcm9maWxlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgIHNldE9wZW5Qcm9maWxlKG51bGwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRPcGVuUHJvZmlsZShldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IGhhbmRsZUNsb3NlUHJvZmlsZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRVc2VyKHt9KTtcclxuICAgICAgICBzZXRPcGVuUHJvZmlsZShudWxsKTtcclxuICAgICAgICBcclxuICAgICAgfTtcclxuICAgICAgIFxyXG4gICAgICBjb25zdCBhcHBCYXJDbGFzc2VzID0gY2xhc3NOYW1lcyh7XHJcbiAgICAgICAgW1wiIFwiICsgY2xhc3Nlc1tcInRyYW5zcGFyZW50XCJdXTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPEFwcEJhciBjb2xvcj1cInRyYW5zcGFyZW50XCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiIzFhYjliOVwifX0gY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhciArIGFwcEJhckNsYXNzZXN9PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZXcmFwfSBjb2xsYXBzZU9uU2VsZWN0PXt0cnVlfSBleHBhbmQ9XCJsZ1wiIGFzPVwibmF2XCIgb25Ub2dnbGU9e2lzVG9nZ2xlZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdkNvbnRlbnR9ID4gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiZC1mbGV4IGhlYWRlci0xMDAtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAgaHJlZj1cIi9cIiB0bz1cIi9cIiBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjk1cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltYWdlL2RvY3RvTG9nby13aGl0ZS5wbmcpYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCI5NXB4IGF1dG9cIix9fT4gIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1leHBhbmRlZD17Y29sYXBzZWR9IGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgY2xhc3NOYW1lPVwibXgtNVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Ub2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBhcz1cInVsXCIgYWN0aXZlS2V5PXtwcm9wcy5yb3V0ZXI/IHByb3BzLnJvdXRlci5wYXRobmFtZTogbnVsbH0gY2xhc3NOYW1lPXtjbGFzc2VzLm5hdmJhck5hdn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIGFzPVwibGlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWNjb3VudC9hcHBvaW50bWVudHMnIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwiXCIgPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuID4ge2NvbnRlbnQucHJvbmF2YmFyLnJkdn0gIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gYXM9XCJsaVwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYWNjb3VudC9kb2N1bWVudHMnIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwiXCIgPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuID4gIHtjb250ZW50LnByb25hdmJhci5kb2N1bWVudH0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIaWRkZW4gIG1kVXAgaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gYXM9XCJsaVwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2FjY291bnQvcHJvZmlsZScgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgY2xhc3NOYW1lPVwiXCIgPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA+ICB7Y29udGVudC5wcm9uYXZiYXIuZHJvcERvd24xfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0IHJvbGU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgbGlnaHQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZVByb2ZpbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzMi5kcm9wZG93bkl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudC5wcm9uYXZiYXIuZHJvcERvd24yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhpZGRlbiBtZERvd24gaW1wbGVtZW50YXRpb249XCJjc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMyLm1hbmFnZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17d2luZG93LmlubmVyV2lkdGggPiA5NTkgPyBcInRyYW5zcGFyZW50XCIgOiBcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8ganVzdEljb249e3dpbmRvdy5pbm5lcldpZHRoID4gOTU5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbXBsZT17ISh3aW5kb3cuaW5uZXJXaWR0aCA+IDk1OSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1vd25zPXtvcGVuUHJvZmlsZSA/IFwicHJvZmlsZS1tZW51LWxpc3QtZ3Jvd1wiIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2tQcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NlczIuYnV0dG9uTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJzRmlsbFBlcnNvbkZpbGwgY2xhc3NOYW1lPXtjbGFzc2VzMi5pY29uc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGlkZGVuIG1kRG93biBpbXBsZW1lbnRhdGlvbj1cImNzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMyLmxpbmtUZXh0fT57IXVzZXJEYXRhLnVzZXI/IG51bGwgOiB1c2VyRGF0YS51c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wcGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD17J2JvdHRvbSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3tyaWdodDogLTEwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXsgd2luZG93LmlubmVyV2lkdGggPCA5NTkgfHwgQm9vbGVhbihvcGVuUHJvZmlsZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e29wZW5Qcm9maWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlUG9ydGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lcyh7IFtjbGFzc2VzMi5wb3BwZXJDbG9zZV06ICFvcGVuUHJvZmlsZSB9KSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIG1yLTQgXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzMi5wb3BwZXJOYXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvZmlsZS1tZW51LWxpc3QtZ3Jvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT09IFwiYm90dG9tXCIgPyBcImNlbnRlciB0b3BcIiA6IFwiY2VudGVyIGJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsaWNrQXdheUxpc3RlbmVyIG9uQ2xpY2tBd2F5PXsoKSA9PiB7c2V0T3BlblByb2ZpbGUobnVsbCk7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3Qgcm9sZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7cm91dGVyLnB1c2goJy9hY2NvdW50L3Byb2ZpbGUnKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzMi5kcm9wZG93bkl0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50LnByb25hdmJhci5kcm9wRG93bjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBsaWdodCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUHJvZmlsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMyLmRyb3Bkb3duSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50LnByb25hdmJhci5kcm9wRG93bjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcHBlcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSGlkZGVuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZ1N3aXRjaCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXBwQmFyPiAqL31cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUGF0aWVudFB1YmxpY05hdmJhcikiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIFJvdyB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCB7TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9hc3NldHMvanNzL1BhdGllbnRQdWJsaWNOYXZiYXJTdHlsZS5qc1wiO1xyXG5cclxuaW1wb3J0IHsgIEJzUGVyc29uIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBjb250ZW50RlIgZnJvbSAnLi8uLi9jb250ZW50RlInXHJcbmltcG9ydCBjb250ZW50RU4gZnJvbSAnLi8uLi9jb250ZW50RU4nXHJcbmltcG9ydCBjb250ZW50QVIgZnJvbSAnLi8uLi9jb250ZW50QVInXHJcblxyXG5pbXBvcnQgTGFuZ1N3aXRjaCBmcm9tICcuL0xhbmdTd2l0Y2hlcidcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuXHJcbmZ1bmN0aW9uIFBhdGllbnRQdWJsaWNOYXZiYXIocHJvcHMpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHtsb2NhbGV9ID0gcm91dGVyO1xyXG4gICAgY29uc3QgY29udGVudCA9IGxvY2FsZSA9PT0gXCJhclwiID8gY29udGVudEFSIDogbG9jYWxlID09PSBcImVuXCIgPyBjb250ZW50RU4gOiBjb250ZW50RlI7XHJcblxyXG4gICAgY29uc3QgW2NvbGFwc2VkLCBzZXRDb2xhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBpc1RvZ2dsZWQgPSAoZXRhdCkgPT4ge1xyXG4gICAgICAgIHNldENvbGFwc2VkKGV0YXQpXHJcbiAgICB9XHJcbiAgICAgXHJcblxyXG4gXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9e2NsYXNzZXMubmF2V3JhcH0gY29sbGFwc2VPblNlbGVjdD17dHJ1ZX0gZXhwYW5kPVwibGdcIiBhcz1cIm5hdlwiIG9uVG9nZ2xlPXtpc1RvZ2dsZWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZDb250ZW50fSA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiZC1mbGV4IGhlYWRlci0xMDAtbWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInZpZXctcHJvLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6XCIzMXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNDZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgvaW1hZ2UvRG9jdG9saXZlLnBuZylgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWV4cGFuZGVkPXtjb2xhcHNlZH0gYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIiBjbGFzc05hbWU9XCJteC01XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLlRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGlkPVwidHdvLWJ1dHRvblwiIGNsYXNzTmFtZT0nbmF2YmFyLWRvY3RvIG1ha2VTdHlsZXMtbmF2YmFyTmF2LTEwMyAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtIGNsYXNzTmFtZT1cInByb2Zlc3Npb25lbFwiIGFzPVwibGlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPSdodHRwczovL2luZm8uZG9jdG9saXZlLm1hJyBwYXNzSHJlZj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiaHR0cHM6Ly9kb2N0b3IuZG9jdG9saXZlLm1hXCIgY2xhc3NOYW1lPVwiXCIgPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Bhbi1maXJzdCc+ICB7Y29udGVudC5uYXZiYXIubWVkZWNpbn0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gY2xhc3NOYW1lPVwicHJvZmVzc2lvbmVsXCIgYXM9XCJsaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9J2h0dHBzOi8vaW5mby5kb2N0b2xpdmUubWEnIHBhc3NIcmVmPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCJodHRwczovL2RvY3Rvci5kb2N0b2xpdmUubWFcIiBjbGFzc05hbWU9XCJcIiA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzcGFuLXNlY29uZCc+ICB7Y29udGVudC5uYXZiYXIubWVkZWNpbn0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IGFzPVwidWxcIiBhY3RpdmVLZXk9e3Byb3BzLnJvdXRlcj8gcHJvcHMucm91dGVyLnBhdGhuYW1lOiBudWxsfSBjbGFzc05hbWU9e2NsYXNzZXMubmF2YmFyTmF2fSA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuey8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbSBhcz1cImxpXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY29udGFjdCcgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gPiAgIHtjb250ZW50Lm5hdmJhci5jb250YWN0fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0gYXM9XCJsaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50L25ld1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJzUGVyc29uIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiB7Y29udGVudC5uYXZiYXIuY29uZWN0fSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7b3BhY2l0eTogMC43LCBmb250U2l6ZTogMTJ9fT4ge2NvbnRlbnQubmF2YmFyLnJkdn0gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhbmdTd2l0Y2ggLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFBhdGllbnRQdWJsaWNOYXZiYXIpIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFNuYWNrIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5cclxuaW1wb3J0IHtBaU91dGxpbmVDbG9zZX0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9hc3NldHMvanNzL3NuYWNrYmFyQ29udGVudFN0eWxlLmpzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNuYWNrYmFyKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgbWVzc2FnZSwgY29sb3IsIGNsb3NlLCBpY29uLCBwbGFjZSwgb3BlbiwgcnRsQWN0aXZlLCBsaW5rLCBsaW5rUGF0aCB9ID0gcHJvcHM7XHJcbiAgdmFyIGFjdGlvbiA9IFtdO1xyXG4gIGNvbnN0IG1lc3NhZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyh7XHJcbiAgICBbY2xhc3Nlcy5pY29uTWVzc2FnZV06IGljb24gIT09IHVuZGVmaW5lZFxyXG4gIH0pO1xyXG4gIGlmIChjbG9zZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBhY3Rpb24gPSBbXHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmljb25CdXR0b259XHJcbiAgICAgICAga2V5PVwiY2xvc2VcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jbG9zZU5vdGlmaWNhdGlvbigpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFpT3V0bGluZUNsb3NlIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZX0gLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgXTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxTbmFja1xyXG4gICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICB2ZXJ0aWNhbDogcGxhY2UuaW5kZXhPZihcInRcIikgPT09IC0xID8gXCJib3R0b21cIiA6IFwidG9wXCIsXHJcbiAgICAgICAgaG9yaXpvbnRhbDpcclxuICAgICAgICAgIHBsYWNlLmluZGV4T2YoXCJsXCIpICE9PSAtMVxyXG4gICAgICAgICAgICA/IFwibGVmdFwiXHJcbiAgICAgICAgICAgIDogcGxhY2UuaW5kZXhPZihcImNcIikgIT09IC0xXHJcbiAgICAgICAgICAgID8gXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICA6IFwicmlnaHRcIlxyXG4gICAgICB9fVxyXG4gICAgICBvcGVuPXtvcGVufVxyXG4gICAgICBtZXNzYWdlPXtcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2ljb24gIT09IHVuZGVmaW5lZCA/IDxwcm9wcy5pY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufSAvPiA6IG51bGx9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e21lc3NhZ2VDbGFzc2VzfT5cclxuICAgICAgICAgICAge21lc3NhZ2V9XHJcbiAgICAgICAgICAgIHtsaW5rPzxMaW5rIGhyZWY9e2xpbmtQYXRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPiB7bGlua30gPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4gOiBudWxsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICBhY3Rpb249e2FjdGlvbn1cclxuICAgICAgQ29udGVudFByb3BzPXt7XHJcbiAgICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290ICsgXCIgXCIgKyBjbGFzc2VzW2NvbG9yXSxcclxuICAgICAgICAgIG1lc3NhZ2U6IGNsYXNzZXMubWVzc2FnZSxcclxuICAgICAgICAgIGFjdGlvbjogY2xhc3NOYW1lcyh7IFtjbGFzc2VzLmFjdGlvblJUTF06IHJ0bEFjdGl2ZSB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuU25hY2tiYXIucHJvcFR5cGVzID0ge1xyXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXCJpbmZvXCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJkYW5nZXJcIiwgXCJwcmltYXJ5XCJdKSxcclxuICBjbG9zZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgLy8gaWNvbjogUHJvcFR5cGVzLmZ1bmN0aW9uLFxyXG4gIHBsYWNlOiBQcm9wVHlwZXMub25lT2YoW1widGxcIiwgXCJ0clwiLCBcInRjXCIsIFwiYnJcIiwgXCJibFwiLCBcImJjXCJdKSxcclxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICBydGxBY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNsb3NlTm90aWZpY2F0aW9uOiBQcm9wVHlwZXMuZnVuYyxcclxuICBsaW5rOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxpbmtQYXRoOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8vIGxpbmsgOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8vIGxpbmtQYXRoOiBwcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9maWxlOiB7XHJcbiAgICAgICAgaGVhZGluZzogXCLYqti52K/ZitmEINin2YTZhdmE2YEg2KfZhNi02K7YtdmKXCIsXHJcbiAgICAgICAgbm9tTGFiZWw6IFwi2KfYs9mFXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXIxOiBcIti62YrYsSDYp9iz2YXZg1wiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyMjogXCLYqti62YrZitixINin2LPZhdmDINin2YTYo9mI2YQgXCIsXHJcbiAgICAgICAgcHJlbm9tTGFiZWw6IFwi2KfZhNin2LPZhSDYp9mE2KPZiNmEXCIsXHJcbiAgICAgICAgZW1haWxMYWJlbDogXCLYp9mE2KjYsdmK2K8g2KfZhNil2YTZg9iq2LHZiNmG2YpcIixcclxuICAgICAgICBwaG9uZUxhYmVsOlwi2LHZgtmFINin2YTZh9in2KrZgVwiLFxyXG4gICAgICAgIGNvbmZpcm1fcGFzc3dvcmQ6XCLYo9mD2K8g2YPZhNmF2Kkg2KfZhNmF2LHZiNixXCIsXHJcbiAgICAgICAgbmV3X3Bhc3N3b3JkOlwiINmD2YTZhdipINin2YTYs9ixINis2K/Zitiv2KlcIixcclxuICAgICAgICBvbGRfcGFzc3dvcmQ6IFwi2YPZhNmF2Kkg2KfZhNiz2LFcIlxyXG5cclxuICAgIH0sXHJcbiAgICBob21lOiB7XHJcbiAgICAgICAgdGl0bGU6IFwiRE9DVE9MSVZFIC0g2YXZiNi52K8g2YXYuSDYt9io2YrYqNmDINi52KjYsSDYp9mE2KXZhtiq2LHZhtiqXCIsXHJcbiAgICAgICAgaGVhZGluZzE6IFwi2KfYqNit2Ksg2LnZhiDYt9io2YrYqCDYjCDYrdiv2K8g2YXZiNi52K/Zi9inXCIsXHJcbiAgICAgICAgaGVhZGluZzI6XCLYp9mD2KrYtNmBINij2YHYttmEINin2YTYo9i32KjYp9ihINmI2KfZhNi52YrYp9iv2KfYqiDZiNin2YTZhdiz2KrYtNmB2YrYp9iqINmB2Yog2KfZhNmF2K/ZitmG2Kkg2KfZhNij2YLYsdioINil2YTZitmDXCIsXHJcbiAgICAgICAgc2VhcmNoOntcclxuICAgICAgICAgICAgcmVjaGVyY2hlbGFiZWw6IFwi2K/Zg9iq2YjYsSDYjCDZhdik2LPYs9ipINiMINiq2K7Ytdi1IC4uLlwiLFxyXG4gICAgICAgICAgICBub09wdGlvbjogXCLZhNinINiq2YjYrNivINmG2KrYp9im2Kwg2YXYt9in2KjZgtipXCIsXHJcbiAgICAgICAgICAgIG5vT3B0aW9uMjogXCLYp9mD2KrYqCDZhNmE2K3YtdmI2YQg2LnZhNmJINin2YTZhdiy2YrYryDZhdmGINin2YTZhtiq2KfYptisXCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IFwi2KrYrdmF2YrZhCDYp9mE2KPYt9io2KfYoSDYo9mIINin2YTYqtiu2LXYtdin2Kog2KfZhNmF2YXYp9ir2YTYqVwiLFxyXG4gICAgICAgICAgICBjaXR5bGFiZWw6IFwi2KPZitmGINifXCIsXHJcbiAgICAgICAgICAgIGNpdHlMb2FkaW5nOiBcItiq2K3ZhdmK2YQg2YXYr9mGINmF2YXYp9ir2YTYqVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhYm91dCA6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCLZhdi52YTZiNmF2KfYqiDYudmG2KdcIixcclxuICAgICAgICAgICAgYm9keTogXCLZg9in2YbYqiDYp9mE2YHZg9ix2Kkg2YjYsdin2KEgRG9jdG9saXZlINmH2Yog2KjZhtin2KEg2YXZgdmH2YjZhSDYt9mI2YrZhCDYp9mE2YXYr9mJINmK2YfYr9mBINil2YTZiSDYqtit2LPZitmGINit2YrYp9ipINin2YTZhtin2LMg2KfZhNmK2YjZhdmK2KkuINmB2Yog2LnYp9mFIDIwMjEg2Iwg2KfYrtiq2KfYsSDYtNix2YrZg9in2YYg2YXYudin2YTYrNipINmF2YjYttmI2Lkg2KfZhNmF2YjYp9i52YrYryDYp9mE2LfYqNmK2KkuINiz2LHYudin2YYg2YXYpyDYo9i12KjYrSDZiNin2LbYrdmL2Kcg2KPZhiDYp9mE2YXYsdi22Ykg2YjYp9mE2YXZhdin2LHYs9mK2YYg2LnZhNmJINit2K8g2LPZiNin2KEg2YPYp9mG2YjYpyDYrdiz2KfYs9mK2YZcIixcclxuICAgICAgICAgICAgYnV0dG9uOiBcIlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMTpcItmF2YjYudivIDI0LzdcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTI6XCLYqtiw2YPZitixINiq2YTZgtin2KbZilwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcItiz2KzZhCDYp9mE2KjZitin2YbYp9iqXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBza2lwIDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcItiq2KzZhtioINi62LHZgdipINin2YTYp9mG2KrYuNin2LEuXCIsXHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmc6IFwi2LHYpNmK2Kkg2KfZhNi32KjZitioXCIsXHJcbiAgICAgICAgICAgIGJ1dHRvbjogXCLYqtit2K/ZitivINmF2YjYudivXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwi2KrZg9in2YTZitmBINio2LPZiti32Kkg2YjYq9in2KjYqtipXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0yOlwi2KfZhNij2LfYqNin2KEg2KfZhNiw2YrZhiDYqtmFINin2YTYqtit2YLZgiDZhdmG2YfZhSDZitiz2KrYrNmK2KjZiNmGINmB2YogNVwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcIjEwMNmqINiu2KfYtSDZiNiz2LHZilwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcHM6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCLYrdiv2K8g2YXZiNi52K/Zi9inINio2KjYtti5INmG2YLYsdin2KouXCIsXHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmc6IFwi2LHYpNmK2Kkg2KfZhNi32KjZitioXCIsXHJcbiAgICAgICAgICAgIGJ1dHRvbjogXCLYqtit2K/ZitivINmF2YjYudivXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwi2KfYqNit2Ksg2LnZhiDYo9iu2LXYp9im2Yog2KfZhNix2LnYp9mK2Kkg2KfZhNi12K3ZitipINin2YTYrtin2LUg2KjZg1wiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMTI6XCLYo9mD2KvYsSDZhdmGIDI1MDAwINmF2YXYp9ix2LMg2YHZiiA3MCDYqtiu2LXYtdmL2KcuINiq2LXZgdmK2Kkg2K3Ys9ioINin2YTYqtiu2LXYtSDYjCDZhdis2KfZhCDYp9mE2K7YqNix2Kkg2Iwg2KfZhNmF2YjZgti5INin2YTYrNi62LHYp9mB2Yog2Iwg2KXZhNiuLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMjpcItin2K7YqtixINmI2YLYqtmDXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0yMjpcItit2K/YryDYqtiu2LXYtdmDINmB2Yog2KzYr9mI2YQg2KPYudmF2KfZhCDYp9mE2YXZhdin2LHYsyDZgdmKINin2YTZiNmC2Kog2KfZhNmB2LnZhNmKLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcItin2K3YrNiyINmF2YjYudiv2YMg2YHZiiDYr9mC2YrZgtipINmI2KfYrdiv2KkhXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0zMjpcIjI0Lzcg2KfZhNmI2LXZiNmEINil2YTZiSDZhdmI2KfYudmK2K/ZgyDZhdmGINis2YXZiti5INij2KzZh9iy2KrZgy4g2KfZhNiq2KPZg9mK2K8g2YjYp9mE2KrYsNmD2YrYsSDYudmGINi32LHZitmCINin2YTYqNix2YrYryDYp9mE2KXZhNmD2KrYsdmI2YbZiiDZiNin2YTYsdiz2KfYptmEINin2YTZgti12YrYsdipLlwiLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRvd2xvYWQ6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCLYp9mD2KrYtNmBINiq2LfYqNmK2YIg2KfZhNmH2KfYqtmBINin2YTZhdit2YXZiNmEIFwiLFxyXG4gICAgICAgICAgICBzdWJIZWFkaW5nOiBcItmE2KXYr9in2LHYqSDZhdmI2KfYudmK2K/ZgyDYqNi02YPZhCDYo9iz2YfZhC5cIixcclxuICAgICAgICAgICAgYXBwOlwi2YHZiiDZhdiq2KzYsSDYp9mE2KrYt9io2YrZgtin2KogQVBQIFNUT1JFIFwiLFxyXG4gICAgICAgICAgICBwbGF5OiBcItmB2Yog2YXYqtis2LEg2KfZhNiq2LfYqNmK2YLYp9iqIFBMQVkgU1RPUkVcIlxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcnZpY2VzIDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcItiu2K/Zhdin2KrZhtinXCIsXHJcbiAgICAgICAgICAgIGl0ZW0xaGVhZGluZzogXCLYp9iz2KrYtNixINin2YTYo9i32KjYp9ihINi52KjYsSDYp9mE2KXZhtiq2LHZhtiqXCIsXHJcbiAgICAgICAgICAgIGl0ZW0xYm9keTpcItiq2K3Yr9irINmF2Lkg2LfYqNmK2Kgg2KjYp9iz2KrYrtiv2KfZhSDZhdmD2KfZhNmF2Kkg2KfZhNmB2YrYr9mK2Ygg2LnYp9mE2YrYqSDYp9mE2KPZhdin2YYg2KfZhNiu2KfYtdipINio2YbYpy4g2KrYs9in2LnYr9mDINiu2K/ZhdipINmF2YPYp9mE2YXYp9iqINin2YTZgdmK2K/ZitmIINin2YTYrtin2LXYqSDYqNmG2Kcg2LnZhNmJINmF2YbYp9mC2LTYqSDZhdiu2KfZiNmB2YMg2KfZhNi12K3ZitipINmF2Lkg2LfYqNmK2Kgg2YHZiiDYqtmB2KfYudmEINmF2KjYp9i02LEg2YjYrNmH2KfZiyDZhNmI2KzZhy5cIixcclxuICAgICAgICAgICAgaXRlbTJoZWFkaW5nOiBcItmC2YUg2KjYqtiu2LLZitmGINin2YTZhdiz2KrZhtiv2KfYqiDYp9mE2LfYqNmK2Kkg2KfZhNiu2KfYtdipINio2YNcIixcclxuICAgICAgICAgICAgaXRlbTJib2R5Olwi2LPZitiq2YUg2KrYs9is2YrZhCDYrNmF2YrYuSDYp9mE2YXYs9iq2YbYr9in2Kog2KfZhNiq2Yog2KrZhdiqINmF2LTYp9ix2YPYqtmH2Kcg2YXYuSDYo9i32KjYp9im2YMg2KPZiCDYqNmI2KfYs9i32KrZh9mFINij2KvZhtin2KEg2KfZhNin2LPYqti02KfYsdipINi52YYg2KjZj9i52K8g2LnZhNmJINin2YTZhdmG2LXYqS4g2LPYqtmD2YjZhiDZh9iw2Ycg2KfZhNmF2LnZhNmI2YXYp9iqINmF2KrYp9it2Kkg2YTZgyDYo9mG2Kog2YjYp9mE2YXZhdin2LHYsyDZgdmC2LcuXCIsXHJcbiAgICAgICAgICAgIGl0ZW0zaGVhZGluZzogXCLYpdiv2KfYsdipINin2YTZhdmI2KfYudmK2K9cIixcclxuICAgICAgICAgICAgaXRlbTNib2R5Olwi2KjYudivINiq2KPZg9mK2K8g2KfZhNmF2YjYudivINiMINiz2KrYqtmF2YPZhiDZhdmGINmG2YLZhNmHINij2Ygg2KXZhNi62KfYptmHINmB2Yog2KPZiiDZiNmC2KouINmE2K/ZitmDINij2YrYttmL2Kcg2KXZhdmD2KfZhtmK2Kkg2KXYr9in2LHYqSDZhdmI2KfYudmK2K/ZgyDYp9mE2YLYr9mK2YXYqS5cIixcclxuICAgICAgICAgICAgaXRlbTRoZWFkaW5nOiBcItin2KjYrdirINi52YYg2LfYqNmK2KjZg1wiLFxyXG4gICAgICAgICAgICBpdGVtNGJvZHk6XCLZhdi5INmI2KzZiNivINi52K/YryDZg9io2YrYsSDZhdmGINin2YTZhdmF2KfYsdiz2YrZhiDYp9mE2YXYqtmG2YjYudmK2YYg2LnZhNmJINin2YTYtdi52YrYryDYp9mE2YjYt9mG2Yog2Iwg2YXZhiDYp9mE2LPZh9mEINin2K7YqtmK2KfYsSDZhdmC2K/ZhSDYsdi52KfZitipINi32KjZitipINij2Ygg2LXYrdipINi52YLZhNmK2Kkg2YrYqtmF2KrYuSDYqNin2YTYrtio2LHYqSDZiNin2YTYqtiu2LXYtSDYp9mE2YXZhtin2LPYqNmK2YYg2YTZgy5cIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIG1lZGVjaW46IFwi2YfZhCDYo9mG2Kog2YXYqtiu2LXYtSDZgdmKINin2YTYsdi52KfZitipINin2YTYtdit2YrYqdifXCIsXHJcbiAgICAgICAgY29udGFjdDogXCLYp9iq2LXZhCDYqNmG2KdcIixcclxuICAgICAgICBjb25lY3Q6IFwi2KrYs9is2YrZhCDYp9mE2K/YrtmI2YRcIixcclxuICAgICAgICByZHY6IFwi2KXYr9in2LHYqSDZhdmI2KfYudmK2K/ZilwiXHJcbiAgICB9LFxyXG4gICAgcHJvbmF2YmFyOiB7XHJcbiAgICAgICAgY29udGFjdDogXCLYp9iq2LXZhCDYqNmG2KdcIixcclxuICAgICAgICBkb2N1bWVudDogXCLZiNir2KfYptmCXCIsXHJcbiAgICAgICAgcmR2OiBcItmF2YjYp9i52YrYr1wiLFxyXG4gICAgICAgIGRyb3BEb3duMTogXCLYrdiz2KfYqNmKXCIsXHJcbiAgICAgICAgZHJvcERvd24yOiBcItiq2LPYrNmK2YQg2KfZhNiu2LHZiNisXCIsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgcGFydG5lcjogXCLZg9mGINi32KjZitio2YvYpyDYtNix2YrZg9mL2KdcIixcclxuICAgICAgICBzaWduaW46IFwi2LPYrNmEINmD2YXYsdmK2LZcIixcclxuICAgICAgICBmYXE6IFwi2KPYs9im2YTYqSDYn1wiLFxyXG4gICAgICAgIGNvbnRhY3Q6IFwi2KfYqti12YQg2KjZhtinIFwiLFxyXG4gICAgICAgIGFkcmVzczogXCLYp9mE2YXYutix2KggLSDYp9mE2K/Yp9ixINin2YTYqNmK2LbYp9ihXCIsXHJcbiAgICAgICAgcG9saXRpcXVlOiBcItiz2YrYp9iz2Kkg2KfZhNiu2LXZiNi12YrYqVwiLFxyXG4gICAgICAgIGNvbmRpdGlvbjogXCLYtNix2YjYtyDYp9mE2KfYs9iq2LnZhdin2YRcIixcclxuICAgICAgICBjb25kaXRpb24yOiBcIkNvbmRpdGlvbnMgZCd1dGlsaXNhdGlvbiBkdSBzaXRlIERvY3RvbGl2ZVwiLFxyXG4gICAgICAgIHJlZ2xlX2RlX3I6XCJSw6hnbGVzIGRlIHLDqWbDqXJlbmNlbWVudFwiLFxyXG4gICAgICAgIG1lbnRpb25zX2xlZzpcIk1lbnRpb25zIGzDqWdhbGVzXCIsXHJcbiAgICAgICAgbWVudGlvbnNfbGVnOlwiTWVudGlvbnMgbMOpZ2FsZXNcIixcclxuICAgICAgICBDb29raWVzOlwiQ29va2llc1wiLFxyXG4gICAgICAgIHByb3RlY3RfZG9ubmVzX3BlcnNvOlwicHJvdGVjdGlvbiBkZXMgZG9ubsOpZXMgcGVyc29ubmVsbGVzXCIsXHJcbiAgICAgICAgZ2VzdGlvbl9kZV9jb29raWVzOlwiR2VzdGlvbiBkZSBjb29raWVzIGV0IGNvbnNlbnRlbWVudFwiLFxyXG4gICAgfSxcclxuICAgIG5ldzp7XHJcbiAgICAgICAgYWxyZWFkeUhhdmU6IFwi2YTYr9mKINio2KfZhNmB2LnZhCDYrdiz2KfYqCBEb2N0b2xpdmVcIixcclxuICAgICAgICBuZXdJbjogXCLYrNiv2YrYryDYudmE2YkgRG9jdG9saXZl2J9cIixcclxuICAgICAgICBzaWduaW46IFwi2KrYs9is2YrZhCDYp9mE2K/YrtmI2YRcIixcclxuICAgICAgICBzaWdudXA6IFwiINiz2KzZhCDYp9mE2KfZhlwiLFxyXG4gICAgICAgIGF1dGg6XCLYp9mE2K/YrtmI2YQg2KXZhNmJINit2LPYp9io2YpcIixcclxuICAgICAgICBlbWFpbExhYmVsOiBcIti52YbZiNin2YYg2KfZhNio2LHZitivINin2YTYpdmE2YPYqtix2YjZhtmKXCIsXHJcbiAgICAgICAgcGFzc0xhYmVsOiBcItmD2YTZhdipINin2YTYs9ixXCIsXHJcbiAgICAgICAgb2xkcGFzc0xhYmVsOiBcItmD2YTZhdipINiz2LEg2YLYr9mK2YXYqVwiLFxyXG4gICAgICAgIGNvbmZpcm1wYXNzTGFiZWw6IFwi2KPZg9ivINmD2YTZhdipINin2YTYs9ixXCIsXHJcbiAgICAgICAgZXJyb3I6IFwi2YPZhNmF2Kkg2YXYsdmI2LEg2KPZiCDYudmG2YjYp9mGINio2LHZitivINil2YTZg9iq2LHZiNmG2Yog2LrZitixINi12K3ZititIVwiLFxyXG4gICAgICAgIGxhYmVsTm9tOiBcItin2YTZg9mG2YrYqVwiLFxyXG4gICAgICAgIGxhYmVsUHJlbm9tOiBcItin2YTYp9iz2YUg2KfZhNij2YjZhFwiLFxyXG4gICAgICAgIHBob25lTGFiZWw6IFwi2LHZgtmFINin2YTZh9in2KrZgVwiLFxyXG4gICAgICAgIHBob25lRXJyb3I6XCLZitis2Kgg2KPZhiDZitmD2YjZhiDYudmG2YjYp9mGINin2YTYqNix2YrYryDYp9mE2KXZhNmD2KrYsdmI2YbZiiDYqNiq2YbYs9mK2YIg2KfZhNi52KfZhVwiLFxyXG4gICAgICAgIGxhYmVsRW1haWxDOiBcItij2YPYryDYudmG2YjYp9mG2YMg2KfZhNil2YTZg9iq2LHZiNmG2YpcIixcclxuICAgICAgICBsYWJlbEVtYWlsQ1A6IFwi2KPZg9ivINi52YbZiNin2YbZgyDYp9mE2KXZhNmD2KrYsdmI2YbZilwiLFxyXG4gICAgICAgIGVycm9yU2lnbnVwOiBcItin2YTZhdi52YTZiNmF2KfYqiDYutmK2LEg2LXYrdmK2K3YqVwiLFxyXG4gICAgICAgIHN1Y2Nlc3NTaWdudXA6IFwi2KrZhSDYpdix2LPYp9mEINin2YTYt9mE2Kgg2KjZhtis2KfYrSDYqtit2YLZgiDZhdmGINi52YbZiNin2YYg2KjYsdmK2K/ZgyDYp9mE2KXZhNmD2KrYsdmI2YbZiiDZhNiq2KPZg9mK2K8g2K3Ys9in2KjZg1wiXHJcbiAgICB9LFxyXG4gICAgcmVwb3J0OntcclxuICAgICAgICBzaWdudXA6IFwi2KfYttin2YHYqVwiLFxyXG4gICAgICAgIGxhYmVsTm9tOiBcItin2YTZhtmI2LlcIixcclxuICAgICAgICBsYWJlbFByZW5vbTogXCLZiNi12YFcIixcclxuICAgICAgICBsYWJlbEVuZDogXCLYp9mG2KrZh9iqINin2YTYp9iz2KrYtNin2LHYqdifXCIsXHJcbiAgICAgICAgZXJyb3JTaWdudXA6IFwi2KfZhNmF2LnZhNmI2YXYp9iqINi62YrYsSDYtdit2YrYrdipXCIsXHJcbiAgICAgICAgc3VjY2Vzc1NpZ251cDogXCLYqtmFINil2LHYs9in2YQg2KfZhNi32YTYqCDYqNmG2KzYp9itINiq2K3ZgtmCINmF2YYg2KjYsdmK2K/ZgyDYp9mE2KfZhNmD2KrYsdmI2YbZiiDZhNmE2K3YtdmI2YQg2LnZhNmJINix2K8g2YXYs9io2YIg2YHZiiDYp9mE2KPZitin2YUg2KfZhNmC2YTZitmE2Kkg2KfZhNmF2YLYqNmE2KlcIlxyXG4gICAgfSxcclxuICAgIGRvY3VtZW50czoge1xyXG4gICAgICAgIGF1Y3VuIDpcItmE2YUg2YrYqtmFINin2YTYudir2YjYsSDYudmE2Ykg2KPZiiDZhdiz2KrZhtivXCIsXHJcbiAgICAgICAgZG9udGhhdmU6IFwi2YTZitizINmE2K/ZitmDINmI2KvZitmC2Kkg2YTZhNmF2LTYp9ix2YPYqVwiLFxyXG4gICAgICAgIHNoYXJlZEJ5OiBcIiDZhdi02KfYsdmD2Kkg2KfZhNmF2LPYqtmG2K8g2YXZhiDYt9ix2YE6IFwiLFxyXG4gICAgICAgIHNoYXJlZFdpdGg6IFwi2KfZhNmF2LPYqtmG2K8g2KfZhNiw2Yog2YLZhdiqINio2YXYtNin2LHZg9iq2Ycg2YXYudmHOlwiLFxyXG4gICAgfSxcclxuICAgIGFwcG9pbnRtZW50czoge1xyXG4gICAgICAgIG5vdEF1dGg6IFwi2KPZhtiqINi62YrYsSDZhdi12K/ZgiAuLi5cIixcclxuICAgICAgICBhY2Nlc3M6IFwi2KfZhNiv2K7ZiNmEINil2YTZiSDYrdiz2KfYqNmKXCIsXHJcbiAgICAgICAgbm9BcHA6IFwiINmE2YrYsyDZhNiv2YrZgyDZhdmI2LnYryDYqNi52K9cIixcclxuICAgICAgICBteWFwcDogXCLYp9mE2YXZiNin2LnZitivINin2YTYrtin2LXYqSDYqNmKXCIsXHJcbiAgICAgICAgbXlIaXN0b3J5OiBcItiz2KzZhCDYp9mE2YTZgtin2KbYp9iqINin2YTYt9io2YrYqVwiLFxyXG4gICAgICAgIGhpc3Rvcnk6IFwi2LPYrNmEINin2YTZhNmC2KfYptin2Kog2KfZhNi32KjZitipXCIsXHJcbiAgICAgICAgbmV4dEFwcDogXCIg2KfZhNmF2YjYp9i52YrYryDYp9mE2YLYp9iv2YXYqVwiLFxyXG4gICAgICAgIHRha2VhcHA6IFwi2KfYrtiwINmF2YjYudivXCIsXHJcbiAgICAgICAgY2FyZEFwcHM6IHtcclxuICAgICAgICAgICAgbGluayA6XCLYp9mG2LjYsSDYp9mE2YXYstmK2K8g2YXZhiDYp9mE2KrZgdin2LXZitmEXCIgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZEFwcDoge1xyXG4gICAgICAgICAgICBsaW5rIDpcItin2YbYuNixINin2YTZhdiy2YrYryDZhdmGINin2YTYqtmB2KfYtdmK2YRcIixcclxuICAgICAgICAgICAgYWNjZXNzSW5mb3M6IFwi2YXYudmE2YjZhdin2Kog2KfZhNmI2YTZiNisIFwiLFxyXG4gICAgICAgICAgICBub3RTcGVjaWZpZWQ6IFwi2YTZhSDZitit2K/YryDYp9mE2LfYqNmK2Kgg2KjYudivINmF2LnZhNmI2YXYp9iqINin2YTZiNi12YjZhFwiLFxyXG4gICAgICAgICAgICBzZWNyZXRhcmlhdDogXCLYp9mE2KfYqti12KfZhCDYqNin2YTYo9mF2KfZhtipXCIsXHJcbiAgICAgICAgICAgIGNsaWNrOiBcItin2YTYsdis2KfYoSDYp9mE2LbYuti3INi52YTZiSDYp9mE2LLYsSDZhNmE2YjYtdmI2YQg2KXZhNmJINin2YTYp9iz2KrYtNin2LHYqSDYudmGINio2LnYry4g2LPZhtiu2KjYsSDYt9io2YrYqNmDINiq2YTZgtin2KbZitmL2Kcg2KjZiNis2YjYr9mDLlwiLFxyXG4gICAgICAgICAgICByZWpvaW5kcmU6IFwi2KfZhti22YUg2KXZhNmJINin2YTYp9iz2KrYtNin2LHYqVwiLFxyXG4gICAgICAgICAgICBkZXBsYWNlcjogXCLYp9mG2YLZhCDYp9mE2YXZiNi52K9cIixcclxuICAgICAgICAgICAgYW5udWxlcjogXCIg2KfZhNmF2YjYudivIFwiLFxyXG4gICAgICAgICAgICByZXRvdXI6IFwi2LHYrNmI2LlcIixcclxuICAgICAgICAgICAgY29uZmlybUNhbmNlbDogXCLYqtij2YPZitivINil2YTYutin2KEg2KfZhNmF2YjYudivXCIsXHJcbiAgICAgICAgICAgIHdhbnRZb3U6IFwi2YfZhCDYqtix2LrYqCDZgdmKINil2YTYutin2KEg2YXZiNi52K9cIixcclxuICAgICAgICAgICAgd2l0aDogXCLZhdi5IFwiLFxyXG4gICAgICAgICAgICBkb2NBdmFpOiBcItiq2YjYp9mB2LEg2KfZhNi32KjZitioXCIsXHJcbiAgICAgICAgICAgIHNlbGVjVHRpbWU6ICBcItin2YTZiNmC2Kog2KfZhNmF2K3Yr9ivINmE2YTYp9iz2KrYtNin2LHYqSDZh9mIXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwi2YLZhSDYqNiq2KPZg9mK2K8g2KfZhNmB2KrYsdipINin2YTYstmF2YbZitipINin2YTYrNiv2YrYr9ipXCIsXHJcbiAgICAgICAgICAgIHNlZUluZm9zU2hhcmVkOiBcItin2YbYuNixINin2YTZhdi52YTZiNmF2KfYqiDYp9mE2YXYtNiq2LHZg9ipINmB2Yog2KfZhNin2LPYqti02KfYsdipXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICByZXN1bHRSZXNlYXJjaDoge1xyXG4gICAgICAgIG5vUmVzZWF1bHQ6IFwi2LnYsNix2Kcg2Iwg2YTZhSDZhtiq2YXZg9mGINmF2YYg2KfZhNi52KvZiNixINi52YTZiSDZhdit2KrYsdmBINmE2KjYrdir2YMgLi4uXCIsXHJcbiAgICAgICAgdHJ5UmVzZWF1bHQ6IFwi2K3Yp9mI2YQg2KjZhdi52KfZitmK2LEg2KjYrdirINij2K7YsdmJLlwiLFxyXG4gICAgICAgIHdpZGdldDoge1xyXG4gICAgICAgICAgICBhdmFpbGFibGVWaWRlbzogXCLYp9mE2KrYtNin2YjYsSDYqNin2YTZgdmK2K/ZitmIINmF2KrYp9itXCIsXHJcbiAgICAgICAgICAgIG5vdFNwZWNpZmllZDogXCLZhNmFINmK2K3Yr9ivINin2YTYt9io2YrYqCDYqNi52K8g2YXYudmE2YjZhdin2Kog2KfZhNmI2LXZiNmEINmH2LDZh1wiLFxyXG4gICAgICAgICAgICBzZWVQcm9maWxlOiBcItin2YbYuNixINin2YTZhdmE2YEg2KfZhNi02K7YtdmKXCIsXHJcbiAgICAgICAgICAgIHNlZURpc3BvOiBcItin2YTYqtit2YLZgiDZhdmGINin2YTYtdmE2KfYrdmK2KlcIixcclxuICAgICAgICAgICAgZGlzcG86XCLYp9mE2KfZiNmC2KfYqiDYp9mE2YXYqtin2K3YqSDYudmG2K8g2YfYsNinINin2YTYt9io2YrYqFwiLFxyXG4gICAgICAgICAgICB0aW1lU2VsZWN0ZWQ6IFwi2KrYqNiv2KMg2KfZhNmB2KrYsdipINin2YTYstmF2YbZitipINin2YTZhdit2K/Yr9ipINmE2YTYqti02KfZiNixIFwiLFxyXG4gICAgICAgICAgICBjYW5jZWw6IFwi2YTYp9mE2LrYp9ihXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwi2KrYrdiv2YrYryDZhdmI2LnYr1wiLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOntcclxuICAgICAgICBjb25maXJtOiBcItiq2YUg2KfZhNiq2K3ZgtmCINmF2YYg2LXYrdipINit2LPYp9io2YNcIixcclxuICAgICAgICBleHBpcmVkOiBcItmE2YUg2YrYqtmFINin2YTYqtit2YLZgiDZhdmGINi12K3YqSDYrdiz2KfYqNmDINit2KrZiSDYp9mE2KLZhiDYjCDZitio2K/ZiCDYo9mGINmH2LDYpyDYp9mE2KfYsdiq2KjYp9i3INmC2K8g2KfZhtiq2YfYqiDYtdmE2KfYrdmK2KrZhyDYqNin2YTZgdi52YRcIixcclxuICAgICAgICBnZW5lcmF0ZU5ldzogXCLZgtmFINio2KXZhti02KfYoSDYp9ix2KrYqNin2Lcg2KzYr9mK2K9cIixcclxuICAgIH0sXHJcbiAgICBhcHBvaW50bWVudDp7XHJcbiAgICAgICAgc3RlcHM6IFtcItin2K7YqtmK2KfYsSDYp9mE2YbZhdi3XCIsIFwi2KrYudix2YrZgVwiLCBcItiq2K3ZgtmCXCIsIFwi2KrYo9mD2YrYryDYp9mE2YXYudmE2YjZhdin2KpcIiwgXCLZhNmC2K8g2KfZhtiq2YfZiVwiXSxcclxuICAgICAgICB0YWtlQXBwOiBcItiq2K3Yr9mK2K8g2YXZiNi52K9cIixcclxuICAgICAgICBzdGVwMToge1xyXG4gICAgICAgICAgICBsYWJlbDE6IFwi2LnZhtmI2KfZhiA6IFwiLFxyXG4gICAgICAgICAgICBpbnAxOiBcIti52YbZiNin2YYg2KfZhNiq2LnZitmK2YZcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIxOiBcItin2YTYudmG2YjYp9mGINin2YTZhdix2KfYryDYudix2LbZhyDZhNmH2LDYpyDYp9mE2YXZiNi52K9cIixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhYmVsMjogXCLZiNi12YEgOlwiLFxyXG4gICAgICAgICAgICBpbnAyOiBcItmI2LXZgSDYp9mE2YXZiNi52K9cIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIyOiBcItmF2LnZhNmI2YXYp9iqINil2LbYp9mB2YrYqVwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwzOiBcItmG2YjYuSDYp9mE2KfYs9iq2LTYp9ix2Kk6XCIsXHJcbiAgICAgICAgICAgIGlucDM6IFwi2KfYs9iq2LTYp9ix2Kkg2YHZitiv2YrZiFwiLFxyXG4gICAgICAgICAgICBpbnA0OiBcItin2YTYpdiz2KrYtNin2LHYqSDZgdmKINin2YTZhdmD2KrYqFwiLFxyXG5cclxuICAgICAgICAgICAgbGFiZWw0OiBcIti32KjZitioINin2LPYqti02KfYsdmKOlwiLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYWJlbDU6IFwi2YXZiNmC2LkgOiBcIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwi2KfYs9iq2LTYp9ix2Kkg2LnZhiDYqNi52K8g2KjYp9mE2YHZitiv2YrZiFwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWw2OiBcIiDZhdinINiz2KjYqCDZh9iw2Ycg2KfZhNin2LPYqti02KfYsdipOlwiLFxyXG4gICAgICAgICAgICBtb3RpZjogXCLYs9io2Kgg2KfZhNin2LPYqti02KfYsdipXCIsXHJcbiAgICAgICAgICAgIG5vTW90aWZzOiBcItmE2Kcg2YrZiNis2K8g2LPYqNioINmF2K3Yr9ivINmF2YYg2YLYqNmEINin2YTYt9io2YrYqFwiLFxyXG5cclxuICAgICAgICAgICAgbGFiZWw3OiBcItiq2KfYsdmK2K4g2YjZiNmC2Kog2KfZhNin2LPYqti02KfYsdipOiBcIixcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwMjp7XHJcbiAgICAgICAgICAgIG5ldzogXCLYrNiv2YrYryDYudmE2YkgRG9jdG9saXZl2J9cIixcclxuICAgICAgICAgICAgb2xkOiBcItmE2K/ZiiDYqNin2YTZgdi52YQg2K3Ys9in2KggRG9jdG9saXZlXCIsXHJcbiAgICAgICAgICAgIHNpZ251cDogXCLYs9is2YQg2KfZhNin2YZcIixcclxuICAgICAgICAgICAgc2lnbmluOiBcItiq2LPYrNmK2YQg2KfZhNiv2K7ZiNmEXCIsXHJcbiAgICAgICAgICAgIHRlbGVjb25zdWx0OiBcItin2LPYqti02KfYsdipINi52YYg2KjYudivINio2KfZhNmB2YrYr9mK2YhcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXAzOntcclxuICAgICAgICAgICAgdGl0bGU6XCLZhNmC2K8g2KPYsdiz2YTZhtinINio2LHZitiv2YvYpyDYpdmE2YPYqtix2YjZhtmK2YvYpyDYpdmE2Ykg2LnZhtmI2KfZhtmDINmE2YTYqtit2YLZgiDZhdmGINi12K3YqSDYrdiz2KfYqNmDXCIsXHJcbiAgICAgICAgICAgIGdlbmVyYXRlOiBcItij2LHYs9mEINio2LHZitiv2YvYpyDYpdmE2YPYqtix2YjZhtmK2YvYpyDYotiu2LFcIixcclxuICAgICAgICAgICAgcmV2aXJpZnk6IFwi2YTZgtivINiq2K3ZgtmC2Kog2YXZhiDYrdiz2KfYqNmKXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwNCA6e1xyXG4gICAgICAgICAgICB0aXRsZTogXCLYqtij2YPZitivINin2YTYp9iz2KrYtNin2LHYqVwiLFxyXG4gICAgICAgICAgICB0ZWxlY29uc3VsdDogXCLYp9iz2KrYtNin2LHYqSDYudmGINio2LnYryDYqNin2YTZgdmK2K/ZitmIXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwi2KrYo9mD2YrYryDYp9mE2YXZiNi52K8gXCIsXHJcbiAgICAgICAgICAgIHJlbWluZDogXCLYqNiq2KPZg9mK2K8g2YfYsNinINin2YTZhdmI2LnYryDZgdil2YbZgyDYqtmI2KfZgdmCINi52YTZiSDYp9it2KrYsdin2YXZhy4g2KrYsNmD2LEg2KXZhNi62KfYoSDZh9iw2Kcg2KfZhNin2KzYqtmF2KfYuSDZgdmKINij2YLYsdioINmI2YLYqiDZhdmF2YPZhiDZgdmKINit2KfZhNipINmI2YLZiNi5INit2K/YqyDYutmK2LEg2YXYqtmI2YLYuVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwNTp7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIiDYqtmFINiq2LPYrNmK2YQg2YXZiNi52K/Zgy5cIixcclxuICAgICAgICAgICAgZ2VyZXI6IFwi2KXYr9in2LHYqSDZhdmI2KfYudmK2K/Zg1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBwcm9maWxQYWdlOiB7XHJcbiAgICAgICAgYWNjZXNzSW5mbzogXCLZhdi52YTZiNmF2KfYqiDYp9mE2YjYtdmI2YQg2YTZhNi52YrYp9iv2KlcIixcclxuICAgICAgICBzZWNyZXRhcmlhdDogXCLYp9mE2KfYqti12KfZhCDYqNin2YTYs9mD2LHYqtin2LHZitipXCIsXHJcbiAgICAgICAgYWJvdXQ6IFwi2LnZhtmKXCIsXHJcbiAgICAgICAgZ2VuZXJhbDogXCLYqtmC2K/ZitmFINi52KfZhVwiLFxyXG4gICAgICAgIHNwZWNpYWxpdGU6IFwi2KrYrti12LVcIixcclxuICAgICAgICBwYXJjb3VyOiBcItmF2LPYp9ixXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb25QQXJjOiBcItmI2LXZgSDZhdiz2KfYsSDYp9mE2LfYqNmK2KhcIixcclxuICAgICAgICBmb3JtYXRpb246IFwi2KrZhdix2YrZhlwiLFxyXG4gICAgICAgIGF3YXJkOiBcItin2YTYrNmI2KfYptiyXCIsXHJcbiAgICAgICAgZXhwZXJpZW5jZTogXCLYrtio2LHYqVwiLFxyXG4gICAgICAgIHNlZURpc3BvOiBcIti52LHYtiDYp9mE2YHYqtix2KfYqiDYp9mE2YXYqtin2K3YqVwiLFxyXG4gICAgICAgIHNlZU1hcDogXCLYpdi42YfYp9ixINin2YTZhdmI2YLYuSDYudmE2Ykg2KfZhNiu2LHZiti32KlcIixcclxuICAgICAgICB0YXJpZjogXCLYp9mE2KPYs9i52KfYsVwiLFxyXG4gICAgICAgIGRldGFpbHM6IFwi2KrZgdin2LXZitmEINin2YTYs9i52LEg2YTZg9mEINmG2YjYuSDZhdmGINin2YTYp9iz2KrYtNin2LHYqS5cIixcclxuICAgICAgICBob25vcmU6IFwi2YrYqtmFINil2LHYs9in2YQg2YfYsNmHINin2YTYsdiz2YjZhSDYpdmE2YrZgyDZhNmE2K3YtdmI2YQg2LnZhNmJINmF2LnZhNmI2YXYp9iqINmB2YLYtyDZhdmGINmC2KjZhCDYp9mE2LfYqNmK2KguINmC2K8g2KrYrtiq2YTZgSDYp9i52KrZhdin2K/Zi9inINi52YTZiSDZhtmI2Lkg2KfZhNi52YTYp9isINin2YTYsNmKINmK2KrZhSDYpdis2LHYp9ik2Ycg2KPYrtmK2LHZi9inINmB2Yog2KfZhNi52YrYp9iv2Kkg2Iwg2YjYudiv2K8g2KfZhNin2LPYqti02KfYsdin2Kog2YjYp9mE2KXYrNix2KfYodin2Kog2KfZhNil2LbYp9mB2YrYqSDYp9mE2YXYt9mE2YjYqNipLiDZgdmKINit2KfZhNipINiq2KzYp9mI2LIg2KfZhNij2LPYudin2LEg2Iwg2YrYrNioINi52YTZiSDYp9mE2YXZhdin2LHYsyDYqtit2LDZitixINin2YTZhdix2YrYtiDZhdiz2KjZgtmL2KcuXCIsXHJcbiAgICAgICAgc2VydmljZTogXCLYp9mE2K7Yr9mF2KkgLSDYstmK2KfYsdipXCIsXHJcbiAgICAgICAgcHJpeDogXCLYs9i52LFcIixcclxuICAgICAgICBob3JhaXJlOiBcItis2K/ZiNmEINmF2YjYp9i52YrYr1wiLFxyXG4gICAgICAgIGRldGFpbHNIZXVyZXM6IFwi2KrZgdi12YrZhCDYs9in2LnYp9iqINin2YTYudmF2YQg2YTZg9mEINmK2YjZhSDZhdmGINij2YrYp9mFINin2YTYo9iz2KjZiNi5LlwiLFxyXG4gICAgICAgIGNvbmZpcm06XCLYo9mD2K9cIixcclxuICAgICAgICBjYW5jZWw6IFwi2KXZhNi62KfYoVwiLFxyXG4gICAgICAgIHRpbWVTZWxlY3RlZDogXCLYqtio2K/YoyDYp9mE2YHYqtix2Kkg2KfZhNiy2YXZhtmK2Kkg2KfZhNmF2K3Yr9iv2Kkg2YTZhNiq2LTYp9mI2LEgXCIsXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9maWxlOiB7XHJcbiAgICAgICAgaGVhZGluZzogXCJQcm9maWxlIGVkaXRpbmdcIixcclxuICAgICAgICBub21MYWJlbDogXCJuYW1lXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXIxOiBcImNoYW5nZSB5b3VyIG5hbWVcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjI6IFwiY2hhbmdlIHlvdXIgZmlyc3QgbmFtZVwiLFxyXG4gICAgICAgIHByZW5vbUxhYmVsOiBcIkZpcnN0IG5hbWVcIixcclxuICAgICAgICBlbWFpbExhYmVsOiBcIkUtbWFpbCBhZHJlc3NcIixcclxuICAgICAgICBwaG9uZUxhYmVsOlwiUGhvbmUgbnVtYmVyXCIsXHJcbiAgICAgICAgY29uZmlybV9wYXNzd29yZDpcIkNvbmZpcm1lciBsZSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICBuZXdfcGFzc3dvcmQ6XCIgTmV3IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgb2xkX3Bhc3N3b3JkOiBcIlBhc3N3b3JkIFwiXHJcblxyXG4gICAgfSxcclxuICAgIGhvbWU6IHtcclxuICAgICAgICB0aXRsZTogXCJET0NUT0xJVkUgLSBPbmxpbmUgZG9jdG9yJ3MgYXBwb2ludG1lbnRcIixcclxuICAgICAgICBoZWFkaW5nMTogXCJTZWFyY2ggRG9jdG9yLCBNYWtlIGFuIEFwcG9pbnRtZW50XCIsXHJcbiAgICAgICAgaGVhZGluZzI6IFwiRGlzY292ZXIgdGhlIGJlc3QgZG9jdG9ycywgY2xpbmljICYgaG9zcGl0YWwgdGhlIGNpdHkgbmVhcmVzdCB0byB5b3UuXCIsXHJcbiAgICAgICAgc2VhcmNoOntcclxuICAgICAgICAgICAgcmVjaGVyY2hlbGFiZWw6IFwiRG9jdG9yLCBlc3RhYmxpc2htZW50LCBzcGVjaWFsdHkgLi4uXCIsXHJcbiAgICAgICAgICAgIG5vT3B0aW9uOiBcIk5vIHJlc3VsdHMgbWF0Y2hcIixcclxuICAgICAgICAgICAgbm9PcHRpb24yOiBcIlR5cGUgdG8gZ2V0IG1vcmUgcmVzdWx0XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IFwiTG9hZGluZyBkb2N0b3JzIG9yIHNpbWlsYXIgc3BlY2lhbHRpZXNcIixcclxuICAgICAgICAgICAgY2l0eWxhYmVsOiBcIldoZXJlID9cIixcclxuICAgICAgICAgICAgY2l0eUxvYWRpbmc6IFwiTG9hZGluZyBzaW1pbGFyIGNpdHlcIlxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFib3V0IDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcImFib3V0IHVzXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IFwiVGhlIGlkZWEgYmVoaW5kIERvY3RvbGl2ZSB3YXMgdG8gYnVpbGQgYSBsb25nIHRlcm0gY29uY2VwdCB3aGljaCBhaW1zIHRvIGltcHJvdmUgcGVvcGxl4oCZcyBkYWlseSBsaXZlcy4gSW4gMjAyMSwgdHdvIHBhcnRuZXJzIGNob3NlIHRvIHRhY2tsZSB0aGUgc3ViamVjdCBvZiBtZWRpY2FsIGFwcG9pbnRtZW50cy4gIEl0IHF1aWNrbHkgYmVjYW1lIGNsZWFyIHRoYXQgYm90aCBwYXRpZW50cyBhbmQgcHJhY3RpdGlvbmVycyB3ZXJlIHJlc3BvbnNpdmUgdG8gdGhpcyBpbm5vdmF0aXZlIHRvb2wuIFwiLFxyXG4gICAgICAgICAgICBidXR0b246IFwiXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwiQXBwb2ludG1lbnRzIDI0LzdcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTI6XCJBdXRvbWF0aXF1ZSByZW1pbmRlclwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcImhpc3RvcnlcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNraXAgOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiU2tpcCB0aGUgd2FpdGluZyByb29tLlwiLFxyXG4gICAgICAgICAgICBzdWJIZWFkaW5nOiBcIkNvbnN1bHQgd2l0aCBhIGRvY3RvclwiLFxyXG4gICAgICAgICAgICBidXR0b246IFwiQ29uc3VsdCBub3dcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTE6XCJTaW1wbGUgYW5kIGZpeGVkIGZlZXNcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTI6XCJWZXJpZmllZCBkb2N0b3JzIHJlc3BvbmQgaW4gNSBtaW51dGVzXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0zOlwiMTAwJSBQcml2YXRlIGFuZCBjb25maWRlbnRpYWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXBzOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiVGFrZSBhbiBhcHBvaW50bWVudCBpbiBhIGZldyBjbGlja3MuXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwiRmluZCB5b3VyIGhlYWx0aGNhcmUgcHJvZmVzc2lvbmFsXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xMjpcIjI1LDAwMCsgcHJhY3RpdGlvbmVycyBmb3IgNzAgc3BlY2lhbHRpZXMuIEZpbHRlciBieSBzcGVjaWFsaXR5LCBhcmVhIG9mIGV4cGVydGlzZSwgZ2VvbG9jYXRpb24sIGFuZCBtb3JlLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMjpcIlNlbGVjdCB5b3VyIHRpbWVcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTIyOlwiU2VsZWN0IHlvdXIgc2xvdCBpbiB0aGUgcmVhbCB0aW1lIGFnZW5kYSBvZiB0aGUgcHJhY3RpdGlvbmVyLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcIkJvb2sgeW91ciBhcHBvaW50bWVudCBpbiAxIG1pbnV0ZSFcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTMyOlwiMjQvNyBhY2Nlc3MgdG8geW91ciBhcHBvaW50bWVudHMgZnJvbSBhbGwgeW91ciBkZXZpY2VzLiBDb25maXJtYXRpb24gYW5kIHJlbWluZGVyIHZpYSBlbWFpbCBhbmQgU01TLlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZG93bG9hZDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcIkRpc2NvdmVyIHRoZSBkb2N0b2xpdmUgbW9iaWxlIGFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmc6IFwiRm9yIGVhc2llciBhcHBvaW50bWVudHMgbWFuYWdlbWVudC5cIixcclxuICAgICAgICAgICAgYXBwOlwiR2V0IGl0IG5vdyBvbiBBcHAgU3RvcmVcIixcclxuICAgICAgICAgICAgcGxheTogXCJHZXQgaXQgbm93IG9uIFBsYXkgU3RvcmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcnZpY2VzIDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcIlNlcnZpY2VzXCIsXHJcbiAgICAgICAgICAgIGl0ZW0xaGVhZGluZzogXCJDb25zdWx0IGRvY3RvcnMgb25saW5lXCIsXHJcbiAgICAgICAgICAgIGl0ZW0xYm9keTpcIlRhbGsgd2l0aCBhIGRvY3RvciB1c2luZyBvdXIgaGlnaGx5IHNlY3VyZSB2aWRlbyBjYWxsLiBPdXIgdmlkZW8gY2FsbCBzZXJ2aWNlIGhlbHBzIHlvdSB0byBzcGVhayBhYm91dCB5b3VyIGhlYWx0aCBpc3N1ZXMgd2l0aCBhIGRvY3RvciBvbiBhIGZhY2UgdG8gZmFjZSBsaXZlIGludGVyYWN0aW9uLlwiLFxyXG4gICAgICAgICAgICBpdGVtMmhlYWRpbmc6IFwiU3RvcmUgaGVhbHRoIHJlY29yZHNcIixcclxuICAgICAgICAgICAgaXRlbTJib2R5OlwiYWxsIGRvY3VtZW50cyBzaGFyZWQgd2l0aCBvciBieSB5b3VyIGRvY3RvcnMgZHVyaW5nIGEgdGVsZWNvbnN1bHRhdGlvbiB3aWxsIGJlIHJlY29yZGVkIG9uIHRoZSBwbGF0Zm9ybSB3aXRoIGEgc2luZ2xlIGFjY2VzcyBieSB5b3UgYW5kIHRoZSBwcmFjdGl0aW9uZXIuXCIsXHJcbiAgICAgICAgICAgIGl0ZW0zaGVhZGluZzogXCJBcHBvaW50bWVudHMgbWFuYWdlbWVudFwiLFxyXG4gICAgICAgICAgICBpdGVtM2JvZHk6XCJhZnRlciBjb25maXJtaW5nIGFuIGFwcG9pbnRtZW50LCB5b3Ugd2lsbCBiZSBhYmxlIHRvIG1vdmUgaXQgb3IgY2FuY2VsIGl0IGF0IGFueSB0aW1lLiB5b3UgYWxzbyBoYXZlIHRoZSBwb3NzaWJpbGl0eSB0byBtYW5hZ2UgeW91ciBvbGQgYXBwb2ludG1lbnRzLlwiLFxyXG4gICAgICAgICAgICBpdGVtNGhlYWRpbmc6IFwiRmluZCBkb2N0b3JcIixcclxuICAgICAgICAgICAgaXRlbTRib2R5OlwiV2l0aCB0aGUgbW9zdCBkaXZlcnNlIG5hdGlvbndpZGUgcHJhY3RpY2UsIGl04oCZcyBlYXN5IHRvIHNlbGVjdCBhIG1lZGljYWwgb3IgbWVudGFsIGhlYWx0aCBwcm92aWRlciB3aXRoIGEgYmFja2dyb3VuZCBhbmQgc3BlY2lhbHR5IHRoYXQgYXJlIGEgcGVyZmVjdCBmaXQgZm9yIHlvdS5cIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIG1lZGVjaW46IFwiQXJlIHlvdSBhIGhlYWx0aGNhcmUgcHJvZmVzc2lvbmFsP1wiLFxyXG4gICAgICAgIGNvbnRhY3Q6IFwiQ29udGFjdCB1c1wiLFxyXG4gICAgICAgIGNvbmVjdDogXCJsb2dpblwiLFxyXG4gICAgICAgIHJkdjogXCJNYW5hZ2UgbXkgYXBwb2ludG1lbnRzXCJcclxuICAgIH0sXHJcbiAgICBwcm9uYXZiYXI6IHtcclxuICAgICAgICBjb250YWN0OiBcIkNvbnRhY3Rlei1ub3VzXCIsXHJcbiAgICAgICAgZG9jdW1lbnQ6IFwiRG9jdW1lbnRzXCIsXHJcbiAgICAgICAgcmR2OiBcIlJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgZHJvcERvd24xOiBcIk15IGFjY291bnRcIixcclxuICAgICAgICBkcm9wRG93bjI6IFwibG9nIG91dFwiLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIHBhcnRuZXI6IFwiQmVjb21lIGEgcGFydG5lciBkb2N0b3JcIixcclxuICAgICAgICBzaWduaW46IFwiUmVnaXN0ZXIgYXMgYSBwYXRpZW50XCIsXHJcbiAgICAgICAgZmFxOiBcIlF1ZXN0aW9ucyA/XCIsXHJcbiAgICAgICAgY29udGFjdDogXCJvbnRhY3QgdXMgXCIsXHJcbiAgICAgICAgYWRyZXNzOiBcIk1vcm9jY28gLSBDYXNhYmxhbmNhXCIsXHJcbiAgICAgICAgcG9saXRpcXVlOiBcIlByaXZhY3kgUG9saWN5XCIsXHJcbiAgICAgICAgY29uZGl0aW9uOiBcIlRlcm1zIG9mIHVzZVwiLFxyXG4gICAgICAgIGNvbmRpdGlvbjI6IFwiQ29uZGl0aW9ucyBkJ3V0aWxpc2F0aW9uIGR1IHNpdGUgRG9jdG9saXZlXCIsXHJcbiAgICAgICAgcmVnbGVfZGVfcjpcIlLDqGdsZXMgZGUgcsOpZsOpcmVuY2VtZW50XCIsXHJcbiAgICAgICAgbWVudGlvbnNfbGVnOlwiTWVudGlvbnMgbMOpZ2FsZXNcIixcclxuICAgICAgICBtZW50aW9uc19sZWc6XCJNZW50aW9ucyBsw6lnYWxlc1wiLFxyXG4gICAgICAgIENvb2tpZXM6XCJDb29raWVzXCIsXHJcbiAgICAgICAgcHJvdGVjdF9kb25uZXNfcGVyc286XCJwcm90ZWN0aW9uIGRlcyBkb25uw6llcyBwZXJzb25uZWxsZXNcIixcclxuICAgICAgICBnZXN0aW9uX2RlX2Nvb2tpZXM6XCJHZXN0aW9uIGRlIGNvb2tpZXMgZXQgY29uc2VudGVtZW50XCIsXHJcbiAgICB9LFxyXG4gICAgbmV3OntcclxuICAgICAgICBhbHJlYWR5SGF2ZTogXCJJIGFscmVhZHkgaGF2ZSBhIERvY3RvbGl2ZSBhY2NvdW50XCIsXHJcbiAgICAgICAgbmV3SW46IFwiTmV3IHRvIERvY3RvbGl2ZT9cIixcclxuICAgICAgICBzaWduaW46IFwibG9naW5cIixcclxuICAgICAgICBzaWdudXA6IFwiUmVnaXN0ZXJcIixcclxuICAgICAgICBhdXRoOlwiQXV0aGVudGljYXRpb25cIixcclxuICAgICAgICBlbWFpbExhYmVsOiBcIkUtbWFpbCBhZHJlc3NcIixcclxuICAgICAgICBwYXNzTGFiZWw6IFwiUGFzc3dvcmRcIixcclxuICAgICAgICBvbGRwYXNzTGFiZWw6IFwiT2xkIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgY29uZmlybXBhc3NMYWJlbDogXCJDb25maXJtIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgZXJyb3I6IFwiSW5jb3JyZWN0IHBhc3N3b3JkIG9yIGVtYWlsIGFkZHJlc3MhXCIsXHJcbiAgICAgICAgbGFiZWxOb206IFwibGFzdCBuYW1lXCIsXHJcbiAgICAgICAgbGFiZWxQcmVub206IFwiZmlzcnQgbmFtZVwiLFxyXG4gICAgICAgIHBob25lTGFiZWw6IFwiUGhvbmUgbnVtYmVyXCIsXHJcbiAgICAgICAgcGhvbmVFcnJvcjpcIkVtYWlsIGFkZHJlc3MgbXVzdCBiZSBpbiBzdGFuZGFyZCBmb3JtYXRcIixcclxuICAgICAgICBsYWJlbEVtYWlsQzogXCJDb25maXJtIGVtYWlsIGFkZHJlc3NcIixcclxuICAgICAgICBsYWJlbEVtYWlsQ1A6IFwiQ29uZmlybSBlbWFpbCBhZGRyZXNzXCIsXHJcbiAgICAgICAgZXJyb3JTaWdudXA6IFwiVGhlIGluZm9ybWF0aW9uIGlzIGluY29ycmVjdFwiLFxyXG4gICAgICAgIHN1Y2Nlc3NTaWdudXA6IFwiUmVxdWVzdCBzZW50IHN1Y2Nlc3NmdWxseSBjaGVjayB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gY29uZmlybSB5b3VyIGFjY291bnRcIlxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHJlcG9ydDp7XHJcbiAgICAgICAgc2lnbnVwOiBcIkFkZFwiLFxyXG4gICAgICAgIGxhYmVsTm9tOiBcIlR5cGVcIixcclxuICAgICAgICBsYWJlbFByZW5vbTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIGxhYmVsRW5kOiBcIkFwcG9pbnRlbWVudCBoYXZlIGJlZW4gZG9uZSA/XCIsXHJcbiAgICAgICAgZXJyb3JTaWdudXA6IFwiQmFkIHJlcXVlc3RcIixcclxuICAgICAgICBzdWNjZXNzU2lnbnVwOiBcIllvdXIgcmVxdWVzdCBoYXZlIHN1Y2Nlc3NmdWxseSBhZGRlZCBhIHNvb24gcmVzcG9uc2Ugd2lsbCBiZSBzZW50IHRvIHlvdXIgYWRyZXNzIG1haWwgYWZ0ZXIgaGFuZGxpbmcgLi4uXCJcclxuICAgIH0sXHJcbiAgICBkb2N1bWVudHM6IHtcclxuICAgICAgICBhdWN1biA6XCJObyBkb2N1bWVudCBmb3VuZFwiLFxyXG4gICAgICAgIGRvbnRoYXZlOiBcIllvdSBoYXZlIG5vIHNoYXJlZCBkb2N1bWVudFwiLFxyXG4gICAgICAgIHNoYXJlZEJ5OiBcIkRvY3VtZW50IHNoYXJlIGJ5IDogXCIsXHJcbiAgICAgICAgc2hhcmVkV2l0aDogXCJEb2N1bWVudCB5b3UgaGF2ZSBzaGFyZWQgd2l0aDogXCIsXHJcbiAgICB9LFxyXG4gICAgYXBwb2ludG1lbnRzOiB7XHJcbiAgICAgICAgbm90QXV0aDogXCJZb3UgYXJlIG5vdCBhdXRoZW50aWNhdGVkIC4uLlwiLFxyXG4gICAgICAgIGFjY2VzczogXCJhY2Nlc3MgbXkgYWNjb3VudFwiLFxyXG4gICAgICAgIG5vQXBwOiBcIllvdSBkb24ndCBoYXZlIGFuIGFwcG9pbnRtZW50IHlldFwiLFxyXG4gICAgICAgIG15YXBwOiBcIk15IEFwcG9pbnRtZW50c1wiLFxyXG4gICAgICAgIG15SGlzdG9yeTogXCJNeSBhcHBvaW50bWVudCBoaXN0b3J5XCIsXHJcbiAgICAgICAgaGlzdG9yeTogXCJDb25zdWx0YXRpb24gaGlzdG9yeVwiLFxyXG4gICAgICAgIG5leHRBcHA6IFwiIE15IG5leHQgYXBwb2ludG1lbnRzXCIsXHJcbiAgICAgICAgdGFrZWFwcDogXCJNYWtlIGFuIGFwcG9pbnRtZW50XCIsXHJcbiAgICAgICAgY2FyZEFwcHM6IHtcclxuICAgICAgICAgICAgbGluayA6XCJTZWUgbW9yZSBkZXRhaWxzXCIgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZEFwcDoge1xyXG4gICAgICAgICAgICBsaW5rIDpcIlNlZSBtb3JlIGRldGFpbHNcIixcclxuICAgICAgICAgICAgYWNjZXNzSW5mb3M6IFwiQWNjZXNzIEluZm9cIixcclxuICAgICAgICAgICAgbm90U3BlY2lmaWVkOiBcIlRoZSBkb2N0b3IgaGFzIG5vdCB5ZXQgc3BlY2lmaWVkIHRoaXMgYWNjZXNzIGluZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgICAgIHNlY3JldGFyaWF0OiBcIkNvbnRhY3Qgb2YgdGhlIHNlY3JldGFyaWF0XCIsXHJcbiAgICAgICAgICAgIGNsaWNrOiBcIlBsZWFzZSBjbGljayBvbiB0aGUgYnV0dG9uIHRvIGFjY2VzcyB0aGUgdGVsZWNvbnN1bHRhdGlvbi4gWW91ciBkb2N0b3Igd2lsbCBhdXRvbWF0aWNhbGx5IG5vdGlmeSB5b3Ugb2YgeW91ciBwcmVzZW5jZS5cIixcclxuICAgICAgICAgICAgcmVqb2luZHJlOiBcIkpvaW4gdGhlIGNvbnN1bHRhdGlvblwiLFxyXG4gICAgICAgICAgICBkZXBsYWNlcjogXCJzaGlmdFwiLFxyXG4gICAgICAgICAgICBhbm51bGVyOiBcIiBDYW5jZWwgYXBwb2ludG1lbnQgXCIsXHJcbiAgICAgICAgICAgIHJldG91cjogXCJSZXR1cm5cIixcclxuICAgICAgICAgICAgY29uZmlybUNhbmNlbDogXCJDb25maXJtYXRpb24gb2YgYXBwb2ludG1lbnQgY2FuY2VsbGF0aW9uXCIsXHJcbiAgICAgICAgICAgIHdhbnRZb3U6IFwiV291bGQgeW91IGxpa2UgdG8gY2FuY2VsIHRoZSBhcHBvaW50bWVudCBvZlwiLFxyXG4gICAgICAgICAgICB3aXRoOiBcIndpdGggXCIsXHJcbiAgICAgICAgICAgIGRvY0F2YWk6IFwiUGh5c2ljaWFuIGF2YWlsYWJpbGl0eVwiLFxyXG4gICAgICAgICAgICBzZWxlY1R0aW1lOiAgXCJUaW1lIHNlbGVjdGVkIGZvciB0aGUgY29uc3VsdGF0aW9uIGlzXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwiQ29uZmlybSB0aGUgbmV3IHRpbWUgc2xvdFwiLFxyXG4gICAgICAgICAgICBzZWVJbmZvc1NoYXJlZDogXCJTZWUgdGhlIGluZm9ybWF0aW9uIHNoYXJlZCBpbiB0aGUgY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG4gICAgcmVzdWx0UmVzZWFyY2g6IHtcclxuICAgICAgICBub1Jlc2VhdWx0OiBcIlNvcnJ5LCB3ZSBjb3VsZG4ndCBmaW5kIGEgcHJvZmVzc2lvbmFsIGZvciB5b3VyIHNlYXJjaCAuLi4gXCIsXHJcbiAgICAgICAgdHJ5UmVzZWF1bHQ6IFwiVHJ5IHdpdGggb3RoZXIgc2VhcmNoIGNyaXRlcmlhLiBcIixcclxuICAgICAgICB3aWRnZXQ6IHtcclxuICAgICAgICAgICAgYXZhaWxhYmxlVmlkZW86IFwiQ29uc3VsdGF0aW9uIHZpZGVvIGF2YWlsYWJsZVwiLFxyXG4gICAgICAgICAgICBub3RTcGVjaWZpZWQ6IFwiVGhlIGRvY3RvciBoYXMgbm90IHlldCBzcGVjaWZpZWQgdGhpcyBhY2Nlc3MgaW5mb3JtYXRpb25cIixcclxuICAgICAgICAgICAgc2VlUHJvZmlsZTogXCJTZWUgcHJvZmlsZVwiLFxyXG4gICAgICAgICAgICBzZWVEaXNwbzogXCJDaGVjayBhdmFpbGFiaWxpdHlcIixcclxuICAgICAgICAgICAgZGlzcG86XCJkb2N0b3IncyBhdmFpbGFiaWxpdHlcIixcclxuICAgICAgICAgICAgdGltZVNlbGVjdGVkOiBcIlRpbWUgc2xvdCBzZWxlY3RlZCBmb3IgY29uc3VsdGF0aW9uIHN0YXJ0cyBhdFwiLFxyXG4gICAgICAgICAgICBjYW5jZWw6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwiQ29uZmlybSBhbiBhcHBvaW50bWVudFwiLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFsaWRhdGlvbjp7XHJcbiAgICAgICAgY29uZmlybTogXCJZb3VyIGFjY291bnQgaXMgdmFsaWRhdGVkXCIsXHJcbiAgICAgICAgZXhwaXJlZDogXCJZb3VyIGFjY291bnQgaXMgbm90IHlldCB2YWxpZGF0ZWQsIGl0IHNlZW1zIHRoYXQgdGhpcyBsaW5rIGhhcyBhbHJlYWR5IGV4cGlyZWRcIixcclxuICAgICAgICBnZW5lcmF0ZU5ldzogXCJHZW5lcmF0ZSBhIG5ldyBsaW5rXCIsXHJcbiAgICB9LFxyXG4gICAgYXBwb2ludG1lbnQ6e1xyXG4gICAgICAgIHN0ZXBzOiBbXCJDaG9pY2Ugb2YgcGF0dGVyblwiLCBcIklkZW50aWZpY2F0aW9uXCIsIFwiVmVyaWZpY2F0aW9uXCIsIFwiSW5mb3JtYXRpb24gY29uZmlybWF0aW9uXCIsIFwiSXQncyBvdmVyXCJdLFxyXG4gICAgICAgIHRha2VBcHA6IFwiTWFrZSBhbiBhcHBvaW50bWVudFwiLFxyXG4gICAgICAgIHN0ZXAxOiB7XHJcbiAgICAgICAgICAgIGxhYmVsMTogXCJUaXRsZTpcIixcclxuICAgICAgICAgICAgaW5wMTogXCJBcHBvaW50bWVudCB0aXRsZVwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjE6IFwiVGl0bGUgdG8gZGlzcGxheSBmb3IgdGhpcyBhcHBvaW50bWVudFwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwyOiBcIkRlc2NyaXB0aW9uIDpcIixcclxuICAgICAgICAgICAgaW5wMjogXCJkZXNjcmlwdGlvbiBkdSByZW5kZXotdm91c1wiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjI6IFwiQWRkaXRpb25hbCBpbmZvcm1hdGlvblwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwzOiBcIlR5cGUgb2YgY29uc3VsdGF0aW9uOlwiLFxyXG4gICAgICAgICAgICBpbnAzOiBcIlZpZGVvIGNvbnN1bHRhdGlvblwiLFxyXG4gICAgICAgICAgICBpbnA0OiBcIkNvbnN1bHRhdGlvbiBpbiBvZmZpY2UgcHJhY3RpY2VzIG9yIGluIGhvc3BpdGFsXCIsXHJcblxyXG4gICAgICAgICAgICBsYWJlbDQ6IFwiQ29uc3VsdGFudCBEb2N0b3I6XCIsXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhYmVsNTogXCJMb2NhdGlvbiA6IFwiLFxyXG4gICAgICAgICAgICB0ZWxlY29uc3VsdDogXCJSZW1vdGUgdmlkZW8gY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYWJlbDY6IFwiIFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhpcyBjb25zdWx0YXRpb246XCIsXHJcbiAgICAgICAgICAgIG1vdGlmOiBcIlJlYXNvbiBmb3IgY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIG5vTW90aWZzOiBcIk5vIHJlYXNvbiBzcGVjaWZpZWQgYnkgZG9jdG9yXCIsXHJcblxyXG4gICAgICAgICAgICBsYWJlbDc6IFwiRGF0ZSBhbmQgdGltZSBvZiBjb25zdWx0YXRpb246XCIsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDI6e1xyXG4gICAgICAgICAgICBuZXc6IFwiTmV3IHRvIERvY3RvbGl2ZSA/XCIsXHJcbiAgICAgICAgICAgIG9sZDogXCJKYWxyZWFkeSBoYXZlIGEgRG9jdG9saXZlIGFjY291bnRcIixcclxuICAgICAgICAgICAgc2lnbnVwOiBcIlJlZ2lzdGVyIG5vd1wiLFxyXG4gICAgICAgICAgICBzaWduaW46IFwibG9nIGluXCIsXHJcbiAgICAgICAgICAgIHRlbGVjb25zdWx0OiBcIlJlbW90ZSB2aWRlbyBjb25zdWx0YXRpb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXAzOntcclxuICAgICAgICAgICAgdGl0bGU6XCIgV2UgaGF2ZSBzZW50IGFuIGVtYWlsIHRvIHlvdXIgYWRkcmVzcyB0byB2YWxpZGF0ZSB5b3VyIGFjY291bnRcIixcclxuICAgICAgICAgICAgZ2VuZXJhdGU6IFwiU2VuZCBhbm90aGVyIGVtYWlsXCIsXHJcbiAgICAgICAgICAgIHJldmlyaWZ5OiBcIkkgdmVyaWZpZWQgbXkgYWNjb3VudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDQgOntcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uIG9mIHRoZSBjb25zdWx0YXRpb25cIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwiUmVtb3RlIHZpZGVvIGNvbnN1bHRhdGlvblwiLFxyXG4gICAgICAgICAgICBjb25maXJtOiBcIkNvbmZpcm0gdGhpcyBhcHBvaW50bWVudFwiLFxyXG4gICAgICAgICAgICByZW1pbmQ6IFwiIEJ5IGNvbmZpcm1pbmcgdGhpcyBhcHBvaW50bWVudCB5b3UgYWdyZWUgdG8gaG9ub3IgaXQuIFJlbWVtYmVyIHRvIGNhbmNlbCB0aGlzIG1lZXRpbmcgYXMgc29vbiBhcyBwb3NzaWJsZSBpbiB0aGUgZXZlbnQgb2YgYW4gdW5mb3Jlc2VlbiBldmVudFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwNTp7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIllvdXIgYXBwb2ludG1lbnQgd2FzIHJlZ2lzdGVyZWQuXCIsXHJcbiAgICAgICAgICAgIGdlcmVyOiBcIk1hbmFnZSB5b3VyIGFwcG9pbnRtZW50c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBwcm9maWxQYWdlOiB7XHJcbiAgICAgICAgYWNjZXNzSW5mbzogXCJhY2Nlc3MgaW5mb3JtYXRpb25cIixcclxuICAgICAgICBzZWNyZXRhcmlhdDogXCJTZWNyZXRhcmlhdCBjb250YWN0XCIsXHJcbiAgICAgICAgYWJvdXQ6IFwiQWJvdXQgbWVcIixcclxuICAgICAgICBnZW5lcmFsOiBcIkdlbmVyYWwgcHJlc2VudGF0aW9uXCIsXHJcbiAgICAgICAgc3BlY2lhbGl0ZTogXCJTcGVjaWFsdHlcIixcclxuICAgICAgICBwYXJjb3VyOiBcIlBhdGhcIixcclxuICAgICAgICBkZXNjcmlwdGlvblBBcmM6IFwiRGVzY3JpcHRpb24gb2YgdGhlIGRvY3RvcidzIHBhdGhcIixcclxuICAgICAgICBmb3JtYXRpb246IFwiVHJhaW5pbmdcIixcclxuICAgICAgICBhd2FyZDogXCJBd2FyZHNcIixcclxuICAgICAgICBleHBlcmllbmNlOiBcImV4cGVyaWVuY2VcIixcclxuICAgICAgICBzZWVEaXNwbzogXCJTZWUgdGhlIGF2YWlsYWJsZSBzbG90c1wiLFxyXG4gICAgICAgIHNlZU1hcDogXCJTaG93IHBvc2l0aW9uIG9uIG1hcFwiLFxyXG4gICAgICAgIHRhcmlmOiBcIlByaWNlc1wiLFxyXG4gICAgICAgIGRldGFpbHM6IFwiUHJpY2UgZGV0YWlscyBmb3IgZWFjaCB0eXBlIG9mIGNvbnN1bHRhdGlvbi5cIixcclxuICAgICAgICBob25vcmU6IFwiVGhlc2UgZmVlcyBhcmUgY29tbXVuaWNhdGVkIHRvIHlvdSBmb3IgaW5mb3JtYXRpb24gb25seSBieSB0aGUgcHJhY3RpdGlvbmVyLiBUaGV5IG1heSB2YXJ5IGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiB0cmVhdG1lbnQgZmluYWxseSBwZXJmb3JtZWQgaW4gdGhlIG9mZmljZSwgdGhlIG51bWJlciBvZiBjb25zdWx0YXRpb25zIGFuZCB0aGUgYWRkaXRpb25hbCBwcm9jZWR1cmVzIHJlcXVpcmVkLiBJZiB0aGUgcHJpY2VzIGFyZSBleGNlZWRlZCwgdGhlIHByYWN0aXRpb25lciBtdXN0IHdhcm4gdGhlIHBhdGllbnQgYmVmb3JlaGFuZC5cIixcclxuICAgICAgICBzZXJ2aWNlOiBcIlNlcnZpY2UgLSBWaXNpdFwiLFxyXG4gICAgICAgIHByaXg6IFwiUHJpY2VcIixcclxuICAgICAgICBob3JhaXJlOiBcIkhvdXJzXCIsXHJcbiAgICAgICAgZGV0YWlsc0hldXJlczogXCJEZXRhaWwgb2Ygd29ya2luZyBob3VycyBmb3IgZWFjaCBkYXkgb2YgdGhlIHdlZWsuXCIsXHJcbiAgICAgICAgY29uZmlybTpcIkNvbmZpcm1cIixcclxuICAgICAgICBjYW5jZWw6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgdGltZVNlbGVjdGVkOiBcIlRpbWUgc2xvdCBzZWxlY3RlZCBmb3IgY29uc3VsdGF0aW9uIHN0YXJ0cyBhdFwiLFxyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb2ZpbGU6IHtcclxuICAgICAgICBoZWFkaW5nOiBcIsOJZGl0ZXIgdm90cmUgcHJvZmlsXCIsXHJcbiAgICAgICAgbm9tTGFiZWw6IFwiTm9tXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXIxOiBcIm1vZGlmaWVyIHZvdHJlIG5vbVwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyMjogXCJtb2RpZmllciB2b3RyZSBwcsOpbm9tXCIsXHJcbiAgICAgICAgcHJlbm9tTGFiZWw6IFwiUHLDqW5vbVwiLFxyXG4gICAgICAgIGVtYWlsTGFiZWw6IFwiQWRyZXNzZSBlbWFpbFwiLFxyXG4gICAgICAgIHBob25lTGFiZWw6XCJOdW3DqXJvIGRlIHTDqWzDqXBob25lXCIsXHJcbiAgICAgICAgY29uZmlybV9wYXNzd29yZDpcIkNvbmZpcm1lciBsZSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICBuZXdfcGFzc3dvcmQ6XCIgTm91dmVhdSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICBvbGRfcGFzc3dvcmQ6IFwiTW90IGRlIHBhc3NlIFwiXHJcblxyXG4gICAgfSxcclxuICAgIGhvbWU6IHtcclxuICAgICAgICB0aXRsZTogXCJET0NUT0xJVkUgLSBSZW5kZXotdm91cyBjaGV6IHVuIG3DqWRlY2luIGVuIGxpZ25lXCIsXHJcbiAgICAgICAgaGVhZGluZzE6IFwiUmVjaGVyY2hlciB1biBtw6lkZWNpbiwgcHJlbmRyZSByZW5kZXotdm91c1wiLFxyXG4gICAgICAgIGhlYWRpbmcyOlwiRMOpY291dnJleiBsZXMgbWVpbGxldXJzIG3DqWRlY2lucywgY2xpbmlxdWVzIGV0IGjDtHBpdGF1eCBkZSBsYSB2aWxsZSBsYSBwbHVzIHByb2NoZSBkZSBjaGV6IHZvdXMuXCIsXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICBzZWFyY2g6e1xyXG4gICAgICAgICAgICByZWNoZXJjaGVsYWJlbDogXCJNw6lkZWNpbiwgw6l0YWJsaXNzZW1lbnQsIHNww6ljaWFsaXTDqeKAplwiLFxyXG4gICAgICAgICAgICBub09wdGlvbjogXCJBdWN1biByw6lzdWx0YXQgbmUgY29ycmVzcG9uZFwiLFxyXG4gICAgICAgICAgICBub09wdGlvbjI6IFwiVGFwZXogcG91ciBvYnRlbmlyIHBsdXMgZGUgcsOpc3VsdGF0XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IFwiQ2hhcmdlbWVudCBkZXMgbcOpZGVjaW4gb3Ugc3DDqWNpYWxpdMOpIHNpbWlsYWlyZVwiLFxyXG4gICAgICAgICAgICBjaXR5bGFiZWw6IFwiT8O5ID9cIixcclxuICAgICAgICAgICAgY2l0eUxvYWRpbmc6IFwiQ2hhcmdlbWVudCBkZXMgdmlsbGVzIHNpbWlsYWlyZVwiXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWJvdXQgOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiw4AgcHJvcG9zIGRlIG5vdXNcIixcclxuICAgICAgICAgICAgYm9keTpcIk5vdXMgc29tbWVzIHVuZSDDqXF1aXBlIHF1aSBhIHByaXMgZW4gY2hhcmdlIGRlIGNvbnRyaWJ1ZXIgw6AgcsOpc291ZHJlIGxlcyBwcm9ibMOobWVzIGF1eHF1ZWxzIG5vdXMgc29tbWVzIGNvbmZyb250w6lzIHF1b3RpZGllbm5lbWVudCBkYW5zIGxlIHNlY3RldXIgZGUgbGEgc2FudMOpIGV0IGRlIGZhY2lsaXRlciBsJ2FjY8OocyBhdXggc29pbnMgZGUgc2FudMOpLkdyw6JjZSDDoCBub3RyZSBwbGF0ZS1mb3JtZSBkZSB0w6lsw6ljb25zdWx0YXRpb24gbcOpZGljYWxlLCBkZXMgbWlsbGllcnMgZGVzIG1hcm9jYWlucyBwb3Vycm9udCBwYXNzZXIgdW5lIGNvbnN1bHRhdGlvbiBtw6lkaWNhbGUsIGRlIHByZW5kcmUgdW4gcmVuZGV6LXZvdXMgcGh5c2lxdWUgb3UgdmlkZW8gZXQgZGUgc3VpdnJlIGxldXIgw6l0YXQgZGUgc2FudMOpIGVuIGxpZ25lLkRlIHBsdXMsIGxlcyBwcm9mZXNzaW9ubmVscyBkZSBsYSBzYW50w6kgYXVyb250IHVuZSBtZWlsbGV1cmUgYWx0ZXJuYXRpdmUgYXUgdHJhdmFpbCBkZSBzZWNyw6l0YXJpYXQgZXQgdW4gYm9uIHN5c3TDqG1lIGRlIGdlc3Rpb24gZGVzIHJlbmRlei12b3VzLlwiLFxyXG4gICAgICAgICAgICBidXR0b246IFwiXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwiUmVuZGV6LXZvdXMgMjQvN1wiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMjpcIlJhcHBlbHMgYXV0b21hdGlxdWVzXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0zOlwiSGlzdG9yaXF1ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2tpcCA6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCLDiXZpdGVyIGxhIHNhbGxlIGQnYXR0ZW50ZS5cIixcclxuICAgICAgICAgICAgc3ViSGVhZGluZzogXCJDb25zdWx0ZXIgdW4gbcOpZGVjaW5cIixcclxuICAgICAgICAgICAgYnV0dG9uOiBcIlByZW5kcmUgdW4gcmVuZGV6LXZvdXNcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTE6XCJGcmFpcyBzaW1wbGVzIGV0IGZpeGVzXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0yOlwiTcOpZGVjaW5zIHbDqXJpZmnDqXMgcsOpcG9uZGVudCBlbiA1IG1pbnV0ZXNcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTM6XCIxMDAlIHByaXbDqSBldCBjb25maWRlbnRpZWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXBzOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiUHJlbmV6IHJlbmRlei12b3VzIGVuIHF1ZWxxdWVzIGNsaWNzLlwiLFxyXG4gICAgICAgICAgICBzdWJIZWFkaW5nOiBcIkNvbnN1bHRlciB1biBtw6lkZWNpblwiLFxyXG4gICAgICAgICAgICBidXR0b246IFwiUHJlbmRyZSB1biByZW5kZXotdm91c1wiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMTpcIlRyb3V2ZXogdm90cmUgcHJvZmVzc2lvbm5lbCBkZSBzYW50w6lcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTEyOlwiMjUgMDAwKyBwcmF0aWNpZW5zIHBvdXIgNzAgc3DDqWNpYWxpdMOpcy4gRmlsdHJlciBwYXIgc3DDqWNpYWxpdMOpLCBkb21haW5lIGQnZXhwZXJ0aXNlLCBnw6lvbG9jYWxpc2F0aW9uLCBldGMuXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0yOlwiQ2hvaXNpc3NleiB2b3RyZSB0ZW1wc1wiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMjI6XCJTw6lsZWN0aW9ubmV6IHZvdHJlIGNyw6luZWF1IGRhbnMgbCdhZ2VuZGEgZW4gdGVtcHMgcsOpZWwgZHUgcHJhdGljaWVuLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcIlLDqXNlcnZleiB2b3RyZSByZW5kZXotdm91cyBlbiAxIG1pbnV0ZSFcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTMyOlwiQWNjw6hzIDI0aCAvIDI0IGV0IDdqIC8gNyDDoCB2b3MgcmVuZGV6LXZvdXMgZGVwdWlzIHRvdXMgdm9zIGFwcGFyZWlscy4gQ29uZmlybWF0aW9uIGV0IHJhcHBlbCBwYXIgZS1tYWlsIGV0IFNNUy5cIixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkb3dsb2FkOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiRMOpY291dnJleiBs4oCZYXBwbGljYXRpb24gbW9iaWxlIGRvY3RvbGl2ZVwiLFxyXG4gICAgICAgICAgICBzdWJIZWFkaW5nOiBcIlBvdXIgdW5lIGdlc3Rpb24gZW5jb3JlIHBsdXMgc2ltcGxlIGRlIHZvcyByZW5kZXotdm91cy5cIixcclxuICAgICAgICAgICAgYXBwOlwic3VyIGzigJlBcHAgU3RvcmUgXCIsXHJcbiAgICAgICAgICAgIHBsYXk6IFwic3VyIGxlIHBsYXkgU3RvcmUgXCJcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJ2aWNlcyA6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCJhdSBzZXJ2aWNlIGRlIHZvdHJlIHNhbnTDqVwiLFxyXG4gICAgICAgICAgICBpdGVtMWhlYWRpbmc6IFwiQ29uc3VsdGVyIGRlcyBtw6lkZWNpbnMgZW4gbGlnbmVcIixcclxuICAgICAgICAgICAgaXRlbTFib2R5OlwiUGFybGV6IGF2ZWMgdW4gbcOpZGVjaW4gw6AgbCdhaWRlIGRlIG5vdHJlIGFwcGVsIHZpZMOpbyBoYXV0ZW1lbnQgc8OpY3VyaXPDqS4gTm90cmUgc2VydmljZSBkJ2FwcGVsIHZpZMOpbyB2b3VzIGFpZGUgw6AgcGFybGVyIGRlIHZvcyBwcm9ibMOobWVzIGRlIHNhbnTDqSBhdmVjIHVuIG3DqWRlY2luIGxvcnMgZCd1bmUgaW50ZXJhY3Rpb24gZW4gZGlyZWN0IGZhY2Ugw6AgZmFjZS5cIixcclxuICAgICAgICAgICAgaXRlbTJoZWFkaW5nOiBcIlN0b2NrZXIgdm9zIGRvY3VtZW50cyBtw6lkaWNhbGVcIixcclxuICAgICAgICAgICAgaXRlbTJib2R5OlwiVG91cyBsZXMgZG9jdW1lbnRzIHBhcnRhZ8OpcyBhdmVjIG91IHBhciB2b3MgbcOpZGVjaW5zIGxvcnMgZCd1bmUgdMOpbMOpY29uc3VsdGF0aW9uIHNlcm9udCBlbnJlZ2lzdHLDqXMgc3VyIGxhIHBsYXRlZm9ybWUgYXZlYyB1biBhY2PDqHMgdW5pcXVlIHBhciB2b3VzIGV0IGxlIHByYXRpY2llbi5cIixcclxuICAgICAgICAgICAgaXRlbTNoZWFkaW5nOiBcIkdlc3Rpb24gZGVzIHJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgICAgIGl0ZW0zYm9keTpcIkFwcsOpcyBhdm9pciB2YWxpZGVyIHVuIHJlbmRlei12b3VzLCB2b3VzIGF1cmV6IGxhIHBvc3NpYmlsaXTDqSBkZSBsZSBkw6lwbGFjZXIgb8O5IGJpZW4gbCdhbm51bGVyIMOgIG4naW1wb3J0ZSBxdWVsIG1vbWVudC4gdm91cyBhdmV6IGF1c3NpIGxhIHBvc3NpYmlsaXTDqSBkZSBnw6lyZXIgdm9zIGFuY2llbnMgcmVuZGV6LXZvdXMuXCIsXHJcbiAgICAgICAgICAgIGl0ZW00aGVhZGluZzogXCJUcm91dmVyIHZvdHJlIG3DqWRlY2luXCIsXHJcbiAgICAgICAgICAgIGl0ZW00Ym9keTpcIkF2ZWMgdW4gZ3JhbmQgbm9tYnJlIGRlIHByYXRpZW50IGRpdmVyc2lmacOpZSDDoCBsJ8OpY2hlbGxlIG5hdGlvbmFsZSwgaWwgZXN0IGZhY2lsZSBkZSBzw6lsZWN0aW9ubmVyIHVuIGZvdXJuaXNzZXVyIGRlIHNvaW5zIG3DqWRpY2F1eCBvdSBkZSBzYW50w6kgbWVudGFsZSBhdmVjIHVuZSBleHDDqXJpZW5jZSBldCB1bmUgc3DDqWNpYWxpdMOpIHF1aSB2b3VzIGNvbnZpZW5uZW50IHBhcmZhaXRlbWVudC5cIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIG1lZGVjaW46IFwiVm91cyDDqnRlcyBwcm9mZXNzaW9ubmVsIGRlIHNhbnTDqSA/XCIsXHJcbiAgICAgICAgY29udGFjdDogXCJDb250YWN0ZXotbm91c1wiLFxyXG4gICAgICAgIGNvbmVjdDogXCJTZSBjb25uZWN0ZXJcIixcclxuICAgICAgICByZHY6IFwiR8OpcmVyIG1lcyBSRFZcIlxyXG4gICAgfSxcclxuICAgIHByb25hdmJhcjoge1xyXG4gICAgICAgIGNvbnRhY3Q6IFwiQ29udGFjdGV6LW5vdXNcIixcclxuICAgICAgICBkb2N1bWVudDogXCJEb2N1bWVudHNcIixcclxuICAgICAgICByZHY6IFwiUmVuZGV6LXZvdXNcIixcclxuICAgICAgICBkcm9wRG93bjE6IFwiTW9uIGNvbXB0ZVwiLFxyXG4gICAgICAgIGRyb3BEb3duMjogXCJTZSBkw6ljb25uZWN0ZXJcIixcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgICBwYXJ0bmVyOiBcIkRldmVuaXIgTcOpZGVjaW4gcGFydGVuYWlyZVwiLFxyXG4gICAgICAgIHNpZ25pbjogXCJTJ2luc2NyaXJlIGVuIHRhbnQgcXVlIHBhdGllbnRcIixcclxuICAgICAgICBmYXE6IFwiRGVzIHF1ZXN0aW9ucyA/XCIsXHJcbiAgICAgICAgY29udGFjdDogXCJOb3VzIENvbnRhY3RlciBcIixcclxuICAgICAgICBhZHJlc3M6IFwiTWFyb2MgLSBDYXNhYmxhbmNhXCIsXHJcbiAgICAgICAgcG9saXRpcXVlOiBcIlBvbGl0aXF1ZSBkZSBjb25maWRlbnRpYWxpdMOpXCIsXHJcbiAgICAgICAgY29uZGl0aW9uOiBcIkNvbmRpdGlvbnMgZCd1dGlsaXNhdGlvblwiLFxyXG4gICAgICAgIGNvbmRpdGlvbjI6IFwiQ29uZGl0aW9ucyBkJ3V0aWxpc2F0aW9uIGR1IHNpdGUgRG9jdG9saXZlXCIsXHJcbiAgICAgICAgcmVnbGVfZGVfcjpcIlLDqGdsZXMgZGUgcsOpZsOpcmVuY2VtZW50XCIsXHJcbiAgICAgICAgbWVudGlvbnNfbGVnOlwiTWVudGlvbnMgbMOpZ2FsZXNcIixcclxuICAgICAgICBtZW50aW9uc19sZWc6XCJNZW50aW9ucyBsw6lnYWxlc1wiLFxyXG4gICAgICAgIENvb2tpZXM6XCJDb29raWVzXCIsXHJcbiAgICAgICAgcHJvdGVjdF9kb25uZXNfcGVyc286XCJwcm90ZWN0aW9uIGRlcyBkb25uw6llcyBwZXJzb25uZWxsZXNcIixcclxuICAgICAgICBnZXN0aW9uX2RlX2Nvb2tpZXM6XCJHZXN0aW9uIGRlIGNvb2tpZXMgZXQgY29uc2VudGVtZW50XCIsXHJcblxyXG4gICAgfSxcclxuICAgIG5ldzp7XHJcbiAgICAgICAgYWxyZWFkeUhhdmU6IFwiSidhaSBkw6hqw6AgdW4gY29tcHRlIERvY3RvbGl2ZVwiLFxyXG4gICAgICAgIG5ld0luOiBcIk5vdXZlYXV4IHN1ciBEb2N0b2xpdmUgP1wiLFxyXG4gICAgICAgIHNpZ25pbjogXCJTZSBjb25uZWN0ZXJcIixcclxuICAgICAgICBzaWdudXA6IFwiIFMnaW5zY3JpcmVcIixcclxuICAgICAgICBhdXRoOlwiQXV0aGVudGlmaWNhdGlvblwiLFxyXG4gICAgICAgIGVtYWlsTGFiZWw6IFwiQWRyZXNzZSBlbWFpbFwiLFxyXG4gICAgICAgIHBhc3NMYWJlbDogXCJNb3QgZGUgcGFzc2VcIixcclxuICAgICAgICBvbGRwYXNzTGFiZWw6IFwiQW5jaWVuIG1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgIGNvbmZpcm1wYXNzTGFiZWw6IFwiQ29uZmlybWV6IGxlIG1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgIGVycm9yOiBcIk1vdCBkZSBwYXNzZSBvdSBhZHJlc3NlIGVtYWlsIGluY29ycmVjdCFcIixcclxuICAgICAgICBsYWJlbE5vbTogXCJOb21cIixcclxuICAgICAgICBsYWJlbFByZW5vbTogXCJQcsOpbm9tXCIsXHJcbiAgICAgICAgcGhvbmVMYWJlbDogXCJOdW3DqXJvIGRlIHTDqWzDqXBob25lXCIsXHJcbiAgICAgICAgcGhvbmVFcnJvcjpcIkwnYWRyZXNzZSBlbWFpbCBlc3QgZG9pdCDDqnRyZSBhdSBmb3JtYXQgc3RhbmRhcmRcIixcclxuICAgICAgICBsYWJlbEVtYWlsQzogXCJDb25maXJtZXIgbCdhZHJlc3NlIGVtYWlsXCIsXHJcbiAgICAgICAgbGFiZWxFbWFpbENQOiBcIkNvbmZpcm1lciBsJ2FkcmVzc2UgZW1haWxcIixcclxuICAgICAgICBlcnJvclNpZ251cDogXCJMZXMgaW5mb3JtYXRpb24gc29udCBpbmNvcnJlY3RlXCIsXHJcbiAgICAgICAgc3VjY2Vzc1NpZ251cDogXCJEZW1hbmRlIGVudm95w6llIGF2ZWMgc3VjY8OpcyB2w6lyaWZpZXIgdm90cmUgYWRyZXNzZSDDqW1haWwgcG91ciBjb25maXJtZXIgdm90cmUgY29tcHRlXCJcclxuICAgIH0sXHJcbiAgICByZXBvcnQ6e1xyXG4gICAgICAgIHNpZ251cDogXCJBam91dGVyXCIsXHJcbiAgICAgICAgbGFiZWxOb206IFwiVHlwZVwiLFxyXG4gICAgICAgIGxhYmVsUHJlbm9tOiBcIkTDqXNjcmlwdGlvblwiLFxyXG4gICAgICAgIGxhYmVsRW5kOiBcIkxhIGNvbnN1bHRhdGlvbiDDoCBiaWVuIMOpdGFpdCB0w6lybWluw6lcIixcclxuICAgICAgICBlcnJvclNpZ251cDogXCJMZXMgaW5mb3JtYXRpb24gc29udCBpbmNvcnJlY3RlXCIsXHJcbiAgICAgICAgc3VjY2Vzc1NpZ251cDogXCJEZW1hbmRlIGVudm95w6llIGF2ZWMgc3VjY8OpcyB2w6lyaWZpZXIgdm90cmUgYWRyZXNzZSBwb3VyIHVuZSByw6lwb25zZSBwcsOpYWxhYmxlIGRhbnMgbGVzIHByb2NoYWlucyBqb3Vyc1wiXHJcbiAgICB9LFxyXG4gICAgZG9jdW1lbnRzOiB7XHJcbiAgICAgICAgYXVjdW4gOlwiQXVjdW4gZG9jdW1lbnQgdHJvdXbDqVwiLFxyXG4gICAgICAgIGRvbnRoYXZlOiBcIlZvdXMgbidhdmV6IGF1Y3VuIGRvY3VtZW50IHBhcnRhZ2VyXCIsXHJcbiAgICAgICAgc2hhcmVkQnk6IFwiIERvY3VtZW50IHBhcnRhZ2VyIGRlIGxhIHBhcnQgOiBcIixcclxuICAgICAgICBzaGFyZWRXaXRoOiBcIkRvY3VtZW50IHF1ZSB2b3VzIGF2ZXogcGFydGFnZXIgYXZlYyA6IFwiLFxyXG4gICAgfSxcclxuICAgIGFwcG9pbnRtZW50czoge1xyXG4gICAgICAgIG5vdEF1dGg6IFwiVm91cyBuJ8OqdGVzIHBhcyBhdXRoZW50aWZpw6kgLi4uXCIsXHJcbiAgICAgICAgYWNjZXNzOiBcIkFjY8OpZGVyIMOgIG1vbiBjb21wdGVcIixcclxuICAgICAgICBub0FwcDogXCIgdm91cyBuJ2F2ZXogcGFzIGVuY29yZSBkZSByZW5kZXotdm91cyBwb3VyIGwnaW5zdGFudFwiLFxyXG4gICAgICAgIG15YXBwOiBcIk1lcyBSZW5kZXotdm91c1wiLFxyXG4gICAgICAgIG15SGlzdG9yeTogXCJNb24gaGlzdG9yaXF1ZSBkZSByZW5kZXotdm91c1wiLFxyXG4gICAgICAgIGhpc3Rvcnk6IFwiSGlzdG9yaXF1ZSBkZXMgY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgbmV4dEFwcDogXCIgTWVzIHByb2NoYWluIHJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgdGFrZWFwcDogXCJQcmVuZHJlIHVuIHJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgY2FyZEFwcHM6IHtcclxuICAgICAgICAgICAgbGluayA6XCJWb2lyIHBsdXMgZGUgZMOpdGFpbHNcIiAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXJkQXBwOiB7XHJcbiAgICAgICAgICAgIGxpbmsgOlwiVm9pciBwbHVzIGRlIGTDqXRhaWxzXCIsXHJcbiAgICAgICAgICAgIGFjY2Vzc0luZm9zOiBcIkluZm9ybWF0aW9ucyBkJ2FjY8Ooc1wiLFxyXG4gICAgICAgICAgICBub3RTcGVjaWZpZWQ6IFwiTGUgbcOpZGVjaW4gbidhIHBhcyBlbmNvcmUgc3DDqWNpZmllciBjZXMgaW5mb3JtYXRpb24gZCdhY2PDqXNcIixcclxuICAgICAgICAgICAgc2VjcmV0YXJpYXQ6IFwiQ29udGFjdCBkdSBzZWNyw6l0YXJpYXRcIixcclxuICAgICAgICAgICAgY2xpY2s6IFwiTWVyY2kgZGUgY2xpcXVlciBzdXIgbGUgYm91dG9uIHBvdXIgYWNjw6lkZXIgw6AgbGEgdMOpbMOpY29uc3VsdGF0aW9uLiBWb3RyZSBtw6lkZWNpbiBzZXJhIGF1dG9tYXRpcXVlbWVudCBub3RpZmVyIGRlIHZvdHJlIHByw6lzZW5jZS5cIixcclxuICAgICAgICAgICAgcmVqb2luZHJlOiBcIlJlam9pbmRyZSBsYSBjb25zdWx0YXRpb25cIixcclxuICAgICAgICAgICAgZGVwbGFjZXI6IFwiRMOpcGxhY2VyXCIsXHJcbiAgICAgICAgICAgIGFubnVsZXI6IFwiIEFubnVsZXIgbGUgcmVuZGV6LXZvdXMgXCIsXHJcbiAgICAgICAgICAgIHJldG91cjogXCJSZXRvdXJcIixcclxuICAgICAgICAgICAgY29uZmlybUNhbmNlbDogXCJDb25maXJtYXRpb24gZCdhbm51bGF0aW9uIGR1IHJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgICAgIHdhbnRZb3U6IFwiU291aGFpdGV6LXZvdXMgYW5udWxlciBsZSByZW5kZXotdm91cyBkdVwiLFxyXG4gICAgICAgICAgICB3aXRoOiBcImF2ZWMgXCIsXHJcbiAgICAgICAgICAgIGRvY0F2YWk6IFwiRGlzcG9uaWJpbGl0w6kgZHUgbcOpZGVjaW5cIixcclxuICAgICAgICAgICAgc2VsZWNUdGltZTogIFwiVGVtcHMgc8OpbMOpY3Rpb25uw6kgcG91ciBsYSBjb25zdWx0YXRpb24gZXN0IFwiLFxyXG4gICAgICAgICAgICBjb25maXJtOiBcIkNvbmZpcm1lciBsZSBub3V2ZWF1IGNyw6luZWF1XCIsXHJcbiAgICAgICAgICAgIHNlZUluZm9zU2hhcmVkOiBcIlZvaXIgbGVzIGluZm9ybWF0aW9uIHBhcnRhZ2VyIGRhbnMgbGEgY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICByZXN1bHRSZXNlYXJjaDoge1xyXG4gICAgICAgIG5vUmVzZWF1bHQ6IFwiRMOpc29sw6ksIG5vdXMgbidhdm9ucyB0cm91dsOpIGF1Y3VuIHByb2Zlc3Npb25uZWwgcG91ciB2b3RyZSByZWNoZXJjaGXigKYgXCIsXHJcbiAgICAgICAgdHJ5UmVzZWF1bHQ6IFwiRXNzYXlleiBhdmVjIGQnYXV0cmVzIGNyaXTDqHJlcyBkZSByZWNoZXJjaGUuIFwiLFxyXG4gICAgICAgIHdpZGdldDoge1xyXG4gICAgICAgICAgICBhdmFpbGFibGV2aWTDqW86IFwiQ29uc3VsdGF0aW9uIHZpZMOpbyBkaXNwb25pYmxlXCIsXHJcbiAgICAgICAgICAgIG5vdFNwZWNpZmllZDogXCJMZSBtw6lkZWNpbiBuJ2EgcGFzIGVuY29yZSBzcMOpY2lmaWVyIGNlcyBpbmZvcm1hdGlvbiBkJ2FjY8Opc1wiLFxyXG4gICAgICAgICAgICBzZWVQcm9maWxlOiBcIlZvaXIgbGUgcHJvZmlsZVwiLFxyXG4gICAgICAgICAgICBzZWVEaXNwbzogXCJWb2lyIGxhIGRpc3BvbmliaWxpdMOpXCIsXHJcbiAgICAgICAgICAgIGRpc3BvOlwiZGlzcG9uaWJpbGl0w6kgZHUgbcOpZGVjaW5cIixcclxuICAgICAgICAgICAgdGltZVNlbGVjdGVkOiBcIkNyw6luZWF1IHPDqWzDqWN0aW9ubsOpIHBvdXIgbGEgY29uc3VsdGF0aW9uIGNvbW1lbmNlIMOgIFwiLFxyXG4gICAgICAgICAgICBjYW5jZWw6IFwiQW5udWxlclwiLFxyXG4gICAgICAgICAgICBjb25maXJtOiBcIlByZW5kcmUgcmVuZGV6LXZvdXNcIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjp7XHJcbiAgICAgICAgY29uZmlybTogXCJWb3RyZSBjb21wdGUgZXN0IHZhbGlkw6lcIixcclxuICAgICAgICBleHBpcmVkOiBcIlZvdHJlIGNvbXB0ZSBuJ2VzdCBwYXMgZW5jb3JlIHZhbGlkw6ksIGlsIHNlbWJsZSBxdWUgY2UgbGllbiBlc3QgZMOpamEgZXhwaXJlclwiLFxyXG4gICAgICAgIGdlbmVyYXRlTmV3OiBcIkfDqW7DqXJlciB1biBub3V2ZWF1IGxpZW5cIixcclxuICAgIH0sXHJcbiAgICBhcHBvaW50bWVudDp7XHJcbiAgICAgICAgc3RlcHM6IFtcIkNob2l4IGR1IG1vdGlmXCIsIFwiSWRlbnRpZmljYXRpb25cIiwgXCJWw6lyaWZpY2F0aW9uXCIsIFwiQ29uZmlybWF0aW9uIGRlcyBpbmZvcm1hdGlvblwiLCBcIkMnZXN0IHRlcm1pbsOpXCJdLFxyXG4gICAgICAgIHRha2VBcHA6IFwiUHJlbmRyZSB1biByZW5kZXotdm91c1wiLFxyXG4gICAgICAgIHN0ZXAxOiB7XHJcbiAgICAgICAgICAgIGxhYmVsMTogXCJUaXRyZSA6XCIsXHJcbiAgICAgICAgICAgIGlucDE6IFwiVGl0cmUgZHUgcmVuZGV6LXZvdXNcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIxOiBcIlRpdHJlIMOgIGFmZmljaGVyIHBvdXIgY2UgcmVuZGV6LXZvdXNcIixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhYmVsMjogXCJEZXNjcmlwdGlvbiA6XCIsXHJcbiAgICAgICAgICAgIGlucDI6IFwiZGVzY3JpcHRpb24gZHUgcmVuZGV6LXZvdXNcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIyOiBcIkluZm9ybWF0aW9uIHN1cHBsw6ltZW50YWlyZVwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwzOiBcIlR5cGUgZGUgY29uc3VsdGF0aW9uIDpcIixcclxuICAgICAgICAgICAgaW5wMzogXCJDb25zdWx0YXRpb24gdmlkw6lvXCIsXHJcbiAgICAgICAgICAgIGlucDQ6IFwiQ29uc3VsdGF0aW9uIGF1IGNhYmluZXRcIixcclxuXHJcbiAgICAgICAgICAgIGxhYmVsNDogXCJNw6lkZWNpbiBjb25zdWx0YW50IDpcIixcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWw1OiBcIkxpZXUgOiBcIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwiQ29uc3VsdGF0aW9uIHZpZMOpbyDDoCBkaXN0YW5jZVwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWw2OiBcIiBRdWVsbGUgZXN0IGxlIG1vdGlmIGRlIGNldHRlIGNvbnN1bHRhdGlvbiA6XCIsXHJcbiAgICAgICAgICAgIG1vdGlmOiBcIk1vdGlmIGRlIGNvbnN1bHRhdGlvblwiLFxyXG4gICAgICAgICAgICBub01vdGlmczogXCJBdWN1biBtb3RpZiBzcMOpY2lmacOpIHBhciBsZSBtw6lkZWNpblwiLFxyXG5cclxuICAgICAgICAgICAgbGFiZWw3OiBcIkRhdGUgZXQgaGV1cmUgZHUgY29uc3VsdGF0aW9uIDogXCIsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDI6e1xyXG4gICAgICAgICAgICBuZXc6IFwiTm91dmVhdXggc3VyIERvY3RvbGl2ZSA/XCIsXHJcbiAgICAgICAgICAgIG9sZDogXCJKJ2FpIGTDqGrDoCB1biBjb21wdGUgRG9jdG9saXZlXCIsXHJcbiAgICAgICAgICAgIHNpZ251cDogXCJTJ2luc2NyaXJlXCIsXHJcbiAgICAgICAgICAgIHNpZ25pbjogXCJTZSBjb25uZWN0ZXJcIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwiQ29uc3VsdGF0aW9uIHZpZMOpbyDDoCBkaXN0YW5jZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDM6e1xyXG4gICAgICAgICAgICB0aXRsZTpcIk5vdXMgYXZvbnMgZW52b3nDqSB1biBtYWlsIMOgIHZvdHJlIGFkcmVzc2UgcG91ciB2YWxpZGVyIHZvdHJlIGNvbXB0ZVwiLFxyXG4gICAgICAgICAgICBnZW5lcmF0ZTogXCJFbnZveWVyIGF1dHJlIGVtYWlsXCIsXHJcbiAgICAgICAgICAgIHJldmlyaWZ5OiBcIkonYWkgdsOpcmlmacOpIG1vbiBjb21wdGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXA0IDp7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiBkZSBsYSBjb25zdWx0YXRpb25cIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwiQ29uc3VsdGF0aW9uIHZpZMOpbyDDoCBkaXN0YW5jZVwiLFxyXG4gICAgICAgICAgICBjb25maXJtOiBcIkNvbmZpcm1lciBsZSByZW5kZXotdm91cyBcIixcclxuICAgICAgICAgICAgcmVtaW5kOiBcIiBFbiBjb25maXJtYW50IGNlIHJlbmRlei12b3VzIHZvdXMgdm91cyBlbmdhZ2V6IMOgIGwnaG9ub3Jlci4gUGVuc2V6IGJpZW4gw6AgYW51bGVyIGNlIHJlbmRlei12b3VzIGxlIHBsdXTDtHQgcG9zc2libGUgZW4gY2FzIGQnaW1wcsOpdnVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDU6e1xyXG4gICAgICAgICAgICB0aXRsZTogXCIgVm90cmUgcmVuZGV6LXZvdXMgw6AgYmllbiDDqXRhaXQgZW5yZWdpc3RyZXIuXCIsXHJcbiAgICAgICAgICAgIGdlcmVyOiBcIkfDqXJlciB2b3MgcmVuZGV6LXZvdXNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcHJvZmlsUGFnZToge1xyXG4gICAgICAgIGFjY2Vzc0luZm86IFwiaW5mb3JtYXRpb25zIGQnYWNjw6hzXCIsXHJcbiAgICAgICAgc2VjcmV0YXJpYXQ6IFwiQ29udGFjdCBkdSBzZWNyw6l0YXJpYXRcIixcclxuICAgICAgICBhYm91dDogXCLDgCBwcm9wb3MgZGUgbW9pXCIsXHJcbiAgICAgICAgZ2VuZXJhbDogXCJQcsOpc2VudGF0aW9uIGfDqW7DqXJhbGVcIixcclxuICAgICAgICBzcGVjaWFsaXRlOiBcIlNww6ljaWFsaXTDqVwiLFxyXG4gICAgICAgIHBhcmNvdXI6IFwiUGFyY291cnNcIixcclxuICAgICAgICBkZXNjcmlwdGlvblBBcmM6IFwiRGVzY3JpcHRpb24gZHUgcGFyY291cnMgZHUgbcOpZGVjaW5cIixcclxuICAgICAgICBmb3JtYXRpb246IFwiRm9ybWF0aW9uXCIsXHJcbiAgICAgICAgYXdhcmQ6IFwiUsOpY29tcGVuc2VzXCIsXHJcbiAgICAgICAgZXhwZXJpZW5jZTogXCJleHDDqXJpZW5jZVwiLFxyXG4gICAgICAgIHNlZURpc3BvOiBcIkFmZmljaGVyIGxhIGRpc3BvbmliaWxpdMOpXCIsXHJcbiAgICAgICAgc2VlTWFwOiBcIkFmZmljaGVyIGxhIHBvc2l0aW9uIMOgIGxhIG1hcFwiLFxyXG4gICAgICAgIHRhcmlmOiBcIlRhcmlmc1wiLFxyXG4gICAgICAgIGRldGFpbHM6IFwiRMOpdGFpbCBkZXMgcHJpeCBkZSBjaGFxdWUgdHlwZSBkZSBjb25zdWx0YXRpb24uXCIsXHJcbiAgICAgICAgaG9ub3JlOiBcIkNlcyBob25vcmFpcmVzIHZvdXMgc29udCBjb21tdW5pcXXDqXMgw6AgdGl0cmUgaW5kaWNhdGlmIHBhciBsZSBwcmF0aWNpZW4uIElscyBwZXV2ZW50IHZhcmllciBzZWxvbiBsZSB0eXBlIGRlIHNvaW5zIGZpbmFsZW1lbnQgcsOpYWxpc8OpcyBlbiBjYWJpbmV0LCBsZSBub21icmUgZGUgY29uc3VsdGF0aW9ucyBldCBsZXMgYWN0ZXMgYWRkaXRpb25uZWxzIG7DqWNlc3NhaXJlcy4gRW4gY2FzIGRlIGTDqXBhc3NlbWVudCBkZXMgdGFyaWZzLCBsZSBwcmF0aWNpZW4gZG9pdCBlbiBhdmVydGlyIHByw6lhbGFibGVtZW50IGxlIHBhdGllbnQuXCIsXHJcbiAgICAgICAgc2VydmljZTogXCJTZXJ2aWNlIC0gVmlzaXRlXCIsXHJcbiAgICAgICAgcHJpeDogXCJQcml4XCIsXHJcbiAgICAgICAgaG9yYWlyZTogXCJIb3JhaXJlc1wiLFxyXG4gICAgICAgIGRldGFpbHNIZXVyZXM6IFwiRMOpdGFpbCBkZXMgaGV1cnMgZGUgdHJhdmFpbCBwb3VyIGNoYXF1ZSBqb3VyIGRlIGxhIHNlbWFpbmUuXCIsXHJcbiAgICAgICAgY29uZmlybTpcIkNvbmZpcm1lclwiLFxyXG4gICAgICAgIGNhbmNlbDogXCJhbm51bGVyXCIsXHJcbiAgICAgICAgdGltZVNlbGVjdGVkOiBcIkNyw6luZWF1IHPDqWzDqWN0aW9ubsOpIHBvdXIgbGEgY29uc3VsdGF0aW9uIGNvbW1lbmNlIMOgIFwiLFxyXG5cclxuICAgIH1cclxufSIsIi8vIHNyYy9jb250ZXh0L3N0YXRlLmpzXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcFdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBbdGVtcG9yYXJ5X2FwcG9pbnRtZW50LCBzZXRUZW1wb3JhcnlfYXBwb2ludG1lbnRdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IHNldFVzZXJUZW1wb3JhcnkgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGVtcG9yYXJ5X2FwcG9pbnRtZW50XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICBzZXRUZW1wb3JhcnlfYXBwb2ludG1lbnQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBleGlzdGluZ3RlbXBvcmFyeV9hcHBvaW50bWVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcG9yYXJ5X2FwcG9pbnRtZW50XCIpO1xyXG5cclxuICAgIGV4aXN0aW5ndGVtcG9yYXJ5X2FwcG9pbnRtZW50ID0gKGV4aXN0aW5ndGVtcG9yYXJ5X2FwcG9pbnRtZW50ICE9IFwidW5kZWZpbmVkXCIpID8gSlNPTi5wYXJzZShleGlzdGluZ3RlbXBvcmFyeV9hcHBvaW50bWVudCkgOiB7fTtcclxuXHJcbiAgICBzZXRUZW1wb3JhcnlfYXBwb2ludG1lbnQoZXhpc3Rpbmd0ZW1wb3JhcnlfYXBwb2ludG1lbnQpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gXHJcbiAgICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0ZW1wb3JhcnlfYXBwb2ludG1lbnQsIHNldFVzZXJUZW1wb3JhcnkgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufVxyXG4iLCIvLyBzcmMvY29udGV4dC9zdGF0ZS5qc1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLy4uL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24nXHJcblxyXG5cclxuaW1wb3J0IGNvbnRlbnRGUiBmcm9tICcuLy4uL2NvbnRlbnRGUidcclxuaW1wb3J0IGNvbnRlbnRFTiBmcm9tICcuLy4uL2NvbnRlbnRFTidcclxuaW1wb3J0IGNvbnRlbnRBUiBmcm9tICcuLy4uL2NvbnRlbnRBUidcclxuXHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuXHJcblxyXG5cclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuXHJcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXQnO1xyXG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuXHJcbmltcG9ydCB7TWRWaXNpYmlsaXR5LCBNZFZpc2liaWxpdHlPZmZ9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xyXG5cclxuXHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi8uLi9FbmRQb2ludCc7XHJcbmltcG9ydCB7IERpYWxvZywgRGlhbG9nVGl0bGUsIERpYWxvZ0NvbnRlbnQsIERpYWxvZ0NvbnRlbnRUZXh0LCBEaWFsb2dBY3Rpb25zIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcclxuICBsZXQgZXhpc3Rpbmd1c2VyRGF0YSA9IENvb2tpZXMuZ2V0KFwicGF0aWVudERhdGFcIik7XHJcblxyXG4gIGV4aXN0aW5ndXNlckRhdGEgPSAoZXhpc3Rpbmd1c2VyRGF0YSAhPSB1bmRlZmluZWQpID8gSlNPTi5wYXJzZShleGlzdGluZ3VzZXJEYXRhKSA6IHt9O1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtsb2NhbGV9ID0gcm91dGVyO1xyXG5cclxuICBjb25zdCBjb250ZW50ID0gbG9jYWxlID09PSBcImFyXCIgPyBjb250ZW50QVIgOiBsb2NhbGUgPT09IFwiZW5cIiA/IGNvbnRlbnRFTiA6IGNvbnRlbnRGUjtcclxuXHJcbiAgICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKGV4aXN0aW5ndXNlckRhdGEpO1xyXG4gICAgY29uc3QgW2FkZGVkQnlBZG1pbiwgc2V0QWRkZWRCeUFkbWluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb246IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOlwiXCIsXHJcbiAgICAgIG9sZF9wYXNzd29yZDpcIlwiLFxyXG59KTtcclxuICAgIGNvbnN0IHNldFVzZXIgPSAoZGF0YSkgPT4ge1xyXG4gICAgICBpZighZGF0YS50b2tlbil7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ3BhdGllbnREYXRhJywge30sIHsgZXhwaXJlczogLTEwMDAgfSk7XHJcblxyXG5cclxuICAgICAgICBzZXRVc2VyRGF0YSh7aXNBdXRoOiBmYWxzZX0pO1xyXG4gICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBwYXRobmFtZTogYC9hY2NvdW50L25ld2AsXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHNldEFkZGVkQnlBZG1pbihkYXRhLnVzZXIuYWRkZWRCeUFkbWluICYmICFkYXRhLnVzZXIucGFzc3dvcmRDaGFuZ2VkKTtcclxuICAgICAgICBDb29raWVzLnNldCgncGF0aWVudERhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcbiAgICAgICAgc2V0VXNlckRhdGEoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmKHVzZXJEYXRhLnRva2VuKXtcclxuICAgICAgICBzZXRBZGRlZEJ5QWRtaW4odXNlckRhdGEudXNlci5hZGRlZEJ5QWRtaW4gJiYgIXVzZXJEYXRhLnVzZXIucGFzc3dvcmRDaGFuZ2VkKTtcclxuICAgICAgICBmZXRjaChgJHtDb25maWcuQkFDS0VORF9VUkx9L3BhdGllbnQvdmVyaWZ5YCx7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGB0b2tlbiAke3VzZXJEYXRhLnRva2VufWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIChyKSA9PiByLmpzb24oKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFyZXMuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAvLyBzZXRVc2VyRGF0YShleGlzdGluZ3VzZXJEYXRhKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgc2V0VXNlckRhdGEoe2lzQXV0aDogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkuY2F0Y2goZXJyb3IgPT57IFxyXG4gICAgICAgICAgICBzZXRVc2VyRGF0YSh7aXNBdXRoOiBmYWxzZX0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICAgIFxyXG4gICAgY29uc3QgaGFuZGxlQ29uZmlybWF0aW9uID0gKCkgPT4ge1xyXG4gICAgICBsZXQgdGVzdFBhc3MgPSBzdGF0ZS5wYXNzd29yZC50cmltU3RhcnQoKTtcclxuXHJcbiAgICAgIGlmKHRlc3RQYXNzLmxlbmd0aCA+IDYpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtwYXNzd29yZDogc3RhdGUucGFzc3dvcmQsIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RhdGUucGFzc3dvcmRfY29uZmlybWF0aW9uLCBvbGRfcGFzc3dvcmQ6IHN0YXRlLm9sZF9wYXNzd29yZCwgZW1haWw6IHVzZXJEYXRhLnVzZXIuZW1haWwgfVxyXG4gICAgICAgIGZldGNoKGAke0NvbmZpZy5CQUNLRU5EX1VSTH0vcGF0aWVudC9uZXctcGFzc3dvcmRgLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsIFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGB0b2tlbiAke3VzZXJEYXRhLnRva2VufWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICB9IClcclxuICAgICAgICAudGhlbigocmVzKSA9PntcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICBzZXRBZGRlZEJ5QWRtaW4oZmFsc2UpO1xyXG4gICAgICAgICAgc2V0VXNlckRhdGEocmVzLmRhdGEudXBkYXRlUGF0aWVudClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHt0YXJnZXQgOiB7dmFsdWUsIG5hbWV9fSkgPT4ge1xyXG4gICAgICBzZXRTdGF0ZShvbGQgPT4ge3JldHVybiB7IC4uLm9sZCwgW25hbWVdOiB2YWx1ZX19KSA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlckRhdGEsIHNldFVzZXIgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPERpYWxvZ1xyXG4gICAgICAgIC8vIG9wZW49e2ZhbHNlfVxyXG4gICAgICAgIG9wZW49e2FkZGVkQnlBZG1pbn1cclxuICAgICAgICBvbkNsb3NlPXsgKCkgPT4ge319XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPiBSZW5vdXZlbGVyIGxlIG1vdCBkZSBwYXNzZSA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGlkPVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIENlIGNvbXB0ZSDDoCB0YWl0IGNyw6llciBhdmVjIHVuIGFkbWluaXN0cmF0ZXVyLCBhbG9ycyBjZSBtb3QgZGUgcGFzc2Ugw6Agw6l0YWl0IGfDqW7DqXJlciBkJ3VuZSBtYW5pw6lyZSBhbMOpYXRvaXIuIE9uIHZvdXMgcmVjb21hbmRlIGRlIHNhaXNpciB1biBub3V2ZWF1IG1vdCBkZSBwYXNzZSBwb3VyIGxhIHNjdWl0w6kgZGUgdm9zIGluZm9ybWF0aW9uLlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9XCJtdC0zXCIgZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1wYXNzd29yZFwiPiB7Y29udGVudC5uZXcub2xkcGFzc0xhYmVsfSA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPXtzdGF0ZS5zaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5vbGRfcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICBsYWJlbD17Y29udGVudC5uZXcub2xkcGFzc0xhYmVsfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJvbGRfcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidG9nZ2xlIHBhc3N3b3JkIHZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHNldFN0YXRlKG9sZCA9PntyZXR1cm4gIHsuLi5vbGQsIHNob3dQYXNzd29yZDogIXN0YXRlLnNob3dQYXNzd29yZH19KX0gXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3N0YXRlLnNob3dQYXNzd29yZCA/IDxNZFZpc2liaWxpdHkgLz4gOiA8TWRWaXNpYmlsaXR5T2ZmIC8+fVxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9XCJtdC0zXCIgZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1wYXNzd29yZFwiPiB7Y29udGVudC5uZXcucGFzc0xhYmVsfSA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPXtzdGF0ZS5zaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtjb250ZW50Lm5ldy5wYXNzTGFiZWx9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ9e1xyXG4gICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInRvZ2dsZSBwYXNzd29yZCB2aXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBzZXRTdGF0ZShvbGQgPT57cmV0dXJuICB7Li4ub2xkLCBzaG93UGFzc3dvcmQ6ICFzdGF0ZS5zaG93UGFzc3dvcmR9fSl9IFxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaG93UGFzc3dvcmQgPyA8TWRWaXNpYmlsaXR5IC8+IDogPE1kVmlzaWJpbGl0eU9mZiAvPn1cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPVwibXQtM1wiIGZ1bGxXaWR0aCB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtcGFzc3dvcmRcIj4ge2NvbnRlbnQubmV3LmNvbmZpcm1wYXNzTGFiZWx9IDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9e3N0YXRlLnNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnBhc3N3b3JkX2NvbmZpcm1hdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtjb250ZW50Lm5ldy5jb25maXJtcGFzc0xhYmVsfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIlxyXG4gICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidG9nZ2xlIHBhc3N3b3JkIHZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHNldFN0YXRlKG9sZCA9PntyZXR1cm4gIHsuLi5vbGQsIHNob3dQYXNzd29yZDogIXN0YXRlLnNob3dQYXNzd29yZH19KX0gXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3N0YXRlLnNob3dQYXNzd29yZCA/IDxNZFZpc2liaWxpdHkgLz4gOiA8TWRWaXNpYmlsaXR5T2ZmIC8+fVxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm1hdGlvbn0gY29sb3I9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgQ29uZmlybWVyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID0gZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgYXMsXG4gICAgICBjdXJMb2NhbGUsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlkbGVUaW1lb3V0PFQ+KG1zOiBudW1iZXIsIGVycjogRXJyb3IpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKSwgbXMpKVxuICApXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgaWRsZVRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gICAgKSxcbiAgXSlcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBpZGxlVGltZW91dDxSb3V0ZUxvYWRlckVudHJ5PihcbiAgICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xyXG5pbXBvcnQgJy4vLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgJy4vLi4vc3R5bGVzL2ZhbmN5Ym94LmNzcyc7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzJztcclxuXHJcbmltcG9ydCB7IEFwcFdyYXBwZXIgfSBmcm9tICcuLy4uL2NvbnRleHQvQXBwb2ludGVtZW50Q29udGV4dCc7IFxyXG5pbXBvcnQgeyBBdXRoV3JhcHBlciB9IGZyb20gJy4vLi4vY29udGV4dC9BdXRoQ29udGV4dCc7IFxyXG5cclxuaW1wb3J0IENvbmZpZyBmcm9tICcuLy4uL0VuZFBvaW50JztcclxuXHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnanNzJztcclxuaW1wb3J0IHJ0bCBmcm9tICdqc3MtcnRsJztcclxuaW1wb3J0IHsgU3R5bGVzUHJvdmlkZXIsIGpzc1ByZXNldCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgTW9tZW50TGFuZ3VlIGZyb20gJy4vLi4vY29tcG9uZW50cy9Nb21lbnRMYW5ndSdcclxuY29uc3QganNzID0gY3JlYXRlKHsgcGx1Z2luczogWy4uLmpzc1ByZXNldCgpLnBsdWdpbnMsIHJ0bCgpXSB9KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtsb2NhbGV9ID0gcm91dGVyO1xyXG4gIGNvbnN0IG1vbWVudExvYyA9IGxvY2FsZSA9PT0gXCJhclwiID8gXCJtYVwiIDogbG9jYWxlXHJcbiAgbW9tZW50LnVwZGF0ZUxvY2FsZShtb21lbnRMb2MsICBNb21lbnRMYW5ndWVbbW9tZW50TG9jXSk7IFxyXG5cclxuICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgIFxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBwYXRoOlwiL3NvY2tldC5pb1wiLFxyXG4gICAgICAgIHJlY29ubmVjdGlvbjogdHJ1ZSxcclxuICAgICAgICByZWNvbm5lY3Rpb25BdHRlbXB0czogSW5maW5pdHksXHJcbiAgICAgICAgdHJhbnNwb3J0czogWyd3ZWJzb2NrZXQnXVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgY29ubmVjdGlvbiA9IGlvLmNvbm5lY3QoQ29uZmlnLkJBQ0tFTkRfVVJMLCBvcHRpb25zKTtcclxuICAgIGNvbm5lY3Rpb24ub24oJ2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0Jyk7XHJcbiAgICAgIGNvbm5lY3Rpb24uZW1pdCgnam9pbi1wYXRpZW50JywgIHtpZDogXCJwXCIgKyAxfSAsICh7ZXJyb3IsIG1lc3NhZ2UgfSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBtZXNzYWdlKTtcclxuICAgICAgICBpZihlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRTb2NrZXRFcnJvcihlcnJvciwgbWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub24oJ2Nvbm5lY3RfZXJyb3InLCAoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdF9lcnJvcicsIGVycm9yKVxyXG4gICAgfSk7IFxyXG5cclxuICAgIGNvbm5lY3Rpb24ub24oJ2Rpc2Nvbm5lY3QnLCAocmVhc29uKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Rpc2Nvbm5lY3QnLCByZWFzb24pXHJcblxyXG4gICAgfSk7XHJcbiAgXHJcblxyXG4gICAgY29ubmVjdGlvbi5vbigncmVjb25uZWN0X2F0dGVtcHQnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY29ubmVjdF9hdHRlbXB0JylcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uKCdyZWNvbm5lY3RpbmcnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY29ubmVjdGluZycpXHJcblxyXG4gICAgfSk7XHJcbiAgICBjb25uZWN0aW9uLm9uKCdyZWNvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY29ubmVjdCcpXHJcblxyXG4gICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgXHJcblxyXG4gICAgc2V0U29ja2V0KGNvbm5lY3Rpb24pXHJcbn0sIFtdICk7XHJcblxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XHJcbiAgICBpZiAoanNzU3R5bGVzKSB7XHJcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XHJcbiAgICB9XHJcbiAgIFxyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIFxyXG4gIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGxvY2FsZSkge1xyXG4gICAgICAgIGNhc2UgXCJhclwiOiAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gJ2FyJzsgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPSAncnRsJzsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJlblwiOiAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gJ2VuJzsgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPSAnbHRyJzsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQgOiAgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gJ2ZyJzsgXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPSAnbHRyJzsgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBcclxuICAgIH1cclxuICB9LCBbbG9jYWxlXSkgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT4gRG9jdG9saXZlIDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTdHlsZXNQcm92aWRlciBqc3M9e2pzc30+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtjcmVhdGVNdWlUaGVtZSh7XHJcbiAgZGlyZWN0aW9uOiBsb2NhbGUgPT09IFwiYXJcIiA/ICdydGwnIDogXCJsdHJcIixcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjMWFiOWI5JyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogJyMxOTg1N2InLFxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46IHJlZC5BNDAwLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJyNmZmYnLFxyXG4gICAgfSxcclxuICAgIHR5cG9ncmFwaHk6IHtcclxuICAgICAgZm9udEZhbWlseTogW1xyXG4gICAgICAgICdCYXJsb3cnLFxyXG4gICAgICAgICdzYW5zLXNlcmlmJyxcclxuICAgICAgICAnXCJBcHBsZSBDb2xvciBFbW9qaVwiJyxcclxuICAgICAgICAnXCJTZWdvZSBVSSBFbW9qaVwiJyxcclxuICAgICAgICAnXCJTZWdvZSBVSSBTeW1ib2xcIicsXHJcbiAgICAgIF0uam9pbignLCcpLFxyXG4gICAgfSxcclxuICB9LFxyXG59KX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8QXBwV3JhcHBlcj5cclxuICAgICAgICAgICAgPEF1dGhXcmFwcGVyID5cclxuICAgICAgICAgICAgICA8TGF5b3V0IGxvY2FsZT17bG9jYWxlfSBwYXRobmFtZT0ge3JvdXRlci5wYXRobmFtZX0gPiBcclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gc29ja2V0PXtzb2NrZXR9IC8+ICBcclxuICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9BdXRoV3JhcHBlcj5cclxuICAgICAgICAgIDwvQXBwV3JhcHBlcj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDwvU3R5bGVzUHJvdmlkZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbk15QXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuXHJcbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Hcm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvT3V0bGluZWRJbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNzLXJ0bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvNVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9