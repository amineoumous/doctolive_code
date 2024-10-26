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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/XLc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("j3R+");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// components/Review.js or components/Review.jsx



const Review = (_ref) => {
  let {
    rating: initialRating,
    reviews,
    className,
    editable,
    large,
    ratingText,
    medium
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["rating", "reviews", "className", "editable", "large", "ratingText", "medium"]);

  const {
    0: rating,
    1: setRating
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialRating);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setRating(initialRating);
  }, [initialRating]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: `rating d-flex align-items-center ${className}`,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", _objectSpread(_objectSpread({}, rest), {}, {
      hidden: true,
      value: rating,
      onChange: () => console.log
    })), Array(5).fill('').map((el, index) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_2__["MdOutlineStarPurple500"], {
      color: index < rating ? "#FFC546" : "rgba(0,0,0,.2)",
      className: `me-1 ${index} èè ${initialRating}`,
      size: 24,
      "aria-disabled": !editable,
      onClick: () => editable && setRating(index + 1)
    }, index.toString())), reviews && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
      className: "review-number",
      children: ["(", reviews, ")"]
    }), ratingText && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
      className: "rating-text",
      children: rating
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Review);

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
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

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ffkN");


/***/ }),

/***/ "3O0d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ww4b");
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);


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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], {
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

        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
          position: {
            lat: marker.latitude,
            lng: marker.longitude
          },
          animation: window.google.maps.Animation.DROP,
          icon: "/image/marker.png",
          onClick: () => {
            handleClickMarker(marker);
          }
        }, index);
      })
    })
  });
}

/***/ }),

/***/ "3WeD":
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

/***/ "3wub":
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

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

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

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

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

/***/ "7v8O":
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
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

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

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

/***/ "FrK0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAppContext; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

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
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AppContext.Provider, {
    value: {
      temporary_appointment,
      setUserTemporary
    },
    children: children
  });
}
function useAppContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AppContext);
}

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

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

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
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
  if (false) {}

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "Ww4b":
/***/ (function(module, exports) {

module.exports = require("@react-google-maps/api");

/***/ }),

/***/ "X24+":
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


const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YCa+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Autocomplete");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
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
  if (false) {}

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

/***/ "dZ6Y":
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

/***/ "eRny":
/***/ (function(module, exports) {

module.exports = require("react-icons/bi");

/***/ }),

/***/ "elyg":
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

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

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
      if (false) {}

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
          if (false) {}

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

      if (false) {} // shallow routing is only allowed for same page URL changes.


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
    if (false) {}

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

      if (false) {}

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


    if (false) {}

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

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

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

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "fJPa":
/***/ (function(module, exports) {

module.exports = require("unfetch");

/***/ }),

/***/ "ffkN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ magasin; });
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./EndPoint.js
var EndPoint = __webpack_require__("lIVJ");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./context/AppointementContext.js
var AppointementContext = __webpack_require__("FrK0");

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__("j3R+");

// EXTERNAL MODULE: ./components/fancyBox/fancybox/ReactFancyBox.js
var ReactFancyBox = __webpack_require__("cD5v");

// EXTERNAL MODULE: ./components/CustomButtons/Button.js
var Button = __webpack_require__("Kg+a");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/MedecinWidget/CalendarAvailability.js
var CalendarAvailability = __webpack_require__("gV5c");

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/core/Slide"
var Slide_ = __webpack_require__("mz+e");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_);

