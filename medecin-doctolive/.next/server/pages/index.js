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
    paddingTop: "72px !important",
    paddingBottom: "117px !important",
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

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\medecin-doctolive\\components\\CustomButtons\\Button.js";

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

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\medecin-doctolive\\components\\Inputs\\InputIcone\\index.jsx";

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

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\medecin-doctolive\\components\\Inputs\\PhoneNumber\\index.jsx";

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

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\medecin-doctolive\\components\\MedecinForm.js";

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
            InputProps: {
              classes: {
                notchedOutline: {
                  borderColor: '#38869C !important',
                  borderWidth: "2px !important"
                }
              },
              style: {
                borderRadius: "10px"
              }
            },
            InputLabelProps: {
              style: {
                color: '#61788E'
              }
            },
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
            InputProps: {
              classes: {
                notchedOutline: {
                  borderColor: '#38869C !important',
                  borderWidth: "2px !important"
                }
              },
              style: {
                borderRadius: "10px"
              }
            },
            InputLabelProps: {
              style: {
                color: '#61788E'
              }
            },
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
            lineNumber: 186,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "12",
          md: "6",
          className: "mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Inputs_PhoneNumber_index__WEBPACK_IMPORTED_MODULE_16__["default"], {
            label: "Num\xE9ro de t\xE9l\xE9phone",
            Icone: react_icons_fa__WEBPACK_IMPORTED_MODULE_19__["FaPhone"],
            name: "phone",
            InputProps: {
              classes: {
                notchedOutline: {
                  borderColor: '#38869C !important',
                  borderWidth: "2px !important"
                }
              },
              style: {
                borderRadius: "10px"
              }
            },
            InputLabelProps: {
              style: {
                color: '#61788E'
              }
            },
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
            lineNumber: 214,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
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
            InputProps: {
              classes: {
                notchedOutline: {
                  borderColor: '#38869C !important',
                  borderWidth: "2px !important"
                }
              },
              style: {
                borderRadius: "10px"
              }
            },
            InputLabelProps: {
              style: {
                color: '#61788E'
              }
            },
            name: "email",
            error: fieldValidationErrors.emailError,
            required: true // InputLabelProps={{style:{right: 0, left:"auto"}}}
            ,
            onBlur: this.validateField,
            value: email,
            onChange: this.handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "12",
          className: "mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default.a, {
            fullWidth: true,
            variant: "outlined",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
              htmlFor: "standard-adornment-password",
              style: {
                color: "#61788E"
              },
              children: " Mot de passe "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
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
                    lineNumber: 293,
                    columnNumber: 68
                  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_14__["MdVisibilityOff"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 293,
                    columnNumber: 87
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 289,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 276,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 275,
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
              lineNumber: 303,
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
                lineNumber: 312,
                columnNumber: 45
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 30
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 300,
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
              lineNumber: 320,
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
                  lineNumber: 322,
                  columnNumber: 80
                }, this),
                label: "Homme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 37
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
                value: 'femme',
                control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 323,
                  columnNumber: 80
                }, this),
                label: "Femme"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 321,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
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
              lineNumber: 331,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 328,
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
              lineNumber: 340,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 339,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        className: "left-content ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          xs: "12",
          md: "12",
          className: "mt-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomButtons_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
            type: "submit",
            className: "btn-save",
            color: "primary",
            children: " Enregistrer "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 348,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 346,
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

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\medecin-doctolive\\pages\\index.js";

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
            children: "D\xE9couvrez les avantages de Doctolive"
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
                    class: "title-t3",
                    children: whycard.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 33
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    class: "wrapper-desc",
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
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__["BiSearch"], {
                    color: "white"
                  }, void 0, false, {
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
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__["BiCalendar"], {
                    color: "white"
                  }, void 0, false, {
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
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__["BiCheck"], {
                    color: "white"
                  }, void 0, false, {
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
  icon: "clock.png",
  title: "Ne perdez plus de temps à gérer la prise de rendez-vous",
  description: "Un système de réservation médicale en ligne avec de nombreuses fonctionnalités. Gérez votre cabinet avec une vue claire des rendez-vous à venir. Personnalisez tous les paramètres dont vous avez besoin."
}, {
  icon: "device.png",
  title: "Accédez à votre horaire médical où vous voulez, quand vous le souhaitez",
  description: "Notre logiciel de planification médicale est accessible depuis votre ordinateur, tablette ou smartphone. Vous pouvez vérifier les informations de votre pratique à tout moment, où que vous soyez."
}, {
  icon: "offre.png",
  title: "Offrir la télémédecine et élargir l'accès aux services de santé pour les patients",
  description: "La consultation en ligne permet de maintenir la continuité des soins pour vos patients. Augmenter la distance sociale et délivrer des ordonnances aux patients à domicile."
}, {
  icon: "device2.png",
  title: "Facilitez la prise de rendez-vous médicaux pour vos patients",
  description: "Vos patients peuvent prendre des rendez-vous 24h / 24 et 7j / 7, votre cabinet reçoit moins d'appels entrants et vous remplissez les créneaux disponibles même à la dernière minute."
}, {
  icon: "device3.png",
  title: "Personnalisez votre horaire de pratique en fonction de vos besoins",
  description: "Définissez chaque paramètre pour que votre système de réservation en ligne réponde à toutes vos attentes. Ouvrez les plages horaires disponibles et sélectionnez les raisons de la visite en fonction de votre spécialité."
}, {
  icon: "device4.png",
  title: "Installez et maîtrisez votre horaire médical en ligne en un rien de temps",
  description: "Notre équipe dédiée vous aide à mettre en place votre système de réservation médicale. Devenez un expert instantanément grâce à notre documentation complète."
}, {
  icon: "device5.png",
  title: "Communiquez en temps réel avec vos patients et réduisez les rendez-vous manqués",
  description: "Laissez les patients réserver, annuler ou reporter leurs rendez-vous en ligne 24h / 24 et 7j / 7. Réduisez les rendez-vous manqués grâce aux rappels automatiques par e-mail."
}, {
  icon: "device6.png",
  title: "Améliorez votre visibilité en ligne et trouvez de nouveaux patients",
  description: "Votre liste Doctolive permet aux patients de trouver facilement votre cabinet. Laissez les patients réserver leurs rendez-vous en ligne sur notre plateforme."
}, {
  icon: "device7.png",
  title: "Synchronisez notre logiciel de planification des patients avec votre infrastructure",
  description: "Doctolive s'intègre immédiatement dans votre infrastructure existante. S'interface de manière transparente avec les applications de gestion de cabinet les plus courantes."
}];

function Header() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: classes.header,
    style: {
      background: `rgba(182, 219, 215, 0.21)`
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          md: "7",
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
              className: "h3 presentation",
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
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdCheck"], {
                    color: "#F27B68"
                  }, void 0, false, {
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
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdCheck"], {
                    color: "#F27B68"
                  }, void 0, false, {
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
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdCheck"], {
                    color: "#F27B68"
                  }, void 0, false, {
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
          md: "5",
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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/image/group-medecin.png",
          className: "image-header",
          alt: "Doctor taking care of family"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
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
      lineNumber: 260,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 259,
    columnNumber: 5
  }, this);
}

function Avantage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 272,
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
      lineNumber: 287,
      columnNumber: 82
    }, undefined), " et de ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
      children: "tous types d\u2019organisations"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 133
    }, undefined), " : ils travaillent en cabinet seul ou en groupe, dans des \xE9tablissements de sant\xE9, avec un progiciel ou non etc."]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 287,
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
        lineNumber: 296,
        columnNumber: 13
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 292,
    columnNumber: 5
  }, this);
}

