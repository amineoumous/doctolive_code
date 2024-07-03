module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/recherche/[specialite]/[ville].js");
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

/***/ "./assets/jss/recherchePage.js":
/*!*************************************!*\
  !*** ./assets/jss/recherchePage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./assets/jss/variables.js");


const profilePageStyle = theme => ({
  container: _variables_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  h1: {
    margin: " 0 0 16px",
    fontSize: 32,
    lineHeight: "40px",
    fontWeight: 700,
    color: "#fff",
    "-webkit-text-fill-color": "#fff"
  },
  h2: {
    margin: " 0 0 8px",
    fontSize: 20,
    color: "#757575",
    lineHeight: "40px",
    fontWeight: 700,
    color: "#fff",
    "-webkit-text-fill-color": "#fff"
  },
  section: {
    paddingTop: 64,
    paddingBottom: 24,
    "& .section": {
      marginBottom: 24,
      marginTop: 64
    }
  },
  callToAction: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    "-webkit-box-orient": "vertical",
    "-webkit-box-direction": "normal",
    marginTop: 64,
    flex: "0 0 auto",
    textDecoration: "none",
    color: "#435f71",
    paddingTop: 16
  },
  calltoActionContent: {
    minHeight: "50%",
    backgroundColor: "#f2fafd",
    flex: "1 0 auto"
  },
  calltoActionCard: {
    display: "flex",
    flexWrap: "wrap"
  },
  calltoActionContentWrap: {
    textAlign: "center",
    backgroundRepeat: "repeat no-repeat",
    backgroundPosition: "bottom",
    padding: 16,
    backgroundSize: "contain",
    "& .fixed-width": {
      margin: "auto",
      maxWidth: 544,
      "& h2": {
        fontSize: 18,
        marginTop: 48,
        lineHeight: "24px",
        textAlign: "center",
        fontWeight: 700,
        color: "#224358"
      },
      "& .text-body": {
        fontSize: 14,
        marginTop: 16,
        lineHeight: "24px",
        textAlign: "center",
        fontWeight: 400,
        color: "#224358"
      },
      "& .button": {
        fontSize: 14,
        color: "#fff",
        height: 40,
        border: 0,
        outline: "none",
        boxShadow: "none",
        "-webkit-appearance": "none !important",
        "-moz-appearance": "none !important",
        appearance: "none !important",
        textDecoration: "none !important",
        textTransform: "uppercase",
        margin: 0,
        display: "inline-block",
        padding: "0 16px",
        "-webkit-transition": "opacity 500ms, color 100ms, background-color 100ms",
        transition: "opacity 500ms, color 100ms, background-color 100ms",
        backgroundColor: "transparent",
        cursor: "pointer",
        borderRadius: 8,
        backgroundColor: "#1ab9b9",
        marginBottom: 52,
        lineHeight: 40,
        marginTop: 32,
        "& span": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          height: "100%"
        }
      }
    }
  },
  calltoActionImage: {
    width: 431,
    position: "absolute",
    bottom: 0,
    left: 0,
    borderBottomLeftRadius: 4,
    overflow: "hidden",
    "& img": {
      width: "inherit",
      verticalAlign: "bottom"
    }
  },
  sectionTitlle: {
    fontSize: 24,
    lineHeight: "32px",
    textAlign: "center",
    fontWeight: 700,
    color: "#224358",
    margin: "0 16px 32px 16px"
  },
  header: {
    position: "relative",
    background: "-webkit-linear-gradient(top, #1ab9b9 19%, #1ab9b9 100%)",
    background: "linear-gradient(180deg, #1ab9b9 19%, #1ab9b9 100%)",
    display: "block"
  },
  backgroundZone: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden"
  },
  bakgroudContainer: {
    width: "100%",
    height: "100%",
    minHeight: "450px",
    padding: "80px 0",
    backgroundSize: "25% auto",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      backgroundSize: "40% auto",
      padding: "40px 0 160px 0"
    },
    [theme.breakpoints.down("xs")]: {
      backgroundSize: "100% auto",
      padding: "40px 0 160px 0",
      height: "991px"
    }
  },
  downloader: {
    "& .downloader-wrapper": {
      "& h2": {
        fontSize: 18,
        lineHeight: "24px",
        fontWeight: 700,
        color: "#224358",
        margin: 0
      },
      "& h3": {
        fontSize: 14,
        lineHeight: "24px",
        fontWeight: 700,
        color: "#7791a2",
        margin: 0,
        marginBottom: 32,
        marginTop: 8
      },
      "& .appstore": {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        cursor: "pointer",
        "& .appstore-container": {
          padding: 16,
          border: "1px solid #000",
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          "& .appstore-content": {
            maxHeight: 60,
            width: "100%",
            display: "flex",
            justifyContent: "start"
          }
        }
      },
      "& .downloader-image": {
        "& img": {
          height: 320
        }
      }
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (profilePageStyle);

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

/***/ "./components/MedecinWidget/CalendarAvailability.js":
/*!**********************************************************!*\
  !*** ./components/MedecinWidget/CalendarAvailability.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CalendarAvailability; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EndPoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../EndPoint */ "./EndPoint.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../context/AuthContext */ "./context/AuthContext.js");

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\components\\MedecinWidget\\CalendarAvailability.js";






function CalendarAvailability(props) {
  const {
    0: startDate,
    1: setStartDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(moment__WEBPACK_IMPORTED_MODULE_2___default()());
  const {
    0: calandar,
    1: setMedecinCalendar
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    userData
  } = Object(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__["useAuth"])();

  const selectHour = (day, hour, disable) => {
    console.log(hour);

    if (disable) {//    this.setState({ error: true, expired:true, message: 'ce moment est indisponible' })
      //    setTimeout(() => {
      //        this.setState({expired: false})
      //    }, 5000);
    } else {
      props.setSelectedHour(day.format('YYYY/MM/DD'), hour);
    }
  };

  const changeDate = direction => {
    if (direction === 'next') {
      setStartDate(moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).add(7, 'days'));
    } else {
      if (moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).isAfter(moment__WEBPACK_IMPORTED_MODULE_2___default()())) {
        setStartDate(moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).subtract(7, 'days')); //    this.setState({ startDate: moment(this.state.startDate).subtract(7, 'days') })
      }
    }
  };

  const createHoursSoir = day => {
    const disponibiliteDay = props.showDisponibilite.horaires.find(h => h.jour === day.format('dddd'));
    if (!disponibiliteDay) return [];
    let table = [];
    let endHour = moment__WEBPACK_IMPORTED_MODULE_2___default()(disponibiliteDay.fin_soir, 'HH:mm:ss');
    let hour = moment__WEBPACK_IMPORTED_MODULE_2___default()(disponibiliteDay.debut_soir, 'HH:mm:ss');
    let i = 0;

    while (hour.isBefore(endHour) && i < 100) {
      let element = undefined;

      if (calandar) {
        // element = calandar.find( e => moment.utc(e.date).format('HH:mm') === hour)
        element = calandar.find(e => {
          // return moment(e.date).isSame(day.format('YYYY-MM-DDT') + hour.format('HH:mm')+":00.000Z", "minutes")
          return e.time === hour.format('HH:mm:ss') && day.format('YYYY-MM-DD') === e.date;
        });
      }

      let HourInTheDay = moment__WEBPACK_IMPORTED_MODULE_2___default()(moment__WEBPACK_IMPORTED_MODULE_2___default()(day).format('YYYY/MM/DD') + hour.format('HH:mm'), 'YYYY/MM/DDHH:mm');
      let isDisabled = element !== undefined || moment__WEBPACK_IMPORTED_MODULE_2___default()().isAfter(HourInTheDay);
      let cloneHour = hour.format('HH:mm');
      let hourDiv = !isDisabled ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        disabled: isDisabled,
        className: isDisabled ? "cell hours-element disabled" : "cell hours-element",
        onClick: () => selectHour(day, cloneHour, isDisabled),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "hour",
          children: [" ", hour.format('HH:mm'), " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 42
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " hours-element-disabled",
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "hour-empty",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 71
        }, this), " "]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 19
      }, this);
      table.push(hourDiv);
      i++;
      hour = hour.add(disponibiliteDay.duree, 'minutes');
    }

    return table;
  };

  const createHoursMatin = day => {
    const disponibiliteDay = props.showDisponibilite.horaires.find(h => h.jour === day.lang("fr").format('dddd'));
    if (!disponibiliteDay) return [];
    let table = [];
    let endHour = moment__WEBPACK_IMPORTED_MODULE_2___default()(disponibiliteDay.fin_matin, 'HH:mm:ss');
    let hour = moment__WEBPACK_IMPORTED_MODULE_2___default()(disponibiliteDay.debut_matin, 'HH:mm:ss');
    let i = 0;

    while (hour.isBefore(endHour) && i < 100) {
      let element = undefined;

      if (calandar) {
        element = calandar.find(e => {
          return e.time === hour.format('HH:mm:ss') && day.format('YYYY-MM-DD') === e.date;
        });
      }

      let HourInTheDay = moment__WEBPACK_IMPORTED_MODULE_2___default()(moment__WEBPACK_IMPORTED_MODULE_2___default()(day).format('YYYY/MM/DD') + hour, 'YYYY/MM/DDHH:mm');
      let cloneHour = hour.format('HH:mm');
      let isDisabled = element !== undefined || moment__WEBPACK_IMPORTED_MODULE_2___default()().isAfter(HourInTheDay);
      let hourDiv = !isDisabled ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        disabled: isDisabled,
        className: isDisabled ? "cell hours-element disabled" : "cell hours-element",
        onClick: () => selectHour(day, cloneHour, isDisabled),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "hour",
          children: [hour.format('HH:mm'), "  "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }, this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 42
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " hours-element-disabled",
        children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "hour-empty",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 70
        }, this), " "]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 19
      }, this);
      table.push(hourDiv);
      i++;
      hour = hour.add(disponibiliteDay.duree, 'minutes');
    }

    return table;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    const res = await fetch(`${_EndPoint__WEBPACK_IMPORTED_MODULE_5__["default"].BACKEND_URL}/consultation/medecin-calendar/${props.showDisponibilite.id}/${startDate}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `token ${userData.token}`
      }
    });
    const data = await res.json();
    setMedecinCalendar(data.medecinCalendar);
  }, [startDate]);

  const createCalendar = () => {
    let table = [];

    for (let i = 0; i <= 6; i++) {
      let date = moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).add(i, 'days');

      let dayAvailability = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "calendar-day",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "calendar-day-title",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "cell-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "calendar-day-name",
              children: [date.format('dddd'), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "calendar-day-date",
              children: date.format('D') + " " + date.format("MMM")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [createHoursMatin(date), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 25
          }, this), createHoursSoir(date)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 39
      }, this);

      table.push(dayAvailability);
    }

    return table;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "date-range-calendar",
      style: props.locale === "ar" ? {
        direction: "rtl",
        textAlign: "right"
      } : {
        direction: "ltr"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "range-calendar",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "calendar-pagination",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "",
            id: "date-range-preview",
            onClick: () => changeDate('preview'),
            children: ["  ", props.locale === "ar" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdChevronRight"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 137
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdChevronLeft"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 156
            }, this), "  "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "calendar",
          children: props.showDisponibilite ? createCalendar() : null
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "calendar-pagination",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "",
            id: "date-range-next",
            onClick: () => changeDate('next'),
            children: ["  ", props.locale === "ar" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdChevronLeft"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 131
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdChevronRight"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 150
            }, this), " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 169,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/MedecinWidget/MapAccess.js":
/*!***********************************************!*\
  !*** ./components/MedecinWidget/MapAccess.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ "@react-google-maps/api");
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\components\\MedecinWidget\\MapAccess.js";

 // import markerIcon from 'assets/img/marker.png'

const libraries = ["places"];
const mapContainerStyle = {
  height: "50vh",
  width: "100%"
};
const mapStyles = [{
  "featureType": "road",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "transit",
  "elementType": "labels.text",
  "stylers": [{
    "visibility": "off"
  }]
}];
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  scrollwheel: false
};
function App(props) {
  const {
    isLoaded,
    loadError
  } = Object(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__["useLoadScript"])({
    googleMapsApiKey: props.apiKey,
    libraries
  });
  const [markers, setMarkers] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);
  const [center, setCenter] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    lat: 33.5795703,
    lng: -7.5874518
  });

  const handleClickMarker = () => {};

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (props.locations) {
      if (props.locations.length > 0) {
        if (props.locations[0]) {
          setMarkers(props.locations);
          setCenter({
            lat: props.locations[0]["latitude"],
            lng: props.locations[0]["longitude"]
          });
        }
      }
    }
  }, [props.locations]);
  const mapRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef();
  const onMapLoad = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(map => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], {
      id: "map",
      mapContainerStyle: mapContainerStyle,
      zoom: 8,
      center: center,
      options: options,
      onLoad: onMapLoad,
      children: markers.map((marker, index) => {
        if (!marker) {
          return null;
        }

        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
          position: {
            lat: marker.latitude,
            lng: marker.longitude
          },
          animation: window.google.maps.Animation.DROP,
          icon: "/image/marker.png",
          onClick: () => {
            handleClickMarker(marker);
          }
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 15
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/MedecinWidget/MedecinWidget.js":
/*!***************************************************!*\
  !*** ./components/MedecinWidget/MedecinWidget.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MedecinWidget; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EndPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../EndPoint */ "./EndPoint.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AppointementContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../context/AppointementContext */ "./context/AppointementContext.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fancyBox_fancybox_ReactFancyBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../fancyBox/fancybox/ReactFancyBox */ "./components/fancyBox/fancybox/ReactFancyBox.js");
/* harmony import */ var _CustomButtons_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../CustomButtons/Button */ "./components/CustomButtons/Button.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CalendarAvailability__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CalendarAvailability */ "./components/MedecinWidget/CalendarAvailability.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\components\\MedecinWidget\\MedecinWidget.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function MedecinWidget(props) {
  const {
    0: showDisponibilite,
    1: setShowDisponibilite
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    content,
    locale
  } = props;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "card",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "card-body",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "doctor-widget",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "doc-info-left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "doctor-img",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "doctor-profile.html",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: props.medecin.image ? `${_EndPoint__WEBPACK_IMPORTED_MODULE_2__["default"].BACKEND_URL}/${props.medecin.image}` : "/image/medecin/homme.jpg",
                className: "img-fluid",
                alt: "User Image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "doc-info-cont",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "doc-name",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "doctor-profile.html",
                children: ["Dr. ", `${props.medecin.nom} ${props.medecin.prenom}`]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 50
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 25
            }, this), !props.medecin.teleconsultationIsDisponible ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdVideocam"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 92
                }, this), " ", content.availableVideo, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 85
              }, this), " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 80
            }, this), props.medecin.specialites.map((specialite, index) => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                className: "doc-department",
                children: [!specialite.icon ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: `${_EndPoint__WEBPACK_IMPORTED_MODULE_2__["default"].BACKEND_URL}/${specialite.icon}`,
                  className: "img-fluid",
                  alt: "Speciality"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 111
                }, this), specialite.name]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 41
              }, this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "clinic-details",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "doc-location",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "fas fa-map-marker-alt"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 57
                }, this), !props.medecin.adress ? content.notSpecified : (props.medecin.adress.streetName ? props.medecin.adress.streetName : "") + " " + (props.medecin.adress.buildingName ? props.medecin.adress.buildingName : "") + " " + (props.medecin.adress.floor ? "étage " + props.medecin.adress.floor : "") + " " + (props.medecin.adress.sector ? props.medecin.adress.sector : "") + ", " + (props.medecin.adress.codePostal ? props.medecin.adress.codePostal : "") + " - " + (props.medecin.city ? props.medecin.city.name : "")]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
                children: props.medecin.pictures.map((picture, index) => {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "cabinet-img-container ml-2",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fancyBox_fancybox_ReactFancyBox__WEBPACK_IMPORTED_MODULE_7__["default"], {
                      thumbnail: `${_EndPoint__WEBPACK_IMPORTED_MODULE_2__["default"].BACKEND_URL}/${picture.path}`,
                      showCloseBtn: false,
                      image: `${_EndPoint__WEBPACK_IMPORTED_MODULE_2__["default"].BACKEND_URL}/${picture.path}`
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 41
                    }, this)
                  }, index, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 41
                  }, this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: locale === "ar" ? "doc-info-leftr" : "doc-info-right",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "clinic-booking",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
              href: "/doctor/" + props.medecin.id,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "view-pro-btn",
                children: [" ", content.seeProfile, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
              onClick: () => setShowDisponibilite(props.medecin),
              color: "primary",
              children: [" ", content.seeDispo, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this), showDisponibilite ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShowDisponibilite, _objectSpread(_objectSpread({
      showDisponibilite: showDisponibilite
    }, props), {}, {
      handleClose: () => setShowDisponibilite()
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, this);
}
const Transition = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_15___default.a, _objectSpread({
    direction: "up",
    ref: ref
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 12
  }, this);
});

function ShowDisponibilite(props) {
  const {
    0: selectedHour,
    1: setSelectedHour
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: selectedDate,
    1: setSelectedDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    content,
    locale
  } = props;
  const {
    setUserTemporary
  } = Object(_context_AppointementContext__WEBPACK_IMPORTED_MODULE_4__["useAppContext"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const setDetails = (day, hour) => {
    setSelectedDate(day);
    setSelectedHour(hour);
  };

  const validateTime = () => {
    setUserTemporary({
      date: selectedDate,
      time: selectedHour,
      medecinId: props.medecin.id
    });
    return router.push({
      pathname: `/doctor/${props.showDisponibilite.id}/appointment`
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11___default.a, {
      open: true,
      maxWidth: "lg" // fullWidth={true}
      ,
      style: locale === "ar" ? {
        direction: "rtl",
        textAlign: "right"
      } : {
        direction: "ltr"
      },
      TransitionComponent: Transition,
      keepMounted: true // onClose={props.handleClose}
      ,
      "aria-labelledby": "alert-dialog-slide-title",
      "aria-describedby": "alert-dialog-slide-description",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14___default.a, {
        id: "alert-dialog-slide-title",
        children: [" ", content.dispo, "  "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_13___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CalendarAvailability__WEBPACK_IMPORTED_MODULE_10__["default"], _objectSpread(_objectSpread({}, props), {}, {
          setSelectedHour: setDetails
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: !selectedHour && !selectedDate ? null : content.timeSelected + moment__WEBPACK_IMPORTED_MODULE_16___default()(selectedDate + selectedHour, 'YYYY/MM/DDHH:mm').calendar()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
            onClick: props.handleClose,
            color: "transparent",
            children: content.cancel
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
            disabled: !selectedHour,
            onClick: validateTime,
            color: "primary",
            children: content.confirm
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 12
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Search/Search.js":
/*!*************************************!*\
  !*** ./components/Search/Search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchInput; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bi */ "react-icons/bi");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! unfetch */ "unfetch");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _EndPoint__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../EndPoint */ "./EndPoint.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\components\\Search\\Search.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // @material-ui/icons











const style = theme => ({
  endAdornment: {
    display: "none",
    "& .MuiAutocomplete-endAdornment": {
      display: "none"
    }
  },
  searchContainer: {
    paddingTop: "120px"
  },
  searchContent: {
    zIndex: 5
  },
  searchBar: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center'
    }
  },
  searchBarQuery: {
    "-ms-flex": "0 0 240px",
    position: "relative",
    width: "403px",
    marginLeft: 10,
    [theme.breakpoints.down("sm")]: {
      flex: "0 0 100%",
      width: "100%"
    }
  },
  searchInputWrapper: {
    background: "#fff",
    position: "relative",
    display: "flex",
    width: "100%",
    height: 60,
    '& .searchbar-input-icon': {
      position: "absolute",
      top: 18,
      left: 16,
      width: 24,
      height: 24,
      pointerEvents: "none",
      fill: "#7791a2"
    },
    '& .searchbar-input-icon-ar': {
      position: "absolute",
      top: 18,
      right: 16,
      width: 24,
      height: 24,
      pointerEvents: "none",
      fill: "#7791a2"
    }
  },
  searchbarPlace: {
    "-ms-flex": " 0 0 490px",
    flex: " 0 0 490px",
    marginRight: "12px",
    position: "relative",
    width: "490px",
    [theme.breakpoints.down("sm")]: {
      flex: "0 0 100%",
      width: "100%",
      marginBottom: 12
    }
  },
  searchButton: {
    cursor: "pointer",
    position: "absolute",
    width: "45px",
    right: 0,
    transform: "translateX(100%) translateX(-51px)",
    color: "#435f71",
    transition: "-webkit-transform 400ms",
    transition: " transform 400ms",
    transition: "transform 400ms, -webkit-transform 400ms",
    transitionSelay: "100ms",
    height: "100%",
    textAlign: "left",
    backgroundColor: "white",
    border: 0,
    outline: "none",
    boxShadow: "none",
    appearance: "none !important",
    textDecoration: "none !important",
    margin: 0,
    display: "inline-block",
    padding: "0 16px"
  },
  searchSubmitButton: {
    borderRadius: " 8px",
    outline: "none",
    boxShadow: "none",
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5,
    width: "162px",
    height: "50px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginBottom: 12
    }
  }
});

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(style);
function SearchInput({
  content,
  locale
}) {
  const classes = useStyles();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  const {
    0: medecin,
    1: setMedecin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: ville,
    1: setVille
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: loadingMedecin,
    1: setLoadingMedecin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isSearched,
    1: setIsSerached
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: LoadingCities,
    1: setLoadingCities
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: inputValue,
    1: setInputValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: searchFetched,
    1: setSearchFetched
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: cities,
    1: setCities
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    try {
      const res = await unfetch__WEBPACK_IMPORTED_MODULE_11___default()(`${_EndPoint__WEBPACK_IMPORTED_MODULE_12__["default"].BACKEND_URL}/medecin/search/specialite/${inputValue}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();

      if (data.speciality) {
        setSearchFetched([...data.speciality, ...data.medecins]);
      }
    } catch (error) {}

    return () => {};
  }, [inputValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    try {
      const res = await unfetch__WEBPACK_IMPORTED_MODULE_11___default()(`${_EndPoint__WEBPACK_IMPORTED_MODULE_12__["default"].BACKEND_URL}/city`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      setCities(data.cities);
    } catch (error) {}

    return () => {};
  }, []);

  const submiting = e => {
    e.preventDefault();
    let Medecin_rechercher = medecin ? medecin.name ? medecin.name : medecin.nom : medecin;
    let ville_rechercher = ville ? ville.name : ville;

    if (!Medecin_rechercher) {
      Medecin_rechercher = "generaliste";
    } else {
      if (Medecin_rechercher.trim() === "") {
        Medecin_rechercher = "medecin-generaliste";
      }
    }

    if (!ville_rechercher) {
      ville_rechercher = "maroc";
    } else {
      if (ville_rechercher.trim() === "") {
        // setVille({name: "maroc"})
        ville_rechercher = "maroc";
      }
    }

    return router.push({
      pathname: `/recherche/${Medecin_rechercher}/${ville_rechercher}`
    });
  };

  const selectPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
    });
  };

  const handleSearchSpecialite = (e, newInputValue) => {
    setMedecin(newInputValue);
  };

  const handleSearchSpecialitea = (e, newInputValue) => {
    if (newInputValue.length > 0) {
      setInputValue(newInputValue);
    } else {}
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.searchContent,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      lg: "10",
      md: "10",
      className: "no-padding-left",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.searchBar,
        onSubmit: submiting,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.searchBarQuery + " with-vorder-right",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.searchInputWrapper + " search",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__["BsSearch"], {
              className: locale === "ar" ? "searchbar-input-icon-ar" : "searchbar-input-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 266,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_9___default.a, {
              onInputChange: handleSearchSpecialitea,
              loading: loadingMedecin,
              noOptionsText: isSearched ? content.noOption : content.noOption2,
              groupBy: option => option.name ? "specialite" : "medecin",
              id: "suggestion-medecin",
              loadingText: content.loading,
              options: searchFetched,
              debug: true,
              getOptionLabel: option => option.nom ? option.nom + " " + option.prenom + " " + option.email + " " + option.phone : option.name ? option.name : "",
              renderOption: option => option.nom ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: `/doctor/${option.id}`,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "d-flex w-100",
                    children: [option.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      className: "searchbar-result-profile-avatar ",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: "img-fluid",
                        src: `${_EndPoint__WEBPACK_IMPORTED_MODULE_12__["default"].BACKEND_URL}/${option.image}`
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 282,
                        columnNumber: 120
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 282,
                      columnNumber: 69
                    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: [" Dr. ", option.nom, " ", option.prenom, " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 283,
                      columnNumber: 53
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 281,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 280,
                  columnNumber: 45
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 279,
                columnNumber: 41
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
                children: option.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 289,
                columnNumber: 41
              }, this),
              onChange: (e, newInputValue) => handleSearchSpecialite(e, newInputValue),
              value: medecin,
              style: {
                width: "100%",
                height: "60px"
              },
              renderInput: params => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a, _objectSpread(_objectSpread({}, params), {}, {
                placeholder: content.recherchelabel
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 58
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 32
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 28
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 20
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.searchbarPlace,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.searchInputWrapper + " search",
            style: {
              overflow: "hidden"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdLocationOn"], {
              className: locale === "ar" ? "searchbar-input-icon-ar" : "searchbar-input-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 302,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_9___default.a, {
              id: "suggestion-villes",
              options: cities,
              loading: LoadingCities,
              loadingText: content.cityLoading,
              getOptionLabel: option => option.name ? option.name : "",
              onChange: (e, newInputValue) => setVille(newInputValue),
              value: ville,
              style: {
                width: "100%",
                height: "60px"
              },
              renderInput: params => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10___default.a, _objectSpread(_objectSpread({}, params), {}, {
                placeholder: content.citylabel
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 313,
                columnNumber: 58
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 303,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: selectPosition,
              className: classes.searchButton,
              type: "button",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_8__["BiCurrentLocation"], {
                  className: locale === "ar" ? "searchbar-input-icon-ar" : "searchbar-input-icon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 317,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 316,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 315,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: classes.searchSubmitButton + " btn btn-submit",
          role: "button",
          type: "submit",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "text-btn-element",
            children: [locale === "ar" ? "Rechercher " : "Rechercher ", "  "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            width: "8",
            height: "13",
            viewBox: "0 0 8 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M1.33854 12.3216C0.98099 12.3216 0.644884 12.1881 0.392043 11.9456C0.139228 11.7031 0 11.3806 0 11.0376C0 10.6947 0.139228 10.3722 0.392043 10.1297L4.52975 6.16051L0.392043 2.19136C0.139228 1.94884 0 1.62638 0 1.28341C0 0.940451 0.139228 0.617986 0.392043 0.375467C0.913974 -0.12518 1.76316 -0.125131 2.28506 0.375467L7.36924 5.25256C7.62205 5.49508 7.76128 5.81755 7.76128 6.16051C7.76128 6.50347 7.62205 6.82594 7.36924 7.06848L2.28504 11.9456C2.0322 12.1881 1.69606 12.3216 1.33854 12.3216ZM1.33854 0.490664C1.12682 0.490664 0.915099 0.56796 0.753917 0.722602C0.59775 0.872409 0.511746 1.07155 0.511746 1.28341C0.511746 1.49527 0.59775 1.69442 0.753917 1.84422L5.07253 5.98694C5.12051 6.03297 5.14748 6.09541 5.14748 6.16051C5.14748 6.22561 5.12051 6.28805 5.07253 6.33408L0.753917 10.4768C0.59775 10.6266 0.511746 10.8258 0.511746 11.0376C0.511746 11.2495 0.59775 11.4486 0.753917 11.5984C0.910084 11.7482 1.11771 11.8307 1.33854 11.8307C1.55937 11.8307 1.767 11.7482 1.92316 11.5984L7.00734 6.72134C7.1635 6.57154 7.24951 6.37239 7.24951 6.16053C7.24951 5.9487 7.1635 5.74953 7.00734 5.59972L1.92314 0.722602C1.76198 0.567985 1.55026 0.490664 1.33854 0.490664Z",
              fill: "white"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 324,
              columnNumber: 1
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 323,
            columnNumber: 118
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 12
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 259,
    columnNumber: 9
  }, this);
}
SearchInput.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  chart: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
}; // SearchInput.getInitialProps = async (ctx) => {
//     const res = await fetch(`${Config.BACKEND_URL}/city`);
//     console.log(res)
//     if(res.status === 404) return { villes: [] }
//     const json = await res.json()
//     return { villes:json.cities }
//   }

/***/ }),

/***/ "./components/fancyBox/fancybox/ReactFancyBox.js":
/*!*******************************************************!*\
  !*** ./components/fancyBox/fancybox/ReactFancyBox.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\components\\fancyBox\\fancybox\\ReactFancyBox.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import closeImg from './close.svg'
// import { Transition } from 'react-transition-group';



class ReactFancyBox extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
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
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: this.setShow,
          className: "thumbnail",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            style: {
              width: defaultThumbnailWidth,
              height: defaultThumbnailHeight,
              objectFit: 'cover'
            },
            className: "img-fluid",
            src: image,
            alt: "thumbnail"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: this.setShow,
        className: "thumbnail",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: thumbnail,
          className: "img-fluid",
          alt: "thumbnail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }, this);
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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "react-fancybox",
      children: [this.renderThumbnail(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["TransitionGroup"], {
        children: this.state.show ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
          timeout: 500,
          classNames: "item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "box",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              ref: box => this.box = box,
              className: "image-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                onClick: this.close,
                className: "img-fluid",
                className: "close-btn",
                src: "/image/close.svg",
                alt: "close"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 22
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                style: imageStyle,
                className: "img-fluid",
                src: image,
                alt: "original"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 21
              }, this), caption && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "caption",
                children: caption
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this);
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
ReactFancyBox.propTypes = {
  thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  defaultThumbnailWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  defaultThumbnailHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  caption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showCloseBtn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (ReactFancyBox);

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

/***/ "./pages/recherche/[specialite]/[ville].js":
/*!*************************************************!*\
  !*** ./pages/recherche/[specialite]/[ville].js ***!
  \*************************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return magasin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EndPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../EndPoint */ "./EndPoint.js");
/* harmony import */ var _components_MedecinWidget_MedecinWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../components/MedecinWidget/MedecinWidget */ "./components/MedecinWidget/MedecinWidget.js");
/* harmony import */ var _components_MedecinWidget_MapAccess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../components/MedecinWidget/MapAccess */ "./components/MedecinWidget/MapAccess.js");
/* harmony import */ var _components_Search_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../components/Search/Search */ "./components/Search/Search.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _contentFR__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../contentFR */ "./contentFR.js");
/* harmony import */ var _contentEN__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../contentEN */ "./contentEN.js");
/* harmony import */ var _contentAR__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../contentAR */ "./contentAR.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_jss_recherchePage_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../assets/jss/recherchePage.js */ "./assets/jss/recherchePage.js");