// EXTERNAL MODULE: ./components/review/Review.jsx
var Review = __webpack_require__("/XLc");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/MedecinWidget/MedecinWidget.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function MedecinWidget(props) {
  const {
    0: showDisponibilite,
    1: setShowDisponibilite
  } = Object(external_react_["useState"])();
  const {
    content,
    locale
  } = props;
  const {
    0: selectedHour,
    1: setSelectedHour
  } = Object(external_react_["useState"])();
  const {
    0: selectedDate,
    1: setSelectedDate
  } = Object(external_react_["useState"])();
  const {
    setUserTemporary
  } = Object(AppointementContext["b" /* useAppContext */])();
  const router = Object(router_["useRouter"])();

  const setDetails = (day, hour) => {
    setSelectedDate(day);
    setSelectedHour(hour);
  };

  const validateTime = () => {
    var _props$medecin;

    setUserTemporary({
      date: selectedDate,
      time: selectedHour,
      medecinId: props.medecin.id
    });
    return router.push({
      pathname: `/doctor/${(_props$medecin = props.medecin) === null || _props$medecin === void 0 ? void 0 : _props$medecin.id}/appointment`
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "card br-10",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "card-body",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "doctor-widget",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "doc-info-left",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "doctor-img",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/doctor/" + props.medecin.id,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: props.medecin.image ? `${EndPoint["a" /* default */].BACKEND_URL}/${props.medecin.image}` : "/image/medecin/homme.jpg",
                className: "img-fluid img-100",
                alt: "User Image"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "show-only-mobile",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Review["a" /* default */], {
                medium: true,
                rating: 5,
                className: 'show-only-mobile',
                size: 20,
                color: "red"
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "doc-info-cont",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "doc-name",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                href: "/doctor/" + props.medecin.id,
                className: "doc-name",
                children: ["Dr. ", `${props.medecin.nom} ${props.medecin.prenom}`]
              })
            }), props.medecin.specialites.map((specialite, index) => {
              return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
                className: "doc-department-md",
                children: [!specialite.icon ? null : /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: `${EndPoint["a" /* default */].BACKEND_URL}/${specialite.icon}`,
                  className: "img-fluid",
                  alt: "Speciality"
                }), specialite.name]
              }, index);
            }), !props.medecin.teleconsultationIsDisponible ? null : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
              className: "mt-2",
              children: [" ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(md_["MdVideocam"], {}), " ", content.availableVideo, " "]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "clinic-details",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                className: "doc-location",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                  className: "fas fa-map-marker-alt"
                }), !props.medecin.adress ? content.notSpecified : (props.medecin.adress.streetName ? props.medecin.adress.streetName : "") + " " + (props.medecin.adress.buildingName ? props.medecin.adress.buildingName : "") + " " + (props.medecin.adress.floor ? "étage " + props.medecin.adress.floor : "") + " " + (props.medecin.adress.sector ? props.medecin.adress.sector : "") + ", " + (props.medecin.adress.codePostal ? props.medecin.adress.codePostal : "") + " - " + (props.medecin.city ? props.medecin.city.name : "")]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
                children: props.medecin.pictures.map((picture, index) => {
                  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                    className: "cabinet-img-container ml-2",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ReactFancyBox["a" /* default */], {
                      thumbnail: `${EndPoint["a" /* default */].BACKEND_URL}/${picture.path}`,
                      showCloseBtn: false,
                      image: `${EndPoint["a" /* default */].BACKEND_URL}/${picture.path}`
                    })
                  }, index);
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: 'show-only-mobile',
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Button["a" /* default */], {
                  className: 'bolde-7 btn-color-primary',
                  onClick: () => setShowDisponibilite(props.medecin),
                  color: "primary",
                  children: [" ", content.seeDispo, " "]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: 'show-only-desktop',
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Review["a" /* default */], {
                  medium: true,
                  rating: 5,
                  className: 'show-only-desktop',
                  size: 26,
                  color: "red"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
                  className: 'bolde-7',
                  disabled: !selectedHour,
                  onClick: validateTime,
                  color: "primary",
                  children: content.confirm
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: locale === "ar" ? "doc-info-leftr show-only-desktop" : "doc-info-right show-only-desktop",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CalendarAvailability["a" /* default */], _objectSpread(_objectSpread({}, props), {}, {
            setSelectedHour: setDetails
          })), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: !selectedHour && !selectedDate ? null : content.timeSelected + external_moment_default()(selectedDate + selectedHour, 'YYYY/MM/DDHH:mm').calendar()
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "clinic-booking"
          })]
        })]
      })
    }), showDisponibilite ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(ShowDisponibilite, _objectSpread(_objectSpread({
      showDisponibilite: showDisponibilite
    }, props), {}, {
      handleClose: () => setShowDisponibilite()
    })) : null]
  });
}
const MedecinWidget_Transition = /*#__PURE__*/external_react_default.a.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Slide_default.a, _objectSpread({
    direction: "up",
    ref: ref
  }, props));
});