function AccordionType(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_6___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_7___default.a, {
      expandIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdExpandMore"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 25
      }, this),
      "aria-controls": "panel1a-content",
      id: "panel1a-header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
        children: props.faq.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 11
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_8___default.a, {
      children: props.faq.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 308,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy9NZWRlY2luSG9tZVN0eWxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qc3MvYnV0dG9uU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy92YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0cy9JbnB1dEljb25lL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0cy9QaG9uZU51bWJlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZWRlY2luRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtTGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9iaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvbWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJwcm9maWxlUGFnZVN0eWxlIiwiY29udGFpbmVyIiwic2VjdGlvbiIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiY2FsbFRvQWN0aW9uIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiY2FsbHRvQWN0aW9uQ29udGVudCIsIm1pbkhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNhbGx0b0FjdGlvbkNhcmQiLCJmbGV4V3JhcCIsImNhbGx0b0FjdGlvbkNvbnRlbnRXcmFwIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kU2l6ZSIsIm1hcmdpbiIsIm1heFdpZHRoIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJib3JkZXIiLCJvdXRsaW5lIiwiYm94U2hhZG93IiwiYXBwZWFyYW5jZSIsInRleHRUcmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY2FsbHRvQWN0aW9uSW1hZ2UiLCJ3aWR0aCIsImJvdHRvbSIsImxlZnQiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwib3ZlcmZsb3ciLCJ2ZXJ0aWNhbEFsaWduIiwic2VjdGlvblRpdGxsZSIsImhlYWRlciIsImJhY2tncm91bmRab25lIiwidG9wIiwicmlnaHQiLCJiYWtncm91ZENvbnRhaW5lciIsImRvd25sb2FkZXIiLCJtYXhIZWlnaHQiLCJidXR0b25TdHlsZSIsImJ1dHRvbiIsIm1pbldpZHRoIiwiZ3JheUNvbG9yIiwid2hpdGVDb2xvciIsImhleFRvUmdiIiwibGV0dGVyU3BhY2luZyIsIndpbGxDaGFuZ2UiLCJ3aGl0ZVNwYWNlIiwidG91Y2hBY3Rpb24iLCJibGFja0NvbG9yIiwibWFyZ2luUmlnaHQiLCJ0cmFuc2Zvcm0iLCJ3aGl0ZSIsInJvc2UiLCJyb3NlQ29sb3IiLCJwcmltYXJ5IiwicHJpbWFyeUNvbG9yIiwiaW5mbyIsImluZm9Db2xvciIsInN1Y2Nlc3MiLCJzdWNjZXNzQ29sb3IiLCJ3YXJuaW5nIiwid2FybmluZ0NvbG9yIiwiZGFuZ2VyIiwiZGFuZ2VyQ29sb3IiLCJzaW1wbGUiLCJiYWNrZ3JvdW5kIiwidHJhbnNwYXJlbnQiLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwibGciLCJzbSIsInJvdW5kIiwiYmxvY2siLCJsaW5rIiwianVzdEljb24iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImlucHV0IiwicmVwbGFjZSIsImhleFJlZ2V4IiwidGVzdCIsImxlbmd0aCIsIkVycm9yIiwiZmlyc3QiLCJzZWNvbmQiLCJsYXN0IiwidG9VcHBlckNhc2UiLCJwYXJzZUludCIsImRyYXdlcldpZHRoIiwibWFyZ2luTGVmdCIsImRlZmF1bHRGb250IiwicHJpbWFyeUJveFNoYWRvdyIsImluZm9Cb3hTaGFkb3ciLCJzdWNjZXNzQm94U2hhZG93Iiwid2FybmluZ0JveFNoYWRvdyIsImRhbmdlckJveFNoYWRvdyIsInJvc2VCb3hTaGFkb3ciLCJ3YXJuaW5nQ2FyZEhlYWRlciIsInN1Y2Nlc3NDYXJkSGVhZGVyIiwiZGFuZ2VyQ2FyZEhlYWRlciIsImluZm9DYXJkSGVhZGVyIiwicHJpbWFyeUNhcmRIZWFkZXIiLCJyb3NlQ2FyZEhlYWRlciIsImNhcmRBY3Rpb25zIiwiYm9yZGVyVG9wIiwiY2FyZEhlYWRlciIsImNhcmQiLCJkZWZhdWx0Qm94U2hhZG93IiwidGl0bGUiLCJjYXJkVGl0bGUiLCJjYXJkU3VidGl0bGUiLCJjYXJkTGluayIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJSZWd1bGFyQnV0dG9uIiwicHJvcHMiLCJjbGFzc2VzIiwiY2hpbGRyZW4iLCJzaXplIiwiY2xhc3NOYW1lIiwibXVpQ2xhc3NlcyIsInJlc3QiLCJidG5DbGFzc2VzIiwiY2xhc3NOYW1lcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwiYm9vbCIsInN0cmluZyIsIm9iamVjdCIsIm5vZGUiLCJJbnB1dEljb25lIiwiSWNvbmUiLCJvdGhlcnMiLCJzdGFydEFkb3JubWVudCIsIlBob25lRmllbGQiLCJkaXJlY3Rpb24iLCJFbGVtZW50Rm9ybSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJzZW5kaW5nIiwiZGF0YSIsInRyYWl0ZW1lbnREb25uZWUiLCJjb25zb2xlIiwibG9nIiwiQ29uZmlnIiwiYXBpX3BhdGgiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyIiwianNvbiIsInJlcyIsImVycm9yIiwiZG9ubmVJbmNvcmVjdGUiLCJ2YWxpZGF0b3IiLCJjYXRjaCIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInNsaWNlIiwic3RhdGUiLCJub20iLCJwcmVub20iLCJwaG9uZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwYXNzd29yZF9jb25maXJtYXRpb24iLCJ2aWxsZXMiLCJjaXR5SWQiLCJzZXhlIiwiZmllbGRWYWxpZGF0aW9uRXJyb3JzIiwibm9tRXJyb3IiLCJwcmVub21FcnJvciIsIm51bWVyb0Vycm9yIiwiZW1haWxFcnJvciIsImZvcm1EYXRhIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZXNwb25zZSIsImNpdGllcyIsImVyciIsInJlbmRlciIsImhhbmRsZVN1Ym1pdCIsIm5vdGNoZWRPdXRsaW5lIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsInN0eWxlIiwiRmFVc2VyTWQiLCJ2YWxpZGF0ZUZpZWxkIiwiaGFuZGxlQ2hhbmdlIiwiRmFQaG9uZSIsIkZhTWFpbEJ1bGsiLCJzaG93UGFzc3dvcmQiLCJvbGQiLCJtYXAiLCJ2aWxsZSIsImluZGV4IiwiaWQiLCJldmVudCIsIkxvY2FsQ29uZmlnIiwicHJvZENvbmZpZyIsInN0eWxlczEiLCJIb21lIiwic2NyZWVuV2lkdGgiLCJzZXRTY3JlZW5XaWR0aCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXBkYXRlU2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkF2YW50YWdlcyIsIndoeUNhcmRzIiwid2h5Y2FyZCIsImljb24iLCJkZXNjcmlwdGlvbiIsIlN0ZXBzIiwiS2VlcCIsIkhlYWRlciIsIk1vcmVJbmZvcyIsIkF2YW50YWdlIiwiZmFxcyIsIkZBUSIsImZhcSIsIkFjY29yZGlvblR5cGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFBQTtBQUFBO0FBSUUsTUFBTUEsZ0JBQWdCLEdBQUc7QUFDdkJDLG9FQUR1QjtBQUV2QkMsU0FBTyxFQUFFO0FBQ0xDLGNBQVUsRUFBRSxFQURQO0FBRUxDLGlCQUFhLEVBQUUsRUFGVjtBQUdMLGtCQUFjO0FBQ1ZDLGtCQUFZLEVBQUUsRUFESjtBQUVWQyxlQUFTLEVBQUU7QUFGRDtBQUhULEdBRmM7QUFVdkJDLGNBQVksRUFBRztBQUNYQyxZQUFRLEVBQUUsVUFEQztBQUVYQyxXQUFPLEVBQUUsTUFGRTtBQUdYQyxpQkFBYSxFQUFFLFFBSEo7QUFJWCwwQkFBc0IsVUFKWDtBQUtYLDZCQUF5QixRQUxkO0FBTVhKLGFBQVMsRUFBRSxFQU5BO0FBT1hLLFFBQUksRUFBRSxVQVBLO0FBUVhDLGtCQUFjLEVBQUUsTUFSTDtBQVNYQyxTQUFLLEVBQUUsU0FUSTtBQVVYVixjQUFVLEVBQUU7QUFWRCxHQVZRO0FBc0J2QlcscUJBQW1CLEVBQUU7QUFDakJDLGFBQVMsRUFBRSxLQURNO0FBRWpCQyxtQkFBZSxFQUFFLFNBRkE7QUFHakJMLFFBQUksRUFBRTtBQUhXLEdBdEJFO0FBNEJ2Qk0sa0JBQWdCLEVBQUU7QUFDZFIsV0FBTyxFQUFFLE1BREs7QUFFZFMsWUFBUSxFQUFFO0FBRkksR0E1Qks7QUFpQ3ZCQyx5QkFBdUIsRUFBRTtBQUNyQkMsYUFBUyxFQUFDLFFBRFc7QUFHckJDLG1CQUFlLEVBQUcsZ0NBSEc7QUFJckJDLG9CQUFnQixFQUFFLGtCQUpHO0FBS3JCQyxzQkFBa0IsRUFBRSxRQUxDO0FBTXJCO0FBQ0FDLFdBQU8sRUFBRSxFQVBZO0FBUXJCQyxrQkFBYyxFQUFFLFNBUks7QUFTckIsc0JBQW1CO0FBQ2ZDLFlBQU0sRUFBRSxNQURPO0FBRWZDLGNBQVEsRUFBRSxHQUZLO0FBR2YsY0FBUTtBQUNKQyxnQkFBUSxFQUFFLEVBRE47QUFFSnRCLGlCQUFTLEVBQUUsRUFGUDtBQUdKdUIsa0JBQVUsRUFBRSxNQUhSO0FBSUpULGlCQUFTLEVBQUUsUUFKUDtBQUtKVSxrQkFBVSxFQUFFLEdBTFI7QUFNSmpCLGFBQUssRUFBRTtBQU5ILE9BSE87QUFXZixzQkFBZ0I7QUFDWmUsZ0JBQVEsRUFBRSxFQURFO0FBRVp0QixpQkFBUyxFQUFFLEVBRkM7QUFHWnVCLGtCQUFVLEVBQUUsTUFIQTtBQUlaVCxpQkFBUyxFQUFFLFFBSkM7QUFLWlUsa0JBQVUsRUFBRSxHQUxBO0FBTVpqQixhQUFLLEVBQUU7QUFOSyxPQVhEO0FBbUJmLG1CQUFhO0FBQ1RrQixrQkFBVSxFQUFFLHlCQURIO0FBRVRILGdCQUFRLEVBQUUsRUFGRDtBQUdUZixhQUFLLEVBQUUsTUFIRTtBQUlUbUIsY0FBTSxFQUFFLEVBSkM7QUFLVEMsY0FBTSxFQUFFLENBTEM7QUFNVEMsZUFBTyxFQUFFLE1BTkE7QUFPVEMsaUJBQVMsRUFBRSxNQVBGO0FBUVQsOEJBQXNCLGlCQVJiO0FBU1QsMkJBQW1CLGlCQVRWO0FBVVRDLGtCQUFVLEVBQUUsaUJBVkg7QUFXVHhCLHNCQUFjLEVBQUUsaUJBWFA7QUFZVHlCLHFCQUFhLEVBQUUsV0FaTjtBQWFUWCxjQUFNLEVBQUUsQ0FiQztBQWNUakIsZUFBTyxFQUFFLGNBZEE7QUFlVGUsZUFBTyxFQUFFLFFBZkE7QUFnQlQsOEJBQXNCLG9EQWhCYjtBQWlCVGMsa0JBQVUsRUFBRSxvREFqQkg7QUFrQlR0Qix1QkFBZSxFQUFFLGFBbEJSO0FBbUJUdUIsY0FBTSxFQUFFLFNBbkJDO0FBb0JUQyxvQkFBWSxFQUFFLENBcEJMO0FBcUJUeEIsdUJBQWUsRUFBRSxTQXJCUjtBQXNCVFgsb0JBQVksRUFBRSxFQXRCTDtBQXVCVHdCLGtCQUFVLEVBQUUsRUF2Qkg7QUF3QlR2QixpQkFBUyxFQUFFLEVBeEJGO0FBeUJULGtCQUFXO0FBRVBHLGlCQUFPLEVBQUUsTUFGRjtBQUlQZ0Msb0JBQVUsRUFBRSxRQUpMO0FBTVBDLHdCQUFjLEVBQUUsUUFOVDtBQU9QWixvQkFBVSxFQUFFLE1BUEw7QUFRUEUsZ0JBQU0sRUFBRTtBQVJEO0FBekJGO0FBbkJFO0FBVEUsR0FqQ0Y7QUFvR3ZCVyxtQkFBaUIsRUFBRTtBQUNmQyxTQUFLLEVBQUUsR0FEUTtBQUVmcEMsWUFBUSxFQUFFLFVBRks7QUFHZnFDLFVBQU0sRUFBRSxDQUhPO0FBSWZDLFFBQUksRUFBRSxDQUpTO0FBS2ZDLDBCQUFzQixFQUFFLENBTFQ7QUFNZkMsWUFBUSxFQUFFLFFBTks7QUFPZixhQUFVO0FBQ05KLFdBQUssRUFBRSxTQUREO0FBRU5LLG1CQUFhLEVBQUU7QUFGVDtBQVBLLEdBcEdJO0FBZ0h2QkMsZUFBYSxFQUFFO0FBQ1h0QixZQUFRLEVBQUUsRUFEQztBQUVYQyxjQUFVLEVBQUUsTUFGRDtBQUdYVCxhQUFTLEVBQUUsUUFIQTtBQUlYVSxjQUFVLEVBQUUsR0FKRDtBQUtYakIsU0FBSyxFQUFFLFNBTEk7QUFNWGEsVUFBTSxFQUFFO0FBTkcsR0FoSFE7QUF5SHZCeUIsUUFBTSxFQUFHO0FBQ0wxQixrQkFBYyxFQUFFLE9BRFg7QUFFTEgsb0JBQWdCLEVBQUUsV0FGYjtBQUdMQyxzQkFBa0IsRUFBRSxLQUhmO0FBSUxwQixjQUFVLEVBQUUsaUJBSlA7QUFLTEMsaUJBQWEsRUFBRSxrQkFMVjtBQU1MLHdCQUFxQjtBQUNqQlkscUJBQWUsRUFBQyxNQURDO0FBRWpCUSxhQUFPLEVBQUUsRUFGUTtBQUdqQmdCLGtCQUFZLEVBQUUsRUFIRztBQUlqQkwsZUFBUyxFQUFFLGdDQUpNO0FBS2pCLGNBQVE7QUFDSjlCLG9CQUFZLEVBQUU7QUFEVixPQUxTO0FBUWpCLGdCQUFVO0FBQ05DLGlCQUFTLEVBQUUsRUFETDtBQUVOa0IsZUFBTyxFQUFFO0FBRkg7QUFSTztBQU5oQixHQXpIYztBQTZJdkI0QixnQkFBYyxFQUFHO0FBQ2I1QyxZQUFRLEVBQUUsVUFERztBQUViNkMsT0FBRyxFQUFFLENBRlE7QUFHYlAsUUFBSSxFQUFFLENBSE87QUFJYlEsU0FBSyxFQUFFLENBSk07QUFLYlQsVUFBTSxFQUFFLENBTEs7QUFNYkcsWUFBUSxFQUFFO0FBTkcsR0E3SU07QUFxSnZCTyxtQkFBaUIsRUFBRyxFQXJKRztBQXdKdkJDLFlBQVUsRUFBRztBQUNULDZCQUEwQjtBQUN0QixjQUFTO0FBQ0w1QixnQkFBUSxFQUFFLEVBREw7QUFFTEMsa0JBQVUsRUFBRSxNQUZQO0FBR0xDLGtCQUFVLEVBQUUsR0FIUDtBQUlMakIsYUFBSyxFQUFFLFNBSkY7QUFLTGEsY0FBTSxFQUFFO0FBTEgsT0FEYTtBQVF0QixjQUFTO0FBQ0xFLGdCQUFRLEVBQUUsRUFETDtBQUVMQyxrQkFBVSxFQUFFLE1BRlA7QUFHTEMsa0JBQVUsRUFBRSxHQUhQO0FBSUxqQixhQUFLLEVBQUUsU0FKRjtBQUtMYSxjQUFNLEVBQUUsQ0FMSDtBQU1MckIsb0JBQVksRUFBRSxFQU5UO0FBT0xDLGlCQUFTLEVBQUU7QUFQTixPQVJhO0FBa0J0QixxQkFBZ0I7QUFDWkcsZUFBTyxFQUFFLE1BREc7QUFFWlMsZ0JBQVEsRUFBRSxNQUZFO0FBR1owQixhQUFLLEVBQUUsTUFISztBQUlaTCxjQUFNLEVBQUUsU0FKSTtBQUtaLGlDQUEwQjtBQUN0QmYsaUJBQU8sRUFBRSxFQURhO0FBRXRCUyxnQkFBTSxFQUFFLGdCQUZjO0FBR3RCTyxzQkFBWSxFQUFFLENBSFE7QUFJdEIvQixpQkFBTyxFQUFFLE1BSmE7QUFLdEJDLHVCQUFhLEVBQUUsS0FMTztBQU10QmdDLHdCQUFjLEVBQUUsZUFOTTtBQU90QkQsb0JBQVUsRUFBRSxRQVBVO0FBUXRCRyxlQUFLLEVBQUUsTUFSZTtBQVd0QixpQ0FBd0I7QUFDcEJhLHFCQUFTLEVBQUUsRUFEUztBQUVwQmIsaUJBQUssRUFBRSxNQUZhO0FBR3BCbkMsbUJBQU8sRUFBRSxNQUhXO0FBSXBCaUMsMEJBQWMsRUFBRTtBQUpJO0FBWEY7QUFMZCxPQWxCTTtBQTRDdEIsNkJBQXdCO0FBQ3BCLGlCQUFTO0FBQ0xWLGdCQUFNLEVBQUU7QUFESDtBQURXO0FBNUNGO0FBRGpCO0FBeEpVLENBQXpCO0FBK01laEMsK0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDcE5GO0FBQUE7QUFBQTtBQWFBLE1BQU0wRCxXQUFXLEdBQUc7QUFDbEJDLFFBQU0sRUFBRTtBQUNONUMsYUFBUyxFQUFFLE1BREw7QUFFTjZDLFlBQVEsRUFBRSxNQUZKO0FBR041QyxtQkFBZSxFQUFFNkMsdURBQVMsQ0FBQyxDQUFELENBSHBCO0FBSU5oRCxTQUFLLEVBQUVpRCx3REFKRDtBQUtOM0IsYUFBUyxFQUNQLHNCQUNBNEIsOERBQVEsQ0FBQ0YsdURBQVMsQ0FBQyxDQUFELENBQVYsQ0FEUixHQUVBLCtCQUZBLEdBR0FFLDhEQUFRLENBQUNGLHVEQUFTLENBQUMsQ0FBRCxDQUFWLENBSFIsR0FJQSwyQkFKQSxHQUtBRSw4REFBUSxDQUFDRix1REFBUyxDQUFDLENBQUQsQ0FBVixDQUxSLEdBTUEsU0FaSTtBQWFONUIsVUFBTSxFQUFFLE1BYkY7QUFjTk8sZ0JBQVksRUFBRSxLQWRSO0FBZU5oQyxZQUFRLEVBQUUsVUFmSjtBQWdCTmdCLFdBQU8sRUFBRSxXQWhCSDtBQWlCTkUsVUFBTSxFQUFFLGNBakJGO0FBa0JORSxZQUFRLEVBQUUsTUFsQko7QUFtQk5FLGNBQVUsRUFBRSxLQW5CTjtBQW9CTk8saUJBQWEsRUFBRSxXQXBCVDtBQXFCTjJCLGlCQUFhLEVBQUUsR0FyQlQ7QUFzQk5DLGNBQVUsRUFBRSx1QkF0Qk47QUF1Qk4zQixjQUFVLEVBQ1IsZ0dBeEJJO0FBeUJOVCxjQUFVLEVBQUUsWUF6Qk47QUEwQk5ULGFBQVMsRUFBRSxRQTFCTDtBQTJCTjhDLGNBQVUsRUFBRSxRQTNCTjtBQTRCTmpCLGlCQUFhLEVBQUUsUUE1QlQ7QUE2Qk5rQixlQUFXLEVBQUUsY0E3QlA7QUE4Qk41QixVQUFNLEVBQUUsU0E5QkY7QUErQk4sdUJBQW1CO0FBQ2pCMUIsV0FBSyxFQUFFaUQsd0RBRFU7QUFFakI1QixhQUFPLEVBQUUsQ0FGUTtBQUdqQmxCLHFCQUFlLEVBQUU2Qyx1REFBUyxDQUFDLENBQUQsQ0FIVDtBQUlqQjFCLGVBQVMsRUFDUCw0QkFDQTRCLDhEQUFRLENBQUNGLHVEQUFTLENBQUMsQ0FBRCxDQUFWLENBRFIsR0FFQSwrQkFGQSxHQUdBRSw4REFBUSxDQUFDSyx3REFBRCxDQUhSLEdBSUEsZ0NBSkEsR0FLQUwsOERBQVEsQ0FBQ0YsdURBQVMsQ0FBQyxDQUFELENBQVYsQ0FMUixHQU1BO0FBWGUsS0EvQmI7QUE0Q04scURBQWlEO0FBQy9DckQsY0FBUSxFQUFFLFVBRHFDO0FBRS9DQyxhQUFPLEVBQUUsY0FGc0M7QUFHL0M0QyxTQUFHLEVBQUUsR0FIMEM7QUFJL0MvQyxlQUFTLEVBQUUsTUFKb0M7QUFLL0NELGtCQUFZLEVBQUUsTUFMaUM7QUFNL0N1QixjQUFRLEVBQUUsUUFOcUM7QUFPL0N5QyxpQkFBVyxFQUFFLEtBUGtDO0FBUS9DcEIsbUJBQWEsRUFBRTtBQVJnQyxLQTVDM0M7QUFzRE4sYUFBUztBQUNQekMsY0FBUSxFQUFFLFVBREg7QUFFUEMsYUFBTyxFQUFFLGNBRkY7QUFHUDRDLFNBQUcsRUFBRSxHQUhFO0FBSVBULFdBQUssRUFBRSxNQUpBO0FBS1BaLFlBQU0sRUFBRSxNQUxEO0FBTVBxQyxpQkFBVyxFQUFFLEtBTk47QUFPUHBCLG1CQUFhLEVBQUU7QUFQUixLQXRESDtBQStETixrQkFBYztBQUNaLHVEQUFpRDtBQUMvQzNDLGlCQUFTLEVBQUUsS0FEb0M7QUFFL0NFLGdCQUFRLEVBQUUsVUFGcUM7QUFHL0NvQyxhQUFLLEVBQUUsTUFId0M7QUFJL0MwQixpQkFBUyxFQUFFLE1BSm9DO0FBSy9DeEIsWUFBSSxFQUFFLEtBTHlDO0FBTS9DTyxXQUFHLEVBQUUsS0FOMEM7QUFPL0NyQixjQUFNLEVBQUUsTUFQdUM7QUFRL0NILGtCQUFVLEVBQUUsTUFSbUM7QUFTL0NELGdCQUFRLEVBQUU7QUFUcUM7QUFEckM7QUEvRFIsR0FEVTtBQThFbEIyQyxPQUFLLEVBQUU7QUFDTCx5QkFBcUI7QUFDbkJ2RCxxQkFBZSxFQUFFOEMsd0RBREU7QUFFbkJqRCxXQUFLLEVBQUVnRCx1REFBUyxDQUFDLENBQUQ7QUFGRztBQURoQixHQTlFVztBQW9GbEJXLE1BQUksRUFBRTtBQUNKeEQsbUJBQWUsRUFBRXlELHVEQUFTLENBQUMsQ0FBRCxDQUR0QjtBQUVKdEMsYUFBUyxFQUNQLHNCQUNBNEIsOERBQVEsQ0FBQ1UsdURBQVMsQ0FBQyxDQUFELENBQVYsQ0FEUixHQUVBLCtCQUZBLEdBR0FWLDhEQUFRLENBQUNVLHVEQUFTLENBQUMsQ0FBRCxDQUFWLENBSFIsR0FJQSwyQkFKQSxHQUtBViw4REFBUSxDQUFDVSx1REFBUyxDQUFDLENBQUQsQ0FBVixDQUxSLEdBTUEsU0FURTtBQVVKLHVCQUFtQjtBQUNqQnpELHFCQUFlLEVBQUV5RCx1REFBUyxDQUFDLENBQUQsQ0FEVDtBQUVqQnRDLGVBQVMsRUFDUCw0QkFDQTRCLDhEQUFRLENBQUNVLHVEQUFTLENBQUMsQ0FBRCxDQUFWLENBRFIsR0FFQSwrQkFGQSxHQUdBViw4REFBUSxDQUFDSyx3REFBRCxDQUhSLEdBSUEsZ0NBSkEsR0FLQUwsOERBQVEsQ0FBQ1UsdURBQVMsQ0FBQyxDQUFELENBQVYsQ0FMUixHQU1BO0FBVGU7QUFWZixHQXBGWTtBQTBHbEJDLFNBQU8sRUFBRTtBQUNQMUQsbUJBQWUsRUFBRTJELDBEQUFZLENBQUMsQ0FBRCxDQUR0QjtBQUVQeEMsYUFBUyxFQUNQLHNCQUNBNEIsOERBQVEsQ0FBQ1ksMERBQVksQ0FBQyxDQUFELENBQWIsQ0FEUixHQUVBLCtCQUZBLEdBR0FaLDhEQUFRLENBQUNZLDBEQUFZLENBQUMsQ0FBRCxDQUFiLENBSFIsR0FJQSwyQkFKQSxHQUtBWiw4REFBUSxDQUFDWSwwREFBWSxDQUFDLENBQUQsQ0FBYixDQUxSLEdBTUEsU0FUSztBQVVQLHVCQUFtQjtBQUNqQjNELHFCQUFlLEVBQUUyRCwwREFBWSxDQUFDLENBQUQsQ0FEWjtBQUVqQnhDLGVBQVMsRUFDUCw0QkFDQTRCLDhEQUFRLENBQUNZLDBEQUFZLENBQUMsQ0FBRCxDQUFiLENBRFIsR0FFQSwrQkFGQSxHQUdBWiw4REFBUSxDQUFDSyx3REFBRCxDQUhSLEdBSUEsZ0NBSkEsR0FLQUwsOERBQVEsQ0FBQ1ksMERBQVksQ0FBQyxDQUFELENBQWIsQ0FMUixHQU1BO0FBVGU7QUFWWixHQTFHUztBQWdJbEJDLE1BQUksRUFBRTtBQUNKNUQsbUJBQWUsRUFBRTZELHVEQUFTLENBQUMsQ0FBRCxDQUR0QjtBQUVKMUMsYUFBUyxFQUNQLHNCQUNBNEIsOERBQVEsQ0FBQ2MsdURBQVMsQ0FBQyxDQUFELENBQVYsQ0FEUixHQUVBLCtCQUZBLEdBR0FkLDhEQUFRLENBQUNjLHVEQUFTLENBQUMsQ0FBRCxDQUFWLENBSFIsR0FJQSwyQkFKQSxHQUtBZCw4REFBUSxDQUFDYyx1REFBUyxDQUFDLENBQUQsQ0FBVixDQUxSLEdBTUEsU0FURTtBQVVKLHVCQUFtQjtBQUNqQjdELHFCQUFlLEVBQUU2RCx1REFBUyxDQUFDLENBQUQsQ0FEVDtBQUVqQjFDLGVBQVMsRUFDUCw0QkFDQTRCLDhEQUFRLENBQUNjLHVEQUFTLENBQUMsQ0FBRCxDQUFWLENBRFIsR0FFQSwrQkFGQSxHQUdBZCw4REFBUSxDQUFDSyx3REFBRCxDQUhSLEdBSUEsZ0NBSkEsR0FLQUwsOERBQVEsQ0FBQ2MsdURBQVMsQ0FBQyxDQUFELENBQVYsQ0FMUixHQU1BO0FBVGU7QUFWZixHQWhJWTtBQXNKbEJDLFNBQU8sRUFBRTtBQUNQOUQsbUJBQWUsRUFBRStELDBEQUFZLENBQUMsQ0FBRCxDQUR0QjtBQUVQNUMsYUFBUyxFQUNQLHNCQUNBNEIsOERBQVEsQ0FBQ2dCLDBEQUFZLENBQUMsQ0FBRCxDQUFiLENBRFIsR0FFQSwrQkFGQSxHQUdBaEIsOERBQVEsQ0FBQ2dCLDBEQUFZLENBQUMsQ0FBRCxDQUFiLENBSFIsR0FJQSwyQkFKQSxHQUtBaEIsOERBQVEsQ0FBQ2dCLDBEQUFZLENBQUMsQ0FBRCxDQUFiLENBTFIsR0FNQSxTQVRLO0FBVVAsdUJBQW1CO0FBQ2pCL0QscUJBQWUsRUFBRStELDBEQUFZLENBQUMsQ0FBRCxDQURaO0FBRWpCNUMsZUFBUyxFQUNQLDRCQUNBNEIsOERBQVEsQ0FBQ2dCLDBEQUFZLENBQUMsQ0FBRCxDQUFiLENBRFIsR0FFQSwrQkFGQSxHQUdBaEIsOERBQVEsQ0FBQ0ssd0RBQUQsQ0FIUixHQUlBLGdDQUpBLEdBS0FMLDhEQUFRLENBQUNnQiwwREFBWSxDQUFDLENBQUQsQ0FBYixDQUxSLEdBTUE7QUFUZTtBQVZaLEdBdEpTO0FBNEtsQkMsU0FBTyxFQUFFO0FBQ1BoRSxtQkFBZSxFQUFFaUUsMERBQVksQ0FBQyxDQUFELENBRHRCO0FBRVA5QyxhQUFTLEVBQ1Asc0JBQ0E0Qiw4REFBUSxDQUFDa0IsMERBQVksQ0FBQyxDQUFELENBQWIsQ0FEUixHQUVBLCtCQUZBLEdBR0FsQiw4REFBUSxDQUFDa0IsMERBQVksQ0FBQyxDQUFELENBQWIsQ0FIUixHQUlBLDJCQUpBLEdBS0FsQiw4REFBUSxDQUFDa0IsMERBQVksQ0FBQyxDQUFELENBQWIsQ0FMUixHQU1BLFNBVEs7QUFVUCx1QkFBbUI7QUFDakJqRSxxQkFBZSxFQUFFaUUsMERBQVksQ0FBQyxDQUFELENBRFo7QUFFakI5QyxlQUFTLEVBQ1AsNEJBQ0E0Qiw4REFBUSxDQUFDa0IsMERBQVksQ0FBQyxDQUFELENBQWIsQ0FEUixHQUVBLCtCQUZBLEdBR0FsQiw4REFBUSxDQUFDSyx3REFBRCxDQUhSLEdBSUEsZ0NBSkEsR0FLQUwsOERBQVEsQ0FBQ2tCLDBEQUFZLENBQUMsQ0FBRCxDQUFiLENBTFIsR0FNQTtBQVRlO0FBVlosR0E1S1M7QUFrTWxCQyxRQUFNLEVBQUU7QUFDTmxFLG1CQUFlLEVBQUVtRSx5REFBVyxDQUFDLENBQUQsQ0FEdEI7QUFFTmhELGFBQVMsRUFDUCxzQkFDQTRCLDhEQUFRLENBQUNvQix5REFBVyxDQUFDLENBQUQsQ0FBWixDQURSLEdBRUEsK0JBRkEsR0FHQXBCLDhEQUFRLENBQUNvQix5REFBVyxDQUFDLENBQUQsQ0FBWixDQUhSLEdBSUEsMkJBSkEsR0FLQXBCLDhEQUFRLENBQUNvQix5REFBVyxDQUFDLENBQUQsQ0FBWixDQUxSLEdBTUEsU0FUSTtBQVVOLHVCQUFtQjtBQUNqQm5FLHFCQUFlLEVBQUVtRSx5REFBVyxDQUFDLENBQUQsQ0FEWDtBQUVqQmhELGVBQVMsRUFDUCw0QkFDQTRCLDhEQUFRLENBQUNvQix5REFBVyxDQUFDLENBQUQsQ0FBWixDQURSLEdBRUEsK0JBRkEsR0FHQXBCLDhEQUFRLENBQUNLLHdEQUFELENBSFIsR0FJQSxnQ0FKQSxHQUtBTCw4REFBUSxDQUFDb0IseURBQVcsQ0FBQyxDQUFELENBQVosQ0FMUixHQU1BO0FBVGU7QUFWYixHQWxNVTtBQXdObEJDLFFBQU0sRUFBRTtBQUNOLHlCQUFxQjtBQUNuQnZFLFdBQUssRUFBRWlELHdEQURZO0FBRW5CdUIsZ0JBQVUsRUFBRSxhQUZPO0FBR25CbEQsZUFBUyxFQUFFO0FBSFEsS0FEZjtBQU1OLGNBQVU7QUFDUixxQ0FBK0I7QUFDN0J0QixhQUFLLEVBQUU0RCx1REFBUyxDQUFDLENBQUQ7QUFEYTtBQUR2QixLQU5KO0FBV04saUJBQWE7QUFDWCxxQ0FBK0I7QUFDN0I1RCxhQUFLLEVBQUU4RCwwREFBWSxDQUFDLENBQUQ7QUFEVTtBQURwQixLQVhQO0FBZ0JOLGNBQVU7QUFDUixxQ0FBK0I7QUFDN0I5RCxhQUFLLEVBQUVnRSx1REFBUyxDQUFDLENBQUQ7QUFEYTtBQUR2QixLQWhCSjtBQXFCTixpQkFBYTtBQUNYLHFDQUErQjtBQUM3QmhFLGFBQUssRUFBRWtFLDBEQUFZLENBQUMsQ0FBRDtBQURVO0FBRHBCLEtBckJQO0FBMEJOLGlCQUFhO0FBQ1gscUNBQStCO0FBQzdCbEUsYUFBSyxFQUFFb0UsMERBQVksQ0FBQyxDQUFEO0FBRFU7QUFEcEIsS0ExQlA7QUErQk4sZ0JBQVk7QUFDVixxQ0FBK0I7QUFDN0JwRSxhQUFLLEVBQUVzRSx5REFBVyxDQUFDLENBQUQ7QUFEVztBQURyQjtBQS9CTixHQXhOVTtBQTZQbEJHLGFBQVcsRUFBRTtBQUNYLHlCQUFxQjtBQUNuQnpFLFdBQUssRUFBRSxTQURZO0FBRW5Cd0UsZ0JBQVUsRUFBRSxhQUZPO0FBR25CbEQsZUFBUyxFQUFFO0FBSFE7QUFEVixHQTdQSztBQW9RbEJvRCxVQUFRLEVBQUU7QUFDUkMsV0FBTyxFQUFFLE1BREQ7QUFFUkMsaUJBQWEsRUFBRTtBQUZQLEdBcFFRO0FBd1FsQkMsSUFBRSxFQUFFO0FBQ0ZsRSxXQUFPLEVBQUUsa0JBRFA7QUFFRkksWUFBUSxFQUFFLFVBRlI7QUFHRkMsY0FBVSxFQUFFLFVBSFY7QUFJRlcsZ0JBQVksRUFBRTtBQUpaLEdBeFFjO0FBOFFsQm1ELElBQUUsRUFBRTtBQUNGbkUsV0FBTyxFQUFFLG9CQURQO0FBRUZJLFlBQVEsRUFBRSxXQUZSO0FBR0ZDLGNBQVUsRUFBRSxLQUhWO0FBSUZXLGdCQUFZLEVBQUU7QUFKWixHQTlRYztBQW9SbEJvRCxPQUFLLEVBQUU7QUFDTHBELGdCQUFZLEVBQUU7QUFEVCxHQXBSVztBQXVSbEJxRCxPQUFLLEVBQUU7QUFDTGpELFNBQUssRUFBRTtBQURGLEdBdlJXO0FBMFJsQmtELE1BQUksRUFBRTtBQUNKLHlCQUFxQjtBQUNuQjlFLHFCQUFlLEVBQUUsYUFERTtBQUVuQkgsV0FBSyxFQUFFZ0QsdURBQVMsQ0FBQyxDQUFELENBRkc7QUFHbkIxQixlQUFTLEVBQUU7QUFIUTtBQURqQixHQTFSWTtBQWlTbEI0RCxVQUFRLEVBQUU7QUFDUkMsZUFBVyxFQUFFLE1BREw7QUFFUkMsZ0JBQVksRUFBRSxNQUZOO0FBR1JyRSxZQUFRLEVBQUUsTUFIRjtBQUlSSSxVQUFNLEVBQUUsTUFKQTtBQUtSNEIsWUFBUSxFQUFFLE1BTEY7QUFNUmhCLFNBQUssRUFBRSxNQU5DO0FBT1IsMkRBQXVEO0FBQ3JEeUIsaUJBQVcsRUFBRTtBQUR3QyxLQVAvQztBQVVSLFlBQVE7QUFDTnJDLFlBQU0sRUFBRSxNQURGO0FBRU40QixjQUFRLEVBQUUsTUFGSjtBQUdOaEIsV0FBSyxFQUFFLE1BSEQ7QUFJTmYsZ0JBQVUsRUFBRSxNQUpOO0FBS04sdURBQWlEO0FBQy9DRCxnQkFBUSxFQUFFLE1BRHFDO0FBRS9DQyxrQkFBVSxFQUFFO0FBRm1DLE9BTDNDO0FBU04sZUFBUztBQUNQZSxhQUFLLEVBQUUsTUFEQTtBQUVQWixjQUFNLEVBQUU7QUFGRDtBQVRILEtBVkE7QUF3QlIsWUFBUTtBQUNOQSxZQUFNLEVBQUUsTUFERjtBQUVONEIsY0FBUSxFQUFFLE1BRko7QUFHTmhCLFdBQUssRUFBRSxNQUhEO0FBSU4sdURBQWlEO0FBQy9DaEIsZ0JBQVEsRUFBRSxNQURxQztBQUUvQ0Msa0JBQVUsRUFBRTtBQUZtQyxPQUozQztBQVFOLGVBQVM7QUFDUGUsYUFBSyxFQUFFLE1BREE7QUFFUFosY0FBTSxFQUFFO0FBRkQ7QUFSSDtBQXhCQTtBQWpTUSxDQUFwQjtBQXlVZTBCLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JWQSxNQUFNSyxRQUFRLEdBQUdtQyxLQUFLLElBQUk7QUFDeEJBLE9BQUssR0FBR0EsS0FBSyxHQUFHLEVBQWhCO0FBQ0FBLE9BQUssR0FBR0EsS0FBSyxDQUFDQyxPQUFOLENBQWMsR0FBZCxFQUFtQixFQUFuQixDQUFSO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLGNBQWY7O0FBQ0EsTUFBSSxDQUFDQSxRQUFRLENBQUNDLElBQVQsQ0FBY0gsS0FBZCxDQUFELElBQTBCQSxLQUFLLENBQUNJLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0JKLEtBQUssQ0FBQ0ksTUFBTixLQUFpQixDQUFyRSxFQUF5RTtBQUN2RSxVQUFNLElBQUlDLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0FBQ0Q7O0FBQ0QsTUFBSUwsS0FBSyxDQUFDSSxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLFFBQUlFLEtBQUssR0FBR04sS0FBSyxDQUFDLENBQUQsQ0FBakI7QUFDQSxRQUFJTyxNQUFNLEdBQUdQLEtBQUssQ0FBQyxDQUFELENBQWxCO0FBQ0EsUUFBSVEsSUFBSSxHQUFHUixLQUFLLENBQUMsQ0FBRCxDQUFoQjtBQUNBQSxTQUFLLEdBQUdNLEtBQUssR0FBR0EsS0FBUixHQUFnQkMsTUFBaEIsR0FBeUJBLE1BQXpCLEdBQWtDQyxJQUFsQyxHQUF5Q0EsSUFBakQ7QUFDRDs7QUFDRFIsT0FBSyxHQUFHQSxLQUFLLENBQUNTLFdBQU4sRUFBUjtBQUNBLE1BQUlILEtBQUssR0FBR04sS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUE1QjtBQUNBLE1BQUlPLE1BQU0sR0FBR1AsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUE3QjtBQUNBLE1BQUlRLElBQUksR0FBR1IsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUEzQjtBQUNBLFNBQ0VVLFFBQVEsQ0FBQ0osS0FBRCxFQUFRLEVBQVIsQ0FBUixHQUNBLElBREEsR0FFQUksUUFBUSxDQUFDSCxNQUFELEVBQVMsRUFBVCxDQUZSLEdBR0EsSUFIQSxHQUlBRyxRQUFRLENBQUNGLElBQUQsRUFBTyxFQUFQLENBTFY7QUFPRCxDQXhCRDs7QUEwQkEsTUFBTUcsV0FBVyxHQUFHLEdBQXBCO0FBRUEsTUFBTXZFLFVBQVUsR0FBRztBQUNqQkEsWUFBVSxFQUFFO0FBREssQ0FBbkI7QUFJQSxNQUFNckMsU0FBUyxHQUFHO0FBQ2hCZ0csY0FBWSxFQUFFLE1BREU7QUFFaEJELGFBQVcsRUFBRSxNQUZHO0FBR2hCM0IsYUFBVyxFQUFFLE1BSEc7QUFJaEJ5QyxZQUFVLEVBQUU7QUFKSSxDQUFsQjtBQU9BLE1BQU1DLFdBQVcsR0FBRztBQUNsQmhGLFlBQVUsRUFBRSw0Q0FETTtBQUVsQkQsWUFBVSxFQUFFLEtBRk07QUFHbEJELFlBQVUsRUFBRTtBQUhNLENBQXBCO0FBTUEsTUFBTThDLFlBQVksR0FBRyxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLENBQXJCO0FBQ0EsTUFBTU0sWUFBWSxHQUFHLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsRUFBa0MsU0FBbEMsQ0FBckI7QUFDQSxNQUFNRSxXQUFXLEdBQUcsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxDQUFwQjtBQUNBLE1BQU1KLFlBQVksR0FBRyxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLENBQXJCO0FBQ0EsTUFBTUYsU0FBUyxHQUFHLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsRUFBa0MsU0FBbEMsQ0FBbEI7QUFDQSxNQUFNSixTQUFTLEdBQUcsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxDQUFsQjtBQUNBLE1BQU1aLFNBQVMsR0FBRyxDQUNoQixNQURnQixFQUVoQixNQUZnQixFQUdoQixTQUhnQixFQUloQixTQUpnQixFQUtoQixTQUxnQixFQU1oQixNQU5nQixFQU9oQixTQVBnQixFQVFoQixTQVJnQixFQVNoQixNQVRnQixFQVVoQixTQVZnQixFQVdoQixNQVhnQixFQVloQixTQVpnQixDQUFsQjtBQWNBLE1BQU1PLFVBQVUsR0FBRyxNQUFuQjtBQUNBLE1BQU1OLFVBQVUsR0FBRyxNQUFuQjtBQUVBLE1BQU0zQixTQUFTLEdBQUc7QUFDaEJBLFdBQVMsRUFDUCw0QkFDQTRCLFFBQVEsQ0FBQ0ssVUFBRCxDQURSLEdBRUEsK0JBRkEsR0FHQUwsUUFBUSxDQUFDSyxVQUFELENBSFIsR0FJQSxnQ0FKQSxHQUtBTCxRQUFRLENBQUNLLFVBQUQsQ0FMUixHQU1BO0FBUmMsQ0FBbEI7QUFXQSxNQUFNNEMsZ0JBQWdCLEdBQUc7QUFDdkI3RSxXQUFTLEVBQ1AsdUJBQ0E0QixRQUFRLENBQUNLLFVBQUQsQ0FEUixHQUVBLDhCQUZBLEdBR0FMLFFBQVEsQ0FBQ1ksWUFBWSxDQUFDLENBQUQsQ0FBYixDQUhSLEdBSUE7QUFOcUIsQ0FBekI7QUFRQSxNQUFNc0MsYUFBYSxHQUFHO0FBQ3BCOUUsV0FBUyxFQUNQLHVCQUNBNEIsUUFBUSxDQUFDSyxVQUFELENBRFIsR0FFQSw4QkFGQSxHQUdBTCxRQUFRLENBQUNjLFNBQVMsQ0FBQyxDQUFELENBQVYsQ0FIUixHQUlBO0FBTmtCLENBQXRCO0FBUUEsTUFBTXFDLGdCQUFnQixHQUFHO0FBQ3ZCL0UsV0FBUyxFQUNQLHVCQUNBNEIsUUFBUSxDQUFDSyxVQUFELENBRFIsR0FFQSw4QkFGQSxHQUdBTCxRQUFRLENBQUNnQixZQUFZLENBQUMsQ0FBRCxDQUFiLENBSFIsR0FJQTtBQU5xQixDQUF6QjtBQVFBLE1BQU1vQyxnQkFBZ0IsR0FBRztBQUN2QmhGLFdBQVMsRUFDUCx1QkFDQTRCLFFBQVEsQ0FBQ0ssVUFBRCxDQURSLEdBRUEsOEJBRkEsR0FHQUwsUUFBUSxDQUFDa0IsWUFBWSxDQUFDLENBQUQsQ0FBYixDQUhSLEdBSUE7QUFOcUIsQ0FBekI7QUFRQSxNQUFNbUMsZUFBZSxHQUFHO0FBQ3RCakYsV0FBUyxFQUNQLHVCQUNBNEIsUUFBUSxDQUFDSyxVQUFELENBRFIsR0FFQSw4QkFGQSxHQUdBTCxRQUFRLENBQUNvQixXQUFXLENBQUMsQ0FBRCxDQUFaLENBSFIsR0FJQTtBQU5vQixDQUF4QjtBQVFBLE1BQU1rQyxhQUFhLEdBQUc7QUFDcEJsRixXQUFTLEVBQ1AsdUJBQ0E0QixRQUFRLENBQUNLLFVBQUQsQ0FEUixHQUVBLDhCQUZBLEdBR0FMLFFBQVEsQ0FBQ1UsU0FBUyxDQUFDLENBQUQsQ0FBVixDQUhSLEdBSUE7QUFOa0IsQ0FBdEI7O0FBU0EsTUFBTTZDLGlCQUFpQjtBQUNyQmpDLFlBQVUsRUFDUiw0QkFBNEJKLFlBQVksQ0FBQyxDQUFELENBQXhDLEdBQThDLElBQTlDLEdBQXFEQSxZQUFZLENBQUMsQ0FBRCxDQUFqRSxHQUF1RTtBQUZwRCxHQUdsQmtDLGdCQUhrQixDQUF2Qjs7QUFLQSxNQUFNSSxpQkFBaUI7QUFDckJsQyxZQUFVLEVBQ1IsNEJBQTRCTixZQUFZLENBQUMsQ0FBRCxDQUF4QyxHQUE4QyxJQUE5QyxHQUFxREEsWUFBWSxDQUFDLENBQUQsQ0FBakUsR0FBdUU7QUFGcEQsR0FHbEJtQyxnQkFIa0IsQ0FBdkI7O0FBS0EsTUFBTU0sZ0JBQWdCO0FBQ3BCbkMsWUFBVSxFQUNSLDRCQUE0QkYsV0FBVyxDQUFDLENBQUQsQ0FBdkMsR0FBNkMsSUFBN0MsR0FBb0RBLFdBQVcsQ0FBQyxDQUFELENBQS9ELEdBQXFFO0FBRm5ELEdBR2pCaUMsZUFIaUIsQ0FBdEI7O0FBS0EsTUFBTUssY0FBYztBQUNsQnBDLFlBQVUsRUFDUiw0QkFBNEJSLFNBQVMsQ0FBQyxDQUFELENBQXJDLEdBQTJDLElBQTNDLEdBQWtEQSxTQUFTLENBQUMsQ0FBRCxDQUEzRCxHQUFpRTtBQUZqRCxHQUdmb0MsYUFIZSxDQUFwQjs7QUFLQSxNQUFNUyxpQkFBaUI7QUFDckJyQyxZQUFVLEVBQ1IsNEJBQTRCVixZQUFZLENBQUMsQ0FBRCxDQUF4QyxHQUE4QyxJQUE5QyxHQUFxREEsWUFBWSxDQUFDLENBQUQsQ0FBakUsR0FBdUU7QUFGcEQsR0FHbEJxQyxnQkFIa0IsQ0FBdkI7O0FBS0EsTUFBTVcsY0FBYztBQUNsQnRDLFlBQVUsRUFDUiw0QkFBNEJaLFNBQVMsQ0FBQyxDQUFELENBQXJDLEdBQTJDLElBQTNDLEdBQWtEQSxTQUFTLENBQUMsQ0FBRCxDQUEzRCxHQUFpRTtBQUZqRCxHQUdmNEMsYUFIZSxDQUFwQjs7QUFNQSxNQUFNTyxXQUFXO0FBQ2ZsRyxRQUFNLEVBQUUsYUFETztBQUVmdkIsWUFBVSxFQUFFLE1BRkc7QUFHZjBILFdBQVMsRUFBRSxlQUFlaEUsU0FBUyxDQUFDLEVBQUQsQ0FIcEI7QUFJZjdCLFFBQU0sRUFBRTtBQUpPLEdBS1orRSxXQUxZLENBQWpCOztBQVFBLE1BQU1lLFVBQVUsR0FBRztBQUNqQnBHLFFBQU0sRUFBRSxjQURTO0FBRWpCYyxjQUFZLEVBQUUsS0FGRztBQUdqQmhCLFNBQU8sRUFBRTtBQUhRLENBQW5CO0FBTUEsTUFBTXVHLElBQUksR0FBRztBQUNYdEgsU0FBTyxFQUFFLGNBREU7QUFFWEQsVUFBUSxFQUFFLFVBRkM7QUFHWG9DLE9BQUssRUFBRSxNQUhJO0FBSVhsQixRQUFNLEVBQUUsUUFKRztBQUtYUyxXQUFTLEVBQUUsc0JBQXNCNEIsUUFBUSxDQUFDSyxVQUFELENBQTlCLEdBQTZDLFNBTDdDO0FBTVg1QixjQUFZLEVBQUUsS0FOSDtBQU9YM0IsT0FBSyxFQUFFLFVBQVVrRCxRQUFRLENBQUNLLFVBQUQsQ0FBbEIsR0FBaUMsU0FQN0I7QUFRWGlCLFlBQVUsRUFBRXZCO0FBUkQsQ0FBYjtBQVdBLE1BQU1rRSxnQkFBZ0IsR0FBRztBQUN2Qi9GLFFBQU0sRUFBRSxHQURlO0FBRXZCTyxjQUFZLEVBQUUsS0FGUztBQUd2QkwsV0FBUyxFQUNQLDRCQUNBNEIsUUFBUSxDQUFDSyxVQUFELENBRFIsR0FFQSwrQkFGQSxHQUdBTCxRQUFRLENBQUNLLFVBQUQsQ0FIUixHQUlBLGdDQUpBLEdBS0FMLFFBQVEsQ0FBQ0ssVUFBRCxDQUxSLEdBTUEsUUFWcUI7QUFXdkI1QyxTQUFPLEVBQUUsUUFYYztBQVl2QmMsWUFBVSxFQUFFO0FBWlcsQ0FBekI7QUFlQSxNQUFNMkYsS0FBSyxHQUFHO0FBQ1pwSCxPQUFLLEVBQUVnRCxTQUFTLENBQUMsQ0FBRCxDQURKO0FBRVpqRCxnQkFBYyxFQUFFLE1BRko7QUFHWmtCLFlBQVUsRUFBRSxLQUhBO0FBSVp4QixXQUFTLEVBQUUsTUFKQztBQUtaRCxjQUFZLEVBQUUsTUFMRjtBQU1aVSxXQUFTLEVBQUUsTUFOQztBQU9aZ0IsWUFBVSxFQUFFLDRDQVBBO0FBUVosYUFBVztBQUNUbEIsU0FBSyxFQUFFZ0QsU0FBUyxDQUFDLENBQUQsQ0FEUDtBQUVUL0IsY0FBVSxFQUFFLEtBRkg7QUFHVEQsY0FBVSxFQUFFO0FBSEg7QUFSQyxDQUFkOztBQWVBLE1BQU1xRyxTQUFTLG1DQUNWRCxLQURVO0FBRWIzSCxXQUFTLEVBQUUsR0FGRTtBQUdiRCxjQUFZLEVBQUUsS0FIRDtBQUliVSxXQUFTLEVBQUUsTUFKRTtBQUtiLHlDQUNLa0gsS0FETDtBQUVFM0gsYUFBUyxFQUFFLFNBRmI7QUFHRUQsZ0JBQVksRUFBRSxTQUhoQjtBQUlFVSxhQUFTLEVBQUU7QUFKYjtBQUxhLEVBQWY7O0FBYUEsTUFBTW9ILFlBQVksR0FBRztBQUNuQjdILFdBQVMsRUFBRTtBQURRLENBQXJCO0FBSUEsTUFBTThILFFBQVEsR0FBRztBQUNmLG1CQUFpQjtBQUNmdEIsY0FBVSxFQUFFO0FBREc7QUFERixDQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0N2T0E7O0NBRUE7O0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUVBLE1BQU11QixTQUFTLEdBQUdDLDJFQUFVLENBQUNDLGtFQUFELENBQTVCO0FBRWUsU0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDM0MsUUFBTUMsT0FBTyxHQUFHTCxTQUFTLEVBQXpCOztBQUNBLFFBQU07QUFDSnhILFNBREk7QUFFSitFLFNBRkk7QUFHSitDLFlBSEk7QUFJSnBELFlBSkk7QUFLSkgsVUFMSTtBQU1Kd0QsUUFOSTtBQU9KL0MsU0FQSTtBQVFKQyxRQVJJO0FBU0pDLFlBVEk7QUFVSjhDLGFBVkk7QUFXSkM7QUFYSSxNQWFGTCxLQWJKO0FBQUEsUUFZS00sSUFaTCw0QkFhSU4sS0FiSjs7QUFjQSxRQUFNTyxVQUFVLEdBQUdDLGlEQUFVLENBQUM7QUFDNUIsS0FBQ1AsT0FBTyxDQUFDL0UsTUFBVCxHQUFrQixJQURVO0FBRTVCLEtBQUMrRSxPQUFPLENBQUNFLElBQUQsQ0FBUixHQUFpQkEsSUFGVztBQUc1QixLQUFDRixPQUFPLENBQUM3SCxLQUFELENBQVIsR0FBa0JBLEtBSFU7QUFJNUIsS0FBQzZILE9BQU8sQ0FBQzlDLEtBQVQsR0FBaUJBLEtBSlc7QUFLNUIsS0FBQzhDLE9BQU8sQ0FBQ25ELFFBQVQsR0FBb0JBLFFBTFE7QUFNNUIsS0FBQ21ELE9BQU8sQ0FBQ3RELE1BQVQsR0FBa0JBLE1BTlU7QUFPNUIsS0FBQ3NELE9BQU8sQ0FBQzdDLEtBQVQsR0FBaUJBLEtBUFc7QUFRNUIsS0FBQzZDLE9BQU8sQ0FBQzVDLElBQVQsR0FBZ0JBLElBUlk7QUFTNUIsS0FBQzRDLE9BQU8sQ0FBQzNDLFFBQVQsR0FBb0JBLFFBVFE7QUFVNUIsS0FBQzhDLFNBQUQsR0FBYUE7QUFWZSxHQUFELENBQTdCO0FBWUEsc0JBQ0UscUVBQUMsK0RBQUQsa0NBQVlFLElBQVo7QUFBa0IsV0FBTyxFQUFFRCxVQUEzQjtBQUF1QyxhQUFTLEVBQUVFLFVBQWxEO0FBQUEsY0FDR0w7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtBQUVESCxhQUFhLENBQUNVLFNBQWQsR0FBMEI7QUFDeEJySSxPQUFLLEVBQUVzSSxpREFBUyxDQUFDQyxLQUFWLENBQWdCLENBQ3JCLFNBRHFCLEVBRXJCLE1BRnFCLEVBR3JCLFNBSHFCLEVBSXJCLFNBSnFCLEVBS3JCLFFBTHFCLEVBTXJCLE1BTnFCLEVBT3JCLE9BUHFCLEVBUXJCLGFBUnFCLENBQWhCLENBRGlCO0FBV3hCUixNQUFJLEVBQUVPLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0IsQ0FBQyxJQUFELEVBQU8sSUFBUCxDQUFoQixDQVhrQjtBQVl4QmhFLFFBQU0sRUFBRStELGlEQUFTLENBQUNFLElBWk07QUFheEJ6RCxPQUFLLEVBQUV1RCxpREFBUyxDQUFDRSxJQWJPO0FBY3hCOUQsVUFBUSxFQUFFNEQsaURBQVMsQ0FBQ0UsSUFkSTtBQWV4QnhELE9BQUssRUFBRXNELGlEQUFTLENBQUNFLElBZk87QUFnQnhCdkQsTUFBSSxFQUFFcUQsaURBQVMsQ0FBQ0UsSUFoQlE7QUFpQnhCdEQsVUFBUSxFQUFFb0QsaURBQVMsQ0FBQ0UsSUFqQkk7QUFrQnhCUixXQUFTLEVBQUVNLGlEQUFTLENBQUNHLE1BbEJHO0FBbUJ4QjtBQUNBUixZQUFVLEVBQUVLLGlEQUFTLENBQUNJLE1BcEJFO0FBcUJ4QlosVUFBUSxFQUFFUSxpREFBUyxDQUFDSztBQXJCSSxDQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQyxVQUFULENBQW9CaEIsS0FBcEIsRUFBMkI7QUFFckIsTUFBSTtBQUFDaUI7QUFBRCxNQUFxQmpCLEtBQXpCO0FBQUEsTUFBZWtCLE1BQWYsNEJBQXlCbEIsS0FBekI7O0FBQ0Ysc0JBQ0kscUVBQUMsa0VBQUQsa0NBQ0lrQixNQURKO0FBRUEsU0FBSyxFQUFFLEtBRlA7QUFHQSxhQUFTLE1BSFQ7QUFJQSxjQUFVLEVBQUU7QUFDWkMsb0JBQWMsZUFDVixxRUFBQyx1RUFBRDtBQUFnQixnQkFBUSxFQUFDLE9BQXpCO0FBQUEsK0JBQ0EscUVBQUMsS0FBRDtBQUFPLGVBQUssRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlRDs7QUFDY0gseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkY7QUFFQTtBQUNBO0FBR2UsU0FBU0ksVUFBVCxDQUFvQnBCLEtBQXBCLEVBQTJCO0FBQ3RDLE1BQUk7QUFBQ2lCO0FBQUQsTUFBcUJqQixLQUF6QjtBQUFBLE1BQWVrQixNQUFmLDRCQUF5QmxCLEtBQXpCOztBQUNBLHNCQUVBLHFFQUFDLGtFQUFELGtDQUNJa0IsTUFESjtBQUVJLFNBQUssRUFBRSxLQUZYO0FBR0ksYUFBUyxNQUhiO0FBSUksUUFBSSxFQUFDLE1BSlQ7QUFLSSxTQUFLLEVBQUU7QUFBQ0csZUFBUyxFQUFFO0FBQVosS0FMWDtBQU1JLGNBQVUsRUFBRTtBQUNaRixvQkFBYyxlQUNWLHFFQUFDLHVFQUFEO0FBQWdCLGdCQUFRLEVBQUMsT0FBekI7QUFBQSwrQkFDQSxxRUFBQyxLQUFEO0FBQU8sZUFBSyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUTtBQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkE7QUFrQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qkg7Q0FJQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRWdCLE1BQU1HLFdBQU4sU0FBMEJDLCtDQUExQixDQUFxQztBQUVqREMsYUFBVyxDQUFDeEIsS0FBRCxFQUFPO0FBQ2QsVUFBTUEsS0FBTjs7QUFEYywwQ0F5QkZ5QixDQUFELElBQU87QUFDbEJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUFDQyxlQUFPLEVBQUU7QUFBVixPQUFkO0FBRUEsVUFBSUMsSUFBSSxHQUFHLEtBQUtDLGdCQUFMLEVBQVg7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlDLGdEQUFNLENBQUNDLFFBQW5CO0FBQ0EsWUFBTTdFLElBQUksR0FBRzRFLGdEQUFNLENBQUNDLFFBQVAsR0FBa0IsaUJBQS9CO0FBQ0FILGFBQU8sQ0FBQ0MsR0FBUixDQUFZM0UsSUFBWjtBQUNBOEUsV0FBSyxDQUFDOUUsSUFBRCxFQUFNO0FBQ1ArRSxjQUFNLEVBQUMsTUFEQTtBQUVQQyxlQUFPLEVBQUU7QUFDTCwwQkFBZ0I7QUFEWCxTQUZGO0FBS1BDLFlBQUksRUFBQ0MsSUFBSSxDQUFDQyxTQUFMLG1CQUFtQlgsSUFBbkI7QUFMRSxPQUFOLENBQUwsQ0FPQ1ksSUFQRCxDQVFLQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsSUFBRixHQUNORixJQURNLENBQ0RHLEdBQUcsSUFBSTtBQUVULFlBQUcsQ0FBQ0EsR0FBRyxDQUFDQyxLQUFSLEVBQWM7QUFDVixlQUFLbEIsUUFBTCxDQUFjO0FBQUNDLG1CQUFPLEVBQUUsS0FBVjtBQUFpQnZGLG1CQUFPLEVBQUMsSUFBekI7QUFBK0J5RywwQkFBYyxFQUFFO0FBQS9DLFdBQWQ7QUFHSCxTQUpELE1BSU07QUFDRixlQUFLbkIsUUFBTCxDQUFjO0FBQUNDLG1CQUFPLEVBQUUsS0FBVjtBQUFpQnZGLG1CQUFPLEVBQUMsS0FBekI7QUFBZ0N5RywwQkFBYyxFQUFDO0FBQS9DLFdBQWQ7O0FBQ0EsY0FBR0YsR0FBRyxDQUFDRyxTQUFQLEVBQWlCLENBRWhCLENBRkQsTUFFSyxDQUVKO0FBQ0o7QUFFSixPQWhCTSxDQVJYLEVBeUJNQyxLQXpCTixDQXlCWUgsS0FBSyxJQUFHO0FBQ1osYUFBS2xCLFFBQUwsQ0FBYztBQUFDQyxpQkFBTyxFQUFFLEtBQVY7QUFBaUJ2RixpQkFBTyxFQUFDLEtBQXpCO0FBQWdDeUcsd0JBQWMsRUFBQztBQUEvQyxTQUFkO0FBQ0gsT0EzQkw7QUE0QkgsS0E3RGlCOztBQUFBLDBDQTZFSCxDQUFDO0FBQUNHLFlBQU0sRUFBRztBQUFDQyxhQUFEO0FBQVFDO0FBQVI7QUFBVixLQUFELEtBQThCO0FBRXpDLFVBQUdBLElBQUksS0FBSyxPQUFaLEVBQW9CO0FBQ2hCRCxhQUFLLEdBQUdBLEtBQUssQ0FDYjtBQURhLFNBRVp4RixPQUZPLENBRUMsU0FGRCxFQUVZLEVBRlosRUFHUEEsT0FITyxDQUdDLElBSEQsRUFHTyxNQUhQLEVBSVI7QUFKUSxTQUtQMEYsS0FMTyxDQUtELENBTEMsRUFLRSxFQUxGLEVBTVI7QUFOUSxTQU9QMUYsT0FQTyxDQU9DLGdCQVBELEVBT21CLEtBUG5CLENBQVI7QUFRSDs7QUFDRCxXQUFLaUUsUUFBTCxDQUFjO0FBQUMsU0FBQ3dCLElBQUQsR0FBUUQ7QUFBVCxPQUFkO0FBQ0gsS0ExRmlCOztBQUdkLFNBQUtHLEtBQUwsR0FBVztBQUNQQyxTQUFHLEVBQUUsRUFERTtBQUVQQyxZQUFNLEVBQUMsRUFGQTtBQUdQQyxXQUFLLEVBQUMsRUFIQztBQUlQQyxXQUFLLEVBQUUsRUFKQTtBQUtQQyxjQUFRLEVBQUMsRUFMRjtBQU1QQywyQkFBcUIsRUFBRSxFQU5oQjtBQU9QQyxZQUFNLEVBQUMsRUFQQTtBQVFQQyxZQUFNLEVBQUUsRUFSRDtBQVNWQyxVQUFJLEVBQUMsRUFUSztBQVVQQywyQkFBcUIsRUFBQztBQUNsQkMsZ0JBQVEsRUFBQyxLQURTO0FBRWxCQyxtQkFBVyxFQUFDLEtBRk07QUFHbEJDLG1CQUFXLEVBQUMsS0FITTtBQUlsQkMsa0JBQVUsRUFBQztBQUpPLE9BVmY7QUFpQlB2QyxhQUFPLEVBQUMsS0FqQkQ7QUFrQlB2RixhQUFPLEVBQUM7QUFsQkQsS0FBWDtBQW9CSDs7QUF3Q0R5RixrQkFBZ0IsR0FBRTtBQUNkLFFBQUlzQyxRQUFRLEdBQUMsRUFBYjtBQUVBQSxZQUFRLENBQUNkLEdBQVQsR0FBYSxLQUFLRCxLQUFMLENBQVdDLEdBQXhCO0FBQ0FjLFlBQVEsQ0FBQ1osS0FBVCxHQUFlLEtBQUtILEtBQUwsQ0FBV0csS0FBMUI7QUFDQVksWUFBUSxDQUFDWCxLQUFULEdBQWUsS0FBS0osS0FBTCxDQUFXSSxLQUExQjtBQUNBVyxZQUFRLENBQUNiLE1BQVQsR0FBZ0IsS0FBS0YsS0FBTCxDQUFXRSxNQUEzQjtBQUNBYSxZQUFRLENBQUNQLE1BQVQsR0FBZ0IsS0FBS1IsS0FBTCxDQUFXUSxNQUEzQjtBQUNITyxZQUFRLENBQUNOLElBQVQsR0FBZ0IsS0FBS1QsS0FBTCxDQUFXUyxJQUEzQjtBQUNBTSxZQUFRLENBQUNWLFFBQVQsR0FBb0IsS0FBS0wsS0FBTCxDQUFXSyxRQUEvQjtBQUNHLFdBQU9VLFFBQVA7QUFDSDs7QUFrQkRDLG1CQUFpQixHQUFFO0FBQ2ZsQyxTQUFLLENBQUUsR0FBRUYsZ0RBQU0sQ0FBQ0MsUUFBUyxPQUFwQixFQUE0QjtBQUM3QkcsYUFBTyxFQUFFO0FBQ0wsa0JBQVUsa0JBREw7QUFFTCx3QkFBZ0I7QUFGWDtBQURvQixLQUE1QixDQUFMLENBTUdJLElBTkgsQ0FNVUcsR0FBRCxJQUFTO0FBQ2RBLFNBQUcsQ0FBQ0QsSUFBSixHQUFXRixJQUFYLENBQWlCNkIsUUFBUSxJQUFJO0FBQ3pCdkMsZUFBTyxDQUFDQyxHQUFSLENBQVlzQyxRQUFaOztBQUNBLFlBQUdBLFFBQVEsQ0FBQ0MsTUFBWixFQUFtQjtBQUNmLGVBQUs1QyxRQUFMLENBQWM7QUFBQ2lDLGtCQUFNLEVBQUVVLFFBQVEsQ0FBQ0M7QUFBbEIsV0FBZDtBQUNIO0FBQ0osT0FMRDtBQU1ILEtBYkQsRUFjQ3ZCLEtBZEQsQ0FjT3dCLEdBQUcsSUFBSTtBQUNWekMsYUFBTyxDQUFDQyxHQUFSLENBQVl3QyxHQUFaO0FBQ0gsS0FoQkQ7QUFtQkg7O0FBQ0RDLFFBQU0sR0FBRTtBQUNKLFFBQUk7QUFBQ2IsWUFBRDtBQUFTRywyQkFBVDtBQUFnQ1QsU0FBaEM7QUFBcUNDLFlBQXJDO0FBQTZDQyxXQUE3QztBQUFvREMsV0FBcEQ7QUFBMkRYLG9CQUEzRDtBQUEyRWUsWUFBM0U7QUFBbUZ4SCxhQUFuRjtBQUE2RnlILFVBQTdGO0FBQWtHbEM7QUFBbEcsUUFBNkcsS0FBS3lCLEtBQXRIO0FBRUosd0JBQ1E7QUFBTSxjQUFRLEVBQUUsS0FBS3FCLFlBQXJCO0FBQW1DLGtCQUFZLEVBQUMsS0FBaEQ7QUFBQSw4QkFFSSxxRUFBQyxtREFBRDtBQUFBLGdDQUNRLHFFQUFDLG1EQUFEO0FBQUssWUFBRSxFQUFDLElBQVI7QUFBYSxZQUFFLEVBQUMsR0FBaEI7QUFBb0IsbUJBQVMsRUFBQyxNQUE5QjtBQUFBLGlDQUNJLHFFQUFDLGlFQUFEO0FBQ0kscUJBQVMsRUFBRSxJQURmO0FBRUksaUJBQUssRUFBRVgscUJBQXFCLENBQUNDLFFBRmpDO0FBR0ksdUJBQVcsRUFBQyxzQkFIaEI7QUFJSSxpQkFBSyxFQUFDLEtBSlY7QUFLSSxzQkFBVSxFQUFFO0FBQ1IvRCxxQkFBTyxFQUFFO0FBQ0wwRSw4QkFBYyxFQUFFO0FBQUVDLDZCQUFXLEVBQUUsb0JBQWY7QUFBb0NDLDZCQUFXLEVBQUM7QUFBaEQ7QUFEWCxlQUREO0FBSVJDLG1CQUFLLEVBQUU7QUFDTC9LLDRCQUFZLEVBQUU7QUFEVDtBQUpDLGFBTGhCO0FBYU0sMkJBQWUsRUFBRTtBQUNmK0ssbUJBQUssRUFBRTtBQUFFMU0scUJBQUssRUFBRTtBQUFUO0FBRFEsYUFidkI7QUFnQkksaUJBQUssRUFBRTJNLHdEQWhCWDtBQWlCSSxvQkFBUSxFQUFFLElBakJkO0FBa0JJLG1CQUFPLEVBQUMsVUFsQlo7QUFtQkksZ0JBQUksRUFBQyxLQW5CVCxDQW9CSTtBQXBCSjtBQXFCSSxrQkFBTSxFQUFFLEtBQUtDLGFBckJqQjtBQXNCSSxpQkFBSyxFQUFFMUIsR0F0Qlg7QUF1Qkksb0JBQVEsRUFBRSxLQUFLMkI7QUF2Qm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURSLGVBNkJRLHFFQUFDLG1EQUFEO0FBQUssWUFBRSxFQUFDLElBQVI7QUFBYSxZQUFFLEVBQUMsR0FBaEI7QUFBb0IsbUJBQVMsRUFBQyxNQUE5QjtBQUFBLGlDQUNJLHFFQUFDLGlFQUFEO0FBQ0ksdUJBQVcsRUFBQyxjQURoQjtBQUVJLG1CQUFPLEVBQUMsVUFGWjtBQUdJLHNCQUFVLEVBQUU7QUFDUmhGLHFCQUFPLEVBQUU7QUFDTDBFLDhCQUFjLEVBQUU7QUFBRUMsNkJBQVcsRUFBRSxvQkFBZjtBQUFvQ0MsNkJBQVcsRUFBQztBQUFoRDtBQURYLGVBREQ7QUFJUkMsbUJBQUssRUFBRTtBQUNML0ssNEJBQVksRUFBRTtBQURUO0FBSkMsYUFIaEI7QUFXTSwyQkFBZSxFQUFFO0FBQ2YrSyxtQkFBSyxFQUFFO0FBQUUxTSxxQkFBSyxFQUFFO0FBQVQ7QUFEUSxhQVh2QjtBQWNJLG9CQUFRLEVBQUUsSUFkZDtBQWVJLGlCQUFLLEVBQUUyTCxxQkFBcUIsQ0FBQ0UsV0FmakM7QUFnQkksaUJBQUssRUFBQyxRQWhCVjtBQWlCSSxpQkFBSyxFQUFFYyx3REFqQlgsQ0FrQkk7QUFsQko7QUFtQkksa0JBQU0sRUFBRSxLQUFLQyxhQW5CakI7QUFvQkksZ0JBQUksRUFBQyxRQXBCVDtBQXFCSSxpQkFBSyxFQUFFekIsTUFyQlg7QUFzQkksb0JBQVEsRUFBRSxLQUFLMEI7QUF0Qm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdCUixlQXlEUSxxRUFBQyxtREFBRDtBQUFLLFlBQUUsRUFBQyxJQUFSO0FBQWEsWUFBRSxFQUFDLEdBQWhCO0FBQW9CLG1CQUFTLEVBQUMsTUFBOUI7QUFBQSxpQ0FDSSxxRUFBQyxrRUFBRDtBQUNJLGlCQUFLLEVBQUMsOEJBRFY7QUFFSSxpQkFBSyxFQUFFQyx1REFGWDtBQUdJLGdCQUFJLEVBQUMsT0FIVDtBQUlJLHNCQUFVLEVBQUU7QUFDUmpGLHFCQUFPLEVBQUU7QUFDTDBFLDhCQUFjLEVBQUU7QUFBRUMsNkJBQVcsRUFBRSxvQkFBZjtBQUFvQ0MsNkJBQVcsRUFBQztBQUFoRDtBQURYLGVBREQ7QUFJUkMsbUJBQUssRUFBRTtBQUNML0ssNEJBQVksRUFBRTtBQURUO0FBSkMsYUFKaEI7QUFZTSwyQkFBZSxFQUFFO0FBQ2YrSyxtQkFBSyxFQUFFO0FBQUUxTSxxQkFBSyxFQUFFO0FBQVQ7QUFEUSxhQVp2QjtBQWVJLG9CQUFRLEVBQUUsSUFmZDtBQWdCSSxtQkFBTyxFQUFDLFVBaEJaO0FBaUJJLGlCQUFLLEVBQUUyTCxxQkFBcUIsQ0FBQ0csV0FqQmpDLENBa0JJO0FBbEJKO0FBbUJJLGtCQUFNLEVBQUUsS0FBS2MsYUFuQmpCO0FBb0JJLGlCQUFLLEVBQUV4QixLQXBCWDtBQXFCSSx1QkFBVyxFQUFDLGtCQXJCaEI7QUFzQkksb0JBQVEsRUFBRSxLQUFLeUI7QUF0Qm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpEUixlQTRGUSxxRUFBQyxtREFBRDtBQUFLLFlBQUUsRUFBQyxJQUFSO0FBQWEsWUFBRSxFQUFDLEdBQWhCO0FBQW9CLG1CQUFTLEVBQUMsTUFBOUI7QUFBQSxpQ0FDSSxxRUFBQyxpRUFBRDtBQUNJLGlCQUFLLEVBQUMsZUFEVjtBQUVJLGlCQUFLLEVBQUVFLDBEQUZYO0FBR0ksdUJBQVcsRUFBQyxlQUhoQjtBQUlJLG1CQUFPLEVBQUMsVUFKWjtBQUtJLHNCQUFVLEVBQUU7QUFDUmxGLHFCQUFPLEVBQUU7QUFDTDBFLDhCQUFjLEVBQUU7QUFBRUMsNkJBQVcsRUFBRSxvQkFBZjtBQUFvQ0MsNkJBQVcsRUFBQztBQUFoRDtBQURYLGVBREQ7QUFJUkMsbUJBQUssRUFBRTtBQUNML0ssNEJBQVksRUFBRTtBQURUO0FBSkMsYUFMaEI7QUFhTSwyQkFBZSxFQUFFO0FBQ2YrSyxtQkFBSyxFQUFFO0FBQUUxTSxxQkFBSyxFQUFFO0FBQVQ7QUFEUSxhQWJ2QjtBQWdCSSxnQkFBSSxFQUFDLE9BaEJUO0FBaUJJLGlCQUFLLEVBQUUyTCxxQkFBcUIsQ0FBQ0ksVUFqQmpDO0FBa0JJLG9CQUFRLEVBQUUsSUFsQmQsQ0FtQkk7QUFuQko7QUFvQkksa0JBQU0sRUFBRSxLQUFLYSxhQXBCakI7QUFxQkksaUJBQUssRUFBRXZCLEtBckJYO0FBc0JJLG9CQUFRLEVBQUUsS0FBS3dCO0FBdEJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE1RlIsZUF1SFEscUVBQUMsbURBQUQ7QUFBSyxZQUFFLEVBQUMsSUFBUjtBQUFhLG1CQUFTLEVBQUMsTUFBdkI7QUFBQSxpQ0FDSSxxRUFBQyxvRUFBRDtBQUFhLHFCQUFTLE1BQXRCO0FBQXVCLG1CQUFPLEVBQUMsVUFBL0I7QUFBQSxvQ0FDSSxxRUFBQyxtRUFBRDtBQUFZLHFCQUFPLEVBQUMsNkJBQXBCO0FBQWtELG1CQUFLLEVBQUU7QUFBQzdNLHFCQUFLLEVBQUM7QUFBUCxlQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJLHFFQUFDLHVFQUFEO0FBQ0ksZ0JBQUUsRUFBQyw2QkFEUDtBQUVJLGtCQUFJLEVBQUUsS0FBS2lMLEtBQUwsQ0FBVytCLFlBQVgsR0FBMEIsTUFBMUIsR0FBbUMsVUFGN0M7QUFHSSxtQkFBSyxFQUFFLEtBQUsvQixLQUFMLENBQVdLLFFBSHRCO0FBSUksc0JBQVEsRUFBRSxLQUFLdUIsWUFKbkI7QUFLSSxzQkFBUSxFQUFFLElBTGQ7QUFPSSxtQkFBSyxFQUFDLGNBUFY7QUFRSSxrQkFBSSxFQUFDLFVBUlQ7QUFTSSwwQkFBWSxlQUNaLHFFQUFDLHdFQUFEO0FBQWdCLHdCQUFRLEVBQUMsS0FBekI7QUFBQSx1Q0FDSSxxRUFBQyxvRUFBRDtBQUNJLGdDQUFXLDRCQURmO0FBRUkseUJBQU8sRUFBRyxNQUFNLEtBQUt0RCxRQUFMLENBQWMwRCxHQUFHLElBQUc7QUFBQywyREFBWUEsR0FBWjtBQUFpQkQsa0NBQVksRUFBRSxDQUFDLEtBQUsvQixLQUFMLENBQVcrQjtBQUEzQztBQUF5RCxtQkFBOUUsQ0FGcEI7QUFBQSw0QkFJQyxLQUFLL0IsS0FBTCxDQUFXK0IsWUFBWCxnQkFBMEIscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBMUIsZ0JBQTZDLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkhSLGVBZ0pRLHFFQUFDLG1EQUFEO0FBQUssWUFBRSxFQUFDLElBQVI7QUFBYSxZQUFFLEVBQUMsSUFBaEI7QUFBcUIsbUJBQVMsRUFBQyxNQUEvQjtBQUFBLGlDQUVLLHFFQUFDLG9FQUFEO0FBQWEsbUJBQU8sRUFBQyxVQUFyQjtBQUFnQyxxQkFBUyxNQUF6QztBQUFBLG9DQUNHLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURILGVBRUcscUVBQUMsK0RBQUQ7QUFDSSxtQkFBSyxFQUFFdkIsTUFEWDtBQUVJLHNCQUFRLEVBQUUsS0FBS29CLFlBRm5CO0FBR0ksbUJBQUssRUFBQyxPQUhWO0FBSUksa0JBQUksRUFBQyxRQUpUO0FBS0ksc0JBQVEsRUFBRSxJQUxkO0FBQUEsd0JBT0NyQixNQUFNLENBQUMwQixHQUFQLENBQVksQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLGtCQUNELHFFQUFDLGlFQUFEO0FBQXNCLHFCQUFLLEVBQUVELEtBQUssQ0FBQ0UsRUFBbkM7QUFBQSwwQkFBd0NGLEtBQUssQ0FBQ3BDO0FBQTlDLGlCQUFlcUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURYO0FBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhKUixlQWtLUSxxRUFBQyxtREFBRDtBQUFLLFlBQUUsRUFBQyxJQUFSO0FBQWEsWUFBRSxFQUFDLElBQWhCO0FBQXFCLG1CQUFTLEVBQUMsTUFBL0I7QUFBQSxpQ0FDSSxxRUFBQyxvRUFBRDtBQUFhLHFCQUFTLEVBQUMsS0FBdkI7QUFBQSxvQ0FDSSxxRUFBQyxrRUFBRDtBQUFXLHVCQUFTLEVBQUMsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSSxxRUFBQyxvRUFBRDtBQUFZLHVCQUFTLEVBQUMsVUFBdEI7QUFBaUMsNEJBQVcsTUFBNUM7QUFBbUQsa0JBQUksRUFBQyxNQUF4RDtBQUErRCxtQkFBSyxFQUFFMUIsSUFBdEU7QUFBNEUscUJBQU8sRUFBRzRCLEtBQUQsSUFBUztBQUFDLHFCQUFLL0QsUUFBTCxDQUFjO0FBQUNtQyxzQkFBSSxFQUFFNEIsS0FBSyxDQUFDekMsTUFBTixDQUFhQztBQUFwQixpQkFBZDtBQUEwQyxlQUF6STtBQUFBLHNDQUNJLHFFQUFDLHlFQUFEO0FBQWtCLHFCQUFLLEVBQUUsT0FBekI7QUFBa0MsdUJBQU8sZUFBRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUEzQztBQUFzRCxxQkFBSyxFQUFDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSSxxRUFBQyx5RUFBRDtBQUFrQixxQkFBSyxFQUFFLE9BQXpCO0FBQWtDLHVCQUFPLGVBQUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBM0M7QUFBc0QscUJBQUssRUFBQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxLUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQThLSSxxRUFBQyxtREFBRDtBQUFBLCtCQUNJLHFFQUFDLHdEQUFEO0FBQVUsWUFBRSxFQUFFSixjQUFkO0FBQUEsaUNBQ0k7QUFBQSxtQ0FDSSxxRUFBQyxxREFBRDtBQUFRLHFCQUFPLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5S0osZUF1TEkscUVBQUMsbURBQUQ7QUFBQSwrQkFDSSxxRUFBQyx3REFBRDtBQUFVLFlBQUUsRUFBRXpHLE9BQWQ7QUFBQSxpQ0FDSTtBQUFBLG1DQUNJLHFFQUFDLHFEQUFEO0FBQVEscUJBQU8sRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZMSixlQWdNSSxxRUFBQyxtREFBRDtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLCtCQUNBLHFFQUFDLG1EQUFEO0FBQUssWUFBRSxFQUFDLElBQVI7QUFBYSxZQUFFLEVBQUMsSUFBaEI7QUFBcUIsbUJBQVMsRUFBQyxNQUEvQjtBQUFBLGlDQUNJLHFFQUFDLDhEQUFEO0FBQVEsZ0JBQUksRUFBQyxRQUFiO0FBQXNCLHFCQUFTLEVBQUMsVUFBaEM7QUFBMkMsaUJBQUssRUFBQyxTQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaE1KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURSO0FBeU1IOztBQS9Ub0QsQzs7Ozs7Ozs7Ozs7O0FDbENyRDtBQUFBLE1BQU1zSixXQUFXLEdBQUc7QUFDaEJ6RCxVQUFRLEVBQUc7QUFESyxDQUFwQjtBQUdBLE1BQU0wRCxVQUFVLEdBQUc7QUFDZjFELFVBQVEsRUFBRztBQURJLENBQW5CO0FBR2UwRCx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Q0FJQTs7QUFDQTtDQUlBO0FBQ0E7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBLE1BQU1oRyxTQUFTLEdBQUdDLDJFQUFVLENBQUNnRyx3RUFBRCxDQUE1QjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDQyxzREFBUSxDQUFDLENBQUQsQ0FBOUM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsYUFBU0MsVUFBVCxHQUFzQjtBQUNoQkgsb0JBQWMsQ0FBQ0ksTUFBTSxDQUFDQyxVQUFSLENBQWQ7QUFDTDs7QUFFREQsVUFBTSxDQUFDRSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0gsVUFBbEM7QUFDQUEsY0FBVTtBQUVWLFdBQU8sTUFBTTtBQUNUQyxZQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDSixVQUFyQztBQUNILEtBRkQ7QUFHRCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNSTtBQUFBLDZCQUNFLHFFQUFDLE1BQUQ7QUFBUSxtQkFBVyxFQUFFSjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLGVBU0kscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEosZUFVSSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztBQUdELFNBQVNTLFNBQVQsR0FBb0I7QUFDaEIsUUFBTXZHLE9BQU8sR0FBR0wsU0FBUyxFQUF6QjtBQUVGLHNCQUNFO0FBQUEsMkJBQ0k7QUFBUyxlQUFTLEVBQUVLLE9BQU8sQ0FBQ3hJLE9BQVIsR0FBa0Isa0JBQXRDO0FBQUEsNkJBQ0kscUVBQUMseURBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxtREFBRDtBQUFBLGlDQUNFO0FBQUkscUJBQVMsRUFBRXdJLE9BQU8sQ0FBQ3hGLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUtJLHFFQUFDLG1EQUFEO0FBQUEsb0JBRUlnTSxRQUFRLENBQUNuQixHQUFULENBQWEsQ0FBQ29CLE9BQUQsRUFBVWxCLEtBQVYsS0FBb0I7QUFFL0IsZ0NBQ0UscUVBQUMsbURBQUQ7QUFBaUIsZ0JBQUUsRUFBQyxHQUFwQjtBQUF3QixnQkFBRSxFQUFDLEdBQTNCO0FBQStCLGdCQUFFLEVBQUMsSUFBbEM7QUFBQSxxQ0FDRTtBQUFLLHFCQUFLLEVBQUMsNkJBQVg7QUFBQSx3Q0FDSTtBQUFLLHVCQUFLLEVBQUMsYUFBWDtBQUFBLHlDQUNJO0FBQUEsaURBQU87QUFBSyx5QkFBRyxFQUFLLFVBQVNrQixPQUFPLENBQUNDLElBQUssRUFBbkM7QUFBc0MseUJBQUcsRUFBQyxLQUExQztBQUFnRCwrQkFBUyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixlQUlJO0FBQUssdUJBQUssRUFBQyxpQkFBWDtBQUFBLDBDQUNFO0FBQUkseUJBQUssRUFBQyxVQUFWO0FBQUEsOEJBQXNCRCxPQUFPLENBQUNsSDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBRUU7QUFBRyx5QkFBSyxFQUFDLGNBQVQ7QUFBQSw4QkFBeUJrSCxPQUFPLENBQUNFO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGVBQVVwQixLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREY7QUFhRCxXQWZEO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEOztBQUdELFNBQVNxQixLQUFULEdBQWlCO0FBQ2YsUUFBTTVHLE9BQU8sR0FBR0wsU0FBUyxFQUF6QjtBQUVBLHNCQUNJO0FBQVMsYUFBUyxFQUFFSyxPQUFPLENBQUN4SSxPQUFSLEdBQWtCLHFDQUF0QztBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxrQkFBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxtQkFBZjtBQUFBLHNDQUNJO0FBQUsseUJBQVMsRUFBQyxjQUFmO0FBQUEsdUNBQThCO0FBQU0sMkJBQVMsRUFBQyxhQUFoQjtBQUFBLCtDQUErQixxRUFBQyx1REFBRDtBQUFVLHlCQUFLLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFJLHlCQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJO0FBQUcseUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFRSTtBQUFLLHFCQUFTLEVBQUMsa0JBQWY7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsUUFBZjtBQUFBLHNDQUNJO0FBQUsseUJBQVMsRUFBQyxjQUFmO0FBQUEsNkNBQStCO0FBQU0sMkJBQVMsRUFBQywyQkFBaEI7QUFBQSwrQ0FBNkMscUVBQUMseURBQUQ7QUFBWSx5QkFBSyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBSSx5QkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosZUFHSTtBQUFHLHlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKLGVBZUk7QUFBSyxxQkFBUyxFQUFDLGtCQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLFFBQWY7QUFBQSxzQ0FDSTtBQUFLLHlCQUFTLEVBQUMsY0FBZjtBQUFBLHVDQUE4QjtBQUFNLDJCQUFTLEVBQUMsZ0JBQWhCO0FBQUEseUNBQWlDLHFFQUFDLHNEQUFEO0FBQVMseUJBQUssRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBSSx5QkFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosZUFHSTtBQUFHLHlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQ0Q7O0FBQ0QsU0FBU3FQLElBQVQsR0FBZ0I7QUFDZCxRQUFNN0csT0FBTyxHQUFHTCxTQUFTLEVBQXpCO0FBRUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVLLE9BQU8sQ0FBQ3hJLE9BQVIsR0FBa0IsY0FBdEM7QUFBQSwyQkFDSSxxRUFBQyx5REFBRDtBQUFBLDZCQUNFLHFFQUFDLG1EQUFEO0FBQUEsZ0NBQ0UscUVBQUMsbURBQUQ7QUFBSyxZQUFFLEVBQUMsR0FBUjtBQUFZLFlBQUUsRUFBQyxJQUFmO0FBQUEsa0NBQ0k7QUFBQSxvQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUtJO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosZUFTSTtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRKLGVBYUk7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFtQkUscUVBQUMsbURBQUQ7QUFBSyxZQUFFLEVBQUMsR0FBUjtBQUFZLFlBQUUsRUFBQyxJQUFmO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUMsaUJBQVQ7QUFBMkIsZUFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNkJEOztBQUVELE1BQU1nUCxRQUFRLEdBQUcsQ0FDZjtBQUNFRSxNQUFJLEVBQUUsV0FEUjtBQUVFbkgsT0FBSyxFQUFFLHlEQUZUO0FBR0VvSCxhQUFXLEVBQUU7QUFIZixDQURlLEVBTWY7QUFDRUQsTUFBSSxFQUFFLFlBRFI7QUFFRW5ILE9BQUssRUFBRSx5RUFGVDtBQUdFb0gsYUFBVyxFQUFFO0FBSGYsQ0FOZSxFQVdmO0FBQ0VELE1BQUksRUFBRSxXQURSO0FBRUVuSCxPQUFLLEVBQUUsbUZBRlQ7QUFHRW9ILGFBQVcsRUFBRTtBQUhmLENBWGUsRUFnQmY7QUFDRUQsTUFBSSxFQUFFLGFBRFI7QUFFRW5ILE9BQUssRUFBRSw4REFGVDtBQUdFb0gsYUFBVyxFQUFFO0FBSGYsQ0FoQmUsRUFxQmY7QUFDRUQsTUFBSSxFQUFFLGFBRFI7QUFFRW5ILE9BQUssRUFBRSxvRUFGVDtBQUdFb0gsYUFBVyxFQUFFO0FBSGYsQ0FyQmUsRUEwQmY7QUFDRUQsTUFBSSxFQUFFLGFBRFI7QUFFRW5ILE9BQUssRUFBRSwyRUFGVDtBQUdFb0gsYUFBVyxFQUFFO0FBSGYsQ0ExQmUsRUErQmY7QUFDRUQsTUFBSSxFQUFFLGFBRFI7QUFFRW5ILE9BQUssRUFBRSxpRkFGVDtBQUdFb0gsYUFBVyxFQUFFO0FBSGYsQ0EvQmUsRUFvQ2Y7QUFDRUQsTUFBSSxFQUFFLGFBRFI7QUFFRW5ILE9BQUssRUFBRSxxRUFGVDtBQUdFb0gsYUFBVyxFQUFFO0FBSGYsQ0FwQ2UsRUF5Q2Y7QUFDRUQsTUFBSSxFQUFFLGFBRFI7QUFFRW5ILE9BQUssRUFBRSxxRkFGVDtBQUdFb0gsYUFBVyxFQUFFO0FBSGYsQ0F6Q2UsQ0FBakI7O0FBZ0RBLFNBQVNHLE1BQVQsR0FBa0I7QUFDZCxRQUFNOUcsT0FBTyxHQUFHTCxTQUFTLEVBQXpCO0FBRUEsc0JBQ0k7QUFBUSxhQUFTLEVBQUdLLE9BQU8sQ0FBQ3ZGLE1BQTVCO0FBQW9DLFNBQUssRUFBRTtBQUFDa0MsZ0JBQVUsRUFBRztBQUFkLEtBQTNDO0FBQUEsMkJBRUkscUVBQUMseURBQUQ7QUFBQSw2QkFDSSxxRUFBQyxtREFBRDtBQUFBLGdDQUNJLHFFQUFDLG1EQUFEO0FBQUssWUFBRSxFQUFDLEdBQVI7QUFBWSxtQkFBUyxFQUFDLHdEQUF0QjtBQUFBLGtDQUNJO0FBQUEsb0NBQ0k7QUFBSSx1QkFBUyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFJLHVCQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBS0k7QUFBQSxtQ0FDSTtBQUFJLHVCQUFTLEVBQUMsYUFBZDtBQUFBLHNDQUNJO0FBQUEsNkNBQUs7QUFBQSwrQ0FBTyxxRUFBQyx1REFBRDtBQUFTLHlCQUFLLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFBLDZDQUFLO0FBQUEsK0NBQU8scUVBQUMsdURBQUQ7QUFBUyx5QkFBSyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0k7QUFBQSw2Q0FBSztBQUFBLCtDQUFPLHFFQUFDLHVEQUFEO0FBQVMseUJBQUssRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQWNJLHFFQUFDLG1EQUFEO0FBQUssWUFBRSxFQUFDLEdBQVI7QUFBWSxtQkFBUyxFQUFDLGVBQXRCO0FBQXNDLFlBQUUsRUFBQyxhQUF6QztBQUFBLGtDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUkscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEosZUFrQkk7QUFBSyxhQUFHLEVBQUMsMEJBQVQ7QUFBcUMsbUJBQVMsRUFBQyxjQUEvQztBQUE4RCxhQUFHLEVBQUM7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThCSDs7QUFJRCxTQUFTb0ssU0FBVCxHQUFxQjtBQUVuQixzQkFDRTtBQUFBLDJCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7QUFFRCxTQUFTQyxRQUFULEdBQW9CO0FBR2xCLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztBQUtELE1BQU1DLElBQUksR0FBRyxDQUNYO0FBQ0UxSCxPQUFLLEVBQUUsdUVBRFQ7QUFFRW9ILGFBQVcsZUFBRTtBQUFBLGdHQUFnRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaEUsMEJBQW1IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGZixDQURXLENBQWI7O0FBTUEsU0FBU08sR0FBVCxHQUFlO0FBQ2Isc0JBQ0U7QUFBQSxjQUVJRCxJQUFJLENBQUM1QixHQUFMLENBQVMsQ0FBQzhCLEdBQUQsRUFBTTVCLEtBQU4sS0FBZTtBQUN0QiwwQkFDRSxxRUFBQyxhQUFEO0FBQTJCLFdBQUcsRUFBRTRCO0FBQWhDLFNBQW9CNUIsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBR0QsS0FKRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztBQUVELFNBQVM2QixhQUFULENBQXVCckgsS0FBdkIsRUFBOEI7QUFDNUIsc0JBQ00scUVBQUMsa0VBQUQ7QUFBQSw0QkFDRSxxRUFBQyx5RUFBRDtBQUNFLGdCQUFVLGVBQUUscUVBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURkO0FBRUUsdUJBQWMsaUJBRmhCO0FBR0UsUUFBRSxFQUFDLGdCQUhMO0FBQUEsNkJBS0UscUVBQUMsbUVBQUQ7QUFBQSxrQkFBY0EsS0FBSyxDQUFDb0gsR0FBTixDQUFVNUg7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFLHFFQUFDLHlFQUFEO0FBQUEsZ0JBRUtRLEtBQUssQ0FBQ29ILEdBQU4sQ0FBVVI7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRE47QUFnQkQsQzs7Ozs7Ozs7Ozs7QUNsVUQsd0Q7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiXHJcbmltcG9ydCB7IFxyXG4gICAgY29udGFpbmVyLFxyXG59IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xyXG4gICAgXHJcbiAgY29uc3QgcHJvZmlsZVBhZ2VTdHlsZSA9IHtcclxuICAgIGNvbnRhaW5lcixcclxuICAgIHNlY3Rpb246IHtcclxuICAgICAgICBwYWRkaW5nVG9wOiA2NCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAyNCxcclxuICAgICAgICBcIiYgLnNlY3Rpb25cIjoge1xyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDI0LFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDY0XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjYWxsVG9BY3Rpb24gOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIFwiLXdlYmtpdC1ib3gtb3JpZW50XCI6IFwidmVydGljYWxcIixcclxuICAgICAgICBcIi13ZWJraXQtYm94LWRpcmVjdGlvblwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogNjQsXHJcbiAgICAgICAgZmxleDogXCIwIDAgYXV0b1wiLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICBjb2xvcjogXCIjNDM1ZjcxXCIsXHJcbiAgICAgICAgcGFkZGluZ1RvcDogMTYsXHJcbiAgICB9LFxyXG4gICAgY2FsbHRvQWN0aW9uQ29udGVudDoge1xyXG4gICAgICAgIG1pbkhlaWdodDogXCI1MCVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZmFmZFwiLFxyXG4gICAgICAgIGZsZXg6IFwiMSAwIGF1dG9cIixcclxuXHJcbiAgICB9LFxyXG4gICAgY2FsbHRvQWN0aW9uQ2FyZDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgIFxyXG4gICAgfSxcclxuICAgIGNhbGx0b0FjdGlvbkNvbnRlbnRXcmFwOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXHJcbiAgXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKC9pbWcvYmFja2dyb3VuZHBvaW50cy5wbmcpYCxcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcInJlcGVhdCBuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiYm90dG9tXCIsXHJcbiAgICAgICAgLy8gYmFja2dyb3VuZFNpemU6IFwiMjAwJVwiLFxyXG4gICAgICAgIHBhZGRpbmc6IDE2LFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIixcclxuICAgICAgICBcIiYgLmZpeGVkLXdpZHRoXCIgOiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIG1heFdpZHRoOiA1NDQsXHJcbiAgICAgICAgICAgIFwiJiBoMlwiIDp7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDQ4LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIyNHB4XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjI0MzU4XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiJiAudGV4dC1ib2R5XCIgOntcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMTYsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjI0cHhcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyMjQzNThcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCImIC5idXR0b25cIiA6e1xyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJSb2JvdG8sYXJpYWwsc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIFwiLXdlYmtpdC1hcHBlYXJhbmNlXCI6IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgICAgICBcIi1tb3otYXBwZWFyYW5jZVwiOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICAgICAgYXBwZWFyYW5jZTogXCJub25lICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJ1cHBlcmNhc2VcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgXCItd2Via2l0LXRyYW5zaXRpb25cIjogXCJvcGFjaXR5IDUwMG1zLCBjb2xvciAxMDBtcywgYmFja2dyb3VuZC1jb2xvciAxMDBtc1wiLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IDUwMG1zLCBjb2xvciAxMDBtcywgYmFja2dyb3VuZC1jb2xvciAxMDBtc1wiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwNTk2ZGVcIixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogNTIsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMzIsXHJcbiAgICAgICAgICAgICAgICBcIiYgc3BhblwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBjYWxsdG9BY3Rpb25JbWFnZToge1xyXG4gICAgICAgIHdpZHRoOiA0MzEsXHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiA0LFxyXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgIFwiJiBpbWdcIiA6IHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiaW5oZXJpdFwiLFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImJvdHRvbVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlY3Rpb25UaXRsbGU6IHtcclxuICAgICAgICBmb250U2l6ZTogMjQsXHJcbiAgICAgICAgbGluZUhlaWdodDogXCIzMnB4XCIsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICBjb2xvcjogXCIjMjI0MzU4XCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjAgMTZweCAzMnB4IDE2cHhcIlxyXG5cclxuICAgIH0sXHJcbiAgICBoZWFkZXIgOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCI1MCVcIixcclxuICAgICAgICBwYWRkaW5nVG9wOiBcIjcycHggIWltcG9ydGFudFwiLFxyXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTE3cHggIWltcG9ydGFudFwiLFxyXG4gICAgICAgIFwiJiAucmlnaHQtY29udGVudFwiIDoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjZmZmXCIsIFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMiwgXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTUsIFxyXG4gICAgICAgICAgICBib3hTaGFkb3c6IFwiMCAxcHggNHB4IDAgcmdiYSg1LDE1MCwyMjIsLjIpXCIsXHJcbiAgICAgICAgICAgIFwiJiBoM1wiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDE2LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIiYgZm9ybVwiOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDE2LFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZFpvbmUgOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICB9LFxyXG4gICAgYmFrZ3JvdWRDb250YWluZXIgOiB7XHJcbiAgICAgICBcclxuICAgIH0sXHJcbiAgICBkb3dubG9hZGVyIDoge1xyXG4gICAgICAgIFwiJiAuZG93bmxvYWRlci13cmFwcGVyXCIgOiB7XHJcbiAgICAgICAgICAgIFwiJiBoMlwiIDoge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIyNHB4XCIsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMjI0MzU4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiJiBoM1wiIDoge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIyNHB4XCIsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjNzc5MWEyXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDMyLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiA4XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICBcIiYgLmFwcHN0b3JlXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICBcIiYgLmFwcHN0b3JlLWNvbnRhaW5lclwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzAwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFwiJiAuYXBwc3RvcmUtY29udGVudFwiIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzdGFydFwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCImIC5kb3dubG9hZGVyLWltYWdlXCIgOiB7XHJcbiAgICAgICAgICAgICAgICBcIiYgaW1nXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgcHJvZmlsZVBhZ2VTdHlsZTtcclxuICAiLCJpbXBvcnQge1xyXG4gIGdyYXlDb2xvcixcclxuICBwcmltYXJ5Q29sb3IsXHJcbiAgaW5mb0NvbG9yLFxyXG4gIHN1Y2Nlc3NDb2xvcixcclxuICB3YXJuaW5nQ29sb3IsXHJcbiAgZGFuZ2VyQ29sb3IsXHJcbiAgcm9zZUNvbG9yLFxyXG4gIHdoaXRlQ29sb3IsXHJcbiAgYmxhY2tDb2xvcixcclxuICBoZXhUb1JnYlxyXG59IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xyXG5cclxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtaW5IZWlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgbWluV2lkdGg6IFwiYXV0b1wiLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3JbMF0sXHJcbiAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IoZ3JheUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgcGFkZGluZzogXCIxMnB4IDMwcHhcIixcclxuICAgIG1hcmdpbjogXCIuMzEyNXJlbSAxcHhcIixcclxuICAgIGZvbnRTaXplOiBcIjEycHhcIixcclxuICAgIGZvbnRXZWlnaHQ6IFwiNDAwXCIsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgbGV0dGVyU3BhY2luZzogXCIwXCIsXHJcbiAgICB3aWxsQ2hhbmdlOiBcImJveC1zaGFkb3csIHRyYW5zZm9ybVwiLFxyXG4gICAgdHJhbnNpdGlvbjpcclxuICAgICAgXCJib3gtc2hhZG93IDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSksIGJhY2tncm91bmQtY29sb3IgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpXCIsXHJcbiAgICBsaW5lSGVpZ2h0OiBcIjEuNDI4NTcxNDNcIixcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG4gICAgdG91Y2hBY3Rpb246IFwibWFuaXB1bGF0aW9uXCIsXHJcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBjb2xvcjogd2hpdGVDb2xvcixcclxuICAgICAgb3V0bGluZTogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBncmF5Q29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGdyYXlDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCJcclxuICAgIH0sXHJcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwgJi5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCItMWVtXCIsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCItMWVtXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gICAgICBtYXJnaW5SaWdodDogXCI0cHhcIixcclxuICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIlxyXG4gICAgfSxcclxuICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICB3aWR0aDogXCIxOHB4XCIsXHJcbiAgICAgIGhlaWdodDogXCIxOHB4XCIsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjRweFwiLFxyXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiXHJcbiAgICB9LFxyXG4gICAgXCImJGp1c3RJY29uXCI6IHtcclxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICAgIG1hcmdpblRvcDogXCIwcHhcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB0cmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgICAgIGxlZnQ6IFwiMHB4XCIsXHJcbiAgICAgICAgdG9wOiBcIjBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgbGluZUhlaWdodDogXCI0MXB4XCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMjBweFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHdoaXRlOiB7XHJcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB3aGl0ZUNvbG9yLFxyXG4gICAgICBjb2xvcjogZ3JheUNvbG9yWzBdXHJcbiAgICB9XHJcbiAgfSxcclxuICByb3NlOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHJvc2VDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iocm9zZUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiByb3NlQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHJvc2VDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCJcclxuICAgIH1cclxuICB9LFxyXG4gIHByaW1hcnk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihwcmltYXJ5Q29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJpbWFyeUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2IocHJpbWFyeUNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByaW1hcnlDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJpbWFyeUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IocHJpbWFyeUNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaW5mbzoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBpbmZvQ29sb3JbMF0sXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgIFwiMCAycHggMnB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTIpXCIsXHJcbiAgICBcIiY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogaW5mb0NvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgICAgICBcIiwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihpbmZvQ29sb3JbMF0pICtcclxuICAgICAgICBcIiwgMC4yKVwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBzdWNjZXNzOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHN1Y2Nlc3NDb2xvclswXSxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgXCIwIDJweCAycHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Ioc3VjY2Vzc0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xMilcIixcclxuICAgIFwiJjpob3ZlciwmOmZvY3VzXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBzdWNjZXNzQ29sb3JbMF0sXHJcbiAgICAgIGJveFNoYWRvdzpcclxuICAgICAgICBcIjAgMTRweCAyNnB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjIpXCJcclxuICAgIH1cclxuICB9LFxyXG4gIHdhcm5pbmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogd2FybmluZ0NvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYih3YXJuaW5nQ29sb3JbMF0pICtcclxuICAgICAgXCIsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKFwiICtcclxuICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHdhcm5pbmdDb2xvclswXSxcclxuICAgICAgYm94U2hhZG93OlxyXG4gICAgICAgIFwiMCAxNHB4IDI2cHggLTEycHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICAgICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2Iod2FybmluZ0NvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGFuZ2VyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yWzBdLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICBcIjAgMnB4IDJweCAwIHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoXCIgK1xyXG4gICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICBcIiwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYShcIiArXHJcbiAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgIFwiLCAwLjEyKVwiLFxyXG4gICAgXCImOmhvdmVyLCY6Zm9jdXNcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhbmdlckNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6XHJcbiAgICAgICAgXCIwIDE0cHggMjZweCAtMTJweCByZ2JhKFwiICtcclxuICAgICAgICBoZXhUb1JnYihkYW5nZXJDb2xvclswXSkgK1xyXG4gICAgICAgIFwiLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYShcIiArXHJcbiAgICAgICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgICAgIGhleFRvUmdiKGRhbmdlckNvbG9yWzBdKSArXHJcbiAgICAgICAgXCIsIDAuMilcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2ltcGxlOiB7XHJcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IHdoaXRlQ29sb3IsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgYm94U2hhZG93OiBcIm5vbmVcIlxyXG4gICAgfSxcclxuICAgIFwiJiRyb3NlXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiByb3NlQ29sb3JbMF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiJiRwcmltYXJ5XCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBwcmltYXJ5Q29sb3JbMF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiJiRpbmZvXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBpbmZvQ29sb3JbMF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiJiRzdWNjZXNzXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiBzdWNjZXNzQ29sb3JbMF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiJiR3YXJuaW5nXCI6IHtcclxuICAgICAgXCImLCY6Zm9jdXMsJjpob3ZlciwmOnZpc2l0ZWRcIjoge1xyXG4gICAgICAgIGNvbG9yOiB3YXJuaW5nQ29sb3JbMF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFwiJiRkYW5nZXJcIjoge1xyXG4gICAgICBcIiYsJjpmb2N1cywmOmhvdmVyLCY6dmlzaXRlZFwiOiB7XHJcbiAgICAgICAgY29sb3I6IGRhbmdlckNvbG9yWzBdXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHRyYW5zcGFyZW50OiB7XHJcbiAgICBcIiYsJjpmb2N1cywmOmhvdmVyXCI6IHtcclxuICAgICAgY29sb3I6IFwiaW5oZXJpdFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgIGJveFNoYWRvdzogXCJub25lXCJcclxuICAgIH1cclxuICB9LFxyXG4gIGRpc2FibGVkOiB7XHJcbiAgICBvcGFjaXR5OiBcIjAuNjVcIixcclxuICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiXHJcbiAgfSxcclxuICBsZzoge1xyXG4gICAgcGFkZGluZzogXCIxLjEyNXJlbSAyLjI1cmVtXCIsXHJcbiAgICBmb250U2l6ZTogXCIwLjg3NXJlbVwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjMzMzMzM1wiLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjAuMnJlbVwiXHJcbiAgfSxcclxuICBzbToge1xyXG4gICAgcGFkZGluZzogXCIwLjQwNjI1cmVtIDEuMjVyZW1cIixcclxuICAgIGZvbnRTaXplOiBcIjAuNjg3NXJlbVwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgIGJvcmRlclJhZGl1czogXCIwLjJyZW1cIlxyXG4gIH0sXHJcbiAgcm91bmQ6IHtcclxuICAgIGJvcmRlclJhZGl1czogXCIzMHB4XCJcclxuICB9LFxyXG4gIGJsb2NrOiB7XHJcbiAgICB3aWR0aDogXCIxMDAlICFpbXBvcnRhbnRcIlxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgXCImLCY6aG92ZXIsJjpmb2N1c1wiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICBjb2xvcjogZ3JheUNvbG9yWzBdLFxyXG4gICAgICBib3hTaGFkb3c6IFwibm9uZVwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBqdXN0SWNvbjoge1xyXG4gICAgcGFkZGluZ0xlZnQ6IFwiMTJweFwiLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBcIjEycHhcIixcclxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgIGhlaWdodDogXCI0MXB4XCIsXHJcbiAgICBtaW5XaWR0aDogXCI0MXB4XCIsXHJcbiAgICB3aWR0aDogXCI0MXB4XCIsXHJcbiAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIHN2ZywmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiXHJcbiAgICB9LFxyXG4gICAgXCImJGxnXCI6IHtcclxuICAgICAgaGVpZ2h0OiBcIjU3cHhcIixcclxuICAgICAgbWluV2lkdGg6IFwiNTdweFwiLFxyXG4gICAgICB3aWR0aDogXCI1N3B4XCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiLFxyXG4gICAgICBcIiYgLmZhYiwmIC5mYXMsJiAuZmFyLCYgLmZhbCwmIC5tYXRlcmlhbC1pY29uc1wiOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMzJweFwiLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IFwiNTZweFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiJiBzdmdcIjoge1xyXG4gICAgICAgIHdpZHRoOiBcIjMycHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMzJweFwiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIiYkc21cIjoge1xyXG4gICAgICBoZWlnaHQ6IFwiMzBweFwiLFxyXG4gICAgICBtaW5XaWR0aDogXCIzMHB4XCIsXHJcbiAgICAgIHdpZHRoOiBcIjMwcHhcIixcclxuICAgICAgXCImIC5mYWIsJiAuZmFzLCYgLmZhciwmIC5mYWwsJiAubWF0ZXJpYWwtaWNvbnNcIjoge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcclxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjI5cHhcIlxyXG4gICAgICB9LFxyXG4gICAgICBcIiYgc3ZnXCI6IHtcclxuICAgICAgICB3aWR0aDogXCIxN3B4XCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjE3cHhcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uU3R5bGU7XHJcbiIsIlxyXG5jb25zdCBoZXhUb1JnYiA9IGlucHV0ID0+IHtcclxuICBpbnB1dCA9IGlucHV0ICsgXCJcIjtcclxuICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gIGxldCBoZXhSZWdleCA9IC9bMC05QS1GYS1mXS9nO1xyXG4gIGlmICghaGV4UmVnZXgudGVzdChpbnB1dCkgfHwgKGlucHV0Lmxlbmd0aCAhPT0gMyAmJiBpbnB1dC5sZW5ndGggIT09IDYpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnB1dCBpcyBub3QgYSB2YWxpZCBoZXggY29sb3IuXCIpO1xyXG4gIH1cclxuICBpZiAoaW5wdXQubGVuZ3RoID09PSAzKSB7XHJcbiAgICBsZXQgZmlyc3QgPSBpbnB1dFswXTtcclxuICAgIGxldCBzZWNvbmQgPSBpbnB1dFsxXTtcclxuICAgIGxldCBsYXN0ID0gaW5wdXRbMl07XHJcbiAgICBpbnB1dCA9IGZpcnN0ICsgZmlyc3QgKyBzZWNvbmQgKyBzZWNvbmQgKyBsYXN0ICsgbGFzdDtcclxuICB9XHJcbiAgaW5wdXQgPSBpbnB1dC50b1VwcGVyQ2FzZSgpO1xyXG4gIGxldCBmaXJzdCA9IGlucHV0WzBdICsgaW5wdXRbMV07XHJcbiAgbGV0IHNlY29uZCA9IGlucHV0WzJdICsgaW5wdXRbM107XHJcbiAgbGV0IGxhc3QgPSBpbnB1dFs0XSArIGlucHV0WzVdO1xyXG4gIHJldHVybiAoXHJcbiAgICBwYXJzZUludChmaXJzdCwgMTYpICtcclxuICAgIFwiLCBcIiArXHJcbiAgICBwYXJzZUludChzZWNvbmQsIDE2KSArXHJcbiAgICBcIiwgXCIgK1xyXG4gICAgcGFyc2VJbnQobGFzdCwgMTYpXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjYwO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHtcclxuICB0cmFuc2l0aW9uOiBcImFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpXCJcclxufTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IHtcclxuICBwYWRkaW5nUmlnaHQ6IFwiMTVweFwiLFxyXG4gIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcclxuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXHJcbiAgbWFyZ2luTGVmdDogXCJhdXRvXCJcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRGb250ID0ge1xyXG4gIGZvbnRGYW1pbHk6ICdcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxyXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXHJcbiAgbGluZUhlaWdodDogXCIxLjVlbVwiXHJcbn07XHJcblxyXG5jb25zdCBwcmltYXJ5Q29sb3IgPSBbXCIjMWFiOWI5XCIsIFwiIzJkNGU4Y1wiLCBcIiMzYTU5OThcIiwgXCIjN2Y4Y2JhXCJdO1xyXG5jb25zdCB3YXJuaW5nQ29sb3IgPSBbXCIjZmY5ODAwXCIsIFwiI2ZmYTcyNlwiLCBcIiNmYjhjMDBcIiwgXCIjZmZhMjFhXCJdO1xyXG5jb25zdCBkYW5nZXJDb2xvciA9IFtcIiNmNDQzMzZcIiwgXCIjZWY1MzUwXCIsIFwiI2U1MzkzNVwiLCBcIiNmNTVhNGVcIl07XHJcbmNvbnN0IHN1Y2Nlc3NDb2xvciA9IFtcIiM0Y2FmNTBcIiwgXCIjNjZiYjZhXCIsIFwiIzQzYTA0N1wiLCBcIiM1Y2I4NjBcIl07XHJcbmNvbnN0IGluZm9Db2xvciA9IFtcIiMwMGFjYzFcIiwgXCIjMjZjNmRhXCIsIFwiIzAwYWNjMVwiLCBcIiMwMGQzZWVcIl07XHJcbmNvbnN0IHJvc2VDb2xvciA9IFtcIiNlOTFlNjNcIiwgXCIjZWM0MDdhXCIsIFwiI2Q4MWI2MFwiLCBcIiNlYjM1NzNcIl07XHJcbmNvbnN0IGdyYXlDb2xvciA9IFtcclxuICBcIiM5OTlcIixcclxuICBcIiM3NzdcIixcclxuICBcIiMzQzQ4NThcIixcclxuICBcIiNBQUFBQUFcIixcclxuICBcIiNEMkQyRDJcIixcclxuICBcIiNERERcIixcclxuICBcIiNiNGI0YjRcIixcclxuICBcIiM1NTU1NTVcIixcclxuICBcIiMzMzNcIixcclxuICBcIiNhOWFmYmJcIixcclxuICBcIiNlZWVcIixcclxuICBcIiNlN2U3ZTdcIlxyXG5dO1xyXG5jb25zdCBibGFja0NvbG9yID0gXCIjMDAwXCI7XHJcbmNvbnN0IHdoaXRlQ29sb3IgPSBcIiNGRkZcIjtcclxuXHJcbmNvbnN0IGJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgMTBweCAzMHB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuNDIpLCAwIDRweCAyNXB4IDBweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMilcIlxyXG59O1xyXG5cclxuY29uc3QgcHJpbWFyeUJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHByaW1hcnlDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCJcclxufTtcclxuY29uc3QgaW5mb0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCJcclxufTtcclxuY29uc3Qgc3VjY2Vzc0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCJcclxufTtcclxuY29uc3Qgd2FybmluZ0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCJcclxufTtcclxuY29uc3QgZGFuZ2VyQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiXHJcbn07XHJcbmNvbnN0IHJvc2VCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiXHJcbn07XHJcblxyXG5jb25zdCB3YXJuaW5nQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgd2FybmluZ0NvbG9yWzFdICsgXCIsIFwiICsgd2FybmluZ0NvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4ud2FybmluZ0JveFNoYWRvd1xyXG59O1xyXG5jb25zdCBzdWNjZXNzQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgc3VjY2Vzc0NvbG9yWzFdICsgXCIsIFwiICsgc3VjY2Vzc0NvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uc3VjY2Vzc0JveFNoYWRvd1xyXG59O1xyXG5jb25zdCBkYW5nZXJDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBkYW5nZXJDb2xvclsxXSArIFwiLCBcIiArIGRhbmdlckNvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uZGFuZ2VyQm94U2hhZG93XHJcbn07XHJcbmNvbnN0IGluZm9DYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBpbmZvQ29sb3JbMV0gKyBcIiwgXCIgKyBpbmZvQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5pbmZvQm94U2hhZG93XHJcbn07XHJcbmNvbnN0IHByaW1hcnlDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBwcmltYXJ5Q29sb3JbMV0gKyBcIiwgXCIgKyBwcmltYXJ5Q29sb3JbMl0gKyBcIilcIixcclxuICAuLi5wcmltYXJ5Qm94U2hhZG93XHJcbn07XHJcbmNvbnN0IHJvc2VDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyByb3NlQ29sb3JbMV0gKyBcIiwgXCIgKyByb3NlQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5yb3NlQm94U2hhZG93XHJcbn07XHJcblxyXG5jb25zdCBjYXJkQWN0aW9ucyA9IHtcclxuICBtYXJnaW46IFwiMCAyMHB4IDEwcHhcIixcclxuICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcclxuICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkIFwiICsgZ3JheUNvbG9yWzEwXSxcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIC4uLmRlZmF1bHRGb250XHJcbn07XHJcblxyXG5jb25zdCBjYXJkSGVhZGVyID0ge1xyXG4gIG1hcmdpbjogXCItMjBweCAxNXB4IDBcIixcclxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgcGFkZGluZzogXCIxNXB4XCJcclxufTtcclxuXHJcbmNvbnN0IGNhcmQgPSB7XHJcbiAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBtYXJnaW46IFwiMjVweCAwXCIsXHJcbiAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjE0KVwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBjb2xvcjogXCJyZ2JhKFwiICsgaGV4VG9SZ2IoYmxhY2tDb2xvcikgKyBcIiwgMC44NylcIixcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZUNvbG9yXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0Qm94U2hhZG93ID0ge1xyXG4gIGJvcmRlcjogXCIwXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCAxMHB4IDIwcHggLTEycHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC40MiksIDAgM3B4IDIwcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC4yKVwiLFxyXG4gIHBhZGRpbmc6IFwiMTBweCAwXCIsXHJcbiAgdHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgZWFzZSAwc1wiXHJcbn07XHJcblxyXG5jb25zdCB0aXRsZSA9IHtcclxuICBjb2xvcjogZ3JheUNvbG9yWzJdLFxyXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICBmb250V2VpZ2h0OiBcIjMwMFwiLFxyXG4gIG1hcmdpblRvcDogXCIzMHB4XCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjI1cHhcIixcclxuICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxyXG4gIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmXCIsXHJcbiAgXCImIHNtYWxsXCI6IHtcclxuICAgIGNvbG9yOiBncmF5Q29sb3JbMV0sXHJcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxXCJcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjYXJkVGl0bGUgPSB7XHJcbiAgLi4udGl0bGUsXHJcbiAgbWFyZ2luVG9wOiBcIjBcIixcclxuICBtYXJnaW5Cb3R0b206IFwiM3B4XCIsXHJcbiAgbWluSGVpZ2h0OiBcImF1dG9cIixcclxuICBcIiYgYVwiOiB7XHJcbiAgICAuLi50aXRsZSxcclxuICAgIG1hcmdpblRvcDogXCIuNjI1cmVtXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMC43NXJlbVwiLFxyXG4gICAgbWluSGVpZ2h0OiBcImF1dG9cIlxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNhcmRTdWJ0aXRsZSA9IHtcclxuICBtYXJnaW5Ub3A6IFwiLS4zNzVyZW1cIlxyXG59O1xyXG5cclxuY29uc3QgY2FyZExpbmsgPSB7XHJcbiAgXCImICsgJGNhcmRMaW5rXCI6IHtcclxuICAgIG1hcmdpbkxlZnQ6IFwiMS4yNXJlbVwiXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBoZXhUb1JnYixcclxuICAvL3ZhcmlhYmxlc1xyXG4gIGRyYXdlcldpZHRoLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgY29udGFpbmVyLFxyXG4gIGJveFNoYWRvdyxcclxuICBjYXJkLFxyXG4gIGRlZmF1bHRGb250LFxyXG4gIHByaW1hcnlDb2xvcixcclxuICB3YXJuaW5nQ29sb3IsXHJcbiAgZGFuZ2VyQ29sb3IsXHJcbiAgc3VjY2Vzc0NvbG9yLFxyXG4gIGluZm9Db2xvcixcclxuICByb3NlQ29sb3IsXHJcbiAgZ3JheUNvbG9yLFxyXG4gIGJsYWNrQ29sb3IsXHJcbiAgd2hpdGVDb2xvcixcclxuICBwcmltYXJ5Qm94U2hhZG93LFxyXG4gIGluZm9Cb3hTaGFkb3csXHJcbiAgc3VjY2Vzc0JveFNoYWRvdyxcclxuICB3YXJuaW5nQm94U2hhZG93LFxyXG4gIGRhbmdlckJveFNoYWRvdyxcclxuICByb3NlQm94U2hhZG93LFxyXG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxyXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxyXG4gIGRhbmdlckNhcmRIZWFkZXIsXHJcbiAgaW5mb0NhcmRIZWFkZXIsXHJcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXHJcbiAgcm9zZUNhcmRIZWFkZXIsXHJcbiAgY2FyZEFjdGlvbnMsXHJcbiAgY2FyZEhlYWRlcixcclxuICBkZWZhdWx0Qm94U2hhZG93LFxyXG4gIHRpdGxlLFxyXG4gIGNhcmRUaXRsZSxcclxuICBjYXJkU3VidGl0bGUsXHJcbiAgY2FyZExpbmtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbi8vIG1hdGVyaWFsLXVpIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcblxyXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZmlsZVVwbG9hZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vYXNzZXRzL2pzcy9idXR0b25TdHlsZS5qc1wiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVndWxhckJ1dHRvbihwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7XHJcbiAgICBjb2xvcixcclxuICAgIHJvdW5kLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIHNpbXBsZSxcclxuICAgIHNpemUsXHJcbiAgICBibG9jayxcclxuICAgIGxpbmssXHJcbiAgICBqdXN0SWNvbixcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIG11aUNsYXNzZXMsXHJcbiAgICAuLi5yZXN0XHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGJ0bkNsYXNzZXMgPSBjbGFzc05hbWVzKHtcclxuICAgIFtjbGFzc2VzLmJ1dHRvbl06IHRydWUsXHJcbiAgICBbY2xhc3Nlc1tzaXplXV06IHNpemUsXHJcbiAgICBbY2xhc3Nlc1tjb2xvcl1dOiBjb2xvcixcclxuICAgIFtjbGFzc2VzLnJvdW5kXTogcm91bmQsXHJcbiAgICBbY2xhc3Nlcy5kaXNhYmxlZF06IGRpc2FibGVkLFxyXG4gICAgW2NsYXNzZXMuc2ltcGxlXTogc2ltcGxlLFxyXG4gICAgW2NsYXNzZXMuYmxvY2tdOiBibG9jayxcclxuICAgIFtjbGFzc2VzLmxpbmtdOiBsaW5rLFxyXG4gICAgW2NsYXNzZXMuanVzdEljb25dOiBqdXN0SWNvbixcclxuICAgIFtjbGFzc05hbWVdOiBjbGFzc05hbWVcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiB7Li4ucmVzdH0gY2xhc3Nlcz17bXVpQ2xhc3Nlc30gY2xhc3NOYW1lPXtidG5DbGFzc2VzfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufVxyXG5cclxuUmVndWxhckJ1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXHJcbiAgICBcInByaW1hcnlcIixcclxuICAgIFwiaW5mb1wiLFxyXG4gICAgXCJzdWNjZXNzXCIsXHJcbiAgICBcIndhcm5pbmdcIixcclxuICAgIFwiZGFuZ2VyXCIsXHJcbiAgICBcInJvc2VcIixcclxuICAgIFwid2hpdGVcIixcclxuICAgIFwidHJhbnNwYXJlbnRcIlxyXG4gIF0pLFxyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJzbVwiLCBcImxnXCJdKSxcclxuICBzaW1wbGU6IFByb3BUeXBlcy5ib29sLFxyXG4gIHJvdW5kOiBQcm9wVHlwZXMuYm9vbCxcclxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgYmxvY2s6IFByb3BUeXBlcy5ib29sLFxyXG4gIGxpbms6IFByb3BUeXBlcy5ib29sLFxyXG4gIGp1c3RJY29uOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgLy8gdXNlIHRoaXMgdG8gcGFzcyB0aGUgY2xhc3NlcyBwcm9wcyBmcm9tIE1hdGVyaWFsLVVJXHJcbiAgbXVpQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcclxufTtcclxuIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XHJcblxyXG5mdW5jdGlvbiBJbnB1dEljb25lKHByb3BzKSB7XHJcbiBcclxuICAgICAgbGV0IHtJY29uZSwgLi4ub3RoZXJzfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgey4uLm90aGVyc31cclxuICAgICAgICB3aWR0aD0gXCIyMDBcIlxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICBzdGFydEFkb3JubWVudDogKFxyXG4gICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxyXG4gICAgICAgICAgICA8SWNvbmUgY29sb3I9XCIjMWFiOWI5XCIgLz5cclxuICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxuICBcclxuICB9XHJcbiAgZXhwb3J0IGRlZmF1bHQgSW5wdXRJY29uZSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhvbmVGaWVsZChwcm9wcykge1xyXG4gICAgbGV0IHtJY29uZSwgLi4ub3RoZXJzfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICA8VGV4dEZpZWxkXHJcbiAgICB7Li4ub3RoZXJzfVxyXG4gICAgICAgIHdpZHRoPSBcIjIwMFwiXHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHN0eWxlPXt7ZGlyZWN0aW9uOiBcImx0clwifX1cclxuICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcclxuICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cclxuICAgICAgICAgICAgPEljb25lIGNvbG9yPVwiIzFhYjliOVwiIC8+XHJcbiAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XHJcbiAgICAgICAgKSxcclxuICAgICAgICB9fVxyXG4gICAgLz5cclxuICAgIClcclxuICAgIFxyXG4gIH0iLCJcclxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IENvbCxSb3csIEFsZXJ0LCBDb2xsYXBzZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcclxuXHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1MYWJlbCc7XHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbyc7XHJcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXQnO1xyXG5pbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuXHJcbmltcG9ydCBSYWRpb0dyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnO1xyXG4vLyBpbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXAnO1xyXG5pbXBvcnQge01kVmlzaWJpbGl0eSwgTWRWaXNpYmlsaXR5T2ZmfSBmcm9tICdyZWFjdC1pY29ucy9tZCdcclxuXHJcbi8vIHNlcnZpY2VzXHJcbi8vIGltcG9ydCB7Z2V0Q2l0eSwgc2lnbnVwTWVkZWNpbn0gZnJvbSAnc2VydmljZXMvbWVkZWNpbi9NZWRlY2luU2VydmljZSdcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBDb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiXHJcblxyXG5pbXBvcnQgUGhvbmVGaWVsZCBmcm9tICcuL0lucHV0cy9QaG9uZU51bWJlci9pbmRleCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnLi9JbnB1dHMvSW5wdXRJY29uZS9pbmRleCc7XHJcbmltcG9ydCBCdXR0b24gIGZyb20gJy4vQ3VzdG9tQnV0dG9ucy9CdXR0b24nO1xyXG5cclxuXHJcbmltcG9ydCB7IEZhTWFpbEJ1bGssIEZhUGhvbmUsIEZhVXNlck1kIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgIGNsYXNzIEVsZW1lbnRGb3JtIGV4dGVuZHMgQ29tcG9uZW50ICB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIG5vbTogXCJcIixcclxuICAgICAgICAgICAgcHJlbm9tOlwiXCIsXHJcbiAgICAgICAgICAgIHBob25lOlwiXCIsXHJcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZDpcIlwiLFxyXG4gICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgIHZpbGxlczpbXSxcclxuICAgICAgICAgICAgY2l0eUlkOiBcIlwiLFxyXG5cdCAgICAgICAgc2V4ZTpcIlwiLFxyXG4gICAgICAgICAgICBmaWVsZFZhbGlkYXRpb25FcnJvcnM6e1xyXG4gICAgICAgICAgICAgICAgbm9tRXJyb3I6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwcmVub21FcnJvcjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIG51bWVyb0Vycm9yOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZW1haWxFcnJvcjpmYWxzZSxcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZW5kaW5nOmZhbHNlLFxyXG4gICAgICAgICAgICBzdWNjZXNzOmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZW5kaW5nOiB0cnVlfSk7XHJcblxyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy50cmFpdGVtZW50RG9ubmVlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coQ29uZmlnLmFwaV9wYXRoKVxyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBDb25maWcuYXBpX3BhdGggKyBcIi9tZWRlY2luL3NpZ251cFwiXHJcbiAgICAgICAgY29uc29sZS5sb2cobGluaylcclxuICAgICAgICBmZXRjaChsaW5rLHtcclxuICAgICAgICAgICAgbWV0aG9kOlwicG9zdFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHsuLi5kYXRhfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAocikgPT4gci5qc29uKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighcmVzLmVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZW5kaW5nOiBmYWxzZSwgc3VjY2Vzczp0cnVlLCBkb25uZUluY29yZWN0ZTogZmFsc2V9KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzZW5kaW5nOiBmYWxzZSwgc3VjY2VzczpmYWxzZSwgZG9ubmVJbmNvcmVjdGU6dHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLnZhbGlkYXRvcil7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkuY2F0Y2goZXJyb3IgPT57IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2VuZGluZzogZmFsc2UsIHN1Y2Nlc3M6ZmFsc2UsIGRvbm5lSW5jb3JlY3RlOnRydWV9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRyYWl0ZW1lbnREb25uZWUoKXtcclxuICAgICAgICBsZXQgZm9ybURhdGE9e307XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9ybURhdGEubm9tPXRoaXMuc3RhdGUubm9tXHJcbiAgICAgICAgZm9ybURhdGEucGhvbmU9dGhpcy5zdGF0ZS5waG9uZVxyXG4gICAgICAgIGZvcm1EYXRhLmVtYWlsPXRoaXMuc3RhdGUuZW1haWxcclxuICAgICAgICBmb3JtRGF0YS5wcmVub209dGhpcy5zdGF0ZS5wcmVub21cclxuICAgICAgICBmb3JtRGF0YS5jaXR5SWQ9dGhpcy5zdGF0ZS5jaXR5SWRcclxuXHQgICAgZm9ybURhdGEuc2V4ZSA9IHRoaXMuc3RhdGUuc2V4ZVxyXG5cdCAgICBmb3JtRGF0YS5wYXNzd29yZCA9IHRoaXMuc3RhdGUucGFzc3dvcmRcclxuICAgICAgICByZXR1cm4gZm9ybURhdGE7XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoe3RhcmdldCA6IHt2YWx1ZSwgbmFtZX19KSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYobmFtZSA9PT0gXCJwaG9uZVwiKXtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgYWxsIG5vbi1kaWdpdHMsIHR1cm4gaW5pdGlhbCAzMyBpbnRvIG5vdGhpbmdcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1teXFxkK10vZywgJycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eMC8sICcrMjEyJylcclxuICAgICAgICAgICAgLy8gU3RpY2sgdG8gZmlyc3QgMTAsIGlnbm9yZSBsYXRlciBkaWdpdHNcclxuICAgICAgICAgICAgLnNsaWNlKDAsIDEzKVxyXG4gICAgICAgICAgICAvLyBBZGQgYSBzcGFjZSBhZnRlciBhbnkgMi1kaWdpdCBncm91cCBmb2xsb3dlZCBieSBtb3JlIGRpZ2l0c1xyXG4gICAgICAgICAgICAucmVwbGFjZSgvKFxcZHszfSkoPz1cXGQpL2csICckMSAnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSkgO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgZmV0Y2goYCR7Q29uZmlnLmFwaV9wYXRofS9jaXR5YCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCBcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS50aGVuICgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKCkudGhlbiAocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5jaXRpZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZpbGxlczogcmVzcG9uc2UuY2l0aWVzfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IHt2aWxsZXMsIGZpZWxkVmFsaWRhdGlvbkVycm9ycywgbm9tLCBwcmVub20sIHBob25lLCBlbWFpbCwgZG9ubmVJbmNvcmVjdGUsIGNpdHlJZCwgc3VjY2VzcywgIHNleGUsc2VuZGluZ30gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiBjbGFzc05hbWU9XCJtdC0zXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZmllbGRWYWxpZGF0aW9uRXJyb3JzLm5vbUVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVm90cmUgbm9tIGRlIGZhbWlsbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGNoZWRPdXRsaW5lOiB7IGJvcmRlckNvbG9yOiAnIzM4ODY5QyAhaW1wb3J0YW50Jyxib3JkZXJXaWR0aDpcIjJweCAhaW1wb3J0YW50XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogJyM2MTc4OEUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEljb25lPXtGYVVzZXJNZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElucHV0TGFiZWxQcm9wcz17e3N0eWxlOntyaWdodDogMCwgbGVmdDpcImF1dG9cIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy52YWxpZGF0ZUZpZWxkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCI2XCIgY2xhc3NOYW1lPVwibXQtM1wiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZvdHJlIHByZW5vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGNoZWRPdXRsaW5lOiB7IGJvcmRlckNvbG9yOiAnIzM4ODY5QyAhaW1wb3J0YW50Jyxib3JkZXJXaWR0aDpcIjJweCAhaW1wb3J0YW50XCIgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogJyM2MTc4OEUnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtmaWVsZFZhbGlkYXRpb25FcnJvcnMucHJlbm9tRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmVub21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEljb25lPXtGYVVzZXJNZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnB1dExhYmVsUHJvcHM9e3tzdHlsZTp7cmlnaHQ6IDAsIGxlZnQ6XCJhdXRvXCJ9fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMudmFsaWRhdGVGaWVsZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByZW5vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByZW5vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGhvbmVGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk51bcOpcm8gZGUgdMOpbMOpcGhvbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJY29uZT17RmFQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Y2hlZE91dGxpbmU6IHsgYm9yZGVyQ29sb3I6ICcjMzg4NjlDICFpbXBvcnRhbnQnLGJvcmRlcldpZHRoOlwiMnB4ICFpbXBvcnRhbnRcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiAnIzYxNzg4RScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZmllbGRWYWxpZGF0aW9uRXJyb3JzLm51bWVyb0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElucHV0TGFiZWxQcm9wcz17e3N0eWxlOntyaWdodDogMCwgbGVmdDpcImF1dG9cIn19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy52YWxpZGF0ZUZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIisyMTIgNjAwIDAwMCAwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxSb3cgY2xhc3NOYW1lPVwibXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17ZmllbGRWYWxpZGF0aW9uRXJyb3JzLm51bWVyb0Vycm9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCAgdmFyaWFudD1cImRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBtZD1cIjZcIiBjbGFzc05hbWU9XCJtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRyZXNzZSBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWNvbmU9e0ZhTWFpbEJ1bGt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZHJlc3NlIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Y2hlZE91dGxpbmU6IHsgYm9yZGVyQ29sb3I6ICcjMzg4NjlDICFpbXBvcnRhbnQnLGJvcmRlcldpZHRoOlwiMnB4ICFpbXBvcnRhbnRcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiAnIzYxNzg4RScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZmllbGRWYWxpZGF0aW9uRXJyb3JzLmVtYWlsRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5wdXRMYWJlbFByb3BzPXt7c3R5bGU6e3JpZ2h0OiAwLCBsZWZ0OlwiYXV0b1wifX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLnZhbGlkYXRlRmllbGR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgY2xhc3NOYW1lPVwibXQtM1wiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGggdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInN0YW5kYXJkLWFkb3JubWVudC1wYXNzd29yZFwiIHN0eWxlPXt7Y29sb3I6XCIjNjE3ODhFXCJ9fT4gTW90IGRlIHBhc3NlIDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWFkb3JubWVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3RoaXMuc3RhdGUuc2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1vdCBkZSBwYXNzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidG9nZ2xlIHBhc3N3b3JkIHZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLnNldFN0YXRlKG9sZCA9PntyZXR1cm4gIHsuLi5vbGQsIHNob3dQYXNzd29yZDogIXRoaXMuc3RhdGUuc2hvd1Bhc3N3b3JkfX0pfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dQYXNzd29yZCA/IDxNZFZpc2liaWxpdHkgLz4gOiA8TWRWaXNpYmlsaXR5T2ZmIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCIxMlwiIGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdmFyaWFudD1cIm91dGxpbmVkXCIgZnVsbFdpZHRoID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCA+VmlsbGU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2l0eUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVmlsbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2l0eUlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2aWxsZXMubWFwKCgodmlsbGUsIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17dmlsbGUuaWR9Pnt2aWxsZS5uYW1lfTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIG1kPVwiMTJcIiBjbGFzc05hbWU9XCJteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBjb21wb25lbnQ9XCJsZWdlbmRcIj5TZXhlPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXAgY2xhc3NOYW1lPVwiZmxleC1yb3dcIiBhcmlhLWxhYmVsPVwiU2V4ZVwiIG5hbWU9XCJzZXhlXCIgdmFsdWU9e3NleGV9IG9uQ2xpY2s9eyhldmVudCk9Pnt0aGlzLnNldFN0YXRlKHtzZXhlOiBldmVudC50YXJnZXQudmFsdWV9KX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT17J2hvbW1lJ30gY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIkhvbW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9eydmZW1tZSd9IGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJGZW1tZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGluPXtkb25uZUluY29yZWN0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgIHZhcmlhbnQ9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXMgaW5mb3JtYXRpb24gc29udCBpbmNvcnJlY3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17c3VjY2Vzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0ICB2YXJpYW50PVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbWFuZGUgZW52b3llciBhdmVjIHN1Y2PDqXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibGVmdC1jb250ZW50IFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz1cIjEyXCIgbWQ9XCIxMlwiIGNsYXNzTmFtZT1cIm10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4tc2F2ZVwiIGNvbG9yPVwicHJpbWFyeVwiPiBFbnJlZ2lzdHJlciA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG5cclxufVxyXG59XHJcbiIsImNvbnN0IExvY2FsQ29uZmlnID0ge1xyXG4gICAgYXBpX3BhdGggOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDMwMFwiLFxyXG59XHJcbmNvbnN0IHByb2RDb25maWcgPSB7XHJcbiAgICBhcGlfcGF0aCA6IFwiaHR0cHM6Ly9hcGkuZG9jdG9saXZlLm1hXCIsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcHJvZENvbmZpZzsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuXHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcblxyXG4vLyBpbXBvcnQgQmFubmVySG9tZSBmcm9tICcuLy4uL2Fzc2V0cy9pbWcvbWVkaWNhbGRpc2N1c3Npb24uanBnJ1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgQmlDaGVjaywgQmlTZWFyY2gsIEJpQ2FsZW5kYXJ9IGZyb20gJ3JlYWN0LWljb25zL2JpJ1xyXG5cclxuXHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uJztcclxuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeSc7XHJcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuXHJcbmltcG9ydCB7TWRFeHBhbmRNb3JlLCBNZENoZWNrfSBmcm9tICdyZWFjdC1pY29ucy9tZCdcclxuXHJcbmltcG9ydCBzdHlsZXMxIGZyb20gXCIuLi9hc3NldHMvanNzL01lZGVjaW5Ib21lU3R5bGUuanNcIjtcclxuXHJcbmltcG9ydCBNZWRlY2luRm9ybSBmcm9tICcuLy4uL2NvbXBvbmVudHMvTWVkZWNpbkZvcm0nXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlczEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbc2NyZWVuV2lkdGgsIHNldFNjcmVlbldpZHRoXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcclxuICAgICAgICAgIHNldFNjcmVlbldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTaXplKTtcclxuICAgIHVwZGF0ZVNpemUoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTaXplKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiA+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT4gRG9jdG9saXZlIC0gUmVuZGV6LXZvdXMgZW4gbGlnbmUgYXZlYyB2b3RyZSBtw6lkZWNpbjwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgPEhlYWRlciBzY3JlZW5XaWR0aD17c2NyZWVuV2lkdGh9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEF2YW50YWdlcyAvPlxyXG4gICAgICAgIDxTdGVwcyAvPlxyXG4gICAgICAgIHsvKiA8S2VlcCAvPiAqL31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIEF2YW50YWdlcygpe1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uICsgXCIgcmVwZWF0LWljb24tYm94XCJ9PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyID5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvblRpdGxsZX0gPkTDqWNvdXZyZXogbGVzIGF2YW50YWdlcyBkZSBEb2N0b2xpdmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2h5Q2FyZHMubWFwKCh3aHljYXJkLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBrZXk9e2luZGV4fSBsZz1cIjRcIiBtZD1cIjZcIiB4cz1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXItcmVwZWF0IGQtZmxleCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1pY29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiA8aW1nIHNyYyA9eyBgL2ltYWdlLyR7d2h5Y2FyZC5pY29ufWB9IGFsdD1cIi4uLlwiIGNsYXNzTmFtZT1cIm1iLTNcIiAvPiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGUtdDNcIj57d2h5Y2FyZC50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwid3JhcHBlci1kZXNjXCI+e3doeWNhcmQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBTdGVwcyAoKXtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybihcclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb24gKyBcIiBzZWN0aW9uLWhvbWUtaG93LXdvcmtzIHBhZGRpbmdfdG9wXCJ9PlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRpbmcgdGV4dC1jZW50ZXJcIj4gRMOpbWFycmV6IGVuIDMgw6l0YXBlcyBzaW1wbGVzPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHctYXJlYVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh3LWJveCBody1ib3gtLW10XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHctYm94X19pY29uXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1zZWFyY2hcIj4gPEJpU2VhcmNoIGNvbG9yPSd3aGl0ZScgLz4gPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaHctYm94X190aXRsZVwiPiBSZWpvaWduZXotbm91cyA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJody1ib3hfX3RleHRcIj4gUydpbnNjcmlyZSBhdmVjIHZvcyBjb29yZG9ubsOpZXMgc3VyIGxhIHBsYXRlZm9ybWUgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh3LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh3LWJveF9faWNvblwiPiA8c3BhbiBjbGFzc05hbWU9XCJpY29uLXN2ZyB2YS1taWRkbGUtaW5saW5lXCI+IDxCaUNhbGVuZGFyIGNvbG9yPSd3aGl0ZScgLz4gPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImh3LWJveF9fdGl0bGVcIj4gVsOpcmlmaWNhdGlvbiBkJ2lkZW50aXTDqSA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJody1ib3hfX3RleHRcIj4gQ29tcGxldGV6IGxlIHByb2Nlc3N1cyBkZSB2w6lyaWZpY2F0aW9uIGF2ZWMgbm9zIGNvbnN1bHRhbnQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh3LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh3LWJveF9faWNvblwiPjxzcGFuIGNsYXNzTmFtZT1cImljb24tZmF0LWNoZWNrXCI+PEJpQ2hlY2sgY29sb3I9J3doaXRlJyAvPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImh3LWJveF9fdGl0bGVcIj4gQ29uc3VsdGV6IHZvcyBwYXRpZW50IDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImh3LWJveF9fdGV4dFwiPiAgQ29tbWVuY2VyIMOgIGNvbnN1bHRlciBlbiB2aWTDqW8gZXQgZ8OpcmV6IHZvcyByZW5kZXotdm91cyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5mdW5jdGlvbiBLZWVwKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb24gKyBcIiBwYWRkaW5nX3RvcFwifT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbCBtZD1cIjZcIiB4cz1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz4gR2FyZGV6IGxlcyBwYXRpZW50cyBkZSB2b3RyZSBjbGluaXF1ZSBlbmdhZ8OpcyA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND4gSW1wcmVzc2lvbm5leiB2b3MgcGF0aWVudHMgZW4gbGV1ciBwZXJtZXR0YW50IGRlIHN1aXZyZSBhdmVjIHZvdXMgZW4gbGlnbmUgPC9oND5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT4gQXVnbWVudGVyIGxhIHLDqXRlbnRpb24gZGVzIHBhdGllbnRzIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiBJbnRlcmFnaXNzZXogYXZlYyBsZXMgcGF0aWVudHMgYXByw6hzIGxldXJzIHJlbmRlei12b3VzLiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT4gQ29udHLDtGxleiBlZmZpY2FjZW1lbnQgbGVzIHN1aXZpcyA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8cD4gRGlzY3V0ZXogYXZlYyBsZXMgcGF0aWVudHMgc2FucyBwYXJ0YWdlciB2b3RyZSBudW3DqXJvIHBlcnNvbm5lbC4gRMOpZmluaXNzZXogdm90cmUgZHVyw6llIGRlIHN1aXZpIGdyYXR1aXQgZXQgcGx1cyBlbmNvcmUuIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGg1PiBNb27DqXRpc2VyIGxlcyBzdWl2aXMgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPHA+ICBNb27DqXRpc2VyIGxlcyBpbnRlcmFjdGlvbnMgZGUgc3VpdmkgcsOpcMOpdMOpZXMgZW4gYXNzdXJhbnQgbGUgc3VpdmkgZGVzIHBhdGllbnRzIGRhbnMgbGUgY29uZm9ydCBkZSBsZXVyIGRvbWljaWxlLiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCIgeHM9XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2Uva2VlcC5wbmdcIiBhbHQ9XCJEb2N0b3IgdGFraW5nIGNhcmUgb2YgZmFtaWx5XCIgLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHdoeUNhcmRzID0gW1xyXG4gIHtcclxuICAgIGljb246IFwiY2xvY2sucG5nXCIsXHJcbiAgICB0aXRsZTogXCJOZSBwZXJkZXogcGx1cyBkZSB0ZW1wcyDDoCBnw6lyZXIgbGEgcHJpc2UgZGUgcmVuZGV6LXZvdXNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlVuIHN5c3TDqG1lIGRlIHLDqXNlcnZhdGlvbiBtw6lkaWNhbGUgZW4gbGlnbmUgYXZlYyBkZSBub21icmV1c2VzIGZvbmN0aW9ubmFsaXTDqXMuIEfDqXJleiB2b3RyZSBjYWJpbmV0IGF2ZWMgdW5lIHZ1ZSBjbGFpcmUgZGVzIHJlbmRlei12b3VzIMOgIHZlbmlyLiBQZXJzb25uYWxpc2V6IHRvdXMgbGVzIHBhcmFtw6h0cmVzIGRvbnQgdm91cyBhdmV6IGJlc29pbi5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IFwiZGV2aWNlLnBuZ1wiLFxyXG4gICAgdGl0bGU6IFwiQWNjw6lkZXogw6Agdm90cmUgaG9yYWlyZSBtw6lkaWNhbCBvw7kgdm91cyB2b3VsZXosIHF1YW5kIHZvdXMgbGUgc291aGFpdGV6XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJOb3RyZSBsb2dpY2llbCBkZSBwbGFuaWZpY2F0aW9uIG3DqWRpY2FsZSBlc3QgYWNjZXNzaWJsZSBkZXB1aXMgdm90cmUgb3JkaW5hdGV1ciwgdGFibGV0dGUgb3Ugc21hcnRwaG9uZS4gVm91cyBwb3V2ZXogdsOpcmlmaWVyIGxlcyBpbmZvcm1hdGlvbnMgZGUgdm90cmUgcHJhdGlxdWUgw6AgdG91dCBtb21lbnQsIG/DuSBxdWUgdm91cyBzb3llei5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IFwib2ZmcmUucG5nXCIsXHJcbiAgICB0aXRsZTogXCJPZmZyaXIgbGEgdMOpbMOpbcOpZGVjaW5lIGV0IMOpbGFyZ2lyIGwnYWNjw6hzIGF1eCBzZXJ2aWNlcyBkZSBzYW50w6kgcG91ciBsZXMgcGF0aWVudHNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxhIGNvbnN1bHRhdGlvbiBlbiBsaWduZSBwZXJtZXQgZGUgbWFpbnRlbmlyIGxhIGNvbnRpbnVpdMOpIGRlcyBzb2lucyBwb3VyIHZvcyBwYXRpZW50cy4gQXVnbWVudGVyIGxhIGRpc3RhbmNlIHNvY2lhbGUgZXQgZMOpbGl2cmVyIGRlcyBvcmRvbm5hbmNlcyBhdXggcGF0aWVudHMgw6AgZG9taWNpbGUuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBcImRldmljZTIucG5nXCIsXHJcbiAgICB0aXRsZTogXCJGYWNpbGl0ZXogbGEgcHJpc2UgZGUgcmVuZGV6LXZvdXMgbcOpZGljYXV4IHBvdXIgdm9zIHBhdGllbnRzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJWb3MgcGF0aWVudHMgcGV1dmVudCBwcmVuZHJlIGRlcyByZW5kZXotdm91cyAyNGggLyAyNCBldCA3aiAvIDcsIHZvdHJlIGNhYmluZXQgcmXDp29pdCBtb2lucyBkJ2FwcGVscyBlbnRyYW50cyBldCB2b3VzIHJlbXBsaXNzZXogbGVzIGNyw6luZWF1eCBkaXNwb25pYmxlcyBtw6ptZSDDoCBsYSBkZXJuacOocmUgbWludXRlLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogXCJkZXZpY2UzLnBuZ1wiLFxyXG4gICAgdGl0bGU6IFwiUGVyc29ubmFsaXNleiB2b3RyZSBob3JhaXJlIGRlIHByYXRpcXVlIGVuIGZvbmN0aW9uIGRlIHZvcyBiZXNvaW5zXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJEw6lmaW5pc3NleiBjaGFxdWUgcGFyYW3DqHRyZSBwb3VyIHF1ZSB2b3RyZSBzeXN0w6htZSBkZSByw6lzZXJ2YXRpb24gZW4gbGlnbmUgcsOpcG9uZGUgw6AgdG91dGVzIHZvcyBhdHRlbnRlcy4gT3V2cmV6IGxlcyBwbGFnZXMgaG9yYWlyZXMgZGlzcG9uaWJsZXMgZXQgc8OpbGVjdGlvbm5leiBsZXMgcmFpc29ucyBkZSBsYSB2aXNpdGUgZW4gZm9uY3Rpb24gZGUgdm90cmUgc3DDqWNpYWxpdMOpLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogXCJkZXZpY2U0LnBuZ1wiLFxyXG4gICAgdGl0bGU6IFwiSW5zdGFsbGV6IGV0IG1hw650cmlzZXogdm90cmUgaG9yYWlyZSBtw6lkaWNhbCBlbiBsaWduZSBlbiB1biByaWVuIGRlIHRlbXBzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJOb3RyZSDDqXF1aXBlIGTDqWRpw6llIHZvdXMgYWlkZSDDoCBtZXR0cmUgZW4gcGxhY2Ugdm90cmUgc3lzdMOobWUgZGUgcsOpc2VydmF0aW9uIG3DqWRpY2FsZS4gRGV2ZW5leiB1biBleHBlcnQgaW5zdGFudGFuw6ltZW50IGdyw6JjZSDDoCBub3RyZSBkb2N1bWVudGF0aW9uIGNvbXBsw6h0ZS5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IFwiZGV2aWNlNS5wbmdcIixcclxuICAgIHRpdGxlOiBcIkNvbW11bmlxdWV6IGVuIHRlbXBzIHLDqWVsIGF2ZWMgdm9zIHBhdGllbnRzIGV0IHLDqWR1aXNleiBsZXMgcmVuZGV6LXZvdXMgbWFucXXDqXNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxhaXNzZXogbGVzIHBhdGllbnRzIHLDqXNlcnZlciwgYW5udWxlciBvdSByZXBvcnRlciBsZXVycyByZW5kZXotdm91cyBlbiBsaWduZSAyNGggLyAyNCBldCA3aiAvIDcuIFLDqWR1aXNleiBsZXMgcmVuZGV6LXZvdXMgbWFucXXDqXMgZ3LDomNlIGF1eCByYXBwZWxzIGF1dG9tYXRpcXVlcyBwYXIgZS1tYWlsLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogXCJkZXZpY2U2LnBuZ1wiLFxyXG4gICAgdGl0bGU6IFwiQW3DqWxpb3JleiB2b3RyZSB2aXNpYmlsaXTDqSBlbiBsaWduZSBldCB0cm91dmV6IGRlIG5vdXZlYXV4IHBhdGllbnRzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJWb3RyZSBsaXN0ZSBEb2N0b2xpdmUgcGVybWV0IGF1eCBwYXRpZW50cyBkZSB0cm91dmVyIGZhY2lsZW1lbnQgdm90cmUgY2FiaW5ldC4gTGFpc3NleiBsZXMgcGF0aWVudHMgcsOpc2VydmVyIGxldXJzIHJlbmRlei12b3VzIGVuIGxpZ25lIHN1ciBub3RyZSBwbGF0ZWZvcm1lLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogXCJkZXZpY2U3LnBuZ1wiLFxyXG4gICAgdGl0bGU6IFwiU3luY2hyb25pc2V6IG5vdHJlIGxvZ2ljaWVsIGRlIHBsYW5pZmljYXRpb24gZGVzIHBhdGllbnRzIGF2ZWMgdm90cmUgaW5mcmFzdHJ1Y3R1cmVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkRvY3RvbGl2ZSBzJ2ludMOoZ3JlIGltbcOpZGlhdGVtZW50IGRhbnMgdm90cmUgaW5mcmFzdHJ1Y3R1cmUgZXhpc3RhbnRlLiBTJ2ludGVyZmFjZSBkZSBtYW5pw6hyZSB0cmFuc3BhcmVudGUgYXZlYyBsZXMgYXBwbGljYXRpb25zIGRlIGdlc3Rpb24gZGUgY2FiaW5ldCBsZXMgcGx1cyBjb3VyYW50ZXMuXCIsXHJcbiAgfSxcclxuXVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyICgpe1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9IHtjbGFzc2VzLmhlYWRlcn0gc3R5bGU9e3tiYWNrZ3JvdW5kOiBgcmdiYSgxODIsIDIxOSwgMjE1LCAwLjIxKWB9fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxDb250YWluZXIgPiBcclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD1cIjdcIiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBsZWZ0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDFcIj5Db25zdWx0ZXogZW4gbGlnbmUgZXQgZMOpdmVsb3BwZXogdm90cmUgcHJhdGlxdWU8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgzIHByZXNlbnRhdGlvblwiPk9wdGltaXNleiBsYSBnZXN0aW9uIGRlIHZvdHJlIGNhYmluZXQgbcOpZGljYWwgYXZlYyB1biBzeXN0w6htZSBkZSByw6lzZXJ2YXRpb24gZW4gbGlnbmUgZmFjaWxlIMOgIHV0aWxpc2VyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGVhZGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IDxzcGFuPiA8TWRDaGVjayBjb2xvcj0nI0YyN0I2OCcgIC8+IDwvc3Bhbj4gQW3DqWxpb3JleiB2b3RyZSByw6lmw6lyZW5jZW1lbnQgZW4gbGlnbmUuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IDxzcGFuPiA8TWRDaGVjayBjb2xvcj0nI0YyN0I2OCcgLz4gPC9zcGFuPiBGYWNpbGl0ZXogbCdvcmdhbmlzYXRpb24gZGUgdm90cmUgYWN0aXZpdMOpLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPiA8c3Bhbj4gPE1kQ2hlY2sgY29sb3I9JyNGMjdCNjgnIC8+IDwvc3Bhbj5Db25zb2xpZGV6IGxhIHJlbGF0aW9uIGRlIGNvbmZpYW5jZSBhdmVjIHZvcyBwYXRpZW50cy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD1cIjVcIiBjbGFzc05hbWU9XCJyaWdodC1jb250ZW50XCIgaWQ9XCJpbnNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+IFZvdXMgw6p0ZXMgcHJhdGljaWVuID8gIFVuIGRlIG5vcyBleHBlcnRzIHZvdXMgcmVjb250YWN0ZSA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVkZWNpbkZvcm0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZS9ncm91cC1tZWRlY2luLnBuZ1wiICBjbGFzc05hbWU9J2ltYWdlLWhlYWRlcicgYWx0PVwiRG9jdG9yIHRha2luZyBjYXJlIG9mIGZhbWlseVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4gIFxyXG5mdW5jdGlvbiBNb3JlSW5mb3MoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2ID5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4gIFxyXG5mdW5jdGlvbiBBdmFudGFnZSgpIHtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2ID5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGZhcXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUG91cnF1b2kgbGUgbG9naWNpZWwgZG9jdG9saXZlIFBybyBlc3QtaWwgYWRhcHTDqSDDoCBtb24gb3JnYW5pc2F0aW9uID9cIixcclxuICAgIGRlc2NyaXB0aW9uOiA8cD5Ob3MgMTQwIDAwMCBwcm9mZXNzaW9ubmVscyBkZSBzYW50w6kgcGFydGVuYWlyZXMgc29udCBpc3N1cyBkZTxzdHJvbmc+IDg4IHNww6ljaWFsaXTDqXMgZGlmZsOpcmVudGVzPC9zdHJvbmc+IGV0IGRlIDxzdHJvbmc+dG91cyB0eXBlcyBk4oCZb3JnYW5pc2F0aW9uczwvc3Ryb25nPiA6IGlscyB0cmF2YWlsbGVudCBlbiBjYWJpbmV0IHNldWwgb3UgZW4gZ3JvdXBlLCBkYW5zIGRlcyDDqXRhYmxpc3NlbWVudHMgZGUgc2FudMOpLCBhdmVjIHVuIHByb2dpY2llbCBvdSBub24gZXRjLjwvcD5cclxuICB9XHJcbl1cclxuZnVuY3Rpb24gRkFRKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgZmFxcy5tYXAoKGZhcSwgaW5kZXgpPT4ge1xyXG4gICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uVHlwZSBrZXk9e2luZGV4fSBmYXE9e2ZhcX0gLz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBY2NvcmRpb25UeXBlKHByb3BzKSB7XHJcbiAgcmV0dXJuKFxyXG4gICAgICAgIDxBY2NvcmRpb24+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgICAgICAgICBleHBhbmRJY29uPXs8TWRFeHBhbmRNb3JlIC8+fVxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYS1jb250ZW50XCJcclxuICAgICAgICAgICAgaWQ9XCJwYW5lbDFhLWhlYWRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID57cHJvcHMuZmFxLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICB7LyogPFR5cG9ncmFwaHk+ICovfVxyXG4gICAgICAgICAgICAgIHtwcm9wcy5mYXEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIHsvKiA8L1R5cG9ncmFwaHk+ICovfVxyXG4gICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gIClcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BY2NvcmRpb25EZXRhaWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUxhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1JhZGlvR3JvdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9iaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==