var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\pages\\recherche\\[specialite]\\[ville].js";













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(_assets_jss_recherchePage_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
function magasin({
  medecins,
  locations
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const {
    locale
  } = router;
  const content = locale === "ar" ? _contentAR__WEBPACK_IMPORTED_MODULE_11__["default"] : locale === "en" ? _contentEN__WEBPACK_IMPORTED_MODULE_10__["default"] : _contentFR__WEBPACK_IMPORTED_MODULE_9__["default"];
  const {
    0: screenWidth,
    1: setScreenWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1);
  const classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    function updateSize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: " DOCTOLIVE - Rechercher m\xE9decin "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this), medecins.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      className: "content-recherche m-0",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        lg: "7",
        md: "12",
        xs: "12",
        children: !medecins ? null : medecins.map((researched, index) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MedecinWidget_MedecinWidget__WEBPACK_IMPORTED_MODULE_5__["default"], {
              medecin: researched,
              locale: locale,
              content: content.resultResearch.widget
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 41
            }, this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 37
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        lg: "5",
        md: "12",
        xs: "12",
        className: "order-sm-last",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MedecinWidget_MapAccess__WEBPACK_IMPORTED_MODULE_6__["default"], {
          apiKey: _EndPoint__WEBPACK_IMPORTED_MODULE_4__["default"].apiKey,
          locations: locations
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: " ",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: " m-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          className: classes.header,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.bakgroudContainer,
            style: locale === "ar" ? {
              backgroundImage: `url(/image/search.svg)`,
              backgroundPosition: "bottom left",
              textAlign: "right"
            } : {
              backgroundImage: `url(/image/search.svg)`,
              backgroundPosition: "85% 75%"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container-fluid",
              id: "recherche-medecin",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "mb-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: classes.h1,
                  children: ["  ", content.resultResearch.noReseault, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 41
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: classes.h2,
                  children: [" ", content.heading2, " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Search_Search__WEBPACK_IMPORTED_MODULE_7__["default"], {
                content: content.resultResearch,
                locale: locale
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }, this)]
  }, void 0, true);
}
async function getServerSideProps(context) {
  const res = await fetch(`${_EndPoint__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_URL}/medecin/${context.params.specialite}/${context.params.ville}`);
  const data = await res.json();

  if (data.error) {
    return {
      // props: {medecins: data.medecins, locations: data.medecins.map((medecin) => medecin.adress)},
      props: {
        medecins: [],
        locations: []
      }
    };
  }

  return {
    props: {
      medecins: data.medecins,
      locations: data.medecins.map(medecin => medecin.adress)
    } //   props: {medecins: [], locations: []},

  };
}

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

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

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

/***/ "@material-ui/core/OutlinedInput":
/*!**************************************************!*\
  !*** external "@material-ui/core/OutlinedInput" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "@material-ui/core/Slide":
/*!******************************************!*\
  !*** external "@material-ui/core/Slide" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/lab/Autocomplete":
/*!************************************************!*\
  !*** external "@material-ui/lab/Autocomplete" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Autocomplete");

/***/ }),

