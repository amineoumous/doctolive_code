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

/***/ "./assets/jss/PatientHomeStyle.js":
/*!****************************************!*\
  !*** ./assets/jss/PatientHomeStyle.js ***!
  \****************************************/
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
    backgroundSize: "50% auto",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "100% auto",
      padding: "40px 0 320px 0"
    },
    [theme.breakpoints.down("xs")]: {
      backgroundSize: "100% auto",
      padding: "40px 0 160px 0"
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
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
/* harmony import */ var _assets_jss_PatientHomeStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/jss/PatientHomeStyle.js */ "./assets/jss/PatientHomeStyle.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ "react-icons/bi");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Search_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/Search/Search */ "./components/Search/Search.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _contentFR__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../contentFR */ "./contentFR.js");
/* harmony import */ var _contentEN__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../contentEN */ "./contentEN.js");
/* harmony import */ var _contentAR__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../contentAR */ "./contentAR.js");

var _jsxFileName = "C:\\Users\\CARRE\\Documents\\GitHub\\doctolive_code\\patient-doctolive\\pages\\index.js";











const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_PatientHomeStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function Home() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  const {
    locale
  } = router;
  const content = locale === "ar" ? _contentAR__WEBPACK_IMPORTED_MODULE_11__["default"].home : locale === "en" ? _contentEN__WEBPACK_IMPORTED_MODULE_10__["default"].home : _contentFR__WEBPACK_IMPORTED_MODULE_9__["default"].home;
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
        children: ["  ", content.title, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
      content: content,
      locale: locale,
      screenWidth: screenWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AboutUs, {
      content: content.about,
      screenWidth: screenWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SkipWaiting, {
      content: content.skip,
      screenWidth: screenWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Services, {
      content: content.services,
      screenWidth: screenWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Steps, {
      content: content.steps,
      screenWidth: screenWidth
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
async function getStaticProps(context) {
  return {
    props: {} // will be passed to the page component as props

  };
}

function DownloadArea({
  content
}) {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "dowload_area padding_top",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.downloader,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
          className: "downloader-wrapper",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            md: "6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: [" ", content.heading, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [" ", content.subHeading, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "appstore mt-3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "https://play.google.com/store/apps/details?id=com.doctolive",
                style: {
                  width: "100%",
                  textDecoration: "none",
                  color: "#000"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "appstore-container",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "appstore-content",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: '/image/playstore.png',
                      height: "30"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 41
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "d-flex flex-row align-items-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 45
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "ml-2",
                        children: content.play
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 37
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__["BiChevronRight"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 37
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
            md: "6",
            className: "downloader-image p-0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
              className: "justify-content-center m-0",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/image/phoneapp.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, this);
}

function Header({
  content,
  locale
}) {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: classes.header,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.bakgroudContainer,
      style: locale === "ar" ? {
        backgroundImage: `url(/image/BgHome.svg)`,
        backgroundPosition: "bottom left",
        textAlign: "right"
      } : {
        backgroundImage: `url(/image/BgHome.svg)`,
        backgroundPosition: "bottom right"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-fluid",
        id: "recherche-medecin",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mb-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: classes.h1,
            children: [" ", content.heading1, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: classes.h2,
            children: [" ", content.heading2, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Search_Search__WEBPACK_IMPORTED_MODULE_7__["default"], {
          content: content.search,
          locale: locale
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 15
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 129,
    columnNumber: 7
  }, this);
}

function AboutUs({
  content
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "about_us padding_top",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-12 col-lg-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about_us_text",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: content.heading
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: content.body
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-12 col-lg-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "about_us_img",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/image/Group.png",
              alt: "",
              className: "img-fluid"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 9
  }, this);
}

const SkipWaiting = ({
  content
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
  className: "skip-waiting padding_top",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row justify-content-between align-items-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-12 col-lg-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "about_us_text text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            children: [content.heading, '...', content.subHeading]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "bonus",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__["BiCheck"], {
                  color: "#F27B68",
                  size: "30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 40
                }, undefined), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [" ", content.banneritem1, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "bonus",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__["BiCheck"], {
                  color: "#F27B68",
                  size: "30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 40
                }, undefined), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [" ", content.banneritem2, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              className: "bonus",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__["BiCheck"], {
                  color: "#F27B68",
                  size: "30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 40
                }, undefined), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: [" ", content.banneritem3, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "btn_2 btn btn-primary",
            href: "#recherche-medecin",
            children: content.button
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 186,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 185,
  columnNumber: 5
}, undefined);

function Steps({
  content
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: "section-home-how-works padding_top",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "heading text-center",
      children: [" ", content.heading, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 13
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
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__["BiSearch"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 94
                  }, this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 63
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 230,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "hw-box__title",
                children: [" ", content.banneritem1, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 231,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "hw-box__text",
                children: [" ", content.banneritem12, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "columns col-sm-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "hw-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hw-box__icon",
                children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "icon-svg va-middle-inline",
                  children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__["BiCalendar"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 109
                  }, this), " "]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 64
                }, this), " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "hw-box__title",
                children: [" ", content.banneritem2, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "hw-box__text",
                children: content.banneritem22
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "columns col-sm-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "hw-box",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hw-box__icon",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "icon-fat-check",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__["BiCheck"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 96
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 63
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "hw-box__title",
                children: [" ", content.banneritem3, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "hw-box__text",
                children: [" ", content.banneritem32, " "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 223,
    columnNumber: 9
  }, this);
}

const Services = ({
  content
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
  className: "feature_part",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row justify-content-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-xl-8",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "section_tittle text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: 'Doctolive:'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: [" ", content.heading, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row justify-content-between align-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-lg-3 col-sm-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "single_feature",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "single_feature_part",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "image/OnlineConsulting.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 272,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: [" ", content.item1body, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-lg-3 col-sm-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "single_feature",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "single_feature_part",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "image/security-doc.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: content.item2body
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-lg-3 col-sm-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "single_feature",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "single_feature_part",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "image/adv-info.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: content.item3body
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 300,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 19
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-lg-3 col-sm-12",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "single_feature",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "single_feature_part",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "image/Soins.png",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 25
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: content.item4body
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 311,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row justify-content-between align-items-center doctolive-cest",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-lg-3 col-sm-12 ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "start",
          children: "Doctolive c\u2019est..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 320,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-lg-3 col-sm-12 text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: "10 Milliers"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "start2",
          children: "patients"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 18
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-lg-3 col-sm-12 text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: " 23 000 "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "start2",
          children: "personnels de sant\xE9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 18
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-lg-3 col-sm-12 text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          children: " 50% "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "start2",
          children: "consultations"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 18
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row justify-content-between align-items-center my-conf-css",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-lg-8 col-sm-12 ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Votre sant\xE9. Vos donn\xE9es."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "La confidentialit\xE9 de vos informations personnelles est une pr\xE9iorit\xE9 absolue pour Doctolive et guide notre action au quotidien."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "engagement",
          children: " D\xE9couvrir nos engagements"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-lg-4 col-sm-12 text-center ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/image/padlock-inject.png",
          alt: "",
          className: "img-fluid"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row justify-content-between align-items-center my-conf-css",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-lg-8 col-sm-12 ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "D\xE9couvrez l\u2019application mobile Doctolive"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Pour acc\xE9der \xE0 vos praticiens \xE0 tout moment, o\xF9 que vous soyez."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/image/play-s.png",
            alt: "",
            className: "img-fluid"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 353,
            columnNumber: 20
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/image/app-s.png",
            alt: "",
            className: "img-fluid"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 354,
            columnNumber: 20
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-lg-4 col-sm-12 text-center ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/image/character--inject-62.png",
          alt: "",
          className: "img-fluid"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 258,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 257,
  columnNumber: 5
}, undefined);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9FbmRQb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanNzL1BhdGllbnRIb21lU3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzcy92YXJpYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnRBUi5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50RU4uanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudEZSLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9ic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL21kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidW5mZXRjaFwiIl0sIm5hbWVzIjpbIkxvY2FsQ29uZmlnIiwiQkFDS0VORF9VUkwiLCJMT0NBTF9VUkwiLCJhcGlLZXkiLCJwcm9kQ29uZmlnIiwicHJvZmlsZVBhZ2VTdHlsZSIsInRoZW1lIiwiY29udGFpbmVyIiwiaDEiLCJtYXJnaW4iLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJoMiIsInNlY3Rpb24iLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblRvcCIsImNhbGxUb0FjdGlvbiIsInBvc2l0aW9uIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwidGV4dERlY29yYXRpb24iLCJjYWxsdG9BY3Rpb25Db250ZW50IiwibWluSGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY2FsbHRvQWN0aW9uQ2FyZCIsImZsZXhXcmFwIiwiY2FsbHRvQWN0aW9uQ29udGVudFdyYXAiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwicGFkZGluZyIsImJhY2tncm91bmRTaXplIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJvdXRsaW5lIiwiYm94U2hhZG93IiwiYXBwZWFyYW5jZSIsInRleHRUcmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwiY3Vyc29yIiwiYm9yZGVyUmFkaXVzIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY2FsbHRvQWN0aW9uSW1hZ2UiLCJ3aWR0aCIsImJvdHRvbSIsImxlZnQiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwib3ZlcmZsb3ciLCJ2ZXJ0aWNhbEFsaWduIiwic2VjdGlvblRpdGxsZSIsImhlYWRlciIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kWm9uZSIsInRvcCIsInJpZ2h0IiwiYmFrZ3JvdWRDb250YWluZXIiLCJicmVha3BvaW50cyIsImRvd24iLCJkb3dubG9hZGVyIiwibWF4SGVpZ2h0IiwiaGV4VG9SZ2IiLCJpbnB1dCIsInJlcGxhY2UiLCJoZXhSZWdleCIsInRlc3QiLCJsZW5ndGgiLCJFcnJvciIsImZpcnN0Iiwic2Vjb25kIiwibGFzdCIsInRvVXBwZXJDYXNlIiwicGFyc2VJbnQiLCJkcmF3ZXJXaWR0aCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5MZWZ0IiwiZGVmYXVsdEZvbnQiLCJmb250RmFtaWx5IiwicHJpbWFyeUNvbG9yIiwid2FybmluZ0NvbG9yIiwiZGFuZ2VyQ29sb3IiLCJzdWNjZXNzQ29sb3IiLCJpbmZvQ29sb3IiLCJyb3NlQ29sb3IiLCJncmF5Q29sb3IiLCJibGFja0NvbG9yIiwid2hpdGVDb2xvciIsInByaW1hcnlCb3hTaGFkb3ciLCJpbmZvQm94U2hhZG93Iiwic3VjY2Vzc0JveFNoYWRvdyIsIndhcm5pbmdCb3hTaGFkb3ciLCJkYW5nZXJCb3hTaGFkb3ciLCJyb3NlQm94U2hhZG93Iiwid2FybmluZ0NhcmRIZWFkZXIiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJjYXJkQWN0aW9ucyIsImJvcmRlclRvcCIsImNhcmRIZWFkZXIiLCJjYXJkIiwiZGVmYXVsdEJveFNoYWRvdyIsInRpdGxlIiwiY2FyZFRpdGxlIiwiY2FyZFN1YnRpdGxlIiwiY2FyZExpbmsiLCJzdHlsZSIsImVuZEFkb3JubWVudCIsInNlYXJjaENvbnRhaW5lciIsInNlYXJjaENvbnRlbnQiLCJ6SW5kZXgiLCJzZWFyY2hCYXIiLCJzZWFyY2hCYXJRdWVyeSIsInNlYXJjaElucHV0V3JhcHBlciIsInBvaW50ZXJFdmVudHMiLCJmaWxsIiwic2VhcmNoYmFyUGxhY2UiLCJzZWFyY2hCdXR0b24iLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uU2VsYXkiLCJzZWFyY2hTdWJtaXRCdXR0b24iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiU2VhcmNoSW5wdXQiLCJjb250ZW50IiwibG9jYWxlIiwiY2xhc3NlcyIsInJvdXRlciIsInVzZVJvdXRlciIsIm1lZGVjaW4iLCJzZXRNZWRlY2luIiwidXNlU3RhdGUiLCJ2aWxsZSIsInNldFZpbGxlIiwibG9hZGluZ01lZGVjaW4iLCJzZXRMb2FkaW5nTWVkZWNpbiIsImlzU2VhcmNoZWQiLCJzZXRJc1NlcmFjaGVkIiwiTG9hZGluZ0NpdGllcyIsInNldExvYWRpbmdDaXRpZXMiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInNlYXJjaEZldGNoZWQiLCJzZXRTZWFyY2hGZXRjaGVkIiwiY2l0aWVzIiwic2V0Q2l0aWVzIiwidXNlRWZmZWN0IiwicmVzIiwiZmV0Y2giLCJDb25maWciLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJzcGVjaWFsaXR5IiwibWVkZWNpbnMiLCJlcnJvciIsInN1Ym1pdGluZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIk1lZGVjaW5fcmVjaGVyY2hlciIsIm5hbWUiLCJub20iLCJ2aWxsZV9yZWNoZXJjaGVyIiwidHJpbSIsInB1c2giLCJwYXRobmFtZSIsInNlbGVjdFBvc2l0aW9uIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2VhcmNoU3BlY2lhbGl0ZSIsIm5ld0lucHV0VmFsdWUiLCJoYW5kbGVTZWFyY2hTcGVjaWFsaXRlYSIsIm5vT3B0aW9uIiwibm9PcHRpb24yIiwib3B0aW9uIiwibG9hZGluZyIsInByZW5vbSIsImVtYWlsIiwicGhvbmUiLCJpZCIsImltYWdlIiwicGFyYW1zIiwicmVjaGVyY2hlbGFiZWwiLCJjaXR5TG9hZGluZyIsImNpdHlsYWJlbCIsInByb3BUeXBlcyIsImNsYXNzTmFtZSIsIlByb3BUeXBlcyIsInN0cmluZyIsInBsYWluIiwiYm9vbCIsInByb2ZpbGUiLCJjaGFydCIsImNoaWxkcmVuIiwibm9kZSIsImhlYWRpbmciLCJub21MYWJlbCIsInBsYWNlaG9sZGVyMSIsInBsYWNlaG9sZGVyMiIsInByZW5vbUxhYmVsIiwiZW1haWxMYWJlbCIsInBob25lTGFiZWwiLCJjb25maXJtX3Bhc3N3b3JkIiwibmV3X3Bhc3N3b3JkIiwib2xkX3Bhc3N3b3JkIiwiaG9tZSIsImhlYWRpbmcxIiwiaGVhZGluZzIiLCJzZWFyY2giLCJhYm91dCIsImJvZHkiLCJidXR0b24iLCJiYW5uZXJpdGVtMSIsImJhbm5lcml0ZW0yIiwiYmFubmVyaXRlbTMiLCJza2lwIiwic3ViSGVhZGluZyIsInN0ZXBzIiwiYmFubmVyaXRlbTEyIiwiYmFubmVyaXRlbTIyIiwiYmFubmVyaXRlbTMyIiwiZG93bG9hZCIsImFwcCIsInBsYXkiLCJzZXJ2aWNlcyIsIml0ZW0xaGVhZGluZyIsIml0ZW0xYm9keSIsIml0ZW0yaGVhZGluZyIsIml0ZW0yYm9keSIsIml0ZW0zaGVhZGluZyIsIml0ZW0zYm9keSIsIml0ZW00aGVhZGluZyIsIml0ZW00Ym9keSIsIm5hdmJhciIsImNvbnRhY3QiLCJjb25lY3QiLCJyZHYiLCJwcm9uYXZiYXIiLCJkb2N1bWVudCIsImRyb3BEb3duMSIsImRyb3BEb3duMiIsImZvb3RlciIsInBhcnRuZXIiLCJzaWduaW4iLCJmYXEiLCJhZHJlc3MiLCJwb2xpdGlxdWUiLCJjb25kaXRpb24iLCJjb25kaXRpb24yIiwicmVnbGVfZGVfciIsIm1lbnRpb25zX2xlZyIsIkNvb2tpZXMiLCJwcm90ZWN0X2Rvbm5lc19wZXJzbyIsImdlc3Rpb25fZGVfY29va2llcyIsIm5ldyIsImFscmVhZHlIYXZlIiwibmV3SW4iLCJzaWdudXAiLCJhdXRoIiwicGFzc0xhYmVsIiwib2xkcGFzc0xhYmVsIiwiY29uZmlybXBhc3NMYWJlbCIsImxhYmVsTm9tIiwibGFiZWxQcmVub20iLCJwaG9uZUVycm9yIiwibGFiZWxFbWFpbEMiLCJsYWJlbEVtYWlsQ1AiLCJlcnJvclNpZ251cCIsInN1Y2Nlc3NTaWdudXAiLCJyZXBvcnQiLCJsYWJlbEVuZCIsImRvY3VtZW50cyIsImF1Y3VuIiwiZG9udGhhdmUiLCJzaGFyZWRCeSIsInNoYXJlZFdpdGgiLCJhcHBvaW50bWVudHMiLCJub3RBdXRoIiwiYWNjZXNzIiwibm9BcHAiLCJteWFwcCIsIm15SGlzdG9yeSIsImhpc3RvcnkiLCJuZXh0QXBwIiwidGFrZWFwcCIsImNhcmRBcHBzIiwibGluayIsImNhcmRBcHAiLCJhY2Nlc3NJbmZvcyIsIm5vdFNwZWNpZmllZCIsInNlY3JldGFyaWF0IiwiY2xpY2siLCJyZWpvaW5kcmUiLCJkZXBsYWNlciIsImFubnVsZXIiLCJyZXRvdXIiLCJjb25maXJtQ2FuY2VsIiwid2FudFlvdSIsIndpdGgiLCJkb2NBdmFpIiwic2VsZWNUdGltZSIsImNvbmZpcm0iLCJzZWVJbmZvc1NoYXJlZCIsInJlc3VsdFJlc2VhcmNoIiwibm9SZXNlYXVsdCIsInRyeVJlc2VhdWx0Iiwid2lkZ2V0IiwiYXZhaWxhYmxlVmlkZW8iLCJzZWVQcm9maWxlIiwic2VlRGlzcG8iLCJkaXNwbyIsInRpbWVTZWxlY3RlZCIsImNhbmNlbCIsInZhbGlkYXRpb24iLCJleHBpcmVkIiwiZ2VuZXJhdGVOZXciLCJhcHBvaW50bWVudCIsInRha2VBcHAiLCJzdGVwMSIsImxhYmVsMSIsImlucDEiLCJsYWJlbDIiLCJpbnAyIiwibGFiZWwzIiwiaW5wMyIsImlucDQiLCJsYWJlbDQiLCJsYWJlbDUiLCJ0ZWxlY29uc3VsdCIsImxhYmVsNiIsIm1vdGlmIiwibm9Nb3RpZnMiLCJsYWJlbDciLCJzdGVwMiIsIm9sZCIsInN0ZXAzIiwiZ2VuZXJhdGUiLCJyZXZpcmlmeSIsInN0ZXA0IiwicmVtaW5kIiwic3RlcDUiLCJnZXJlciIsInByb2ZpbFBhZ2UiLCJhY2Nlc3NJbmZvIiwiZ2VuZXJhbCIsInNwZWNpYWxpdGUiLCJwYXJjb3VyIiwiZGVzY3JpcHRpb25QQXJjIiwiZm9ybWF0aW9uIiwiYXdhcmQiLCJleHBlcmllbmNlIiwic2VlTWFwIiwidGFyaWYiLCJkZXRhaWxzIiwiaG9ub3JlIiwic2VydmljZSIsInByaXgiLCJob3JhaXJlIiwiZGV0YWlsc0hldXJlcyIsImF2YWlsYWJsZXZpZMOpbyIsInByZWZldGNoZWQiLCJlcnIiLCJjdXJMb2NhbGUiLCJvcHRpb25zIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInN1Y2Nlc3MiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInJlc29sdmVkQXMiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJyb290TWFyZ2luIiwic2V0UmVmIiwiZWwiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzVmlzaWJsZSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJjbiIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiX2lkeCIsInN0YXRlIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInJvdXRlUHJvcHMiLCJhZGRMb2NhbGUiLCJkZWxCYXNlUGF0aCIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsIm1ldGhvZCIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImlzU3NnIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsInN0eWxlcyIsIkhvbWUiLCJjb250ZW50QVIiLCJjb250ZW50RU4iLCJjb250ZW50RlIiLCJzY3JlZW5XaWR0aCIsInNldFNjcmVlbldpZHRoIiwidXBkYXRlU2l6ZSIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsIkRvd25sb2FkQXJlYSIsIkhlYWRlciIsImJhY2tncm91bmRJbWFnZSIsIkFib3V0VXMiLCJTa2lwV2FpdGluZyIsIlN0ZXBzIiwiU2VydmljZXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7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QUFDLGlDQUFUO0FBQTJDLGFBQUcsRUFBQyxFQUEvQztBQUFrRCxtQkFBUyxFQUFDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEM7Ozs7Ozs7Ozs7O0FDL1BBLHdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJjb25zdCBMb2NhbENvbmZpZyA9IHtcclxuICAgIEJBQ0tFTkRfVVJMIDogXCJodHRwOi8vbG9jYWxob3N0OjQ0MDBcIixcclxuICAgIExPQ0FMX1VSTCA6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL1wiLFxyXG4gICAgYXBpS2V5OiBcIkFJemFTeUQ2dGs4ZEZGNEdEbkIwaUFCVjk1WnNfQ0NPWjkySzlzd1wiXHJcbn1cclxuY29uc3QgcHJvZENvbmZpZyA9IHtcclxuICAgIEJBQ0tFTkRfVVJMIDogXCJodHRwczovL2FwaS5kb2N0b2xpdmUubWFcIixcclxuICAgIGFwaUtleTogXCJBSXphU3lENnRrOGRGRjRHRG5CMGlBQlY5NVpzX0NDT1o5Mks5c3dcIlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHByb2RDb25maWciLCJcclxuaW1wb3J0IHsgXHJcbiAgICBjb250YWluZXIsXHJcblxyXG59IGZyb20gXCIuL3ZhcmlhYmxlcy5qc1wiO1xyXG4gICAgXHJcbiAgY29uc3QgcHJvZmlsZVBhZ2VTdHlsZSA9IHRoZW1lID0+ICh7XHJcbiAgICBjb250YWluZXIsXHJcbiAgICBoMToge1xyXG4gICAgICAgIG1hcmdpbjpcIiAwIDAgMTZweFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiAzMixcclxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjQwcHhcIixcclxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgIFwiLXdlYmtpdC10ZXh0LWZpbGwtY29sb3JcIjogXCIjZmZmXCIsXHJcbiAgICB9LFxyXG4gICAgaDI6IHtcclxuICAgICAgICBtYXJnaW46XCIgMCAwIDhweFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICBjb2xvcjogXCIjNzU3NTc1XCIsXHJcbiAgICAgICAgbGluZUhlaWdodDogXCI0MHB4XCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBcIi13ZWJraXQtdGV4dC1maWxsLWNvbG9yXCI6IFwiI2ZmZlwiLFxyXG4gICAgfSxcclxuICAgIHNlY3Rpb246IHtcclxuICAgICAgICBwYWRkaW5nVG9wOiA2NCxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAyNCxcclxuICAgICAgICBcIiYgLnNlY3Rpb25cIjoge1xyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDI0LFxyXG4gICAgICAgICAgICBtYXJnaW5Ub3A6IDY0XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBjYWxsVG9BY3Rpb24gOiB7XHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgIFwiLXdlYmtpdC1ib3gtb3JpZW50XCI6IFwidmVydGljYWxcIixcclxuICAgICAgICBcIi13ZWJraXQtYm94LWRpcmVjdGlvblwiOiBcIm5vcm1hbFwiLFxyXG4gICAgICAgIG1hcmdpblRvcDogNjQsXHJcbiAgICAgICAgZmxleDogXCIwIDAgYXV0b1wiLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICBjb2xvcjogXCIjNDM1ZjcxXCIsXHJcbiAgICAgICAgcGFkZGluZ1RvcDogMTYsXHJcbiAgICB9LFxyXG4gICAgY2FsbHRvQWN0aW9uQ29udGVudDoge1xyXG4gICAgICAgIG1pbkhlaWdodDogXCI1MCVcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2YyZmFmZFwiLFxyXG4gICAgICAgIGZsZXg6IFwiMSAwIGF1dG9cIixcclxuXHJcbiAgICB9LFxyXG4gICAgY2FsbHRvQWN0aW9uQ2FyZDoge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcclxuICAgICAgIFxyXG4gICAgfSxcclxuICAgIGNhbGx0b0FjdGlvbkNvbnRlbnRXcmFwOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsICBcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcInJlcGVhdCBuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiYm90dG9tXCIsXHJcbiAgICAgICAgcGFkZGluZzogMTYsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY29udGFpblwiLFxyXG4gICAgICAgIFwiJiAuZml4ZWQtd2lkdGhcIiA6IHtcclxuICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IDU0NCxcclxuICAgICAgICAgICAgXCImIGgyXCIgOntcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogNDgsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjI0cHhcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyMjQzNThcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCImIC50ZXh0LWJvZHlcIiA6e1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxNixcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjRweFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzIyNDM1OFwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIiYgLmJ1dHRvblwiIDp7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgXCItd2Via2l0LWFwcGVhcmFuY2VcIjogXCJub25lICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgICAgICAgIFwiLW1vei1hcHBlYXJhbmNlXCI6IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICBcIi13ZWJraXQtdHJhbnNpdGlvblwiOiBcIm9wYWNpdHkgNTAwbXMsIGNvbG9yIDEwMG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zXCIsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBcIm9wYWNpdHkgNTAwbXMsIGNvbG9yIDEwMG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzFhYjliOVwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA1MixcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAzMixcclxuICAgICAgICAgICAgICAgIFwiJiBzcGFuXCIgOiB7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIGNhbGx0b0FjdGlvbkltYWdlOiB7XHJcbiAgICAgICAgd2lkdGg6IDQzMSxcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDQsXHJcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgXCImIGltZ1wiIDoge1xyXG4gICAgICAgICAgICB3aWR0aDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiYm90dG9tXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VjdGlvblRpdGxsZToge1xyXG4gICAgICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgICBsaW5lSGVpZ2h0OiBcIjMycHhcIixcclxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgIGNvbG9yOiBcIiMyMjQzNThcIixcclxuICAgICAgICBtYXJnaW46IFwiMCAxNnB4IDMycHggMTZweFwiXHJcblxyXG4gICAgfSxcclxuICAgIGhlYWRlciA6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMWFiOWI5IDE5JSwgIzFhYjliOSAxMDAlKVwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzFhYjliOSAxOSUsICMxYWI5YjkgMTAwJSlcIixcclxuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICAgICBcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kWm9uZSA6IHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgIH0sXHJcbiAgICBiYWtncm91ZENvbnRhaW5lciA6IHtcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICBtaW5IZWlnaHQ6IFwiNDUwcHhcIixcclxuICAgICAgICBwYWRkaW5nOiBcIjgwcHggMFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcIjUwJSBhdXRvXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCIxMDAlIGF1dG9cIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCI0MHB4IDAgMzIwcHggMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiMTAwJSBhdXRvXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiNDBweCAwIDE2MHB4IDBcIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZG93bmxvYWRlciA6IHtcclxuICAgICAgICBcIiYgLmRvd25sb2FkZXItd3JhcHBlclwiIDoge1xyXG4gICAgICAgICAgICBcIiYgaDJcIiA6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjRweFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzIyNDM1OFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIiYgaDNcIiA6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMjRweFwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzc3OTFhMlwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAzMixcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogOFxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgXCImIC5hcHBzdG9yZVwiIDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgXCImIC5hcHBzdG9yZS1jb250YWluZXJcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMwMDBcIixcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBcIiYgLmFwcHN0b3JlLWNvbnRlbnRcIiA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiA2MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3RhcnRcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiJiAuZG93bmxvYWRlci1pbWFnZVwiIDoge1xyXG4gICAgICAgICAgICAgICAgXCImIGltZ1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgfSlcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBwcm9maWxlUGFnZVN0eWxlO1xyXG4gICIsIlxyXG5jb25zdCBoZXhUb1JnYiA9IGlucHV0ID0+IHtcclxuICBpbnB1dCA9IGlucHV0ICsgXCJcIjtcclxuICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gIGxldCBoZXhSZWdleCA9IC9bMC05QS1GYS1mXS9nO1xyXG4gIGlmICghaGV4UmVnZXgudGVzdChpbnB1dCkgfHwgKGlucHV0Lmxlbmd0aCAhPT0gMyAmJiBpbnB1dC5sZW5ndGggIT09IDYpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnB1dCBpcyBub3QgYSB2YWxpZCBoZXggY29sb3IuXCIpO1xyXG4gIH1cclxuICBpZiAoaW5wdXQubGVuZ3RoID09PSAzKSB7XHJcbiAgICBsZXQgZmlyc3QgPSBpbnB1dFswXTtcclxuICAgIGxldCBzZWNvbmQgPSBpbnB1dFsxXTtcclxuICAgIGxldCBsYXN0ID0gaW5wdXRbMl07XHJcbiAgICBpbnB1dCA9IGZpcnN0ICsgZmlyc3QgKyBzZWNvbmQgKyBzZWNvbmQgKyBsYXN0ICsgbGFzdDtcclxuICB9XHJcbiAgaW5wdXQgPSBpbnB1dC50b1VwcGVyQ2FzZSgpO1xyXG4gIGxldCBmaXJzdCA9IGlucHV0WzBdICsgaW5wdXRbMV07XHJcbiAgbGV0IHNlY29uZCA9IGlucHV0WzJdICsgaW5wdXRbM107XHJcbiAgbGV0IGxhc3QgPSBpbnB1dFs0XSArIGlucHV0WzVdO1xyXG4gIHJldHVybiAoXHJcbiAgICBwYXJzZUludChmaXJzdCwgMTYpICtcclxuICAgIFwiLCBcIiArXHJcbiAgICBwYXJzZUludChzZWNvbmQsIDE2KSArXHJcbiAgICBcIiwgXCIgK1xyXG4gICAgcGFyc2VJbnQobGFzdCwgMTYpXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjYwO1xyXG5cclxuY29uc3QgdHJhbnNpdGlvbiA9IHtcclxuICB0cmFuc2l0aW9uOiBcImFsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpXCJcclxufTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IHtcclxuICBwYWRkaW5nUmlnaHQ6IFwiMTVweFwiLFxyXG4gIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcclxuICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXHJcbiAgbWFyZ2luTGVmdDogXCJhdXRvXCJcclxufTtcclxuXHJcbmNvbnN0IGRlZmF1bHRGb250ID0ge1xyXG4gIGZvbnRGYW1pbHk6ICdcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxyXG4gIGZvbnRXZWlnaHQ6IFwiMzAwXCIsXHJcbiAgbGluZUhlaWdodDogXCIxLjVlbVwiXHJcbn07XHJcblxyXG5jb25zdCBwcmltYXJ5Q29sb3IgPSBbXCIjMWFiOWI5XCIsIFwiIzFhYjliOVwiLCBcIiMxYWI5YjlcIiwgXCIjMWFiOWI5XCJdO1xyXG5jb25zdCB3YXJuaW5nQ29sb3IgPSBbXCIjZmY5ODAwXCIsIFwiI2ZmYTcyNlwiLCBcIiNmYjhjMDBcIiwgXCIjZmZhMjFhXCJdO1xyXG5jb25zdCBkYW5nZXJDb2xvciA9IFtcIiNmMTAwMGZcIiwgXCIjZmYxZDFmXCIsIFwiI2ZmM2EyZVwiLCBcIiNmZjUyM2RcIl07XHJcbmNvbnN0IHN1Y2Nlc3NDb2xvciA9IFtcIiM0Y2FmNTBcIiwgXCIjNjJjNDYzXCIsIFwiIzhkY2E4OVwiLCBcIiNjN2U1YzNcIl07XHJcbmNvbnN0IGluZm9Db2xvciA9IFtcIiMwMGFjYzFcIiwgXCIjMjZjNmRhXCIsIFwiIzAwYWNjMVwiLCBcIiMwMGQzZWVcIl07XHJcbmNvbnN0IHJvc2VDb2xvciA9IFtcIiNlOTFlNjNcIiwgXCIjZWM0MDdhXCIsIFwiI2Q4MWI2MFwiLCBcIiNlYjM1NzNcIl07XHJcbmNvbnN0IGdyYXlDb2xvciA9IFtcclxuICBcIiM5OTlcIixcclxuICBcIiM3NzdcIixcclxuICBcIiMzQzQ4NThcIixcclxuICBcIiNBQUFBQUFcIixcclxuICBcIiNEMkQyRDJcIixcclxuICBcIiNERERcIixcclxuICBcIiNiNGI0YjRcIixcclxuICBcIiM1NTU1NTVcIixcclxuICBcIiMzMzNcIixcclxuICBcIiNhOWFmYmJcIixcclxuICBcIiNlZWVcIixcclxuICBcIiNlN2U3ZTdcIlxyXG5dO1xyXG5jb25zdCBibGFja0NvbG9yID0gXCIjMDAwXCI7XHJcbmNvbnN0IHdoaXRlQ29sb3IgPSBcIiNGRkZcIjtcclxuXHJcbmNvbnN0IGJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgMTBweCAzMHB4IC0xMnB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuNDIpLCAwIDRweCAyNXB4IDBweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMilcIlxyXG59O1xyXG5cclxuY29uc3QgcHJpbWFyeUJveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHByaW1hcnlDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCJcclxufTtcclxuY29uc3QgaW5mb0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGluZm9Db2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCJcclxufTtcclxuY29uc3Qgc3VjY2Vzc0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHN1Y2Nlc3NDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCJcclxufTtcclxuY29uc3Qgd2FybmluZ0JveFNoYWRvdyA9IHtcclxuICBib3hTaGFkb3c6XHJcbiAgICBcIjAgNHB4IDIwcHggMCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKGJsYWNrQ29sb3IpICtcclxuICAgIFwiLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKFwiICtcclxuICAgIGhleFRvUmdiKHdhcm5pbmdDb2xvclswXSkgK1xyXG4gICAgXCIsLjQpXCJcclxufTtcclxuY29uc3QgZGFuZ2VyQm94U2hhZG93ID0ge1xyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCA0cHggMjBweCAwIHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoZGFuZ2VyQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiXHJcbn07XHJcbmNvbnN0IHJvc2VCb3hTaGFkb3cgPSB7XHJcbiAgYm94U2hhZG93OlxyXG4gICAgXCIwIDRweCAyMHB4IDAgcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihyb3NlQ29sb3JbMF0pICtcclxuICAgIFwiLC40KVwiXHJcbn07XHJcblxyXG5jb25zdCB3YXJuaW5nQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgd2FybmluZ0NvbG9yWzFdICsgXCIsIFwiICsgd2FybmluZ0NvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4ud2FybmluZ0JveFNoYWRvd1xyXG59O1xyXG5jb25zdCBzdWNjZXNzQ2FyZEhlYWRlciA9IHtcclxuICBiYWNrZ3JvdW5kOlxyXG4gICAgXCJsaW5lYXItZ3JhZGllbnQoNjBkZWcsIFwiICsgc3VjY2Vzc0NvbG9yWzFdICsgXCIsIFwiICsgc3VjY2Vzc0NvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uc3VjY2Vzc0JveFNoYWRvd1xyXG59O1xyXG5jb25zdCBkYW5nZXJDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBkYW5nZXJDb2xvclsxXSArIFwiLCBcIiArIGRhbmdlckNvbG9yWzJdICsgXCIpXCIsXHJcbiAgLi4uZGFuZ2VyQm94U2hhZG93XHJcbn07XHJcbmNvbnN0IGluZm9DYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBpbmZvQ29sb3JbMV0gKyBcIiwgXCIgKyBpbmZvQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5pbmZvQm94U2hhZG93XHJcbn07XHJcbmNvbnN0IHByaW1hcnlDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyBwcmltYXJ5Q29sb3JbMV0gKyBcIiwgXCIgKyBwcmltYXJ5Q29sb3JbMl0gKyBcIilcIixcclxuICAuLi5wcmltYXJ5Qm94U2hhZG93XHJcbn07XHJcbmNvbnN0IHJvc2VDYXJkSGVhZGVyID0ge1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBcImxpbmVhci1ncmFkaWVudCg2MGRlZywgXCIgKyByb3NlQ29sb3JbMV0gKyBcIiwgXCIgKyByb3NlQ29sb3JbMl0gKyBcIilcIixcclxuICAuLi5yb3NlQm94U2hhZG93XHJcbn07XHJcblxyXG5jb25zdCBjYXJkQWN0aW9ucyA9IHtcclxuICBtYXJnaW46IFwiMCAyMHB4IDEwcHhcIixcclxuICBwYWRkaW5nVG9wOiBcIjEwcHhcIixcclxuICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkIFwiICsgZ3JheUNvbG9yWzEwXSxcclxuICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIC4uLmRlZmF1bHRGb250XHJcbn07XHJcblxyXG5jb25zdCBjYXJkSGVhZGVyID0ge1xyXG4gIG1hcmdpbjogXCItMjBweCAxNXB4IDBcIixcclxuICBib3JkZXJSYWRpdXM6IFwiM3B4XCIsXHJcbiAgcGFkZGluZzogXCIxNXB4XCJcclxufTtcclxuXHJcbmNvbnN0IGNhcmQgPSB7XHJcbiAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBtYXJnaW46IFwiMjVweCAwXCIsXHJcbiAgYm94U2hhZG93OiBcIjAgMXB4IDRweCAwIHJnYmEoXCIgKyBoZXhUb1JnYihibGFja0NvbG9yKSArIFwiLCAwLjE0KVwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIzcHhcIixcclxuICBjb2xvcjogXCJyZ2JhKFwiICsgaGV4VG9SZ2IoYmxhY2tDb2xvcikgKyBcIiwgMC44NylcIixcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZUNvbG9yXHJcbn07XHJcblxyXG5jb25zdCBkZWZhdWx0Qm94U2hhZG93ID0ge1xyXG4gIGJvcmRlcjogXCIwXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjNweFwiLFxyXG4gIGJveFNoYWRvdzpcclxuICAgIFwiMCAxMHB4IDIwcHggLTEycHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC40MiksIDAgM3B4IDIwcHggMHB4IHJnYmEoXCIgK1xyXG4gICAgaGV4VG9SZ2IoYmxhY2tDb2xvcikgK1xyXG4gICAgXCIsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYShcIiArXHJcbiAgICBoZXhUb1JnYihibGFja0NvbG9yKSArXHJcbiAgICBcIiwgMC4yKVwiLFxyXG4gIHBhZGRpbmc6IFwiMTBweCAwXCIsXHJcbiAgdHJhbnNpdGlvbjogXCJhbGwgMTUwbXMgZWFzZSAwc1wiXHJcbn07XHJcblxyXG5jb25zdCB0aXRsZSA9IHtcclxuICBjb2xvcjogZ3JheUNvbG9yWzJdLFxyXG4gIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICBmb250V2VpZ2h0OiBcIjMwMFwiLFxyXG4gIG1hcmdpblRvcDogXCIzMHB4XCIsXHJcbiAgbWFyZ2luQm90dG9tOiBcIjI1cHhcIixcclxuICBtaW5IZWlnaHQ6IFwiMzJweFwiLFxyXG4gIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmXCIsXHJcbiAgXCImIHNtYWxsXCI6IHtcclxuICAgIGNvbG9yOiBncmF5Q29sb3JbMV0sXHJcbiAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIxXCJcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjYXJkVGl0bGUgPSB7XHJcbiAgLi4udGl0bGUsXHJcbiAgbWFyZ2luVG9wOiBcIjBcIixcclxuICBtYXJnaW5Cb3R0b206IFwiM3B4XCIsXHJcbiAgbWluSGVpZ2h0OiBcImF1dG9cIixcclxuICBcIiYgYVwiOiB7XHJcbiAgICAuLi50aXRsZSxcclxuICAgIG1hcmdpblRvcDogXCIuNjI1cmVtXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMC43NXJlbVwiLFxyXG4gICAgbWluSGVpZ2h0OiBcImF1dG9cIlxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGNhcmRTdWJ0aXRsZSA9IHtcclxuICBtYXJnaW5Ub3A6IFwiLS4zNzVyZW1cIlxyXG59O1xyXG5cclxuY29uc3QgY2FyZExpbmsgPSB7XHJcbiAgXCImICsgJGNhcmRMaW5rXCI6IHtcclxuICAgIG1hcmdpbkxlZnQ6IFwiMS4yNXJlbVwiXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBoZXhUb1JnYixcclxuICAvL3ZhcmlhYmxlc1xyXG4gIGRyYXdlcldpZHRoLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgY29udGFpbmVyLFxyXG4gIGJveFNoYWRvdyxcclxuICBjYXJkLFxyXG4gIGRlZmF1bHRGb250LFxyXG4gIHByaW1hcnlDb2xvcixcclxuICB3YXJuaW5nQ29sb3IsXHJcbiAgZGFuZ2VyQ29sb3IsXHJcbiAgc3VjY2Vzc0NvbG9yLFxyXG4gIGluZm9Db2xvcixcclxuICByb3NlQ29sb3IsXHJcbiAgZ3JheUNvbG9yLFxyXG4gIGJsYWNrQ29sb3IsXHJcbiAgd2hpdGVDb2xvcixcclxuICBwcmltYXJ5Qm94U2hhZG93LFxyXG4gIGluZm9Cb3hTaGFkb3csXHJcbiAgc3VjY2Vzc0JveFNoYWRvdyxcclxuICB3YXJuaW5nQm94U2hhZG93LFxyXG4gIGRhbmdlckJveFNoYWRvdyxcclxuICByb3NlQm94U2hhZG93LFxyXG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxyXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxyXG4gIGRhbmdlckNhcmRIZWFkZXIsXHJcbiAgaW5mb0NhcmRIZWFkZXIsXHJcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXHJcbiAgcm9zZUNhcmRIZWFkZXIsXHJcbiAgY2FyZEFjdGlvbnMsXHJcbiAgY2FyZEhlYWRlcixcclxuICBkZWZhdWx0Qm94U2hhZG93LFxyXG4gIHRpdGxlLFxyXG4gIGNhcmRUaXRsZSxcclxuICBjYXJkU3VidGl0bGUsXHJcbiAgY2FyZExpbmtcclxufTtcclxuIiwiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB7IENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge0JzU2VhcmNofSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxyXG5pbXBvcnQge01kTG9jYXRpb25Pbn0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcclxuaW1wb3J0IHtCaUN1cnJlbnRMb2NhdGlvbn0gZnJvbSBcInJlYWN0LWljb25zL2JpXCJcclxuXHJcbmltcG9ydCBBdXRvY29tcGxldGUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcblxyXG5pbXBvcnQgZmV0Y2ggZnJvbSAndW5mZXRjaCdcclxuXHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi8uLi8uLi9FbmRQb2ludCdcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlID0gdGhlbWU9Pigge1xyXG4gICAgZW5kQWRvcm5tZW50OntcclxuICAgICAgICBkaXNwbGF5Olwibm9uZVwiLFxyXG4gICAgICAgIFwiJiAuTXVpQXV0b2NvbXBsZXRlLWVuZEFkb3JubWVudFwiOiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6XCJub25lXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoQ29udGFpbmVyOiB7XHJcbiAgICAgICAgcGFkZGluZ1RvcDogXCIxMjBweFwiLFxyXG4gICAgfSxcclxuICAgIHNlYXJjaENvbnRlbnQ6e1xyXG4gICAgICAgIHpJbmRleDogNSxcclxuICAgIH0sXHJcbiBcclxuICAgIHNlYXJjaEJhcjp7XHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNmZmZcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6NSxcclxuICAgICAgICBcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlYXJjaEJhclF1ZXJ5OntcclxuICAgICAgICBcIi1tcy1mbGV4XCI6IFwiMCAwIDI0MHB4XCIsXHJcbiAgICBcclxuICAgICBcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgXHJcbiAgICAgICAgd2lkdGg6IFwiNDAzcHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OjEwLFxyXG5cclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICAgICAgICBmbGV4OiBcIjAgMCAxMDAlXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gXHJcbiAgICBzZWFyY2hJbnB1dFdyYXBwZXI6IHtcclxuICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcclxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6NjAsXHJcblxyXG4gICAgICAgICcmIC5zZWFyY2hiYXItaW5wdXQtaWNvbicgOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTgsXHJcbiAgICAgICAgICAgIGxlZnQ6IDE2LFxyXG4gICAgICAgICAgICB3aWR0aDogMjQsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjQsXHJcbiAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBmaWxsOiBcIiM3NzkxYTJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmIC5zZWFyY2hiYXItaW5wdXQtaWNvbi1hcicgOiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIHRvcDogMTgsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAxNixcclxuICAgICAgICAgICAgd2lkdGg6IDI0LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0LFxyXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgZmlsbDogXCIjNzc5MWEyXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2VhcmNoYmFyUGxhY2U6IHtcclxuICAgICAgICBcIi1tcy1mbGV4XCI6XCIgMCAwIDQ5MHB4XCIsXHJcbiAgICAgICAgZmxleDpcIiAwIDAgNDkwcHhcIixcclxuICAgICAgICBtYXJnaW5SaWdodDogXCIxMnB4XCIsXHJcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICAgICAgICB3aWR0aDogXCI0OTBweFwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIildOiB7XHJcbiAgICAgICAgICAgIGZsZXg6IFwiMCAwIDEwMCVcIixcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEyXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZWFyY2hCdXR0b246IHtcclxuICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNDVweFwiLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDEwMCUpIHRyYW5zbGF0ZVgoLTUxcHgpXCIsXHJcbiAgICAgICAgY29sb3I6IFwiIzQzNWY3MVwiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwiLXdlYmtpdC10cmFuc2Zvcm0gNDAwbXNcIixcclxuICAgICAgICB0cmFuc2l0aW9uOlwiIHRyYW5zZm9ybSA0MDBtc1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwidHJhbnNmb3JtIDQwMG1zLCAtd2Via2l0LXRyYW5zZm9ybSA0MDBtc1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb25TZWxheTogXCIxMDBtc1wiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcclxuICAgICAgICBhcHBlYXJhbmNlOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmUgIWltcG9ydGFudFwiLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMCAxNnB4XCIsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgc2VhcmNoU3VibWl0QnV0dG9uOiB7XHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIiA4cHhcIixcclxuICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiA1LFxyXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNSxcclxuICAgICAgICBtYXJnaW5Ub3A6IDUsXHJcbiAgICAgICAgd2lkdGg6IFwiMTYycHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgIFxyXG59KVxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaElucHV0KHtjb250ZW50LCBsb2NhbGV9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IFttZWRlY2luLCBzZXRNZWRlY2luXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbdmlsbGUsIHNldFZpbGxlXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbbG9hZGluZ01lZGVjaW4sIHNldExvYWRpbmdNZWRlY2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNTZWFyY2hlZCwgc2V0SXNTZXJhY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0xvYWRpbmdDaXRpZXMsIHNldExvYWRpbmdDaXRpZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWFyY2hGZXRjaGVkLCBzZXRTZWFyY2hGZXRjaGVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2l0aWVzLCBzZXRDaXRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICBjb25zdCByZXMgPSAgYXdhaXQgZmV0Y2goYCR7Q29uZmlnLkJBQ0tFTkRfVVJMfS9tZWRlY2luL3NlYXJjaC9zcGVjaWFsaXRlLyR7aW5wdXRWYWx1ZX1gLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsIFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgaWYoZGF0YS5zcGVjaWFsaXR5KXtcclxuICAgICAgICAgICAgc2V0U2VhcmNoRmV0Y2hlZChbLi4uZGF0YS5zcGVjaWFsaXR5LCAuLi5kYXRhLm1lZGVjaW5zXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgIFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBcclxuICAgIH1cclxuICB9LCBbaW5wdXRWYWx1ZV0pXHJcblxyXG4gIHVzZUVmZmVjdCggYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzID0gIGF3YWl0IGZldGNoKGAke0NvbmZpZy5CQUNLRU5EX1VSTH0vY2l0eWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRDaXRpZXMoZGF0YS5jaXRpZXMpO1xyXG4gICAgICAgIFxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBzdWJtaXRpbmcgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuICAgIGxldCBNZWRlY2luX3JlY2hlcmNoZXIgPSBtZWRlY2luPyBtZWRlY2luLm5hbWUgPyBtZWRlY2luLm5hbWUgOiBtZWRlY2luLm5vbSA6IG1lZGVjaW47XHJcbiAgICBsZXQgdmlsbGVfcmVjaGVyY2hlciA9IHZpbGxlID8gdmlsbGUubmFtZSA6IHZpbGxlO1xyXG5cclxuICAgIGlmKCFNZWRlY2luX3JlY2hlcmNoZXIpe1xyXG4gICAgICAgIE1lZGVjaW5fcmVjaGVyY2hlciA9IFwiZ2VuZXJhbGlzdGVcIlxyXG4gICAgfWVsc2UgeyAgXHJcbiAgICAgICAgaWYoTWVkZWNpbl9yZWNoZXJjaGVyLnRyaW0oKSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIE1lZGVjaW5fcmVjaGVyY2hlciA9IFwibWVkZWNpbi1nZW5lcmFsaXN0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKCF2aWxsZV9yZWNoZXJjaGVyKXtcclxuICAgICAgICB2aWxsZV9yZWNoZXJjaGVyPVwibWFyb2NcIjtcclxuICAgIH1lbHNlIHtcclxuICAgICAgICBpZih2aWxsZV9yZWNoZXJjaGVyLnRyaW0oKSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIC8vIHNldFZpbGxlKHtuYW1lOiBcIm1hcm9jXCJ9KVxyXG4gICAgICAgICAgICB2aWxsZV9yZWNoZXJjaGVyPVwibWFyb2NcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lOiBgL3JlY2hlcmNoZS8ke01lZGVjaW5fcmVjaGVyY2hlcn0vJHt2aWxsZV9yZWNoZXJjaGVyfWAsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2VsZWN0UG9zaXRpb24gPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKVxyXG4gICAgfSwgXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoU3BlY2lhbGl0ZSA9IChlLCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICBzZXRNZWRlY2luKG5ld0lucHV0VmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaFNwZWNpYWxpdGVhID0gKGUsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgIGlmKG5ld0lucHV0VmFsdWUubGVuZ3RoID4wKSB7XHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcclxuICAgIH1lbHNlIHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hDb250ZW50fT5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICA8Q29sIGxnPVwiMTBcIiBtZD1cIjEwXCIgY2xhc3NOYW1lPVwibm8tcGFkZGluZy1sZWZ0XCIgPlxyXG4gICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoQmFyfSBvblN1Ym1pdD17c3VibWl0aW5nfT5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJhclF1ZXJ5K1wiIHdpdGgtdm9yZGVyLXJpZ2h0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJbnB1dFdyYXBwZXIgK1wiIHNlYXJjaFwifT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnNTZWFyY2ggY2xhc3NOYW1lPXtsb2NhbGUgPT09IFwiYXJcIiA/IFwic2VhcmNoYmFyLWlucHV0LWljb24tYXJcIjpcInNlYXJjaGJhci1pbnB1dC1pY29uXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXtoYW5kbGVTZWFyY2hTcGVjaWFsaXRlYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmdNZWRlY2lufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9PcHRpb25zVGV4dD17aXNTZWFyY2hlZD8gY29udGVudC5ub09wdGlvbiA6IGNvbnRlbnQubm9PcHRpb24yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBCeT17KG9wdGlvbikgPT4gb3B0aW9uLm5hbWU/IFwic3BlY2lhbGl0ZVwiIDogXCJtZWRlY2luXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdWdnZXN0aW9uLW1lZGVjaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtjb250ZW50LmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c2VhcmNoRmV0Y2hlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Zz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLm5vbT8gb3B0aW9uLm5vbSArIFwiIFwiICsgb3B0aW9uLnByZW5vbSArIFwiIFwiICsgb3B0aW9uLmVtYWlsICsgXCIgXCIgKyBvcHRpb24ucGhvbmUgOiBvcHRpb24ubmFtZSA/IG9wdGlvbi5uYW1lIDogXCJcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsob3B0aW9uKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5ub20gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rICBocmVmPXtgL2RvY3Rvci8ke29wdGlvbi5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1mbGV4IHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLmltYWdlID8gPHNwYW4gY2xhc3NOYW1lPVwic2VhcmNoYmFyLXJlc3VsdC1wcm9maWxlLWF2YXRhciBcIj48aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHNyYz17YCR7Q29uZmlnLkJBQ0tFTkRfVVJMfS8ke29wdGlvbi5pbWFnZX1gfSAvPjwvc3Bhbj4gOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBEci4ge29wdGlvbi5ub219IHtvcHRpb24ucHJlbm9tfSA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9uLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3SW5wdXRWYWx1ZSkgPT4gaGFuZGxlU2VhcmNoU3BlY2lhbGl0ZShlLCBuZXdJbnB1dFZhbHVlKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lZGVjaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6XCI2MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBwbGFjZWhvbGRlcj17Y29udGVudC5yZWNoZXJjaGVsYWJlbH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaGJhclBsYWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaElucHV0V3JhcHBlciArXCIgc2VhcmNoXCJ9IHN0eWxlPSB7e292ZXJmbG93OiBcImhpZGRlblwiLH19PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWRMb2NhdGlvbk9uIGNsYXNzTmFtZT17bG9jYWxlID09PSBcImFyXCIgPyBcInNlYXJjaGJhci1pbnB1dC1pY29uLWFyXCI6XCJzZWFyY2hiYXItaW5wdXQtaWNvblwifSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdWdnZXN0aW9uLXZpbGxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2l0aWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e0xvYWRpbmdDaXRpZXN9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtjb250ZW50LmNpdHlMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ubmFtZSA/ICBvcHRpb24ubmFtZSAgOiAgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld0lucHV0VmFsdWUpID0+IHNldFZpbGxlKG5ld0lucHV0VmFsdWUpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmlsbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6XCI2MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBwbGFjZWhvbGRlcj17Y29udGVudC5jaXR5bGFiZWx9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzZWxlY3RQb3NpdGlvbn0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJ1dHRvbn0gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCaUN1cnJlbnRMb2NhdGlvbiBjbGFzc05hbWU9e2xvY2FsZSA9PT0gXCJhclwiID8gXCJzZWFyY2hiYXItaW5wdXQtaWNvbi1hclwiOlwic2VhcmNoYmFyLWlucHV0LWljb25cIn0gIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoU3VibWl0QnV0dG9uICsgXCIgYnRuIGJ0bi1zdWJtaXRcIn0gcm9sZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiA+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcInRleHQtYnRuLWVsZW1lbnRcIn0+e2xvY2FsZSA9PT0gXCJhclwiID8gXCJSZWNoZXJjaGVyIFwiOlwiUmVjaGVyY2hlciBcIn0gIDwvc3Bhbj48c3ZnIHdpZHRoPVwiOFwiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCA4IDEzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbjxwYXRoIGQ9XCJNMS4zMzg1NCAxMi4zMjE2QzAuOTgwOTkgMTIuMzIxNiAwLjY0NDg4NCAxMi4xODgxIDAuMzkyMDQzIDExLjk0NTZDMC4xMzkyMjggMTEuNzAzMSAwIDExLjM4MDYgMCAxMS4wMzc2QzAgMTAuNjk0NyAwLjEzOTIyOCAxMC4zNzIyIDAuMzkyMDQzIDEwLjEyOTdMNC41Mjk3NSA2LjE2MDUxTDAuMzkyMDQzIDIuMTkxMzZDMC4xMzkyMjggMS45NDg4NCAwIDEuNjI2MzggMCAxLjI4MzQxQzAgMC45NDA0NTEgMC4xMzkyMjggMC42MTc5ODYgMC4zOTIwNDMgMC4zNzU0NjdDMC45MTM5NzQgLTAuMTI1MTggMS43NjMxNiAtMC4xMjUxMzEgMi4yODUwNiAwLjM3NTQ2N0w3LjM2OTI0IDUuMjUyNTZDNy42MjIwNSA1LjQ5NTA4IDcuNzYxMjggNS44MTc1NSA3Ljc2MTI4IDYuMTYwNTFDNy43NjEyOCA2LjUwMzQ3IDcuNjIyMDUgNi44MjU5NCA3LjM2OTI0IDcuMDY4NDhMMi4yODUwNCAxMS45NDU2QzIuMDMyMiAxMi4xODgxIDEuNjk2MDYgMTIuMzIxNiAxLjMzODU0IDEyLjMyMTZaTTEuMzM4NTQgMC40OTA2NjRDMS4xMjY4MiAwLjQ5MDY2NCAwLjkxNTA5OSAwLjU2Nzk2IDAuNzUzOTE3IDAuNzIyNjAyQzAuNTk3NzUgMC44NzI0MDkgMC41MTE3NDYgMS4wNzE1NSAwLjUxMTc0NiAxLjI4MzQxQzAuNTExNzQ2IDEuNDk1MjcgMC41OTc3NSAxLjY5NDQyIDAuNzUzOTE3IDEuODQ0MjJMNS4wNzI1MyA1Ljk4Njk0QzUuMTIwNTEgNi4wMzI5NyA1LjE0NzQ4IDYuMDk1NDEgNS4xNDc0OCA2LjE2MDUxQzUuMTQ3NDggNi4yMjU2MSA1LjEyMDUxIDYuMjg4MDUgNS4wNzI1MyA2LjMzNDA4TDAuNzUzOTE3IDEwLjQ3NjhDMC41OTc3NSAxMC42MjY2IDAuNTExNzQ2IDEwLjgyNTggMC41MTE3NDYgMTEuMDM3NkMwLjUxMTc0NiAxMS4yNDk1IDAuNTk3NzUgMTEuNDQ4NiAwLjc1MzkxNyAxMS41OTg0QzAuOTEwMDg0IDExLjc0ODIgMS4xMTc3MSAxMS44MzA3IDEuMzM4NTQgMTEuODMwN0MxLjU1OTM3IDExLjgzMDcgMS43NjcgMTEuNzQ4MiAxLjkyMzE2IDExLjU5ODRMNy4wMDczNCA2LjcyMTM0QzcuMTYzNSA2LjU3MTU0IDcuMjQ5NTEgNi4zNzIzOSA3LjI0OTUxIDYuMTYwNTNDNy4yNDk1MSA1Ljk0ODcgNy4xNjM1IDUuNzQ5NTMgNy4wMDczNCA1LjU5OTcyTDEuOTIzMTQgMC43MjI2MDJDMS43NjE5OCAwLjU2Nzk4NSAxLjU1MDI2IDAuNDkwNjY0IDEuMzM4NTQgMC40OTA2NjRaXCIgZmlsbD1cIndoaXRlXCIvPlxyXG48L3N2Zz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgXHJcbiAgKTtcclxufVxyXG5cclxuU2VhcmNoSW5wdXQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcHJvZmlsZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hhcnQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxyXG59O1xyXG5cclxuXHJcbi8vIFNlYXJjaElucHV0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0NvbmZpZy5CQUNLRU5EX1VSTH0vY2l0eWApO1xyXG4vLyAgICAgY29uc29sZS5sb2cocmVzKVxyXG4vLyAgICAgaWYocmVzLnN0YXR1cyA9PT0gNDA0KSByZXR1cm4geyB2aWxsZXM6IFtdIH1cclxuLy8gICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbi8vICAgICByZXR1cm4geyB2aWxsZXM6anNvbi5jaXRpZXMgfVxyXG4vLyAgIH1cclxuICAiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9maWxlOiB7XHJcbiAgICAgICAgaGVhZGluZzogXCLYqti52K/ZitmEINin2YTZhdmE2YEg2KfZhNi02K7YtdmKXCIsXHJcbiAgICAgICAgbm9tTGFiZWw6IFwi2KfYs9mFXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXIxOiBcIti62YrYsSDYp9iz2YXZg1wiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyMjogXCLYqti62YrZitixINin2LPZhdmDINin2YTYo9mI2YQgXCIsXHJcbiAgICAgICAgcHJlbm9tTGFiZWw6IFwi2KfZhNin2LPZhSDYp9mE2KPZiNmEXCIsXHJcbiAgICAgICAgZW1haWxMYWJlbDogXCLYp9mE2KjYsdmK2K8g2KfZhNil2YTZg9iq2LHZiNmG2YpcIixcclxuICAgICAgICBwaG9uZUxhYmVsOlwi2LHZgtmFINin2YTZh9in2KrZgVwiLFxyXG4gICAgICAgIGNvbmZpcm1fcGFzc3dvcmQ6XCLYo9mD2K8g2YPZhNmF2Kkg2KfZhNmF2LHZiNixXCIsXHJcbiAgICAgICAgbmV3X3Bhc3N3b3JkOlwiINmD2YTZhdipINin2YTYs9ixINis2K/Zitiv2KlcIixcclxuICAgICAgICBvbGRfcGFzc3dvcmQ6IFwi2YPZhNmF2Kkg2KfZhNiz2LFcIlxyXG5cclxuICAgIH0sXHJcbiAgICBob21lOiB7XHJcbiAgICAgICAgdGl0bGU6IFwiRE9DVE9MSVZFIC0g2YXZiNi52K8g2YXYuSDYt9io2YrYqNmDINi52KjYsSDYp9mE2KXZhtiq2LHZhtiqXCIsXHJcbiAgICAgICAgaGVhZGluZzE6IFwi2KfYqNit2Ksg2LnZhiDYt9io2YrYqCDYjCDYrdiv2K8g2YXZiNi52K/Zi9inXCIsXHJcbiAgICAgICAgaGVhZGluZzI6XCLYp9mD2KrYtNmBINij2YHYttmEINin2YTYo9i32KjYp9ihINmI2KfZhNi52YrYp9iv2KfYqiDZiNin2YTZhdiz2KrYtNmB2YrYp9iqINmB2Yog2KfZhNmF2K/ZitmG2Kkg2KfZhNij2YLYsdioINil2YTZitmDXCIsXHJcbiAgICAgICAgc2VhcmNoOntcclxuICAgICAgICAgICAgcmVjaGVyY2hlbGFiZWw6IFwi2K/Zg9iq2YjYsSDYjCDZhdik2LPYs9ipINiMINiq2K7Ytdi1IC4uLlwiLFxyXG4gICAgICAgICAgICBub09wdGlvbjogXCLZhNinINiq2YjYrNivINmG2KrYp9im2Kwg2YXYt9in2KjZgtipXCIsXHJcbiAgICAgICAgICAgIG5vT3B0aW9uMjogXCLYp9mD2KrYqCDZhNmE2K3YtdmI2YQg2LnZhNmJINin2YTZhdiy2YrYryDZhdmGINin2YTZhtiq2KfYptisXCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IFwi2KrYrdmF2YrZhCDYp9mE2KPYt9io2KfYoSDYo9mIINin2YTYqtiu2LXYtdin2Kog2KfZhNmF2YXYp9ir2YTYqVwiLFxyXG4gICAgICAgICAgICBjaXR5bGFiZWw6IFwi2KPZitmGINifXCIsXHJcbiAgICAgICAgICAgIGNpdHlMb2FkaW5nOiBcItiq2K3ZhdmK2YQg2YXYr9mGINmF2YXYp9ir2YTYqVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhYm91dCA6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCLZhdi52YTZiNmF2KfYqiDYudmG2KdcIixcclxuICAgICAgICAgICAgYm9keTogXCLZg9in2YbYqiDYp9mE2YHZg9ix2Kkg2YjYsdin2KEgRG9jdG9saXZlINmH2Yog2KjZhtin2KEg2YXZgdmH2YjZhSDYt9mI2YrZhCDYp9mE2YXYr9mJINmK2YfYr9mBINil2YTZiSDYqtit2LPZitmGINit2YrYp9ipINin2YTZhtin2LMg2KfZhNmK2YjZhdmK2KkuINmB2Yog2LnYp9mFIDIwMjEg2Iwg2KfYrtiq2KfYsSDYtNix2YrZg9in2YYg2YXYudin2YTYrNipINmF2YjYttmI2Lkg2KfZhNmF2YjYp9i52YrYryDYp9mE2LfYqNmK2KkuINiz2LHYudin2YYg2YXYpyDYo9i12KjYrSDZiNin2LbYrdmL2Kcg2KPZhiDYp9mE2YXYsdi22Ykg2YjYp9mE2YXZhdin2LHYs9mK2YYg2LnZhNmJINit2K8g2LPZiNin2KEg2YPYp9mG2YjYpyDYrdiz2KfYs9mK2YZcIixcclxuICAgICAgICAgICAgYnV0dG9uOiBcIlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMTpcItmF2YjYudivIDI0LzdcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTI6XCLYqtiw2YPZitixINiq2YTZgtin2KbZilwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcItiz2KzZhCDYp9mE2KjZitin2YbYp9iqXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBza2lwIDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcItiq2KzZhtioINi62LHZgdipINin2YTYp9mG2KrYuNin2LEuXCIsXHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmc6IFwi2LHYpNmK2Kkg2KfZhNi32KjZitioXCIsXHJcbiAgICAgICAgICAgIGJ1dHRvbjogXCLYqtit2K/ZitivINmF2YjYudivXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwi2KrZg9in2YTZitmBINio2LPZiti32Kkg2YjYq9in2KjYqtipXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0yOlwi2KfZhNij2LfYqNin2KEg2KfZhNiw2YrZhiDYqtmFINin2YTYqtit2YLZgiDZhdmG2YfZhSDZitiz2KrYrNmK2KjZiNmGINmB2YogNVwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcIjEwMNmqINiu2KfYtSDZiNiz2LHZilwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcHM6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCLYrdiv2K8g2YXZiNi52K/Zi9inINio2KjYtti5INmG2YLYsdin2KouXCIsXHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmc6IFwi2LHYpNmK2Kkg2KfZhNi32KjZitioXCIsXHJcbiAgICAgICAgICAgIGJ1dHRvbjogXCLYqtit2K/ZitivINmF2YjYudivXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwi2KfYqNit2Ksg2LnZhiDYo9iu2LXYp9im2Yog2KfZhNix2LnYp9mK2Kkg2KfZhNi12K3ZitipINin2YTYrtin2LUg2KjZg1wiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMTI6XCLYo9mD2KvYsSDZhdmGIDI1MDAwINmF2YXYp9ix2LMg2YHZiiA3MCDYqtiu2LXYtdmL2KcuINiq2LXZgdmK2Kkg2K3Ys9ioINin2YTYqtiu2LXYtSDYjCDZhdis2KfZhCDYp9mE2K7YqNix2Kkg2Iwg2KfZhNmF2YjZgti5INin2YTYrNi62LHYp9mB2Yog2Iwg2KXZhNiuLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMjpcItin2K7YqtixINmI2YLYqtmDXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0yMjpcItit2K/YryDYqtiu2LXYtdmDINmB2Yog2KzYr9mI2YQg2KPYudmF2KfZhCDYp9mE2YXZhdin2LHYsyDZgdmKINin2YTZiNmC2Kog2KfZhNmB2LnZhNmKLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcItin2K3YrNiyINmF2YjYudiv2YMg2YHZiiDYr9mC2YrZgtipINmI2KfYrdiv2KkhXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0zMjpcIjI0Lzcg2KfZhNmI2LXZiNmEINil2YTZiSDZhdmI2KfYudmK2K/ZgyDZhdmGINis2YXZiti5INij2KzZh9iy2KrZgy4g2KfZhNiq2KPZg9mK2K8g2YjYp9mE2KrYsNmD2YrYsSDYudmGINi32LHZitmCINin2YTYqNix2YrYryDYp9mE2KXZhNmD2KrYsdmI2YbZiiDZiNin2YTYsdiz2KfYptmEINin2YTZgti12YrYsdipLlwiLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGRvd2xvYWQ6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCLYp9mD2KrYtNmBINiq2LfYqNmK2YIg2KfZhNmH2KfYqtmBINin2YTZhdit2YXZiNmEIFwiLFxyXG4gICAgICAgICAgICBzdWJIZWFkaW5nOiBcItmE2KXYr9in2LHYqSDZhdmI2KfYudmK2K/ZgyDYqNi02YPZhCDYo9iz2YfZhC5cIixcclxuICAgICAgICAgICAgYXBwOlwi2YHZiiDZhdiq2KzYsSDYp9mE2KrYt9io2YrZgtin2KogQVBQIFNUT1JFIFwiLFxyXG4gICAgICAgICAgICBwbGF5OiBcItmB2Yog2YXYqtis2LEg2KfZhNiq2LfYqNmK2YLYp9iqIFBMQVkgU1RPUkVcIlxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcnZpY2VzIDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcItiu2K/Zhdin2KrZhtinXCIsXHJcbiAgICAgICAgICAgIGl0ZW0xaGVhZGluZzogXCLYp9iz2KrYtNixINin2YTYo9i32KjYp9ihINi52KjYsSDYp9mE2KXZhtiq2LHZhtiqXCIsXHJcbiAgICAgICAgICAgIGl0ZW0xYm9keTpcItiq2K3Yr9irINmF2Lkg2LfYqNmK2Kgg2KjYp9iz2KrYrtiv2KfZhSDZhdmD2KfZhNmF2Kkg2KfZhNmB2YrYr9mK2Ygg2LnYp9mE2YrYqSDYp9mE2KPZhdin2YYg2KfZhNiu2KfYtdipINio2YbYpy4g2KrYs9in2LnYr9mDINiu2K/ZhdipINmF2YPYp9mE2YXYp9iqINin2YTZgdmK2K/ZitmIINin2YTYrtin2LXYqSDYqNmG2Kcg2LnZhNmJINmF2YbYp9mC2LTYqSDZhdiu2KfZiNmB2YMg2KfZhNi12K3ZitipINmF2Lkg2LfYqNmK2Kgg2YHZiiDYqtmB2KfYudmEINmF2KjYp9i02LEg2YjYrNmH2KfZiyDZhNmI2KzZhy5cIixcclxuICAgICAgICAgICAgaXRlbTJoZWFkaW5nOiBcItmC2YUg2KjYqtiu2LLZitmGINin2YTZhdiz2KrZhtiv2KfYqiDYp9mE2LfYqNmK2Kkg2KfZhNiu2KfYtdipINio2YNcIixcclxuICAgICAgICAgICAgaXRlbTJib2R5Olwi2LPZitiq2YUg2KrYs9is2YrZhCDYrNmF2YrYuSDYp9mE2YXYs9iq2YbYr9in2Kog2KfZhNiq2Yog2KrZhdiqINmF2LTYp9ix2YPYqtmH2Kcg2YXYuSDYo9i32KjYp9im2YMg2KPZiCDYqNmI2KfYs9i32KrZh9mFINij2KvZhtin2KEg2KfZhNin2LPYqti02KfYsdipINi52YYg2KjZj9i52K8g2LnZhNmJINin2YTZhdmG2LXYqS4g2LPYqtmD2YjZhiDZh9iw2Ycg2KfZhNmF2LnZhNmI2YXYp9iqINmF2KrYp9it2Kkg2YTZgyDYo9mG2Kog2YjYp9mE2YXZhdin2LHYsyDZgdmC2LcuXCIsXHJcbiAgICAgICAgICAgIGl0ZW0zaGVhZGluZzogXCLYpdiv2KfYsdipINin2YTZhdmI2KfYudmK2K9cIixcclxuICAgICAgICAgICAgaXRlbTNib2R5Olwi2KjYudivINiq2KPZg9mK2K8g2KfZhNmF2YjYudivINiMINiz2KrYqtmF2YPZhiDZhdmGINmG2YLZhNmHINij2Ygg2KXZhNi62KfYptmHINmB2Yog2KPZiiDZiNmC2KouINmE2K/ZitmDINij2YrYttmL2Kcg2KXZhdmD2KfZhtmK2Kkg2KXYr9in2LHYqSDZhdmI2KfYudmK2K/ZgyDYp9mE2YLYr9mK2YXYqS5cIixcclxuICAgICAgICAgICAgaXRlbTRoZWFkaW5nOiBcItin2KjYrdirINi52YYg2LfYqNmK2KjZg1wiLFxyXG4gICAgICAgICAgICBpdGVtNGJvZHk6XCLZhdi5INmI2KzZiNivINi52K/YryDZg9io2YrYsSDZhdmGINin2YTZhdmF2KfYsdiz2YrZhiDYp9mE2YXYqtmG2YjYudmK2YYg2LnZhNmJINin2YTYtdi52YrYryDYp9mE2YjYt9mG2Yog2Iwg2YXZhiDYp9mE2LPZh9mEINin2K7YqtmK2KfYsSDZhdmC2K/ZhSDYsdi52KfZitipINi32KjZitipINij2Ygg2LXYrdipINi52YLZhNmK2Kkg2YrYqtmF2KrYuSDYqNin2YTYrtio2LHYqSDZiNin2YTYqtiu2LXYtSDYp9mE2YXZhtin2LPYqNmK2YYg2YTZgy5cIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIG1lZGVjaW46IFwi2YfZhCDYo9mG2Kog2YXYqtiu2LXYtSDZgdmKINin2YTYsdi52KfZitipINin2YTYtdit2YrYqdifXCIsXHJcbiAgICAgICAgY29udGFjdDogXCLYp9iq2LXZhCDYqNmG2KdcIixcclxuICAgICAgICBjb25lY3Q6IFwi2KrYs9is2YrZhCDYp9mE2K/YrtmI2YRcIixcclxuICAgICAgICByZHY6IFwi2KXYr9in2LHYqSDZhdmI2KfYudmK2K/ZilwiXHJcbiAgICB9LFxyXG4gICAgcHJvbmF2YmFyOiB7XHJcbiAgICAgICAgY29udGFjdDogXCLYp9iq2LXZhCDYqNmG2KdcIixcclxuICAgICAgICBkb2N1bWVudDogXCLZiNir2KfYptmCXCIsXHJcbiAgICAgICAgcmR2OiBcItmF2YjYp9i52YrYr1wiLFxyXG4gICAgICAgIGRyb3BEb3duMTogXCLYrdiz2KfYqNmKXCIsXHJcbiAgICAgICAgZHJvcERvd24yOiBcItiq2LPYrNmK2YQg2KfZhNiu2LHZiNisXCIsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgcGFydG5lcjogXCLZg9mGINi32KjZitio2YvYpyDYtNix2YrZg9mL2KdcIixcclxuICAgICAgICBzaWduaW46IFwi2LPYrNmEINmD2YXYsdmK2LZcIixcclxuICAgICAgICBmYXE6IFwi2KPYs9im2YTYqSDYn1wiLFxyXG4gICAgICAgIGNvbnRhY3Q6IFwi2KfYqti12YQg2KjZhtinIFwiLFxyXG4gICAgICAgIGFkcmVzczogXCLYp9mE2YXYutix2KggLSDYp9mE2K/Yp9ixINin2YTYqNmK2LbYp9ihXCIsXHJcbiAgICAgICAgcG9saXRpcXVlOiBcItiz2YrYp9iz2Kkg2KfZhNiu2LXZiNi12YrYqVwiLFxyXG4gICAgICAgIGNvbmRpdGlvbjogXCLYtNix2YjYtyDYp9mE2KfYs9iq2LnZhdin2YRcIixcclxuICAgICAgICBjb25kaXRpb24yOiBcIkNvbmRpdGlvbnMgZCd1dGlsaXNhdGlvbiBkdSBzaXRlIERvY3RvbGl2ZVwiLFxyXG4gICAgICAgIHJlZ2xlX2RlX3I6XCJSw6hnbGVzIGRlIHLDqWbDqXJlbmNlbWVudFwiLFxyXG4gICAgICAgIG1lbnRpb25zX2xlZzpcIk1lbnRpb25zIGzDqWdhbGVzXCIsXHJcbiAgICAgICAgbWVudGlvbnNfbGVnOlwiTWVudGlvbnMgbMOpZ2FsZXNcIixcclxuICAgICAgICBDb29raWVzOlwiQ29va2llc1wiLFxyXG4gICAgICAgIHByb3RlY3RfZG9ubmVzX3BlcnNvOlwicHJvdGVjdGlvbiBkZXMgZG9ubsOpZXMgcGVyc29ubmVsbGVzXCIsXHJcbiAgICAgICAgZ2VzdGlvbl9kZV9jb29raWVzOlwiR2VzdGlvbiBkZSBjb29raWVzIGV0IGNvbnNlbnRlbWVudFwiLFxyXG4gICAgfSxcclxuICAgIG5ldzp7XHJcbiAgICAgICAgYWxyZWFkeUhhdmU6IFwi2YTYr9mKINio2KfZhNmB2LnZhCDYrdiz2KfYqCBEb2N0b2xpdmVcIixcclxuICAgICAgICBuZXdJbjogXCLYrNiv2YrYryDYudmE2YkgRG9jdG9saXZl2J9cIixcclxuICAgICAgICBzaWduaW46IFwi2KrYs9is2YrZhCDYp9mE2K/YrtmI2YRcIixcclxuICAgICAgICBzaWdudXA6IFwiINiz2KzZhCDYp9mE2KfZhlwiLFxyXG4gICAgICAgIGF1dGg6XCLYp9mE2K/YrtmI2YQg2KXZhNmJINit2LPYp9io2YpcIixcclxuICAgICAgICBlbWFpbExhYmVsOiBcIti52YbZiNin2YYg2KfZhNio2LHZitivINin2YTYpdmE2YPYqtix2YjZhtmKXCIsXHJcbiAgICAgICAgcGFzc0xhYmVsOiBcItmD2YTZhdipINin2YTYs9ixXCIsXHJcbiAgICAgICAgb2xkcGFzc0xhYmVsOiBcItmD2YTZhdipINiz2LEg2YLYr9mK2YXYqVwiLFxyXG4gICAgICAgIGNvbmZpcm1wYXNzTGFiZWw6IFwi2KPZg9ivINmD2YTZhdipINin2YTYs9ixXCIsXHJcbiAgICAgICAgZXJyb3I6IFwi2YPZhNmF2Kkg2YXYsdmI2LEg2KPZiCDYudmG2YjYp9mGINio2LHZitivINil2YTZg9iq2LHZiNmG2Yog2LrZitixINi12K3ZititIVwiLFxyXG4gICAgICAgIGxhYmVsTm9tOiBcItin2YTZg9mG2YrYqVwiLFxyXG4gICAgICAgIGxhYmVsUHJlbm9tOiBcItin2YTYp9iz2YUg2KfZhNij2YjZhFwiLFxyXG4gICAgICAgIHBob25lTGFiZWw6IFwi2LHZgtmFINin2YTZh9in2KrZgVwiLFxyXG4gICAgICAgIHBob25lRXJyb3I6XCLZitis2Kgg2KPZhiDZitmD2YjZhiDYudmG2YjYp9mGINin2YTYqNix2YrYryDYp9mE2KXZhNmD2KrYsdmI2YbZiiDYqNiq2YbYs9mK2YIg2KfZhNi52KfZhVwiLFxyXG4gICAgICAgIGxhYmVsRW1haWxDOiBcItij2YPYryDYudmG2YjYp9mG2YMg2KfZhNil2YTZg9iq2LHZiNmG2YpcIixcclxuICAgICAgICBsYWJlbEVtYWlsQ1A6IFwi2KPZg9ivINi52YbZiNin2YbZgyDYp9mE2KXZhNmD2KrYsdmI2YbZilwiLFxyXG4gICAgICAgIGVycm9yU2lnbnVwOiBcItin2YTZhdi52YTZiNmF2KfYqiDYutmK2LEg2LXYrdmK2K3YqVwiLFxyXG4gICAgICAgIHN1Y2Nlc3NTaWdudXA6IFwi2KrZhSDYpdix2LPYp9mEINin2YTYt9mE2Kgg2KjZhtis2KfYrSDYqtit2YLZgiDZhdmGINi52YbZiNin2YYg2KjYsdmK2K/ZgyDYp9mE2KXZhNmD2KrYsdmI2YbZiiDZhNiq2KPZg9mK2K8g2K3Ys9in2KjZg1wiXHJcbiAgICB9LFxyXG4gICAgcmVwb3J0OntcclxuICAgICAgICBzaWdudXA6IFwi2KfYttin2YHYqVwiLFxyXG4gICAgICAgIGxhYmVsTm9tOiBcItin2YTZhtmI2LlcIixcclxuICAgICAgICBsYWJlbFByZW5vbTogXCLZiNi12YFcIixcclxuICAgICAgICBsYWJlbEVuZDogXCLYp9mG2KrZh9iqINin2YTYp9iz2KrYtNin2LHYqdifXCIsXHJcbiAgICAgICAgZXJyb3JTaWdudXA6IFwi2KfZhNmF2LnZhNmI2YXYp9iqINi62YrYsSDYtdit2YrYrdipXCIsXHJcbiAgICAgICAgc3VjY2Vzc1NpZ251cDogXCLYqtmFINil2LHYs9in2YQg2KfZhNi32YTYqCDYqNmG2KzYp9itINiq2K3ZgtmCINmF2YYg2KjYsdmK2K/ZgyDYp9mE2KfZhNmD2KrYsdmI2YbZiiDZhNmE2K3YtdmI2YQg2LnZhNmJINix2K8g2YXYs9io2YIg2YHZiiDYp9mE2KPZitin2YUg2KfZhNmC2YTZitmE2Kkg2KfZhNmF2YLYqNmE2KlcIlxyXG4gICAgfSxcclxuICAgIGRvY3VtZW50czoge1xyXG4gICAgICAgIGF1Y3VuIDpcItmE2YUg2YrYqtmFINin2YTYudir2YjYsSDYudmE2Ykg2KPZiiDZhdiz2KrZhtivXCIsXHJcbiAgICAgICAgZG9udGhhdmU6IFwi2YTZitizINmE2K/ZitmDINmI2KvZitmC2Kkg2YTZhNmF2LTYp9ix2YPYqVwiLFxyXG4gICAgICAgIHNoYXJlZEJ5OiBcIiDZhdi02KfYsdmD2Kkg2KfZhNmF2LPYqtmG2K8g2YXZhiDYt9ix2YE6IFwiLFxyXG4gICAgICAgIHNoYXJlZFdpdGg6IFwi2KfZhNmF2LPYqtmG2K8g2KfZhNiw2Yog2YLZhdiqINio2YXYtNin2LHZg9iq2Ycg2YXYudmHOlwiLFxyXG4gICAgfSxcclxuICAgIGFwcG9pbnRtZW50czoge1xyXG4gICAgICAgIG5vdEF1dGg6IFwi2KPZhtiqINi62YrYsSDZhdi12K/ZgiAuLi5cIixcclxuICAgICAgICBhY2Nlc3M6IFwi2KfZhNiv2K7ZiNmEINil2YTZiSDYrdiz2KfYqNmKXCIsXHJcbiAgICAgICAgbm9BcHA6IFwiINmE2YrYsyDZhNiv2YrZgyDZhdmI2LnYryDYqNi52K9cIixcclxuICAgICAgICBteWFwcDogXCLYp9mE2YXZiNin2LnZitivINin2YTYrtin2LXYqSDYqNmKXCIsXHJcbiAgICAgICAgbXlIaXN0b3J5OiBcItiz2KzZhCDYp9mE2YTZgtin2KbYp9iqINin2YTYt9io2YrYqVwiLFxyXG4gICAgICAgIGhpc3Rvcnk6IFwi2LPYrNmEINin2YTZhNmC2KfYptin2Kog2KfZhNi32KjZitipXCIsXHJcbiAgICAgICAgbmV4dEFwcDogXCIg2KfZhNmF2YjYp9i52YrYryDYp9mE2YLYp9iv2YXYqVwiLFxyXG4gICAgICAgIHRha2VhcHA6IFwi2KfYrtiwINmF2YjYudivXCIsXHJcbiAgICAgICAgY2FyZEFwcHM6IHtcclxuICAgICAgICAgICAgbGluayA6XCLYp9mG2LjYsSDYp9mE2YXYstmK2K8g2YXZhiDYp9mE2KrZgdin2LXZitmEXCIgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZEFwcDoge1xyXG4gICAgICAgICAgICBsaW5rIDpcItin2YbYuNixINin2YTZhdiy2YrYryDZhdmGINin2YTYqtmB2KfYtdmK2YRcIixcclxuICAgICAgICAgICAgYWNjZXNzSW5mb3M6IFwi2YXYudmE2YjZhdin2Kog2KfZhNmI2YTZiNisIFwiLFxyXG4gICAgICAgICAgICBub3RTcGVjaWZpZWQ6IFwi2YTZhSDZitit2K/YryDYp9mE2LfYqNmK2Kgg2KjYudivINmF2LnZhNmI2YXYp9iqINin2YTZiNi12YjZhFwiLFxyXG4gICAgICAgICAgICBzZWNyZXRhcmlhdDogXCLYp9mE2KfYqti12KfZhCDYqNin2YTYo9mF2KfZhtipXCIsXHJcbiAgICAgICAgICAgIGNsaWNrOiBcItin2YTYsdis2KfYoSDYp9mE2LbYuti3INi52YTZiSDYp9mE2LLYsSDZhNmE2YjYtdmI2YQg2KXZhNmJINin2YTYp9iz2KrYtNin2LHYqSDYudmGINio2LnYry4g2LPZhtiu2KjYsSDYt9io2YrYqNmDINiq2YTZgtin2KbZitmL2Kcg2KjZiNis2YjYr9mDLlwiLFxyXG4gICAgICAgICAgICByZWpvaW5kcmU6IFwi2KfZhti22YUg2KXZhNmJINin2YTYp9iz2KrYtNin2LHYqVwiLFxyXG4gICAgICAgICAgICBkZXBsYWNlcjogXCLYp9mG2YLZhCDYp9mE2YXZiNi52K9cIixcclxuICAgICAgICAgICAgYW5udWxlcjogXCIg2KfZhNmF2YjYudivIFwiLFxyXG4gICAgICAgICAgICByZXRvdXI6IFwi2LHYrNmI2LlcIixcclxuICAgICAgICAgICAgY29uZmlybUNhbmNlbDogXCLYqtij2YPZitivINil2YTYutin2KEg2KfZhNmF2YjYudivXCIsXHJcbiAgICAgICAgICAgIHdhbnRZb3U6IFwi2YfZhCDYqtix2LrYqCDZgdmKINil2YTYutin2KEg2YXZiNi52K9cIixcclxuICAgICAgICAgICAgd2l0aDogXCLZhdi5IFwiLFxyXG4gICAgICAgICAgICBkb2NBdmFpOiBcItiq2YjYp9mB2LEg2KfZhNi32KjZitioXCIsXHJcbiAgICAgICAgICAgIHNlbGVjVHRpbWU6ICBcItin2YTZiNmC2Kog2KfZhNmF2K3Yr9ivINmE2YTYp9iz2KrYtNin2LHYqSDZh9mIXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwi2YLZhSDYqNiq2KPZg9mK2K8g2KfZhNmB2KrYsdipINin2YTYstmF2YbZitipINin2YTYrNiv2YrYr9ipXCIsXHJcbiAgICAgICAgICAgIHNlZUluZm9zU2hhcmVkOiBcItin2YbYuNixINin2YTZhdi52YTZiNmF2KfYqiDYp9mE2YXYtNiq2LHZg9ipINmB2Yog2KfZhNin2LPYqti02KfYsdipXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICByZXN1bHRSZXNlYXJjaDoge1xyXG4gICAgICAgIG5vUmVzZWF1bHQ6IFwi2LnYsNix2Kcg2Iwg2YTZhSDZhtiq2YXZg9mGINmF2YYg2KfZhNi52KvZiNixINi52YTZiSDZhdit2KrYsdmBINmE2KjYrdir2YMgLi4uXCIsXHJcbiAgICAgICAgdHJ5UmVzZWF1bHQ6IFwi2K3Yp9mI2YQg2KjZhdi52KfZitmK2LEg2KjYrdirINij2K7YsdmJLlwiLFxyXG4gICAgICAgIHdpZGdldDoge1xyXG4gICAgICAgICAgICBhdmFpbGFibGVWaWRlbzogXCLYp9mE2KrYtNin2YjYsSDYqNin2YTZgdmK2K/ZitmIINmF2KrYp9itXCIsXHJcbiAgICAgICAgICAgIG5vdFNwZWNpZmllZDogXCLZhNmFINmK2K3Yr9ivINin2YTYt9io2YrYqCDYqNi52K8g2YXYudmE2YjZhdin2Kog2KfZhNmI2LXZiNmEINmH2LDZh1wiLFxyXG4gICAgICAgICAgICBzZWVQcm9maWxlOiBcItin2YbYuNixINin2YTZhdmE2YEg2KfZhNi02K7YtdmKXCIsXHJcbiAgICAgICAgICAgIHNlZURpc3BvOiBcItin2YTYqtit2YLZgiDZhdmGINin2YTYtdmE2KfYrdmK2KlcIixcclxuICAgICAgICAgICAgZGlzcG86XCLYp9mE2KfZiNmC2KfYqiDYp9mE2YXYqtin2K3YqSDYudmG2K8g2YfYsNinINin2YTYt9io2YrYqFwiLFxyXG4gICAgICAgICAgICB0aW1lU2VsZWN0ZWQ6IFwi2KrYqNiv2KMg2KfZhNmB2KrYsdipINin2YTYstmF2YbZitipINin2YTZhdit2K/Yr9ipINmE2YTYqti02KfZiNixIFwiLFxyXG4gICAgICAgICAgICBjYW5jZWw6IFwi2YTYp9mE2LrYp9ihXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwi2KrYrdiv2YrYryDZhdmI2LnYr1wiLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB2YWxpZGF0aW9uOntcclxuICAgICAgICBjb25maXJtOiBcItiq2YUg2KfZhNiq2K3ZgtmCINmF2YYg2LXYrdipINit2LPYp9io2YNcIixcclxuICAgICAgICBleHBpcmVkOiBcItmE2YUg2YrYqtmFINin2YTYqtit2YLZgiDZhdmGINi12K3YqSDYrdiz2KfYqNmDINit2KrZiSDYp9mE2KLZhiDYjCDZitio2K/ZiCDYo9mGINmH2LDYpyDYp9mE2KfYsdiq2KjYp9i3INmC2K8g2KfZhtiq2YfYqiDYtdmE2KfYrdmK2KrZhyDYqNin2YTZgdi52YRcIixcclxuICAgICAgICBnZW5lcmF0ZU5ldzogXCLZgtmFINio2KXZhti02KfYoSDYp9ix2KrYqNin2Lcg2KzYr9mK2K9cIixcclxuICAgIH0sXHJcbiAgICBhcHBvaW50bWVudDp7XHJcbiAgICAgICAgc3RlcHM6IFtcItin2K7YqtmK2KfYsSDYp9mE2YbZhdi3XCIsIFwi2KrYudix2YrZgVwiLCBcItiq2K3ZgtmCXCIsIFwi2KrYo9mD2YrYryDYp9mE2YXYudmE2YjZhdin2KpcIiwgXCLZhNmC2K8g2KfZhtiq2YfZiVwiXSxcclxuICAgICAgICB0YWtlQXBwOiBcItiq2K3Yr9mK2K8g2YXZiNi52K9cIixcclxuICAgICAgICBzdGVwMToge1xyXG4gICAgICAgICAgICBsYWJlbDE6IFwi2LnZhtmI2KfZhiA6IFwiLFxyXG4gICAgICAgICAgICBpbnAxOiBcIti52YbZiNin2YYg2KfZhNiq2LnZitmK2YZcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIxOiBcItin2YTYudmG2YjYp9mGINin2YTZhdix2KfYryDYudix2LbZhyDZhNmH2LDYpyDYp9mE2YXZiNi52K9cIixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhYmVsMjogXCLZiNi12YEgOlwiLFxyXG4gICAgICAgICAgICBpbnAyOiBcItmI2LXZgSDYp9mE2YXZiNi52K9cIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIyOiBcItmF2LnZhNmI2YXYp9iqINil2LbYp9mB2YrYqVwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwzOiBcItmG2YjYuSDYp9mE2KfYs9iq2LTYp9ix2Kk6XCIsXHJcbiAgICAgICAgICAgIGlucDM6IFwi2KfYs9iq2LTYp9ix2Kkg2YHZitiv2YrZiFwiLFxyXG4gICAgICAgICAgICBpbnA0OiBcItin2YTYpdiz2KrYtNin2LHYqSDZgdmKINin2YTZhdmD2KrYqFwiLFxyXG5cclxuICAgICAgICAgICAgbGFiZWw0OiBcIti32KjZitioINin2LPYqti02KfYsdmKOlwiLFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYWJlbDU6IFwi2YXZiNmC2LkgOiBcIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwi2KfYs9iq2LTYp9ix2Kkg2LnZhiDYqNi52K8g2KjYp9mE2YHZitiv2YrZiFwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWw2OiBcIiDZhdinINiz2KjYqCDZh9iw2Ycg2KfZhNin2LPYqti02KfYsdipOlwiLFxyXG4gICAgICAgICAgICBtb3RpZjogXCLYs9io2Kgg2KfZhNin2LPYqti02KfYsdipXCIsXHJcbiAgICAgICAgICAgIG5vTW90aWZzOiBcItmE2Kcg2YrZiNis2K8g2LPYqNioINmF2K3Yr9ivINmF2YYg2YLYqNmEINin2YTYt9io2YrYqFwiLFxyXG5cclxuICAgICAgICAgICAgbGFiZWw3OiBcItiq2KfYsdmK2K4g2YjZiNmC2Kog2KfZhNin2LPYqti02KfYsdipOiBcIixcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwMjp7XHJcbiAgICAgICAgICAgIG5ldzogXCLYrNiv2YrYryDYudmE2YkgRG9jdG9saXZl2J9cIixcclxuICAgICAgICAgICAgb2xkOiBcItmE2K/ZiiDYqNin2YTZgdi52YQg2K3Ys9in2KggRG9jdG9saXZlXCIsXHJcbiAgICAgICAgICAgIHNpZ251cDogXCLYs9is2YQg2KfZhNin2YZcIixcclxuICAgICAgICAgICAgc2lnbmluOiBcItiq2LPYrNmK2YQg2KfZhNiv2K7ZiNmEXCIsXHJcbiAgICAgICAgICAgIHRlbGVjb25zdWx0OiBcItin2LPYqti02KfYsdipINi52YYg2KjYudivINio2KfZhNmB2YrYr9mK2YhcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXAzOntcclxuICAgICAgICAgICAgdGl0bGU6XCLZhNmC2K8g2KPYsdiz2YTZhtinINio2LHZitiv2YvYpyDYpdmE2YPYqtix2YjZhtmK2YvYpyDYpdmE2Ykg2LnZhtmI2KfZhtmDINmE2YTYqtit2YLZgiDZhdmGINi12K3YqSDYrdiz2KfYqNmDXCIsXHJcbiAgICAgICAgICAgIGdlbmVyYXRlOiBcItij2LHYs9mEINio2LHZitiv2YvYpyDYpdmE2YPYqtix2YjZhtmK2YvYpyDYotiu2LFcIixcclxuICAgICAgICAgICAgcmV2aXJpZnk6IFwi2YTZgtivINiq2K3ZgtmC2Kog2YXZhiDYrdiz2KfYqNmKXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwNCA6e1xyXG4gICAgICAgICAgICB0aXRsZTogXCLYqtij2YPZitivINin2YTYp9iz2KrYtNin2LHYqVwiLFxyXG4gICAgICAgICAgICB0ZWxlY29uc3VsdDogXCLYp9iz2KrYtNin2LHYqSDYudmGINio2LnYryDYqNin2YTZgdmK2K/ZitmIXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwi2KrYo9mD2YrYryDYp9mE2YXZiNi52K8gXCIsXHJcbiAgICAgICAgICAgIHJlbWluZDogXCLYqNiq2KPZg9mK2K8g2YfYsNinINin2YTZhdmI2LnYryDZgdil2YbZgyDYqtmI2KfZgdmCINi52YTZiSDYp9it2KrYsdin2YXZhy4g2KrYsNmD2LEg2KXZhNi62KfYoSDZh9iw2Kcg2KfZhNin2KzYqtmF2KfYuSDZgdmKINij2YLYsdioINmI2YLYqiDZhdmF2YPZhiDZgdmKINit2KfZhNipINmI2YLZiNi5INit2K/YqyDYutmK2LEg2YXYqtmI2YLYuVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwNTp7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIiDYqtmFINiq2LPYrNmK2YQg2YXZiNi52K/Zgy5cIixcclxuICAgICAgICAgICAgZ2VyZXI6IFwi2KXYr9in2LHYqSDZhdmI2KfYudmK2K/Zg1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBwcm9maWxQYWdlOiB7XHJcbiAgICAgICAgYWNjZXNzSW5mbzogXCLZhdi52YTZiNmF2KfYqiDYp9mE2YjYtdmI2YQg2YTZhNi52YrYp9iv2KlcIixcclxuICAgICAgICBzZWNyZXRhcmlhdDogXCLYp9mE2KfYqti12KfZhCDYqNin2YTYs9mD2LHYqtin2LHZitipXCIsXHJcbiAgICAgICAgYWJvdXQ6IFwi2LnZhtmKXCIsXHJcbiAgICAgICAgZ2VuZXJhbDogXCLYqtmC2K/ZitmFINi52KfZhVwiLFxyXG4gICAgICAgIHNwZWNpYWxpdGU6IFwi2KrYrti12LVcIixcclxuICAgICAgICBwYXJjb3VyOiBcItmF2LPYp9ixXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb25QQXJjOiBcItmI2LXZgSDZhdiz2KfYsSDYp9mE2LfYqNmK2KhcIixcclxuICAgICAgICBmb3JtYXRpb246IFwi2KrZhdix2YrZhlwiLFxyXG4gICAgICAgIGF3YXJkOiBcItin2YTYrNmI2KfYptiyXCIsXHJcbiAgICAgICAgZXhwZXJpZW5jZTogXCLYrtio2LHYqVwiLFxyXG4gICAgICAgIHNlZURpc3BvOiBcIti52LHYtiDYp9mE2YHYqtix2KfYqiDYp9mE2YXYqtin2K3YqVwiLFxyXG4gICAgICAgIHNlZU1hcDogXCLYpdi42YfYp9ixINin2YTZhdmI2YLYuSDYudmE2Ykg2KfZhNiu2LHZiti32KlcIixcclxuICAgICAgICB0YXJpZjogXCLYp9mE2KPYs9i52KfYsVwiLFxyXG4gICAgICAgIGRldGFpbHM6IFwi2KrZgdin2LXZitmEINin2YTYs9i52LEg2YTZg9mEINmG2YjYuSDZhdmGINin2YTYp9iz2KrYtNin2LHYqS5cIixcclxuICAgICAgICBob25vcmU6IFwi2YrYqtmFINil2LHYs9in2YQg2YfYsNmHINin2YTYsdiz2YjZhSDYpdmE2YrZgyDZhNmE2K3YtdmI2YQg2LnZhNmJINmF2LnZhNmI2YXYp9iqINmB2YLYtyDZhdmGINmC2KjZhCDYp9mE2LfYqNmK2KguINmC2K8g2KrYrtiq2YTZgSDYp9i52KrZhdin2K/Zi9inINi52YTZiSDZhtmI2Lkg2KfZhNi52YTYp9isINin2YTYsNmKINmK2KrZhSDYpdis2LHYp9ik2Ycg2KPYrtmK2LHZi9inINmB2Yog2KfZhNi52YrYp9iv2Kkg2Iwg2YjYudiv2K8g2KfZhNin2LPYqti02KfYsdin2Kog2YjYp9mE2KXYrNix2KfYodin2Kog2KfZhNil2LbYp9mB2YrYqSDYp9mE2YXYt9mE2YjYqNipLiDZgdmKINit2KfZhNipINiq2KzYp9mI2LIg2KfZhNij2LPYudin2LEg2Iwg2YrYrNioINi52YTZiSDYp9mE2YXZhdin2LHYsyDYqtit2LDZitixINin2YTZhdix2YrYtiDZhdiz2KjZgtmL2KcuXCIsXHJcbiAgICAgICAgc2VydmljZTogXCLYp9mE2K7Yr9mF2KkgLSDYstmK2KfYsdipXCIsXHJcbiAgICAgICAgcHJpeDogXCLYs9i52LFcIixcclxuICAgICAgICBob3JhaXJlOiBcItis2K/ZiNmEINmF2YjYp9i52YrYr1wiLFxyXG4gICAgICAgIGRldGFpbHNIZXVyZXM6IFwi2KrZgdi12YrZhCDYs9in2LnYp9iqINin2YTYudmF2YQg2YTZg9mEINmK2YjZhSDZhdmGINij2YrYp9mFINin2YTYo9iz2KjZiNi5LlwiLFxyXG4gICAgICAgIGNvbmZpcm06XCLYo9mD2K9cIixcclxuICAgICAgICBjYW5jZWw6IFwi2KXZhNi62KfYoVwiLFxyXG4gICAgICAgIHRpbWVTZWxlY3RlZDogXCLYqtio2K/YoyDYp9mE2YHYqtix2Kkg2KfZhNiy2YXZhtmK2Kkg2KfZhNmF2K3Yr9iv2Kkg2YTZhNiq2LTYp9mI2LEgXCIsXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9maWxlOiB7XHJcbiAgICAgICAgaGVhZGluZzogXCJQcm9maWxlIGVkaXRpbmdcIixcclxuICAgICAgICBub21MYWJlbDogXCJuYW1lXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXIxOiBcImNoYW5nZSB5b3VyIG5hbWVcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjI6IFwiY2hhbmdlIHlvdXIgZmlyc3QgbmFtZVwiLFxyXG4gICAgICAgIHByZW5vbUxhYmVsOiBcIkZpcnN0IG5hbWVcIixcclxuICAgICAgICBlbWFpbExhYmVsOiBcIkUtbWFpbCBhZHJlc3NcIixcclxuICAgICAgICBwaG9uZUxhYmVsOlwiUGhvbmUgbnVtYmVyXCIsXHJcbiAgICAgICAgY29uZmlybV9wYXNzd29yZDpcIkNvbmZpcm1lciBsZSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICBuZXdfcGFzc3dvcmQ6XCIgTmV3IFBhc3N3b3JkXCIsXHJcbiAgICAgICAgb2xkX3Bhc3N3b3JkOiBcIlBhc3N3b3JkIFwiXHJcblxyXG4gICAgfSxcclxuICAgIGhvbWU6IHtcclxuICAgICAgICB0aXRsZTogXCJET0NUT0xJVkUgLSBPbmxpbmUgZG9jdG9yJ3MgYXBwb2ludG1lbnRcIixcclxuICAgICAgICBoZWFkaW5nMTogXCJTZWFyY2ggRG9jdG9yLCBNYWtlIGFuIEFwcG9pbnRtZW50XCIsXHJcbiAgICAgICAgaGVhZGluZzI6IFwiRGlzY292ZXIgdGhlIGJlc3QgZG9jdG9ycywgY2xpbmljICYgaG9zcGl0YWwgdGhlIGNpdHkgbmVhcmVzdCB0byB5b3UuXCIsXHJcbiAgICAgICAgc2VhcmNoOntcclxuICAgICAgICAgICAgcmVjaGVyY2hlbGFiZWw6IFwiRG9jdG9yLCBlc3RhYmxpc2htZW50LCBzcGVjaWFsdHkgLi4uXCIsXHJcbiAgICAgICAgICAgIG5vT3B0aW9uOiBcIk5vIHJlc3VsdHMgbWF0Y2hcIixcclxuICAgICAgICAgICAgbm9PcHRpb24yOiBcIlR5cGUgdG8gZ2V0IG1vcmUgcmVzdWx0XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IFwiTG9hZGluZyBkb2N0b3JzIG9yIHNpbWlsYXIgc3BlY2lhbHRpZXNcIixcclxuICAgICAgICAgICAgY2l0eWxhYmVsOiBcIldoZXJlID9cIixcclxuICAgICAgICAgICAgY2l0eUxvYWRpbmc6IFwiTG9hZGluZyBzaW1pbGFyIGNpdHlcIlxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFib3V0IDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcImFib3V0IHVzXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IFwiVGhlIGlkZWEgYmVoaW5kIERvY3RvbGl2ZSB3YXMgdG8gYnVpbGQgYSBsb25nIHRlcm0gY29uY2VwdCB3aGljaCBhaW1zIHRvIGltcHJvdmUgcGVvcGxl4oCZcyBkYWlseSBsaXZlcy4gSW4gMjAyMSwgdHdvIHBhcnRuZXJzIGNob3NlIHRvIHRhY2tsZSB0aGUgc3ViamVjdCBvZiBtZWRpY2FsIGFwcG9pbnRtZW50cy4gIEl0IHF1aWNrbHkgYmVjYW1lIGNsZWFyIHRoYXQgYm90aCBwYXRpZW50cyBhbmQgcHJhY3RpdGlvbmVycyB3ZXJlIHJlc3BvbnNpdmUgdG8gdGhpcyBpbm5vdmF0aXZlIHRvb2wuIFwiLFxyXG4gICAgICAgICAgICBidXR0b246IFwiXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwiQXBwb2ludG1lbnRzIDI0LzdcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTI6XCJBdXRvbWF0aXF1ZSByZW1pbmRlclwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcImhpc3RvcnlcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNraXAgOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiU2tpcCB0aGUgd2FpdGluZyByb29tLlwiLFxyXG4gICAgICAgICAgICBzdWJIZWFkaW5nOiBcIkNvbnN1bHQgd2l0aCBhIGRvY3RvclwiLFxyXG4gICAgICAgICAgICBidXR0b246IFwiQ29uc3VsdCBub3dcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTE6XCJTaW1wbGUgYW5kIGZpeGVkIGZlZXNcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTI6XCJWZXJpZmllZCBkb2N0b3JzIHJlc3BvbmQgaW4gNSBtaW51dGVzXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0zOlwiMTAwJSBQcml2YXRlIGFuZCBjb25maWRlbnRpYWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXBzOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiVGFrZSBhbiBhcHBvaW50bWVudCBpbiBhIGZldyBjbGlja3MuXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwiRmluZCB5b3VyIGhlYWx0aGNhcmUgcHJvZmVzc2lvbmFsXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xMjpcIjI1LDAwMCsgcHJhY3RpdGlvbmVycyBmb3IgNzAgc3BlY2lhbHRpZXMuIEZpbHRlciBieSBzcGVjaWFsaXR5LCBhcmVhIG9mIGV4cGVydGlzZSwgZ2VvbG9jYXRpb24sIGFuZCBtb3JlLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMjpcIlNlbGVjdCB5b3VyIHRpbWVcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTIyOlwiU2VsZWN0IHlvdXIgc2xvdCBpbiB0aGUgcmVhbCB0aW1lIGFnZW5kYSBvZiB0aGUgcHJhY3RpdGlvbmVyLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcIkJvb2sgeW91ciBhcHBvaW50bWVudCBpbiAxIG1pbnV0ZSFcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTMyOlwiMjQvNyBhY2Nlc3MgdG8geW91ciBhcHBvaW50bWVudHMgZnJvbSBhbGwgeW91ciBkZXZpY2VzLiBDb25maXJtYXRpb24gYW5kIHJlbWluZGVyIHZpYSBlbWFpbCBhbmQgU01TLlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZG93bG9hZDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcIkRpc2NvdmVyIHRoZSBkb2N0b2xpdmUgbW9iaWxlIGFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmc6IFwiRm9yIGVhc2llciBhcHBvaW50bWVudHMgbWFuYWdlbWVudC5cIixcclxuICAgICAgICAgICAgYXBwOlwiR2V0IGl0IG5vdyBvbiBBcHAgU3RvcmVcIixcclxuICAgICAgICAgICAgcGxheTogXCJHZXQgaXQgbm93IG9uIFBsYXkgU3RvcmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcnZpY2VzIDoge1xyXG4gICAgICAgICAgICBoZWFkaW5nOiBcIlNlcnZpY2VzXCIsXHJcbiAgICAgICAgICAgIGl0ZW0xaGVhZGluZzogXCJDb25zdWx0IGRvY3RvcnMgb25saW5lXCIsXHJcbiAgICAgICAgICAgIGl0ZW0xYm9keTpcIlRhbGsgd2l0aCBhIGRvY3RvciB1c2luZyBvdXIgaGlnaGx5IHNlY3VyZSB2aWRlbyBjYWxsLiBPdXIgdmlkZW8gY2FsbCBzZXJ2aWNlIGhlbHBzIHlvdSB0byBzcGVhayBhYm91dCB5b3VyIGhlYWx0aCBpc3N1ZXMgd2l0aCBhIGRvY3RvciBvbiBhIGZhY2UgdG8gZmFjZSBsaXZlIGludGVyYWN0aW9uLlwiLFxyXG4gICAgICAgICAgICBpdGVtMmhlYWRpbmc6IFwiU3RvcmUgaGVhbHRoIHJlY29yZHNcIixcclxuICAgICAgICAgICAgaXRlbTJib2R5OlwiYWxsIGRvY3VtZW50cyBzaGFyZWQgd2l0aCBvciBieSB5b3VyIGRvY3RvcnMgZHVyaW5nIGEgdGVsZWNvbnN1bHRhdGlvbiB3aWxsIGJlIHJlY29yZGVkIG9uIHRoZSBwbGF0Zm9ybSB3aXRoIGEgc2luZ2xlIGFjY2VzcyBieSB5b3UgYW5kIHRoZSBwcmFjdGl0aW9uZXIuXCIsXHJcbiAgICAgICAgICAgIGl0ZW0zaGVhZGluZzogXCJBcHBvaW50bWVudHMgbWFuYWdlbWVudFwiLFxyXG4gICAgICAgICAgICBpdGVtM2JvZHk6XCJhZnRlciBjb25maXJtaW5nIGFuIGFwcG9pbnRtZW50LCB5b3Ugd2lsbCBiZSBhYmxlIHRvIG1vdmUgaXQgb3IgY2FuY2VsIGl0IGF0IGFueSB0aW1lLiB5b3UgYWxzbyBoYXZlIHRoZSBwb3NzaWJpbGl0eSB0byBtYW5hZ2UgeW91ciBvbGQgYXBwb2ludG1lbnRzLlwiLFxyXG4gICAgICAgICAgICBpdGVtNGhlYWRpbmc6IFwiRmluZCBkb2N0b3JcIixcclxuICAgICAgICAgICAgaXRlbTRib2R5OlwiV2l0aCB0aGUgbW9zdCBkaXZlcnNlIG5hdGlvbndpZGUgcHJhY3RpY2UsIGl04oCZcyBlYXN5IHRvIHNlbGVjdCBhIG1lZGljYWwgb3IgbWVudGFsIGhlYWx0aCBwcm92aWRlciB3aXRoIGEgYmFja2dyb3VuZCBhbmQgc3BlY2lhbHR5IHRoYXQgYXJlIGEgcGVyZmVjdCBmaXQgZm9yIHlvdS5cIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIG1lZGVjaW46IFwiQXJlIHlvdSBhIGhlYWx0aGNhcmUgcHJvZmVzc2lvbmFsP1wiLFxyXG4gICAgICAgIGNvbnRhY3Q6IFwiQ29udGFjdCB1c1wiLFxyXG4gICAgICAgIGNvbmVjdDogXCJsb2dpblwiLFxyXG4gICAgICAgIHJkdjogXCJNYW5hZ2UgbXkgYXBwb2ludG1lbnRzXCJcclxuICAgIH0sXHJcbiAgICBwcm9uYXZiYXI6IHtcclxuICAgICAgICBjb250YWN0OiBcIkNvbnRhY3Rlei1ub3VzXCIsXHJcbiAgICAgICAgZG9jdW1lbnQ6IFwiRG9jdW1lbnRzXCIsXHJcbiAgICAgICAgcmR2OiBcIlJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgZHJvcERvd24xOiBcIk15IGFjY291bnRcIixcclxuICAgICAgICBkcm9wRG93bjI6IFwibG9nIG91dFwiLFxyXG4gICAgfSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICAgIHBhcnRuZXI6IFwiQmVjb21lIGEgcGFydG5lciBkb2N0b3JcIixcclxuICAgICAgICBzaWduaW46IFwiUmVnaXN0ZXIgYXMgYSBwYXRpZW50XCIsXHJcbiAgICAgICAgZmFxOiBcIlF1ZXN0aW9ucyA/XCIsXHJcbiAgICAgICAgY29udGFjdDogXCJvbnRhY3QgdXMgXCIsXHJcbiAgICAgICAgYWRyZXNzOiBcIk1vcm9jY28gLSBDYXNhYmxhbmNhXCIsXHJcbiAgICAgICAgcG9saXRpcXVlOiBcIlByaXZhY3kgUG9saWN5XCIsXHJcbiAgICAgICAgY29uZGl0aW9uOiBcIlRlcm1zIG9mIHVzZVwiLFxyXG4gICAgICAgIGNvbmRpdGlvbjI6IFwiQ29uZGl0aW9ucyBkJ3V0aWxpc2F0aW9uIGR1IHNpdGUgRG9jdG9saXZlXCIsXHJcbiAgICAgICAgcmVnbGVfZGVfcjpcIlLDqGdsZXMgZGUgcsOpZsOpcmVuY2VtZW50XCIsXHJcbiAgICAgICAgbWVudGlvbnNfbGVnOlwiTWVudGlvbnMgbMOpZ2FsZXNcIixcclxuICAgICAgICBtZW50aW9uc19sZWc6XCJNZW50aW9ucyBsw6lnYWxlc1wiLFxyXG4gICAgICAgIENvb2tpZXM6XCJDb29raWVzXCIsXHJcbiAgICAgICAgcHJvdGVjdF9kb25uZXNfcGVyc286XCJwcm90ZWN0aW9uIGRlcyBkb25uw6llcyBwZXJzb25uZWxsZXNcIixcclxuICAgICAgICBnZXN0aW9uX2RlX2Nvb2tpZXM6XCJHZXN0aW9uIGRlIGNvb2tpZXMgZXQgY29uc2VudGVtZW50XCIsXHJcbiAgICB9LFxyXG4gICAgbmV3OntcclxuICAgICAgICBhbHJlYWR5SGF2ZTogXCJJIGFscmVhZHkgaGF2ZSBhIERvY3RvbGl2ZSBhY2NvdW50XCIsXHJcbiAgICAgICAgbmV3SW46IFwiTmV3IHRvIERvY3RvbGl2ZT9cIixcclxuICAgICAgICBzaWduaW46IFwibG9naW5cIixcclxuICAgICAgICBzaWdudXA6IFwiUmVnaXN0ZXJcIixcclxuICAgICAgICBhdXRoOlwiQXV0aGVudGljYXRpb25cIixcclxuICAgICAgICBlbWFpbExhYmVsOiBcIkUtbWFpbCBhZHJlc3NcIixcclxuICAgICAgICBwYXNzTGFiZWw6IFwiUGFzc3dvcmRcIixcclxuICAgICAgICBvbGRwYXNzTGFiZWw6IFwiT2xkIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgY29uZmlybXBhc3NMYWJlbDogXCJDb25maXJtIHBhc3N3b3JkXCIsXHJcbiAgICAgICAgZXJyb3I6IFwiSW5jb3JyZWN0IHBhc3N3b3JkIG9yIGVtYWlsIGFkZHJlc3MhXCIsXHJcbiAgICAgICAgbGFiZWxOb206IFwibGFzdCBuYW1lXCIsXHJcbiAgICAgICAgbGFiZWxQcmVub206IFwiZmlzcnQgbmFtZVwiLFxyXG4gICAgICAgIHBob25lTGFiZWw6IFwiUGhvbmUgbnVtYmVyXCIsXHJcbiAgICAgICAgcGhvbmVFcnJvcjpcIkVtYWlsIGFkZHJlc3MgbXVzdCBiZSBpbiBzdGFuZGFyZCBmb3JtYXRcIixcclxuICAgICAgICBsYWJlbEVtYWlsQzogXCJDb25maXJtIGVtYWlsIGFkZHJlc3NcIixcclxuICAgICAgICBsYWJlbEVtYWlsQ1A6IFwiQ29uZmlybSBlbWFpbCBhZGRyZXNzXCIsXHJcbiAgICAgICAgZXJyb3JTaWdudXA6IFwiVGhlIGluZm9ybWF0aW9uIGlzIGluY29ycmVjdFwiLFxyXG4gICAgICAgIHN1Y2Nlc3NTaWdudXA6IFwiUmVxdWVzdCBzZW50IHN1Y2Nlc3NmdWxseSBjaGVjayB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gY29uZmlybSB5b3VyIGFjY291bnRcIlxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHJlcG9ydDp7XHJcbiAgICAgICAgc2lnbnVwOiBcIkFkZFwiLFxyXG4gICAgICAgIGxhYmVsTm9tOiBcIlR5cGVcIixcclxuICAgICAgICBsYWJlbFByZW5vbTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIGxhYmVsRW5kOiBcIkFwcG9pbnRlbWVudCBoYXZlIGJlZW4gZG9uZSA/XCIsXHJcbiAgICAgICAgZXJyb3JTaWdudXA6IFwiQmFkIHJlcXVlc3RcIixcclxuICAgICAgICBzdWNjZXNzU2lnbnVwOiBcIllvdXIgcmVxdWVzdCBoYXZlIHN1Y2Nlc3NmdWxseSBhZGRlZCBhIHNvb24gcmVzcG9uc2Ugd2lsbCBiZSBzZW50IHRvIHlvdXIgYWRyZXNzIG1haWwgYWZ0ZXIgaGFuZGxpbmcgLi4uXCJcclxuICAgIH0sXHJcbiAgICBkb2N1bWVudHM6IHtcclxuICAgICAgICBhdWN1biA6XCJObyBkb2N1bWVudCBmb3VuZFwiLFxyXG4gICAgICAgIGRvbnRoYXZlOiBcIllvdSBoYXZlIG5vIHNoYXJlZCBkb2N1bWVudFwiLFxyXG4gICAgICAgIHNoYXJlZEJ5OiBcIkRvY3VtZW50IHNoYXJlIGJ5IDogXCIsXHJcbiAgICAgICAgc2hhcmVkV2l0aDogXCJEb2N1bWVudCB5b3UgaGF2ZSBzaGFyZWQgd2l0aDogXCIsXHJcbiAgICB9LFxyXG4gICAgYXBwb2ludG1lbnRzOiB7XHJcbiAgICAgICAgbm90QXV0aDogXCJZb3UgYXJlIG5vdCBhdXRoZW50aWNhdGVkIC4uLlwiLFxyXG4gICAgICAgIGFjY2VzczogXCJhY2Nlc3MgbXkgYWNjb3VudFwiLFxyXG4gICAgICAgIG5vQXBwOiBcIllvdSBkb24ndCBoYXZlIGFuIGFwcG9pbnRtZW50IHlldFwiLFxyXG4gICAgICAgIG15YXBwOiBcIk15IEFwcG9pbnRtZW50c1wiLFxyXG4gICAgICAgIG15SGlzdG9yeTogXCJNeSBhcHBvaW50bWVudCBoaXN0b3J5XCIsXHJcbiAgICAgICAgaGlzdG9yeTogXCJDb25zdWx0YXRpb24gaGlzdG9yeVwiLFxyXG4gICAgICAgIG5leHRBcHA6IFwiIE15IG5leHQgYXBwb2ludG1lbnRzXCIsXHJcbiAgICAgICAgdGFrZWFwcDogXCJNYWtlIGFuIGFwcG9pbnRtZW50XCIsXHJcbiAgICAgICAgY2FyZEFwcHM6IHtcclxuICAgICAgICAgICAgbGluayA6XCJTZWUgbW9yZSBkZXRhaWxzXCIgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZEFwcDoge1xyXG4gICAgICAgICAgICBsaW5rIDpcIlNlZSBtb3JlIGRldGFpbHNcIixcclxuICAgICAgICAgICAgYWNjZXNzSW5mb3M6IFwiQWNjZXNzIEluZm9cIixcclxuICAgICAgICAgICAgbm90U3BlY2lmaWVkOiBcIlRoZSBkb2N0b3IgaGFzIG5vdCB5ZXQgc3BlY2lmaWVkIHRoaXMgYWNjZXNzIGluZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgICAgIHNlY3JldGFyaWF0OiBcIkNvbnRhY3Qgb2YgdGhlIHNlY3JldGFyaWF0XCIsXHJcbiAgICAgICAgICAgIGNsaWNrOiBcIlBsZWFzZSBjbGljayBvbiB0aGUgYnV0dG9uIHRvIGFjY2VzcyB0aGUgdGVsZWNvbnN1bHRhdGlvbi4gWW91ciBkb2N0b3Igd2lsbCBhdXRvbWF0aWNhbGx5IG5vdGlmeSB5b3Ugb2YgeW91ciBwcmVzZW5jZS5cIixcclxuICAgICAgICAgICAgcmVqb2luZHJlOiBcIkpvaW4gdGhlIGNvbnN1bHRhdGlvblwiLFxyXG4gICAgICAgICAgICBkZXBsYWNlcjogXCJzaGlmdFwiLFxyXG4gICAgICAgICAgICBhbm51bGVyOiBcIiBDYW5jZWwgYXBwb2ludG1lbnQgXCIsXHJcbiAgICAgICAgICAgIHJldG91cjogXCJSZXR1cm5cIixcclxuICAgICAgICAgICAgY29uZmlybUNhbmNlbDogXCJDb25maXJtYXRpb24gb2YgYXBwb2ludG1lbnQgY2FuY2VsbGF0aW9uXCIsXHJcbiAgICAgICAgICAgIHdhbnRZb3U6IFwiV291bGQgeW91IGxpa2UgdG8gY2FuY2VsIHRoZSBhcHBvaW50bWVudCBvZlwiLFxyXG4gICAgICAgICAgICB3aXRoOiBcIndpdGggXCIsXHJcbiAgICAgICAgICAgIGRvY0F2YWk6IFwiUGh5c2ljaWFuIGF2YWlsYWJpbGl0eVwiLFxyXG4gICAgICAgICAgICBzZWxlY1R0aW1lOiAgXCJUaW1lIHNlbGVjdGVkIGZvciB0aGUgY29uc3VsdGF0aW9uIGlzXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwiQ29uZmlybSB0aGUgbmV3IHRpbWUgc2xvdFwiLFxyXG4gICAgICAgICAgICBzZWVJbmZvc1NoYXJlZDogXCJTZWUgdGhlIGluZm9ybWF0aW9uIHNoYXJlZCBpbiB0aGUgY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG4gICAgcmVzdWx0UmVzZWFyY2g6IHtcclxuICAgICAgICBub1Jlc2VhdWx0OiBcIlNvcnJ5LCB3ZSBjb3VsZG4ndCBmaW5kIGEgcHJvZmVzc2lvbmFsIGZvciB5b3VyIHNlYXJjaCAuLi4gXCIsXHJcbiAgICAgICAgdHJ5UmVzZWF1bHQ6IFwiVHJ5IHdpdGggb3RoZXIgc2VhcmNoIGNyaXRlcmlhLiBcIixcclxuICAgICAgICB3aWRnZXQ6IHtcclxuICAgICAgICAgICAgYXZhaWxhYmxlVmlkZW86IFwiQ29uc3VsdGF0aW9uIHZpZGVvIGF2YWlsYWJsZVwiLFxyXG4gICAgICAgICAgICBub3RTcGVjaWZpZWQ6IFwiVGhlIGRvY3RvciBoYXMgbm90IHlldCBzcGVjaWZpZWQgdGhpcyBhY2Nlc3MgaW5mb3JtYXRpb25cIixcclxuICAgICAgICAgICAgc2VlUHJvZmlsZTogXCJTZWUgcHJvZmlsZVwiLFxyXG4gICAgICAgICAgICBzZWVEaXNwbzogXCJDaGVjayBhdmFpbGFiaWxpdHlcIixcclxuICAgICAgICAgICAgZGlzcG86XCJkb2N0b3IncyBhdmFpbGFiaWxpdHlcIixcclxuICAgICAgICAgICAgdGltZVNlbGVjdGVkOiBcIlRpbWUgc2xvdCBzZWxlY3RlZCBmb3IgY29uc3VsdGF0aW9uIHN0YXJ0cyBhdFwiLFxyXG4gICAgICAgICAgICBjYW5jZWw6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgIGNvbmZpcm06IFwiQ29uZmlybSBhbiBhcHBvaW50bWVudFwiLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFsaWRhdGlvbjp7XHJcbiAgICAgICAgY29uZmlybTogXCJZb3VyIGFjY291bnQgaXMgdmFsaWRhdGVkXCIsXHJcbiAgICAgICAgZXhwaXJlZDogXCJZb3VyIGFjY291bnQgaXMgbm90IHlldCB2YWxpZGF0ZWQsIGl0IHNlZW1zIHRoYXQgdGhpcyBsaW5rIGhhcyBhbHJlYWR5IGV4cGlyZWRcIixcclxuICAgICAgICBnZW5lcmF0ZU5ldzogXCJHZW5lcmF0ZSBhIG5ldyBsaW5rXCIsXHJcbiAgICB9LFxyXG4gICAgYXBwb2ludG1lbnQ6e1xyXG4gICAgICAgIHN0ZXBzOiBbXCJDaG9pY2Ugb2YgcGF0dGVyblwiLCBcIklkZW50aWZpY2F0aW9uXCIsIFwiVmVyaWZpY2F0aW9uXCIsIFwiSW5mb3JtYXRpb24gY29uZmlybWF0aW9uXCIsIFwiSXQncyBvdmVyXCJdLFxyXG4gICAgICAgIHRha2VBcHA6IFwiTWFrZSBhbiBhcHBvaW50bWVudFwiLFxyXG4gICAgICAgIHN0ZXAxOiB7XHJcbiAgICAgICAgICAgIGxhYmVsMTogXCJUaXRsZTpcIixcclxuICAgICAgICAgICAgaW5wMTogXCJBcHBvaW50bWVudCB0aXRsZVwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjE6IFwiVGl0bGUgdG8gZGlzcGxheSBmb3IgdGhpcyBhcHBvaW50bWVudFwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwyOiBcIkRlc2NyaXB0aW9uIDpcIixcclxuICAgICAgICAgICAgaW5wMjogXCJkZXNjcmlwdGlvbiBkdSByZW5kZXotdm91c1wiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjI6IFwiQWRkaXRpb25hbCBpbmZvcm1hdGlvblwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwzOiBcIlR5cGUgb2YgY29uc3VsdGF0aW9uOlwiLFxyXG4gICAgICAgICAgICBpbnAzOiBcIlZpZGVvIGNvbnN1bHRhdGlvblwiLFxyXG4gICAgICAgICAgICBpbnA0OiBcIkNvbnN1bHRhdGlvbiBpbiBvZmZpY2UgcHJhY3RpY2VzIG9yIGluIGhvc3BpdGFsXCIsXHJcblxyXG4gICAgICAgICAgICBsYWJlbDQ6IFwiQ29uc3VsdGFudCBEb2N0b3I6XCIsXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhYmVsNTogXCJMb2NhdGlvbiA6IFwiLFxyXG4gICAgICAgICAgICB0ZWxlY29uc3VsdDogXCJSZW1vdGUgdmlkZW8gY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYWJlbDY6IFwiIFdoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhpcyBjb25zdWx0YXRpb246XCIsXHJcbiAgICAgICAgICAgIG1vdGlmOiBcIlJlYXNvbiBmb3IgY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgICAgIG5vTW90aWZzOiBcIk5vIHJlYXNvbiBzcGVjaWZpZWQgYnkgZG9jdG9yXCIsXHJcblxyXG4gICAgICAgICAgICBsYWJlbDc6IFwiRGF0ZSBhbmQgdGltZSBvZiBjb25zdWx0YXRpb246XCIsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDI6e1xyXG4gICAgICAgICAgICBuZXc6IFwiTmV3IHRvIERvY3RvbGl2ZSA/XCIsXHJcbiAgICAgICAgICAgIG9sZDogXCJKYWxyZWFkeSBoYXZlIGEgRG9jdG9saXZlIGFjY291bnRcIixcclxuICAgICAgICAgICAgc2lnbnVwOiBcIlJlZ2lzdGVyIG5vd1wiLFxyXG4gICAgICAgICAgICBzaWduaW46IFwibG9nIGluXCIsXHJcbiAgICAgICAgICAgIHRlbGVjb25zdWx0OiBcIlJlbW90ZSB2aWRlbyBjb25zdWx0YXRpb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXAzOntcclxuICAgICAgICAgICAgdGl0bGU6XCIgV2UgaGF2ZSBzZW50IGFuIGVtYWlsIHRvIHlvdXIgYWRkcmVzcyB0byB2YWxpZGF0ZSB5b3VyIGFjY291bnRcIixcclxuICAgICAgICAgICAgZ2VuZXJhdGU6IFwiU2VuZCBhbm90aGVyIGVtYWlsXCIsXHJcbiAgICAgICAgICAgIHJldmlyaWZ5OiBcIkkgdmVyaWZpZWQgbXkgYWNjb3VudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDQgOntcclxuICAgICAgICAgICAgdGl0bGU6IFwiQ29uZmlybWF0aW9uIG9mIHRoZSBjb25zdWx0YXRpb25cIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwiUmVtb3RlIHZpZGVvIGNvbnN1bHRhdGlvblwiLFxyXG4gICAgICAgICAgICBjb25maXJtOiBcIkNvbmZpcm0gdGhpcyBhcHBvaW50bWVudFwiLFxyXG4gICAgICAgICAgICByZW1pbmQ6IFwiIEJ5IGNvbmZpcm1pbmcgdGhpcyBhcHBvaW50bWVudCB5b3UgYWdyZWUgdG8gaG9ub3IgaXQuIFJlbWVtYmVyIHRvIGNhbmNlbCB0aGlzIG1lZXRpbmcgYXMgc29vbiBhcyBwb3NzaWJsZSBpbiB0aGUgZXZlbnQgb2YgYW4gdW5mb3Jlc2VlbiBldmVudFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwNTp7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIllvdXIgYXBwb2ludG1lbnQgd2FzIHJlZ2lzdGVyZWQuXCIsXHJcbiAgICAgICAgICAgIGdlcmVyOiBcIk1hbmFnZSB5b3VyIGFwcG9pbnRtZW50c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICBwcm9maWxQYWdlOiB7XHJcbiAgICAgICAgYWNjZXNzSW5mbzogXCJhY2Nlc3MgaW5mb3JtYXRpb25cIixcclxuICAgICAgICBzZWNyZXRhcmlhdDogXCJTZWNyZXRhcmlhdCBjb250YWN0XCIsXHJcbiAgICAgICAgYWJvdXQ6IFwiQWJvdXQgbWVcIixcclxuICAgICAgICBnZW5lcmFsOiBcIkdlbmVyYWwgcHJlc2VudGF0aW9uXCIsXHJcbiAgICAgICAgc3BlY2lhbGl0ZTogXCJTcGVjaWFsdHlcIixcclxuICAgICAgICBwYXJjb3VyOiBcIlBhdGhcIixcclxuICAgICAgICBkZXNjcmlwdGlvblBBcmM6IFwiRGVzY3JpcHRpb24gb2YgdGhlIGRvY3RvcidzIHBhdGhcIixcclxuICAgICAgICBmb3JtYXRpb246IFwiVHJhaW5pbmdcIixcclxuICAgICAgICBhd2FyZDogXCJBd2FyZHNcIixcclxuICAgICAgICBleHBlcmllbmNlOiBcImV4cGVyaWVuY2VcIixcclxuICAgICAgICBzZWVEaXNwbzogXCJTZWUgdGhlIGF2YWlsYWJsZSBzbG90c1wiLFxyXG4gICAgICAgIHNlZU1hcDogXCJTaG93IHBvc2l0aW9uIG9uIG1hcFwiLFxyXG4gICAgICAgIHRhcmlmOiBcIlByaWNlc1wiLFxyXG4gICAgICAgIGRldGFpbHM6IFwiUHJpY2UgZGV0YWlscyBmb3IgZWFjaCB0eXBlIG9mIGNvbnN1bHRhdGlvbi5cIixcclxuICAgICAgICBob25vcmU6IFwiVGhlc2UgZmVlcyBhcmUgY29tbXVuaWNhdGVkIHRvIHlvdSBmb3IgaW5mb3JtYXRpb24gb25seSBieSB0aGUgcHJhY3RpdGlvbmVyLiBUaGV5IG1heSB2YXJ5IGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiB0cmVhdG1lbnQgZmluYWxseSBwZXJmb3JtZWQgaW4gdGhlIG9mZmljZSwgdGhlIG51bWJlciBvZiBjb25zdWx0YXRpb25zIGFuZCB0aGUgYWRkaXRpb25hbCBwcm9jZWR1cmVzIHJlcXVpcmVkLiBJZiB0aGUgcHJpY2VzIGFyZSBleGNlZWRlZCwgdGhlIHByYWN0aXRpb25lciBtdXN0IHdhcm4gdGhlIHBhdGllbnQgYmVmb3JlaGFuZC5cIixcclxuICAgICAgICBzZXJ2aWNlOiBcIlNlcnZpY2UgLSBWaXNpdFwiLFxyXG4gICAgICAgIHByaXg6IFwiUHJpY2VcIixcclxuICAgICAgICBob3JhaXJlOiBcIkhvdXJzXCIsXHJcbiAgICAgICAgZGV0YWlsc0hldXJlczogXCJEZXRhaWwgb2Ygd29ya2luZyBob3VycyBmb3IgZWFjaCBkYXkgb2YgdGhlIHdlZWsuXCIsXHJcbiAgICAgICAgY29uZmlybTpcIkNvbmZpcm1cIixcclxuICAgICAgICBjYW5jZWw6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgdGltZVNlbGVjdGVkOiBcIlRpbWUgc2xvdCBzZWxlY3RlZCBmb3IgY29uc3VsdGF0aW9uIHN0YXJ0cyBhdFwiLFxyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb2ZpbGU6IHtcclxuICAgICAgICBoZWFkaW5nOiBcIsOJZGl0ZXIgdm90cmUgcHJvZmlsXCIsXHJcbiAgICAgICAgbm9tTGFiZWw6IFwiTm9tXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXIxOiBcIm1vZGlmaWVyIHZvdHJlIG5vbVwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyMjogXCJtb2RpZmllciB2b3RyZSBwcsOpbm9tXCIsXHJcbiAgICAgICAgcHJlbm9tTGFiZWw6IFwiUHLDqW5vbVwiLFxyXG4gICAgICAgIGVtYWlsTGFiZWw6IFwiQWRyZXNzZSBlbWFpbFwiLFxyXG4gICAgICAgIHBob25lTGFiZWw6XCJOdW3DqXJvIGRlIHTDqWzDqXBob25lXCIsXHJcbiAgICAgICAgY29uZmlybV9wYXNzd29yZDpcIkNvbmZpcm1lciBsZSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICBuZXdfcGFzc3dvcmQ6XCIgTm91dmVhdSBtb3QgZGUgcGFzc2VcIixcclxuICAgICAgICBvbGRfcGFzc3dvcmQ6IFwiTW90IGRlIHBhc3NlIFwiXHJcblxyXG4gICAgfSxcclxuICAgIGhvbWU6IHtcclxuICAgICAgICB0aXRsZTogXCJET0NUT0xJVkUgLSBSZW5kZXotdm91cyBjaGV6IHVuIG3DqWRlY2luIGVuIGxpZ25lXCIsXHJcbiAgICAgICAgaGVhZGluZzE6IFwiUmVjaGVyY2hlciB1biBtw6lkZWNpbiwgcHJlbmRyZSByZW5kZXotdm91c1wiLFxyXG4gICAgICAgIGhlYWRpbmcyOlwiRMOpY291dnJleiBsZXMgbWVpbGxldXJzIG3DqWRlY2lucywgY2xpbmlxdWVzIGV0IGjDtHBpdGF1eCBkZSBsYSB2aWxsZSBsYSBwbHVzIHByb2NoZSBkZSBjaGV6IHZvdXMuXCIsXHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICBzZWFyY2g6e1xyXG4gICAgICAgICAgICByZWNoZXJjaGVsYWJlbDogXCJNw6lkZWNpbiwgw6l0YWJsaXNzZW1lbnQsIHNww6ljaWFsaXTDqeKAplwiLFxyXG4gICAgICAgICAgICBub09wdGlvbjogXCJBdWN1biByw6lzdWx0YXQgbmUgY29ycmVzcG9uZFwiLFxyXG4gICAgICAgICAgICBub09wdGlvbjI6IFwiVGFwZXogcG91ciBvYnRlbmlyIHBsdXMgZGUgcsOpc3VsdGF0XCIsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IFwiQ2hhcmdlbWVudCBkZXMgbcOpZGVjaW4gb3Ugc3DDqWNpYWxpdMOpIHNpbWlsYWlyZVwiLFxyXG4gICAgICAgICAgICBjaXR5bGFiZWw6IFwiT8O5ID9cIixcclxuICAgICAgICAgICAgY2l0eUxvYWRpbmc6IFwiQ2hhcmdlbWVudCBkZXMgdmlsbGVzIHNpbWlsYWlyZVwiXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWJvdXQgOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiw4AgcHJvcG9zIGRlIG5vdXNcIixcclxuICAgICAgICAgICAgYm9keTpcIk5vdXMgc29tbWVzIHVuZSDDqXF1aXBlIHF1aSBhIHByaXMgZW4gY2hhcmdlIGRlIGNvbnRyaWJ1ZXIgw6AgcsOpc291ZHJlIGxlcyBwcm9ibMOobWVzIGF1eHF1ZWxzIG5vdXMgc29tbWVzIGNvbmZyb250w6lzIHF1b3RpZGllbm5lbWVudCBkYW5zIGxlIHNlY3RldXIgZGUgbGEgc2FudMOpIGV0IGRlIGZhY2lsaXRlciBsJ2FjY8OocyBhdXggc29pbnMgZGUgc2FudMOpLkdyw6JjZSDDoCBub3RyZSBwbGF0ZS1mb3JtZSBkZSB0w6lsw6ljb25zdWx0YXRpb24gbcOpZGljYWxlLCBkZXMgbWlsbGllcnMgZGVzIG1hcm9jYWlucyBwb3Vycm9udCBwYXNzZXIgdW5lIGNvbnN1bHRhdGlvbiBtw6lkaWNhbGUsIGRlIHByZW5kcmUgdW4gcmVuZGV6LXZvdXMgcGh5c2lxdWUgb3UgdmlkZW8gZXQgZGUgc3VpdnJlIGxldXIgw6l0YXQgZGUgc2FudMOpIGVuIGxpZ25lLkRlIHBsdXMsIGxlcyBwcm9mZXNzaW9ubmVscyBkZSBsYSBzYW50w6kgYXVyb250IHVuZSBtZWlsbGV1cmUgYWx0ZXJuYXRpdmUgYXUgdHJhdmFpbCBkZSBzZWNyw6l0YXJpYXQgZXQgdW4gYm9uIHN5c3TDqG1lIGRlIGdlc3Rpb24gZGVzIHJlbmRlei12b3VzLlwiLFxyXG4gICAgICAgICAgICBidXR0b246IFwiXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0xOlwiUmVuZGV6LXZvdXMgMjQvN1wiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMjpcIlJhcHBlbHMgYXV0b21hdGlxdWVzXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0zOlwiSGlzdG9yaXF1ZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2tpcCA6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCLDiXZpdGVyIGxhIHNhbGxlIGQnYXR0ZW50ZS5cIixcclxuICAgICAgICAgICAgc3ViSGVhZGluZzogXCJDb25zdWx0ZXIgdW4gbcOpZGVjaW5cIixcclxuICAgICAgICAgICAgYnV0dG9uOiBcIlByZW5kcmUgdW4gcmVuZGV6LXZvdXNcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTE6XCJGcmFpcyBzaW1wbGVzIGV0IGZpeGVzXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0yOlwiTcOpZGVjaW5zIHbDqXJpZmnDqXMgcsOpcG9uZGVudCBlbiA1IG1pbnV0ZXNcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTM6XCIxMDAlIHByaXbDqSBldCBjb25maWRlbnRpZWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXBzOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiUHJlbmV6IHJlbmRlei12b3VzIGVuIHF1ZWxxdWVzIGNsaWNzLlwiLFxyXG4gICAgICAgICAgICBzdWJIZWFkaW5nOiBcIkNvbnN1bHRlciB1biBtw6lkZWNpblwiLFxyXG4gICAgICAgICAgICBidXR0b246IFwiUHJlbmRyZSB1biByZW5kZXotdm91c1wiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMTpcIlRyb3V2ZXogdm90cmUgcHJvZmVzc2lvbm5lbCBkZSBzYW50w6lcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTEyOlwiMjUgMDAwKyBwcmF0aWNpZW5zIHBvdXIgNzAgc3DDqWNpYWxpdMOpcy4gRmlsdHJlciBwYXIgc3DDqWNpYWxpdMOpLCBkb21haW5lIGQnZXhwZXJ0aXNlLCBnw6lvbG9jYWxpc2F0aW9uLCBldGMuXCIsXHJcbiAgICAgICAgICAgIGJhbm5lcml0ZW0yOlwiQ2hvaXNpc3NleiB2b3RyZSB0ZW1wc1wiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMjI6XCJTw6lsZWN0aW9ubmV6IHZvdHJlIGNyw6luZWF1IGRhbnMgbCdhZ2VuZGEgZW4gdGVtcHMgcsOpZWwgZHUgcHJhdGljaWVuLlwiLFxyXG4gICAgICAgICAgICBiYW5uZXJpdGVtMzpcIlLDqXNlcnZleiB2b3RyZSByZW5kZXotdm91cyBlbiAxIG1pbnV0ZSFcIixcclxuICAgICAgICAgICAgYmFubmVyaXRlbTMyOlwiQWNjw6hzIDI0aCAvIDI0IGV0IDdqIC8gNyDDoCB2b3MgcmVuZGV6LXZvdXMgZGVwdWlzIHRvdXMgdm9zIGFwcGFyZWlscy4gQ29uZmlybWF0aW9uIGV0IHJhcHBlbCBwYXIgZS1tYWlsIGV0IFNNUy5cIixcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBkb3dsb2FkOiB7XHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiRMOpY291dnJleiBs4oCZYXBwbGljYXRpb24gbW9iaWxlIGRvY3RvbGl2ZVwiLFxyXG4gICAgICAgICAgICBzdWJIZWFkaW5nOiBcIlBvdXIgdW5lIGdlc3Rpb24gZW5jb3JlIHBsdXMgc2ltcGxlIGRlIHZvcyByZW5kZXotdm91cy5cIixcclxuICAgICAgICAgICAgYXBwOlwic3VyIGzigJlBcHAgU3RvcmUgXCIsXHJcbiAgICAgICAgICAgIHBsYXk6IFwic3VyIGxlIHBsYXkgU3RvcmUgXCJcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJ2aWNlcyA6IHtcclxuICAgICAgICAgICAgaGVhZGluZzogXCJhdSBzZXJ2aWNlIGRlIHZvdHJlIHNhbnTDqVwiLFxyXG4gICAgICAgICAgICBpdGVtMWhlYWRpbmc6IFwiQ29uc3VsdGVyIGRlcyBtw6lkZWNpbnMgZW4gbGlnbmVcIixcclxuICAgICAgICAgICAgaXRlbTFib2R5OlwiUGFybGV6IGF2ZWMgdW4gbcOpZGVjaW4gw6AgbCdhaWRlIGRlIG5vdHJlIGFwcGVsIHZpZMOpbyBoYXV0ZW1lbnQgc8OpY3VyaXPDqS4gTm90cmUgc2VydmljZSBkJ2FwcGVsIHZpZMOpbyB2b3VzIGFpZGUgw6AgcGFybGVyIGRlIHZvcyBwcm9ibMOobWVzIGRlIHNhbnTDqSBhdmVjIHVuIG3DqWRlY2luIGxvcnMgZCd1bmUgaW50ZXJhY3Rpb24gZW4gZGlyZWN0IGZhY2Ugw6AgZmFjZS5cIixcclxuICAgICAgICAgICAgaXRlbTJoZWFkaW5nOiBcIlN0b2NrZXIgdm9zIGRvY3VtZW50cyBtw6lkaWNhbGVcIixcclxuICAgICAgICAgICAgaXRlbTJib2R5OlwiVG91cyBsZXMgZG9jdW1lbnRzIHBhcnRhZ8OpcyBhdmVjIG91IHBhciB2b3MgbcOpZGVjaW5zIGxvcnMgZCd1bmUgdMOpbMOpY29uc3VsdGF0aW9uIHNlcm9udCBlbnJlZ2lzdHLDqXMgc3VyIGxhIHBsYXRlZm9ybWUgYXZlYyB1biBhY2PDqHMgdW5pcXVlIHBhciB2b3VzIGV0IGxlIHByYXRpY2llbi5cIixcclxuICAgICAgICAgICAgaXRlbTNoZWFkaW5nOiBcIkdlc3Rpb24gZGVzIHJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgICAgIGl0ZW0zYm9keTpcIkFwcsOpcyBhdm9pciB2YWxpZGVyIHVuIHJlbmRlei12b3VzLCB2b3VzIGF1cmV6IGxhIHBvc3NpYmlsaXTDqSBkZSBsZSBkw6lwbGFjZXIgb8O5IGJpZW4gbCdhbm51bGVyIMOgIG4naW1wb3J0ZSBxdWVsIG1vbWVudC4gdm91cyBhdmV6IGF1c3NpIGxhIHBvc3NpYmlsaXTDqSBkZSBnw6lyZXIgdm9zIGFuY2llbnMgcmVuZGV6LXZvdXMuXCIsXHJcbiAgICAgICAgICAgIGl0ZW00aGVhZGluZzogXCJUcm91dmVyIHZvdHJlIG3DqWRlY2luXCIsXHJcbiAgICAgICAgICAgIGl0ZW00Ym9keTpcIkF2ZWMgdW4gZ3JhbmQgbm9tYnJlIGRlIHByYXRpZW50IGRpdmVyc2lmacOpZSDDoCBsJ8OpY2hlbGxlIG5hdGlvbmFsZSwgaWwgZXN0IGZhY2lsZSBkZSBzw6lsZWN0aW9ubmVyIHVuIGZvdXJuaXNzZXVyIGRlIHNvaW5zIG3DqWRpY2F1eCBvdSBkZSBzYW50w6kgbWVudGFsZSBhdmVjIHVuZSBleHDDqXJpZW5jZSBldCB1bmUgc3DDqWNpYWxpdMOpIHF1aSB2b3VzIGNvbnZpZW5uZW50IHBhcmZhaXRlbWVudC5cIixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG5hdmJhcjoge1xyXG4gICAgICAgIG1lZGVjaW46IFwiVm91cyDDqnRlcyBwcm9mZXNzaW9ubmVsIGRlIHNhbnTDqSA/XCIsXHJcbiAgICAgICAgY29udGFjdDogXCJDb250YWN0ZXotbm91c1wiLFxyXG4gICAgICAgIGNvbmVjdDogXCJTZSBjb25uZWN0ZXJcIixcclxuICAgICAgICByZHY6IFwiR8OpcmVyIG1lcyBSRFZcIlxyXG4gICAgfSxcclxuICAgIHByb25hdmJhcjoge1xyXG4gICAgICAgIGNvbnRhY3Q6IFwiQ29udGFjdGV6LW5vdXNcIixcclxuICAgICAgICBkb2N1bWVudDogXCJEb2N1bWVudHNcIixcclxuICAgICAgICByZHY6IFwiUmVuZGV6LXZvdXNcIixcclxuICAgICAgICBkcm9wRG93bjE6IFwiTW9uIGNvbXB0ZVwiLFxyXG4gICAgICAgIGRyb3BEb3duMjogXCJTZSBkw6ljb25uZWN0ZXJcIixcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgICBwYXJ0bmVyOiBcIkRldmVuaXIgTcOpZGVjaW4gcGFydGVuYWlyZVwiLFxyXG4gICAgICAgIHNpZ25pbjogXCJTJ2luc2NyaXJlIGVuIHRhbnQgcXVlIHBhdGllbnRcIixcclxuICAgICAgICBmYXE6IFwiRGVzIHF1ZXN0aW9ucyA/XCIsXHJcbiAgICAgICAgY29udGFjdDogXCJOb3VzIENvbnRhY3RlciBcIixcclxuICAgICAgICBhZHJlc3M6IFwiTWFyb2MgLSBDYXNhYmxhbmNhXCIsXHJcbiAgICAgICAgcG9saXRpcXVlOiBcIlBvbGl0aXF1ZSBkZSBjb25maWRlbnRpYWxpdMOpXCIsXHJcbiAgICAgICAgY29uZGl0aW9uOiBcIkNvbmRpdGlvbnMgZCd1dGlsaXNhdGlvblwiLFxyXG4gICAgICAgIGNvbmRpdGlvbjI6IFwiQ29uZGl0aW9ucyBkJ3V0aWxpc2F0aW9uIGR1IHNpdGUgRG9jdG9saXZlXCIsXHJcbiAgICAgICAgcmVnbGVfZGVfcjpcIlLDqGdsZXMgZGUgcsOpZsOpcmVuY2VtZW50XCIsXHJcbiAgICAgICAgbWVudGlvbnNfbGVnOlwiTWVudGlvbnMgbMOpZ2FsZXNcIixcclxuICAgICAgICBtZW50aW9uc19sZWc6XCJNZW50aW9ucyBsw6lnYWxlc1wiLFxyXG4gICAgICAgIENvb2tpZXM6XCJDb29raWVzXCIsXHJcbiAgICAgICAgcHJvdGVjdF9kb25uZXNfcGVyc286XCJwcm90ZWN0aW9uIGRlcyBkb25uw6llcyBwZXJzb25uZWxsZXNcIixcclxuICAgICAgICBnZXN0aW9uX2RlX2Nvb2tpZXM6XCJHZXN0aW9uIGRlIGNvb2tpZXMgZXQgY29uc2VudGVtZW50XCIsXHJcblxyXG4gICAgfSxcclxuICAgIG5ldzp7XHJcbiAgICAgICAgYWxyZWFkeUhhdmU6IFwiSidhaSBkw6hqw6AgdW4gY29tcHRlIERvY3RvbGl2ZVwiLFxyXG4gICAgICAgIG5ld0luOiBcIk5vdXZlYXV4IHN1ciBEb2N0b2xpdmUgP1wiLFxyXG4gICAgICAgIHNpZ25pbjogXCJTZSBjb25uZWN0ZXJcIixcclxuICAgICAgICBzaWdudXA6IFwiIFMnaW5zY3JpcmVcIixcclxuICAgICAgICBhdXRoOlwiQXV0aGVudGlmaWNhdGlvblwiLFxyXG4gICAgICAgIGVtYWlsTGFiZWw6IFwiQWRyZXNzZSBlbWFpbFwiLFxyXG4gICAgICAgIHBhc3NMYWJlbDogXCJNb3QgZGUgcGFzc2VcIixcclxuICAgICAgICBvbGRwYXNzTGFiZWw6IFwiQW5jaWVuIG1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgIGNvbmZpcm1wYXNzTGFiZWw6IFwiQ29uZmlybWV6IGxlIG1vdCBkZSBwYXNzZVwiLFxyXG4gICAgICAgIGVycm9yOiBcIk1vdCBkZSBwYXNzZSBvdSBhZHJlc3NlIGVtYWlsIGluY29ycmVjdCFcIixcclxuICAgICAgICBsYWJlbE5vbTogXCJOb21cIixcclxuICAgICAgICBsYWJlbFByZW5vbTogXCJQcsOpbm9tXCIsXHJcbiAgICAgICAgcGhvbmVMYWJlbDogXCJOdW3DqXJvIGRlIHTDqWzDqXBob25lXCIsXHJcbiAgICAgICAgcGhvbmVFcnJvcjpcIkwnYWRyZXNzZSBlbWFpbCBlc3QgZG9pdCDDqnRyZSBhdSBmb3JtYXQgc3RhbmRhcmRcIixcclxuICAgICAgICBsYWJlbEVtYWlsQzogXCJDb25maXJtZXIgbCdhZHJlc3NlIGVtYWlsXCIsXHJcbiAgICAgICAgbGFiZWxFbWFpbENQOiBcIkNvbmZpcm1lciBsJ2FkcmVzc2UgZW1haWxcIixcclxuICAgICAgICBlcnJvclNpZ251cDogXCJMZXMgaW5mb3JtYXRpb24gc29udCBpbmNvcnJlY3RlXCIsXHJcbiAgICAgICAgc3VjY2Vzc1NpZ251cDogXCJEZW1hbmRlIGVudm95w6llIGF2ZWMgc3VjY8OpcyB2w6lyaWZpZXIgdm90cmUgYWRyZXNzZSDDqW1haWwgcG91ciBjb25maXJtZXIgdm90cmUgY29tcHRlXCJcclxuICAgIH0sXHJcbiAgICByZXBvcnQ6e1xyXG4gICAgICAgIHNpZ251cDogXCJBam91dGVyXCIsXHJcbiAgICAgICAgbGFiZWxOb206IFwiVHlwZVwiLFxyXG4gICAgICAgIGxhYmVsUHJlbm9tOiBcIkTDqXNjcmlwdGlvblwiLFxyXG4gICAgICAgIGxhYmVsRW5kOiBcIkxhIGNvbnN1bHRhdGlvbiDDoCBiaWVuIMOpdGFpdCB0w6lybWluw6lcIixcclxuICAgICAgICBlcnJvclNpZ251cDogXCJMZXMgaW5mb3JtYXRpb24gc29udCBpbmNvcnJlY3RlXCIsXHJcbiAgICAgICAgc3VjY2Vzc1NpZ251cDogXCJEZW1hbmRlIGVudm95w6llIGF2ZWMgc3VjY8OpcyB2w6lyaWZpZXIgdm90cmUgYWRyZXNzZSBwb3VyIHVuZSByw6lwb25zZSBwcsOpYWxhYmxlIGRhbnMgbGVzIHByb2NoYWlucyBqb3Vyc1wiXHJcbiAgICB9LFxyXG4gICAgZG9jdW1lbnRzOiB7XHJcbiAgICAgICAgYXVjdW4gOlwiQXVjdW4gZG9jdW1lbnQgdHJvdXbDqVwiLFxyXG4gICAgICAgIGRvbnRoYXZlOiBcIlZvdXMgbidhdmV6IGF1Y3VuIGRvY3VtZW50IHBhcnRhZ2VyXCIsXHJcbiAgICAgICAgc2hhcmVkQnk6IFwiIERvY3VtZW50IHBhcnRhZ2VyIGRlIGxhIHBhcnQgOiBcIixcclxuICAgICAgICBzaGFyZWRXaXRoOiBcIkRvY3VtZW50IHF1ZSB2b3VzIGF2ZXogcGFydGFnZXIgYXZlYyA6IFwiLFxyXG4gICAgfSxcclxuICAgIGFwcG9pbnRtZW50czoge1xyXG4gICAgICAgIG5vdEF1dGg6IFwiVm91cyBuJ8OqdGVzIHBhcyBhdXRoZW50aWZpw6kgLi4uXCIsXHJcbiAgICAgICAgYWNjZXNzOiBcIkFjY8OpZGVyIMOgIG1vbiBjb21wdGVcIixcclxuICAgICAgICBub0FwcDogXCIgdm91cyBuJ2F2ZXogcGFzIGVuY29yZSBkZSByZW5kZXotdm91cyBwb3VyIGwnaW5zdGFudFwiLFxyXG4gICAgICAgIG15YXBwOiBcIk1lcyBSZW5kZXotdm91c1wiLFxyXG4gICAgICAgIG15SGlzdG9yeTogXCJNb24gaGlzdG9yaXF1ZSBkZSByZW5kZXotdm91c1wiLFxyXG4gICAgICAgIGhpc3Rvcnk6IFwiSGlzdG9yaXF1ZSBkZXMgY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgbmV4dEFwcDogXCIgTWVzIHByb2NoYWluIHJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgdGFrZWFwcDogXCJQcmVuZHJlIHVuIHJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgY2FyZEFwcHM6IHtcclxuICAgICAgICAgICAgbGluayA6XCJWb2lyIHBsdXMgZGUgZMOpdGFpbHNcIiAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXJkQXBwOiB7XHJcbiAgICAgICAgICAgIGxpbmsgOlwiVm9pciBwbHVzIGRlIGTDqXRhaWxzXCIsXHJcbiAgICAgICAgICAgIGFjY2Vzc0luZm9zOiBcIkluZm9ybWF0aW9ucyBkJ2FjY8Ooc1wiLFxyXG4gICAgICAgICAgICBub3RTcGVjaWZpZWQ6IFwiTGUgbcOpZGVjaW4gbidhIHBhcyBlbmNvcmUgc3DDqWNpZmllciBjZXMgaW5mb3JtYXRpb24gZCdhY2PDqXNcIixcclxuICAgICAgICAgICAgc2VjcmV0YXJpYXQ6IFwiQ29udGFjdCBkdSBzZWNyw6l0YXJpYXRcIixcclxuICAgICAgICAgICAgY2xpY2s6IFwiTWVyY2kgZGUgY2xpcXVlciBzdXIgbGUgYm91dG9uIHBvdXIgYWNjw6lkZXIgw6AgbGEgdMOpbMOpY29uc3VsdGF0aW9uLiBWb3RyZSBtw6lkZWNpbiBzZXJhIGF1dG9tYXRpcXVlbWVudCBub3RpZmVyIGRlIHZvdHJlIHByw6lzZW5jZS5cIixcclxuICAgICAgICAgICAgcmVqb2luZHJlOiBcIlJlam9pbmRyZSBsYSBjb25zdWx0YXRpb25cIixcclxuICAgICAgICAgICAgZGVwbGFjZXI6IFwiRMOpcGxhY2VyXCIsXHJcbiAgICAgICAgICAgIGFubnVsZXI6IFwiIEFubnVsZXIgbGUgcmVuZGV6LXZvdXMgXCIsXHJcbiAgICAgICAgICAgIHJldG91cjogXCJSZXRvdXJcIixcclxuICAgICAgICAgICAgY29uZmlybUNhbmNlbDogXCJDb25maXJtYXRpb24gZCdhbm51bGF0aW9uIGR1IHJlbmRlei12b3VzXCIsXHJcbiAgICAgICAgICAgIHdhbnRZb3U6IFwiU291aGFpdGV6LXZvdXMgYW5udWxlciBsZSByZW5kZXotdm91cyBkdVwiLFxyXG4gICAgICAgICAgICB3aXRoOiBcImF2ZWMgXCIsXHJcbiAgICAgICAgICAgIGRvY0F2YWk6IFwiRGlzcG9uaWJpbGl0w6kgZHUgbcOpZGVjaW5cIixcclxuICAgICAgICAgICAgc2VsZWNUdGltZTogIFwiVGVtcHMgc8OpbMOpY3Rpb25uw6kgcG91ciBsYSBjb25zdWx0YXRpb24gZXN0IFwiLFxyXG4gICAgICAgICAgICBjb25maXJtOiBcIkNvbmZpcm1lciBsZSBub3V2ZWF1IGNyw6luZWF1XCIsXHJcbiAgICAgICAgICAgIHNlZUluZm9zU2hhcmVkOiBcIlZvaXIgbGVzIGluZm9ybWF0aW9uIHBhcnRhZ2VyIGRhbnMgbGEgY29uc3VsdGF0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICByZXN1bHRSZXNlYXJjaDoge1xyXG4gICAgICAgIG5vUmVzZWF1bHQ6IFwiRMOpc29sw6ksIG5vdXMgbidhdm9ucyB0cm91dsOpIGF1Y3VuIHByb2Zlc3Npb25uZWwgcG91ciB2b3RyZSByZWNoZXJjaGXigKYgXCIsXHJcbiAgICAgICAgdHJ5UmVzZWF1bHQ6IFwiRXNzYXlleiBhdmVjIGQnYXV0cmVzIGNyaXTDqHJlcyBkZSByZWNoZXJjaGUuIFwiLFxyXG4gICAgICAgIHdpZGdldDoge1xyXG4gICAgICAgICAgICBhdmFpbGFibGV2aWTDqW86IFwiQ29uc3VsdGF0aW9uIHZpZMOpbyBkaXNwb25pYmxlXCIsXHJcbiAgICAgICAgICAgIG5vdFNwZWNpZmllZDogXCJMZSBtw6lkZWNpbiBuJ2EgcGFzIGVuY29yZSBzcMOpY2lmaWVyIGNlcyBpbmZvcm1hdGlvbiBkJ2FjY8Opc1wiLFxyXG4gICAgICAgICAgICBzZWVQcm9maWxlOiBcIlZvaXIgbGUgcHJvZmlsZVwiLFxyXG4gICAgICAgICAgICBzZWVEaXNwbzogXCJWb2lyIGxhIGRpc3BvbmliaWxpdMOpXCIsXHJcbiAgICAgICAgICAgIGRpc3BvOlwiZGlzcG9uaWJpbGl0w6kgZHUgbcOpZGVjaW5cIixcclxuICAgICAgICAgICAgdGltZVNlbGVjdGVkOiBcIkNyw6luZWF1IHPDqWzDqWN0aW9ubsOpIHBvdXIgbGEgY29uc3VsdGF0aW9uIGNvbW1lbmNlIMOgIFwiLFxyXG4gICAgICAgICAgICBjYW5jZWw6IFwiQW5udWxlclwiLFxyXG4gICAgICAgICAgICBjb25maXJtOiBcIlByZW5kcmUgcmVuZGV6LXZvdXNcIixcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGlvbjp7XHJcbiAgICAgICAgY29uZmlybTogXCJWb3RyZSBjb21wdGUgZXN0IHZhbGlkw6lcIixcclxuICAgICAgICBleHBpcmVkOiBcIlZvdHJlIGNvbXB0ZSBuJ2VzdCBwYXMgZW5jb3JlIHZhbGlkw6ksIGlsIHNlbWJsZSBxdWUgY2UgbGllbiBlc3QgZMOpamEgZXhwaXJlclwiLFxyXG4gICAgICAgIGdlbmVyYXRlTmV3OiBcIkfDqW7DqXJlciB1biBub3V2ZWF1IGxpZW5cIixcclxuICAgIH0sXHJcbiAgICBhcHBvaW50bWVudDp7XHJcbiAgICAgICAgc3RlcHM6IFtcIkNob2l4IGR1IG1vdGlmXCIsIFwiSWRlbnRpZmljYXRpb25cIiwgXCJWw6lyaWZpY2F0aW9uXCIsIFwiQ29uZmlybWF0aW9uIGRlcyBpbmZvcm1hdGlvblwiLCBcIkMnZXN0IHRlcm1pbsOpXCJdLFxyXG4gICAgICAgIHRha2VBcHA6IFwiUHJlbmRyZSB1biByZW5kZXotdm91c1wiLFxyXG4gICAgICAgIHN0ZXAxOiB7XHJcbiAgICAgICAgICAgIGxhYmVsMTogXCJUaXRyZSA6XCIsXHJcbiAgICAgICAgICAgIGlucDE6IFwiVGl0cmUgZHUgcmVuZGV6LXZvdXNcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIxOiBcIlRpdHJlIMOgIGFmZmljaGVyIHBvdXIgY2UgcmVuZGV6LXZvdXNcIixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxhYmVsMjogXCJEZXNjcmlwdGlvbiA6XCIsXHJcbiAgICAgICAgICAgIGlucDI6IFwiZGVzY3JpcHRpb24gZHUgcmVuZGV6LXZvdXNcIixcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXIyOiBcIkluZm9ybWF0aW9uIHN1cHBsw6ltZW50YWlyZVwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWwzOiBcIlR5cGUgZGUgY29uc3VsdGF0aW9uIDpcIixcclxuICAgICAgICAgICAgaW5wMzogXCJDb25zdWx0YXRpb24gdmlkw6lvXCIsXHJcbiAgICAgICAgICAgIGlucDQ6IFwiQ29uc3VsdGF0aW9uIGF1IGNhYmluZXRcIixcclxuXHJcbiAgICAgICAgICAgIGxhYmVsNDogXCJNw6lkZWNpbiBjb25zdWx0YW50IDpcIixcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWw1OiBcIkxpZXUgOiBcIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwiQ29uc3VsdGF0aW9uIHZpZMOpbyDDoCBkaXN0YW5jZVwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGFiZWw2OiBcIiBRdWVsbGUgZXN0IGxlIG1vdGlmIGRlIGNldHRlIGNvbnN1bHRhdGlvbiA6XCIsXHJcbiAgICAgICAgICAgIG1vdGlmOiBcIk1vdGlmIGRlIGNvbnN1bHRhdGlvblwiLFxyXG4gICAgICAgICAgICBub01vdGlmczogXCJBdWN1biBtb3RpZiBzcMOpY2lmacOpIHBhciBsZSBtw6lkZWNpblwiLFxyXG5cclxuICAgICAgICAgICAgbGFiZWw3OiBcIkRhdGUgZXQgaGV1cmUgZHUgY29uc3VsdGF0aW9uIDogXCIsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDI6e1xyXG4gICAgICAgICAgICBuZXc6IFwiTm91dmVhdXggc3VyIERvY3RvbGl2ZSA/XCIsXHJcbiAgICAgICAgICAgIG9sZDogXCJKJ2FpIGTDqGrDoCB1biBjb21wdGUgRG9jdG9saXZlXCIsXHJcbiAgICAgICAgICAgIHNpZ251cDogXCJTJ2luc2NyaXJlXCIsXHJcbiAgICAgICAgICAgIHNpZ25pbjogXCJTZSBjb25uZWN0ZXJcIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwiQ29uc3VsdGF0aW9uIHZpZMOpbyDDoCBkaXN0YW5jZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDM6e1xyXG4gICAgICAgICAgICB0aXRsZTpcIk5vdXMgYXZvbnMgZW52b3nDqSB1biBtYWlsIMOgIHZvdHJlIGFkcmVzc2UgcG91ciB2YWxpZGVyIHZvdHJlIGNvbXB0ZVwiLFxyXG4gICAgICAgICAgICBnZW5lcmF0ZTogXCJFbnZveWVyIGF1dHJlIGVtYWlsXCIsXHJcbiAgICAgICAgICAgIHJldmlyaWZ5OiBcIkonYWkgdsOpcmlmacOpIG1vbiBjb21wdGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXA0IDp7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm1hdGlvbiBkZSBsYSBjb25zdWx0YXRpb25cIixcclxuICAgICAgICAgICAgdGVsZWNvbnN1bHQ6IFwiQ29uc3VsdGF0aW9uIHZpZMOpbyDDoCBkaXN0YW5jZVwiLFxyXG4gICAgICAgICAgICBjb25maXJtOiBcIkNvbmZpcm1lciBsZSByZW5kZXotdm91cyBcIixcclxuICAgICAgICAgICAgcmVtaW5kOiBcIiBFbiBjb25maXJtYW50IGNlIHJlbmRlei12b3VzIHZvdXMgdm91cyBlbmdhZ2V6IMOgIGwnaG9ub3Jlci4gUGVuc2V6IGJpZW4gw6AgYW51bGVyIGNlIHJlbmRlei12b3VzIGxlIHBsdXTDtHQgcG9zc2libGUgZW4gY2FzIGQnaW1wcsOpdnVcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDU6e1xyXG4gICAgICAgICAgICB0aXRsZTogXCIgVm90cmUgcmVuZGV6LXZvdXMgw6AgYmllbiDDqXRhaXQgZW5yZWdpc3RyZXIuXCIsXHJcbiAgICAgICAgICAgIGdlcmVyOiBcIkfDqXJlciB2b3MgcmVuZGV6LXZvdXNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgcHJvZmlsUGFnZToge1xyXG4gICAgICAgIGFjY2Vzc0luZm86IFwiaW5mb3JtYXRpb25zIGQnYWNjw6hzXCIsXHJcbiAgICAgICAgc2VjcmV0YXJpYXQ6IFwiQ29udGFjdCBkdSBzZWNyw6l0YXJpYXRcIixcclxuICAgICAgICBhYm91dDogXCLDgCBwcm9wb3MgZGUgbW9pXCIsXHJcbiAgICAgICAgZ2VuZXJhbDogXCJQcsOpc2VudGF0aW9uIGfDqW7DqXJhbGVcIixcclxuICAgICAgICBzcGVjaWFsaXRlOiBcIlNww6ljaWFsaXTDqVwiLFxyXG4gICAgICAgIHBhcmNvdXI6IFwiUGFyY291cnNcIixcclxuICAgICAgICBkZXNjcmlwdGlvblBBcmM6IFwiRGVzY3JpcHRpb24gZHUgcGFyY291cnMgZHUgbcOpZGVjaW5cIixcclxuICAgICAgICBmb3JtYXRpb246IFwiRm9ybWF0aW9uXCIsXHJcbiAgICAgICAgYXdhcmQ6IFwiUsOpY29tcGVuc2VzXCIsXHJcbiAgICAgICAgZXhwZXJpZW5jZTogXCJleHDDqXJpZW5jZVwiLFxyXG4gICAgICAgIHNlZURpc3BvOiBcIkFmZmljaGVyIGxhIGRpc3BvbmliaWxpdMOpXCIsXHJcbiAgICAgICAgc2VlTWFwOiBcIkFmZmljaGVyIGxhIHBvc2l0aW9uIMOgIGxhIG1hcFwiLFxyXG4gICAgICAgIHRhcmlmOiBcIlRhcmlmc1wiLFxyXG4gICAgICAgIGRldGFpbHM6IFwiRMOpdGFpbCBkZXMgcHJpeCBkZSBjaGFxdWUgdHlwZSBkZSBjb25zdWx0YXRpb24uXCIsXHJcbiAgICAgICAgaG9ub3JlOiBcIkNlcyBob25vcmFpcmVzIHZvdXMgc29udCBjb21tdW5pcXXDqXMgw6AgdGl0cmUgaW5kaWNhdGlmIHBhciBsZSBwcmF0aWNpZW4uIElscyBwZXV2ZW50IHZhcmllciBzZWxvbiBsZSB0eXBlIGRlIHNvaW5zIGZpbmFsZW1lbnQgcsOpYWxpc8OpcyBlbiBjYWJpbmV0LCBsZSBub21icmUgZGUgY29uc3VsdGF0aW9ucyBldCBsZXMgYWN0ZXMgYWRkaXRpb25uZWxzIG7DqWNlc3NhaXJlcy4gRW4gY2FzIGRlIGTDqXBhc3NlbWVudCBkZXMgdGFyaWZzLCBsZSBwcmF0aWNpZW4gZG9pdCBlbiBhdmVydGlyIHByw6lhbGFibGVtZW50IGxlIHBhdGllbnQuXCIsXHJcbiAgICAgICAgc2VydmljZTogXCJTZXJ2aWNlIC0gVmlzaXRlXCIsXHJcbiAgICAgICAgcHJpeDogXCJQcml4XCIsXHJcbiAgICAgICAgaG9yYWlyZTogXCJIb3JhaXJlc1wiLFxyXG4gICAgICAgIGRldGFpbHNIZXVyZXM6IFwiRMOpdGFpbCBkZXMgaGV1cnMgZGUgdHJhdmFpbCBwb3VyIGNoYXF1ZSBqb3VyIGRlIGxhIHNlbWFpbmUuXCIsXHJcbiAgICAgICAgY29uZmlybTpcIkNvbmZpcm1lclwiLFxyXG4gICAgICAgIGNhbmNlbDogXCJhbm51bGVyXCIsXHJcbiAgICAgICAgdGltZVNlbGVjdGVkOiBcIkNyw6luZWF1IHPDqWzDqWN0aW9ubsOpIHBvdXIgbGEgY29uc3VsdGF0aW9uIGNvbW1lbmNlIMOgIFwiLFxyXG5cclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID0gZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgYXMsXG4gICAgICBjdXJMb2NhbGUsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlkbGVUaW1lb3V0PFQ+KG1zOiBudW1iZXIsIGVycjogRXJyb3IpOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChfcmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWplY3QoZXJyKSwgbXMpKVxuICApXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgaWRsZVRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gICAgKSxcbiAgXSlcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBpZGxlVGltZW91dDxSb3V0ZUxvYWRlckVudHJ5PihcbiAgICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICAgIG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSlcbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7XG4gICAgICAgICAgICBkZXRlY3RlZERvbWFpbi5kb21haW5cbiAgICAgICAgICB9JHthZGRCYXNlUGF0aChcbiAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGAvJHt0aGlzLmxvY2FsZX1gXG4gICAgICAgICAgICB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nXG4gICAgICAgICAgKX1gXG4gICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG4gICAgY29uc3Qgcm91dGVQcm9wcyA9IHsgc2hhbGxvdyB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcylcbiAgICB9XG5cbiAgICBhcyA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbClcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgbGV0IHBhZ2VzOiBhbnksIHJld3JpdGVzOiBhbnlcbiAgICB0cnkge1xuICAgICAgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwsIGFzOiBuZXdBcyB9ID0gcHJlcGFyZVVybEFzKFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGVcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0JylcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCdcbiAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgeyBzaGFsbG93OiBmYWxzZSB9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZVxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGFyc2VkSHJlZi5wYXRobmFtZSEpXG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcywgZmFsc2UpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzUGF0aCxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2Fzc2V0cy9qc3MvUGF0aWVudEhvbWVTdHlsZS5qc1wiO1xyXG5cclxuXHJcbmltcG9ydCB7QmlDaGV2cm9uUmlnaHQsIEJpQ2hlY2ssIEJpU2VhcmNoLCBCaUNhbGVuZGFyfSBmcm9tICdyZWFjdC1pY29ucy9iaSdcclxuXHJcblxyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vLi4vY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgY29udGVudEZSIGZyb20gJy4vLi4vY29udGVudEZSJ1xyXG5pbXBvcnQgY29udGVudEVOIGZyb20gJy4vLi4vY29udGVudEVOJ1xyXG5pbXBvcnQgY29udGVudEFSIGZyb20gJy4vLi4vY29udGVudEFSJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7bG9jYWxlfSA9IHJvdXRlcjtcclxuXHJcbiAgY29uc3QgY29udGVudCA9IGxvY2FsZSA9PT0gXCJhclwiID8gY29udGVudEFSLmhvbWUgOiBsb2NhbGUgPT09IFwiZW5cIiA/IGNvbnRlbnRFTi5ob21lIDogY29udGVudEZSLmhvbWU7XHJcblxyXG4gIGNvbnN0IFtzY3JlZW5XaWR0aCwgc2V0U2NyZWVuV2lkdGhdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTaXplKCkge1xyXG4gICAgICAgICAgc2V0U2NyZWVuV2lkdGgod2luZG93LmlubmVyV2lkdGgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTaXplKTtcclxuICAgICAgdXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTaXplKVxyXG4gICAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2ID5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPiAge2NvbnRlbnQudGl0bGV9IDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxIZWFkZXIgY29udGVudD0ge2NvbnRlbnR9IGxvY2FsZT17bG9jYWxlfSBzY3JlZW5XaWR0aD17c2NyZWVuV2lkdGh9IC8+XHJcblxyXG4gICAgICAgIDxBYm91dFVzIGNvbnRlbnQ9IHtjb250ZW50LmFib3V0fSBzY3JlZW5XaWR0aD17c2NyZWVuV2lkdGh9IC8+XHJcbiAgICAgICAgPFNraXBXYWl0aW5nIGNvbnRlbnQ9IHtjb250ZW50LnNraXB9IHNjcmVlbldpZHRoPXtzY3JlZW5XaWR0aH0gLz5cclxuICAgICAgICA8U2VydmljZXMgY29udGVudD0ge2NvbnRlbnQuc2VydmljZXN9IHNjcmVlbldpZHRoPXtzY3JlZW5XaWR0aH0gIC8+XHJcbiAgICAgICAgPFN0ZXBzIGNvbnRlbnQ9IHtjb250ZW50LnN0ZXBzfSBzY3JlZW5XaWR0aD17c2NyZWVuV2lkdGh9IC8+XHJcbiAgICAgICAgey8qIDxEb3dubG9hZEFyZWEgY29udGVudD0ge2NvbnRlbnQuZG93bG9hZH0gc2NyZWVuV2lkdGg9e3NjcmVlbldpZHRofSAvPiAqL31cclxuICAgICBcclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHt9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICAgIH1cclxuICB9XHJcblxyXG5mdW5jdGlvbiBEb3dubG9hZEFyZWEoe2NvbnRlbnR9KSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpOyAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkb3dsb2FkX2FyZWEgcGFkZGluZ190b3BcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID17Y2xhc3Nlcy5kb3dubG9hZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImRvd25sb2FkZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPiB7Y29udGVudC5oZWFkaW5nfSA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHtjb250ZW50LnN1YkhlYWRpbmd9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImFwcHN0b3JlXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwc3RvcmUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwc3RvcmUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvaW1hZ2UvYXBwc3RvcmUucG5nJ30gaGVpZ2h0PSBcIjMwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0yXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50LmFwcH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCaUNoZXZyb25SaWdodCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBzdG9yZSBtdC0zXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uZG9jdG9saXZlXCIgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiIzAwMFwifX0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwc3RvcmUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwc3RvcmUtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eycvaW1hZ2UvcGxheXN0b3JlLnBuZyd9ICBoZWlnaHQ9IFwiMzBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50LnBsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCaUNoZXZyb25SaWdodCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9IFwiNlwiIGNsYXNzTmFtZT1cImRvd25sb2FkZXItaW1hZ2UgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXIgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWFnZS9waG9uZWFwcC5wbmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuZnVuY3Rpb24gSGVhZGVyICh7Y29udGVudCwgbG9jYWxlfSl7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9IHtjbGFzc2VzLmhlYWRlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ge2NsYXNzZXMuYmFrZ3JvdWRDb250YWluZXJ9IHN0eWxlPXtsb2NhbGUgPT09IFwiYXJcIiA/IHtiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltYWdlL0JnSG9tZS5zdmcpYCwgYmFja2dyb3VuZFBvc2l0aW9uOiBcImJvdHRvbSBsZWZ0XCIsIHRleHRBbGlnbjogXCJyaWdodFwifSA6IHtiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltYWdlL0JnSG9tZS5zdmcpYCwgYmFja2dyb3VuZFBvc2l0aW9uOiBcImJvdHRvbSByaWdodFwifX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIiBpZD1cInJlY2hlcmNoZS1tZWRlY2luXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLmgxfT4ge2NvbnRlbnQuaGVhZGluZzF9IDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMn0+IHtjb250ZW50LmhlYWRpbmcyfSA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoIGNvbnRlbnQ9e2NvbnRlbnQuc2VhcmNofSBsb2NhbGU9e2xvY2FsZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBBYm91dFVzKHtjb250ZW50fSApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWJvdXRfdXMgcGFkZGluZ190b3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfdXNfdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2NvbnRlbnQuaGVhZGluZ308L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvbnRlbnQuYm9keX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJidG5fMiBcIiBocmVmPVwiI1wiPntjb250ZW50LmJ1dHRvbn08L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGVfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UvaG9zcGl0YWwucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NvbnRlbnQuYmFubmVyaXRlbTF9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGVfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UvcmVtaW5kZXIucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NvbnRlbnQuYmFubmVyaXRlbTJ9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGVfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UvY2xvY2sucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NvbnRlbnQuYmFubmVyaXRlbTN9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0X3VzX2ltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZS9Hcm91cC5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBTa2lwV2FpdGluZyA9ICh7Y29udGVudH0pID0+IChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNraXAtd2FpdGluZyBwYWRkaW5nX3RvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRfdXNfdGV4dCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e2NvbnRlbnQuaGVhZGluZ317Jy4uLid9e2NvbnRlbnQuc3ViSGVhZGluZ308L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJib251c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiA8QmlDaGVjayBjb2xvcj1cIiNGMjdCNjhcIiBzaXplPVwiMzBcIiAvPiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHtjb250ZW50LmJhbm5lcml0ZW0xfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJvbnVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IDxCaUNoZWNrIGNvbG9yPVwiI0YyN0I2OFwiIHNpemU9XCIzMFwiIC8+IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge2NvbnRlbnQuYmFubmVyaXRlbTJ9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYm9udXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gPEJpQ2hlY2sgY29sb3I9XCIjRjI3QjY4XCIgc2l6ZT1cIjMwXCIgLz4gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7Y29udGVudC5iYW5uZXJpdGVtM30gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuXzIgYnRuIGJ0bi1wcmltYXJ5XCIgaHJlZj1cIiNyZWNoZXJjaGUtbWVkZWNpblwiPntjb250ZW50LmJ1dHRvbn08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dF91c19pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2UvZG9jdG9yb2hvbmUucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbilcclxuXHJcbmZ1bmN0aW9uIFN0ZXBzICh7Y29udGVudH0pe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24taG9tZS1ob3ctd29ya3MgcGFkZGluZ190b3BcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImhlYWRpbmcgdGV4dC1jZW50ZXJcIj4ge2NvbnRlbnQuaGVhZGluZ30gPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJody1hcmVhXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJody1ib3ggaHctYm94LS1tdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHctYm94X19pY29uXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1zZWFyY2hcIj4gPEJpU2VhcmNoIC8+IDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaHctYm94X190aXRsZVwiPiB7Y29udGVudC5iYW5uZXJpdGVtMX0gPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJody1ib3hfX3RleHRcIj4ge2NvbnRlbnQuYmFubmVyaXRlbTEyfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJody1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh3LWJveF9faWNvblwiPiA8c3BhbiBjbGFzc05hbWU9XCJpY29uLXN2ZyB2YS1taWRkbGUtaW5saW5lXCI+IDxCaUNhbGVuZGFyIC8+IDwvc3Bhbj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImh3LWJveF9fdGl0bGVcIj4ge2NvbnRlbnQuYmFubmVyaXRlbTJ9IDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaHctYm94X190ZXh0XCI+e2NvbnRlbnQuYmFubmVyaXRlbTIyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh3LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHctYm94X19pY29uXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1mYXQtY2hlY2tcIj48QmlDaGVjayAvPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaHctYm94X190aXRsZVwiPiB7Y29udGVudC5iYW5uZXJpdGVtM30gPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJody1ib3hfX3RleHRcIj4ge2NvbnRlbnQuYmFubmVyaXRlbTMyfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBTZXJ2aWNlcyA9ICh7Y29udGVudH0pID0+IChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZlYXR1cmVfcGFydFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fdGl0dGxlIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57J0RvY3RvbGl2ZTonfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ge2NvbnRlbnQuaGVhZGluZ30gPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlX2ZlYXR1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGVfZmVhdHVyZV9wYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UvT25saW5lQ29uc3VsdGluZy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiB7Y29udGVudC5pdGVtMWJvZHl9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZV9mZWF0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlX2ZlYXR1cmVfcGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlL3NlY3VyaXR5LWRvYy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y29udGVudC5pdGVtMmJvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGVfZmVhdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZV9mZWF0dXJlX3BhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2UvYWR2LWluZm8ucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y29udGVudC5pdGVtM2JvZHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGVfZmVhdHVyZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZV9mZWF0dXJlX3BhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZS9Tb2lucy5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb250ZW50Lml0ZW00Ym9keX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgZG9jdG9saXZlLWNlc3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTEyIFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzdGFydCc+RG9jdG9saXZlIGPigJllc3QuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1zbS0xMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PjEwIE1pbGxpZXJzPC9oND5cclxuICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3N0YXJ0Mic+cGF0aWVudHM8L3NwYW4+XHJcbiAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+IDIzIDAwMCA8L2g0PlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3RhcnQyJz5wZXJzb25uZWxzIGRlIHNhbnTDqTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tMTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoND4gNTAlIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzdGFydDInPmNvbnN1bHRhdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbXktY29uZi1jc3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtc20tMTIgXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+Vm90cmUgc2FudMOpLiBWb3MgZG9ubsOpZXMuPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPkxhIGNvbmZpZGVudGlhbGl0w6kgZGUgdm9zIGluZm9ybWF0aW9ucyBwZXJzb25uZWxsZXMgZXN0IHVuZSBwcsOpaW9yaXTDqSBhYnNvbHVlIHBvdXIgRG9jdG9saXZlIGV0IGd1aWRlIG5vdHJlIGFjdGlvbiBhdSBxdW90aWRpZW4uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdlbmdhZ2VtZW50Jz4gRMOpY291dnJpciBub3MgZW5nYWdlbWVudHM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTEyIHRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2UvcGFkbG9jay1pbmplY3QucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBteS1jb25mLWNzc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IGNvbC1zbS0xMiBcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5Ew6ljb3V2cmV6IGzigJlhcHBsaWNhdGlvbiBtb2JpbGUgRG9jdG9saXZlPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPlBvdXIgYWNjw6lkZXIgw6Agdm9zIHByYXRpY2llbnMgw6AgdG91dCBtb21lbnQsIG/DuSBxdWUgdm91cyBzb3llei48L3A+XHJcbiAgICAgICAgICAgICAgICA8YT48aW1nIHNyYz1cIi9pbWFnZS9wbGF5LXMucG5nXCIgYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8YT48aW1nIHNyYz1cIi9pbWFnZS9hcHAtcy5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtc20tMTIgdGV4dC1jZW50ZXIgXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZS9jaGFyYWN0ZXItLWluamVjdC02Mi5wbmdcIiBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuKSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL21kXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmZldGNoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=