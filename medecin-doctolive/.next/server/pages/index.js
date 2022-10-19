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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/jss/MedecinHomeStyle.js":
/*!****************************************!*\
  !*** ./assets/jss/MedecinHomeStyle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ "./assets/jss/variables.js");

const profilePageStyle = {
  container: _variables_js__WEBPACK_IMPORTED_MODULE_0__["container"],
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
    backgroundImage: `url(/img/backgroundpoints.png)`,
    backgroundRepeat: "repeat no-repeat",
    backgroundPosition: "bottom",
    // backgroundSize: "200%",
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
        fontFamily: "Roboto,arial,sans-serif",
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
        backgroundColor: "#0596de",
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
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    width: "100vw",
    paddingTop: "72px !important",
    paddingBottom: "64px !important",
    "& .right-content": {
      backgroundColor: "#fff",
      padding: 32,
      borderRadius: 15,
      boxShadow: "0 1px 4px 0 rgba(5,150,222,.2)",
      "& h3": {
        marginBottom: 16
      },
      "& form": {
        marginTop: 16,
        padding: 8
      }
    }
  },
  backgroundZone: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden"
  },
  bakgroudContainer: {},
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
};
/* harmony default export */ __webpack_exports__["default"] = (profilePageStyle);

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
      color: "inherit",
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
const primaryColor = ["#1ab9b9", "#2d4e8c", "#3a5998", "#7f8cba"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
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

var _jsxFileName = "C:\\Users\\moi\\Desktop\\doctolive\\doctolive_code\\medecin-doctolive\\components\\CustomButtons\\Button.js";

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

/***/ "./components/Inputs/InputIcone/index.jsx":
/*!************************************************!*\
  !*** ./components/Inputs/InputIcone/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\moi\\Desktop\\doctolive\\doctolive_code\\medecin-doctolive\\components\\Inputs\\InputIcone\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function InputIcone(props) {
  let {
    Icone
  } = props,
      others = _objectWithoutProperties(props, ["Icone"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, others), {}, {
    width: "200",
    fullWidth: true,
    InputProps: {
      startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3___default.a, {
        position: "start",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icone, {
          color: "#1ab9b9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this)
    }
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (InputIcone);

/***/ }),

/***/ "./components/Inputs/PhoneNumber/index.jsx":
/*!*************************************************!*\
  !*** ./components/Inputs/PhoneNumber/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneField; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\moi\\Desktop\\doctolive\\doctolive_code\\medecin-doctolive\\components\\Inputs\\PhoneNumber\\index.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function PhoneField(props) {
  let {
    Icone
  } = props,
      others = _objectWithoutProperties(props, ["Icone"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, others), {}, {
    width: "200",
    fullWidth: true,
    type: "text",
    style: {
      direction: "ltr"
    },
    InputProps: {
      startAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3___default.a, {
        position: "start",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icone, {
          color: "#1ab9b9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this)
    }
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/MedecinForm.js":
/*!***********************************!*\
  !*** ./components/MedecinForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ElementForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "@material-ui/core/OutlinedInput");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _Inputs_PhoneNumber_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Inputs/PhoneNumber/index */ "./components/Inputs/PhoneNumber/index.jsx");
/* harmony import */ var _Inputs_InputIcone_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Inputs/InputIcone/index */ "./components/Inputs/InputIcone/index.jsx");
/* harmony import */ var _CustomButtons_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./CustomButtons/Button */ "./components/CustomButtons/Button.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_19__);

var _jsxFileName = "C:\\Users\\moi\\Desktop\\doctolive\\doctolive_code\\medecin-doctolive\\components\\MedecinForm.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // @material-ui/icons











 // import TextField from '@material-ui/core/RadioGroup';

 // services
// import {getCity, signupMedecin} from 'services/medecin/MedecinService'
// core components






class ElementForm extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      this.setState({
        sending: true
      });
      let data = this.traitementDonnee();
      console.log(_config__WEBPACK_IMPORTED_MODULE_15__["default"].api_path);
      const link = _config__WEBPACK_IMPORTED_MODULE_15__["default"].api_path + "/medecin/signup";
      console.log(link);
      fetch(link, {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(_objectSpread({}, data))
      }).then(r => r.json().then(res => {
        if (!res.error) {
          this.setState({
            sending: false,
            success: true,
            donneIncorecte: false
          });
        } else {
          this.setState({
            sending: false,
            success: false,
            donneIncorecte: true
          });

          if (res.validator) {} else {}
        }
      })).catch(error => {
        this.setState({
          sending: false,
          success: false,
          donneIncorecte: true
        });
      });
    });

    _defineProperty(this, "handleChange", ({
      target: {
        value,
        name
      }
    }) => {
      if (name === "phone") {
        value = value // Remove all non-digits, turn initial 33 into nothing
        .replace(/[^\d+]/g, '').replace(/^0/, '+212') // Stick to first 10, ignore later digits
        .slice(0, 13) // Add a space after any 2-digit group followed by more digits
        .replace(/(\d{3})(?=\d)/g, '$1 ');
      }

      this.setState({
        [name]: value
      });
    });

    this.state = {
      nom: "",
      prenom: "",
      phone: "",
      email: "",
      password: "",
      password_confirmation: "",
      villes: [],
      cityId: "",
      sexe: "",
      fieldValidationErrors: {
        nomError: false,
        prenomError: false,
        numeroError: false,
        emailError: false
      },
      sending: false,
      success: false
    };
  }

  traitementDonnee() {
    let formData = {};
    formData.nom = this.state.nom;
    formData.phone = this.state.phone;
    formData.email = this.state.email;
    formData.prenom = this.state.prenom;
    formData.cityId = this.state.cityId;
    formData.sexe = this.state.sexe;
    formData.password = this.state.password;
    return formData;
  }

  componentDidMount() {
    fetch(`${_config__WEBPACK_IMPORTED_MODULE_15__["default"].api_path}/city`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res.json().then(response => {
        console.log(response);

        if (response.cities) {
          this.setState({
            villes: response.cities
          });
        }
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    let {
      villes,
      fieldValidationErrors,
      nom,
      prenom,
      phone,
      email,
      donneIncorecte,
      cityId,
      success,
      sexe,
      sending
    } = this.state;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: this.handleSubmit,
      autoComplete: "off",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "12",
          md: "6",
          className: "mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Inputs_InputIcone_index__WEBPACK_IMPORTED_MODULE_17__["default"], {
            autoFocus: true,
            error: fieldValidationErrors.nomError,
            placeholder: "Votre nom de famille",
            label: "Nom",
            Icone: react_icons_fa__WEBPACK_IMPORTED_MODULE_19__["FaUserMd"],
            required: true,
            variant: "outlined",
            name: "nom" // InputLabelProps={{style:{right: 0, left:"auto"}}}
            ,
            onBlur: this.validateField,
            value: nom,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "12",
          md: "6",
          className: "mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Inputs_InputIcone_index__WEBPACK_IMPORTED_MODULE_17__["default"], {
            placeholder: "Votre prenom",
            variant: "outlined",
            required: true,
            error: fieldValidationErrors.prenomError,
            label: "Prenom",
            Icone: react_icons_fa__WEBPACK_IMPORTED_MODULE_19__["FaUserMd"] // InputLabelProps={{style:{right: 0, left:"auto"}}}
            ,
            onBlur: this.validateField,
            name: "prenom",
            value: prenom,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "12",
          md: "6",
          className: "mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Inputs_PhoneNumber_index__WEBPACK_IMPORTED_MODULE_16__["default"], {
            label: "Num\xE9ro de t\xE9l\xE9phone",
            Icone: react_icons_fa__WEBPACK_IMPORTED_MODULE_19__["FaPhone"],
            name: "phone",
            required: true,
            variant: "outlined",
            error: fieldValidationErrors.numeroError // InputLabelProps={{style:{right: 0, left:"auto"}}}
            ,
            onBlur: this.validateField,
            value: phone,
            placeholder: "+212 600 000 000",
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "12",
          md: "6",
          className: "mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Inputs_InputIcone_index__WEBPACK_IMPORTED_MODULE_17__["default"], {
            label: "Adresse email",
            Icone: react_icons_fa__WEBPACK_IMPORTED_MODULE_19__["FaMailBulk"],
            placeholder: "Adresse email",
            variant: "outlined",
            name: "email",
            error: fieldValidationErrors.emailError,
            required: true // InputLabelProps={{style:{right: 0, left:"auto"}}}
            ,
            onBlur: this.validateField,
            value: email,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "12",
          className: "mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
            fullWidth: true,
            variant: "outlined",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
              htmlFor: "standard-adornment-password",
              children: " Mot de passe "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_10___default.a, {
              id: "standard-adornment-password",
              type: this.state.showPassword ? 'text' : 'password',
              value: this.state.password,
              onChange: this.handleChange,
              required: true,
              label: "Mot de passe",
              name: "password",
              endAdornment: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_11___default.a, {
                position: "end",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
                  "aria-label": "toggle password visibility",
                  onClick: () => this.setState(old => {
                    return _objectSpread(_objectSpread({}, old), {}, {
                      showPassword: !this.state.showPassword
                    });
                  }),
                  children: this.state.showPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_14__["MdVisibility"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 68
                  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_14__["MdVisibilityOff"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 248,
                    columnNumber: 87
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "12",
          md: "12",
          className: "mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
            variant: "outlined",
            fullWidth: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
              children: "Ville"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default.a, {
              value: cityId,
              onChange: this.handleChange,
              label: "Ville",
              name: "cityId",
              required: true,
              children: villes.map((ville, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
                value: ville.id,
                children: ville.name
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 45
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 259,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 30
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "12",
          md: "12",
          className: "my-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
            component: "div",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
              component: "legend",
              children: "Sexe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_13___default.a, {
              className: "flex-row",
              "aria-label": "Sexe",
              name: "sexe",
              value: sexe,
              onClick: event => {
                this.setState({
                  sexe: event.target.value
                });
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
                value: 'homme',
                control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 80
                }, this),
                label: "Homme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 277,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
                value: 'femme',
                control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 80
                }, this),
                label: "Femme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 274,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          in: donneIncorecte,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
              variant: "danger",
              children: "les information sont incorrecte"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          in: success,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Alert"], {
              variant: "success",
              children: "Demande envoyer avec succ\xE9s"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "align-items-center justify-content-around mt-4 ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
          type: "submit",
          color: "primary",
          children: " Enregistrer "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const LocalConfig = {
  api_path: "http://localhost:4300"
};
const prodConfig = {
  api_path: "https://api.doctolive.ma"
};
/* harmony default export */ __webpack_exports__["default"] = (prodConfig);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ "react-icons/bi");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Accordion */ "@material-ui/core/Accordion");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "@material-ui/core/AccordionSummary");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "@material-ui/core/AccordionDetails");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_jss_MedecinHomeStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/jss/MedecinHomeStyle.js */ "./assets/jss/MedecinHomeStyle.js");
/* harmony import */ var _components_MedecinForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../components/MedecinForm */ "./components/MedecinForm.js");

var _jsxFileName = "C:\\Users\\moi\\Desktop\\doctolive\\doctolive_code\\medecin-doctolive\\pages\\index.js";

 // @material-ui/core components


 // import BannerHome from './../assets/img/medicaldiscussion.jpg'
// core components









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_MedecinHomeStyle_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
function Home() {
  const {
    0: screenWidth,
    1: setScreenWidth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: " Doctolive - Rendez-vous en ligne avec votre m\xE9decin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
        screenWidth: screenWidth
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Avantages, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Steps, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Keep, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

function Avantages() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: classes.section + " repeat-icon-box",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: classes.sectionTitlle,
            children: "Pourquoi les professionnels de la sant\xE9 aiment Doctolive"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          children: whyCards.map((whycard, index) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
              lg: "4",
              md: "6",
              xs: "12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                class: "wrapper-repeat d-flex h-100",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "wrapper-ico",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: `/image/${whycard.icon}`,
                      alt: "...",
                      className: "mb-3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 42
                    }, this), " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 35
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 31
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  class: "wrapper-content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                    class: "title-t3 fw-700 mb-10 color-primary",
                    children: whycard.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 33
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: whycard.description
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 33
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 31
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 27
              }, this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 25
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

function Steps() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: classes.section + " section-home-how-works padding_top",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      className: "heading text-center",
      children: " D\xE9marrez en 3 \xE9tapes simples"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hw-area",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "columns col-sm-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "hw-box hw-box--mt",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hw-box__icon",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "icon-search",
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__["BiSearch"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 92
                  }, this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 61
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 31
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                className: "hw-box__title",
                children: " Rejoignez-nous "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 31
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "hw-box__text",
                children: " S'inscrire avec vos coordonn\xE9es sur la plateforme "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 31
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 27
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 23
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "columns col-sm-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "hw-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hw-box__icon",
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "icon-svg va-middle-inline",
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__["BiCalendar"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 107
                  }, this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 62
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 31
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                className: "hw-box__title",
                children: " V\xE9rification d'identit\xE9 "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 31
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "hw-box__text",
                children: " Completez le processus de v\xE9rification avec nos consultant "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 31
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 27
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 23
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "columns col-sm-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "hw-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hw-box__icon",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "icon-fat-check",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__["BiCheck"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 94
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 61
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 31
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                className: "hw-box__title",
                children: " Consultez vos patient "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 31
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "hw-box__text",
                children: "  Commencer \xE0 consulter en vid\xE9o et g\xE9rez vos rendez-vous "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 31
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 27
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 23
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 19
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 7
  }, this);
}