function ShowDisponibilite(props) {
  const {
    0: selectedHour,
    1: setSelectedHour
  } = Object(external_react_["useState"])();
  const {
    0: selectedDate,
    1: setSelectedDate
  } = Object(external_react_["useState"])();
  const {
    content,
    locale
  } = props;
  const {
    setUserTemporary
  } = Object(AppointementContext["b" /* useAppContext */])();
  const router = Object(router_["useRouter"])();

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
      pathname: `/doctor/${props.medecin.id}/appointment`
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Dialog_default.a, {
      open: true,
      maxWidth: "lg" // fullWidth={true}
      ,
      style: locale === "ar" ? {
        direction: "rtl",
        textAlign: "right"
      } : {
        direction: "ltr"
      },
      TransitionComponent: MedecinWidget_Transition,
      keepMounted: true // onClose={props.handleClose}
      ,
      "aria-labelledby": "alert-dialog-slide-title",
      "aria-describedby": "alert-dialog-slide-description",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(DialogTitle_default.a, {
        id: "alert-dialog-slide-title",
        children: [" ", content.dispo, "  "]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DialogContent_default.a, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CalendarAvailability["a" /* default */], _objectSpread(_objectSpread({}, props), {}, {
          setSelectedHour: setDetails
        }))
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(DialogActions_default.a, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          children: !selectedHour && !selectedDate ? null : content.timeSelected + external_moment_default()(selectedDate + selectedHour, 'YYYY/MM/DDHH:mm').calendar()
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            onClick: props.handleClose,
            color: "transparent",
            children: content.cancel
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button["a" /* default */], {
            disabled: !selectedHour,
            onClick: validateTime,
            color: "primary",
            children: content.confirm
          })]
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./components/MedecinWidget/MapAccess.js
var MapAccess = __webpack_require__("3O0d");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__("7v8O");

// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__("eRny");

// EXTERNAL MODULE: external "@material-ui/lab/Autocomplete"
var Autocomplete_ = __webpack_require__("YCa+");
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "unfetch"
var external_unfetch_ = __webpack_require__("fJPa");
var external_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_unfetch_);

// CONCATENATED MODULE: ./components/Searchtwo/Search.js



function Search_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Search_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Search_ownKeys(Object(source), true).forEach(function (key) { Search_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Search_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
      justifyContent: 'center',
      backgroundColor: 'transparent !important;'
    }
  },
  searchBarQuery: {
    "-ms-flex": "0 0 240px",
    position: "relative",
    width: "403px",
    marginLeft: 10,
    [theme.breakpoints.down("sm")]: {
      flex: "0 0 100%",
      width: "100%",
      marginLeft: 0
    }
  },
  searchInputWrapper: {
    background: "#fff",
    position: "relative",
    display: "flex",
    width: "100%",
    height: 60,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 10,
      borderRadius: 30
    },
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
      marginBottom: 12,
      marginRight: "0px"
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

const useStyles = Object(styles_["makeStyles"])(style);
function SearchInput({
  content,
  locale
}) {
  const classes = useStyles();
  const router = Object(router_["useRouter"])();
  const {
    0: medecin,
    1: setMedecin
  } = Object(external_react_["useState"])({});
  const {
    0: ville,
    1: setVille
  } = Object(external_react_["useState"])({});
  const {
    0: loadingMedecin,
    1: setLoadingMedecin
  } = Object(external_react_["useState"])(false);
  const {
    0: isSearched,
    1: setIsSerached
  } = Object(external_react_["useState"])(false);
  const {
    0: LoadingCities,
    1: setLoadingCities
  } = Object(external_react_["useState"])(false);
  const {
    0: inputValue,
    1: setInputValue
  } = Object(external_react_["useState"])("");
  const {
    0: searchFetched,
    1: setSearchFetched
  } = Object(external_react_["useState"])([]);
  const {
    0: cities,
    1: setCities
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(async () => {
    try {
      const res = await external_unfetch_default()(`${EndPoint["a" /* default */].BACKEND_URL}/medecin/search/specialite/${inputValue}`, {
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
  Object(external_react_["useEffect"])(async () => {
    try {
      const res = await external_unfetch_default()(`${EndPoint["a" /* default */].BACKEND_URL}/city`, {
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

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.searchContent,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
      lg: "12",
      md: "12",
      className: "center-form",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
        className: classes.searchBar,
        onSubmit: submiting,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          lg: "3",
          md: "3",
          className: classes.searchBarQuery + " with-vorder-right",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.searchInputWrapper + " search",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(bs_["BsSearch"], {
              className: locale === "ar" ? "searchbar-input-icon-ar" : "searchbar-input-icon"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Autocomplete_default.a, {
              onInputChange: handleSearchSpecialitea,
              loading: loadingMedecin,
              noOptionsText: isSearched ? content.noOption : content.noOption2,
              groupBy: option => option.name ? "specialite" : "medecin",
              id: "suggestion-medecin",
              loadingText: content.loading,
              options: searchFetched,
              debug: true,
              getOptionLabel: option => option.nom ? option.nom + " " + option.prenom + " " + option.email + " " + option.phone : option.name ? option.name : "",
              renderOption: option => option.nom ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_default.a.Fragment, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: `/doctor/${option.id}`,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                    className: "d-flex w-100",
                    children: [option.image ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      className: "searchbar-result-profile-avatar ",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                        className: "img-fluid",
                        src: `${EndPoint["a" /* default */].BACKEND_URL}/${option.image}`
                      })
                    }) : null, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                      children: [" Dr. ", option.nom, " ", option.prenom, " "]
                    })]
                  })
                })
              }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_default.a.Fragment, {
                children: option.name
              }),
              onChange: (e, newInputValue) => handleSearchSpecialite(e, newInputValue),
              value: medecin,
              style: {
                width: "100%",
                height: "60px"
              },
              renderInput: params => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, Search_objectSpread(Search_objectSpread({}, params), {}, {
                placeholder: content.recherchelabel
              }))
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          lg: "3",
          md: "3",
          className: classes.searchbarPlace,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: classes.searchInputWrapper + " search",
            style: {
              overflow: "hidden"
            },
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(md_["MdLocationOn"], {
              className: locale === "ar" ? "searchbar-input-icon-ar" : "searchbar-input-icon"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Autocomplete_default.a, {
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
              renderInput: params => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, Search_objectSpread(Search_objectSpread({}, params), {}, {
                placeholder: content.citylabel
              }))
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              onClick: selectPosition,
              className: classes.searchButton,
              type: "button",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bi_["BiCurrentLocation"], {
                  className: locale === "ar" ? "searchbar-input-icon-ar" : "searchbar-input-icon"
                })
              })
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
          lg: "3",
          md: "3",
          className: classes.searchSubmitButton + " btn btn-submit",
          role: "button",
          type: "submit",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
            className: "text-btn-element",
            children: [locale === "ar" ? "Rechercher " : "Rechercher ", "  "]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
            width: "8",
            height: "13",
            viewBox: "0 0 8 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
              d: "M1.33854 12.3216C0.98099 12.3216 0.644884 12.1881 0.392043 11.9456C0.139228 11.7031 0 11.3806 0 11.0376C0 10.6947 0.139228 10.3722 0.392043 10.1297L4.52975 6.16051L0.392043 2.19136C0.139228 1.94884 0 1.62638 0 1.28341C0 0.940451 0.139228 0.617986 0.392043 0.375467C0.913974 -0.12518 1.76316 -0.125131 2.28506 0.375467L7.36924 5.25256C7.62205 5.49508 7.76128 5.81755 7.76128 6.16051C7.76128 6.50347 7.62205 6.82594 7.36924 7.06848L2.28504 11.9456C2.0322 12.1881 1.69606 12.3216 1.33854 12.3216ZM1.33854 0.490664C1.12682 0.490664 0.915099 0.56796 0.753917 0.722602C0.59775 0.872409 0.511746 1.07155 0.511746 1.28341C0.511746 1.49527 0.59775 1.69442 0.753917 1.84422L5.07253 5.98694C5.12051 6.03297 5.14748 6.09541 5.14748 6.16051C5.14748 6.22561 5.12051 6.28805 5.07253 6.33408L0.753917 10.4768C0.59775 10.6266 0.511746 10.8258 0.511746 11.0376C0.511746 11.2495 0.59775 11.4486 0.753917 11.5984C0.910084 11.7482 1.11771 11.8307 1.33854 11.8307C1.55937 11.8307 1.767 11.7482 1.92316 11.5984L7.00734 6.72134C7.1635 6.57154 7.24951 6.37239 7.24951 6.16053C7.24951 5.9487 7.1635 5.74953 7.00734 5.59972L1.92314 0.722602C1.76198 0.567985 1.55026 0.490664 1.33854 0.490664Z",
              fill: "white"
            })
          })]
        })]
      })
    })
  });
} // SearchInput.getInitialProps = async (ctx) => {
//     const res = await fetch(`${Config.BACKEND_URL}/city`);
//     console.log(res)
//     if(res.status === 404) return { villes: [] }
//     const json = await res.json()
//     return { villes:json.cities }
//   }
// EXTERNAL MODULE: ./contentFR.js
var contentFR = __webpack_require__("kv0W");