/***/ "@react-google-maps/api":
/*!*****************************************!*\
  !*** external "@react-google-maps/api" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react-google-maps/api");

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

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bi");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "unfetch":
/*!**************************!*\
  !*** external "unfetch" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("unfetch");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9FbmRQb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL2J1dHRvblN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvcmVjaGVyY2hlUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVkZWNpbldpZGdldC9DYWxlbmRhckF2YWlsYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lZGVjaW5XaWRnZXQvTWFwQWNjZXNzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVkZWNpbldpZGdldC9NZWRlY2luV2lkZ2V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZhbmN5Qm94L2ZhbmN5Ym94L1JlYWN0RmFuY3lCb3guanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudEFSLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnRFTi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50RlIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9BcHBvaW50ZW1lbnRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvQXV0aENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3JlY2hlcmNoZS9bc3BlY2lhbGl0ZV0vW3ZpbGxlXS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2xpZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9iaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvbWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5mZXRjaFwiIl0sIm5hbWVzIjpbIkxvY2FsQ29uZmlnIiwiQkFDS0VORF9VUkwiLCJMT0NBTF9VUkwiLCJhcGlLZXkiLCJwcm9kQ29uZmlnIiwiYnV0dG9uU3R5bGUiLCJidXR0b24iLCJtaW5IZWlnaHQiLCJtaW5XaWR0aCIsImJhY2tncm91bmRDb2xvciIsImdyYXlDb2xvciIsImNvbG9yIiwid2hpdGVDb2xvciIsImJveFNoYWRvdyIsImhleFRvUmdiIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJwYWRkaW5nIiwibWFyZ2luIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJ3aWxsQ2hhbmdlIiwidHJhbnNpdGlvbiIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ3aGl0ZVNwYWNlIiwidmVydGljYWxBbGlnbiIsInRvdWNoQWN0aW9uIiwiY3Vyc29yIiwib3V0bGluZSIsImJsYWNrQ29sb3IiLCJkaXNwbGF5IiwidG9wIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsImxlZnQiLCJ3aGl0ZSIsInJvc2UiLCJyb3NlQ29sb3IiLCJwcmltYXJ5IiwicHJpbWFyeUNvbG9yIiwiaW5mbyIsImluZm9Db2xvciIsInN1Y2Nlc3MiLCJzdWNjZXNzQ29sb3IiLCJ3YXJuaW5nIiwid2FybmluZ0NvbG9yIiwiZGFuZ2VyIiwiZGFuZ2VyQ29sb3IiLCJzaW1wbGUiLCJiYWNrZ3JvdW5kIiwidHJhbnNwYXJlbnQiLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwibGciLCJzbSIsInJvdW5kIiwiYmxvY2siLCJsaW5rIiwianVzdEljb24iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInByb2ZpbGVQYWdlU3R5bGUiLCJ0aGVtZSIsImNvbnRhaW5lciIsImgxIiwiaDIiLCJzZWN0aW9uIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJjYWxsVG9BY3Rpb24iLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsInRleHREZWNvcmF0aW9uIiwiY2FsbHRvQWN0aW9uQ29udGVudCIsImNhbGx0b0FjdGlvbkNhcmQiLCJmbGV4V3JhcCIsImNhbGx0b0FjdGlvbkNvbnRlbnRXcmFwIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwibWF4V2lkdGgiLCJhcHBlYXJhbmNlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY2FsbHRvQWN0aW9uSW1hZ2UiLCJib3R0b20iLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwib3ZlcmZsb3ciLCJzZWN0aW9uVGl0bGxlIiwiaGVhZGVyIiwiYmFja2dyb3VuZFpvbmUiLCJyaWdodCIsImJha2dyb3VkQ29udGFpbmVyIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiZG93bmxvYWRlciIsIm1heEhlaWdodCIsImlucHV0IiwicmVwbGFjZSIsImhleFJlZ2V4IiwidGVzdCIsImxlbmd0aCIsIkVycm9yIiwiZmlyc3QiLCJzZWNvbmQiLCJsYXN0IiwidG9VcHBlckNhc2UiLCJwYXJzZUludCIsImRyYXdlcldpZHRoIiwibWFyZ2luTGVmdCIsImRlZmF1bHRGb250IiwiZm9udEZhbWlseSIsInByaW1hcnlCb3hTaGFkb3ciLCJpbmZvQm94U2hhZG93Iiwic3VjY2Vzc0JveFNoYWRvdyIsIndhcm5pbmdCb3hTaGFkb3ciLCJkYW5nZXJCb3hTaGFkb3ciLCJyb3NlQm94U2hhZG93Iiwid2FybmluZ0NhcmRIZWFkZXIiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJjYXJkQWN0aW9ucyIsImJvcmRlclRvcCIsImNhcmRIZWFkZXIiLCJjYXJkIiwiZGVmYXVsdEJveFNoYWRvdyIsInRpdGxlIiwiY2FyZFRpdGxlIiwiY2FyZFN1YnRpdGxlIiwiY2FyZExpbmsiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwiUmVndWxhckJ1dHRvbiIsInByb3BzIiwiY2xhc3NlcyIsImNoaWxkcmVuIiwic2l6ZSIsImNsYXNzTmFtZSIsIm11aUNsYXNzZXMiLCJyZXN0IiwiYnRuQ2xhc3NlcyIsImNsYXNzTmFtZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZiIsImJvb2wiLCJzdHJpbmciLCJvYmplY3QiLCJub2RlIiwiQ2FsZW5kYXJBdmFpbGFiaWxpdHkiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJ1c2VTdGF0ZSIsIm1vbWVudCIsImNhbGFuZGFyIiwic2V0TWVkZWNpbkNhbGVuZGFyIiwidXNlckRhdGEiLCJ1c2VBdXRoIiwic2VsZWN0SG91ciIsImRheSIsImhvdXIiLCJkaXNhYmxlIiwiY29uc29sZSIsImxvZyIsInNldFNlbGVjdGVkSG91ciIsImZvcm1hdCIsImNoYW5nZURhdGUiLCJkaXJlY3Rpb24iLCJhZGQiLCJpc0FmdGVyIiwic3VidHJhY3QiLCJjcmVhdGVIb3Vyc1NvaXIiLCJkaXNwb25pYmlsaXRlRGF5Iiwic2hvd0Rpc3BvbmliaWxpdGUiLCJob3JhaXJlcyIsImZpbmQiLCJoIiwiam91ciIsInRhYmxlIiwiZW5kSG91ciIsImZpbl9zb2lyIiwiZGVidXRfc29pciIsImkiLCJpc0JlZm9yZSIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJlIiwidGltZSIsImRhdGUiLCJIb3VySW5UaGVEYXkiLCJpc0Rpc2FibGVkIiwiY2xvbmVIb3VyIiwiaG91ckRpdiIsInB1c2giLCJkdXJlZSIsImNyZWF0ZUhvdXJzTWF0aW4iLCJsYW5nIiwiZmluX21hdGluIiwiZGVidXRfbWF0aW4iLCJ1c2VFZmZlY3QiLCJyZXMiLCJmZXRjaCIsIkNvbmZpZyIsImlkIiwiaGVhZGVycyIsInRva2VuIiwiZGF0YSIsImpzb24iLCJtZWRlY2luQ2FsZW5kYXIiLCJjcmVhdGVDYWxlbmRhciIsImRheUF2YWlsYWJpbGl0eSIsImxvY2FsZSIsImxpYnJhcmllcyIsIm1hcENvbnRhaW5lclN0eWxlIiwibWFwU3R5bGVzIiwib3B0aW9ucyIsImRpc2FibGVEZWZhdWx0VUkiLCJ6b29tQ29udHJvbCIsInNjcm9sbHdoZWVsIiwiQXBwIiwiaXNMb2FkZWQiLCJsb2FkRXJyb3IiLCJ1c2VMb2FkU2NyaXB0IiwiZ29vZ2xlTWFwc0FwaUtleSIsIm1hcmtlcnMiLCJzZXRNYXJrZXJzIiwiUmVhY3QiLCJjZW50ZXIiLCJzZXRDZW50ZXIiLCJsYXQiLCJsbmciLCJoYW5kbGVDbGlja01hcmtlciIsImxvY2F0aW9ucyIsIm1hcFJlZiIsInVzZVJlZiIsIm9uTWFwTG9hZCIsInVzZUNhbGxiYWNrIiwibWFwIiwiY3VycmVudCIsIm1hcmtlciIsImluZGV4IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ3aW5kb3ciLCJnb29nbGUiLCJtYXBzIiwiQW5pbWF0aW9uIiwiRFJPUCIsIk1lZGVjaW5XaWRnZXQiLCJzZXRTaG93RGlzcG9uaWJpbGl0ZSIsImNvbnRlbnQiLCJtZWRlY2luIiwiaW1hZ2UiLCJub20iLCJwcmVub20iLCJ0ZWxlY29uc3VsdGF0aW9uSXNEaXNwb25pYmxlIiwiYXZhaWxhYmxlVmlkZW8iLCJzcGVjaWFsaXRlcyIsInNwZWNpYWxpdGUiLCJpY29uIiwibmFtZSIsImFkcmVzcyIsIm5vdFNwZWNpZmllZCIsInN0cmVldE5hbWUiLCJidWlsZGluZ05hbWUiLCJmbG9vciIsInNlY3RvciIsImNvZGVQb3N0YWwiLCJjaXR5IiwicGljdHVyZXMiLCJwaWN0dXJlIiwicGF0aCIsInNlZVByb2ZpbGUiLCJzZWVEaXNwbyIsIlRyYW5zaXRpb24iLCJmb3J3YXJkUmVmIiwicmVmIiwiU2hvd0Rpc3BvbmliaWxpdGUiLCJzZWxlY3RlZEhvdXIiLCJzZWxlY3RlZERhdGUiLCJzZXRTZWxlY3RlZERhdGUiLCJzZXRVc2VyVGVtcG9yYXJ5IiwidXNlQXBwQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInNldERldGFpbHMiLCJ2YWxpZGF0ZVRpbWUiLCJtZWRlY2luSWQiLCJwYXRobmFtZSIsImRpc3BvIiwidGltZVNlbGVjdGVkIiwiY2FsZW5kYXIiLCJoYW5kbGVDbG9zZSIsImNhbmNlbCIsImNvbmZpcm0iLCJzdHlsZSIsImVuZEFkb3JubWVudCIsInNlYXJjaENvbnRhaW5lciIsInNlYXJjaENvbnRlbnQiLCJ6SW5kZXgiLCJzZWFyY2hCYXIiLCJzZWFyY2hCYXJRdWVyeSIsInNlYXJjaElucHV0V3JhcHBlciIsImZpbGwiLCJzZWFyY2hiYXJQbGFjZSIsInNlYXJjaEJ1dHRvbiIsInRyYW5zaXRpb25TZWxheSIsInNlYXJjaFN1Ym1pdEJ1dHRvbiIsIlNlYXJjaElucHV0Iiwic2V0TWVkZWNpbiIsInZpbGxlIiwic2V0VmlsbGUiLCJsb2FkaW5nTWVkZWNpbiIsInNldExvYWRpbmdNZWRlY2luIiwiaXNTZWFyY2hlZCIsInNldElzU2VyYWNoZWQiLCJMb2FkaW5nQ2l0aWVzIiwic2V0TG9hZGluZ0NpdGllcyIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic2VhcmNoRmV0Y2hlZCIsInNldFNlYXJjaEZldGNoZWQiLCJjaXRpZXMiLCJzZXRDaXRpZXMiLCJzcGVjaWFsaXR5IiwibWVkZWNpbnMiLCJlcnJvciIsInN1Ym1pdGluZyIsInByZXZlbnREZWZhdWx0IiwiTWVkZWNpbl9yZWNoZXJjaGVyIiwidmlsbGVfcmVjaGVyY2hlciIsInRyaW0iLCJzZWxlY3RQb3NpdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiaGFuZGxlU2VhcmNoU3BlY2lhbGl0ZSIsIm5ld0lucHV0VmFsdWUiLCJoYW5kbGVTZWFyY2hTcGVjaWFsaXRlYSIsIm5vT3B0aW9uIiwibm9PcHRpb24yIiwib3B0aW9uIiwibG9hZGluZyIsImVtYWlsIiwicGhvbmUiLCJwYXJhbXMiLCJyZWNoZXJjaGVsYWJlbCIsImNpdHlMb2FkaW5nIiwiY2l0eWxhYmVsIiwicGxhaW4iLCJwcm9maWxlIiwiY2hhcnQiLCJSZWFjdEZhbmN5Qm94IiwiQ29tcG9uZW50Iiwic2hvdyIsInNldFN0YXRlIiwiZXZlbnQiLCJib3giLCJjb250YWlucyIsInRhcmdldCIsImNsb3NlIiwidGh1bWJuYWlsIiwiZGVmYXVsdFRodW1ibmFpbFdpZHRoIiwiZGVmYXVsdFRodW1ibmFpbEhlaWdodCIsInNldFNob3ciLCJvYmplY3RGaXQiLCJjb21wb25lbnREaWRNb3VudCIsImlubmVySGVpZ2h0IiwicmVuZGVyIiwiY2FwdGlvbiIsImltYWdlU3R5bGUiLCJzdGF0ZSIsInJlbmRlclRodW1ibmFpbCIsImRlZmF1bHRQcm9wcyIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJzaG93Q2xvc2VCdG4iLCJudW1iZXIiLCJmdW5jIiwiaGVhZGluZyIsIm5vbUxhYmVsIiwicGxhY2Vob2xkZXIxIiwicGxhY2Vob2xkZXIyIiwicHJlbm9tTGFiZWwiLCJlbWFpbExhYmVsIiwicGhvbmVMYWJlbCIsImNvbmZpcm1fcGFzc3dvcmQiLCJuZXdfcGFzc3dvcmQiLCJvbGRfcGFzc3dvcmQiLCJob21lIiwiaGVhZGluZzEiLCJoZWFkaW5nMiIsInNlYXJjaCIsImFib3V0IiwiYm9keSIsImJhbm5lcml0ZW0xIiwiYmFubmVyaXRlbTIiLCJiYW5uZXJpdGVtMyIsInNraXAiLCJzdWJIZWFkaW5nIiwic3RlcHMiLCJiYW5uZXJpdGVtMTIiLCJiYW5uZXJpdGVtMjIiLCJiYW5uZXJpdGVtMzIiLCJkb3dsb2FkIiwiYXBwIiwicGxheSIsInNlcnZpY2VzIiwiaXRlbTFoZWFkaW5nIiwiaXRlbTFib2R5IiwiaXRlbTJoZWFkaW5nIiwiaXRlbTJib2R5IiwiaXRlbTNoZWFkaW5nIiwiaXRlbTNib2R5IiwiaXRlbTRoZWFkaW5nIiwiaXRlbTRib2R5IiwibmF2YmFyIiwiY29udGFjdCIsImNvbmVjdCIsInJkdiIsInByb25hdmJhciIsImRvY3VtZW50IiwiZHJvcERvd24xIiwiZHJvcERvd24yIiwiZm9vdGVyIiwicGFydG5lciIsInNpZ25pbiIsImZhcSIsInBvbGl0aXF1ZSIsImNvbmRpdGlvbiIsImNvbmRpdGlvbjIiLCJyZWdsZV9kZV9yIiwibWVudGlvbnNfbGVnIiwiQ29va2llcyIsInByb3RlY3RfZG9ubmVzX3BlcnNvIiwiZ2VzdGlvbl9kZV9jb29raWVzIiwibmV3IiwiYWxyZWFkeUhhdmUiLCJuZXdJbiIsInNpZ251cCIsImF1dGgiLCJwYXNzTGFiZWwiLCJvbGRwYXNzTGFiZWwiLCJjb25maXJtcGFzc0xhYmVsIiwibGFiZWxOb20iLCJsYWJlbFByZW5vbSIsInBob25lRXJyb3IiLCJsYWJlbEVtYWlsQyIsImxhYmVsRW1haWxDUCIsImVycm9yU2lnbnVwIiwic3VjY2Vzc1NpZ251cCIsInJlcG9ydCIsImxhYmVsRW5kIiwiZG9jdW1lbnRzIiwiYXVjdW4iLCJkb250aGF2ZSIsInNoYXJlZEJ5Iiwic2hhcmVkV2l0aCIsImFwcG9pbnRtZW50cyIsIm5vdEF1dGgiLCJhY2Nlc3MiLCJub0FwcCIsIm15YXBwIiwibXlIaXN0b3J5IiwiaGlzdG9yeSIsIm5leHRBcHAiLCJ0YWtlYXBwIiwiY2FyZEFwcHMiLCJjYXJkQXBwIiwiYWNjZXNzSW5mb3MiLCJzZWNyZXRhcmlhdCIsImNsaWNrIiwicmVqb2luZHJlIiwiZGVwbGFjZXIiLCJhbm51bGVyIiwicmV0b3VyIiwiY29uZmlybUNhbmNlbCIsIndhbnRZb3UiLCJ3aXRoIiwiZG9jQXZhaSIsInNlbGVjVHRpbWUiLCJzZWVJbmZvc1NoYXJlZCIsInJlc3VsdFJlc2VhcmNoIiwibm9SZXNlYXVsdCIsInRyeVJlc2VhdWx0Iiwid2lkZ2V0IiwidmFsaWRhdGlvbiIsImV4cGlyZWQiLCJnZW5lcmF0ZU5ldyIsImFwcG9pbnRtZW50IiwidGFrZUFwcCIsInN0ZXAxIiwibGFiZWwxIiwiaW5wMSIsImxhYmVsMiIsImlucDIiLCJsYWJlbDMiLCJpbnAzIiwiaW5wNCIsImxhYmVsNCIsImxhYmVsNSIsInRlbGVjb25zdWx0IiwibGFiZWw2IiwibW90aWYiLCJub01vdGlmcyIsImxhYmVsNyIsInN0ZXAyIiwib2xkIiwic3RlcDMiLCJnZW5lcmF0ZSIsInJldmlyaWZ5Iiwic3RlcDQiLCJyZW1pbmQiLCJzdGVwNSIsImdlcmVyIiwicHJvZmlsUGFnZSIsImFjY2Vzc0luZm8iLCJnZW5lcmFsIiwicGFyY291ciIsImRlc2NyaXB0aW9uUEFyYyIsImZvcm1hdGlvbiIsImF3YXJkIiwiZXhwZXJpZW5jZSIsInNlZU1hcCIsInRhcmlmIiwiZGV0YWlscyIsImhvbm9yZSIsInNlcnZpY2UiLCJwcml4IiwiaG9yYWlyZSIsImRldGFpbHNIZXVyZXMiLCJhdmFpbGFibGV2aWTDqW8iLCJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFwcFdyYXBwZXIiLCJ0ZW1wb3JhcnlfYXBwb2ludG1lbnQiLCJzZXRUZW1wb3JhcnlfYXBwb2ludG1lbnQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImV4aXN0aW5ndGVtcG9yYXJ5X2FwcG9pbnRtZW50IiwiZ2V0SXRlbSIsInBhcnNlIiwidXNlQ29udGV4dCIsIkF1dGhXcmFwcGVyIiwiZXhpc3Rpbmd1c2VyRGF0YSIsImdldCIsImNvbnRlbnRBUiIsImNvbnRlbnRFTiIsImNvbnRlbnRGUiIsInNldFVzZXJEYXRhIiwiYWRkZWRCeUFkbWluIiwic2V0QWRkZWRCeUFkbWluIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwicGFzc3dvcmQiLCJzZXRVc2VyIiwic2V0IiwiZXhwaXJlcyIsImlzQXV0aCIsInVzZXIiLCJwYXNzd29yZENoYW5nZWQiLCJ0aGVuIiwiciIsImNhdGNoIiwiaGFuZGxlQ29uZmlybWF0aW9uIiwidGVzdFBhc3MiLCJ0cmltU3RhcnQiLCJtZXRob2QiLCJ1cGRhdGVQYXRpZW50IiwiZXJyIiwicmVzcG9uc2UiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsInNob3dQYXNzd29yZCIsInByZWZldGNoZWQiLCJjdXJMb2NhbGUiLCJocmVmIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwic3JjIiwib25CdWlsZE1hbmlmZXN0IiwiaWRsZVRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwidGV4dCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsIm5vdEZvdW5kIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImRlZmF1bHRMb2NhbGUiLCJkb21haW5Mb2NhbGVzIiwiaXNSZWFkeSIsIl9pZHgiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsImZvcmNlZFNjcm9sbCIsIngiLCJ5IiwiY2hhbmdlU3RhdGUiLCJfX04iLCJpZHgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiaXNTc2ciLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtYWdhc2luIiwic2NyZWVuV2lkdGgiLCJzZXRTY3JlZW5XaWR0aCIsInVwZGF0ZVNpemUiLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNlYXJjaGVkIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7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Ozs7Ozs7OztBQ2hISCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9yZWNoZXJjaGUvW3NwZWNpYWxpdGVdL1t2aWxsZV0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3JlY2hlcmNoZS9bc3BlY2lhbGl0ZV0vW3ZpbGxlXS5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJjb25zdCBMb2NhbENvbmZpZyA9IHtcclxuICAgIEJBQ0tFTkRfVVJMIDogXCJodHRwOi8vbG9jYWxob3N0OjQ0MDBcIixcclxuICAgIExPQ0FMX1VSTCA6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL1wiLFxyXG4gICAgYXBpS2V5OiBcIkFJemFTeUQ2dGs4ZEZGNEdEbkIwaUFCVjk1WnNfQ0NPWjkySzlzd1wiXHJcbn1cclxuY29uc3QgcHJvZENvbmZpZyA9IHtcclxuICAgIEJBQ0tFTkRfVVJMIDogXCJodHRwczovL2FwaS5kb2N0b2xpdmUubWFcIixcclxuICAgIGFwaUtleTogXCJBSXphU3lENnRrOGRGRjRHRG5CMGlBQlY5NVpzX0NDT1o5Mks5c3dcIlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHByb2RDb25maWciLCJpbXBvcnQge1xyXG4gIGdyYXlDb2xvcixcclxuICBwcmltYXJ5Q29sb3IsXHJcbiAgaW5mb0NvbG9yLFxyXG4gIHN1Y2Nlc3NDb2xvcixcclxuICB3YXJuaW5nQ29sb3IsXHJcbiAgZGFuZ2VyQ29sb3IsXHJcbiAgcm9zZUNvbG9yLFxyXG4gIHdoaXRlQ29sb3IsXHJcbiAgYmxhY2tDb2xvcixcclxuICBoZXhUb1JnYlxyXG59IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgbWluV2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3JbMF0sXHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgcGFkZGluZzogXCIxMnB4IDMwcHhcIixcclxuICAgIG1hcmdpbjogXCIuMzEyNXJlbSAxcHhcIixcclxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCIwXCIsXHJcbiAgICB3aWxsQ2hhbmdlOiBcImJveC1zaGFkb3csIHRyYW5zZm9ybVwiLFxyXG4gICAgdHJhbnNpdGlvbjpcclxuICAgICAgXCJib3gtc2hhZG93IDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSksIGJhY2tncm91bmQtY29sb3IgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTcxNDNcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgdG91Y2hBY3Rpb246IFwibWFuaXB1bGF0aW9uXCIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgICAgb3V0bGluZTogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCJcclxuICAgIH0sXHJcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwgJi5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCItMWVtXCIsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCItMWVtXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gICAgICBtYXJnaW5SaWdodDogXCI0cHhcIixcclxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxyXG4gICAgfSxcclxuICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICB3aWR0aDogXCIxOHB4XCIsXHJcbiAgICAgIGhlaWdodDogXCIxOHB4XCIsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxyXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiXHJcbiAgICB9LFxyXG4gICAgXCImJGp1c3RJY29uXCI6IHtcclxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICAgIG1hcmdpblRvcDogXCIwcHhcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgdG9wOiBcIjBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgbGluZUhlaWdodDogXCI0MXB4XCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHdoaXRlOiB7XHJcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgICBjb2xvcjogZ3JheUNvbG9yWzBdXHJcbiAgICB9XHJcbiAgfSxcclxuICByb3NlOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCJcclxuICAgIH1cclxuICB9LFxyXG4gIHByaW1hcnk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJpbWFyeUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJpbWFyeUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJpbWFyeUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJpbWFyeUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW5mbzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBzdWNjZXNzOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCJcclxuICAgIH1cclxuICB9LFxyXG4gIHdhcm5pbmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGFuZ2VyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2ltcGxlOiB7XHJcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxyXG4gICAgfSxcclxuICAgIFwiJiRyb3NlXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiByb3NlQ29sb3JbMF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiJiRwcmltYXJ5XCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBwcmltYXJ5Q29sb3JbMF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiJiRpbmZvXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBpbmZvQ29sb3JbMF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiJiRzdWNjZXNzXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBzdWNjZXNzQ29sb3JbMF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiJiR3YXJuaW5nXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiB3YXJuaW5nQ29sb3JbMF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiJiRkYW5nZXJcIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IGRhbmdlckNvbG9yWzBdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHRyYW5zcGFyZW50OiB7XHJcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IFwiIzFhYjliOVwiLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGlzYWJsZWQ6IHtcclxuICAgIG9wYWNpdHk6IFwiMC42NVwiLFxyXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCJcclxuICB9LFxyXG4gIGxnOiB7XHJcbiAgICBwYWRkaW5nOiBcIjEuMTI1cmVtIDIuMjVyZW1cIixcclxuICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuMzMzMzMzXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCJcclxuICB9LFxyXG4gIHNtOiB7XHJcbiAgICBwYWRkaW5nOiBcIjAuNDA2MjVyZW0gMS4yNXJlbVwiLFxyXG4gICAgZm9udFNpemU6IFwiMC42ODc1cmVtXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuMnJlbVwiXHJcbiAgfSxcclxuICByb3VuZDoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIlxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBcIiYsJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGNvbG9yOiBncmF5Q29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCJcclxuICAgIH1cclxuICB9LFxyXG4gIGp1c3RJY29uOiB7XHJcbiAgICBwYWRkaW5nTGVmdDogXCIxMnB4XCIsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTJweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjQxcHhcIixcclxuICAgIG1pbldpZHRoOiBcIjQxcHhcIixcclxuICAgIHdpZHRoOiBcIjQxcHhcIixcclxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgc3ZnLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCJcclxuICAgIH0sXHJcbiAgICBcIiYkbGdcIjoge1xyXG4gICAgICBoZWlnaHQ6IFwiNTdweFwiLFxyXG4gICAgICBtaW5XaWR0aDogXCI1N3B4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjU3cHhcIixcclxuICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXHJcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgICBmb250U2l6ZTogXCIzMnB4XCIsXHJcbiAgICAgICAgbGluZUhlaWdodDogXCI1NnB4XCJcclxuICAgICAgfSxcclxuICAgICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMzJweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIzMnB4XCJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiJiRzbVwiOiB7XHJcbiAgICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgIG1pbldpZHRoOiBcIjMwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiMjlweFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjE3cHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTdweFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b25TdHlsZTtcclxuIiwiXHJcbmltcG9ydCB7IFxyXG4gICAgY29udGFpbmVyLFxyXG5cclxufSBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuICAgIFxyXG4gIGNvbnN0IHByb2ZpbGVQYWdlU3R5bGUgPSB0aGVtZSA9PiAoe1xyXG4gICAgY29udGFpbmVyLFxyXG4gICAgaDE6IHtcclxuICAgICAgICBtYXJnaW46XCIgMCAwIDE2cHhcIixcclxuICAgICAgICBmb250U2l6ZTogMzIsXHJcbiAgICAgICAgbGluZUhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBcIi13ZWJraXQtdGV4dC1maWxsLWNvbG9yXCI6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICAgIGgyOiB7XHJcbiAgICAgICAgbWFyZ2luOlwiIDAgMCA4cHhcIixcclxuICAgICAgICBmb250U2l6ZTogMjAsXHJcbiAgICAgICAgY29sb3I6IFwiIzc1NzU3NVwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNDBweFwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgXCItd2Via2l0LXRleHQtZmlsbC1jb2xvclwiOiBcIiNmZmZcIixcclxuICAgIH0sXHJcbiAgICBzZWN0aW9uOiB7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogNjQsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMjQsXHJcbiAgICAgICAgXCImIC5zZWN0aW9uXCI6IHtcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyNCxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiA2NFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY2FsbFRvQWN0aW9uIDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBcIi13ZWJraXQtYm94LW9yaWVudFwiOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgXCItd2Via2l0LWJveC1kaXJlY3Rpb25cIjogXCJub3JtYWxcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IDY0LFxyXG4gICAgICAgIGZsZXg6IFwiMCAwIGF1dG9cIixcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgY29sb3I6IFwiIzQzNWY3MVwiLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6IDE2LFxyXG4gICAgfSxcclxuICAgIGNhbGx0b0FjdGlvbkNvbnRlbnQ6IHtcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiNTAlXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMmZhZmRcIixcclxuICAgICAgICBmbGV4OiBcIjEgMCBhdXRvXCIsXHJcblxyXG4gICAgfSxcclxuICAgIGNhbGx0b0FjdGlvbkNhcmQ6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICBcclxuICAgIH0sXHJcbiAgICBjYWxsdG9BY3Rpb25Db250ZW50V3JhcDoge1xyXG4gICAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLCAgXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJyZXBlYXQgbm8tcmVwZWF0XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImJvdHRvbVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IDE2LFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIixcclxuICAgICAgICBcIiYgLmZpeGVkLXdpZHRoXCIgOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA1NDQsXHJcbiAgICAgICAgICAgIFwiJiBoMlwiIDp7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDQ4LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIyNHB4XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjI0MzU4XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiJiAudGV4dC1ib2R5XCIgOntcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTYsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjI0cHhcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyMjQzNThcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCImIC5idXR0b25cIiA6e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIFwiLXdlYmtpdC1hcHBlYXJhbmNlXCI6IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgICAgICBcIi1tb3otYXBwZWFyYW5jZVwiOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogXCJub25lICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgXCItd2Via2l0LXRyYW5zaXRpb25cIjogXCJvcGFjaXR5IDUwMG1zLCBjb2xvciAxMDBtcywgYmFja2dyb3VuZC1jb2xvciAxMDBtc1wiLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDUwMG1zLCBjb2xvciAxMDBtcywgYmFja2dyb3VuZC1jb2xvciAxMDBtc1wiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMxYWI5YjlcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNTIsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMzIsXHJcbiAgICAgICAgICAgICAgICBcIiYgc3BhblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBjYWxsdG9BY3Rpb25JbWFnZToge1xyXG4gICAgICAgIHdpZHRoOiA0MzEsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiA0LFxyXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgIFwiJiBpbWdcIiA6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJvdHRvbVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25UaXRsbGU6IHtcclxuICAgICAgICBmb250U2l6ZTogMjQsXHJcbiAgICAgICAgbGluZUhlaWdodDogXCIzMnB4XCIsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICBjb2xvcjogXCIjMjI0MzU4XCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjAgMTZweCAzMnB4IDE2cHhcIlxyXG5cclxuICAgIH0sXHJcbiAgICBoZWFkZXIgOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzFhYjliOSAxOSUsICMxYWI5YjkgMTAwJSlcIixcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxYWI5YjkgMTklLCAjMWFiOWI5IDEwMCUpXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZFpvbmUgOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICB9LFxyXG4gICAgYmFrZ3JvdWRDb250YWluZXIgOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgbWluSGVpZ2h0OiBcIjQ1MHB4XCIsXHJcbiAgICAgICAgcGFkZGluZzogXCI4MHB4IDBcIixcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCIyNSUgYXV0b1wiLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiNDAlIGF1dG9cIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCI0MHB4IDAgMTYwcHggMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJSBhdXRvXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiNDBweCAwIDE2MHB4IDBcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjk5MXB4XCIsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRvd25sb2FkZXIgOiB7XHJcbiAgICAgICAgXCImIC5kb3dubG9hZGVyLXdyYXBwZXJcIiA6IHtcclxuICAgICAgICAgICAgXCImIGgyXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjI0cHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyMjQzNThcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCImIGgzXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjI0cHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM3NzkxYTJcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDhcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIFwiJiAuYXBwc3RvcmVcIiA6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiJiAuYXBwc3RvcmUtY29udGFpbmVyXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXCImIC5hcHBzdG9yZS1jb250ZW50XCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInN0YXJ0XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIiYgLmRvd25sb2FkZXItaW1hZ2VcIiA6IHtcclxuICAgICAgICAgICAgICAgIFwiJiBpbWdcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIH0pXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgcHJvZmlsZVBhZ2VTdHlsZTtcclxuICAiLCJcclxuY29uc3QgaGV4VG9SZ2IgPSBpbnB1dCA9PiB7XHJcbiAgaW5wdXQgPSBpbnB1dCArIFwiXCI7XHJcbiAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuICBsZXQgaGV4UmVnZXggPSAvWzAtOUEtRmEtZl0vZztcclxuICBpZiAoIWhleFJlZ2V4LnRlc3QoaW5wdXQpIHx8IChpbnB1dC5sZW5ndGggIT09IDMgJiYgaW5wdXQubGVuZ3RoICE9PSA2KSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiaW5wdXQgaXMgbm90IGEgdmFsaWQgaGV4IGNvbG9yLlwiKTtcclxuICB9XHJcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMykge1xyXG4gICAgbGV0IGZpcnN0ID0gaW5wdXRbMF07XHJcbiAgICBsZXQgc2Vjb25kID0gaW5wdXRbMV07XHJcbiAgICBsZXQgbGFzdCA9IGlucHV0WzJdO1xyXG4gICAgaW5wdXQgPSBmaXJzdCArIGZpcnN0ICsgc2Vjb25kICsgc2Vjb25kICsgbGFzdCArIGxhc3Q7XHJcbiAgfVxyXG4gIGlucHV0ID0gaW5wdXQudG9VcHBlckNhc2UoKTtcclxuICBsZXQgZmlyc3QgPSBpbnB1dFswXSArIGlucHV0WzFdO1xyXG4gIGxldCBzZWNvbmQgPSBpbnB1dFsyXSArIGlucHV0WzNdO1xyXG4gIGxldCBsYXN0ID0gaW5wdXRbNF0gKyBpbnB1dFs1XTtcclxuICByZXR1cm4gKFxyXG4gICAgcGFyc2VJbnQoZmlyc3QsIDE2KSArXHJcbiAgICBcIiwgXCIgK1xyXG4gICAgcGFyc2VJbnQoc2Vjb25kLCAxNikgK1xyXG4gICAgXCIsIFwiICtcclxuICAgIHBhcnNlSW50KGxhc3QsIDE2KVxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI2MDtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7XHJcbiAgdHJhbnNpdGlvbjogXCJhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKVwiXHJcbn07XHJcblxyXG5jb25zdCBjb250YWluZXIgPSB7XHJcbiAgcGFkZGluZ1JpZ2h0OiBcIjE1cHhcIixcclxuICBwYWRkaW5nTGVmdDogXCIxNXB4XCIsXHJcbiAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxyXG4gIG1hcmdpbkxlZnQ6IFwiYXV0b1wiXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0Rm9udCA9IHtcclxuICBmb250RmFtaWx5OiAnXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmJyxcclxuICBmb250V2VpZ2h0OiBcIjMwMFwiLFxyXG4gIGxpbmVIZWlnaHQ6IFwiMS41ZW1cIlxyXG59O1xyXG5cclxuY29uc3QgcHJpbWFyeUNvbG9yID0gW1wiIzFhYjliOVwiLCBcIiMxYWI5YjlcIiwgXCIjMWFiOWI5XCIsIFwiIzFhYjliOVwiXTtcclxuY29uc3Qgd2FybmluZ0NvbG9yID0gW1wiI2ZmOTgwMFwiLCBcIiNmZmE3MjZcIiwgXCIjZmI4YzAwXCIsIFwiI2ZmYTIxYVwiXTtcclxuY29uc3QgZGFuZ2VyQ29sb3IgPSBbXCIjZjEwMDBmXCIsIFwiI2ZmMWQxZlwiLCBcIiNmZjNhMmVcIiwgXCIjZmY1MjNkXCJdO1xyXG5jb25zdCBzdWNjZXNzQ29sb3IgPSBbXCIjNGNhZjUwXCIsIFwiIzYyYzQ2M1wiLCBcIiM4ZGNhODlcIiwgXCIjYzdlNWMzXCJdO1xyXG5jb25zdCBpbmZvQ29sb3IgPSBbXCIjMDBhY2MxXCIsIFwiIzI2YzZkYVwiLCBcIiMwMGFjYzFcIiwgXCIjMDBkM2VlXCJdO1xyXG5jb25zdCByb3NlQ29sb3IgPSBbXCIjZTkxZTYzXCIsIFwiI2VjNDA3YVwiLCBcIiNkODFiNjBcIiwgXCIjZWIzNTczXCJdO1xyXG5jb25zdCBncmF5Q29sb3IgPSBbXHJcbiAgXCIjOTk5XCIsXHJcbiAgXCIjNzc3XCIsXHJcbiAgXCIjM0M0ODU4XCIsXHJcbiAgXCIjQUFBQUFBXCIsXHJcbiAgXCIjRDJEMkQyXCIsXHJcbiAgXCIjREREXCIsXHJcbiAgXCIjYjRiNGI0XCIsXHJcbiAgXCIjNTU1NTU1XCIsXHJcbiAgXCIjMzMzXCIsXHJcbiAgXCIjYTlhZmJiXCIsXHJcbiAgXCIjZWVlXCIsXHJcbiAgXCIjZTdlN2U3XCJcclxuXTtcclxuY29uc3QgYmxhY2tDb2xvciA9IFwiIzAwMFwiO1xyXG5jb25zdCB3aGl0ZUNvbG9yID0gXCIjRkZGXCI7XHJcblxyXG5jb25zdCBib3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDEwcHggMzBweCAtMTJweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjQyKSwgMCA0cHggMjVweCAwcHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjIpXCJcclxufTtcclxuXHJcbmNvbnN0IHByaW1hcnlCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiXHJcbn07XHJcbmNvbnN0IGluZm9Cb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiXHJcbn07XHJcbmNvbnN0IHN1Y2Nlc3NCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiXHJcbn07XHJcbmNvbnN0IHdhcm5pbmdCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiXHJcbn07XHJcbmNvbnN0IGRhbmdlckJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIlxyXG59O1xyXG5jb25zdCByb3NlQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIlxyXG59O1xyXG5cclxuY29uc3Qgd2FybmluZ0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHdhcm5pbmdDb2xvclsxXSArIFwiLCBcIiArIHdhcm5pbmdDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLndhcm5pbmdCb3hTaGFkb3dcclxufTtcclxuY29uc3Qgc3VjY2Vzc0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHN1Y2Nlc3NDb2xvclsxXSArIFwiLCBcIiArIHN1Y2Nlc3NDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLnN1Y2Nlc3NCb3hTaGFkb3dcclxufTtcclxuY29uc3QgZGFuZ2VyQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgZGFuZ2VyQ29sb3JbMV0gKyBcIiwgXCIgKyBkYW5nZXJDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLmRhbmdlckJveFNoYWRvd1xyXG59O1xyXG5jb25zdCBpbmZvQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgaW5mb0NvbG9yWzFdICsgXCIsIFwiICsgaW5mb0NvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uaW5mb0JveFNoYWRvd1xyXG59O1xyXG5jb25zdCBwcmltYXJ5Q2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgcHJpbWFyeUNvbG9yWzFdICsgXCIsIFwiICsgcHJpbWFyeUNvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4ucHJpbWFyeUJveFNoYWRvd1xyXG59O1xyXG5jb25zdCByb3NlQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgcm9zZUNvbG9yWzFdICsgXCIsIFwiICsgcm9zZUNvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4ucm9zZUJveFNoYWRvd1xyXG59O1xyXG5cclxuY29uc3QgY2FyZEFjdGlvbnMgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMjBweCAxMHB4XCIsXHJcbiAgcGFkZGluZ1RvcDogXCIxMHB4XCIsXHJcbiAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCBcIiArIGdyYXlDb2xvclsxMF0sXHJcbiAgaGVpZ2h0OiBcImF1dG9cIixcclxuICAuLi5kZWZhdWx0Rm9udFxyXG59O1xyXG5cclxuY29uc3QgY2FyZEhlYWRlciA9IHtcclxuICBtYXJnaW46IFwiLTIwcHggMTVweCAwXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gIHBhZGRpbmc6IFwiMTVweFwiXHJcbn07XHJcblxyXG5jb25zdCBjYXJkID0ge1xyXG4gIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgbWFyZ2luOiBcIjI1cHggMFwiLFxyXG4gIGJveFNoYWRvdzogXCIwIDFweCA0cHggMCByZ2JhKFwiICsgaGV4VG9SZ2IoYmxhY2tDb2xvcikgKyBcIiwgMC4xNClcIixcclxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgY29sb3I6IFwicmdiYShcIiArIGhleFRvUmdiKGJsYWNrQ29sb3IpICsgXCIsIDAuODcpXCIsXHJcbiAgYmFja2dyb3VuZDogd2hpdGVDb2xvclxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdEJveFNoYWRvdyA9IHtcclxuICBib3JkZXI6IFwiMFwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgMTBweCAyMHB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuNDIpLCAwIDNweCAyMHB4IDBweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMilcIixcclxuICBwYWRkaW5nOiBcIjEwcHggMFwiLFxyXG4gIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGVhc2UgMHNcIlxyXG59O1xyXG5cclxuY29uc3QgdGl0bGUgPSB7XHJcbiAgY29sb3I6IGdyYXlDb2xvclsyXSxcclxuICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgZm9udFdlaWdodDogXCIzMDBcIixcclxuICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxyXG4gIG1hcmdpbkJvdHRvbTogXCIyNXB4XCIsXHJcbiAgbWluSGVpZ2h0OiBcIjMycHhcIixcclxuICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZlwiLFxyXG4gIFwiJiBzbWFsbFwiOiB7XHJcbiAgICBjb2xvcjogZ3JheUNvbG9yWzFdLFxyXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMVwiXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2FyZFRpdGxlID0ge1xyXG4gIC4uLnRpdGxlLFxyXG4gIG1hcmdpblRvcDogXCIwXCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjNweFwiLFxyXG4gIG1pbkhlaWdodDogXCJhdXRvXCIsXHJcbiAgXCImIGFcIjoge1xyXG4gICAgLi4udGl0bGUsXHJcbiAgICBtYXJnaW5Ub3A6IFwiLjYyNXJlbVwiLFxyXG4gICAgbWFyZ2luQm90dG9tOiBcIjAuNzVyZW1cIixcclxuICAgIG1pbkhlaWdodDogXCJhdXRvXCJcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjYXJkU3VidGl0bGUgPSB7XHJcbiAgbWFyZ2luVG9wOiBcIi0uMzc1cmVtXCJcclxufTtcclxuXHJcbmNvbnN0IGNhcmRMaW5rID0ge1xyXG4gIFwiJiArICRjYXJkTGlua1wiOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcIjEuMjVyZW1cIlxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgaGV4VG9SZ2IsXHJcbiAgLy92YXJpYWJsZXNcclxuICBkcmF3ZXJXaWR0aCxcclxuICB0cmFuc2l0aW9uLFxyXG4gIGNvbnRhaW5lcixcclxuICBib3hTaGFkb3csXHJcbiAgY2FyZCxcclxuICBkZWZhdWx0Rm9udCxcclxuICBwcmltYXJ5Q29sb3IsXHJcbiAgd2FybmluZ0NvbG9yLFxyXG4gIGRhbmdlckNvbG9yLFxyXG4gIHN1Y2Nlc3NDb2xvcixcclxuICBpbmZvQ29sb3IsXHJcbiAgcm9zZUNvbG9yLFxyXG4gIGdyYXlDb2xvcixcclxuICBibGFja0NvbG9yLFxyXG4gIHdoaXRlQ29sb3IsXHJcbiAgcHJpbWFyeUJveFNoYWRvdyxcclxuICBpbmZvQm94U2hhZG93LFxyXG4gIHN1Y2Nlc3NCb3hTaGFkb3csXHJcbiAgd2FybmluZ0JveFNoYWRvdyxcclxuICBkYW5nZXJCb3hTaGFkb3csXHJcbiAgcm9zZUJveFNoYWRvdyxcclxuICB3YXJuaW5nQ2FyZEhlYWRlcixcclxuICBzdWNjZXNzQ2FyZEhlYWRlcixcclxuICBkYW5nZXJDYXJkSGVhZGVyLFxyXG4gIGluZm9DYXJkSGVhZGVyLFxyXG4gIHByaW1hcnlDYXJkSGVhZGVyLFxyXG4gIHJvc2VDYXJkSGVhZGVyLFxyXG4gIGNhcmRBY3Rpb25zLFxyXG4gIGNhcmRIZWFkZXIsXHJcbiAgZGVmYXVsdEJveFNoYWRvdyxcclxuICB0aXRsZSxcclxuICBjYXJkVGl0bGUsXHJcbiAgY2FyZFN1YnRpdGxlLFxyXG4gIGNhcmRMaW5rXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG4vLyBtYXRlcmlhbC11aSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5cclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2ZpbGVVcGxvYWRlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL2Fzc2V0cy9qc3MvYnV0dG9uU3R5bGUuanNcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ3VsYXJCdXR0b24ocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgY29sb3IsXHJcbiAgICByb3VuZCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBzaW1wbGUsXHJcbiAgICBzaXplLFxyXG4gICAgYmxvY2ssXHJcbiAgICBsaW5rLFxyXG4gICAganVzdEljb24sXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBtdWlDbGFzc2VzLFxyXG4gICAgLi4ucmVzdFxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCBidG5DbGFzc2VzID0gY2xhc3NOYW1lcyh7XHJcbiAgICBbY2xhc3Nlcy5idXR0b25dOiB0cnVlLFxyXG4gICAgW2NsYXNzZXNbc2l6ZV1dOiBzaXplLFxyXG4gICAgW2NsYXNzZXNbY29sb3JdXTogY29sb3IsXHJcbiAgICBbY2xhc3Nlcy5yb3VuZF06IHJvdW5kLFxyXG4gICAgW2NsYXNzZXMuZGlzYWJsZWRdOiBkaXNhYmxlZCxcclxuICAgIFtjbGFzc2VzLnNpbXBsZV06IHNpbXBsZSxcclxuICAgIFtjbGFzc2VzLmJsb2NrXTogYmxvY2ssXHJcbiAgICBbY2xhc3Nlcy5saW5rXTogbGluayxcclxuICAgIFtjbGFzc2VzLmp1c3RJY29uXToganVzdEljb24sXHJcbiAgICBbY2xhc3NOYW1lXTogY2xhc3NOYW1lXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b24gey4uLnJlc3R9IGNsYXNzZXM9e211aUNsYXNzZXN9IGNsYXNzTmFtZT17YnRuQ2xhc3Nlc30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn1cclxuXHJcblJlZ3VsYXJCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gICAgXCJwcmltYXJ5XCIsXHJcbiAgICBcImluZm9cIixcclxuICAgIFwic3VjY2Vzc1wiLFxyXG4gICAgXCJ3YXJuaW5nXCIsXHJcbiAgICBcImRhbmdlclwiLFxyXG4gICAgXCJyb3NlXCIsXHJcbiAgICBcIndoaXRlXCIsXHJcbiAgICBcInRyYW5zcGFyZW50XCJcclxuICBdKSxcclxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wic21cIiwgXCJsZ1wiXSksXHJcbiAgc2ltcGxlOiBQcm9wVHlwZXMuYm9vbCxcclxuICByb3VuZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGJsb2NrOiBQcm9wVHlwZXMuYm9vbCxcclxuICBsaW5rOiBQcm9wVHlwZXMuYm9vbCxcclxuICBqdXN0SWNvbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIC8vIHVzZSB0aGlzIHRvIHBhc3MgdGhlIGNsYXNzZXMgcHJvcHMgZnJvbSBNYXRlcmlhbC1VSVxyXG4gIG11aUNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXHJcbn07XHJcbiIsIlxyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCB7IE1kQ2hldnJvbkxlZnQsIE1kQ2hldnJvblJpZ2h0fSBmcm9tICdyZWFjdC1pY29ucy9tZCdcclxuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi8uLi8uLi9FbmRQb2ludCdcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4vLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRhckF2YWlsYWJpbGl0eShwcm9wcykge1xyXG4gICAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKG1vbWVudCgpKVxyXG4gICAgY29uc3QgW2NhbGFuZGFyLCBzZXRNZWRlY2luQ2FsZW5kYXJdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3Qge3VzZXJEYXRhfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RIb3VyID0gKGRheSwgaG91ciwgZGlzYWJsZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGhvdXIpXHJcbiAgICAgICAgaWYoZGlzYWJsZSl7XHJcbiAgICAgICAgLy8gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB0cnVlLCBleHBpcmVkOnRydWUsIG1lc3NhZ2U6ICdjZSBtb21lbnQgZXN0IGluZGlzcG9uaWJsZScgfSlcclxuICAgICAgICAvLyAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXhwaXJlZDogZmFsc2V9KVxyXG4gICAgICAgIC8vICAgIH0sIDUwMDApO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBwcm9wcy5zZXRTZWxlY3RlZEhvdXIoZGF5LmZvcm1hdCgnWVlZWS9NTS9ERCcpLCBob3VyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgY2hhbmdlRGF0ZSA9IChkaXJlY3Rpb24pID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIHNldFN0YXJ0RGF0ZSggbW9tZW50KHN0YXJ0RGF0ZSkuYWRkKDcsICdkYXlzJykpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmIChtb21lbnQoc3RhcnREYXRlKS5pc0FmdGVyKG1vbWVudCgpKSl7XHJcbiAgICAgICAgICAgICAgICBzZXRTdGFydERhdGUoIG1vbWVudChzdGFydERhdGUpLnN1YnRyYWN0KDcsICdkYXlzJykgKVxyXG4gICAgICAgICAgICAvLyAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlOiBtb21lbnQodGhpcy5zdGF0ZS5zdGFydERhdGUpLnN1YnRyYWN0KDcsICdkYXlzJykgfSlcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUhvdXJzU29pciA9IChkYXkpID0+IHtcclxuICAgICAgICBjb25zdCBkaXNwb25pYmlsaXRlRGF5ID0gcHJvcHMuc2hvd0Rpc3BvbmliaWxpdGUuaG9yYWlyZXMuZmluZChoID0+IGguam91ciA9PT0gZGF5LmZvcm1hdCgnZGRkZCcpKTtcclxuXHJcbiAgICAgICAgaWYoIWRpc3BvbmliaWxpdGVEYXkpIHJldHVybiBbXVxyXG5cclxuICAgICAgICBsZXQgdGFibGUgPSBbXTtcclxuICAgICAgICBsZXQgZW5kSG91ciA9IG1vbWVudChkaXNwb25pYmlsaXRlRGF5LmZpbl9zb2lyLCAnSEg6bW06c3MnKTtcclxuICAgICAgICBsZXQgaG91ciA9IG1vbWVudChkaXNwb25pYmlsaXRlRGF5LmRlYnV0X3NvaXIsICdISDptbTpzcycpO1xyXG5cclxuICAgICAgICBsZXQgaT0wO1xyXG5cclxuICAgICAgICAgd2hpbGUgKGhvdXIuaXNCZWZvcmUoZW5kSG91cikgJiYgaTwgMTAwICl7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnQ9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIGlmKGNhbGFuZGFyKXtcclxuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQgPSBjYWxhbmRhci5maW5kKCBlID0+IG1vbWVudC51dGMoZS5kYXRlKS5mb3JtYXQoJ0hIOm1tJykgPT09IGhvdXIpXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gY2FsYW5kYXIuZmluZCggZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIG1vbWVudChlLmRhdGUpLmlzU2FtZShkYXkuZm9ybWF0KCdZWVlZLU1NLUREVCcpICsgaG91ci5mb3JtYXQoJ0hIOm1tJykrXCI6MDAuMDAwWlwiLCBcIm1pbnV0ZXNcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS50aW1lID09PSBob3VyLmZvcm1hdCgnSEg6bW06c3MnKSAmJiBkYXkuZm9ybWF0KCdZWVlZLU1NLUREJykgPT09IGUuZGF0ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgSG91ckluVGhlRGF5ID0gbW9tZW50KCBtb21lbnQoZGF5KS5mb3JtYXQoJ1lZWVkvTU0vREQnKSArIGhvdXIuZm9ybWF0KCdISDptbScpLCAnWVlZWS9NTS9EREhIOm1tJyk7XHJcbiAgICAgICAgICAgIGxldCBpc0Rpc2FibGVkID0gKGVsZW1lbnQgIT09IHVuZGVmaW5lZCkgfHwgKG1vbWVudCgpLmlzQWZ0ZXIoSG91ckluVGhlRGF5KSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2xvbmVIb3VyID0gaG91ci5mb3JtYXQoJ0hIOm1tJylcclxuICAgICAgICAgICAgbGV0IGhvdXJEaXYgPSAhaXNEaXNhYmxlZCA/ICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9IFxyXG4gICAgICAgICAgICAgICAga2V5PXtpfSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNEaXNhYmxlZCA/IFwiY2VsbCBob3Vycy1lbGVtZW50IGRpc2FibGVkXCIgOiBcImNlbGwgaG91cnMtZWxlbWVudFwifSBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBzZWxlY3RIb3VyKGRheSwgY2xvbmVIb3VyLCBpc0Rpc2FibGVkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJob3VyXCI+IHtob3VyLmZvcm1hdCgnSEg6bW0nKX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IDxkaXYga2V5PXtpfSAgY2xhc3NOYW1lPVwiIGhvdXJzLWVsZW1lbnQtZGlzYWJsZWRcIiA+IDxkaXYgY2xhc3NOYW1lPVwiaG91ci1lbXB0eVwiPiA8L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgIHRhYmxlLnB1c2goaG91ckRpdilcclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgIGhvdXIgPSBob3VyLmFkZChkaXNwb25pYmlsaXRlRGF5LmR1cmVlLCAnbWludXRlcycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFibGVcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICBjb25zdCBjcmVhdGVIb3Vyc01hdGluID0gKGRheSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRpc3BvbmliaWxpdGVEYXkgPSBwcm9wcy5zaG93RGlzcG9uaWJpbGl0ZS5ob3JhaXJlcy5maW5kKGggPT4gaC5qb3VyID09PSBkYXkubGFuZyhcImZyXCIpLmZvcm1hdCgnZGRkZCcpKTtcclxuXHJcbiAgICAgICAgaWYoIWRpc3BvbmliaWxpdGVEYXkpIHJldHVybiBbXVxyXG5cclxuICAgICAgICBsZXQgdGFibGUgPSBbXTtcclxuICAgICAgICBsZXQgZW5kSG91ciA9IG1vbWVudChkaXNwb25pYmlsaXRlRGF5LmZpbl9tYXRpbiwgJ0hIOm1tOnNzJykgO1xyXG4gICAgICAgIGxldCBob3VyID0gbW9tZW50KGRpc3BvbmliaWxpdGVEYXkuZGVidXRfbWF0aW4sICdISDptbTpzcycpO1xyXG5cclxuICAgICAgICBsZXQgaT0wO1xyXG5cclxuICAgICAgICAgd2hpbGUgKGhvdXIuaXNCZWZvcmUoZW5kSG91cikgJiYgaTwgMTAwICl7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICBpZihjYWxhbmRhcil7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gY2FsYW5kYXIuZmluZCggZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGUudGltZSA9PT0gaG91ci5mb3JtYXQoJ0hIOm1tOnNzJykgJiYgZGF5LmZvcm1hdCgnWVlZWS1NTS1ERCcpID09PSBlLmRhdGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IEhvdXJJblRoZURheSA9IG1vbWVudCggbW9tZW50KGRheSkuZm9ybWF0KCdZWVlZL01NL0REJykgKyBob3VyLCAnWVlZWS9NTS9EREhIOm1tJyk7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZUhvdXIgPSBob3VyLmZvcm1hdCgnSEg6bW0nKVxyXG5cclxuICAgICAgICAgICAgbGV0IGlzRGlzYWJsZWQgPSAoZWxlbWVudCAhPT0gdW5kZWZpbmVkKSB8fCAobW9tZW50KCkuaXNBZnRlcihIb3VySW5UaGVEYXkpKTtcclxuICAgICAgICAgICAgbGV0IGhvdXJEaXYgPSAhaXNEaXNhYmxlZCA/ICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9IFxyXG4gICAgICAgICAgICAgICAga2V5PXtpfSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNEaXNhYmxlZCA/IFwiY2VsbCBob3Vycy1lbGVtZW50IGRpc2FibGVkXCIgOiBcImNlbGwgaG91cnMtZWxlbWVudFwifSBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBzZWxlY3RIb3VyKGRheSwgY2xvbmVIb3VyLCBpc0Rpc2FibGVkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJob3VyXCI+e2hvdXIuZm9ybWF0KCdISDptbScpfSAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6IDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCIgaG91cnMtZWxlbWVudC1kaXNhYmxlZFwiID4gPGRpdiBjbGFzc05hbWU9XCJob3VyLWVtcHR5XCI+IDwvZGl2PiA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHRhYmxlLnB1c2goaG91ckRpdilcclxuICAgICAgICAgICAgaSsrXHJcbiAgICAgICAgICAgIGhvdXIgPSBob3VyLmFkZChkaXNwb25pYmlsaXRlRGF5LmR1cmVlLCAnbWludXRlcycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFibGVcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoIGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSAgYXdhaXQgZmV0Y2goYCR7Q29uZmlnLkJBQ0tFTkRfVVJMfS9jb25zdWx0YXRpb24vbWVkZWNpbi1jYWxlbmRhci8ke3Byb3BzLnNob3dEaXNwb25pYmlsaXRlLmlkfS8ke3N0YXJ0RGF0ZX1gLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsIFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYHRva2VuICR7dXNlckRhdGEudG9rZW59YCxcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRNZWRlY2luQ2FsZW5kYXIoZGF0YS5tZWRlY2luQ2FsZW5kYXIpXHJcbiAgICB9LCBbc3RhcnREYXRlXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUNhbGVuZGFyID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDY7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG1vbWVudChzdGFydERhdGUpLmFkZChpLCAnZGF5cycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRheUF2YWlsYWJpbGl0eSA9IDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjYWxlbmRhci1kYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyLWRheS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhci1kYXktbmFtZVwiPntkYXRlLmZvcm1hdCgnZGRkZCcpfSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItZGF5LWRhdGVcIj57ZGF0ZS5mb3JtYXQoJ0QnKSsgXCIgXCIgK2RhdGUuZm9ybWF0KFwiTU1NXCIpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NyZWF0ZUhvdXJzTWF0aW4oZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjcmVhdGVIb3Vyc1NvaXIoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB0YWJsZS5wdXNoKGRheUF2YWlsYWJpbGl0eSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YWJsZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLXJhbmdlLWNhbGVuZGFyXCIgc3R5bGU9e3Byb3BzLmxvY2FsZSA9PT0gXCJhclwiID8ge2RpcmVjdGlvbjogXCJydGxcIiwgdGV4dEFsaWduOiBcInJpZ2h0XCJ9OiB7ZGlyZWN0aW9uOiBcImx0clwifX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYW5nZS1jYWxlbmRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItcGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlwiIGlkPVwiZGF0ZS1yYW5nZS1wcmV2aWV3XCIgb25DbGljaz17KCkgPT4gY2hhbmdlRGF0ZSgncHJldmlldycpfSAgPiAge3Byb3BzLmxvY2FsZSA9PT0gXCJhclwiID8gPE1kQ2hldnJvblJpZ2h0Lz46IDxNZENoZXZyb25MZWZ0IC8+fSAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2hvd0Rpc3BvbmliaWxpdGU/IGNyZWF0ZUNhbGVuZGFyKCkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXItcGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIlwiIGlkPVwiZGF0ZS1yYW5nZS1uZXh0XCIgb25DbGljaz17KCkgPT4gY2hhbmdlRGF0ZSgnbmV4dCcpfSAgPiAge3Byb3BzLmxvY2FsZSA9PT0gXCJhclwiID8gPE1kQ2hldnJvbkxlZnQgLz46IDxNZENoZXZyb25SaWdodCAvPn0gPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBHb29nbGVNYXAsXHJcbiAgdXNlTG9hZFNjcmlwdCxcclxuICBNYXJrZXIsXHJcbiAgSW5mb1dpbmRvdyxcclxufSBmcm9tIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiO1xyXG5cclxuLy8gaW1wb3J0IG1hcmtlckljb24gZnJvbSAnYXNzZXRzL2ltZy9tYXJrZXIucG5nJ1xyXG5jb25zdCBsaWJyYXJpZXMgPSBbXCJwbGFjZXNcIl07XHJcblxyXG5jb25zdCBtYXBDb250YWluZXJTdHlsZSA9IHtcclxuICBoZWlnaHQ6IFwiNTB2aFwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxufTtcclxuXHJcblxyXG5jb25zdCBtYXBTdHlsZXMgPSBbXHJcbiAge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXHJcbiAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgIH1cclxuICAgICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcclxuICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dFwiLFxyXG4gICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgIF1cclxuICB9XHJcbl07XHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgc3R5bGVzOiBtYXBTdHlsZXMsXHJcbiAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcclxuICB6b29tQ29udHJvbDogdHJ1ZSxcclxuICBzY3JvbGx3aGVlbDogZmFsc2UsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzKSB7XHJcblxyXG4gIGNvbnN0IHsgaXNMb2FkZWQsIGxvYWRFcnJvciB9ID0gdXNlTG9hZFNjcmlwdCh7XHJcbiAgICBnb29nbGVNYXBzQXBpS2V5OiBwcm9wcy5hcGlLZXksXHJcbiAgICBsaWJyYXJpZXMsXHJcbiAgfSk7XHJcbiAgY29uc3QgW21hcmtlcnMsIHNldE1hcmtlcnNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBbY2VudGVyLCBzZXRDZW50ZXJdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgbGF0OiAzMy41Nzk1NzAzLFxyXG4gIGxuZzogLTcuNTg3NDUxOCxcclxuICB9KVxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrTWFya2VyID0gKCkgPT4ge1xyXG5cclxuICB9XHJcbiBcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZihwcm9wcy5sb2NhdGlvbnMpe1xyXG4gICAgICAgIGlmKHByb3BzLmxvY2F0aW9ucy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgIGlmKHByb3BzLmxvY2F0aW9uc1swXSl7XHJcbiAgICAgICAgICAgIHNldE1hcmtlcnMocHJvcHMubG9jYXRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIHNldENlbnRlcih7bGF0OiBwcm9wcy5sb2NhdGlvbnNbMF1bXCJsYXRpdHVkZVwiXSwgbG5nOiBwcm9wcy5sb2NhdGlvbnNbMF1bXCJsb25naXR1ZGVcIl0gIH0pXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBcclxuICB9LCBbcHJvcHMubG9jYXRpb25zXSlcclxuICBjb25zdCBtYXBSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICBjb25zdCBvbk1hcExvYWQgPSBSZWFjdC51c2VDYWxsYmFjaygobWFwKSA9PiB7XHJcbiAgICBtYXBSZWYuY3VycmVudCA9IG1hcDtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChsb2FkRXJyb3IpIHJldHVybiBcIkVycm9yXCI7XHJcbiAgaWYgKCFpc0xvYWRlZCkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEdvb2dsZU1hcFxyXG4gICAgICAgIGlkPVwibWFwXCJcclxuICAgICAgICBtYXBDb250YWluZXJTdHlsZT17bWFwQ29udGFpbmVyU3R5bGV9XHJcbiAgICAgICAgem9vbT17OH1cclxuICAgICAgICBjZW50ZXI9e2NlbnRlcn1cclxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgIG9uTG9hZD17b25NYXBMb2FkfVxyXG4gICAgICA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWFya2Vycy5tYXAoKG1hcmtlciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYoIW1hcmtlcikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgIDxNYXJrZXJcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXt7IGxhdDogbWFya2VyLmxhdGl0dWRlLCBsbmc6IG1hcmtlci5sb25naXR1ZGUgfX1cclxuICAgICAgICAgICAgICBhbmltYXRpb249e3dpbmRvdy5nb29nbGUubWFwcy5BbmltYXRpb24uRFJPUH1cclxuICAgICAgICAgICAgICBpY29uPXtcIi9pbWFnZS9tYXJrZXIucG5nXCJ9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tNYXJrZXIobWFya2VyKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPC9Hb29nbGVNYXA+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIlxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi8uLi8uLi9FbmRQb2ludCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHt1c2VBcHBDb250ZXh0fSBmcm9tICcuLy4uLy4uL2NvbnRleHQvQXBwb2ludGVtZW50Q29udGV4dCdcclxuXHJcbmltcG9ydCB7TWRWaWRlb2NhbX0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXHJcblxyXG5cclxuaW1wb3J0IHtSb3d9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IFJlYWN0RmFuY3lCb3ggZnJvbSAnLi8uLi9mYW5jeUJveC9mYW5jeWJveC9SZWFjdEZhbmN5Qm94J1xyXG5cclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi8uLi9DdXN0b21CdXR0b25zL0J1dHRvbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IENhbGVuZGFyQXZhaWxhYmlsaXR5IGZyb20gJy4vQ2FsZW5kYXJBdmFpbGFiaWxpdHknXHJcblxyXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XHJcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcclxuXHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBTbGlkZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbGlkZSc7XHJcblxyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVkZWNpbldpZGdldChwcm9wcykge1xyXG4gICAgY29uc3QgW3Nob3dEaXNwb25pYmlsaXRlLCBzZXRTaG93RGlzcG9uaWJpbGl0ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3Qge2NvbnRlbnQsIGxvY2FsZX0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3Itd2lkZ2V0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1pbmZvLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImRvY3Rvci1wcm9maWxlLmh0bWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5tZWRlY2luLmltYWdlID8gYCR7Q29uZmlnLkJBQ0tFTkRfVVJMfS8ke3Byb3BzLm1lZGVjaW4uaW1hZ2V9YCA6IFwiL2ltYWdlL21lZGVjaW4vaG9tbWUuanBnXCIgfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJVc2VyIEltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLWluZm8tY29udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZG9jLW5hbWVcIj48YSBocmVmPVwiZG9jdG9yLXByb2ZpbGUuaHRtbFwiPkRyLiB7YCR7cHJvcHMubWVkZWNpbi5ub219ICR7cHJvcHMubWVkZWNpbi5wcmVub219YH08L2E+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cImRvYy1zcGVjaWFsaXR5XCI+TURTIC0gUGVyaW9kb250b2xvZ3kgYW5kIE9yYWwgSW1wbGFudG9sb2d5LCBCRFM8L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgeyFwcm9wcy5tZWRlY2luLnRlbGVjb25zdWx0YXRpb25Jc0Rpc3BvbmlibGUgPyBudWxsIDogPGg0PiA8c3Bhbj4gPE1kVmlkZW9jYW0gLz4ge2NvbnRlbnQuYXZhaWxhYmxlVmlkZW99IDwvc3Bhbj4gPC9oND59IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5tZWRlY2luLnNwZWNpYWxpdGVzLm1hcCgoc3BlY2lhbGl0ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxoNCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJkb2MtZGVwYXJ0bWVudFwiPnshc3BlY2lhbGl0ZS5pY29uID8gbnVsbCA6IDxpbWcgc3JjPXtgJHtDb25maWcuQkFDS0VORF9VUkx9LyR7c3BlY2lhbGl0ZS5pY29ufWB9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGFsdD1cIlNwZWNpYWxpdHlcIiAvPn17c3BlY2lhbGl0ZS5uYW1lfTwvaDQ+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaW5pYy1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkb2MtbG9jYXRpb25cIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIj48L2k+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFwcm9wcy5tZWRlY2luLmFkcmVzcyA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQubm90U3BlY2lmaWVkIDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLm1lZGVjaW4uYWRyZXNzLnN0cmVldE5hbWU/IHByb3BzLm1lZGVjaW4uYWRyZXNzLnN0cmVldE5hbWUgOiBcIlwiKSArIFwiIFwiICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLm1lZGVjaW4uYWRyZXNzLmJ1aWxkaW5nTmFtZT8gcHJvcHMubWVkZWNpbi5hZHJlc3MuYnVpbGRpbmdOYW1lIDogXCJcIikgKyBcIiBcIiArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5tZWRlY2luLmFkcmVzcy5mbG9vcj8gXCLDqXRhZ2UgXCIgKyBwcm9wcy5tZWRlY2luLmFkcmVzcy5mbG9vciA6IFwiXCIpICsgXCIgXCIgKyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvcHMubWVkZWNpbi5hZHJlc3Muc2VjdG9yPyBwcm9wcy5tZWRlY2luLmFkcmVzcy5zZWN0b3IgOiBcIlwiKSArIFwiLCBcIiArIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm9wcy5tZWRlY2luLmFkcmVzcy5jb2RlUG9zdGFsPyBwcm9wcy5tZWRlY2luLmFkcmVzcy5jb2RlUG9zdGFsIDogXCJcIikgKyBcIiAtIFwiICsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLm1lZGVjaW4uY2l0eSA/IHByb3BzLm1lZGVjaW4uY2l0eS5uYW1lICA6IFwiXCIpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5tZWRlY2luLnBpY3R1cmVzLm1hcCgocGljdHVyZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FiaW5ldC1pbWctY29udGFpbmVyIG1sLTJcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEZhbmN5Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsPXtgJHtDb25maWcuQkFDS0VORF9VUkx9LyR7cGljdHVyZS5wYXRofWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Nsb3NlQnRuPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17YCR7Q29uZmlnLkJBQ0tFTkRfVVJMfS8ke3BpY3R1cmUucGF0aH1gfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsb2NhbGUgPT09IFwiYXJcIiA/IFwiZG9jLWluZm8tbGVmdHJcIiA6IFwiZG9jLWluZm8tcmlnaHRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpbmljLWJvb2tpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9kb2N0b3IvXCIrcHJvcHMubWVkZWNpbi5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInZpZXctcHJvLWJ0blwiPiB7Y29udGVudC5zZWVQcm9maWxlfSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj17XCIvZG9jdG9yLXByb2ZpbGUvXCIrcHJvcHMubWVkZWNpbi5pZH0+IDxhIGNsYXNzTmFtZT1cInZpZXctcHJvLWJ0blwiID4gICBWb2lyIGxlIHByb2ZpbGUgPC9hPiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dEaXNwb25pYmlsaXRlKHByb3BzLm1lZGVjaW4pfSBjb2xvcj1cInByaW1hcnlcIj4ge2NvbnRlbnQuc2VlRGlzcG99IDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2hvd0Rpc3BvbmliaWxpdGUgPyBcclxuICAgICAgICAgICAgPFNob3dEaXNwb25pYmlsaXRlIHNob3dEaXNwb25pYmlsaXRlPXtzaG93RGlzcG9uaWJpbGl0ZX0gey4uLnByb3BzfSBoYW5kbGVDbG9zZT17KCkgPT4gc2V0U2hvd0Rpc3BvbmliaWxpdGUoKX0gLz5cclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBUcmFuc2l0aW9uID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUcmFuc2l0aW9uKHByb3BzLCByZWYpIHtcclxuICAgIHJldHVybiA8U2xpZGUgZGlyZWN0aW9uPVwidXBcIiByZWY9e3JlZn0gey4uLnByb3BzfSAvPjtcclxuICB9KTtcclxuXHJcbmZ1bmN0aW9uIFNob3dEaXNwb25pYmlsaXRlIChwcm9wcykge1xyXG4gICAgY29uc3QgW3NlbGVjdGVkSG91ciwgc2V0U2VsZWN0ZWRIb3VyXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtzZWxlY3RlZERhdGUsIHNldFNlbGVjdGVkRGF0ZV0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3Qge2NvbnRlbnQsIGxvY2FsZX0gPSBwcm9wcztcclxuXHJcbiAgICBjb25zdCB7IHNldFVzZXJUZW1wb3JhcnkgfSA9IHVzZUFwcENvbnRleHQoKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IHNldERldGFpbHMgPSAoZGF5LCBob3VyKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWREYXRlKGRheSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRIb3VyKGhvdXIpXHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWxpZGF0ZVRpbWUgPSAgKCkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJUZW1wb3JhcnkoeyBkYXRlOiBzZWxlY3RlZERhdGUsIHRpbWU6IHNlbGVjdGVkSG91ciwgbWVkZWNpbklkOiBwcm9wcy5tZWRlY2luLmlkIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogYC9kb2N0b3IvJHtwcm9wcy5zaG93RGlzcG9uaWJpbGl0ZS5pZH0vYXBwb2ludG1lbnRgLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICAgIG9wZW49e3RydWV9XHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cImxnXCJcclxuICAgICAgICAgICAgICAgIC8vIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtsb2NhbGUgPT09IFwiYXJcIiA/IHtkaXJlY3Rpb246IFwicnRsXCIsIHRleHRBbGlnbjogXCJyaWdodFwifToge2RpcmVjdGlvbjogXCJsdHJcIn19XHJcbiAgICAgICAgICAgICAgICBUcmFuc2l0aW9uQ29tcG9uZW50PXtUcmFuc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAga2VlcE1vdW50ZWRcclxuICAgICAgICAgICAgICAgIC8vIG9uQ2xvc2U9e3Byb3BzLmhhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXNsaWRlLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJhbGVydC1kaWFsb2ctc2xpZGUtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJhbGVydC1kaWFsb2ctc2xpZGUtdGl0bGVcIj4ge2NvbnRlbnQuZGlzcG99ICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhckF2YWlsYWJpbGl0eSB7Li4ucHJvcHN9IHNldFNlbGVjdGVkSG91cj17c2V0RGV0YWlsc30gLz5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshc2VsZWN0ZWRIb3VyICYmICFzZWxlY3RlZERhdGUgPyBudWxsIDogY29udGVudC50aW1lU2VsZWN0ZWQgKyBtb21lbnQoc2VsZWN0ZWREYXRlICsgc2VsZWN0ZWRIb3VyLCAnWVlZWS9NTS9EREhIOm1tJyApLmNhbGVuZGFyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX0gY29sb3I9XCJ0cmFuc3BhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQuY2FuY2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17IXNlbGVjdGVkSG91cn0gb25DbGljaz17dmFsaWRhdGVUaW1lfSBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50LmNvbmZpcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuIiwiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge0JzU2VhcmNofSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxyXG5pbXBvcnQge01kTG9jYXRpb25Pbn0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcclxuaW1wb3J0IHtCaUN1cnJlbnRMb2NhdGlvbn0gZnJvbSBcInJlYWN0LWljb25zL2JpXCJcclxuXHJcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcblxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAndW5mZXRjaCdcclxuXHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi8uLi8uLi9FbmRQb2ludCdcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlID0gdGhlbWU9Pigge1xyXG4gICAgZW5kQWRvcm5tZW50OntcclxuICAgICAgICBkaXNwbGF5Olwibm9uZVwiLFxyXG4gICAgICAgIFwiJiAuTXVpQXV0b2NvbXBsZXRlLWVuZEFkb3JubWVudFwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6XCJub25lXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoQ29udGFpbmVyOiB7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogXCIxMjBweFwiLFxyXG4gICAgfSxcclxuICAgIHNlYXJjaENvbnRlbnQ6e1xyXG4gICAgICAgIHpJbmRleDogNSxcclxuICAgIH0sXHJcbiBcclxuICAgIHNlYXJjaEJhcjp7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNmZmZcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6NSxcclxuICAgICAgICBcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlYXJjaEJhclF1ZXJ5OntcclxuICAgICAgICBcIi1tcy1mbGV4XCI6IFwiMCAwIDI0MHB4XCIsXHJcbiAgICBcclxuICAgICBcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgXHJcbiAgICAgICAgd2lkdGg6IFwiNDAzcHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OjEwLFxyXG5cclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAgICAgICBmbGV4OiBcIjAgMCAxMDAlXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gXHJcbiAgICBzZWFyY2hJbnB1dFdyYXBwZXI6IHtcclxuICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6NjAsXHJcblxyXG4gICAgICAgICcmIC5zZWFyY2hiYXItaW5wdXQtaWNvbicgOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTgsXHJcbiAgICAgICAgICAgIGxlZnQ6IDE2LFxyXG4gICAgICAgICAgICB3aWR0aDogMjQsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjQsXHJcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBmaWxsOiBcIiM3NzkxYTJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmIC5zZWFyY2hiYXItaW5wdXQtaWNvbi1hcicgOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTgsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAxNixcclxuICAgICAgICAgICAgd2lkdGg6IDI0LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0LFxyXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgZmlsbDogXCIjNzc5MWEyXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2VhcmNoYmFyUGxhY2U6IHtcclxuICAgICAgICBcIi1tcy1mbGV4XCI6XCIgMCAwIDQ5MHB4XCIsXHJcbiAgICAgICAgZmxleDpcIiAwIDAgNDkwcHhcIixcclxuICAgICAgICBtYXJnaW5SaWdodDogXCIxMnB4XCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICB3aWR0aDogXCI0OTBweFwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgICAgICAgIGZsZXg6IFwiMCAwIDEwMCVcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEyXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZWFyY2hCdXR0b246IHtcclxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNDVweFwiLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDEwMCUpIHRyYW5zbGF0ZVgoLTUxcHgpXCIsXHJcbiAgICAgICAgY29sb3I6IFwiIzQzNWY3MVwiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwiLXdlYmtpdC10cmFuc2Zvcm0gNDAwbXNcIixcclxuICAgICAgICB0cmFuc2l0aW9uOlwiIHRyYW5zZm9ybSA0MDBtc1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDQwMG1zLCAtd2Via2l0LXRyYW5zZm9ybSA0MDBtc1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb25TZWxheTogXCIxMDBtc1wiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICBhcHBlYXJhbmNlOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMCAxNnB4XCIsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoU3VibWl0QnV0dG9uOiB7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIiA4cHhcIixcclxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiA1LFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNSxcclxuICAgICAgICBtYXJnaW5Ub3A6IDUsXHJcbiAgICAgICAgd2lkdGg6IFwiMTYycHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgIFxyXG59KVxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaElucHV0KHtjb250ZW50LCBsb2NhbGV9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IFttZWRlY2luLCBzZXRNZWRlY2luXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbdmlsbGUsIHNldFZpbGxlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbbG9hZGluZ01lZGVjaW4sIHNldExvYWRpbmdNZWRlY2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNTZWFyY2hlZCwgc2V0SXNTZXJhY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0xvYWRpbmdDaXRpZXMsIHNldExvYWRpbmdDaXRpZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hGZXRjaGVkLCBzZXRTZWFyY2hGZXRjaGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2l0aWVzLCBzZXRDaXRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICBjb25zdCByZXMgPSAgYXdhaXQgZmV0Y2goYCR7Q29uZmlnLkJBQ0tFTkRfVVJMfS9tZWRlY2luL3NlYXJjaC9zcGVjaWFsaXRlLyR7aW5wdXRWYWx1ZX1gLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsIFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgaWYoZGF0YS5zcGVjaWFsaXR5KXtcclxuICAgICAgICAgICAgc2V0U2VhcmNoRmV0Y2hlZChbLi4uZGF0YS5zcGVjaWFsaXR5LCAuLi5kYXRhLm1lZGVjaW5zXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgIFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBcclxuICAgIH1cclxuICB9LCBbaW5wdXRWYWx1ZV0pXHJcblxyXG4gIHVzZUVmZmVjdCggYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzID0gIGF3YWl0IGZldGNoKGAke0NvbmZpZy5CQUNLRU5EX1VSTH0vY2l0eWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRDaXRpZXMoZGF0YS5jaXRpZXMpO1xyXG4gICAgICAgIFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBzdWJtaXRpbmcgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuICAgIGxldCBNZWRlY2luX3JlY2hlcmNoZXIgPSBtZWRlY2luPyBtZWRlY2luLm5hbWUgPyBtZWRlY2luLm5hbWUgOiBtZWRlY2luLm5vbSA6IG1lZGVjaW47XHJcbiAgICBsZXQgdmlsbGVfcmVjaGVyY2hlciA9IHZpbGxlID8gdmlsbGUubmFtZSA6IHZpbGxlO1xyXG5cclxuICAgIGlmKCFNZWRlY2luX3JlY2hlcmNoZXIpe1xyXG4gICAgICAgIE1lZGVjaW5fcmVjaGVyY2hlciA9IFwiZ2VuZXJhbGlzdGVcIlxyXG4gICAgfWVsc2UgeyAgXHJcbiAgICAgICAgaWYoTWVkZWNpbl9yZWNoZXJjaGVyLnRyaW0oKSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIE1lZGVjaW5fcmVjaGVyY2hlciA9IFwibWVkZWNpbi1nZW5lcmFsaXN0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKCF2aWxsZV9yZWNoZXJjaGVyKXtcclxuICAgICAgICB2aWxsZV9yZWNoZXJjaGVyPVwibWFyb2NcIjtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBpZih2aWxsZV9yZWNoZXJjaGVyLnRyaW0oKSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIC8vIHNldFZpbGxlKHtuYW1lOiBcIm1hcm9jXCJ9KVxyXG4gICAgICAgICAgICB2aWxsZV9yZWNoZXJjaGVyPVwibWFyb2NcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lOiBgL3JlY2hlcmNoZS8ke01lZGVjaW5fcmVjaGVyY2hlcn0vJHt2aWxsZV9yZWNoZXJjaGVyfWAsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0UG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKVxyXG4gICAgfSwgXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoU3BlY2lhbGl0ZSA9IChlLCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICBzZXRNZWRlY2luKG5ld0lucHV0VmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaFNwZWNpYWxpdGVhID0gKGUsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgIGlmKG5ld0lucHV0VmFsdWUubGVuZ3RoID4wKSB7XHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcclxuICAgIH1lbHNlIHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hDb250ZW50fT5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICA8Q29sIGxnPVwiMTBcIiBtZD1cIjEwXCIgY2xhc3NOYW1lPVwibm8tcGFkZGluZy1sZWZ0XCIgPlxyXG4gICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQmFyfSBvblN1Ym1pdD17c3VibWl0aW5nfT5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJhclF1ZXJ5K1wiIHdpdGgtdm9yZGVyLXJpZ2h0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJbnB1dFdyYXBwZXIgK1wiIHNlYXJjaFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnNTZWFyY2ggY2xhc3NOYW1lPXtsb2NhbGUgPT09IFwiYXJcIiA/IFwic2VhcmNoYmFyLWlucHV0LWljb24tYXJcIjpcInNlYXJjaGJhci1pbnB1dC1pY29uXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXtoYW5kbGVTZWFyY2hTcGVjaWFsaXRlYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmdNZWRlY2lufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9PcHRpb25zVGV4dD17aXNTZWFyY2hlZD8gY29udGVudC5ub09wdGlvbiA6IGNvbnRlbnQubm9PcHRpb24yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLm5hbWU/IFwic3BlY2lhbGl0ZVwiIDogXCJtZWRlY2luXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdWdnZXN0aW9uLW1lZGVjaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtjb250ZW50LmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c2VhcmNoRmV0Y2hlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Zz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLm5vbT8gb3B0aW9uLm5vbSArIFwiIFwiICsgb3B0aW9uLnByZW5vbSArIFwiIFwiICsgb3B0aW9uLmVtYWlsICsgXCIgXCIgKyBvcHRpb24ucGhvbmUgOiBvcHRpb24ubmFtZSA/IG9wdGlvbi5uYW1lIDogXCJcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5ub20gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPXtgL2RvY3Rvci8ke29wdGlvbi5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1mbGV4IHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmltYWdlID8gPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoYmFyLXJlc3VsdC1wcm9maWxlLWF2YXRhciBcIj48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17YCR7Q29uZmlnLkJBQ0tFTkRfVVJMfS8ke29wdGlvbi5pbWFnZX1gfSAvPjwvc3Bhbj4gOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBEci4ge29wdGlvbi5ub219IHtvcHRpb24ucHJlbm9tfSA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3SW5wdXRWYWx1ZSkgPT4gaGFuZGxlU2VhcmNoU3BlY2lhbGl0ZShlLCBuZXdJbnB1dFZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lZGVjaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6XCI2MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBwbGFjZWhvbGRlcj17Y29udGVudC5yZWNoZXJjaGVsYWJlbH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaGJhclBsYWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaElucHV0V3JhcHBlciArXCIgc2VhcmNoXCJ9IHN0eWxlPSB7e292ZXJmbG93OiBcImhpZGRlblwiLH19PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWRMb2NhdGlvbk9uIGNsYXNzTmFtZT17bG9jYWxlID09PSBcImFyXCIgPyBcInNlYXJjaGJhci1pbnB1dC1pY29uLWFyXCI6XCJzZWFyY2hiYXItaW5wdXQtaWNvblwifSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdWdnZXN0aW9uLXZpbGxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2l0aWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e0xvYWRpbmdDaXRpZXN9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtjb250ZW50LmNpdHlMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ubmFtZSA/ICBvcHRpb24ubmFtZSAgOiAgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld0lucHV0VmFsdWUpID0+IHNldFZpbGxlKG5ld0lucHV0VmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmlsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6XCI2MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBwbGFjZWhvbGRlcj17Y29udGVudC5jaXR5bGFiZWx9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWxlY3RQb3NpdGlvbn0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCaUN1cnJlbnRMb2NhdGlvbiBjbGFzc05hbWU9e2xvY2FsZSA9PT0gXCJhclwiID8gXCJzZWFyY2hiYXItaW5wdXQtaWNvbi1hclwiOlwic2VhcmNoYmFyLWlucHV0LWljb25cIn0gIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoU3VibWl0QnV0dG9uICsgXCIgYnRuIGJ0bi1zdWJtaXRcIn0gcm9sZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiA+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcInRleHQtYnRuLWVsZW1lbnRcIn0+e2xvY2FsZSA9PT0gXCJhclwiID8gXCJSZWNoZXJjaGVyIFwiOlwiUmVjaGVyY2hlciBcIn0gIDwvc3Bhbj48c3ZnIHdpZHRoPVwiOFwiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCA4IDEzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbjxwYXRoIGQ9XCJNMS4zMzg1NCAxMi4zMjE2QzAuOTgwOTkgMTIuMzIxNiAwLjY0NDg4NCAxMi4xODgxIDAuMzkyMDQzIDExLjk0NTZDMC4xMzkyMjggMTEuNzAzMSAwIDExLjM4MDYgMCAxMS4wMzc2QzAgMTAuNjk0NyAwLjEzOTIyOCAxMC4zNzIyIDAuMzkyMDQzIDEwLjEyOTdMNC41Mjk3NSA2LjE2MDUxTDAuMzkyMDQzIDIuMTkxMzZDMC4xMzkyMjggMS45NDg4NCAwIDEuNjI2MzggMCAxLjI4MzQxQzAgMC45NDA0NTEgMC4xMzkyMjggMC42MTc5ODYgMC4zOTIwNDMgMC4zNzU0NjdDMC45MTM5NzQgLTAuMTI1MTggMS43NjMxNiAtMC4xMjUxMzEgMi4yODUwNiAwLjM3NTQ2N0w3LjM2OTI0IDUuMjUyNTZDNy42MjIwNSA1LjQ5NTA4IDcuNzYxMjggNS44MTc1NSA3Ljc2MTI4IDYuMTYwNTFDNy43NjEyOCA2LjUwMzQ3IDcuNjIyMDUgNi44MjU5NCA3LjM2OTI0IDcuMDY4NDhMMi4yODUwNCAxMS45NDU2QzIuMDMyMiAxMi4xODgxIDEuNjk2MDYgMTIuMzIxNiAxLjMzODU0IDEyLjMyMTZaTTEuMzM4NTQgMC40OTA2NjRDMS4xMjY4MiAwLjQ5MDY2NCAwLjkxNTA5OSAwLjU2Nzk2IDAuNzUzOTE3IDAuNzIyNjAyQzAuNTk3NzUgMC44NzI0MDkgMC41MTE3NDYgMS4wNzE1NSAwLjUxMTc0NiAxLjI4MzQxQzAuNTExNzQ2IDEuNDk1MjcgMC41OTc3NSAxLjY5NDQyIDAuNzUzOTE3IDEuODQ0MjJMNS4wNzI1MyA1Ljk4Njk0QzUuMTIwNTEgNi4wMzI5NyA1LjE0NzQ4IDYuMDk1NDEgNS4xNDc0OCA2LjE2MDUxQzUuMTQ3NDggNi4yMjU2MSA1LjEyMDUxIDYuMjg4MDUgNS4wNzI1MyA2LjMzNDA4TDAuNzUzOTE3IDEwLjQ3NjhDMC41OTc3NSAxMC42MjY2IDAuNTExNzQ2IDEwLjgyNTggMC41MTE3NDYgMTEuMDM3NkMwLjUxMTc0NiAxMS4yNDk1IDAuNTk3NzUgMTEuNDQ4NiAwLjc1MzkxNyAxMS41OTg0QzAuOTEwMDg0IDExLjc0ODIgMS4xMTc3MSAxMS44MzA3IDEuMzM4NTQgMTEuODMwN0MxLjU1OTM3IDExLjgzMDcgMS43NjcgMTEuNzQ4MiAxLjkyMzE2IDExLjU5ODRMNy4wMDczNCA2LjcyMTM0QzcuMTYzNSA2LjU3MTU0IDcuMjQ5NTEgNi4zNzIzOSA3LjI0OTUxIDYuMTYwNTNDNy4yNDk1MSA1Ljk0ODcgNy4xNjM1IDUuNzQ5NTMgNy4wMDczNCA1LjU5OTcyTDEuOTIzMTQgMC43MjI2MDJDMS43NjE5OCAwLjU2Nzk4NSAxLjU1MDI2IDAuNDkwNjY0IDEuMzM4NTQgMC40OTA2NjRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG48L3N2Zz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgXHJcbiAgKTtcclxufVxyXG5cclxuU2VhcmNoSW5wdXQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcHJvZmlsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hhcnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxyXG59O1xyXG5cclxuXHJcbi8vIFNlYXJjaElucHV0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0NvbmZpZy5CQUNLRU5EX1VSTH0vY2l0eWApO1xyXG4vLyAgICAgY29uc29sZS5sb2cocmVzKVxyXG4vLyAgICAgaWYocmVzLnN0YXR1cyA9PT0gNDA0KSByZXR1cm4geyB2aWxsZXM6IFtdIH1cclxuLy8gICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbi8vICAgICByZXR1cm4geyB2aWxsZXM6anNvbi5jaXRpZXMgfVxyXG4vLyAgIH1cclxuICAiLCJcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBjbG9zZUltZyBmcm9tICcuL2Nsb3NlLnN2ZydcclxuXHJcbi8vIGltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ1NTVHJhbnNpdGlvbixcclxuICBUcmFuc2l0aW9uR3JvdXAsXHJcbn0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcblxyXG5jbGFzcyBSZWFjdEZhbmN5Qm94IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gICAgbWF4SGVpZ2h0OiAgMFxyXG4gIH1cclxuXHJcbiAgc2V0U2hvdyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzaG93OiB0cnVlLFxyXG4gICAgfSlcclxuICAgIC8vIHRoaXMucHJvcHMub25PcGVuKClcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrQm94ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAodGhpcy5ib3guY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuY2xvc2UoKVxyXG4gIH1cclxuXHJcbiAgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvdzogZmFsc2VcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXJUaHVtYm5haWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7dGh1bWJuYWlsLCBpbWFnZSwgZGVmYXVsdFRodW1ibmFpbFdpZHRoLCBkZWZhdWx0VGh1bWJuYWlsSGVpZ2h0fSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICBpZiAoIXRodW1ibmFpbCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgb25DbGljaz17dGhpcy5zZXRTaG93fSBjbGFzc05hbWU9XCJ0aHVtYm5haWxcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogZGVmYXVsdFRodW1ibmFpbFdpZHRoLCBoZWlnaHQ6IGRlZmF1bHRUaHVtYm5haWxIZWlnaHQsIG9iamVjdEZpdDogJ2NvdmVyJ319XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgIHNyYz17aW1hZ2V9IGFsdD1cInRodW1ibmFpbFwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy5zZXRTaG93fSBjbGFzc05hbWU9XCJ0aHVtYm5haWxcIj5cclxuICAgICAgICA8aW1nIHNyYz17dGh1bWJuYWlsfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBhbHQ9XCJ0aHVtYm5haWxcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bWF4SGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjd9KVxyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCB7aW1hZ2UsIGNhcHRpb259ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIGNvbnN0IGltYWdlU3R5bGUgPSB7XHJcbiAgICAgIG1heEhlaWdodDogdGhpcy5zdGF0ZS5tYXhIZWlnaHQsXHJcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgIHdpZHRoOiAnYXV0bydcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWN0LWZhbmN5Ym94XCI+XHJcbiAgICAgICAge3RoaXMucmVuZGVyVGh1bWJuYWlsKCl9XHJcbiAgIFxyXG4gICAgICAgIDxUcmFuc2l0aW9uR3JvdXAgPlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvdz8gIChcclxuICAgICAgICAgICAgPENTU1RyYW5zaXRpb25cclxuICAgICAgICAgICAgICB0aW1lb3V0PXs1MDB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lcz1cIml0ZW1cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtib3ggPT4gdGhpcy5ib3ggPSBib3h9IGNsYXNzTmFtZT1cImltYWdlLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e3RoaXMuY2xvc2V9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIGNsYXNzTmFtZT1cImNsb3NlLWJ0blwiIHNyYz1cIi9pbWFnZS9jbG9zZS5zdmdcIiBhbHQ9XCJjbG9zZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtpbWFnZVN0eWxlfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiBzcmM9e2ltYWdlfSBhbHQ9XCJvcmlnaW5hbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImNhcHRpb25cIj57Y2FwdGlvbn08L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICAgICAgICAgICk6IG51bGx9XHJcbiAgICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XHJcblxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5SZWFjdEZhbmN5Qm94LmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aHVtYm5haWw6ICcnLFxyXG4gIGltYWdlOiAnJyxcclxuICBkZWZhdWx0VGh1bWJuYWlsV2lkdGg6IDMwMCxcclxuICBkZWZhdWx0VGh1bWJuYWlsSGVpZ2h0OiAyNTAsXHJcbiAgY2FwdGlvbjogJycsXHJcbiAgb25PcGVuOiAoKSA9PiB7fSxcclxuICBvbkNsb3NlOiAoKSA9PiB7fSxcclxuICBzaG93Q2xvc2VCdG46IHRydWUsXHJcbn1cclxuXHJcblJlYWN0RmFuY3lCb3gucHJvcFR5cGVzID0ge1xyXG4gIHRodW1ibmFpbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZWZhdWx0VGh1bWJuYWlsV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgZGVmYXVsdFRodW1ibmFpbEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgc2hvd0Nsb3NlQnRuOiBQcm9wVHlwZXMuYm9vbCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3RGYW5jeUJveFxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9maWxlOiB7XHJcbiAgICAgICAgaGVhZGluZzogXCLYqti52K/ZitmEINin2YTZhdmE2YEg2KfZhNi02K7YtdmKXCIsXHJcbiAgICAgICAgbm9tTGFiZWw6IFwi2KfYs9mFXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXIxOiBcIti62YrYsSDYp9iz2YXZg1wiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyMjogXCLYqti62YrZitixINin2LPZhdmDINin2YTYo9mI2YQgXCIsXHJcbiAgICAgICAgcHJlbm9tTGFiZWw6IFwi2KfZhNin2LPZhSDYp9mE2KPZiNmEXCIsXHJcbiAgICAgICAgZW1haWxMYWJlbDogXCLYp9mE2KjYsdmK2K8g2KfZhNil2YTZg9iq2LHZiNmG2YpcIixcclxuICAgICAgICBwaG9uZUxhYmVsOlwi2LHZgtmFINin2YTZh9in2KrZgVwiLFxyXG4gICAgICAgIGNvbmZpcm1fcGFzc3dvcmQ6XCLYo9mD2K8g2YPZhNmF2Kkg2KfZhNmF2LHZiNixXCIsXHJcbiAgICAgICAgbmV3X3Bhc3N3b3JkOlwiINmD2YTZhdipINin2YTYs9ixINis2K/Zitiv2KlcIixcclxuICAgICAgICBvbGRfcGFzc3dvcmQ6IFwi2YPZhNmF2Kkg2KfZhNiz2LFcIlxyXG5cclxuICAgIH0sXHJcbiAgICBob21lOiB7XHJcbiAgICAgICAgdGl0bGU6IFwiRE9DVE9MSVZFIC0g2YXZiNi52K8g2YXYuSDYt9io2YrYqNmDINi52KjYsSDYp9mE2KXZhtiq2LHZhtiqXCIsXHJcbiAgICAgICAgaGVhZGluZzE6IFwi2KfYqNit2Ksg2LnZhiDYt9io2YrYqCDYjCDYrdiv2K8g2YXZiNi52K/Zi9inXCIsXHJcbiAgICAgICAgaGVhZGluZzI6XCLYp9mD2KrYtNmBINij2YHYttmEINin2YTYo9i32KjYp9ihINmI2KfZhNi52YrYp9iv2KfYqiDZiNin2YTZhdiz2KrYtNmB2YrYp9iqINmB2Yog2KfZhNmF2K/ZitmG2Kkg2KfZhNij2YLYsdioINil2YTZitmDXCIsXHJcbiAgICAgICAgc2VhcmNoOntcclxuICAgICAgICAgICAgcmVjaGVyY2hlbGFiZWw6IFwi2K/Zg9iq2YjYsSDYjCDZhdik2LPYs9ipINiMINiq2K7Ytdi1IC4uLlwiLFxyXG4gICAgICAgICAgICBub09wdGlvbjogXCLZhNinINiq2YjYrNivINmG2KrYp9im2Kwg2YXYt9in2KjZgtipXCIsXHJcbiAgICAgICAgICAgIG5vT3B0aW9uMjogXCLYp9mD2KrYqCDZhNmE2K3YtdmI2YQg2LnZhNmJINin2YTZhdiy2YrYryDZhdmGINin2YTZhtiq2KfYptisXCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IFwi2KrYrdmF2YrZhCDYp9mE2KPYt9io2KfYoSDYo9mIINin2YTYqtiu2LXYtdin2Kog2KfZhNmF2YXYp9ir2YTYqVwiLFxyXG4gICAgICAgICAgICBjaXR5bGFiZWw6IFwi2KPZitmGINifXCIsXHJcbiAgICAgICAgICAgIGNpdHlMb2FkaW5nOiBcItiq2K3ZhdmK2YQg2YXYr9mGINmF2YXYp9ir2YTYqVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhYm91dCA6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCLZhdi52YTZiNmF2KfYqiDYudmG2KdcIixcclxuICAgICAgICAgICAgYm9keTogXCLZg9in2YbYqiDYp9mE2YHZg9ix2Kkg2YjYsdin2KEgRG9jdG9saXZlINmH2Yog2KjZhtin2KEg2YXZgdmH2YjZhSDYt9mI2YrZhCDYp9mE2YXYr9mJINmK2YfYr9mBINil2YTZiSDYqtit2LPZitmGINit2YrYp9ipINin2YTZhtin2LMg2KfZhNmK2YjZhdmK2KkuINmB2Yog2LnYp9mFIDIwMjEg2Iwg2KfYrtiq2KfYsSDYtNix2YrZg9in2YYg2YXYudin2YTYrNipINmF2YjYttmI2Lkg2KfZhNmF2YjYp9i52YrYryDYp9mE2LfYqNmK2KkuINiz2LHYudin2YYg2YXYpyDYo9i12KjYrSDZiNin2LbYrdmL2Kcg2KPZhiDYp9mE2YXYsdi22Ykg2YjYp9mE2YXZhdin2LHYs9mK2YYg2LnZhNmJINit2K8g2LPZiNin2KEg2YPYp9mG2YjYpyDYrdiz2KfYs9mK2YZcIixcclxuICAgICAgICAgICAgYnV0dG9uOiBcIlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMTpcItmF2YjYudivIDI0LzdcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTI6XCLYqtiw2YPZitixINiq2YTZgtin2KbZilwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcItiz2KzZhCDYp9mE2KjZitin2YbYp9iqXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBza2lwIDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcItiq2KzZhtioINi62LHZgdipINin2YTYp9mG2KrYuNin2LEuXCIsXHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmc6IFwi2LHYpNmK2Kkg2KfZhNi32KjZitioXCIsXHJcbiAgICAgICAgICAgIGJ1dHRvbjogXCLYqtit2K/ZitivINmF2YjYudivXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwi2KrZg9in2YTZitmBINio2LPZiti32Kkg2YjYq9in2KjYqtipXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0yOlwi2KfZhNij2LfYqNin2KEg2KfZhNiw2YrZhiDYqtmFINin2YTYqtit2YLZgiDZhdmG2YfZhSDZitiz2KrYrNmK2KjZiNmGINmB2YogNVwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcIjEwMNmqINiu2KfYtSDZiNiz2LHZilwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcHM6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCLYrdiv2K8g2YXZiNi52K/Zi9inINio2KjYtti5INmG2YLYsdin2KouXCIsXHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmc6IFwi2LHYpNmK2Kkg2KfZhNi32KjZitioXCIsXHJcbiAgICAgICAgICAgIGJ1dHRvbjogXCLYqtit2K/ZitivINmF2YjYudivXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwi2KfYqNit2Ksg2LnZhiDYo9iu2LXYp9im2Yog2KfZhNix2LnYp9mK2Kkg2KfZhNi12K3ZitipINin2YTYrtin2LUg2KjZg1wiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMTI6XCLYo9mD2KvYsSDZhdmGIDI1MDAwINmF2YXYp9ix2LMg2YHZiiA3MCDYqtiu2LXYtdmL2KcuINiq2LXZgdmK2Kkg2K3Ys9ioINin2YTYqtiu2LXYtSDYjCDZhdis2KfZhCDYp9mE2K7YqNix2Kkg2Iwg2KfZhNmF2YjZgti5INin2YTYrNi62LHYp9mB2Yog2Iwg2KXZhNiuLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMjpcItin2K7YqtixINmI2YLYqtmDXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0yMjpcItit2K/YryDYqtiu2LXYtdmDINmB2Yog2KzYr9mI2YQg2KPYudmF2KfZhCDYp9mE2YXZhdin2LHYsyDZgdmKINin2YTZiNmC2Kog2KfZhNmB2LnZhNmKLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcItin2K3YrNiyINmF2YjYudiv2YMg2YHZiiDYr9mC2YrZgtipINmI2KfYrdiv2KkhXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0zMjpcIjI0Lzcg2KfZhNmI2LXZiNmEINil2YTZiSDZhdmI2KfYudmK2K/ZgyDZhdmGINis2YXZiti5INij2KzZh9iy2KrZgy4g2KfZhNiq2KPZg9mK2K8g2YjYp9mE2KrYsNmD2YrYsSDYudmGINi32LHZitmCINin2YTYqNix2YrYryDYp9mE2KXZhNmD2KrYsdmI2YbZiiDZiNin2YTYsdiz2KfYptmEINin2YTZgti12YrYsdipLlwiLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRvd2xvYWQ6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCLYp9mD2KrYtNmBINiq2LfYqNmK2YIg2KfZhNmH2KfYqtmBINin2YTZhdit2YXZiNmEIFwiLFxyXG4gICAgICAgICAgICBzdWJIZWFkaW5nOiBcItmE2KXYr9in2LHYqSDZhdmI2KfYudmK2K/ZgyDYqNi02YPZhCDYo9iz2YfZhC5cIixcclxuICAgICAgICAgICAgYXBwOlwi2YHZiiDZhdiq2KzYsSDYp9mE2KrYt9io2YrZgtin2KogQVBQIFNUT1JFIFwiLFxyXG4gICAgICAgICAgICBwbGF5OiBcItmB2Yog2YXYqtis2LEg2KfZhNiq2LfYqNmK2YLYp9iqIFBMQVkgU1RPUkVcIlxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcnZpY2VzIDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcItiu2K/Zhdin2KrZhtinXCIsXHJcbiAgICAgICAgICAgIGl0ZW0xaGVhZGluZzogXCLYp9iz2KrYtNixINin2YTYo9i32KjYp9ihINi52KjYsSDYp9mE2KXZhtiq2LHZhtiqXCIsXHJcbiAgICAgICAgICAgIGl0ZW0xYm9keTpcItiq2K3Yr9irINmF2Lkg2LfYqNmK2Kgg2KjYp9iz2KrYrtiv2KfZhSDZhdmD2KfZhNmF2Kkg2KfZhNmB2YrYr9mK2Ygg2LnYp9mE2YrYqSDYp9mE2KPZhdin2YYg2KfZhNiu2KfYtdipINio2YbYpy4g2KrYs9in2LnYr9mDINiu2K/ZhdipINmF2YPYp9mE2YXYp9iqINin2YTZgdmK2K/ZitmIINin2YTYrtin2LXYqSDYqNmG2Kcg2LnZhNmJINmF2YbYp9mC2LTYqSDZhdiu2KfZiNmB2YMg2KfZhNi12K3ZitipINmF2Lkg2LfYqNmK2Kgg2YHZiiDYqtmB2KfYudmEINmF2KjYp9i02LEg2YjYrNmH2KfZiyDZhNmI2KzZhy5cIixcclxuICAgICAgICAgICAgaXRlbTJoZWFkaW5nOiBcItmC2YUg2KjYqtiu2LLZitmGINin2YTZhdiz2KrZhtiv2KfYqiDYp9mE2LfYqNmK2Kkg2KfZhNiu2KfYtdipINio2YNcIixcclxuICAgICAgICAgICAgaXRlbTJib2R5Olwi2LPZitiq2YUg2KrYs9is2YrZhCDYrNmF2YrYuSDYp9mE2YXYs9iq2YbYr9in2Kog2KfZhNiq2Yog2KrZhdiqINmF2LTYp9ix2YPYqtmH2Kcg2YXYuSDYo9i32KjYp9im2YMg2KPZiCDYqNmI2KfYs9i32KrZh9mFINij2KvZhtin2KEg2KfZhNin2LPYqti02KfYsdipINi52YYg2KjZj9i52K8g2LnZhNmJINin2YTZhdmG2LXYqS4g2LPYqtmD2YjZhiDZh9iw2Ycg2KfZhNmF2LnZhNmI2YXYp9iqINmF2KrYp9it2Kkg2YTZgyDYo9mG2Kog2YjYp9mE2YXZhdin2LHYsyDZgdmC2LcuXCIsXHJcbiAgICAgICAgICAgIGl0ZW0zaGVhZGluZzogXCLYpdiv2KfYsdipINin2YTZhdmI2KfYudmK2K9cIixcclxuICAgICAgICAgICAgaXRlbTNib2R5Olwi2KjYudivINiq2KPZg9mK2K8g2KfZhNmF2YjYudivINiMINiz2KrYqtmF2YPZhiDZhdmGINmG2YLZhNmHINij2Ygg2KXZhNi62KfYptmHINmB2Yog2KPZiiDZiNmC2KouINmE2K/ZitmDINij2YrYttmL2Kcg2KXZhdmD2KfZhtmK2Kkg2KXYr9in2LHYqSDZhdmI2KfYudmK2K/ZgyDYp9mE2YLYr9mK2YXYqS5cIixcclxuICAgICAgICAgICAgaXRlbTRoZWFkaW5nOiBcItin2KjYrdirINi52YYg2LfYqNmK2KjZg1wiLFxyXG4gICAgICAgICAgICBpdGVtNGJvZHk6XCLZhdi5INmI2KzZiNivINi52K/YryDZg9io2YrYsSDZhdmGINin2YTZhdmF2KfYsdiz2YrZhiDYp9mE2YXYqtmG2YjYudmK2YYg2LnZhNmJINin2YTYtdi52YrYryDYp9mE2YjYt9mG2Yog2Iwg2YXZhiDYp9mE2LPZh9mEINin2K7YqtmK2KfYsSDZhdmC2K/ZhSDYsdi52KfZitipINi32KjZitipINij2Ygg2LXYrdipINi52YLZhNmK2Kkg2YrYqtmF2KrYuSDYqNin2YTYrtio2LHYqSDZiNin2YTYqtiu2LXYtSDYp9mE2YXZhtin2LPYqNmK2YYg2YTZgy5cIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIG1lZGVjaW46IFwi2YfZhCDYo9mG2Kog2YXYqtiu2LXYtSDZgdmKINin2YTYsdi52KfZitipINin2YTYtdit2YrYqdifXCIsXHJcbiAgICAgICAgY29udGFjdDogXCLYp9iq2LXZhCDYqNmG2KdcIixcclxuICAgICAgICBjb25lY3Q6IFwi2KrYs9is2YrZhCDYp9mE2K/YrtmI2YRcIixcclxuICAgICAgICByZHY6IFwi2KXYr9in2LHYqSDZhdmI2KfYudmK2K/ZilwiXHJcbiAgICB9LFxyXG4gICAgcHJvbmF2YmFyOiB7XHJcbiAgICAgICAgY29udGFjdDogXCLYp9iq2LXZhCDYqNmG2KdcIixcclxuICAgICAgICBkb2N1bWVudDogXCLZiNir2KfYptmCXCIsXHJcbiAgICAgICAgcmR2OiBcItmF2YjYp9i52YrYr1wiLFxyXG4gICAgICAgIGRyb3BEb3duMTogXCLYrdiz2KfYqNmKXCIsXHJcbiAgICAgICAgZHJvcERvd24yOiBcItiq2LPYrNmK2YQg2KfZhNiu2LHZiNisXCIsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgcGFydG5lcjogXCLZg9mGINi32KjZitio2YvYpyDYtNix2YrZg9mL2KdcIixcclxuICAgICAgICBzaWduaW46IFwi2LPYrNmEINmD2YXYsdmK2LZcIixcclxuICAgICAgICBmYXE6IFwi2KPYs9im2YTYqSDYn1wiLFxyXG4gICAgICAgIGNvbnRhY3Q6IFwi2KfYqti12YQg2KjZhtinIFwiLFxyXG4gICAgICAgIGFkcmVzczogXCLYp9mE2YXYutix2KggLSDYp9mE2K/Yp9ixINin2YTYqNmK2LbYp9ihXCIsXHJcbiAgICAgICAgcG9saXRpcXVlOiBcItiz2YrYp9iz2Kkg2KfZhNiu2LXZiNi12YrYqVwiLFxyXG4gICAgICAgIGNvbmRpdGlvbjogXCLYtNix2YjYtyDYp9mE2KfYs9iq2LnZhdin2YRcIixcclxuICAgICAgICBjb25kaXRpb24yOiBcIkNvbmRpdGlvbnMgZCd1dGlsaXNhdGlvbiBkdSBzaXRlIERvY3RvbGl2ZVwiLFxyXG4gICAgICAgIHJlZ2xlX2RlX3I6XCJSw6hnbGVzIGRlIHLDqWbDqXJlbmNlbWVudFwiLFxyXG4gICAgICAgIG1lbnRpb25zX2xlZzpcIk1lbnRpb25zIGzDqWdhbGVzXCIsXHJcbiAgICAgICAgbWVudGlvbnNfbGVnOlwiTWVudGlvbnMgbMOpZ2FsZXNcIixcclxuICAgICAgICBDb29raWVzOlwiQ29va2llc1wiLFxyXG4gICAgICAgIHByb3RlY3RfZG9ubmVzX3BlcnNvOlwicHJvdGVjdGlvbiBkZXMgZG9ubsOpZXMgcGVyc29ubmVsbGVzXCIsXHJcbiAgICAgICAgZ2VzdGlvbl9kZV9jb29raWVzOlwiR2VzdGlvbiBkZSBjb29raWVzIGV0IGNvbnNlbnRlbWVudFwiLFxyXG4gICAgfSxcclxuICAgIG5ldzp7XHJcbiAgICAgICAgYWxyZWFkeUhhdmU6IFwi2YTYr9mKINio2KfZhNmB2LnZhCDYrdiz2KfYqCBEb2N0b2xpdmVcIixcclxuICAgICAgICBuZXdJbjogXCLYrNiv2YrYryDYudmE2YkgRG9jdG9saXZl2J9cIixcclxuICAgICAgICBzaWduaW46IFwi2KrYs9is2YrZhCDYp9mE2K/YrtmI2YRcIixcclxuICAgICAgICBzaWdudXA6IFwiINiz2KzZhCDYp9mE2KfZhlwiLFxyXG4gICAgICAgIGF1dGg6XCLYp9mE2K/YrtmI2YQg2KXZhNmJINit2LPYp9io2YpcIixcclxuICAgICAgICBlbWFpbExhYmVsOiBcIti52YbZiNin2YYg2KfZhNio2LHZitivINin2YTYpdmE2YPYqtix2YjZhtmKXCIsXHJcbiAgICAgICAgcGFzc0xhYmVsOiBcItmD2YTZhdipINin2YTYs9ixXCIsXHJcbiAgICAgICAgb2xkcGFzc0xhYmVsOiBcItmD2YTZhdipINiz2LEg2YLYr9mK2YXYqVwiLFxyXG4gICAgICAgIGNvbmZpcm1wYXNzTGFiZWw6IFwi2KPZg9ivINmD2YTZhdipINin2YTYs9ixXCIsXHJcbiAgICAgICAgZXJyb3I6IFwi2YPZhNmF2Kkg2YXYsdmI2LEg2KPZiCDYudmG2YjYp9mGINio2LHZitivINil2YTZg9iq2LHZiNmG2Yog2LrZitixINi12K3ZititIVwiLFxyXG4gICAgICAgIGxhYmVsTm9tOiBcItin2YTZg9mG2YrYqVwiLFxyXG4gICAgICAgIGxhYmVsUHJlbm9tOiBcItin2YTYp9iz2YUg2KfZhNij2YjZhFwiLFxyXG4gICAgICAgIHBob25lTGFiZWw6IFwi2LHZgtmFINin2YTZh9in2KrZgVwiLFxyXG4gICAgICAgIHBob25lRXJyb3I6XCLZitis2Kgg2KPZhiDZitmD2YjZhiDYudmG2YjYp9mGINin2YTYqNix2YrYryDYp9mE2KXZhNmD2KrYsdmI2YbZiiDYqNiq2YbYs9mK2YIg2KfZhNi52KfZhVwiLFxyXG4gICAgICAgIGxhYmVsRW1haWxDOiBcItij2YPYryDYudmG2YjYp9mG2YMg2KfZhNil2YTZg9iq2LHZiNmG2YpcIixcclxuICAgICAgICBsYWJlbEVtYWlsQ1A6IFwi2KPZg9ivINi52YbZiNin2YbZgyDYp9mE2KXZhNmD2KrYsdmI2YbZilwiLFxyXG4gICAgICAgIGVycm9yU2lnbnVwOiBcItin2YTZhdi52YTZiNmF2KfYqiDYutmK2LEg2LXYrdmK2K3YqVwiLFxyXG4gICAgICAgIHN1Y2Nlc3NTaWdudXA6IFwi2KrZhSDYpdix2LPYp9mEINin2YTYt9mE2Kgg2KjZhtis2KfYrSDYqtit2YLZgiDZhdmGINi52YbZiNin2YYg2KjYsdmK2K/ZgyDYp9mE2KXZhNmD2KrYsdmI2YbZiiDZhNiq2KPZg9mK2K8g2K3Ys9in2KjZg1wiXHJcbiAgICB9LFxyXG4gICAgcmVwb3J0OntcclxuICAgICAgICBzaWdudXA6IFwi2KfYttin2YHYqVwiLFxyXG4gICAgICAgIGxhYmVsTm9tOiBcItin2YTZhtmI2LlcIixcclxuICAgICAgICBsYWJlbFByZW5vbTogXCLZiNi12YFcIixcclxuICAgICAgICBsYWJlbEVuZDogXCLYp9mG2KrZh9iqINin2YTYp9iz2KrYtNin2LHYqdifXCIsXHJcbiAgICAgICAgZXJyb3JTaWdudXA6IFwi2KfZhNmF2LnZhNmI2YXYp9iqINi62YrYsSDYtdit2YrYrdipXCIsXHJcbiAgICAgICAgc3VjY2Vzc1NpZ251cDogXCLYqtmFINil2LHYs9in2YQg2KfZhNi32YTYqCDYqNmG2KzYp9itINiq2K3ZgtmCINmF2YYg2KjYsdmK2K/ZgyDYp9mE2KfZhNmD2KrYsdmI2YbZiiDZhNmE2K3YtdmI2YQg2LnZhNmJINix2K8g2YXYs9io2YIg2YHZiiDYp9mE2KPZitin2YUg2KfZhNmC2YTZitmE2Kkg2KfZhNmF2YLYqNmE2KlcIlxyXG4gICAgfSxcclxuICAgIGRvY3VtZW50czoge1xyXG4gICAgICAgIGF1Y3VuIDpcItmE2YUg2YrYqtmFINin2YTYudir2YjYsSDYudmE2Ykg2KPZiiDZhdiz2KrZhtivXCIsXHJcbiAgICAgICAgZG9udGhhdmU6IFwi2YTZitizINmE2K/ZitmDINmI2KvZitmC2Kkg2YTZhNmF2LTYp9ix2YPYqVwiLFxyXG4gICAgICAgIHNoYXJlZEJ5OiBcIiDZhdi02KfYsdmD2Kkg2KfZhNmF2LPYqtmG2K8g2YXZhiDYt9ix2YE6IFwiLFxyXG4gICAgICAgIHNoYXJlZFdpdGg6IFwi2KfZhNmF2LPYqtmG2K8g2KfZhNiw2Yog2YLZhdiqINio2YXYtNin2LHZg9iq2Ycg2YXYudmHOlwiLFxyXG4gICAgfSxcclxuICAgIGFwcG9pbnRtZW50czoge1xyXG4gICAgICAgIG5vdEF1dGg6IFwi2KPZhtiqINi62YrYsSDZhdi12K/ZgiAuLi5cIixcclxuICAgICAgICBhY2Nlc3M6IFwi2KfZhNiv2K7ZiNmEINil2YTZiSDYrdiz2KfYqNmKXCIsXHJcbiAgICAgICAgbm9BcHA6IFwiINmE2YrYsyDZhNiv2YrZgyDZhdmI2LnYryDYqNi52K9cIixcclxuICAgICAgICBteWFwcDogXCLYp9mE2YXZiNin2LnZitivINin2YTYrtin2LXYqSDYqNmKXCIsXHJcbiAgICAgICAgbXlIaXN0b3J5OiBcItiz2KzZhCDYp9mE2YTZgtin2KbYp9iqINin2YTYt9io2YrYqVwiLFxyXG4gICAgICAgIGhpc3Rvcnk6IFwi2LPYrNmEINin2YTZhNmC2KfYptin2Kog2KfZhNi32KjZitipXCIsXHJcbiAgICAgICAgbmV4dEFwcDogXCIg2KfZhNmF2YjYp9i52YrYryDYp9mE2YLYp9iv2YXYqVwiLFxyXG4gICAgICAgIHRha2VhcHA6IFwi2KfYrtiwINmF2YjYudivXCIsXHJcbiAgICAgICAgY2FyZEFwcHM6IHtcclxuICAgICAgICAgICAgbGluayA6XCLYp9mG2LjYsSDYp9mE2YXYstmK2K8g2YXZhiDYp9mE2KrZgdin2LXZitmEXCIgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZEFwcDoge1xyXG4gICAgICAgICAgICBsaW5rIDpcItin2YbYuNixINin2YTZhdiy2YrYryDZhdmGINin2YTYqtmB2KfYtdmK2YRcIixcclxuICAgICAgICAgICAgYWNjZXNzSW5mb3M6IFwi2YXYudmE2YjZhdin2Kog2KfZhNmI2YTZiNisIFwiLFxyXG4gICAgICAgICAgICBub3RTcGVjaWZpZWQ6IFwi2YTZhSDZitit2K/YryDYp9mE2LfYqNmK2Kgg2KjYudivINmF2LnZhNmI2YXYp9iqINin2YTZiNi12YjZhFwiLFxyXG4gICAgICAgICAgICBzZWNyZXRhcmlhdDogXCLYp9mE2KfYqti12KfZhCDYqNin2YTYo9mF2KfZhtipXCIsXHJcbiAgICAgICAgICAgIGNsaWNrOiBcItin2YTYsdis2KfYoSDYp9mE2LbYuti3INi52YTZiSDYp9mE2LLYsSDZhNmE2YjYtdmI2YQg2KXZhNmJINin2YTYp9iz2KrYtNin2LHYqSDYudmGINio2LnYry4g2LPZhtiu2KjYsSDYt9io2YrYqNmDINiq2YTZgtin2KbZitmL2Kcg2KjZiNis2YjYr9mDLlwiLFxyXG4gICAgICAgICAgICByZWpvaW5kcmU6IFwi2KfZhti22YUg2KXZhNmJINin2YTYp9iz2KrYtNin2LHYqVwiLFxyXG4gICAgICAgICAgICBkZXBsYWNlcjogXCLYp9mG2YLZhCDYp9mE2YXZiNi52K9cIixcclxuICAgICAgICAgICAgYW5udWxlcjogXCIg2KfZhNmF2YjYudivIFwiLFxyXG4gICAgICAgICAgICByZXRvdXI6IFwi2LHYrNmI2LlcIixcclxuICAgICAgICAgICAgY29uZmlybUNhbmNlbDogXCLYqtij2YPZitivINil2YTYutin2KEg2KfZhNmF2YjYudivXCIsXHJcbiAgICAgICAgICAgIHdhbnRZb3U6IFwi2YfZhCDYqtix2LrYqCDZgdmKINil2YTYutin2KEg2YXZiNi52K9cIixcclxuICAgICAgICAgICAgd2l0aDogXCLZhdi5IFwiLFxyXG4gICAgICAgICAgICBkb2NBdmFpOiBcItiq2YjYp9mB2LEg2KfZhNi32KjZitioXCIsXHJcbiAgICAgICAgICAgIHNlbGVjVHRpbWU6ICBcItin2YTZiNmC2Kog2KfZhNmF2K3Yr9ivINmE2YTYp9iz2KrYtNin2LHYqSDZh9mIXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwi2YLZhSDYqNiq2KPZg9mK2K8g2KfZhNmB2KrYsdipINin2YTYstmF2YbZitipINin2YTYrNiv2YrYr9ipXCIsXHJcbiAgICAgICAgICAgIHNlZUluZm9zU2hhcmVkOiBcItin2YbYuNixINin2YTZhdi52YTZiNmF2KfYqiDYp9mE2YXYtNiq2LHZg9ipINmB2Yog2KfZhNin2LPYqti02KfYsdipXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICByZXN1bHRSZXNlYXJjaDoge1xyXG4gICAgICAgIG5vUmVzZWF1bHQ6IFwi2LnYsNix2Kcg2Iwg2YTZhSDZhtiq2YXZg9mGINmF2YYg2KfZhNi52KvZiNixINi52YTZiSDZhdit2KrYsdmBINmE2KjYrdir2YMgLi4uXCIsXHJcbiAgICAgICAgdHJ5UmVzZWF1bHQ6IFwi2K3Yp9mI2YQg2KjZhdi52KfZitmK2LEg2KjYrdirINij2K7YsdmJLlwiLFxyXG4gICAgICAgIHdpZGdldDoge1xyXG4gICAgICAgICAgICBhdmFpbGFibGVWaWRlbzogXCLYp9mE2KrYtNin2YjYsSDYqNin2YTZgdmK2K/ZitmIINmF2KrYp9itXCIsXHJcbiAgICAgICAgICAgIG5vdFNwZWNpZmllZDogXCLZhNmFINmK2K3Yr9ivINin2YTYt9io2YrYqCDYqNi52K8g2YXYudmE2YjZhdin2Kog2KfZhNmI2LXZiNmEINmH2LDZh1wiLFxyXG4gICAgICAgICAgICBzZWVQcm9maWxlOiBcItin2YbYuNixINin2YTZhdmE2YEg2KfZhNi02K7YtdmKXCIsXHJcbiAgICAgICAgICAgIHNlZURpc3BvOiBcItin2YTYqtit2YLZgiDZhdmGINin2YTYtdmE2KfYrdmK2KlcIixcclxuICAgICAgICAgICAgZGlzcG86XCLYp9mE2KfZiNmC2KfYqiDYp9mE2YXYqtin2K3YqSDYudmG2K8g2YfYsNinINin2YTYt9io2YrYqFwiLFxyXG4gICAgICAgICAgICB0aW1lU2VsZWN0ZWQ6IFwi2KrYqNiv2KMg2KfZhNmB2KrYsdipINin2YTYstmF2YbZitipINin2YTZhdit2K/Yr9ipINmE2YTYqti02KfZiNixIFwiLFxyXG4gICAgICAgICAgICBjYW5jZWw6IFwi2YTYp9mE2LrYp9ihXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwi2KrYrdiv2YrYryDZhdmI2LnYr1wiLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOntcclxuICAgICAgICBjb25maXJtOiBcItiq2YUg2KfZhNiq2K3ZgtmCINmF2YYg2LXYrdipINit2LPYp9io2YNcIixcclxuICAgICAgICBleHBpcmVkOiBcItmE2YUg2YrYqtmFINin2YTYqtit2YLZgiDZhdmGINi12K3YqSDYrdiz2KfYqNmDINit2KrZiSDYp9mE2KLZhiDYjCDZitio2K/ZiCDYo9mGINmH2LDYpyDYp9mE2KfYsdiq2KjYp9i3INmC2K8g2KfZhtiq2YfYqiDYtdmE2KfYrdmK2KrZhyDYqNin2YTZgdi52YRcIixcclxuICAgICAgICBnZW5lcmF0ZU5ldzogXCLZgtmFINio2KXZhti02KfYoSDYp9ix2KrYqNin2Lcg2KzYr9mK2K9cIixcclxuICAgIH0sXHJcbiAgICBhcHBvaW50bWVudDp7XHJcbiAgICAgICAgc3RlcHM6IFtcItin2K7YqtmK2KfYsSDYp9mE2YbZhdi3XCIsIFwi2KrYudix2YrZgVwiLCBcItiq2K3ZgtmCXCIsIFwi2KrYo9mD2YrYryDYp9mE2YXYudmE2YjZhdin2KpcIiwgXCLZhNmC2K8g2KfZhtiq2YfZiVwiXSxcclxuICAgICAgICB0YWtlQXBwOiBcItiq2K3Yr9mK2K8g2YXZiNi52K9cIixcclxuICAgICAgICBzdGVwMToge1xyXG4gICAgICAgICAgICBsYWJlbDE6IFwi2LnZhtmI2KfZhiA6IFwiLFxyXG4gICAgICAgICAgICBpbnAxOiBcIti52YbZiNin2YYg2KfZhNiq2LnZitmK2YZcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIxOiBcItin2YTYudmG2YjYp9mGINin2YTZhdix2KfYryDYudix2LbZhyDZhNmH2LDYpyDYp9mE2YXZiNi52K9cIixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhYmVsMjogXCLZiNi12YEgOlwiLFxyXG4gICAgICAgICAgICBpbnAyOiBcItmI2LXZgSDYp9mE2YXZiNi52K9cIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIyOiBcItmF2LnZhNmI2YXYp9iqINil2LbYp9mB2YrYqVwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwzOiBcItmG2YjYuSDYp9mE2KfYs9iq2LTYp9ix2Kk6XCIsXHJcbiAgICAgICAgICAgIGlucDM6IFwi2KfYs9iq2LTYp9ix2Kkg2YHZitiv2YrZiFwiLFxyXG4gICAgICAgICAgICBpbnA0OiBcItin2YTYpdiz2KrYtNin2LHYqSDZgdmKINin2YTZhdmD2KrYqFwiLFxyXG5cclxuICAgICAgICAgICAgbGFiZWw0OiBcIti32KjZitioINin2LPYqti02KfYsdmKOlwiLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYWJlbDU6IFwi2YXZiNmC2LkgOiBcIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwi2KfYs9iq2LTYp9ix2Kkg2LnZhiDYqNi52K8g2KjYp9mE2YHZitiv2YrZiFwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWw2OiBcIiDZhdinINiz2KjYqCDZh9iw2Ycg2KfZhNin2LPYqti02KfYsdipOlwiLFxyXG4gICAgICAgICAgICBtb3RpZjogXCLYs9io2Kgg2KfZhNin2LPYqti02KfYsdipXCIsXHJcbiAgICAgICAgICAgIG5vTW90aWZzOiBcItmE2Kcg2YrZiNis2K8g2LPYqNioINmF2K3Yr9ivINmF2YYg2YLYqNmEINin2YTYt9io2YrYqFwiLFxyXG5cclxuICAgICAgICAgICAgbGFiZWw3OiBcItiq2KfYsdmK2K4g2YjZiNmC2Kog2KfZhNin2LPYqti02KfYsdipOiBcIixcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwMjp7XHJcbiAgICAgICAgICAgIG5ldzogXCLYrNiv2YrYryDYudmE2YkgRG9jdG9saXZl2J9cIixcclxuICAgICAgICAgICAgb2xkOiBcItmE2K/ZiiDYqNin2YTZgdi52YQg2K3Ys9in2KggRG9jdG9saXZlXCIsXHJcbiAgICAgICAgICAgIHNpZ251cDogXCLYs9is2YQg2KfZhNin2YZcIixcclxuICAgICAgICAgICAgc2lnbmluOiBcItiq2LPYrNmK2YQg2KfZhNiv2K7ZiNmEXCIsXHJcbiAgICAgICAgICAgIHRlbGVjb25zdWx0OiBcItin2LPYqti02KfYsdipINi52YYg2KjYudivINio2KfZhNmB2YrYr9mK2YhcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXAzOntcclxuICAgICAgICAgICAgdGl0bGU6XCLZhNmC2K8g2KPYsdiz2YTZhtinINio2LHZitiv2YvYpyDYpdmE2YPYqtix2YjZhtmK2YvYpyDYpdmE2Ykg2LnZhtmI2KfZhtmDINmE2YTYqtit2YLZgiDZhdmGINi12K3YqSDYrdiz2KfYqNmDXCIsXHJcbiAgICAgICAgICAgIGdlbmVyYXRlOiBcItij2LHYs9mEINio2LHZitiv2YvYpyDYpdmE2YPYqtix2YjZhtmK2YvYpyDYotiu2LFcIixcclxuICAgICAgICAgICAgcmV2aXJpZnk6IFwi2YTZgtivINiq2K3ZgtmC2Kog2YXZhiDYrdiz2KfYqNmKXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwNCA6e1xyXG4gICAgICAgICAgICB0aXRsZTogXCLYqtij2YPZitivINin2YTYp9iz2KrYtNin2LHYqVwiLFxyXG4gICAgICAgICAgICB0ZWxlY29uc3VsdDogXCLYp9iz2KrYtNin2LHYqSDYudmGINio2LnYryDYqNin2YTZgdmK2K/ZitmIXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwi2KrYo9mD2YrYryDYp9mE2YXZiNi52K8gXCIsXHJcbiAgICAgICAgICAgIHJlbWluZDogXCLYqNiq2KPZg9mK2K8g2YfYsNinINin2YTZhdmI2LnYryDZgdil2YbZgyDYqtmI2KfZgdmCINi52YTZiSDYp9it2KrYsdin2YXZhy4g2KrYsNmD2LEg2KXZhNi62KfYoSDZh9iw2Kcg2KfZhNin2KzYqtmF2KfYuSDZgdmKINij2YLYsdioINmI2YLYqiDZhdmF2YPZhiDZgdmKINit2KfZhNipINmI2YLZiNi5INit2K/YqyDYutmK2LEg2YXYqtmI2YLYuVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwNTp7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIiDYqtmFINiq2LPYrNmK2YQg2YXZiNi52K/Zgy5cIixcclxuICAgICAgICAgICAgZ2VyZXI6IFwi2KXYr9in2LHYqSDZhdmI2KfYudmK2K/Zg1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBwcm9maWxQYWdlOiB7XHJcbiAgICAgICAgYWNjZXNzSW5mbzogXCLZhdi52YTZiNmF2KfYqiDYp9mE2YjYtdmI2YQg2YTZhNi52YrYp9iv2KlcIixcclxuICAgICAgICBzZWNyZXRhcmlhdDogXCLYp9mE2KfYqti12KfZhCDYqNin2YTYs9mD2LHYqtin2LHZitipXCIsXHJcbiAgICAgICAgYWJvdXQ6IFwi2LnZhtmKXCIsXHJcbiAgICAgICAgZ2VuZXJhbDogXCLYqtmC2K/ZitmFINi52KfZhVwiLFxyXG4gICAgICAgIHNwZWNpYWxpdGU6IFwi2KrYrti12LVcIixcclxuICAgICAgICBwYXJjb3VyOiBcItmF2LPYp9ixXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb25QQXJjOiBcItmI2LXZgSDZhdiz2KfYsSDYp9mE2LfYqNmK2KhcIixcclxuICAgICAgICBmb3JtYXRpb246IFwi2KrZhdix2YrZhlwiLFxyXG4gICAgICAgIGF3YXJkOiBcItin2YTYrNmI2KfYptiyXCIsXHJcbiAgICAgICAgZXhwZXJpZW5jZTogXCLYrtio2LHYqVwiLFxyXG4gICAgICAgIHNlZURpc3BvOiBcIti52LHYtiDYp9mE2YHYqtix2KfYqiDYp9mE2YXYqtin2K3YqVwiLFxyXG4gICAgICAgIHNlZU1hcDogXCLYpdi42YfYp9ixINin2YTZhdmI2YLYuSDYudmE2Ykg2KfZhNiu2LHZiti32KlcIixcclxuICAgICAgICB0YXJpZjogXCLYp9mE2KPYs9i52KfYsVwiLFxyXG4gICAgICAgIGRldGFpbHM6IFwi2KrZgdin2LXZitmEINin2YTYs9i52LEg2YTZg9mEINmG2YjYuSDZhdmGINin2YTYp9iz2KrYtNin2LHYqS5cIixcclxuICAgICAgICBob25vcmU6IFwi2YrYqtmFINil2LHYs9in2YQg2YfYsNmHINin2YTYsdiz2YjZhSDYpdmE2YrZgyDZhNmE2K3YtdmI2YQg2LnZhNmJINmF2LnZhNmI2YXYp9iqINmB2YLYtyDZhdmGINmC2KjZhCDYp9mE2LfYqNmK2KguINmC2K8g2KrYrtiq2YTZgSDYp9i52KrZhdin2K/Zi9inINi52YTZiSDZhtmI2Lkg2KfZhNi52YTYp9isINin2YTYsNmKINmK2KrZhSDYpdis2LHYp9ik2Ycg2KPYrtmK2LHZi9inINmB2Yog2KfZhNi52YrYp9iv2Kkg2Iwg2YjYudiv2K8g2KfZhNin2LPYqti02KfYsdin2Kog2YjYp9mE2KXYrNix2KfYodin2Kog2KfZhNil2LbYp9mB2YrYqSDYp9mE2YXYt9mE2YjYqNipLiDZgdmKINit2KfZhNipINiq2KzYp9mI2LIg2KfZhNij2LPYudin2LEg2Iwg2YrYrNioINi52YTZiSDYp9mE2YXZhdin2LHYsyDYqtit2LDZitixINin2YTZhdix2YrYtiDZhdiz2KjZgtmL2KcuXCIsXHJcbiAgICAgICAgc2VydmljZTogXCLYp9mE2K7Yr9mF2KkgLSDYstmK2KfYsdipXCIsXHJcbiAgICAgICAgcHJpeDogXCLYs9i52LFcIixcclxuICAgICAgICBob3JhaXJlOiBcItis2K/ZiNmEINmF2YjYp9i52YrYr1wiLFxyXG4gICAgICAgIGRldGFpbHNIZXVyZXM6IFwi2KrZgdi12YrZhCDYs9in2LnYp9iqINin2YTYudmF2YQg2YTZg9mEINmK2YjZhSDZhdmGINij2YrYp9mFINin2YTYo9iz2KjZiNi5LlwiLFxyXG4gICAgICAgIGNvbmZpcm06XCLYo9mD2K9cIixcclxuICAgICAgICBjYW5jZWw6IFwi2KXZhNi62KfYoVwiLFxyXG4gICAgICAgIHRpbWVTZWxlY3RlZDogXCLYqtio2K/YoyDYp9mE2YHYqtix2Kkg2KfZhNiy2YXZhtmK2Kkg2KfZhNmF2K3Yr9iv2Kkg2YTZhNiq2LTYp9mI2LEgXCIsXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9maWxlOiB7XHJcbiAgICAgICAgaGVhZGluZzogXCJQcm9maWxlIGVkaXRpbmdcIixcclxuICAgICAgICBub21MYWJlbDogXCJuYW1lXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXIxOiBcImNoYW5nZSB5b3VyIG5hbWVcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjI6IFwiY2hhbmdlIHlvdXIgZmlyc3QgbmFtZVwiLFxyXG4gICAgICAgIHByZW5vbUxhYmVsOiBcIkZpcnN0IG5hbWVcIixcclxuICAgICAgICBlbWFpbExhYmVsOiBcIkUtbWFpbCBhZHJlc3NcIixcclxuICAgICAgICBwaG9uZUxhYmVsOlwiUGhvbmUgbnVtYmVyXCIsXHJcbiAgICAgICAgY29uZmlybV9wYXNzd29yZDpcIkNvbmZpcm1lciBsZSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICBuZXdfcGFzc3dvcmQ6XCIgTmV3IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgb2xkX3Bhc3N3b3JkOiBcIlBhc3N3b3JkIFwiXHJcblxyXG4gICAgfSxcclxuICAgIGhvbWU6IHtcclxuICAgICAgICB0aXRsZTogXCJET0NUT0xJVkUgLSBPbmxpbmUgZG9jdG9yJ3MgYXBwb2ludG1lbnRcIixcclxuICAgICAgICBoZWFkaW5nMTogXCJTZWFyY2ggRG9jdG9yLCBNYWtlIGFuIEFwcG9pbnRtZW50XCIsXHJcbiAgICAgICAgaGVhZGluZzI6IFwiRGlzY292ZXIgdGhlIGJlc3QgZG9jdG9ycywgY2xpbmljICYgaG9zcGl0YWwgdGhlIGNpdHkgbmVhcmVzdCB0byB5b3UuXCIsXHJcbiAgICAgICAgc2VhcmNoOntcclxuICAgICAgICAgICAgcmVjaGVyY2hlbGFiZWw6IFwiRG9jdG9yLCBlc3RhYmxpc2htZW50LCBzcGVjaWFsdHkgLi4uXCIsXHJcbiAgICAgICAgICAgIG5vT3B0aW9uOiBcIk5vIHJlc3VsdHMgbWF0Y2hcIixcclxuICAgICAgICAgICAgbm9PcHRpb24yOiBcIlR5cGUgdG8gZ2V0IG1vcmUgcmVzdWx0XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IFwiTG9hZGluZyBkb2N0b3JzIG9yIHNpbWlsYXIgc3BlY2lhbHRpZXNcIixcclxuICAgICAgICAgICAgY2l0eWxhYmVsOiBcIldoZXJlID9cIixcclxuICAgICAgICAgICAgY2l0eUxvYWRpbmc6IFwiTG9hZGluZyBzaW1pbGFyIGNpdHlcIlxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFib3V0IDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcImFib3V0IHVzXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IFwiVGhlIGlkZWEgYmVoaW5kIERvY3RvbGl2ZSB3YXMgdG8gYnVpbGQgYSBsb25nIHRlcm0gY29uY2VwdCB3aGljaCBhaW1zIHRvIGltcHJvdmUgcGVvcGxl4oCZcyBkYWlseSBsaXZlcy4gSW4gMjAyMSwgdHdvIHBhcnRuZXJzIGNob3NlIHRvIHRhY2tsZSB0aGUgc3ViamVjdCBvZiBtZWRpY2FsIGFwcG9pbnRtZW50cy4gIEl0IHF1aWNrbHkgYmVjYW1lIGNsZWFyIHRoYXQgYm90aCBwYXRpZW50cyBhbmQgcHJhY3RpdGlvbmVycyB3ZXJlIHJlc3BvbnNpdmUgdG8gdGhpcyBpbm5vdmF0aXZlIHRvb2wuIFwiLFxyXG4gICAgICAgICAgICBidXR0b246IFwiXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwiQXBwb2ludG1lbnRzIDI0LzdcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTI6XCJBdXRvbWF0aXF1ZSByZW1pbmRlclwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcImhpc3RvcnlcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNraXAgOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiU2tpcCB0aGUgd2FpdGluZyByb29tLlwiLFxyXG4gICAgICAgICAgICBzdWJIZWFkaW5nOiBcIkNvbnN1bHQgd2l0aCBhIGRvY3RvclwiLFxyXG4gICAgICAgICAgICBidXR0b246IFwiQ29uc3VsdCBub3dcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTE6XCJTaW1wbGUgYW5kIGZpeGVkIGZlZXNcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTI6XCJWZXJpZmllZCBkb2N0b3JzIHJlc3BvbmQgaW4gNSBtaW51dGVzXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0zOlwiMTAwJSBQcml2YXRlIGFuZCBjb25maWRlbnRpYWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXBzOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiVGFrZSBhbiBhcHBvaW50bWVudCBpbiBhIGZldyBjbGlja3MuXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwiRmluZCB5b3VyIGhlYWx0aGNhcmUgcHJvZmVzc2lvbmFsXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xMjpcIjI1LDAwMCsgcHJhY3RpdGlvbmVycyBmb3IgNzAgc3BlY2lhbHRpZXMuIEZpbHRlciBieSBzcGVjaWFsaXR5LCBhcmVhIG9mIGV4cGVydGlzZSwgZ2VvbG9jYXRpb24sIGFuZCBtb3JlLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMjpcIlNlbGVjdCB5b3VyIHRpbWVcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTIyOlwiU2VsZWN0IHlvdXIgc2xvdCBpbiB0aGUgcmVhbCB0aW1lIGFnZW5kYSBvZiB0aGUgcHJhY3RpdGlvbmVyLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcIkJvb2sgeW91ciBhcHBvaW50bWVudCBpbiAxIG1pbnV0ZSFcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTMyOlwiMjQvNyBhY2Nlc3MgdG8geW91ciBhcHBvaW50bWVudHMgZnJvbSBhbGwgeW91ciBkZXZpY2VzLiBDb25maXJtYXRpb24gYW5kIHJlbWluZGVyIHZpYSBlbWFpbCBhbmQgU01TLlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZG93bG9hZDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcIkRpc2NvdmVyIHRoZSBkb2N0b2xpdmUgbW9iaWxlIGFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmc6IFwiRm9yIGVhc2llciBhcHBvaW50bWVudHMgbWFuYWdlbWVudC5cIixcclxuICAgICAgICAgICAgYXBwOlwiR2V0IGl0IG5vdyBvbiBBcHAgU3RvcmVcIixcclxuICAgICAgICAgICAgcGxheTogXCJHZXQgaXQgbm93IG9uIFBsYXkgU3RvcmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcnZpY2VzIDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcIlNlcnZpY2VzXCIsXHJcbiAgICAgICAgICAgIGl0ZW0xaGVhZGluZzogXCJDb25zdWx0IGRvY3RvcnMgb25saW5lXCIsXHJcbiAgICAgICAgICAgIGl0ZW0xYm9keTpcIlRhbGsgd2l0aCBhIGRvY3RvciB1c2luZyBvdXIgaGlnaGx5IHNlY3VyZSB2aWRlbyBjYWxsLiBPdXIgdmlkZW8gY2FsbCBzZXJ2aWNlIGhlbHBzIHlvdSB0byBzcGVhayBhYm91dCB5b3VyIGhlYWx0aCBpc3N1ZXMgd2l0aCBhIGRvY3RvciBvbiBhIGZhY2UgdG8gZmFjZSBsaXZlIGludGVyYWN0aW9uLlwiLFxyXG4gICAgICAgICAgICBpdGVtMmhlYWRpbmc6IFwiU3RvcmUgaGVhbHRoIHJlY29yZHNcIixcclxuICAgICAgICAgICAgaXRlbTJib2R5OlwiYWxsIGRvY3VtZW50cyBzaGFyZWQgd2l0aCBvciBieSB5b3VyIGRvY3RvcnMgZHVyaW5nIGEgdGVsZWNvbnN1bHRhdGlvbiB3aWxsIGJlIHJlY29yZGVkIG9uIHRoZSBwbGF0Zm9ybSB3aXRoIGEgc2luZ2xlIGFjY2VzcyBieSB5b3UgYW5kIHRoZSBwcmFjdGl0aW9uZXIuXCIsXHJcbiAgICAgICAgICAgIGl0ZW0zaGVhZGluZzogXCJBcHBvaW50bWVudHMgbWFuYWdlbWVudFwiLFxyXG4gICAgICAgICAgICBpdGVtM2JvZHk6XCJhZnRlciBjb25maXJtaW5nIGFuIGFwcG9pbnRtZW50LCB5b3Ugd2lsbCBiZSBhYmxlIHRvIG1vdmUgaXQgb3IgY2FuY2VsIGl0IGF0IGFueSB0aW1lLiB5b3UgYWxzbyBoYXZlIHRoZSBwb3NzaWJpbGl0eSB0byBtYW5hZ2UgeW91ciBvbGQgYXBwb2ludG1lbnRzLlwiLFxyXG4gICAgICAgICAgICBpdGVtNGhlYWRpbmc6IFwiRmluZCBkb2N0b3JcIixcclxuICAgICAgICAgICAgaXRlbTRib2R5OlwiV2l0aCB0aGUgbW9zdCBkaXZlcnNlIG5hdGlvbndpZGUgcHJhY3RpY2UsIGl04oCZcyBlYXN5IHRvIHNlbGVjdCBhIG1lZGljYWwgb3IgbWVudGFsIGhlYWx0aCBwcm92aWRlciB3aXRoIGEgYmFja2dyb3VuZCBhbmQgc3BlY2lhbHR5IHRoYXQgYXJlIGEgcGVyZmVjdCBmaXQgZm9yIHlvdS5cIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIG1lZGVjaW46IFwiQXJlIHlvdSBhIGhlYWx0aGNhcmUgcHJvZmVzc2lvbmFsP1wiLFxyXG4gICAgICAgIGNvbnRhY3Q6IFwiQ29udGFjdCB1c1wiLFxyXG4gICAgICAgIGNvbmVjdDogXCJsb2dpblwiLFxyXG4gICAgICAgIHJkdjogXCJNYW5hZ2UgbXkgYXBwb2ludG1lbnRzXCJcclxuICAgIH0sXHJcbiAgICBwcm9uYXZiYXI6IHtcclxuICAgICAgICBjb250YWN0OiBcIkNvbnRhY3Rlei1ub3VzXCIsXHJcbiAgICAgICAgZG9jdW1lbnQ6IFwiRG9jdW1lbnRzXCIsXHJcbiAgICAgICAgcmR2OiBcIlJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgZHJvcERvd24xOiBcIk15IGFjY291bnRcIixcclxuICAgICAgICBkcm9wRG93bjI6IFwibG9nIG91dFwiLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIHBhcnRuZXI6IFwiQmVjb21lIGEgcGFydG5lciBkb2N0b3JcIixcclxuICAgICAgICBzaWduaW46IFwiUmVnaXN0ZXIgYXMgYSBwYXRpZW50XCIsXHJcbiAgICAgICAgZmFxOiBcIlF1ZXN0aW9ucyA/XCIsXHJcbiAgICAgICAgY29udGFjdDogXCJvbnRhY3QgdXMgXCIsXHJcbiAgICAgICAgYWRyZXNzOiBcIk1vcm9jY28gLSBDYXNhYmxhbmNhXCIsXHJcbiAgICAgICAgcG9saXRpcXVlOiBcIlByaXZhY3kgUG9saWN5XCIsXHJcbiAgICAgICAgY29uZGl0aW9uOiBcIlRlcm1zIG9mIHVzZVwiLFxyXG4gICAgICAgIGNvbmRpdGlvbjI6IFwiQ29uZGl0aW9ucyBkJ3V0aWxpc2F0aW9uIGR1IHNpdGUgRG9jdG9saXZlXCIsXHJcbiAgICAgICAgcmVnbGVfZGVfcjpcIlLDqGdsZXMgZGUgcsOpZsOpcmVuY2VtZW50XCIsXHJcbiAgICAgICAgbWVudGlvbnNfbGVnOlwiTWVudGlvbnMgbMOpZ2FsZXNcIixcclxuICAgICAgICBtZW50aW9uc19sZWc6XCJNZW50aW9ucyBsw6lnYWxlc1wiLFxyXG4gICAgICAgIENvb2tpZXM6XCJDb29raWVzXCIsXHJcbiAgICAgICAgcHJvdGVjdF9kb25uZXNfcGVyc286XCJwcm90ZWN0aW9uIGRlcyBkb25uw6llcyBwZXJzb25uZWxsZXNcIixcclxuICAgICAgICBnZXN0aW9uX2RlX2Nvb2tpZXM6XCJHZXN0aW9uIGRlIGNvb2tpZXMgZXQgY29uc2VudGVtZW50XCIsXHJcbiAgICB9LFxyXG4gICAgbmV3OntcclxuICAgICAgICBhbHJlYWR5SGF2ZTogXCJJIGFscmVhZHkgaGF2ZSBhIERvY3RvbGl2ZSBhY2NvdW50XCIsXHJcbiAgICAgICAgbmV3SW46IFwiTmV3IHRvIERvY3RvbGl2ZT9cIixcclxuICAgICAgICBzaWduaW46IFwibG9naW5cIixcclxuICAgICAgICBzaWdudXA6IFwiUmVnaXN0ZXJcIixcclxuICAgICAgICBhdXRoOlwiQXV0aGVudGljYXRpb25cIixcclxuICAgICAgICBlbWFpbExhYmVsOiBcIkUtbWFpbCBhZHJlc3NcIixcclxuICAgICAgICBwYXNzTGFiZWw6IFwiUGFzc3dvcmRcIixcclxuICAgICAgICBvbGRwYXNzTGFiZWw6IFwiT2xkIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgY29uZmlybXBhc3NMYWJlbDogXCJDb25maXJtIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgZXJyb3I6IFwiSW5jb3JyZWN0IHBhc3N3b3JkIG9yIGVtYWlsIGFkZHJlc3MhXCIsXHJcbiAgICAgICAgbGFiZWxOb206IFwibGFzdCBuYW1lXCIsXHJcbiAgICAgICAgbGFiZWxQcmVub206IFwiZmlzcnQgbmFtZVwiLFxyXG4gICAgICAgIHBob25lTGFiZWw6IFwiUGhvbmUgbnVtYmVyXCIsXHJcbiAgICAgICAgcGhvbmVFcnJvcjpcIkVtYWlsIGFkZHJlc3MgbXVzdCBiZSBpbiBzdGFuZGFyZCBmb3JtYXRcIixcclxuICAgICAgICBsYWJlbEVtYWlsQzogXCJDb25maXJtIGVtYWlsIGFkZHJlc3NcIixcclxuICAgICAgICBsYWJlbEVtYWlsQ1A6IFwiQ29uZmlybSBlbWFpbCBhZGRyZXNzXCIsXHJcbiAgICAgICAgZXJyb3JTaWdudXA6IFwiVGhlIGluZm9ybWF0aW9uIGlzIGluY29ycmVjdFwiLFxyXG4gICAgICAgIHN1Y2Nlc3NTaWdudXA6IFwiUmVxdWVzdCBzZW50IHN1Y2Nlc3NmdWxseSBjaGVjayB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gY29uZmlybSB5b3VyIGFjY291bnRcIlxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHJlcG9ydDp7XHJcbiAgICAgICAgc2lnbnVwOiBcIkFkZFwiLFxyXG4gICAgICAgIGxhYmVsTm9tOiBcIlR5cGVcIixcclxuICAgICAgICBsYWJlbFByZW5vbTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIGxhYmVsRW5kOiBcIkFwcG9pbnRlbWVudCBoYXZlIGJlZW4gZG9uZSA/XCIsXHJcbiAgICAgICAgZXJyb3JTaWdudXA6IFwiQmFkIHJlcXVlc3RcIixcclxuICAgICAgICBzdWNjZXNzU2lnbnVwOiBcIllvdXIgcmVxdWVzdCBoYXZlIHN1Y2Nlc3NmdWxseSBhZGRlZCBhIHNvb24gcmVzcG9uc2Ugd2lsbCBiZSBzZW50IHRvIHlvdXIgYWRyZXNzIG1haWwgYWZ0ZXIgaGFuZGxpbmcgLi4uXCJcclxuICAgIH0sXHJcbiAgICBkb2N1bWVudHM6IHtcclxuICAgICAgICBhdWN1biA6XCJObyBkb2N1bWVudCBmb3VuZFwiLFxyXG4gICAgICAgIGRvbnRoYXZlOiBcIllvdSBoYXZlIG5vIHNoYXJlZCBkb2N1bWVudFwiLFxyXG4gICAgICAgIHNoYXJlZEJ5OiBcIkRvY3VtZW50IHNoYXJlIGJ5IDogXCIsXHJcbiAgICAgICAgc2hhcmVkV2l0aDogXCJEb2N1bWVudCB5b3UgaGF2ZSBzaGFyZWQgd2l0aDogXCIsXHJcbiAgICB9LFxyXG4gICAgYXBwb2ludG1lbnRzOiB7XHJcbiAgICAgICAgbm90QXV0aDogXCJZb3UgYXJlIG5vdCBhdXRoZW50aWNhdGVkIC4uLlwiLFxyXG4gICAgICAgIGFjY2VzczogXCJhY2Nlc3MgbXkgYWNjb3VudFwiLFxyXG4gICAgICAgIG5vQXBwOiBcIllvdSBkb24ndCBoYXZlIGFuIGFwcG9pbnRtZW50IHlldFwiLFxyXG4gICAgICAgIG15YXBwOiBcIk15IEFwcG9pbnRtZW50c1wiLFxyXG4gICAgICAgIG15SGlzdG9yeTogXCJNeSBhcHBvaW50bWVudCBoaXN0b3J5XCIsXHJcbiAgICAgICAgaGlzdG9yeTogXCJDb25zdWx0YXRpb24gaGlzdG9yeVwiLFxyXG4gICAgICAgIG5leHRBcHA6IFwiIE15IG5leHQgYXBwb2ludG1lbnRzXCIsXHJcbiAgICAgICAgdGFrZWFwcDogXCJNYWtlIGFuIGFwcG9pbnRtZW50XCIsXHJcbiAgICAgICAgY2FyZEFwcHM6IHtcclxuICAgICAgICAgICAgbGluayA6XCJTZWUgbW9yZSBkZXRhaWxzXCIgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZEFwcDoge1xyXG4gICAgICAgICAgICBsaW5rIDpcIlNlZSBtb3JlIGRldGFpbHNcIixcclxuICAgICAgICAgICAgYWNjZXNzSW5mb3M6IFwiQWNjZXNzIEluZm9cIixcclxuICAgICAgICAgICAgbm90U3BlY2lmaWVkOiBcIlRoZSBkb2N0b3IgaGFzIG5vdCB5ZXQgc3BlY2lmaWVkIHRoaXMgYWNjZXNzIGluZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgICAgIHNlY3JldGFyaWF0OiBcIkNvbnRhY3Qgb2YgdGhlIHNlY3JldGFyaWF0XCIsXHJcbiAgICAgICAgICAgIGNsaWNrOiBcIlBsZWFzZSBjbGljayBvbiB0aGUgYnV0dG9uIHRvIGFjY2VzcyB0aGUgdGVsZWNvbnN1bHRhdGlvbi4gWW91ciBkb2N0b3Igd2lsbCBhdXRvbWF0aWNhbGx5IG5vdGlmeSB5b3Ugb2YgeW91ciBwcmVzZW5jZS5cIixcclxuICAgICAgICAgICAgcmVqb2luZHJlOiBcIkpvaW4gdGhlIGNvbnN1bHRhdGlvblwiLFxyXG4gICAgICAgICAgICBkZXBsYWNlcjogXCJzaGlmdFwiLFxyXG4gICAgICAgICAgICBhbm51bGVyOiBcIiBDYW5jZWwgYXBwb2ludG1lbnQgXCIsXHJcbiAgICAgICAgICAgIHJldG91cjogXCJSZXR1cm5cIixcclxuICAgICAgICAgICAgY29uZmlybUNhbmNlbDogXCJDb25maXJtYXRpb24gb2YgYXBwb2ludG1lbnQgY2FuY2VsbGF0aW9uXCIsXHJcbiAgICAgICAgICAgIHdhbnRZb3U6IFwiV291bGQgeW91IGxpa2UgdG8gY2FuY2VsIHRoZSBhcHBvaW50bWVudCBvZlwiLFxyXG4gICAgICAgICAgICB3aXRoOiBcIndpdGggXCIsXHJcbiAgICAgICAgICAgIGRvY0F2YWk6IFwiUGh5c2ljaWFuIGF2YWlsYWJpbGl0eVwiLFxyXG4gICAgICAgICAgICBzZWxlY1R0aW1lOiAgXCJUaW1lIHNlbGVjdGVkIGZvciB0aGUgY29uc3VsdGF0aW9uIGlzXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwiQ29uZmlybSB0aGUgbmV3IHRpbWUgc2xvdFwiLFxyXG4gICAgICAgICAgICBzZWVJbmZvc1NoYXJlZDogXCJTZWUgdGhlIGluZm9ybWF0aW9uIHNoYXJlZCBpbiB0aGUgY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG4gICAgcmVzdWx0UmVzZWFyY2g6IHtcclxuICAgICAgICBub1Jlc2VhdWx0OiBcIlNvcnJ5LCB3ZSBjb3VsZG4ndCBmaW5kIGEgcHJvZmVzc2lvbmFsIGZvciB5b3VyIHNlYXJjaCAuLi4gXCIsXHJcbiAgICAgICAgdHJ5UmVzZWF1bHQ6IFwiVHJ5IHdpdGggb3RoZXIgc2VhcmNoIGNyaXRlcmlhLiBcIixcclxuICAgICAgICB3aWRnZXQ6IHtcclxuICAgICAgICAgICAgYXZhaWxhYmxlVmlkZW86IFwiQ29uc3VsdGF0aW9uIHZpZGVvIGF2YWlsYWJsZVwiLFxyXG4gICAgICAgICAgICBub3RTcGVjaWZpZWQ6IFwiVGhlIGRvY3RvciBoYXMgbm90IHlldCBzcGVjaWZpZWQgdGhpcyBhY2Nlc3MgaW5mb3JtYXRpb25cIixcclxuICAgICAgICAgICAgc2VlUHJvZmlsZTogXCJTZWUgcHJvZmlsZVwiLFxyXG4gICAgICAgICAgICBzZWVEaXNwbzogXCJDaGVjayBhdmFpbGFiaWxpdHlcIixcclxuICAgICAgICAgICAgZGlzcG86XCJkb2N0b3IncyBhdmFpbGFiaWxpdHlcIixcclxuICAgICAgICAgICAgdGltZVNlbGVjdGVkOiBcIlRpbWUgc2xvdCBzZWxlY3RlZCBmb3IgY29uc3VsdGF0aW9uIHN0YXJ0cyBhdFwiLFxyXG4gICAgICAgICAgICBjYW5jZWw6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwiQ29uZmlybSBhbiBhcHBvaW50bWVudFwiLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFsaWRhdGlvbjp7XHJcbiAgICAgICAgY29uZmlybTogXCJZb3VyIGFjY291bnQgaXMgdmFsaWRhdGVkXCIsXHJcbiAgICAgICAgZXhwaXJlZDogXCJZb3VyIGFjY291bnQgaXMgbm90IHlldCB2YWxpZGF0ZWQsIGl0IHNlZW1zIHRoYXQgdGhpcyBsaW5rIGhhcyBhbHJlYWR5IGV4cGlyZWRcIixcclxuICAgICAgICBnZW5lcmF0ZU5ldzogXCJHZW5lcmF0ZSBhIG5ldyBsaW5rXCIsXHJcbiAgICB9LFxyXG4gICAgYXBwb2ludG1lbnQ6e1xyXG4gICAgICAgIHN0ZXBzOiBbXCJDaG9pY2Ugb2YgcGF0dGVyblwiLCBcIklkZW50aWZpY2F0aW9uXCIsIFwiVmVyaWZpY2F0aW9uXCIsIFwiSW5mb3JtYXRpb24gY29uZmlybWF0aW9uXCIsIFwiSXQncyBvdmVyXCJdLFxyXG4gICAgICAgIHRha2VBcHA6IFwiTWFrZSBhbiBhcHBvaW50bWVudFwiLFxyXG4gICAgICAgIHN0ZXAxOiB7XHJcbiAgICAgICAgICAgIGxhYmVsMTogXCJUaXRsZTpcIixcclxuICAgICAgICAgICAgaW5wMTogXCJBcHBvaW50bWVudCB0aXRsZVwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjE6IFwiVGl0bGUgdG8gZGlzcGxheSBmb3IgdGhpcyBhcHBvaW50bWVudFwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwyOiBcIkRlc2NyaXB0aW9uIDpcIixcclxuICAgICAgICAgICAgaW5wMjogXCJkZXNjcmlwdGlvbiBkdSByZW5kZXotdm91c1wiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjI6IFwiQWRkaXRpb25hbCBpbmZvcm1hdGlvblwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwzOiBcIlR5cGUgb2YgY29uc3VsdGF0aW9uOlwiLFxyXG4gICAgICAgICAgICBpbnAzOiBcIlZpZGVvIGNvbnN1bHRhdGlvblwiLFxyXG4gICAgICAgICAgICBpbnA0OiBcIkNvbnN1bHRhdGlvbiBpbiBvZmZpY2UgcHJhY3RpY2VzIG9yIGluIGhvc3BpdGFsXCIsXHJcblxyXG4gICAgICAgICAgICBsYWJlbDQ6IFwiQ29uc3VsdGFudCBEb2N0b3I6XCIsXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhYmVsNTogXCJMb2NhdGlvbiA6IFwiLFxyXG4gICAgICAgICAgICB0ZWxlY29uc3VsdDogXCJSZW1vdGUgdmlkZW8gY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYWJlbDY6IFwiIFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhpcyBjb25zdWx0YXRpb246XCIsXHJcbiAgICAgICAgICAgIG1vdGlmOiBcIlJlYXNvbiBmb3IgY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIG5vTW90aWZzOiBcIk5vIHJlYXNvbiBzcGVjaWZpZWQgYnkgZG9jdG9yXCIsXHJcblxyXG4gICAgICAgICAgICBsYWJlbDc6IFwiRGF0ZSBhbmQgdGltZSBvZiBjb25zdWx0YXRpb246XCIsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDI6e1xyXG4gICAgICAgICAgICBuZXc6IFwiTmV3IHRvIERvY3RvbGl2ZSA/XCIsXHJcbiAgICAgICAgICAgIG9sZDogXCJKYWxyZWFkeSBoYXZlIGEgRG9jdG9saXZlIGFjY291bnRcIixcclxuICAgICAgICAgICAgc2lnbnVwOiBcIlJlZ2lzdGVyIG5vd1wiLFxyXG4gICAgICAgICAgICBzaWduaW46IFwibG9nIGluXCIsXHJcbiAgICAgICAgICAgIHRlbGVjb25zdWx0OiBcIlJlbW90ZSB2aWRlbyBjb25zdWx0YXRpb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXAzOntcclxuICAgICAgICAgICAgdGl0bGU6XCIgV2UgaGF2ZSBzZW50IGFuIGVtYWlsIHRvIHlvdXIgYWRkcmVzcyB0byB2YWxpZGF0ZSB5b3VyIGFjY291bnRcIixcclxuICAgICAgICAgICAgZ2VuZXJhdGU6IFwiU2VuZCBhbm90aGVyIGVtYWlsXCIsXHJcbiAgICAgICAgICAgIHJldmlyaWZ5OiBcIkkgdmVyaWZpZWQgbXkgYWNjb3VudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDQgOntcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uIG9mIHRoZSBjb25zdWx0YXRpb25cIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwiUmVtb3RlIHZpZGVvIGNvbnN1bHRhdGlvblwiLFxyXG4gICAgICAgICAgICBjb25maXJtOiBcIkNvbmZpcm0gdGhpcyBhcHBvaW50bWVudFwiLFxyXG4gICAgICAgICAgICByZW1pbmQ6IFwiIEJ5IGNvbmZpcm1pbmcgdGhpcyBhcHBvaW50bWVudCB5b3UgYWdyZWUgdG8gaG9ub3IgaXQuIFJlbWVtYmVyIHRvIGNhbmNlbCB0aGlzIG1lZXRpbmcgYXMgc29vbiBhcyBwb3NzaWJsZSBpbiB0aGUgZXZlbnQgb2YgYW4gdW5mb3Jlc2VlbiBldmVudFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwNTp7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIllvdXIgYXBwb2ludG1lbnQgd2FzIHJlZ2lzdGVyZWQuXCIsXHJcbiAgICAgICAgICAgIGdlcmVyOiBcIk1hbmFnZSB5b3VyIGFwcG9pbnRtZW50c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBwcm9maWxQYWdlOiB7XHJcbiAgICAgICAgYWNjZXNzSW5mbzogXCJhY2Nlc3MgaW5mb3JtYXRpb25cIixcclxuICAgICAgICBzZWNyZXRhcmlhdDogXCJTZWNyZXRhcmlhdCBjb250YWN0XCIsXHJcbiAgICAgICAgYWJvdXQ6IFwiQWJvdXQgbWVcIixcclxuICAgICAgICBnZW5lcmFsOiBcIkdlbmVyYWwgcHJlc2VudGF0aW9uXCIsXHJcbiAgICAgICAgc3BlY2lhbGl0ZTogXCJTcGVjaWFsdHlcIixcclxuICAgICAgICBwYXJjb3VyOiBcIlBhdGhcIixcclxuICAgICAgICBkZXNjcmlwdGlvblBBcmM6IFwiRGVzY3JpcHRpb24gb2YgdGhlIGRvY3RvcidzIHBhdGhcIixcclxuICAgICAgICBmb3JtYXRpb246IFwiVHJhaW5pbmdcIixcclxuICAgICAgICBhd2FyZDogXCJBd2FyZHNcIixcclxuICAgICAgICBleHBlcmllbmNlOiBcImV4cGVyaWVuY2VcIixcclxuICAgICAgICBzZWVEaXNwbzogXCJTZWUgdGhlIGF2YWlsYWJsZSBzbG90c1wiLFxyXG4gICAgICAgIHNlZU1hcDogXCJTaG93IHBvc2l0aW9uIG9uIG1hcFwiLFxyXG4gICAgICAgIHRhcmlmOiBcIlByaWNlc1wiLFxyXG4gICAgICAgIGRldGFpbHM6IFwiUHJpY2UgZGV0YWlscyBmb3IgZWFjaCB0eXBlIG9mIGNvbnN1bHRhdGlvbi5cIixcclxuICAgICAgICBob25vcmU6IFwiVGhlc2UgZmVlcyBhcmUgY29tbXVuaWNhdGVkIHRvIHlvdSBmb3IgaW5mb3JtYXRpb24gb25seSBieSB0aGUgcHJhY3RpdGlvbmVyLiBUaGV5IG1heSB2YXJ5IGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiB0cmVhdG1lbnQgZmluYWxseSBwZXJmb3JtZWQgaW4gdGhlIG9mZmljZSwgdGhlIG51bWJlciBvZiBjb25zdWx0YXRpb25zIGFuZCB0aGUgYWRkaXRpb25hbCBwcm9jZWR1cmVzIHJlcXVpcmVkLiBJZiB0aGUgcHJpY2VzIGFyZSBleGNlZWRlZCwgdGhlIHByYWN0aXRpb25lciBtdXN0IHdhcm4gdGhlIHBhdGllbnQgYmVmb3JlaGFuZC5cIixcclxuICAgICAgICBzZXJ2aWNlOiBcIlNlcnZpY2UgLSBWaXNpdFwiLFxyXG4gICAgICAgIHByaXg6IFwiUHJpY2VcIixcclxuICAgICAgICBob3JhaXJlOiBcIkhvdXJzXCIsXHJcbiAgICAgICAgZGV0YWlsc0hldXJlczogXCJEZXRhaWwgb2Ygd29ya2luZyBob3VycyBmb3IgZWFjaCBkYXkgb2YgdGhlIHdlZWsuXCIsXHJcbiAgICAgICAgY29uZmlybTpcIkNvbmZpcm1cIixcclxuICAgICAgICBjYW5jZWw6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgdGltZVNlbGVjdGVkOiBcIlRpbWUgc2xvdCBzZWxlY3RlZCBmb3IgY29uc3VsdGF0aW9uIHN0YXJ0cyBhdFwiLFxyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb2ZpbGU6IHtcclxuICAgICAgICBoZWFkaW5nOiBcIsOJZGl0ZXIgdm90cmUgcHJvZmlsXCIsXHJcbiAgICAgICAgbm9tTGFiZWw6IFwiTm9tXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXIxOiBcIm1vZGlmaWVyIHZvdHJlIG5vbVwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyMjogXCJtb2RpZmllciB2b3RyZSBwcsOpbm9tXCIsXHJcbiAgICAgICAgcHJlbm9tTGFiZWw6IFwiUHLDqW5vbVwiLFxyXG4gICAgICAgIGVtYWlsTGFiZWw6IFwiQWRyZXNzZSBlbWFpbFwiLFxyXG4gICAgICAgIHBob25lTGFiZWw6XCJOdW3DqXJvIGRlIHTDqWzDqXBob25lXCIsXHJcbiAgICAgICAgY29uZmlybV9wYXNzd29yZDpcIkNvbmZpcm1lciBsZSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICBuZXdfcGFzc3dvcmQ6XCIgTm91dmVhdSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICBvbGRfcGFzc3dvcmQ6IFwiTW90IGRlIHBhc3NlIFwiXHJcblxyXG4gICAgfSxcclxuICAgIGhvbWU6IHtcclxuICAgICAgICB0aXRsZTogXCJET0NUT0xJVkUgLSBSZW5kZXotdm91cyBjaGV6IHVuIG3DqWRlY2luIGVuIGxpZ25lXCIsXHJcbiAgICAgICAgaGVhZGluZzE6IFwiUmVjaGVyY2hlciB1biBtw6lkZWNpbiwgcHJlbmRyZSByZW5kZXotdm91c1wiLFxyXG4gICAgICAgIGhlYWRpbmcyOlwiRMOpY291dnJleiBsZXMgbWVpbGxldXJzIG3DqWRlY2lucywgY2xpbmlxdWVzIGV0IGjDtHBpdGF1eCBkZSBsYSB2aWxsZSBsYSBwbHVzIHByb2NoZSBkZSBjaGV6IHZvdXMuXCIsXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICBzZWFyY2g6e1xyXG4gICAgICAgICAgICByZWNoZXJjaGVsYWJlbDogXCJNw6lkZWNpbiwgw6l0YWJsaXNzZW1lbnQsIHNww6ljaWFsaXTDqeKAplwiLFxyXG4gICAgICAgICAgICBub09wdGlvbjogXCJBdWN1biByw6lzdWx0YXQgbmUgY29ycmVzcG9uZFwiLFxyXG4gICAgICAgICAgICBub09wdGlvbjI6IFwiVGFwZXogcG91ciBvYnRlbmlyIHBsdXMgZGUgcsOpc3VsdGF0XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IFwiQ2hhcmdlbWVudCBkZXMgbcOpZGVjaW4gb3Ugc3DDqWNpYWxpdMOpIHNpbWlsYWlyZVwiLFxyXG4gICAgICAgICAgICBjaXR5bGFiZWw6IFwiT8O5ID9cIixcclxuICAgICAgICAgICAgY2l0eUxvYWRpbmc6IFwiQ2hhcmdlbWVudCBkZXMgdmlsbGVzIHNpbWlsYWlyZVwiXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWJvdXQgOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiw4AgcHJvcG9zIGRlIG5vdXNcIixcclxuICAgICAgICAgICAgYm9keTpcIk5vdXMgc29tbWVzIHVuZSDDqXF1aXBlIHF1aSBhIHByaXMgZW4gY2hhcmdlIGRlIGNvbnRyaWJ1ZXIgw6AgcsOpc291ZHJlIGxlcyBwcm9ibMOobWVzIGF1eHF1ZWxzIG5vdXMgc29tbWVzIGNvbmZyb250w6lzIHF1b3RpZGllbm5lbWVudCBkYW5zIGxlIHNlY3RldXIgZGUgbGEgc2FudMOpIGV0IGRlIGZhY2lsaXRlciBsJ2FjY8OocyBhdXggc29pbnMgZGUgc2FudMOpLkdyw6JjZSDDoCBub3RyZSBwbGF0ZS1mb3JtZSBkZSB0w6lsw6ljb25zdWx0YXRpb24gbcOpZGljYWxlLCBkZXMgbWlsbGllcnMgZGVzIG1hcm9jYWlucyBwb3Vycm9udCBwYXNzZXIgdW5lIGNvbnN1bHRhdGlvbiBtw6lkaWNhbGUsIGRlIHByZW5kcmUgdW4gcmVuZGV6LXZvdXMgcGh5c2lxdWUgb3UgdmlkZW8gZXQgZGUgc3VpdnJlIGxldXIgw6l0YXQgZGUgc2FudMOpIGVuIGxpZ25lLkRlIHBsdXMsIGxlcyBwcm9mZXNzaW9ubmVscyBkZSBsYSBzYW50w6kgYXVyb250IHVuZSBtZWlsbGV1cmUgYWx0ZXJuYXRpdmUgYXUgdHJhdmFpbCBkZSBzZWNyw6l0YXJpYXQgZXQgdW4gYm9uIHN5c3TDqG1lIGRlIGdlc3Rpb24gZGVzIHJlbmRlei12b3VzLlwiLFxyXG4gICAgICAgICAgICBidXR0b246IFwiXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwiUmVuZGV6LXZvdXMgMjQvN1wiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMjpcIlJhcHBlbHMgYXV0b21hdGlxdWVzXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0zOlwiSGlzdG9yaXF1ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2tpcCA6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCLDiXZpdGVyIGxhIHNhbGxlIGQnYXR0ZW50ZS5cIixcclxuICAgICAgICAgICAgc3ViSGVhZGluZzogXCJDb25zdWx0ZXIgdW4gbcOpZGVjaW5cIixcclxuICAgICAgICAgICAgYnV0dG9uOiBcIlByZW5kcmUgdW4gcmVuZGV6LXZvdXNcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTE6XCJGcmFpcyBzaW1wbGVzIGV0IGZpeGVzXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0yOlwiTcOpZGVjaW5zIHbDqXJpZmnDqXMgcsOpcG9uZGVudCBlbiA1IG1pbnV0ZXNcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTM6XCIxMDAlIHByaXbDqSBldCBjb25maWRlbnRpZWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXBzOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiUHJlbmV6IHJlbmRlei12b3VzIGVuIHF1ZWxxdWVzIGNsaWNzLlwiLFxyXG4gICAgICAgICAgICBzdWJIZWFkaW5nOiBcIkNvbnN1bHRlciB1biBtw6lkZWNpblwiLFxyXG4gICAgICAgICAgICBidXR0b246IFwiUHJlbmRyZSB1biByZW5kZXotdm91c1wiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMTpcIlRyb3V2ZXogdm90cmUgcHJvZmVzc2lvbm5lbCBkZSBzYW50w6lcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTEyOlwiMjUgMDAwKyBwcmF0aWNpZW5zIHBvdXIgNzAgc3DDqWNpYWxpdMOpcy4gRmlsdHJlciBwYXIgc3DDqWNpYWxpdMOpLCBkb21haW5lIGQnZXhwZXJ0aXNlLCBnw6lvbG9jYWxpc2F0aW9uLCBldGMuXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0yOlwiQ2hvaXNpc3NleiB2b3RyZSB0ZW1wc1wiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMjI6XCJTw6lsZWN0aW9ubmV6IHZvdHJlIGNyw6luZWF1IGRhbnMgbCdhZ2VuZGEgZW4gdGVtcHMgcsOpZWwgZHUgcHJhdGljaWVuLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcIlLDqXNlcnZleiB2b3RyZSByZW5kZXotdm91cyBlbiAxIG1pbnV0ZSFcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTMyOlwiQWNjw6hzIDI0aCAvIDI0IGV0IDdqIC8gNyDDoCB2b3MgcmVuZGV6LXZvdXMgZGVwdWlzIHRvdXMgdm9zIGFwcGFyZWlscy4gQ29uZmlybWF0aW9uIGV0IHJhcHBlbCBwYXIgZS1tYWlsIGV0IFNNUy5cIixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkb3dsb2FkOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiRMOpY291dnJleiBs4oCZYXBwbGljYXRpb24gbW9iaWxlIGRvY3RvbGl2ZVwiLFxyXG4gICAgICAgICAgICBzdWJIZWFkaW5nOiBcIlBvdXIgdW5lIGdlc3Rpb24gZW5jb3JlIHBsdXMgc2ltcGxlIGRlIHZvcyByZW5kZXotdm91cy5cIixcclxuICAgICAgICAgICAgYXBwOlwic3VyIGzigJlBcHAgU3RvcmUgXCIsXHJcbiAgICAgICAgICAgIHBsYXk6IFwic3VyIGxlIHBsYXkgU3RvcmUgXCJcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJ2aWNlcyA6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCJhdSBzZXJ2aWNlIGRlIHZvdHJlIHNhbnTDqVwiLFxyXG4gICAgICAgICAgICBpdGVtMWhlYWRpbmc6IFwiQ29uc3VsdGVyIGRlcyBtw6lkZWNpbnMgZW4gbGlnbmVcIixcclxuICAgICAgICAgICAgaXRlbTFib2R5OlwiUGFybGV6IGF2ZWMgdW4gbcOpZGVjaW4gw6AgbCdhaWRlIGRlIG5vdHJlIGFwcGVsIHZpZMOpbyBoYXV0ZW1lbnQgc8OpY3VyaXPDqS4gTm90cmUgc2VydmljZSBkJ2FwcGVsIHZpZMOpbyB2b3VzIGFpZGUgw6AgcGFybGVyIGRlIHZvcyBwcm9ibMOobWVzIGRlIHNhbnTDqSBhdmVjIHVuIG3DqWRlY2luIGxvcnMgZCd1bmUgaW50ZXJhY3Rpb24gZW4gZGlyZWN0IGZhY2Ugw6AgZmFjZS5cIixcclxuICAgICAgICAgICAgaXRlbTJoZWFkaW5nOiBcIlN0b2NrZXIgdm9zIGRvY3VtZW50cyBtw6lkaWNhbGVcIixcclxuICAgICAgICAgICAgaXRlbTJib2R5OlwiVG91cyBsZXMgZG9jdW1lbnRzIHBhcnRhZ8OpcyBhdmVjIG91IHBhciB2b3MgbcOpZGVjaW5zIGxvcnMgZCd1bmUgdMOpbMOpY29uc3VsdGF0aW9uIHNlcm9udCBlbnJlZ2lzdHLDqXMgc3VyIGxhIHBsYXRlZm9ybWUgYXZlYyB1biBhY2PDqHMgdW5pcXVlIHBhciB2b3VzIGV0IGxlIHByYXRpY2llbi5cIixcclxuICAgICAgICAgICAgaXRlbTNoZWFkaW5nOiBcIkdlc3Rpb24gZGVzIHJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgICAgIGl0ZW0zYm9keTpcIkFwcsOpcyBhdm9pciB2YWxpZGVyIHVuIHJlbmRlei12b3VzLCB2b3VzIGF1cmV6IGxhIHBvc3NpYmlsaXTDqSBkZSBsZSBkw6lwbGFjZXIgb8O5IGJpZW4gbCdhbm51bGVyIMOgIG4naW1wb3J0ZSBxdWVsIG1vbWVudC4gdm91cyBhdmV6IGF1c3NpIGxhIHBvc3NpYmlsaXTDqSBkZSBnw6lyZXIgdm9zIGFuY2llbnMgcmVuZGV6LXZvdXMuXCIsXHJcbiAgICAgICAgICAgIGl0ZW00aGVhZGluZzogXCJUcm91dmVyIHZvdHJlIG3DqWRlY2luXCIsXHJcbiAgICAgICAgICAgIGl0ZW00Ym9keTpcIkF2ZWMgdW4gZ3JhbmQgbm9tYnJlIGRlIHByYXRpZW50IGRpdmVyc2lmacOpZSDDoCBsJ8OpY2hlbGxlIG5hdGlvbmFsZSwgaWwgZXN0IGZhY2lsZSBkZSBzw6lsZWN0aW9ubmVyIHVuIGZvdXJuaXNzZXVyIGRlIHNvaW5zIG3DqWRpY2F1eCBvdSBkZSBzYW50w6kgbWVudGFsZSBhdmVjIHVuZSBleHDDqXJpZW5jZSBldCB1bmUgc3DDqWNpYWxpdMOpIHF1aSB2b3VzIGNvbnZpZW5uZW50IHBhcmZhaXRlbWVudC5cIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIG1lZGVjaW46IFwiVm91cyDDqnRlcyBwcm9mZXNzaW9ubmVsIGRlIHNhbnTDqSA/XCIsXHJcbiAgICAgICAgY29udGFjdDogXCJDb250YWN0ZXotbm91c1wiLFxyXG4gICAgICAgIGNvbmVjdDogXCJTZSBjb25uZWN0ZXJcIixcclxuICAgICAgICByZHY6IFwiR8OpcmVyIG1lcyBSRFZcIlxyXG4gICAgfSxcclxuICAgIHByb25hdmJhcjoge1xyXG4gICAgICAgIGNvbnRhY3Q6IFwiQ29udGFjdGV6LW5vdXNcIixcclxuICAgICAgICBkb2N1bWVudDogXCJEb2N1bWVudHNcIixcclxuICAgICAgICByZHY6IFwiUmVuZGV6LXZvdXNcIixcclxuICAgICAgICBkcm9wRG93bjE6IFwiTW9uIGNvbXB0ZVwiLFxyXG4gICAgICAgIGRyb3BEb3duMjogXCJTZSBkw6ljb25uZWN0ZXJcIixcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgICBwYXJ0bmVyOiBcIkRldmVuaXIgTcOpZGVjaW4gcGFydGVuYWlyZVwiLFxyXG4gICAgICAgIHNpZ25pbjogXCJTJ2luc2NyaXJlIGVuIHRhbnQgcXVlIHBhdGllbnRcIixcclxuICAgICAgICBmYXE6IFwiRGVzIHF1ZXN0aW9ucyA/XCIsXHJcbiAgICAgICAgY29udGFjdDogXCJOb3VzIENvbnRhY3RlciBcIixcclxuICAgICAgICBhZHJlc3M6IFwiTWFyb2MgLSBDYXNhYmxhbmNhXCIsXHJcbiAgICAgICAgcG9saXRpcXVlOiBcIlBvbGl0aXF1ZSBkZSBjb25maWRlbnRpYWxpdMOpXCIsXHJcbiAgICAgICAgY29uZGl0aW9uOiBcIkNvbmRpdGlvbnMgZCd1dGlsaXNhdGlvblwiLFxyXG4gICAgICAgIGNvbmRpdGlvbjI6IFwiQ29uZGl0aW9ucyBkJ3V0aWxpc2F0aW9uIGR1IHNpdGUgRG9jdG9saXZlXCIsXHJcbiAgICAgICAgcmVnbGVfZGVfcjpcIlLDqGdsZXMgZGUgcsOpZsOpcmVuY2VtZW50XCIsXHJcbiAgICAgICAgbWVudGlvbnNfbGVnOlwiTWVudGlvbnMgbMOpZ2FsZXNcIixcclxuICAgICAgICBtZW50aW9uc19sZWc6XCJNZW50aW9ucyBsw6lnYWxlc1wiLFxyXG4gICAgICAgIENvb2tpZXM6XCJDb29raWVzXCIsXHJcbiAgICAgICAgcHJvdGVjdF9kb25uZXNfcGVyc286XCJwcm90ZWN0aW9uIGRlcyBkb25uw6llcyBwZXJzb25uZWxsZXNcIixcclxuICAgICAgICBnZXN0aW9uX2RlX2Nvb2tpZXM6XCJHZXN0aW9uIGRlIGNvb2tpZXMgZXQgY29uc2VudGVtZW50XCIsXHJcblxyXG4gICAgfSxcclxuICAgIG5ldzp7XHJcbiAgICAgICAgYWxyZWFkeUhhdmU6IFwiSidhaSBkw6hqw6AgdW4gY29tcHRlIERvY3RvbGl2ZVwiLFxyXG4gICAgICAgIG5ld0luOiBcIk5vdXZlYXV4IHN1ciBEb2N0b2xpdmUgP1wiLFxyXG4gICAgICAgIHNpZ25pbjogXCJTZSBjb25uZWN0ZXJcIixcclxuICAgICAgICBzaWdudXA6IFwiIFMnaW5zY3JpcmVcIixcclxuICAgICAgICBhdXRoOlwiQXV0aGVudGlmaWNhdGlvblwiLFxyXG4gICAgICAgIGVtYWlsTGFiZWw6IFwiQWRyZXNzZSBlbWFpbFwiLFxyXG4gICAgICAgIHBhc3NMYWJlbDogXCJNb3QgZGUgcGFzc2VcIixcclxuICAgICAgICBvbGRwYXNzTGFiZWw6IFwiQW5jaWVuIG1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgIGNvbmZpcm1wYXNzTGFiZWw6IFwiQ29uZmlybWV6IGxlIG1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgIGVycm9yOiBcIk1vdCBkZSBwYXNzZSBvdSBhZHJlc3NlIGVtYWlsIGluY29ycmVjdCFcIixcclxuICAgICAgICBsYWJlbE5vbTogXCJOb21cIixcclxuICAgICAgICBsYWJlbFByZW5vbTogXCJQcsOpbm9tXCIsXHJcbiAgICAgICAgcGhvbmVMYWJlbDogXCJOdW3DqXJvIGRlIHTDqWzDqXBob25lXCIsXHJcbiAgICAgICAgcGhvbmVFcnJvcjpcIkwnYWRyZXNzZSBlbWFpbCBlc3QgZG9pdCDDqnRyZSBhdSBmb3JtYXQgc3RhbmRhcmRcIixcclxuICAgICAgICBsYWJlbEVtYWlsQzogXCJDb25maXJtZXIgbCdhZHJlc3NlIGVtYWlsXCIsXHJcbiAgICAgICAgbGFiZWxFbWFpbENQOiBcIkNvbmZpcm1lciBsJ2FkcmVzc2UgZW1haWxcIixcclxuICAgICAgICBlcnJvclNpZ251cDogXCJMZXMgaW5mb3JtYXRpb24gc29udCBpbmNvcnJlY3RlXCIsXHJcbiAgICAgICAgc3VjY2Vzc1NpZ251cDogXCJEZW1hbmRlIGVudm95w6llIGF2ZWMgc3VjY8OpcyB2w6lyaWZpZXIgdm90cmUgYWRyZXNzZSDDqW1haWwgcG91ciBjb25maXJtZXIgdm90cmUgY29tcHRlXCJcclxuICAgIH0sXHJcbiAgICByZXBvcnQ6e1xyXG4gICAgICAgIHNpZ251cDogXCJBam91dGVyXCIsXHJcbiAgICAgICAgbGFiZWxOb206IFwiVHlwZVwiLFxyXG4gICAgICAgIGxhYmVsUHJlbm9tOiBcIkTDqXNjcmlwdGlvblwiLFxyXG4gICAgICAgIGxhYmVsRW5kOiBcIkxhIGNvbnN1bHRhdGlvbiDDoCBiaWVuIMOpdGFpdCB0w6lybWluw6lcIixcclxuICAgICAgICBlcnJvclNpZ251cDogXCJMZXMgaW5mb3JtYXRpb24gc29udCBpbmNvcnJlY3RlXCIsXHJcbiAgICAgICAgc3VjY2Vzc1NpZ251cDogXCJEZW1hbmRlIGVudm95w6llIGF2ZWMgc3VjY8OpcyB2w6lyaWZpZXIgdm90cmUgYWRyZXNzZSBwb3VyIHVuZSByw6lwb25zZSBwcsOpYWxhYmxlIGRhbnMgbGVzIHByb2NoYWlucyBqb3Vyc1wiXHJcbiAgICB9LFxyXG4gICAgZG9jdW1lbnRzOiB7XHJcbiAgICAgICAgYXVjdW4gOlwiQXVjdW4gZG9jdW1lbnQgdHJvdXbDqVwiLFxyXG4gICAgICAgIGRvbnRoYXZlOiBcIlZvdXMgbidhdmV6IGF1Y3VuIGRvY3VtZW50IHBhcnRhZ2VyXCIsXHJcbiAgICAgICAgc2hhcmVkQnk6IFwiIERvY3VtZW50IHBhcnRhZ2VyIGRlIGxhIHBhcnQgOiBcIixcclxuICAgICAgICBzaGFyZWRXaXRoOiBcIkRvY3VtZW50IHF1ZSB2b3VzIGF2ZXogcGFydGFnZXIgYXZlYyA6IFwiLFxyXG4gICAgfSxcclxuICAgIGFwcG9pbnRtZW50czoge1xyXG4gICAgICAgIG5vdEF1dGg6IFwiVm91cyBuJ8OqdGVzIHBhcyBhdXRoZW50aWZpw6kgLi4uXCIsXHJcbiAgICAgICAgYWNjZXNzOiBcIkFjY8OpZGVyIMOgIG1vbiBjb21wdGVcIixcclxuICAgICAgICBub0FwcDogXCIgdm91cyBuJ2F2ZXogcGFzIGVuY29yZSBkZSByZW5kZXotdm91cyBwb3VyIGwnaW5zdGFudFwiLFxyXG4gICAgICAgIG15YXBwOiBcIk1lcyBSZW5kZXotdm91c1wiLFxyXG4gICAgICAgIG15SGlzdG9yeTogXCJNb24gaGlzdG9yaXF1ZSBkZSByZW5kZXotdm91c1wiLFxyXG4gICAgICAgIGhpc3Rvcnk6IFwiSGlzdG9yaXF1ZSBkZXMgY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgbmV4dEFwcDogXCIgTWVzIHByb2NoYWluIHJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgdGFrZWFwcDogXCJQcmVuZHJlIHVuIHJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgY2FyZEFwcHM6IHtcclxuICAgICAgICAgICAgbGluayA6XCJWb2lyIHBsdXMgZGUgZMOpdGFpbHNcIiAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXJkQXBwOiB7XHJcbiAgICAgICAgICAgIGxpbmsgOlwiVm9pciBwbHVzIGRlIGTDqXRhaWxzXCIsXHJcbiAgICAgICAgICAgIGFjY2Vzc0luZm9zOiBcIkluZm9ybWF0aW9ucyBkJ2FjY8Ooc1wiLFxyXG4gICAgICAgICAgICBub3RTcGVjaWZpZWQ6IFwiTGUgbcOpZGVjaW4gbidhIHBhcyBlbmNvcmUgc3DDqWNpZmllciBjZXMgaW5mb3JtYXRpb24gZCdhY2PDqXNcIixcclxuICAgICAgICAgICAgc2VjcmV0YXJpYXQ6IFwiQ29udGFjdCBkdSBzZWNyw6l0YXJpYXRcIixcclxuICAgICAgICAgICAgY2xpY2s6IFwiTWVyY2kgZGUgY2xpcXVlciBzdXIgbGUgYm91dG9uIHBvdXIgYWNjw6lkZXIgw6AgbGEgdMOpbMOpY29uc3VsdGF0aW9uLiBWb3RyZSBtw6lkZWNpbiBzZXJhIGF1dG9tYXRpcXVlbWVudCBub3RpZmVyIGRlIHZvdHJlIHByw6lzZW5jZS5cIixcclxuICAgICAgICAgICAgcmVqb2luZHJlOiBcIlJlam9pbmRyZSBsYSBjb25zdWx0YXRpb25cIixcclxuICAgICAgICAgICAgZGVwbGFjZXI6IFwiRMOpcGxhY2VyXCIsXHJcbiAgICAgICAgICAgIGFubnVsZXI6IFwiIEFubnVsZXIgbGUgcmVuZGV6LXZvdXMgXCIsXHJcbiAgICAgICAgICAgIHJldG91cjogXCJSZXRvdXJcIixcclxuICAgICAgICAgICAgY29uZmlybUNhbmNlbDogXCJDb25maXJtYXRpb24gZCdhbm51bGF0aW9uIGR1IHJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgICAgIHdhbnRZb3U6IFwiU291aGFpdGV6LXZvdXMgYW5udWxlciBsZSByZW5kZXotdm91cyBkdVwiLFxyXG4gICAgICAgICAgICB3aXRoOiBcImF2ZWMgXCIsXHJcbiAgICAgICAgICAgIGRvY0F2YWk6IFwiRGlzcG9uaWJpbGl0w6kgZHUgbcOpZGVjaW5cIixcclxuICAgICAgICAgICAgc2VsZWNUdGltZTogIFwiVGVtcHMgc8OpbMOpY3Rpb25uw6kgcG91ciBsYSBjb25zdWx0YXRpb24gZXN0IFwiLFxyXG4gICAgICAgICAgICBjb25maXJtOiBcIkNvbmZpcm1lciBsZSBub3V2ZWF1IGNyw6luZWF1XCIsXHJcbiAgICAgICAgICAgIHNlZUluZm9zU2hhcmVkOiBcIlZvaXIgbGVzIGluZm9ybWF0aW9uIHBhcnRhZ2VyIGRhbnMgbGEgY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICByZXN1bHRSZXNlYXJjaDoge1xyXG4gICAgICAgIG5vUmVzZWF1bHQ6IFwiRMOpc29sw6ksIG5vdXMgbidhdm9ucyB0cm91dsOpIGF1Y3VuIHByb2Zlc3Npb25uZWwgcG91ciB2b3RyZSByZWNoZXJjaGXigKYgXCIsXHJcbiAgICAgICAgdHJ5UmVzZWF1bHQ6IFwiRXNzYXlleiBhdmVjIGQnYXV0cmVzIGNyaXTDqHJlcyBkZSByZWNoZXJjaGUuIFwiLFxyXG4gICAgICAgIHdpZGdldDoge1xyXG4gICAgICAgICAgICBhdmFpbGFibGV2aWTDqW86IFwiQ29uc3VsdGF0aW9uIHZpZMOpbyBkaXNwb25pYmxlXCIsXHJcbiAgICAgICAgICAgIG5vdFNwZWNpZmllZDogXCJMZSBtw6lkZWNpbiBuJ2EgcGFzIGVuY29yZSBzcMOpY2lmaWVyIGNlcyBpbmZvcm1hdGlvbiBkJ2FjY8Opc1wiLFxyXG4gICAgICAgICAgICBzZWVQcm9maWxlOiBcIlZvaXIgbGUgcHJvZmlsZVwiLFxyXG4gICAgICAgICAgICBzZWVEaXNwbzogXCJWb2lyIGxhIGRpc3BvbmliaWxpdMOpXCIsXHJcbiAgICAgICAgICAgIGRpc3BvOlwiZGlzcG9uaWJpbGl0w6kgZHUgbcOpZGVjaW5cIixcclxuICAgICAgICAgICAgdGltZVNlbGVjdGVkOiBcIkNyw6luZWF1IHPDqWzDqWN0aW9ubsOpIHBvdXIgbGEgY29uc3VsdGF0aW9uIGNvbW1lbmNlIMOgIFwiLFxyXG4gICAgICAgICAgICBjYW5jZWw6IFwiQW5udWxlclwiLFxyXG4gICAgICAgICAgICBjb25maXJtOiBcIlByZW5kcmUgcmVuZGV6LXZvdXNcIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjp7XHJcbiAgICAgICAgY29uZmlybTogXCJWb3RyZSBjb21wdGUgZXN0IHZhbGlkw6lcIixcclxuICAgICAgICBleHBpcmVkOiBcIlZvdHJlIGNvbXB0ZSBuJ2VzdCBwYXMgZW5jb3JlIHZhbGlkw6ksIGlsIHNlbWJsZSBxdWUgY2UgbGllbiBlc3QgZMOpamEgZXhwaXJlclwiLFxyXG4gICAgICAgIGdlbmVyYXRlTmV3OiBcIkfDqW7DqXJlciB1biBub3V2ZWF1IGxpZW5cIixcclxuICAgIH0sXHJcbiAgICBhcHBvaW50bWVudDp7XHJcbiAgICAgICAgc3RlcHM6IFtcIkNob2l4IGR1IG1vdGlmXCIsIFwiSWRlbnRpZmljYXRpb25cIiwgXCJWw6lyaWZpY2F0aW9uXCIsIFwiQ29uZmlybWF0aW9uIGRlcyBpbmZvcm1hdGlvblwiLCBcIkMnZXN0IHRlcm1pbsOpXCJdLFxyXG4gICAgICAgIHRha2VBcHA6IFwiUHJlbmRyZSB1biByZW5kZXotdm91c1wiLFxyXG4gICAgICAgIHN0ZXAxOiB7XHJcbiAgICAgICAgICAgIGxhYmVsMTogXCJUaXRyZSA6XCIsXHJcbiAgICAgICAgICAgIGlucDE6IFwiVGl0cmUgZHUgcmVuZGV6LXZvdXNcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIxOiBcIlRpdHJlIMOgIGFmZmljaGVyIHBvdXIgY2UgcmVuZGV6LXZvdXNcIixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhYmVsMjogXCJEZXNjcmlwdGlvbiA6XCIsXHJcbiAgICAgICAgICAgIGlucDI6IFwiZGVzY3JpcHRpb24gZHUgcmVuZGV6LXZvdXNcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIyOiBcIkluZm9ybWF0aW9uIHN1cHBsw6ltZW50YWlyZVwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwzOiBcIlR5cGUgZGUgY29uc3VsdGF0aW9uIDpcIixcclxuICAgICAgICAgICAgaW5wMzogXCJDb25zdWx0YXRpb24gdmlkw6lvXCIsXHJcbiAgICAgICAgICAgIGlucDQ6IFwiQ29uc3VsdGF0aW9uIGF1IGNhYmluZXRcIixcclxuXHJcbiAgICAgICAgICAgIGxhYmVsNDogXCJNw6lkZWNpbiBjb25zdWx0YW50IDpcIixcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWw1OiBcIkxpZXUgOiBcIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwiQ29uc3VsdGF0aW9uIHZpZMOpbyDDoCBkaXN0YW5jZVwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWw2OiBcIiBRdWVsbGUgZXN0IGxlIG1vdGlmIGRlIGNldHRlIGNvbnN1bHRhdGlvbiA6XCIsXHJcbiAgICAgICAgICAgIG1vdGlmOiBcIk1vdGlmIGRlIGNvbnN1bHRhdGlvblwiLFxyXG4gICAgICAgICAgICBub01vdGlmczogXCJBdWN1biBtb3RpZiBzcMOpY2lmacOpIHBhciBsZSBtw6lkZWNpblwiLFxyXG5cclxuICAgICAgICAgICAgbGFiZWw3OiBcIkRhdGUgZXQgaGV1cmUgZHUgY29uc3VsdGF0aW9uIDogXCIsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDI6e1xyXG4gICAgICAgICAgICBuZXc6IFwiTm91dmVhdXggc3VyIERvY3RvbGl2ZSA/XCIsXHJcbiAgICAgICAgICAgIG9sZDogXCJKJ2FpIGTDqGrDoCB1biBjb21wdGUgRG9jdG9saXZlXCIsXHJcbiAgICAgICAgICAgIHNpZ251cDogXCJTJ2luc2NyaXJlXCIsXHJcbiAgICAgICAgICAgIHNpZ25pbjogXCJTZSBjb25uZWN0ZXJcIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwiQ29uc3VsdGF0aW9uIHZpZMOpbyDDoCBkaXN0YW5jZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDM6e1xyXG4gICAgICAgICAgICB0aXRsZTpcIk5vdXMgYXZvbnMgZW52b3nDqSB1biBtYWlsIMOgIHZvdHJlIGFkcmVzc2UgcG91ciB2YWxpZGVyIHZvdHJlIGNvbXB0ZVwiLFxyXG4gICAgICAgICAgICBnZW5lcmF0ZTogXCJFbnZveWVyIGF1dHJlIGVtYWlsXCIsXHJcbiAgICAgICAgICAgIHJldmlyaWZ5OiBcIkonYWkgdsOpcmlmacOpIG1vbiBjb21wdGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXA0IDp7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiBkZSBsYSBjb25zdWx0YXRpb25cIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwiQ29uc3VsdGF0aW9uIHZpZMOpbyDDoCBkaXN0YW5jZVwiLFxyXG4gICAgICAgICAgICBjb25maXJtOiBcIkNvbmZpcm1lciBsZSByZW5kZXotdm91cyBcIixcclxuICAgICAgICAgICAgcmVtaW5kOiBcIiBFbiBjb25maXJtYW50IGNlIHJlbmRlei12b3VzIHZvdXMgdm91cyBlbmdhZ2V6IMOgIGwnaG9ub3Jlci4gUGVuc2V6IGJpZW4gw6AgYW51bGVyIGNlIHJlbmRlei12b3VzIGxlIHBsdXTDtHQgcG9zc2libGUgZW4gY2FzIGQnaW1wcsOpdnVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDU6e1xyXG4gICAgICAgICAgICB0aXRsZTogXCIgVm90cmUgcmVuZGV6LXZvdXMgw6AgYmllbiDDqXRhaXQgZW5yZWdpc3RyZXIuXCIsXHJcbiAgICAgICAgICAgIGdlcmVyOiBcIkfDqXJlciB2b3MgcmVuZGV6LXZvdXNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcHJvZmlsUGFnZToge1xyXG4gICAgICAgIGFjY2Vzc0luZm86IFwiaW5mb3JtYXRpb25zIGQnYWNjw6hzXCIsXHJcbiAgICAgICAgc2VjcmV0YXJpYXQ6IFwiQ29udGFjdCBkdSBzZWNyw6l0YXJpYXRcIixcclxuICAgICAgICBhYm91dDogXCLDgCBwcm9wb3MgZGUgbW9pXCIsXHJcbiAgICAgICAgZ2VuZXJhbDogXCJQcsOpc2VudGF0aW9uIGfDqW7DqXJhbGVcIixcclxuICAgICAgICBzcGVjaWFsaXRlOiBcIlNww6ljaWFsaXTDqVwiLFxyXG4gICAgICAgIHBhcmNvdXI6IFwiUGFyY291cnNcIixcclxuICAgICAgICBkZXNjcmlwdGlvblBBcmM6IFwiRGVzY3JpcHRpb24gZHUgcGFyY291cnMgZHUgbcOpZGVjaW5cIixcclxuICAgICAgICBmb3JtYXRpb246IFwiRm9ybWF0aW9uXCIsXHJcbiAgICAgICAgYXdhcmQ6IFwiUsOpY29tcGVuc2VzXCIsXHJcbiAgICAgICAgZXhwZXJpZW5jZTogXCJleHDDqXJpZW5jZVwiLFxyXG4gICAgICAgIHNlZURpc3BvOiBcIkFmZmljaGVyIGxhIGRpc3BvbmliaWxpdMOpXCIsXHJcbiAgICAgICAgc2VlTWFwOiBcIkFmZmljaGVyIGxhIHBvc2l0aW9uIMOgIGxhIG1hcFwiLFxyXG4gICAgICAgIHRhcmlmOiBcIlRhcmlmc1wiLFxyXG4gICAgICAgIGRldGFpbHM6IFwiRMOpdGFpbCBkZXMgcHJpeCBkZSBjaGFxdWUgdHlwZSBkZSBjb25zdWx0YXRpb24uXCIsXHJcbiAgICAgICAgaG9ub3JlOiBcIkNlcyBob25vcmFpcmVzIHZvdXMgc29udCBjb21tdW5pcXXDqXMgw6AgdGl0cmUgaW5kaWNhdGlmIHBhciBsZSBwcmF0aWNpZW4uIElscyBwZXV2ZW50IHZhcmllciBzZWxvbiBsZSB0eXBlIGRlIHNvaW5zIGZpbmFsZW1lbnQgcsOpYWxpc8OpcyBlbiBjYWJpbmV0LCBsZSBub21icmUgZGUgY29uc3VsdGF0aW9ucyBldCBsZXMgYWN0ZXMgYWRkaXRpb25uZWxzIG7DqWNlc3NhaXJlcy4gRW4gY2FzIGRlIGTDqXBhc3NlbWVudCBkZXMgdGFyaWZzLCBsZSBwcmF0aWNpZW4gZG9pdCBlbiBhdmVydGlyIHByw6lhbGFibGVtZW50IGxlIHBhdGllbnQuXCIsXHJcbiAgICAgICAgc2VydmljZTogXCJTZXJ2aWNlIC0gVmlzaXRlXCIsXHJcbiAgICAgICAgcHJpeDogXCJQcml4XCIsXHJcbiAgICAgICAgaG9yYWlyZTogXCJIb3JhaXJlc1wiLFxyXG4gICAgICAgIGRldGFpbHNIZXVyZXM6IFwiRMOpdGFpbCBkZXMgaGV1cnMgZGUgdHJhdmFpbCBwb3VyIGNoYXF1ZSBqb3VyIGRlIGxhIHNlbWFpbmUuXCIsXHJcbiAgICAgICAgY29uZmlybTpcIkNvbmZpcm1lclwiLFxyXG4gICAgICAgIGNhbmNlbDogXCJhbm51bGVyXCIsXHJcbiAgICAgICAgdGltZVNlbGVjdGVkOiBcIkNyw6luZWF1IHPDqWzDqWN0aW9ubsOpIHBvdXIgbGEgY29uc3VsdGF0aW9uIGNvbW1lbmNlIMOgIFwiLFxyXG5cclxuICAgIH1cclxufSIsIi8vIHNyYy9jb250ZXh0L3N0YXRlLmpzXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFwcFdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBbdGVtcG9yYXJ5X2FwcG9pbnRtZW50LCBzZXRUZW1wb3JhcnlfYXBwb2ludG1lbnRdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAgIGNvbnN0IHNldFVzZXJUZW1wb3JhcnkgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGVtcG9yYXJ5X2FwcG9pbnRtZW50XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICBzZXRUZW1wb3JhcnlfYXBwb2ludG1lbnQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBleGlzdGluZ3RlbXBvcmFyeV9hcHBvaW50bWVudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGVtcG9yYXJ5X2FwcG9pbnRtZW50XCIpO1xyXG5cclxuICAgIGV4aXN0aW5ndGVtcG9yYXJ5X2FwcG9pbnRtZW50ID0gKGV4aXN0aW5ndGVtcG9yYXJ5X2FwcG9pbnRtZW50ICE9IFwidW5kZWZpbmVkXCIpID8gSlNPTi5wYXJzZShleGlzdGluZ3RlbXBvcmFyeV9hcHBvaW50bWVudCkgOiB7fTtcclxuXHJcbiAgICBzZXRUZW1wb3JhcnlfYXBwb2ludG1lbnQoZXhpc3Rpbmd0ZW1wb3JhcnlfYXBwb2ludG1lbnQpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gXHJcbiAgICAgIFxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0ZW1wb3JhcnlfYXBwb2ludG1lbnQsIHNldFVzZXJUZW1wb3JhcnkgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufVxyXG4iLCIvLyBzcmMvY29udGV4dC9zdGF0ZS5qc1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLy4uL2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24nXHJcblxyXG5cclxuaW1wb3J0IGNvbnRlbnRGUiBmcm9tICcuLy4uL2NvbnRlbnRGUidcclxuaW1wb3J0IGNvbnRlbnRFTiBmcm9tICcuLy4uL2NvbnRlbnRFTidcclxuaW1wb3J0IGNvbnRlbnRBUiBmcm9tICcuLy4uL2NvbnRlbnRBUidcclxuXHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuXHJcblxyXG5cclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuXHJcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXQnO1xyXG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuXHJcbmltcG9ydCB7TWRWaXNpYmlsaXR5LCBNZFZpc2liaWxpdHlPZmZ9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xyXG5cclxuXHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi8uLi9FbmRQb2ludCc7XHJcbmltcG9ydCB7IERpYWxvZywgRGlhbG9nVGl0bGUsIERpYWxvZ0NvbnRlbnQsIERpYWxvZ0NvbnRlbnRUZXh0LCBEaWFsb2dBY3Rpb25zIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcclxuICBsZXQgZXhpc3Rpbmd1c2VyRGF0YSA9IENvb2tpZXMuZ2V0KFwicGF0aWVudERhdGFcIik7XHJcblxyXG4gIGV4aXN0aW5ndXNlckRhdGEgPSAoZXhpc3Rpbmd1c2VyRGF0YSAhPSB1bmRlZmluZWQpID8gSlNPTi5wYXJzZShleGlzdGluZ3VzZXJEYXRhKSA6IHt9O1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHtsb2NhbGV9ID0gcm91dGVyO1xyXG5cclxuICBjb25zdCBjb250ZW50ID0gbG9jYWxlID09PSBcImFyXCIgPyBjb250ZW50QVIgOiBsb2NhbGUgPT09IFwiZW5cIiA/IGNvbnRlbnRFTiA6IGNvbnRlbnRGUjtcclxuXHJcbiAgICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKGV4aXN0aW5ndXNlckRhdGEpO1xyXG4gICAgY29uc3QgW2FkZGVkQnlBZG1pbiwgc2V0QWRkZWRCeUFkbWluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICBwYXNzd29yZF9jb25maXJtYXRpb246IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOlwiXCIsXHJcbiAgICAgIG9sZF9wYXNzd29yZDpcIlwiLFxyXG59KTtcclxuICAgIGNvbnN0IHNldFVzZXIgPSAoZGF0YSkgPT4ge1xyXG4gICAgICBpZighZGF0YS50b2tlbil7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ3BhdGllbnREYXRhJywge30sIHsgZXhwaXJlczogLTEwMDAgfSk7XHJcblxyXG5cclxuICAgICAgICBzZXRVc2VyRGF0YSh7aXNBdXRoOiBmYWxzZX0pO1xyXG4gICAgICAgIHJldHVybiByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBwYXRobmFtZTogYC9hY2NvdW50L25ld2AsXHJcbiAgICAgICAgfSlcclxuICAgICAgfWVsc2Uge1xyXG4gICAgICAgIHNldEFkZGVkQnlBZG1pbihkYXRhLnVzZXIuYWRkZWRCeUFkbWluICYmICFkYXRhLnVzZXIucGFzc3dvcmRDaGFuZ2VkKTtcclxuICAgICAgICBDb29raWVzLnNldCgncGF0aWVudERhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcbiAgICAgICAgc2V0VXNlckRhdGEoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGlmKHVzZXJEYXRhLnRva2VuKXtcclxuICAgICAgICBzZXRBZGRlZEJ5QWRtaW4odXNlckRhdGEudXNlci5hZGRlZEJ5QWRtaW4gJiYgIXVzZXJEYXRhLnVzZXIucGFzc3dvcmRDaGFuZ2VkKTtcclxuICAgICAgICBmZXRjaChgJHtDb25maWcuQkFDS0VORF9VUkx9L3BhdGllbnQvdmVyaWZ5YCx7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGB0b2tlbiAke3VzZXJEYXRhLnRva2VufWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIChyKSA9PiByLmpzb24oKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFyZXMuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAvLyBzZXRVc2VyRGF0YShleGlzdGluZ3VzZXJEYXRhKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgc2V0VXNlckRhdGEoe2lzQXV0aDogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICkuY2F0Y2goZXJyb3IgPT57IFxyXG4gICAgICAgICAgICBzZXRVc2VyRGF0YSh7aXNBdXRoOiBmYWxzZX0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcbiAgICAgIFxyXG4gICAgY29uc3QgaGFuZGxlQ29uZmlybWF0aW9uID0gKCkgPT4ge1xyXG4gICAgICBsZXQgdGVzdFBhc3MgPSBzdGF0ZS5wYXNzd29yZC50cmltU3RhcnQoKTtcclxuXHJcbiAgICAgIGlmKHRlc3RQYXNzLmxlbmd0aCA+IDYpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtwYXNzd29yZDogc3RhdGUucGFzc3dvcmQsIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RhdGUucGFzc3dvcmRfY29uZmlybWF0aW9uLCBvbGRfcGFzc3dvcmQ6IHN0YXRlLm9sZF9wYXNzd29yZCwgZW1haWw6IHVzZXJEYXRhLnVzZXIuZW1haWwgfVxyXG4gICAgICAgIGZldGNoKGAke0NvbmZpZy5CQUNLRU5EX1VSTH0vcGF0aWVudC9uZXctcGFzc3dvcmRgLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsIFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGB0b2tlbiAke3VzZXJEYXRhLnRva2VufWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICB9IClcclxuICAgICAgICAudGhlbigocmVzKSA9PntcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICBzZXRBZGRlZEJ5QWRtaW4oZmFsc2UpO1xyXG4gICAgICAgICAgc2V0VXNlckRhdGEocmVzLmRhdGEudXBkYXRlUGF0aWVudClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHt0YXJnZXQgOiB7dmFsdWUsIG5hbWV9fSkgPT4ge1xyXG4gICAgICBzZXRTdGF0ZShvbGQgPT4ge3JldHVybiB7IC4uLm9sZCwgW25hbWVdOiB2YWx1ZX19KSA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlckRhdGEsIHNldFVzZXIgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPERpYWxvZ1xyXG4gICAgICAgIC8vIG9wZW49e2ZhbHNlfVxyXG4gICAgICAgIG9wZW49e2FkZGVkQnlBZG1pbn1cclxuICAgICAgICBvbkNsb3NlPXsgKCkgPT4ge319XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPiBSZW5vdXZlbGVyIGxlIG1vdCBkZSBwYXNzZSA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGlkPVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIENlIGNvbXB0ZSDDoCB0YWl0IGNyw6llciBhdmVjIHVuIGFkbWluaXN0cmF0ZXVyLCBhbG9ycyBjZSBtb3QgZGUgcGFzc2Ugw6Agw6l0YWl0IGfDqW7DqXJlciBkJ3VuZSBtYW5pw6lyZSBhbMOpYXRvaXIuIE9uIHZvdXMgcmVjb21hbmRlIGRlIHNhaXNpciB1biBub3V2ZWF1IG1vdCBkZSBwYXNzZSBwb3VyIGxhIHNjdWl0w6kgZGUgdm9zIGluZm9ybWF0aW9uLlxyXG4gICAgICAgICAgPC9EaWFsb2dDb250ZW50VGV4dD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9XCJtdC0zXCIgZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1wYXNzd29yZFwiPiB7Y29udGVudC5uZXcub2xkcGFzc0xhYmVsfSA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPXtzdGF0ZS5zaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5vbGRfcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICBsYWJlbD17Y29udGVudC5uZXcub2xkcGFzc0xhYmVsfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJvbGRfcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidG9nZ2xlIHBhc3N3b3JkIHZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHNldFN0YXRlKG9sZCA9PntyZXR1cm4gIHsuLi5vbGQsIHNob3dQYXNzd29yZDogIXN0YXRlLnNob3dQYXNzd29yZH19KX0gXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3N0YXRlLnNob3dQYXNzd29yZCA/IDxNZFZpc2liaWxpdHkgLz4gOiA8TWRWaXNpYmlsaXR5T2ZmIC8+fVxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9XCJtdC0zXCIgZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1wYXNzd29yZFwiPiB7Y29udGVudC5uZXcucGFzc0xhYmVsfSA8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPXtzdGF0ZS5zaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtjb250ZW50Lm5ldy5wYXNzTGFiZWx9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ9e1xyXG4gICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInRvZ2dsZSBwYXNzd29yZCB2aXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiBzZXRTdGF0ZShvbGQgPT57cmV0dXJuICB7Li4ub2xkLCBzaG93UGFzc3dvcmQ6ICFzdGF0ZS5zaG93UGFzc3dvcmR9fSl9IFxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zaG93UGFzc3dvcmQgPyA8TWRWaXNpYmlsaXR5IC8+IDogPE1kVmlzaWJpbGl0eU9mZiAvPn1cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPVwibXQtM1wiIGZ1bGxXaWR0aCB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzdGFuZGFyZC1hZG9ybm1lbnQtcGFzc3dvcmRcIj4ge2NvbnRlbnQubmV3LmNvbmZpcm1wYXNzTGFiZWx9IDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1hZG9ybm1lbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9e3N0YXRlLnNob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnBhc3N3b3JkX2NvbmZpcm1hdGlvbn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtjb250ZW50Lm5ldy5jb25maXJtcGFzc0xhYmVsfVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZF9jb25maXJtYXRpb25cIlxyXG4gICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidG9nZ2xlIHBhc3N3b3JkIHZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ICgpID0+IHNldFN0YXRlKG9sZCA9PntyZXR1cm4gIHsuLi5vbGQsIHNob3dQYXNzd29yZDogIXN0YXRlLnNob3dQYXNzd29yZH19KX0gXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3N0YXRlLnNob3dQYXNzd29yZCA/IDxNZFZpc2liaWxpdHkgLz4gOiA8TWRWaXNpYmlsaXR5T2ZmIC8+fVxyXG4gICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm1hdGlvbn0gY29sb3I9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgQ29uZmlybWVyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID0gZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgYXMsXG4gICAgICBjdXJMb2NhbGUsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlkbGVUaW1lb3V0PFQ+KG1zOiBudW1iZXIsIGVycjogRXJyb3IpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKSwgbXMpKVxuICApXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgaWRsZVRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gICAgKSxcbiAgXSlcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBpZGxlVGltZW91dDxSb3V0ZUxvYWRlckVudHJ5PihcbiAgICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vLi4vLi4vLi4vRW5kUG9pbnQnXHJcblxyXG5pbXBvcnQgTWVkZWNpbldpZGdldCBmcm9tICcuLy4uLy4uLy4uL2NvbXBvbmVudHMvTWVkZWNpbldpZGdldC9NZWRlY2luV2lkZ2V0JztcclxuaW1wb3J0IE1hcEFjY2VzcyBmcm9tICcuLy4uLy4uLy4uL2NvbXBvbmVudHMvTWVkZWNpbldpZGdldC9NYXBBY2Nlc3MnO1xyXG5cclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuLy4uLy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaCdcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBjb250ZW50RlIgZnJvbSAnLi8uLi8uLi8uLi9jb250ZW50RlInXHJcbmltcG9ydCBjb250ZW50RU4gZnJvbSAnLi8uLi8uLi8uLi9jb250ZW50RU4nXHJcbmltcG9ydCBjb250ZW50QVIgZnJvbSAnLi8uLi8uLi8uLi9jb250ZW50QVInXHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vLi4vLi4vLi4vYXNzZXRzL2pzcy9yZWNoZXJjaGVQYWdlLmpzXCI7XHJcblxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFnYXNpbih7bWVkZWNpbnMsIGxvY2F0aW9uc30pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2xvY2FsZX0gPSByb3V0ZXI7XHJcbiAgXHJcbiAgICBjb25zdCBjb250ZW50ID0gbG9jYWxlID09PSBcImFyXCIgPyBjb250ZW50QVIgOiBsb2NhbGUgPT09IFwiZW5cIiA/IGNvbnRlbnRFTiA6IGNvbnRlbnRGUjtcclxuXHJcbiAgICBjb25zdCBbc2NyZWVuV2lkdGgsIHNldFNjcmVlbldpZHRoXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNpemUoKSB7XHJcbiAgICAgICAgICAgIHNldFNjcmVlbldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVNpemUpO1xyXG4gICAgICAgIHVwZGF0ZVNpemUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVNpemUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPiBET0NUT0xJVkUgLSBSZWNoZXJjaGVyIG3DqWRlY2luIDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZWRlY2lucy5sZW5ndGg+IDAgP1xyXG4gICAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJjb250ZW50LXJlY2hlcmNoZSBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiN1wiIG1kPVwiMTJcIiB4cz1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgIW1lZGVjaW5zID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRlY2lucy5tYXAoKHJlc2VhcmNoZWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT0ge2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRlY2luV2lkZ2V0IG1lZGVjaW49e3Jlc2VhcmNoZWR9IGxvY2FsZT17bG9jYWxlfSBjb250ZW50PXtjb250ZW50LnJlc3VsdFJlc2VhcmNoLndpZGdldH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCI1XCIgbWQ9XCIxMlwiIHhzPVwiMTJcIiBjbGFzc05hbWU9XCJvcmRlci1zbS1sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYXBBY2Nlc3MgYXBpS2V5PXtDb25maWcuYXBpS2V5fSBsb2NhdGlvbnM9e2xvY2F0aW9uc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9IHtjbGFzc2VzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge2NsYXNzZXMuYmFrZ3JvdWRDb250YWluZXJ9IHN0eWxlPXtsb2NhbGUgPT09IFwiYXJcIiA/IHtiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltYWdlL3NlYXJjaC5zdmcpYCwgYmFja2dyb3VuZFBvc2l0aW9uOiBcImJvdHRvbSBsZWZ0XCIsIHRleHRBbGlnbjogXCJyaWdodFwifSA6IHtiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltYWdlL3NlYXJjaC5zdmcpYCwgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjg1JSA3NSVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgaWQ9XCJyZWNoZXJjaGUtbWVkZWNpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMuaDF9PiAge2NvbnRlbnQucmVzdWx0UmVzZWFyY2gubm9SZXNlYXVsdH0gPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMuaDJ9PiB7Y29udGVudC5oZWFkaW5nMn0gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2ggY29udGVudD17Y29udGVudC5yZXN1bHRSZXNlYXJjaH0gbG9jYWxlPXtsb2NhbGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0NvbmZpZy5CQUNLRU5EX1VSTH0vbWVkZWNpbi8ke2NvbnRleHQucGFyYW1zLnNwZWNpYWxpdGV9LyR7Y29udGV4dC5wYXJhbXMudmlsbGV9YClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICBpZihkYXRhLmVycm9yKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAvLyBwcm9wczoge21lZGVjaW5zOiBkYXRhLm1lZGVjaW5zLCBsb2NhdGlvbnM6IGRhdGEubWVkZWNpbnMubWFwKChtZWRlY2luKSA9PiBtZWRlY2luLmFkcmVzcyl9LFxyXG4gICAgICAgICAgICBwcm9wczoge21lZGVjaW5zOiBbXSwgbG9jYXRpb25zOiBbXX0sXHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge21lZGVjaW5zOiBkYXRhLm1lZGVjaW5zLCBsb2NhdGlvbnM6IGRhdGEubWVkZWNpbnMubWFwKChtZWRlY2luKSA9PiBtZWRlY2luLmFkcmVzcyl9LFxyXG4gICAgLy8gICBwcm9wczoge21lZGVjaW5zOiBbXSwgbG9jYXRpb25zOiBbXX0sXHJcbiAgICB9XHJcbiAgfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NsaWRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL21kXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuZmV0Y2hcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==