function Keep() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: classes.section + " padding_top",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          md: "6",
          xs: "12",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              children: " Gardez les patients de votre clinique engag\xE9s "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
              children: " Impressionnez vos patients en leur permettant de suivre avec vous en ligne "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: " Augmenter la r\xE9tention des patients "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: " Interagissez avec les patients apr\xE8s leurs rendez-vous. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: " Contr\xF4lez efficacement les suivis "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: " Discutez avec les patients sans partager votre num\xE9ro personnel. D\xE9finissez votre dur\xE9e de suivi gratuit et plus encore. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: " Mon\xE9tiser les suivis "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "  Mon\xE9tiser les interactions de suivi r\xE9p\xE9t\xE9es en assurant le suivi des patients dans le confort de leur domicile. "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          md: "6",
          xs: "12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/image/keep.png",
            alt: "Doctor taking care of family"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 5
  }, this);
}

const whyCards = [{
  icon: "waste.svg",
  title: "Ne perdez plus de temps à gérer la prise de rendez-vous",
  description: "Un système de réservation médicale en ligne avec de nombreuses fonctionnalités. Gérez votre cabinet avec une vue claire des rendez-vous à venir. Personnalisez tous les paramètres dont vous avez besoin."
}, {
  icon: "access.svg",
  title: "Accédez à votre horaire médical où vous voulez, quand vous le souhaitez",
  description: "Notre logiciel de planification médicale est accessible depuis votre ordinateur, tablette ou smartphone. Vous pouvez vérifier les informations de votre pratique à tout moment, où que vous soyez."
}, {
  icon: "offer.svg",
  title: "Offrir la télémédecine et élargir l'accès aux services de santé pour les patients",
  description: "La consultation en ligne permet de maintenir la continuité des soins pour vos patients. Augmenter la distance sociale et délivrer des ordonnances aux patients à domicile."
}, {
  icon: "easier.svg",
  title: "Facilitez la prise de rendez-vous médicaux pour vos patients",
  description: "Vos patients peuvent prendre des rendez-vous 24h / 24 et 7j / 7, votre cabinet reçoit moins d'appels entrants et vous remplissez les créneaux disponibles même à la dernière minute."
}, {
  icon: "custimise.svg",
  title: "Personnalisez votre horaire de pratique en fonction de vos besoins",
  description: "Définissez chaque paramètre pour que votre système de réservation en ligne réponde à toutes vos attentes. Ouvrez les plages horaires disponibles et sélectionnez les raisons de la visite en fonction de votre spécialité."
}, {
  icon: "install.svg",
  title: "Installez et maîtrisez votre horaire médical en ligne en un rien de temps",
  description: "Notre équipe dédiée vous aide à mettre en place votre système de réservation médicale. Devenez un expert instantanément grâce à notre documentation complète."
}, {
  icon: "chat.svg",
  title: "Communiquez en temps réel avec vos patients et réduisez les rendez-vous manqués",
  description: "Laissez les patients réserver, annuler ou reporter leurs rendez-vous en ligne 24h / 24 et 7j / 7. Réduisez les rendez-vous manqués grâce aux rappels automatiques par e-mail."
}, {
  icon: "improve.svg",
  title: "Améliorez votre visibilité en ligne et trouvez de nouveaux patients",
  description: "Votre liste Doctolive permet aux patients de trouver facilement votre cabinet. Laissez les patients réserver leurs rendez-vous en ligne sur notre plateforme."
}, {
  icon: "sync.svg",
  title: "Synchronisez notre logiciel de planification des patients avec votre infrastructure",
  description: "Doctolive s'intègre immédiatement dans votre infrastructure existante. S'interface de manière transparente avec les applications de gestion de cabinet les plus courantes."
}];

function Header() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: classes.header,
    style: {
      backgroundImage: `linear-gradient(180deg, hsla(0, 0%, 100%, 0.25), hsla(0, 0%, 100%, 0.25)), url(image/slider-bg.jpeg)`
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          md: "6",
          className: "d-flex flex-column justify-content-center left-content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "h1",
              children: "Consultez en ligne et d\xE9veloppez votre pratique"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "h3",
              children: "Optimisez la gestion de votre cabinet m\xE9dical avec un syst\xE8me de r\xE9servation en ligne facile \xE0 utiliser"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "header-list",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdCheck"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 234,
                    columnNumber: 45
                  }, this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 38
                }, this), " Am\xE9liorez votre r\xE9f\xE9rencement en ligne."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdCheck"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 45
                  }, this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 38
                }, this), " Facilitez l'organisation de votre activit\xE9."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 235,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdCheck"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 45
                  }, this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 236,
                  columnNumber: 38
                }, this), "Consolidez la relation de confiance avec vos patients."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          md: "6",
          className: "right-content",
          id: "inscription",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: " Vous \xEAtes praticien ?  Un de nos experts vous recontacte "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MedecinForm__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 9
  }, this);
}

function MoreInfos() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 256,
    columnNumber: 5
  }, this);
}

function Avantage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 269,
    columnNumber: 5
  }, this);
}

const faqs = [{
  title: "Pourquoi le logiciel doctolive Pro est-il adapté à mon organisation ?",
  description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: ["Nos 140 000 professionnels de sant\xE9 partenaires sont issus de", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
      children: " 88 sp\xE9cialit\xE9s diff\xE9rentes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 82
    }, undefined), " et de ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
      children: "tous types d\u2019organisations"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 133
    }, undefined), " : ils travaillent en cabinet seul ou en groupe, dans des \xE9tablissements de sant\xE9, avec un progiciel ou non etc."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 284,
    columnNumber: 18
  }, undefined)
}];

function FAQ() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: faqs.map((faq, index) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AccordionType, {
        faq: faq
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 13
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 289,
    columnNumber: 5
  }, this);
}

function AccordionType(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_6___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_7___default.a, {
      expandIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdExpandMore"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 25
      }, this),
      "aria-controls": "panel1a-content",
      id: "panel1a-header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
        children: props.faq.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_8___default.a, {
      children: props.faq.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 305,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "@material-ui/core/Accordion":
/*!**********************************************!*\
  !*** external "@material-ui/core/Accordion" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Accordion");

/***/ }),