// EXTERNAL MODULE: ./contentEN.js
var contentEN = __webpack_require__("FT3n");

// EXTERNAL MODULE: ./contentAR.js
var contentAR = __webpack_require__("ZkZy");

// EXTERNAL MODULE: ./assets/jss/variables.js
var variables = __webpack_require__("LGnN");

// CONCATENATED MODULE: ./assets/jss/recherchePage.js


const profilePageStyle = theme => ({
  container: variables["b" /* container */],
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

/* harmony default export */ var recherchePage = (profilePageStyle);
// CONCATENATED MODULE: ./pages/recherche/[specialite]/[ville].js
















const _ville_useStyles = Object(styles_["makeStyles"])(recherchePage);
function magasin({
  medecins,
  locations
}) {
  const router = Object(router_["useRouter"])();
  const {
    locale
  } = router;
  const content = locale === "ar" ? contentAR["a" /* default */] : locale === "en" ? contentEN["a" /* default */] : contentFR["a" /* default */];
  const {
    0: screenWidth,
    1: setScreenWidth
  } = Object(external_react_["useState"])(1);
  const classes = _ville_useStyles();
  Object(external_react_["useEffect"])(() => {
    function updateSize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
        children: [" DOCTOLIVE - Rechercher m\xE9decin", medecins === null || medecins === void 0 ? void 0 : medecins.length, " "]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: " ",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: " m-0",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
          className: classes.header,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: 'header-search',
            style: locale === "ar" ? {
              backgroundPosition: "bottom left",
              textAlign: "right"
            } : {
              backgroundPosition: "85% 75%"
            },
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "container-fluid text-center",
              id: "recherche-medecin",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SearchInput, {
                content: content.resultResearch,
                locale: locale
              })
            })
          })
        })
      })
    }), medecins.length > 0 ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
      className: "content-recherche m-0 bg-body-i",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
        lg: "9",
        md: "12",
        xs: "12",
        children: medecins === null || medecins === void 0 ? void 0 : medecins.map((researched, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MedecinWidget, {
              medecin: researched,
              locale: locale,
              content: content.resultResearch.widget
            })
          }, index);
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
        lg: "3",
        md: "12",
        xs: "12",
        className: "order-sm-last",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "carre-map text-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: "/image/pin-round.png",
            className: "img-fluid mt-5",
            alt: "User Image"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "J\u2019autorise le traitement d\u2019informations (dont mon adresse IP)"
          })]
        })
      })]
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: " ",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h1", {
        className: classes.h1,
        children: ["  ", content.resultResearch.noReseault, " "]
      })
    })]
  });
}
async function getServerSideProps(context) {
  const {
    specialite,
    ville
  } = context.params;
  const url = `${EndPoint["a" /* default */].BACKEND_URL}/medecin/${specialite}/${ville}`;
  const res = await fetch(url, {
    headers: {
      'Origin': EndPoint["a" /* default */].CURRENT_URL // Replace with your frontend URL

    }
  });
  const data = await res.json();
  console.log("Data:", data);

  if (data.error) {
    return {
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
    }
  };
}

/***/ }),

/***/ "g/15":
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

var _formatUrl = __webpack_require__("6D7l");
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
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gV5c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarAvailability; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("j3R+");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EndPoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("lIVJ");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("T00j");








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
    0: showall,
    1: setShowall
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    userData
  } = Object(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__[/* useAuth */ "b"])();

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
    var _props$medecin;

    const disponibiliteDay = (_props$medecin = props.medecin) === null || _props$medecin === void 0 ? void 0 : _props$medecin.horaires.find(h => h.jour === day.format('dddd'));
    if (!disponibiliteDay) return [];
    let table = [];
    let endHour = moment__WEBPACK_IMPORTED_MODULE_2___default()(disponibiliteDay.fin_soir, 'HH:mm:ss');
    let hour = moment__WEBPACK_IMPORTED_MODULE_2___default()(disponibiliteDay.debut_soir, 'HH:mm:ss');
    let i = 0;
    let k = 2;

    if (showall) {
      k = 100;
    }

    while (hour.isBefore(endHour) && i < k) {
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
      let hourDiv = !isDisabled ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        disabled: isDisabled,
        className: isDisabled ? "cell hours-element disabled" : "cell hours-element",
        onClick: () => selectHour(day, cloneHour, isDisabled),
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
          className: "hour",
          children: [" ", hour.format('HH:mm'), " "]
        })
      }, i) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: " hours-element-disabled",
        children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "hour-empty",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            children: "-:-"
          }), "   "]
        }), " "]
      }, i);
      table.push(hourDiv);
      i++;
      hour = hour.add(disponibiliteDay.duree, 'minutes');
    }

    return table;
  };

  const createHoursMatin = day => {
    var _props$medecin2;

    const disponibiliteDay = (_props$medecin2 = props.medecin) === null || _props$medecin2 === void 0 ? void 0 : _props$medecin2.horaires.find(h => h.jour === day.lang("fr").format('dddd'));
    if (!disponibiliteDay) return [];
    let table = [];
    let endHour = moment__WEBPACK_IMPORTED_MODULE_2___default()(disponibiliteDay.fin_matin, 'HH:mm:ss');
    let hour = moment__WEBPACK_IMPORTED_MODULE_2___default()(disponibiliteDay.debut_matin, 'HH:mm:ss');
    let i = 0;
    let k = 2;

    if (showall) {
      k = 100;
    }

    while (hour.isBefore(endHour) && i < k) {
      let element = undefined;

      if (calandar) {
        element = calandar.find(e => {
          return e.time === hour.format('HH:mm:ss') && day.format('YYYY-MM-DD') === e.date;
        });
      }

      let HourInTheDay = moment__WEBPACK_IMPORTED_MODULE_2___default()(moment__WEBPACK_IMPORTED_MODULE_2___default()(day).format('YYYY/MM/DD') + hour, 'YYYY/MM/DDHH:mm');
      let cloneHour = hour.format('HH:mm');
      let isDisabled = element !== undefined || moment__WEBPACK_IMPORTED_MODULE_2___default()().isAfter(HourInTheDay);
      let hourDiv = !isDisabled ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        disabled: isDisabled,
        className: isDisabled ? "cell hours-element disabled" : "cell hours-element",
        onClick: () => selectHour(day, cloneHour, isDisabled),
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("span", {
          className: "hour",
          children: [hour.format('HH:mm'), "  "]
        })
      }, i) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: " hours-element-disabled",
        children: [" ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "hour-empty",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            children: "-:-"
          })
        }), " "]
      }, i);
      table.push(hourDiv);
      i++;
      hour = hour.add(disponibiliteDay.duree, 'minutes');
    }

    return table;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    var _props$medecin3;

    const res = await fetch(`${_EndPoint__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].BACKEND_URL}/consultation/medecin-calendar/${(_props$medecin3 = props.medecin) === null || _props$medecin3 === void 0 ? void 0 : _props$medecin3.id}/${startDate}`, {
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

      let dayAvailability = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "calendar-day",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "calendar-day-title",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "cell-content",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
              className: "calendar-day-name",
              children: [date.format('dddd'), " "]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "calendar-day-date",
              children: date.format('D') + " " + date.format("MMM")
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          children: [createHoursMatin(date), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {}), createHoursSoir(date)]
        })]
      }, i);

      table.push(dayAvailability);
    }

    return table;
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "date-range-calendar",
      style: props.locale === "ar" ? {
        direction: "rtl",
        textAlign: "right"
      } : {
        direction: "ltr"
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "range-calendar",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "calendar-pagination",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
            className: "",
            id: "date-range-preview",
            onClick: () => changeDate('preview'),
            children: ["  ", props.locale === "ar" ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdChevronRight"], {
              color: "#1AB9B9"
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdChevronLeft"], {
              color: "#1AB9B9"
            }), "  "]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "calendar",
          children: props.medecin ? createCalendar() : null
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "calendar-pagination",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
            className: "",
            id: "date-range-next",
            onClick: () => changeDate('next'),
            children: ["  ", props.locale === "ar" ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdChevronLeft"], {
              color: "#1AB9B9"
            }) : /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdChevronRight"], {
              color: "#1AB9B9"
            }), " "]
          })
        })]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "text-center w-100 divider-t",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "javascript:void(0)",
        className: "show-all",
        onClick: () => setShowall(!showall),
        children: "VOIRE PLUS D\u2019HORAIRES"
      })
    })]
  });
}

/***/ }),

/***/ "gguc":
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

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
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

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

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

/***/ "mz+e":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

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

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ })

/******/ });