/***/ "@material-ui/core/AccordionDetails":
/*!*****************************************************!*\
  !*** external "@material-ui/core/AccordionDetails" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),

/***/ "@material-ui/core/AccordionSummary":
/*!*****************************************************!*\
  !*** external "@material-ui/core/AccordionSummary" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionSummary");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

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

/***/ "@material-ui/core/OutlinedInput":
/*!**************************************************!*\
  !*** external "@material-ui/core/OutlinedInput" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9NZWRlY2luSG9tZVN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvYnV0dG9uU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy92YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0cy9JbnB1dEljb25lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0cy9QaG9uZU51bWJlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZWRlY2luRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9iaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvbWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJwcm9maWxlUGFnZVN0eWxlIiwiY29udGFpbmVyIiwic2VjdGlvbiIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiY2FsbFRvQWN0aW9uIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiY2FsbHRvQWN0aW9uQ29udGVudCIsIm1pbkhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNhbGx0b0FjdGlvbkNhcmQiLCJmbGV4V3JhcCIsImNhbGx0b0FjdGlvbkNvbnRlbnRXcmFwIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kU2l6ZSIsIm1hcmdpbiIsIm1heFdpZHRoIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJib3JkZXIiLCJvdXRsaW5lIiwiYm94U2hhZG93IiwiYXBwZWFyYW5jZSIsInRleHRUcmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY2FsbHRvQWN0aW9uSW1hZ2UiLCJ3aWR0aCIsImJvdHRvbSIsImxlZnQiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwib3ZlcmZsb3ciLCJ2ZXJ0aWNhbEFsaWduIiwic2VjdGlvblRpdGxsZSIsImhlYWRlciIsImJhY2tncm91bmRab25lIiwidG9wIiwicmlnaHQiLCJiYWtncm91ZENvbnRhaW5lciIsImRvd25sb2FkZXIiLCJtYXhIZWlnaHQiLCJidXR0b25TdHlsZSIsImJ1dHRvbiIsIm1pbldpZHRoIiwiZ3JheUNvbG9yIiwid2hpdGVDb2xvciIsImhleFRvUmdiIiwibGV0dGVyU3BhY2luZyIsIndpbGxDaGFuZ2UiLCJ3aGl0ZVNwYWNlIiwidG91Y2hBY3Rpb24iLCJibGFja0NvbG9yIiwibWFyZ2luUmlnaHQiLCJ0cmFuc2Zvcm0iLCJ3aGl0ZSIsInJvc2UiLCJyb3NlQ29sb3IiLCJwcmltYXJ5IiwicHJpbWFyeUNvbG9yIiwiaW5mbyIsImluZm9Db2xvciIsInN1Y2Nlc3MiLCJzdWNjZXNzQ29sb3IiLCJ3YXJuaW5nIiwid2FybmluZ0NvbG9yIiwiZGFuZ2VyIiwiZGFuZ2VyQ29sb3IiLCJzaW1wbGUiLCJiYWNrZ3JvdW5kIiwidHJhbnNwYXJlbnQiLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwibGciLCJzbSIsInJvdW5kIiwiYmxvY2siLCJsaW5rIiwianVzdEljb24iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImlucHV0IiwicmVwbGFjZSIsImhleFJlZ2V4IiwidGVzdCIsImxlbmd0aCIsIkVycm9yIiwiZmlyc3QiLCJzZWNvbmQiLCJsYXN0IiwidG9VcHBlckNhc2UiLCJwYXJzZUludCIsImRyYXdlcldpZHRoIiwibWFyZ2luTGVmdCIsImRlZmF1bHRGb250IiwicHJpbWFyeUJveFNoYWRvdyIsImluZm9Cb3hTaGFkb3ciLCJzdWNjZXNzQm94U2hhZG93Iiwid2FybmluZ0JveFNoYWRvdyIsImRhbmdlckJveFNoYWRvdyIsInJvc2VCb3hTaGFkb3ciLCJ3YXJuaW5nQ2FyZEhlYWRlciIsInN1Y2Nlc3NDYXJkSGVhZGVyIiwiZGFuZ2VyQ2FyZEhlYWRlciIsImluZm9DYXJkSGVhZGVyIiwicHJpbWFyeUNhcmRIZWFkZXIiLCJyb3NlQ2FyZEhlYWRlciIsImNhcmRBY3Rpb25zIiwiYm9yZGVyVG9wIiwiY2FyZEhlYWRlciIsImNhcmQiLCJkZWZhdWx0Qm94U2hhZG93IiwidGl0bGUiLCJjYXJkVGl0bGUiLCJjYXJkU3VidGl0bGUiLCJjYXJkTGluayIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJSZWd1bGFyQnV0dG9uIiwicHJvcHMiLCJjbGFzc2VzIiwiY2hpbGRyZW4iLCJzaXplIiwiY2xhc3NOYW1lIiwibXVpQ2xhc3NlcyIsInJlc3QiLCJidG5DbGFzc2VzIiwiY2xhc3NOYW1lcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiYm9vbCIsInN0cmluZyIsIm9iamVjdCIsIm5vZGUiLCJJbnB1dEljb25lIiwiSWNvbmUiLCJvdGhlcnMiLCJzdGFydEFkb3JubWVudCIsIlBob25lRmllbGQiLCJkaXJlY3Rpb24iLCJFbGVtZW50Rm9ybSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJzZW5kaW5nIiwiZGF0YSIsInRyYWl0ZW1lbnREb25uZWUiLCJjb25zb2xlIiwibG9nIiwiQ29uZmlnIiwiYXBpX3BhdGgiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyIiwianNvbiIsInJlcyIsImVycm9yIiwiZG9ubmVJbmNvcmVjdGUiLCJ2YWxpZGF0b3IiLCJjYXRjaCIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInNsaWNlIiwic3RhdGUiLCJub20iLCJwcmVub20iLCJwaG9uZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJ2aWxsZXMiLCJjaXR5SWQiLCJzZXhlIiwiZmllbGRWYWxpZGF0aW9uRXJyb3JzIiwibm9tRXJyb3IiLCJwcmVub21FcnJvciIsIm51bWVyb0Vycm9yIiwiZW1haWxFcnJvciIsImZvcm1EYXRhIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZXNwb25zZSIsImNpdGllcyIsImVyciIsInJlbmRlciIsImhhbmRsZVN1Ym1pdCIsIkZhVXNlck1kIiwidmFsaWRhdGVGaWVsZCIsImhhbmRsZUNoYW5nZSIsIkZhUGhvbmUiLCJGYU1haWxCdWxrIiwic2hvd1Bhc3N3b3JkIiwib2xkIiwibWFwIiwidmlsbGUiLCJpbmRleCIsImlkIiwiZXZlbnQiLCJMb2NhbENvbmZpZyIsInByb2RDb25maWciLCJzdHlsZXMxIiwiSG9tZSIsInNjcmVlbldpZHRoIiwic2V0U2NyZWVuV2lkdGgiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVwZGF0ZVNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJBdmFudGFnZXMiLCJ3aHlDYXJkcyIsIndoeWNhcmQiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJTdGVwcyIsIktlZXAiLCJIZWFkZXIiLCJNb3JlSW5mb3MiLCJBdmFudGFnZSIsImZhcXMiLCJGQVEiLCJmYXEiLCJBY2NvcmRpb25UeXBlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUlFLE1BQU1BLGdCQUFnQixHQUFHO0FBQ3ZCQyxvRUFEdUI7QUFFdkJDLFNBQU8sRUFBRTtBQUNMQyxjQUFVLEVB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QSxVQUROO0FBZ0JELEM7Ozs7Ozs7Ozs7O0FDL1RELHdEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIlxyXG5pbXBvcnQgeyBcclxuICAgIGNvbnRhaW5lcixcclxufSBmcm9tIFwiLi92YXJpYWJsZXMuanNcIjtcclxuICAgIFxyXG4gIGNvbnN0IHByb2ZpbGVQYWdlU3R5bGUgPSB7XHJcbiAgICBjb250YWluZXIsXHJcbiAgICBzZWN0aW9uOiB7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogNjQsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMjQsXHJcbiAgICAgICAgXCImIC5zZWN0aW9uXCI6IHtcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyNCxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiA2NFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY2FsbFRvQWN0aW9uIDoge1xyXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICBcIi13ZWJraXQtYm94LW9yaWVudFwiOiBcInZlcnRpY2FsXCIsXHJcbiAgICAgICAgXCItd2Via2l0LWJveC1kaXJlY3Rpb25cIjogXCJub3JtYWxcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IDY0LFxyXG4gICAgICAgIGZsZXg6IFwiMCAwIGF1dG9cIixcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgY29sb3I6IFwiIzQzNWY3MVwiLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6IDE2LFxyXG4gICAgfSxcclxuICAgIGNhbGx0b0FjdGlvbkNvbnRlbnQ6IHtcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiNTAlXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmMmZhZmRcIixcclxuICAgICAgICBmbGV4OiBcIjEgMCBhdXRvXCIsXHJcblxyXG4gICAgfSxcclxuICAgIGNhbGx0b0FjdGlvbkNhcmQ6IHtcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICBcclxuICAgIH0sXHJcbiAgICBjYWxsdG9BY3Rpb25Db250ZW50V3JhcDoge1xyXG4gICAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLFxyXG4gIFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgvaW1nL2JhY2tncm91bmRwb2ludHMucG5nKWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJyZXBlYXQgbm8tcmVwZWF0XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImJvdHRvbVwiLFxyXG4gICAgICAgIC8vIGJhY2tncm91bmRTaXplOiBcIjIwMCVcIixcclxuICAgICAgICBwYWRkaW5nOiAxNixcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb250YWluXCIsXHJcbiAgICAgICAgXCImIC5maXhlZC13aWR0aFwiIDoge1xyXG4gICAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogNTQ0LFxyXG4gICAgICAgICAgICBcIiYgaDJcIiA6e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA0OCxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjRweFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzIyNDM1OFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIiYgLnRleHQtYm9keVwiIDp7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDE2LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIyNHB4XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjI0MzU4XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiJiAuYnV0dG9uXCIgOntcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvLGFyaWFsLHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBcIi13ZWJraXQtYXBwZWFyYW5jZVwiOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICAgICAgXCItbW96LWFwcGVhcmFuY2VcIjogXCJub25lICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDE2cHhcIixcclxuICAgICAgICAgICAgICAgIFwiLXdlYmtpdC10cmFuc2l0aW9uXCI6IFwib3BhY2l0eSA1MDBtcywgY29sb3IgMTAwbXMsIGJhY2tncm91bmQtY29sb3IgMTAwbXNcIixcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSA1MDBtcywgY29sb3IgMTAwbXMsIGJhY2tncm91bmQtY29sb3IgMTAwbXNcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDU5NmRlXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDUyLFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogNDAsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMyLFxyXG4gICAgICAgICAgICAgICAgXCImIHNwYW5cIiA6IHtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgY2FsbHRvQWN0aW9uSW1hZ2U6IHtcclxuICAgICAgICB3aWR0aDogNDMxLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogNCxcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICBcIiYgaW1nXCIgOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcImluaGVyaXRcIixcclxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJib3R0b21cIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZWN0aW9uVGl0bGxlOiB7XHJcbiAgICAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiMzJweFwiLFxyXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgICAgY29sb3I6IFwiIzIyNDM1OFwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIwIDE2cHggMzJweCAxNnB4XCJcclxuXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyIDoge1xyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiNTAlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICBwYWRkaW5nVG9wOiBcIjcycHggIWltcG9ydGFudFwiLFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiNjRweCAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgXCImIC5yaWdodC1jb250ZW50XCIgOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNmZmZcIiwgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMyLCBcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxNSwgXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDFweCA0cHggMCByZ2JhKDUsMTUwLDIyMiwuMilcIixcclxuICAgICAgICAgICAgXCImIGgzXCI6IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTYsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiJiBmb3JtXCI6IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTYsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kWm9uZSA6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgIH0sXHJcbiAgICBiYWtncm91ZENvbnRhaW5lciA6IHtcclxuICAgICAgIFxyXG4gICAgfSxcclxuICAgIGRvd25sb2FkZXIgOiB7XHJcbiAgICAgICAgXCImIC5kb3dubG9hZGVyLXdyYXBwZXJcIiA6IHtcclxuICAgICAgICAgICAgXCImIGgyXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjI0cHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyMjQzNThcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCImIGgzXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjI0cHhcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM3NzkxYTJcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMzIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDhcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIFwiJiAuYXBwc3RvcmVcIiA6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIFwiJiAuYXBwc3RvcmUtY29udGFpbmVyXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTYsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMDAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXCImIC5hcHBzdG9yZS1jb250ZW50XCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInN0YXJ0XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIiYgLmRvd25sb2FkZXItaW1hZ2VcIiA6IHtcclxuICAgICAgICAgICAgICAgIFwiJiBpbWdcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzIwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBwcm9maWxlUGFnZVN0eWxlO1xyXG4gICIsImltcG9ydCB7XHJcbiAgZ3JheUNvbG9yLFxyXG4gIHByaW1hcnlDb2xvcixcclxuICBpbmZvQ29sb3IsXHJcbiAgc3VjY2Vzc0NvbG9yLFxyXG4gIHdhcm5pbmdDb2xvcixcclxuICBkYW5nZXJDb2xvcixcclxuICByb3NlQ29sb3IsXHJcbiAgd2hpdGVDb2xvcixcclxuICBibGFja0NvbG9yLFxyXG4gIGhleFRvUmdiXHJcbn0gZnJvbSBcIi4vdmFyaWFibGVzLmpzXCI7XHJcblxyXG5jb25zdCBidXR0b25TdHlsZSA9IHtcclxuICBidXR0b246IHtcclxuICAgIG1pbkhlaWdodDogXCJhdXRvXCIsXHJcbiAgICBtaW5XaWR0aDogXCJhdXRvXCIsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYXlDb2xvclswXSxcclxuICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihncmF5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICBwYWRkaW5nOiBcIjEycHggMzBweFwiLFxyXG4gICAgbWFyZ2luOiBcIi4zMTI1cmVtIDFweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMTJweFwiLFxyXG4gICAgZm9udFdlaWdodDogXCI0MDBcIixcclxuICAgIHRleHRUcmFuc2Zvcm06IFwidXBwZXJjYXNlXCIsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIjBcIixcclxuICAgIHdpbGxDaGFuZ2U6IFwiYm94LXNoYWRvdywgdHJhbnNmb3JtXCIsXHJcbiAgICB0cmFuc2l0aW9uOlxyXG4gICAgICBcImJveC1zaGFkb3cgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSlcIixcclxuICAgIGxpbmVIZWlnaHQ6IFwiMS40Mjg1NzE0M1wiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCIsXHJcbiAgICB0b3VjaEFjdGlvbjogXCJtYW5pcHVsYXRpb25cIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdyYXlDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIlxyXG4gICAgfSxcclxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCAmLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgdG9wOiBcIjBcIixcclxuICAgICAgbWFyZ2luVG9wOiBcIi0xZW1cIixcclxuICAgICAgbWFyZ2luQm90dG9tOiBcIi0xZW1cIixcclxuICAgICAgZm9udFNpemU6IFwiMS4xcmVtXCIsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxyXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiXHJcbiAgICB9LFxyXG4gICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgIHdpZHRoOiBcIjE4cHhcIixcclxuICAgICAgaGVpZ2h0OiBcIjE4cHhcIixcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiNHB4XCIsXHJcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwibWlkZGxlXCJcclxuICAgIH0sXHJcbiAgICBcIiYkanVzdEljb25cIjoge1xyXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIjBweFwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJub25lXCIsXHJcbiAgICAgICAgbGVmdDogXCIwcHhcIixcclxuICAgICAgICB0b3A6IFwiMHB4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjQxcHhcIixcclxuICAgICAgICBmb250U2l6ZTogXCIyMHB4XCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2hpdGU6IHtcclxuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIGNvbG9yOiBncmF5Q29sb3JbMF1cclxuICAgIH1cclxuICB9LFxyXG4gIHJvc2U6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogcm9zZUNvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJpbWFyeToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBwcmltYXJ5Q29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHByaW1hcnlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBpbmZvOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGluZm9Db2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCJcclxuICAgIH1cclxuICB9LFxyXG4gIHN1Y2Nlc3M6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogc3VjY2Vzc0NvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihzdWNjZXNzQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2FybmluZzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB3YXJuaW5nQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYW5nZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZGFuZ2VyQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBzaW1wbGU6IHtcclxuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiXHJcbiAgICB9LFxyXG4gICAgXCImJHJvc2VcIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IHJvc2VDb2xvclswXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCImJHByaW1hcnlcIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IHByaW1hcnlDb2xvclswXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCImJGluZm9cIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IGluZm9Db2xvclswXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCImJHN1Y2Nlc3NcIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IHN1Y2Nlc3NDb2xvclswXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCImJHdhcm5pbmdcIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IHdhcm5pbmdDb2xvclswXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXCImJGRhbmdlclwiOiB7XHJcbiAgICAgIFwiJiwmOmZvY3VzLCY6aG92ZXIsJjp2aXNpdGVkXCI6IHtcclxuICAgICAgICBjb2xvcjogZGFuZ2VyQ29sb3JbMF1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgdHJhbnNwYXJlbnQ6IHtcclxuICAgIFwiJiwmOmZvY3VzLCY6aG92ZXJcIjoge1xyXG4gICAgICBjb2xvcjogXCJpbmhlcml0XCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGlzYWJsZWQ6IHtcclxuICAgIG9wYWNpdHk6IFwiMC42NVwiLFxyXG4gICAgcG9pbnRlckV2ZW50czogXCJub25lXCJcclxuICB9LFxyXG4gIGxnOiB7XHJcbiAgICBwYWRkaW5nOiBcIjEuMTI1cmVtIDIuMjVyZW1cIixcclxuICAgIGZvbnRTaXplOiBcIjAuODc1cmVtXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuMzMzMzMzXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiMC4ycmVtXCJcclxuICB9LFxyXG4gIHNtOiB7XHJcbiAgICBwYWRkaW5nOiBcIjAuNDA2MjVyZW0gMS4yNXJlbVwiLFxyXG4gICAgZm9udFNpemU6IFwiMC42ODc1cmVtXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuMnJlbVwiXHJcbiAgfSxcclxuICByb3VuZDoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjMwcHhcIlxyXG4gIH0sXHJcbiAgYmxvY2s6IHtcclxuICAgIHdpZHRoOiBcIjEwMCUgIWltcG9ydGFudFwiXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBcIiYsJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGNvbG9yOiBncmF5Q29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCJcclxuICAgIH1cclxuICB9LFxyXG4gIGp1c3RJY29uOiB7XHJcbiAgICBwYWRkaW5nTGVmdDogXCIxMnB4XCIsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IFwiMTJweFwiLFxyXG4gICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgaGVpZ2h0OiBcIjQxcHhcIixcclxuICAgIG1pbldpZHRoOiBcIjQxcHhcIixcclxuICAgIHdpZHRoOiBcIjQxcHhcIixcclxuICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgc3ZnLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCJcclxuICAgIH0sXHJcbiAgICBcIiYkbGdcIjoge1xyXG4gICAgICBoZWlnaHQ6IFwiNTdweFwiLFxyXG4gICAgICBtaW5XaWR0aDogXCI1N3B4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjU3cHhcIixcclxuICAgICAgbGluZUhlaWdodDogXCI1NnB4XCIsXHJcbiAgICAgIFwiJiAuZmFiLCYgLmZhcywmIC5mYXIsJiAuZmFsLCYgLm1hdGVyaWFsLWljb25zXCI6IHtcclxuICAgICAgICBmb250U2l6ZTogXCIzMnB4XCIsXHJcbiAgICAgICAgbGluZUhlaWdodDogXCI1NnB4XCJcclxuICAgICAgfSxcclxuICAgICAgXCImIHN2Z1wiOiB7XHJcbiAgICAgICAgd2lkdGg6IFwiMzJweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIzMnB4XCJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiJiRzbVwiOiB7XHJcbiAgICAgIGhlaWdodDogXCIzMHB4XCIsXHJcbiAgICAgIG1pbldpZHRoOiBcIjMwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMzBweFwiLFxyXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMTdweFwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiMjlweFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjE3cHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTdweFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXR0b25TdHlsZTtcclxuIiwiXHJcbmNvbnN0IGhleFRvUmdiID0gaW5wdXQgPT4ge1xyXG4gIGlucHV0ID0gaW5wdXQgKyBcIlwiO1xyXG4gIGlucHV0ID0gaW5wdXQucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbiAgbGV0IGhleFJlZ2V4ID0gL1swLTlBLUZhLWZdL2c7XHJcbiAgaWYgKCFoZXhSZWdleC50ZXN0KGlucHV0KSB8fCAoaW5wdXQubGVuZ3RoICE9PSAzICYmIGlucHV0Lmxlbmd0aCAhPT0gNikpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcImlucHV0IGlzIG5vdCBhIHZhbGlkIGhleCBjb2xvci5cIik7XHJcbiAgfVxyXG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDMpIHtcclxuICAgIGxldCBmaXJzdCA9IGlucHV0WzBdO1xyXG4gICAgbGV0IHNlY29uZCA9IGlucHV0WzFdO1xyXG4gICAgbGV0IGxhc3QgPSBpbnB1dFsyXTtcclxuICAgIGlucHV0ID0gZmlyc3QgKyBmaXJzdCArIHNlY29uZCArIHNlY29uZCArIGxhc3QgKyBsYXN0O1xyXG4gIH1cclxuICBpbnB1dCA9IGlucHV0LnRvVXBwZXJDYXNlKCk7XHJcbiAgbGV0IGZpcnN0ID0gaW5wdXRbMF0gKyBpbnB1dFsxXTtcclxuICBsZXQgc2Vjb25kID0gaW5wdXRbMl0gKyBpbnB1dFszXTtcclxuICBsZXQgbGFzdCA9IGlucHV0WzRdICsgaW5wdXRbNV07XHJcbiAgcmV0dXJuIChcclxuICAgIHBhcnNlSW50KGZpcnN0LCAxNikgK1xyXG4gICAgXCIsIFwiICtcclxuICAgIHBhcnNlSW50KHNlY29uZCwgMTYpICtcclxuICAgIFwiLCBcIiArXHJcbiAgICBwYXJzZUludChsYXN0LCAxNilcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNjA7XHJcblxyXG5jb25zdCB0cmFuc2l0aW9uID0ge1xyXG4gIHRyYW5zaXRpb246IFwiYWxsIDAuMzNzIGN1YmljLWJlemllcigwLjY4NSwgMC4wNDczLCAwLjM0NiwgMSlcIlxyXG59O1xyXG5cclxuY29uc3QgY29udGFpbmVyID0ge1xyXG4gIHBhZGRpbmdSaWdodDogXCIxNXB4XCIsXHJcbiAgcGFkZGluZ0xlZnQ6IFwiMTVweFwiLFxyXG4gIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcclxuICBtYXJnaW5MZWZ0OiBcImF1dG9cIlxyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdEZvbnQgPSB7XHJcbiAgZm9udEZhbWlseTogJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXHJcbiAgZm9udFdlaWdodDogXCIzMDBcIixcclxuICBsaW5lSGVpZ2h0OiBcIjEuNWVtXCJcclxufTtcclxuXHJcbmNvbnN0IHByaW1hcnlDb2xvciA9IFtcIiMxYWI5YjlcIiwgXCIjMmQ0ZThjXCIsIFwiIzNhNTk5OFwiLCBcIiM3ZjhjYmFcIl07XHJcbmNvbnN0IHdhcm5pbmdDb2xvciA9IFtcIiNmZjk4MDBcIiwgXCIjZmZhNzI2XCIsIFwiI2ZiOGMwMFwiLCBcIiNmZmEyMWFcIl07XHJcbmNvbnN0IGRhbmdlckNvbG9yID0gW1wiI2Y0NDMzNlwiLCBcIiNlZjUzNTBcIiwgXCIjZTUzOTM1XCIsIFwiI2Y1NWE0ZVwiXTtcclxuY29uc3Qgc3VjY2Vzc0NvbG9yID0gW1wiIzRjYWY1MFwiLCBcIiM2NmJiNmFcIiwgXCIjNDNhMDQ3XCIsIFwiIzVjYjg2MFwiXTtcclxuY29uc3QgaW5mb0NvbG9yID0gW1wiIzAwYWNjMVwiLCBcIiMyNmM2ZGFcIiwgXCIjMDBhY2MxXCIsIFwiIzAwZDNlZVwiXTtcclxuY29uc3Qgcm9zZUNvbG9yID0gW1wiI2U5MWU2M1wiLCBcIiNlYzQwN2FcIiwgXCIjZDgxYjYwXCIsIFwiI2ViMzU3M1wiXTtcclxuY29uc3QgZ3JheUNvbG9yID0gW1xyXG4gIFwiIzk5OVwiLFxyXG4gIFwiIzc3N1wiLFxyXG4gIFwiIzNDNDg1OFwiLFxyXG4gIFwiI0FBQUFBQVwiLFxyXG4gIFwiI0QyRDJEMlwiLFxyXG4gIFwiI0RERFwiLFxyXG4gIFwiI2I0YjRiNFwiLFxyXG4gIFwiIzU1NTU1NVwiLFxyXG4gIFwiIzMzM1wiLFxyXG4gIFwiI2E5YWZiYlwiLFxyXG4gIFwiI2VlZVwiLFxyXG4gIFwiI2U3ZTdlN1wiXHJcbl07XHJcbmNvbnN0IGJsYWNrQ29sb3IgPSBcIiMwMDBcIjtcclxuY29uc3Qgd2hpdGVDb2xvciA9IFwiI0ZGRlwiO1xyXG5cclxuY29uc3QgYm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCAxMHB4IDMwcHggLTEycHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC40MiksIDAgNHB4IDI1cHggMHB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC4yKVwiXHJcbn07XHJcblxyXG5jb25zdCBwcmltYXJ5Qm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IocHJpbWFyeUNvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIlxyXG59O1xyXG5jb25zdCBpbmZvQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoaW5mb0NvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIlxyXG59O1xyXG5jb25zdCBzdWNjZXNzQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIlxyXG59O1xyXG5jb25zdCB3YXJuaW5nQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICBcIiwuNClcIlxyXG59O1xyXG5jb25zdCBkYW5nZXJCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCJcclxufTtcclxuY29uc3Qgcm9zZUJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCJcclxufTtcclxuXHJcbmNvbnN0IHdhcm5pbmdDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyB3YXJuaW5nQ29sb3JbMV0gKyBcIiwgXCIgKyB3YXJuaW5nQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi53YXJuaW5nQm94U2hhZG93XHJcbn07XHJcbmNvbnN0IHN1Y2Nlc3NDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBzdWNjZXNzQ29sb3JbMV0gKyBcIiwgXCIgKyBzdWNjZXNzQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5zdWNjZXNzQm94U2hhZG93XHJcbn07XHJcbmNvbnN0IGRhbmdlckNhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIGRhbmdlckNvbG9yWzFdICsgXCIsIFwiICsgZGFuZ2VyQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5kYW5nZXJCb3hTaGFkb3dcclxufTtcclxuY29uc3QgaW5mb0NhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIGluZm9Db2xvclsxXSArIFwiLCBcIiArIGluZm9Db2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLmluZm9Cb3hTaGFkb3dcclxufTtcclxuY29uc3QgcHJpbWFyeUNhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHByaW1hcnlDb2xvclsxXSArIFwiLCBcIiArIHByaW1hcnlDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLnByaW1hcnlCb3hTaGFkb3dcclxufTtcclxuY29uc3Qgcm9zZUNhcmRIZWFkZXIgPSB7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIFwibGluZWFyLWdyYWRpZW50KDYwZGVnLCBcIiArIHJvc2VDb2xvclsxXSArIFwiLCBcIiArIHJvc2VDb2xvclsyXSArIFwiKVwiLFxyXG4gIC4uLnJvc2VCb3hTaGFkb3dcclxufTtcclxuXHJcbmNvbnN0IGNhcmRBY3Rpb25zID0ge1xyXG4gIG1hcmdpbjogXCIwIDIwcHggMTBweFwiLFxyXG4gIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxyXG4gIGJvcmRlclRvcDogXCIxcHggc29saWQgXCIgKyBncmF5Q29sb3JbMTBdLFxyXG4gIGhlaWdodDogXCJhdXRvXCIsXHJcbiAgLi4uZGVmYXVsdEZvbnRcclxufTtcclxuXHJcbmNvbnN0IGNhcmRIZWFkZXIgPSB7XHJcbiAgbWFyZ2luOiBcIi0yMHB4IDE1cHggMFwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBwYWRkaW5nOiBcIjE1cHhcIlxyXG59O1xyXG5cclxuY29uc3QgY2FyZCA9IHtcclxuICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gIG1hcmdpbjogXCIyNXB4IDBcIixcclxuICBib3hTaGFkb3c6IFwiMCAxcHggNHB4IDAgcmdiYShcIiArIGhleFRvUmdiKGJsYWNrQ29sb3IpICsgXCIsIDAuMTQpXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gIGNvbG9yOiBcInJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjg3KVwiLFxyXG4gIGJhY2tncm91bmQ6IHdoaXRlQ29sb3JcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRCb3hTaGFkb3cgPSB7XHJcbiAgYm9yZGVyOiBcIjBcIixcclxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDEwcHggMjBweCAtMTJweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjQyKSwgMCAzcHggMjBweCAwcHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjIpXCIsXHJcbiAgcGFkZGluZzogXCIxMHB4IDBcIixcclxuICB0cmFuc2l0aW9uOiBcImFsbCAxNTBtcyBlYXNlIDBzXCJcclxufTtcclxuXHJcbmNvbnN0IHRpdGxlID0ge1xyXG4gIGNvbG9yOiBncmF5Q29sb3JbMl0sXHJcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXHJcbiAgbWFyZ2luVG9wOiBcIjMwcHhcIixcclxuICBtYXJnaW5Cb3R0b206IFwiMjVweFwiLFxyXG4gIG1pbkhlaWdodDogXCIzMnB4XCIsXHJcbiAgZm9udEZhbWlseTogXCInUm9ib3RvJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWZcIixcclxuICBcIiYgc21hbGxcIjoge1xyXG4gICAgY29sb3I6IGdyYXlDb2xvclsxXSxcclxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjFcIlxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNhcmRUaXRsZSA9IHtcclxuICAuLi50aXRsZSxcclxuICBtYXJnaW5Ub3A6IFwiMFwiLFxyXG4gIG1hcmdpbkJvdHRvbTogXCIzcHhcIixcclxuICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIFwiJiBhXCI6IHtcclxuICAgIC4uLnRpdGxlLFxyXG4gICAgbWFyZ2luVG9wOiBcIi42MjVyZW1cIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIwLjc1cmVtXCIsXHJcbiAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY2FyZFN1YnRpdGxlID0ge1xyXG4gIG1hcmdpblRvcDogXCItLjM3NXJlbVwiXHJcbn07XHJcblxyXG5jb25zdCBjYXJkTGluayA9IHtcclxuICBcIiYgKyAkY2FyZExpbmtcIjoge1xyXG4gICAgbWFyZ2luTGVmdDogXCIxLjI1cmVtXCJcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGhleFRvUmdiLFxyXG4gIC8vdmFyaWFibGVzXHJcbiAgZHJhd2VyV2lkdGgsXHJcbiAgdHJhbnNpdGlvbixcclxuICBjb250YWluZXIsXHJcbiAgYm94U2hhZG93LFxyXG4gIGNhcmQsXHJcbiAgZGVmYXVsdEZvbnQsXHJcbiAgcHJpbWFyeUNvbG9yLFxyXG4gIHdhcm5pbmdDb2xvcixcclxuICBkYW5nZXJDb2xvcixcclxuICBzdWNjZXNzQ29sb3IsXHJcbiAgaW5mb0NvbG9yLFxyXG4gIHJvc2VDb2xvcixcclxuICBncmF5Q29sb3IsXHJcbiAgYmxhY2tDb2xvcixcclxuICB3aGl0ZUNvbG9yLFxyXG4gIHByaW1hcnlCb3hTaGFkb3csXHJcbiAgaW5mb0JveFNoYWRvdyxcclxuICBzdWNjZXNzQm94U2hhZG93LFxyXG4gIHdhcm5pbmdCb3hTaGFkb3csXHJcbiAgZGFuZ2VyQm94U2hhZG93LFxyXG4gIHJvc2VCb3hTaGFkb3csXHJcbiAgd2FybmluZ0NhcmRIZWFkZXIsXHJcbiAgc3VjY2Vzc0NhcmRIZWFkZXIsXHJcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcclxuICBpbmZvQ2FyZEhlYWRlcixcclxuICBwcmltYXJ5Q2FyZEhlYWRlcixcclxuICByb3NlQ2FyZEhlYWRlcixcclxuICBjYXJkQWN0aW9ucyxcclxuICBjYXJkSGVhZGVyLFxyXG4gIGRlZmF1bHRCb3hTaGFkb3csXHJcbiAgdGl0bGUsXHJcbiAgY2FyZFRpdGxlLFxyXG4gIGNhcmRTdWJ0aXRsZSxcclxuICBjYXJkTGlua1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuLy8gbWF0ZXJpYWwtdWkgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuXHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9maWxlVXBsb2FkZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9hc3NldHMvanNzL2J1dHRvblN0eWxlLmpzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWd1bGFyQnV0dG9uKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHtcclxuICAgIGNvbG9yLFxyXG4gICAgcm91bmQsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGRpc2FibGVkLFxyXG4gICAgc2ltcGxlLFxyXG4gICAgc2l6ZSxcclxuICAgIGJsb2NrLFxyXG4gICAgbGluayxcclxuICAgIGp1c3RJY29uLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgbXVpQ2xhc3NlcyxcclxuICAgIC4uLnJlc3RcclxuICB9ID0gcHJvcHM7XHJcbiAgY29uc3QgYnRuQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xyXG4gICAgW2NsYXNzZXMuYnV0dG9uXTogdHJ1ZSxcclxuICAgIFtjbGFzc2VzW3NpemVdXTogc2l6ZSxcclxuICAgIFtjbGFzc2VzW2NvbG9yXV06IGNvbG9yLFxyXG4gICAgW2NsYXNzZXMucm91bmRdOiByb3VuZCxcclxuICAgIFtjbGFzc2VzLmRpc2FibGVkXTogZGlzYWJsZWQsXHJcbiAgICBbY2xhc3Nlcy5zaW1wbGVdOiBzaW1wbGUsXHJcbiAgICBbY2xhc3Nlcy5ibG9ja106IGJsb2NrLFxyXG4gICAgW2NsYXNzZXMubGlua106IGxpbmssXHJcbiAgICBbY2xhc3Nlcy5qdXN0SWNvbl06IGp1c3RJY29uLFxyXG4gICAgW2NsYXNzTmFtZV06IGNsYXNzTmFtZVxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIHsuLi5yZXN0fSBjbGFzc2VzPXttdWlDbGFzc2VzfSBjbGFzc05hbWU9e2J0bkNsYXNzZXN9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59XHJcblxyXG5SZWd1bGFyQnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcclxuICAgIFwicHJpbWFyeVwiLFxyXG4gICAgXCJpbmZvXCIsXHJcbiAgICBcInN1Y2Nlc3NcIixcclxuICAgIFwid2FybmluZ1wiLFxyXG4gICAgXCJkYW5nZXJcIixcclxuICAgIFwicm9zZVwiLFxyXG4gICAgXCJ3aGl0ZVwiLFxyXG4gICAgXCJ0cmFuc3BhcmVudFwiXHJcbiAgXSksXHJcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcInNtXCIsIFwibGdcIl0pLFxyXG4gIHNpbXBsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcm91bmQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBibG9jazogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbGluazogUHJvcFR5cGVzLmJvb2wsXHJcbiAganVzdEljb246IFByb3BUeXBlcy5ib29sLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAvLyB1c2UgdGhpcyB0byBwYXNzIHRoZSBjbGFzc2VzIHByb3BzIGZyb20gTWF0ZXJpYWwtVUlcclxuICBtdWlDbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxyXG59O1xyXG4iLCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuXHJcbmZ1bmN0aW9uIElucHV0SWNvbmUocHJvcHMpIHtcclxuIFxyXG4gICAgICBsZXQge0ljb25lLCAuLi5vdGhlcnN9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICB7Li4ub3RoZXJzfVxyXG4gICAgICAgIHdpZHRoPSBcIjIwMFwiXHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXHJcbiAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxJY29uZSBjb2xvcj1cIiMxYWI5YjlcIiAvPlxyXG4gICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG4gIFxyXG4gIH1cclxuICBleHBvcnQgZGVmYXVsdCBJbnB1dEljb25lIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG9uZUZpZWxkKHByb3BzKSB7XHJcbiAgICBsZXQge0ljb25lLCAuLi5vdGhlcnN9ID0gcHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgIDxUZXh0RmllbGRcclxuICAgIHsuLi5vdGhlcnN9XHJcbiAgICAgICAgd2lkdGg9IFwiMjAwXCJcclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgc3R5bGU9e3tkaXJlY3Rpb246IFwibHRyXCJ9fVxyXG4gICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICBzdGFydEFkb3JubWVudDogKFxyXG4gICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxyXG4gICAgICAgICAgICA8SWNvbmUgY29sb3I9XCIjMWFiOWI5XCIgLz5cclxuICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICApLFxyXG4gICAgICAgIH19XHJcbiAgICAvPlxyXG4gICAgKVxyXG4gICAgXHJcbiAgfSIsIlxyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQ29sLFJvdywgQWxlcnQsIENvbGxhcHNlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xyXG5cclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XHJcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUxhYmVsJztcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJztcclxuaW1wb3J0IE91dGxpbmVkSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvT3V0bGluZWRJbnB1dCc7XHJcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xyXG5cclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XHJcbi8vIGltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCc7XHJcbmltcG9ydCB7TWRWaXNpYmlsaXR5LCBNZFZpc2liaWxpdHlPZmZ9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xyXG5cclxuLy8gc2VydmljZXNcclxuLy8gaW1wb3J0IHtnZXRDaXR5LCBzaWdudXBNZWRlY2lufSBmcm9tICdzZXJ2aWNlcy9tZWRlY2luL01lZGVjaW5TZXJ2aWNlJ1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IENvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCJcclxuXHJcbmltcG9ydCBQaG9uZUZpZWxkIGZyb20gJy4vSW5wdXRzL1Bob25lTnVtYmVyL2luZGV4JztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICcuL0lucHV0cy9JbnB1dEljb25lL2luZGV4JztcclxuaW1wb3J0IEJ1dHRvbiAgZnJvbSAnLi9DdXN0b21CdXR0b25zL0J1dHRvbic7XHJcblxyXG5cclxuaW1wb3J0IHsgRmFNYWlsQnVsaywgRmFQaG9uZSwgRmFVc2VyTWQgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAgY2xhc3MgRWxlbWVudEZvcm0gZXh0ZW5kcyBDb21wb25lbnQgIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgbm9tOiBcIlwiLFxyXG4gICAgICAgICAgICBwcmVub206XCJcIixcclxuICAgICAgICAgICAgcGhvbmU6XCJcIixcclxuICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOlwiXCIsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogXCJcIixcclxuICAgICAgICAgICAgdmlsbGVzOltdLFxyXG4gICAgICAgICAgICBjaXR5SWQ6IFwiXCIsXHJcblx0ICAgICAgICBzZXhlOlwiXCIsXHJcbiAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbkVycm9yczp7XHJcbiAgICAgICAgICAgICAgICBub21FcnJvcjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIHByZW5vbUVycm9yOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbnVtZXJvRXJyb3I6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlbWFpbEVycm9yOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNlbmRpbmc6ZmFsc2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbmRpbmc6IHRydWV9KTtcclxuXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnRyYWl0ZW1lbnREb25uZWUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhDb25maWcuYXBpX3BhdGgpXHJcbiAgICAgICAgY29uc3QgbGluayA9IENvbmZpZy5hcGlfcGF0aCArIFwiL21lZGVjaW4vc2lnbnVwXCJcclxuICAgICAgICBjb25zb2xlLmxvZyhsaW5rKVxyXG4gICAgICAgIGZldGNoKGxpbmsse1xyXG4gICAgICAgICAgICBtZXRob2Q6XCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoey4uLmRhdGF9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgIChyKSA9PiByLmpzb24oKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFyZXMuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbmRpbmc6IGZhbHNlLCBzdWNjZXNzOnRydWUsIGRvbm5lSW5jb3JlY3RlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlbmRpbmc6IGZhbHNlLCBzdWNjZXNzOmZhbHNlLCBkb25uZUluY29yZWN0ZTp0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMudmFsaWRhdG9yKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKS5jYXRjaChlcnJvciA9PnsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZW5kaW5nOiBmYWxzZSwgc3VjY2VzczpmYWxzZSwgZG9ubmVJbmNvcmVjdGU6dHJ1ZX0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdHJhaXRlbWVudERvbm5lZSgpe1xyXG4gICAgICAgIGxldCBmb3JtRGF0YT17fTtcclxuICAgICAgICBcclxuICAgICAgICBmb3JtRGF0YS5ub209dGhpcy5zdGF0ZS5ub21cclxuICAgICAgICBmb3JtRGF0YS5waG9uZT10aGlzLnN0YXRlLnBob25lXHJcbiAgICAgICAgZm9ybURhdGEuZW1haWw9dGhpcy5zdGF0ZS5lbWFpbFxyXG4gICAgICAgIGZvcm1EYXRhLnByZW5vbT10aGlzLnN0YXRlLnByZW5vbVxyXG4gICAgICAgIGZvcm1EYXRhLmNpdHlJZD10aGlzLnN0YXRlLmNpdHlJZFxyXG5cdCAgICBmb3JtRGF0YS5zZXhlID0gdGhpcy5zdGF0ZS5zZXhlXHJcblx0ICAgIGZvcm1EYXRhLnBhc3N3b3JkID0gdGhpcy5zdGF0ZS5wYXNzd29yZFxyXG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcclxuICAgIH1cclxuIFxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9ICh7dGFyZ2V0IDoge3ZhbHVlLCBuYW1lfX0pID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBpZihuYW1lID09PSBcInBob25lXCIpe1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgbm9uLWRpZ2l0cywgdHVybiBpbml0aWFsIDMzIGludG8gbm90aGluZ1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvW15cXGQrXS9nLCAnJylcclxuICAgICAgICAgICAgLnJlcGxhY2UoL14wLywgJysyMTInKVxyXG4gICAgICAgICAgICAvLyBTdGljayB0byBmaXJzdCAxMCwgaWdub3JlIGxhdGVyIGRpZ2l0c1xyXG4gICAgICAgICAgICAuc2xpY2UoMCwgMTMpXHJcbiAgICAgICAgICAgIC8vIEFkZCBhIHNwYWNlIGFmdGVyIGFueSAyLWRpZ2l0IGdyb3VwIGZvbGxvd2VkIGJ5IG1vcmUgZGlnaXRzXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgJyQxICcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9KSA7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBmZXRjaChgJHtDb25maWcuYXBpX3BhdGh9L2NpdHlgLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsIFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLnRoZW4gKChyZXMpID0+IHtcclxuICAgICAgICAgICAgcmVzLmpzb24oKS50aGVuIChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmNpdGllcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmlsbGVzOiByZXNwb25zZS5jaXRpZXN9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQge3ZpbGxlcywgZmllbGRWYWxpZGF0aW9uRXJyb3JzLCBub20sIHByZW5vbSwgcGhvbmUsIGVtYWlsLCBkb25uZUluY29yZWN0ZSwgY2l0eUlkLCBzdWNjZXNzLCAgc2V4ZSxzZW5kaW5nfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIGNsYXNzTmFtZT1cIm10LTNcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtmaWVsZFZhbGlkYXRpb25FcnJvcnMubm9tRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWb3RyZSBub20gZGUgZmFtaWxsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEljb25lPXtGYVVzZXJNZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElucHV0TGFiZWxQcm9wcz17e3N0eWxlOntyaWdodDogMCwgbGVmdDpcImF1dG9cIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy52YWxpZGF0ZUZpZWxkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgY2xhc3NOYW1lPVwibXQtM1wiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvdHJlIHByZW5vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZmllbGRWYWxpZGF0aW9uRXJyb3JzLnByZW5vbUVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJlbm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJY29uZT17RmFVc2VyTWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5wdXRMYWJlbFByb3BzPXt7c3R5bGU6e3JpZ2h0OiAwLCBsZWZ0OlwiYXV0b1wifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLnZhbGlkYXRlRmllbGR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmVub21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmVub219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgY2xhc3NOYW1lPVwibXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBob25lRmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOdW3DqXJvIGRlIHTDqWzDqXBob25lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWNvbmU9e0ZhUGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtmaWVsZFZhbGlkYXRpb25FcnJvcnMubnVtZXJvRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5wdXRMYWJlbFByb3BzPXt7c3R5bGU6e3JpZ2h0OiAwLCBsZWZ0OlwiYXV0b1wifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLnZhbGlkYXRlRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKzIxMiA2MDAgMDAwIDAwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFJvdyBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtmaWVsZFZhbGlkYXRpb25FcnJvcnMubnVtZXJvRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0ICB2YXJpYW50PVwiZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiNlwiIGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBZHJlc3NlIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJY29uZT17RmFNYWlsQnVsa31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkcmVzc2UgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZmllbGRWYWxpZGF0aW9uRXJyb3JzLmVtYWlsRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5wdXRMYWJlbFByb3BzPXt7c3R5bGU6e3JpZ2h0OiAwLCBsZWZ0OlwiYXV0b1wifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLnZhbGlkYXRlRmllbGR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgY2xhc3NOYW1lPVwibXQtM1wiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1wYXNzd29yZFwiPiBNb3QgZGUgcGFzc2UgPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYWRvcm5tZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dGhpcy5zdGF0ZS5zaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb3QgZGUgcGFzc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInRvZ2dsZSBwYXNzd29yZCB2aXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgKCkgPT4gdGhpcy5zZXRTdGF0ZShvbGQgPT57cmV0dXJuICB7Li4ub2xkLCBzaG93UGFzc3dvcmQ6ICF0aGlzLnN0YXRlLnNob3dQYXNzd29yZH19KX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93UGFzc3dvcmQgPyA8TWRWaXNpYmlsaXR5IC8+IDogPE1kVmlzaWJpbGl0eU9mZiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiMTJcIiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGZ1bGxXaWR0aCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgPlZpbGxlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NpdHlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZpbGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNpdHlJZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmlsbGVzLm1hcCgoKHZpbGxlLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpbmRleH0gdmFsdWU9e3ZpbGxlLmlkfT57dmlsbGUubmFtZX08L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjEyXCIgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNvbXBvbmVudD1cImRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgY29tcG9uZW50PVwibGVnZW5kXCI+U2V4ZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0dyb3VwIGNsYXNzTmFtZT1cImZsZXgtcm93XCIgYXJpYS1sYWJlbD1cIlNleGVcIiBuYW1lPVwic2V4ZVwiIHZhbHVlPXtzZXhlfSBvbkNsaWNrPXsoZXZlbnQpPT57dGhpcy5zZXRTdGF0ZSh7c2V4ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9eydob21tZSd9IGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJIb21tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPXsnZmVtbWUnfSBjb250cm9sPXs8UmFkaW8gLz59IGxhYmVsPVwiRmVtbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17ZG9ubmVJbmNvcmVjdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0ICB2YXJpYW50PVwiZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVzIGluZm9ybWF0aW9uIHNvbnQgaW5jb3JyZWN0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e3N1Y2Nlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCAgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZW1hbmRlIGVudm95ZXIgYXZlYyBzdWNjw6lzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIG10LTQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJwcmltYXJ5XCI+IEVucmVnaXN0cmVyIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcblxyXG59XHJcbn1cclxuIiwiY29uc3QgTG9jYWxDb25maWcgPSB7XHJcbiAgICBhcGlfcGF0aCA6IFwiaHR0cDovL2xvY2FsaG9zdDo0MzAwXCIsXHJcbn1cclxuY29uc3QgcHJvZENvbmZpZyA9IHtcclxuICAgIGFwaV9wYXRoIDogXCJodHRwczovL2FwaS5kb2N0b2xpdmUubWFcIixcclxufVxyXG5leHBvcnQgZGVmYXVsdCBwcm9kQ29uZmlnOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5cclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuXHJcbi8vIGltcG9ydCBCYW5uZXJIb21lIGZyb20gJy4vLi4vYXNzZXRzL2ltZy9tZWRpY2FsZGlzY3Vzc2lvbi5qcGcnXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBCaUNoZWNrLCBCaVNlYXJjaCwgQmlDYWxlbmRhcn0gZnJvbSAncmVhY3QtaWNvbnMvYmknXHJcblxyXG5cclxuaW1wb3J0IEFjY29yZGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb24nO1xyXG5pbXBvcnQgQWNjb3JkaW9uU3VtbWFyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25TdW1tYXJ5JztcclxuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlscyc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5cclxuaW1wb3J0IHtNZEV4cGFuZE1vcmUsIE1kQ2hlY2t9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xyXG5cclxuaW1wb3J0IHN0eWxlczEgZnJvbSBcIi4uL2Fzc2V0cy9qc3MvTWVkZWNpbkhvbWVTdHlsZS5qc1wiO1xyXG5cclxuaW1wb3J0IE1lZGVjaW5Gb3JtIGZyb20gJy4vLi4vY29tcG9uZW50cy9NZWRlY2luRm9ybSdcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzMSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtzY3JlZW5XaWR0aCwgc2V0U2NyZWVuV2lkdGhdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTaXplKCkge1xyXG4gICAgICAgICAgc2V0U2NyZWVuV2lkdGgod2luZG93LmlubmVyV2lkdGgpXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVNpemUpO1xyXG4gICAgdXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVNpemUpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2ID5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPiBEb2N0b2xpdmUgLSBSZW5kZXotdm91cyBlbiBsaWduZSBhdmVjIHZvdHJlIG3DqWRlY2luPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICA8SGVhZGVyIHNjcmVlbldpZHRoPXtzY3JlZW5XaWR0aH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QXZhbnRhZ2VzIC8+XHJcbiAgICAgICAgPFN0ZXBzIC8+XHJcbiAgICAgICAgPEtlZXAgLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEF2YW50YWdlcygpe1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uICsgXCIgcmVwZWF0LWljb24tYm94XCJ9PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyID5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvblRpdGxsZX0gPlBvdXJxdW9pIGxlcyBwcm9mZXNzaW9ubmVscyBkZSBsYSBzYW50w6kgYWltZW50IERvY3RvbGl2ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3aHlDYXJkcy5tYXAoKHdoeWNhcmQsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IGxnPVwiNFwiIG1kPVwiNlwiIHhzPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1yZXBlYXQgZC1mbGV4IGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyLWljb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IDxpbWcgc3JjID17IGAvaW1hZ2UvJHt3aHljYXJkLmljb259YH0gYWx0PVwiLi4uXCIgY2xhc3NOYW1lPVwibWItM1wiIC8+IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0aXRsZS10MyBmdy03MDAgbWItMTAgY29sb3ItcHJpbWFyeVwiPnt3aHljYXJkLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3doeWNhcmQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBTdGVwcyAoKXtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybihcclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb24gKyBcIiBzZWN0aW9uLWhvbWUtaG93LXdvcmtzIHBhZGRpbmdfdG9wXCJ9PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRpbmcgdGV4dC1jZW50ZXJcIj4gRMOpbWFycmV6IGVuIDMgw6l0YXBlcyBzaW1wbGVzPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHctYXJlYVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh3LWJveCBody1ib3gtLW10XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHctYm94X19pY29uXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1zZWFyY2hcIj4gPEJpU2VhcmNoIC8+IDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImh3LWJveF9fdGl0bGVcIj4gUmVqb2lnbmV6LW5vdXMgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaHctYm94X190ZXh0XCI+IFMnaW5zY3JpcmUgYXZlYyB2b3MgY29vcmRvbm7DqWVzIHN1ciBsYSBwbGF0ZWZvcm1lIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJody1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJody1ib3hfX2ljb25cIj4gPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1zdmcgdmEtbWlkZGxlLWlubGluZVwiPiA8QmlDYWxlbmRhciAvPiA8L3NwYW4+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaHctYm94X190aXRsZVwiPiBWw6lyaWZpY2F0aW9uIGQnaWRlbnRpdMOpIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImh3LWJveF9fdGV4dFwiPiBDb21wbGV0ZXogbGUgcHJvY2Vzc3VzIGRlIHbDqXJpZmljYXRpb24gYXZlYyBub3MgY29uc3VsdGFudCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHctYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHctYm94X19pY29uXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1mYXQtY2hlY2tcIj48QmlDaGVjayAvPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImh3LWJveF9fdGl0bGVcIj4gQ29uc3VsdGV6IHZvcyBwYXRpZW50IDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImh3LWJveF9fdGV4dFwiPiAgQ29tbWVuY2VyIMOgIGNvbnN1bHRlciBlbiB2aWTDqW8gZXQgZ8OpcmV6IHZvcyByZW5kZXotdm91cyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5mdW5jdGlvbiBLZWVwKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb24gKyBcIiBwYWRkaW5nX3RvcFwifT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBtZD1cIjZcIiB4cz1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz4gR2FyZGV6IGxlcyBwYXRpZW50cyBkZSB2b3RyZSBjbGluaXF1ZSBlbmdhZ8OpcyA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND4gSW1wcmVzc2lvbm5leiB2b3MgcGF0aWVudHMgZW4gbGV1ciBwZXJtZXR0YW50IGRlIHN1aXZyZSBhdmVjIHZvdXMgZW4gbGlnbmUgPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT4gQXVnbWVudGVyIGxhIHLDqXRlbnRpb24gZGVzIHBhdGllbnRzIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiBJbnRlcmFnaXNzZXogYXZlYyBsZXMgcGF0aWVudHMgYXByw6hzIGxldXJzIHJlbmRlei12b3VzLiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT4gQ29udHLDtGxleiBlZmZpY2FjZW1lbnQgbGVzIHN1aXZpcyA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8cD4gRGlzY3V0ZXogYXZlYyBsZXMgcGF0aWVudHMgc2FucyBwYXJ0YWdlciB2b3RyZSBudW3DqXJvIHBlcnNvbm5lbC4gRMOpZmluaXNzZXogdm90cmUgZHVyw6llIGRlIHN1aXZpIGdyYXR1aXQgZXQgcGx1cyBlbmNvcmUuIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGg1PiBNb27DqXRpc2VyIGxlcyBzdWl2aXMgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPHA+ICBNb27DqXRpc2VyIGxlcyBpbnRlcmFjdGlvbnMgZGUgc3VpdmkgcsOpcMOpdMOpZXMgZW4gYXNzdXJhbnQgbGUgc3VpdmkgZGVzIHBhdGllbnRzIGRhbnMgbGUgY29uZm9ydCBkZSBsZXVyIGRvbWljaWxlLiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCIgeHM9XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2Uva2VlcC5wbmdcIiBhbHQ9XCJEb2N0b3IgdGFraW5nIGNhcmUgb2YgZmFtaWx5XCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHdoeUNhcmRzID0gW1xyXG4gIHtcclxuICAgIGljb246IFwid2FzdGUuc3ZnXCIsXHJcbiAgICB0aXRsZTogXCJOZSBwZXJkZXogcGx1cyBkZSB0ZW1wcyDDoCBnw6lyZXIgbGEgcHJpc2UgZGUgcmVuZGV6LXZvdXNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlVuIHN5c3TDqG1lIGRlIHLDqXNlcnZhdGlvbiBtw6lkaWNhbGUgZW4gbGlnbmUgYXZlYyBkZSBub21icmV1c2VzIGZvbmN0aW9ubmFsaXTDqXMuIEfDqXJleiB2b3RyZSBjYWJpbmV0IGF2ZWMgdW5lIHZ1ZSBjbGFpcmUgZGVzIHJlbmRlei12b3VzIMOgIHZlbmlyLiBQZXJzb25uYWxpc2V6IHRvdXMgbGVzIHBhcmFtw6h0cmVzIGRvbnQgdm91cyBhdmV6IGJlc29pbi5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IFwiYWNjZXNzLnN2Z1wiLFxyXG4gICAgdGl0bGU6IFwiQWNjw6lkZXogw6Agdm90cmUgaG9yYWlyZSBtw6lkaWNhbCBvw7kgdm91cyB2b3VsZXosIHF1YW5kIHZvdXMgbGUgc291aGFpdGV6XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJOb3RyZSBsb2dpY2llbCBkZSBwbGFuaWZpY2F0aW9uIG3DqWRpY2FsZSBlc3QgYWNjZXNzaWJsZSBkZXB1aXMgdm90cmUgb3JkaW5hdGV1ciwgdGFibGV0dGUgb3Ugc21hcnRwaG9uZS4gVm91cyBwb3V2ZXogdsOpcmlmaWVyIGxlcyBpbmZvcm1hdGlvbnMgZGUgdm90cmUgcHJhdGlxdWUgw6AgdG91dCBtb21lbnQsIG/DuSBxdWUgdm91cyBzb3llei5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IFwib2ZmZXIuc3ZnXCIsXHJcbiAgICB0aXRsZTogXCJPZmZyaXIgbGEgdMOpbMOpbcOpZGVjaW5lIGV0IMOpbGFyZ2lyIGwnYWNjw6hzIGF1eCBzZXJ2aWNlcyBkZSBzYW50w6kgcG91ciBsZXMgcGF0aWVudHNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxhIGNvbnN1bHRhdGlvbiBlbiBsaWduZSBwZXJtZXQgZGUgbWFpbnRlbmlyIGxhIGNvbnRpbnVpdMOpIGRlcyBzb2lucyBwb3VyIHZvcyBwYXRpZW50cy4gQXVnbWVudGVyIGxhIGRpc3RhbmNlIHNvY2lhbGUgZXQgZMOpbGl2cmVyIGRlcyBvcmRvbm5hbmNlcyBhdXggcGF0aWVudHMgw6AgZG9taWNpbGUuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBcImVhc2llci5zdmdcIixcclxuICAgIHRpdGxlOiBcIkZhY2lsaXRleiBsYSBwcmlzZSBkZSByZW5kZXotdm91cyBtw6lkaWNhdXggcG91ciB2b3MgcGF0aWVudHNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlZvcyBwYXRpZW50cyBwZXV2ZW50IHByZW5kcmUgZGVzIHJlbmRlei12b3VzIDI0aCAvIDI0IGV0IDdqIC8gNywgdm90cmUgY2FiaW5ldCByZcOnb2l0IG1vaW5zIGQnYXBwZWxzIGVudHJhbnRzIGV0IHZvdXMgcmVtcGxpc3NleiBsZXMgY3LDqW5lYXV4IGRpc3BvbmlibGVzIG3Dqm1lIMOgIGxhIGRlcm5pw6hyZSBtaW51dGUuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBcImN1c3RpbWlzZS5zdmdcIixcclxuICAgIHRpdGxlOiBcIlBlcnNvbm5hbGlzZXogdm90cmUgaG9yYWlyZSBkZSBwcmF0aXF1ZSBlbiBmb25jdGlvbiBkZSB2b3MgYmVzb2luc1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRMOpZmluaXNzZXogY2hhcXVlIHBhcmFtw6h0cmUgcG91ciBxdWUgdm90cmUgc3lzdMOobWUgZGUgcsOpc2VydmF0aW9uIGVuIGxpZ25lIHLDqXBvbmRlIMOgIHRvdXRlcyB2b3MgYXR0ZW50ZXMuIE91dnJleiBsZXMgcGxhZ2VzIGhvcmFpcmVzIGRpc3BvbmlibGVzIGV0IHPDqWxlY3Rpb25uZXogbGVzIHJhaXNvbnMgZGUgbGEgdmlzaXRlIGVuIGZvbmN0aW9uIGRlIHZvdHJlIHNww6ljaWFsaXTDqS5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IFwiaW5zdGFsbC5zdmdcIixcclxuICAgIHRpdGxlOiBcIkluc3RhbGxleiBldCBtYcOudHJpc2V6IHZvdHJlIGhvcmFpcmUgbcOpZGljYWwgZW4gbGlnbmUgZW4gdW4gcmllbiBkZSB0ZW1wc1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTm90cmUgw6lxdWlwZSBkw6lkacOpZSB2b3VzIGFpZGUgw6AgbWV0dHJlIGVuIHBsYWNlIHZvdHJlIHN5c3TDqG1lIGRlIHLDqXNlcnZhdGlvbiBtw6lkaWNhbGUuIERldmVuZXogdW4gZXhwZXJ0IGluc3RhbnRhbsOpbWVudCBncsOiY2Ugw6Agbm90cmUgZG9jdW1lbnRhdGlvbiBjb21wbMOodGUuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBcImNoYXQuc3ZnXCIsXHJcbiAgICB0aXRsZTogXCJDb21tdW5pcXVleiBlbiB0ZW1wcyByw6llbCBhdmVjIHZvcyBwYXRpZW50cyBldCByw6lkdWlzZXogbGVzIHJlbmRlei12b3VzIG1hbnF1w6lzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMYWlzc2V6IGxlcyBwYXRpZW50cyByw6lzZXJ2ZXIsIGFubnVsZXIgb3UgcmVwb3J0ZXIgbGV1cnMgcmVuZGV6LXZvdXMgZW4gbGlnbmUgMjRoIC8gMjQgZXQgN2ogLyA3LiBSw6lkdWlzZXogbGVzIHJlbmRlei12b3VzIG1hbnF1w6lzIGdyw6JjZSBhdXggcmFwcGVscyBhdXRvbWF0aXF1ZXMgcGFyIGUtbWFpbC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IFwiaW1wcm92ZS5zdmdcIixcclxuICAgIHRpdGxlOiBcIkFtw6lsaW9yZXogdm90cmUgdmlzaWJpbGl0w6kgZW4gbGlnbmUgZXQgdHJvdXZleiBkZSBub3V2ZWF1eCBwYXRpZW50c1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVm90cmUgbGlzdGUgRG9jdG9saXZlIHBlcm1ldCBhdXggcGF0aWVudHMgZGUgdHJvdXZlciBmYWNpbGVtZW50IHZvdHJlIGNhYmluZXQuIExhaXNzZXogbGVzIHBhdGllbnRzIHLDqXNlcnZlciBsZXVycyByZW5kZXotdm91cyBlbiBsaWduZSBzdXIgbm90cmUgcGxhdGVmb3JtZS5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IFwic3luYy5zdmdcIixcclxuICAgIHRpdGxlOiBcIlN5bmNocm9uaXNleiBub3RyZSBsb2dpY2llbCBkZSBwbGFuaWZpY2F0aW9uIGRlcyBwYXRpZW50cyBhdmVjIHZvdHJlIGluZnJhc3RydWN0dXJlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJEb2N0b2xpdmUgcydpbnTDqGdyZSBpbW3DqWRpYXRlbWVudCBkYW5zIHZvdHJlIGluZnJhc3RydWN0dXJlIGV4aXN0YW50ZS4gUydpbnRlcmZhY2UgZGUgbWFuacOocmUgdHJhbnNwYXJlbnRlIGF2ZWMgbGVzIGFwcGxpY2F0aW9ucyBkZSBnZXN0aW9uIGRlIGNhYmluZXQgbGVzIHBsdXMgY291cmFudGVzLlwiLFxyXG4gIH0sXHJcbl1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlciAoKXtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSB7Y2xhc3Nlcy5oZWFkZXJ9IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgaHNsYSgwLCAwJSwgMTAwJSwgMC4yNSksIGhzbGEoMCwgMCUsIDEwMCUsIDAuMjUpKSwgdXJsKGltYWdlL3NsaWRlci1iZy5qcGVnKWB9fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgPiBcclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBsZWZ0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDFcIj5Db25zdWx0ZXogZW4gbGlnbmUgZXQgZMOpdmVsb3BwZXogdm90cmUgcHJhdGlxdWU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgzXCI+T3B0aW1pc2V6IGxhIGdlc3Rpb24gZGUgdm90cmUgY2FiaW5ldCBtw6lkaWNhbCBhdmVjIHVuIHN5c3TDqG1lIGRlIHLDqXNlcnZhdGlvbiBlbiBsaWduZSBmYWNpbGUgw6AgdXRpbGlzZXI8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoZWFkZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gPHNwYW4+IDxNZENoZWNrICAvPiA8L3NwYW4+IEFtw6lsaW9yZXogdm90cmUgcsOpZsOpcmVuY2VtZW50IGVuIGxpZ25lLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiA8c3Bhbj4gPE1kQ2hlY2sgLz4gPC9zcGFuPiBGYWNpbGl0ZXogbCdvcmdhbmlzYXRpb24gZGUgdm90cmUgYWN0aXZpdMOpLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiA8c3Bhbj4gPE1kQ2hlY2sgLz4gPC9zcGFuPkNvbnNvbGlkZXogbGEgcmVsYXRpb24gZGUgY29uZmlhbmNlIGF2ZWMgdm9zIHBhdGllbnRzLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiIGNsYXNzTmFtZT1cInJpZ2h0LWNvbnRlbnRcIiBpZD1cImluc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4gVm91cyDDqnRlcyBwcmF0aWNpZW4gPyAgVW4gZGUgbm9zIGV4cGVydHMgdm91cyByZWNvbnRhY3RlIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRlY2luRm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbiAgXHJcbmZ1bmN0aW9uIE1vcmVJbmZvcygpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgPlxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiAgXHJcbmZ1bmN0aW9uIEF2YW50YWdlKCkge1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgPlxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgZmFxcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJQb3VycXVvaSBsZSBsb2dpY2llbCBkb2N0b2xpdmUgUHJvIGVzdC1pbCBhZGFwdMOpIMOgIG1vbiBvcmdhbmlzYXRpb24gP1wiLFxyXG4gICAgZGVzY3JpcHRpb246IDxwPk5vcyAxNDAgMDAwIHByb2Zlc3Npb25uZWxzIGRlIHNhbnTDqSBwYXJ0ZW5haXJlcyBzb250IGlzc3VzIGRlPHN0cm9uZz4gODggc3DDqWNpYWxpdMOpcyBkaWZmw6lyZW50ZXM8L3N0cm9uZz4gZXQgZGUgPHN0cm9uZz50b3VzIHR5cGVzIGTigJlvcmdhbmlzYXRpb25zPC9zdHJvbmc+IDogaWxzIHRyYXZhaWxsZW50IGVuIGNhYmluZXQgc2V1bCBvdSBlbiBncm91cGUsIGRhbnMgZGVzIMOpdGFibGlzc2VtZW50cyBkZSBzYW50w6ksIGF2ZWMgdW4gcHJvZ2ljaWVsIG91IG5vbiBldGMuPC9wPlxyXG4gIH1cclxuXVxyXG5mdW5jdGlvbiBGQVEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtcclxuICAgICAgICBmYXFzLm1hcCgoZmFxLCBpbmRleCk9PiB7XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25UeXBlIGtleT17aW5kZXh9IGZhcT17ZmFxfSAvPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFjY29yZGlvblR5cGUocHJvcHMpIHtcclxuICByZXR1cm4oXHJcbiAgICAgICAgPEFjY29yZGlvbj5cclxuICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XHJcbiAgICAgICAgICAgIGV4cGFuZEljb249ezxNZEV4cGFuZE1vcmUgLz59XHJcbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJwYW5lbDFhLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICBpZD1cInBhbmVsMWEtaGVhZGVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgPntwcm9wcy5mYXEudGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG4gICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgIHsvKiA8VHlwb2dyYXBoeT4gKi99XHJcbiAgICAgICAgICAgICAge3Byb3BzLmZhcS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgey8qIDwvVHlwb2dyYXBoeT4gKi99XHJcbiAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL21kXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9