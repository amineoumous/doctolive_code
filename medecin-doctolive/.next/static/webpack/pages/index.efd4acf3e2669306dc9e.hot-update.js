webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Accordion */ "./node_modules/@material-ui/core/esm/Accordion/index.js");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "./node_modules/@material-ui/core/esm/AccordionSummary/index.js");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "./node_modules/@material-ui/core/esm/AccordionDetails/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _assets_jss_MedecinHomeStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/jss/MedecinHomeStyle.js */ "./assets/jss/MedecinHomeStyle.js");
/* harmony import */ var _components_MedecinForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../components/MedecinForm */ "./components/MedecinForm.js");


var _jsxFileName = "C:\\Users\\moi\\Desktop\\doctolive\\doctolive_code\\medecin-doctolive\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$(),
    _s5 = $RefreshSig$();


 // @material-ui/core components


 // import BannerHome from './../assets/img/medicaldiscussion.jpg'
// core components









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_MedecinHomeStyle_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      screenWidth = _useState[0],
      setScreenWidth = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function updateSize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return function () {
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

_s(Home, "IDNRn/KQwYWFpCQc6I1dowbqz4U=");

_c = Home;

function Avantages() {
  _s2();

  var _this = this;

  var classes = useStyles();
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
          children: whyCards.map(function (whycard, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
              lg: "4",
              md: "6",
              xs: "12",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                "class": "wrapper-repeat d-flex h-100",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  "class": "wrapper-ico",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: "/image/".concat(whycard.icon),
                      alt: "...",
                      className: "mb-3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 42
                    }, _this), " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 35
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 31
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  "class": "wrapper-content",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                    "class": "title-t3 fw-700 mb-10 color-primary",
                    children: whycard.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 33
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: whycard.description
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 33
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 31
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 27
              }, _this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 25
            }, _this);
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

_s2(Avantages, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c2 = Avantages;

function Steps() {
  _s3();

  var classes = useStyles();
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

_s3(Steps, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c3 = Steps;

function Keep() {
  _s4();

  var classes = useStyles();
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

_s4(Keep, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c4 = Keep;
var whyCards = [{
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
  _s5();

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: classes.header,
    style: {
      backgroundImage: "linear-gradient(180deg, hsla(0, 0%, 100%, 0.25), hsla(0, 0%, 100%, 0.25)), url(image/slider-bg.jpeg)"
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

_s5(Header, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c5 = Header;

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

_c6 = MoreInfos;

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

_c7 = Avantage;
var faqs = [{
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
  var _this2 = this;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: faqs.map(function (faq, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AccordionType, {
        faq: faq
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 13
      }, _this2);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 289,
    columnNumber: 5
  }, this);
}

_c8 = FAQ;

function AccordionType(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_7__["default"], {
      expandIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_10__["MdExpandMore"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 25
      }, this),
      "aria-controls": "panel1a-content",
      id: "panel1a-header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_8__["default"], {
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

_c9 = AccordionType;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "Avantages");
$RefreshReg$(_c3, "Steps");
$RefreshReg$(_c4, "Keep");
$RefreshReg$(_c5, "Header");
$RefreshReg$(_c6, "MoreInfos");
$RefreshReg$(_c7, "Avantage");
$RefreshReg$(_c8, "FAQ");
$RefreshReg$(_c9, "AccordionType");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInN0eWxlczEiLCJIb21lIiwidXNlU3RhdGUiLCJzY3JlZW5XaWR0aCIsInNldFNjcmVlbldpZHRoIiwidXNlRWZmZWN0IiwidXBkYXRlU2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkF2YW50YWdlcyIsImNsYXNzZXMiLCJzZWN0aW9uIiwic2VjdGlvblRpdGxsZSIsIndoeUNhcmRzIiwibWFwIiwid2h5Y2FyZCIsImluZGV4IiwiaWNvbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJTdGVwcyIsIktlZXAiLCJIZWFkZXIiLCJoZWFkZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJNb3JlSW5mb3MiLCJBdmFudGFnZSIsImZhcXMiLCJGQVEiLCJmYXEiLCJBY2NvcmRpb25UeXBlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUlBOztBQUNBO0NBSUE7QUFDQTs7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyx3RUFBRCxDQUE1QjtBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxDQUFELENBRGpCO0FBQUEsTUFDdEJDLFdBRHNCO0FBQUEsTUFDVEMsY0FEUzs7QUFHN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLGFBQVNDLFVBQVQsR0FBc0I7QUFDaEJGLG9CQUFjLENBQUNHLE1BQU0sQ0FBQ0MsVUFBUixDQUFkO0FBQ0w7O0FBRURELFVBQU0sQ0FBQ0UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NILFVBQWxDO0FBQ0FBLGNBQVU7QUFFVixXQUFPLFlBQU07QUFDVEMs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Y0EsS0FBSyxDQUFDRixHQUFOLENBQVVYO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSxxRUFBQywwRUFBRDtBQUFBLGdCQUVLYSxLQUFLLENBQUNGLEdBQU4sQ0FBVVY7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRE47QUFnQkQ7O01BakJRVyxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVmZDRhY2YzZTI2NjkzMDZkYzllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuXHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuXHJcblxyXG4vLyBpbXBvcnQgQmFubmVySG9tZSBmcm9tICcuLy4uL2Fzc2V0cy9pbWcvbWVkaWNhbGRpc2N1c3Npb24uanBnJ1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgQmlDaGVjaywgQmlTZWFyY2gsIEJpQ2FsZW5kYXJ9IGZyb20gJ3JlYWN0LWljb25zL2JpJ1xyXG5cclxuXHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uJztcclxuaW1wb3J0IEFjY29yZGlvblN1bW1hcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeSc7XHJcbmltcG9ydCBBY2NvcmRpb25EZXRhaWxzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHMnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuXHJcbmltcG9ydCB7TWRFeHBhbmRNb3JlLCBNZENoZWNrfSBmcm9tICdyZWFjdC1pY29ucy9tZCdcclxuXHJcbmltcG9ydCBzdHlsZXMxIGZyb20gXCIuLi9hc3NldHMvanNzL01lZGVjaW5Ib21lU3R5bGUuanNcIjtcclxuXHJcbmltcG9ydCBNZWRlY2luRm9ybSBmcm9tICcuLy4uL2NvbXBvbmVudHMvTWVkZWNpbkZvcm0nXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlczEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbc2NyZWVuV2lkdGgsIHNldFNjcmVlbldpZHRoXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gdXBkYXRlU2l6ZSgpIHtcclxuICAgICAgICAgIHNldFNjcmVlbldpZHRoKHdpbmRvdy5pbm5lcldpZHRoKVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTaXplKTtcclxuICAgIHVwZGF0ZVNpemUoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTaXplKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiA+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT4gRG9jdG9saXZlIC0gUmVuZGV6LXZvdXMgZW4gbGlnbmUgYXZlYyB2b3RyZSBtw6lkZWNpbjwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgPEhlYWRlciBzY3JlZW5XaWR0aD17c2NyZWVuV2lkdGh9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEF2YW50YWdlcyAvPlxyXG4gICAgICAgIDxTdGVwcyAvPlxyXG4gICAgICAgIDxLZWVwIC8+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBBdmFudGFnZXMoKXtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbiArIFwiIHJlcGVhdC1pY29uLWJveFwifT5cclxuICAgICAgICAgICAgPENvbnRhaW5lciA+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb25UaXRsbGV9ID5Qb3VycXVvaSBsZXMgcHJvZmVzc2lvbm5lbHMgZGUgbGEgc2FudMOpIGFpbWVudCBEb2N0b2xpdmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2h5Q2FyZHMubWFwKCh3aHljYXJkLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBrZXk9e2luZGV4fSBsZz1cIjRcIiBtZD1cIjZcIiB4cz1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXItcmVwZWF0IGQtZmxleCBoLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1pY29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiA8aW1nIHNyYyA9eyBgL2ltYWdlLyR7d2h5Y2FyZC5pY29ufWB9IGFsdD1cIi4uLlwiIGNsYXNzTmFtZT1cIm1iLTNcIiAvPiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGUtdDMgZnctNzAwIG1iLTEwIGNvbG9yLXByaW1hcnlcIj57d2h5Y2FyZC50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt3aHljYXJkLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvUm93PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gU3RlcHMgKCl7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4oXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uICsgXCIgc2VjdGlvbi1ob21lLWhvdy13b3JrcyBwYWRkaW5nX3RvcFwifT5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkaW5nIHRleHQtY2VudGVyXCI+IETDqW1hcnJleiBlbiAzIMOpdGFwZXMgc2ltcGxlczwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh3LWFyZWFcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGNvbC1zbS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJody1ib3ggaHctYm94LS1tdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh3LWJveF9faWNvblwiPjxzcGFuIGNsYXNzTmFtZT1cImljb24tc2VhcmNoXCI+IDxCaVNlYXJjaCAvPiA8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJody1ib3hfX3RpdGxlXCI+IFJlam9pZ25lei1ub3VzIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImh3LWJveF9fdGV4dFwiPiBTJ2luc2NyaXJlIGF2ZWMgdm9zIGNvb3Jkb25uw6llcyBzdXIgbGEgcGxhdGVmb3JtZSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBjb2wtc20tNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHctYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHctYm94X19pY29uXCI+IDxzcGFuIGNsYXNzTmFtZT1cImljb24tc3ZnIHZhLW1pZGRsZS1pbmxpbmVcIj4gPEJpQ2FsZW5kYXIgLz4gPC9zcGFuPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImh3LWJveF9fdGl0bGVcIj4gVsOpcmlmaWNhdGlvbiBkJ2lkZW50aXTDqSA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJody1ib3hfX3RleHRcIj4gQ29tcGxldGV6IGxlIHByb2Nlc3N1cyBkZSB2w6lyaWZpY2F0aW9uIGF2ZWMgbm9zIGNvbnN1bHRhbnQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgY29sLXNtLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh3LWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh3LWJveF9faWNvblwiPjxzcGFuIGNsYXNzTmFtZT1cImljb24tZmF0LWNoZWNrXCI+PEJpQ2hlY2sgLz48L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJody1ib3hfX3RpdGxlXCI+IENvbnN1bHRleiB2b3MgcGF0aWVudCA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJody1ib3hfX3RleHRcIj4gIENvbW1lbmNlciDDoCBjb25zdWx0ZXIgZW4gdmlkw6lvIGV0IGfDqXJleiB2b3MgcmVuZGV6LXZvdXMgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuZnVuY3Rpb24gS2VlcCgpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIHJldHVybihcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9uICsgXCIgcGFkZGluZ190b3BcIn0+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCIgeHM9XCIxMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+IEdhcmRleiBsZXMgcGF0aWVudHMgZGUgdm90cmUgY2xpbmlxdWUgZW5nYWfDqXMgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+IEltcHJlc3Npb25uZXogdm9zIHBhdGllbnRzIGVuIGxldXIgcGVybWV0dGFudCBkZSBzdWl2cmUgYXZlYyB2b3VzIGVuIGxpZ25lIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+IEF1Z21lbnRlciBsYSByw6l0ZW50aW9uIGRlcyBwYXRpZW50cyA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8cD4gSW50ZXJhZ2lzc2V6IGF2ZWMgbGVzIHBhdGllbnRzIGFwcsOocyBsZXVycyByZW5kZXotdm91cy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+IENvbnRyw7RsZXogZWZmaWNhY2VtZW50IGxlcyBzdWl2aXMgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPHA+IERpc2N1dGV6IGF2ZWMgbGVzIHBhdGllbnRzIHNhbnMgcGFydGFnZXIgdm90cmUgbnVtw6lybyBwZXJzb25uZWwuIETDqWZpbmlzc2V6IHZvdHJlIGR1csOpZSBkZSBzdWl2aSBncmF0dWl0IGV0IHBsdXMgZW5jb3JlLiA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT4gTW9uw6l0aXNlciBsZXMgc3VpdmlzIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiAgTW9uw6l0aXNlciBsZXMgaW50ZXJhY3Rpb25zIGRlIHN1aXZpIHLDqXDDqXTDqWVzIGVuIGFzc3VyYW50IGxlIHN1aXZpIGRlcyBwYXRpZW50cyBkYW5zIGxlIGNvbmZvcnQgZGUgbGV1ciBkb21pY2lsZS4gPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIG1kPVwiNlwiIHhzPVwiMTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlL2tlZXAucG5nXCIgYWx0PVwiRG9jdG9yIHRha2luZyBjYXJlIG9mIGZhbWlseVwiIC8+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB3aHlDYXJkcyA9IFtcclxuICB7XHJcbiAgICBpY29uOiBcIndhc3RlLnN2Z1wiLFxyXG4gICAgdGl0bGU6IFwiTmUgcGVyZGV6IHBsdXMgZGUgdGVtcHMgw6AgZ8OpcmVyIGxhIHByaXNlIGRlIHJlbmRlei12b3VzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJVbiBzeXN0w6htZSBkZSByw6lzZXJ2YXRpb24gbcOpZGljYWxlIGVuIGxpZ25lIGF2ZWMgZGUgbm9tYnJldXNlcyBmb25jdGlvbm5hbGl0w6lzLiBHw6lyZXogdm90cmUgY2FiaW5ldCBhdmVjIHVuZSB2dWUgY2xhaXJlIGRlcyByZW5kZXotdm91cyDDoCB2ZW5pci4gUGVyc29ubmFsaXNleiB0b3VzIGxlcyBwYXJhbcOodHJlcyBkb250IHZvdXMgYXZleiBiZXNvaW4uXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBcImFjY2Vzcy5zdmdcIixcclxuICAgIHRpdGxlOiBcIkFjY8OpZGV6IMOgIHZvdHJlIGhvcmFpcmUgbcOpZGljYWwgb8O5IHZvdXMgdm91bGV6LCBxdWFuZCB2b3VzIGxlIHNvdWhhaXRlelwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTm90cmUgbG9naWNpZWwgZGUgcGxhbmlmaWNhdGlvbiBtw6lkaWNhbGUgZXN0IGFjY2Vzc2libGUgZGVwdWlzIHZvdHJlIG9yZGluYXRldXIsIHRhYmxldHRlIG91IHNtYXJ0cGhvbmUuIFZvdXMgcG91dmV6IHbDqXJpZmllciBsZXMgaW5mb3JtYXRpb25zIGRlIHZvdHJlIHByYXRpcXVlIMOgIHRvdXQgbW9tZW50LCBvw7kgcXVlIHZvdXMgc295ZXouXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBcIm9mZmVyLnN2Z1wiLFxyXG4gICAgdGl0bGU6IFwiT2ZmcmlyIGxhIHTDqWzDqW3DqWRlY2luZSBldCDDqWxhcmdpciBsJ2FjY8OocyBhdXggc2VydmljZXMgZGUgc2FudMOpIHBvdXIgbGVzIHBhdGllbnRzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMYSBjb25zdWx0YXRpb24gZW4gbGlnbmUgcGVybWV0IGRlIG1haW50ZW5pciBsYSBjb250aW51aXTDqSBkZXMgc29pbnMgcG91ciB2b3MgcGF0aWVudHMuIEF1Z21lbnRlciBsYSBkaXN0YW5jZSBzb2NpYWxlIGV0IGTDqWxpdnJlciBkZXMgb3Jkb25uYW5jZXMgYXV4IHBhdGllbnRzIMOgIGRvbWljaWxlLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogXCJlYXNpZXIuc3ZnXCIsXHJcbiAgICB0aXRsZTogXCJGYWNpbGl0ZXogbGEgcHJpc2UgZGUgcmVuZGV6LXZvdXMgbcOpZGljYXV4IHBvdXIgdm9zIHBhdGllbnRzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJWb3MgcGF0aWVudHMgcGV1dmVudCBwcmVuZHJlIGRlcyByZW5kZXotdm91cyAyNGggLyAyNCBldCA3aiAvIDcsIHZvdHJlIGNhYmluZXQgcmXDp29pdCBtb2lucyBkJ2FwcGVscyBlbnRyYW50cyBldCB2b3VzIHJlbXBsaXNzZXogbGVzIGNyw6luZWF1eCBkaXNwb25pYmxlcyBtw6ptZSDDoCBsYSBkZXJuacOocmUgbWludXRlLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogXCJjdXN0aW1pc2Uuc3ZnXCIsXHJcbiAgICB0aXRsZTogXCJQZXJzb25uYWxpc2V6IHZvdHJlIGhvcmFpcmUgZGUgcHJhdGlxdWUgZW4gZm9uY3Rpb24gZGUgdm9zIGJlc29pbnNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkTDqWZpbmlzc2V6IGNoYXF1ZSBwYXJhbcOodHJlIHBvdXIgcXVlIHZvdHJlIHN5c3TDqG1lIGRlIHLDqXNlcnZhdGlvbiBlbiBsaWduZSByw6lwb25kZSDDoCB0b3V0ZXMgdm9zIGF0dGVudGVzLiBPdXZyZXogbGVzIHBsYWdlcyBob3JhaXJlcyBkaXNwb25pYmxlcyBldCBzw6lsZWN0aW9ubmV6IGxlcyByYWlzb25zIGRlIGxhIHZpc2l0ZSBlbiBmb25jdGlvbiBkZSB2b3RyZSBzcMOpY2lhbGl0w6kuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBcImluc3RhbGwuc3ZnXCIsXHJcbiAgICB0aXRsZTogXCJJbnN0YWxsZXogZXQgbWHDrnRyaXNleiB2b3RyZSBob3JhaXJlIG3DqWRpY2FsIGVuIGxpZ25lIGVuIHVuIHJpZW4gZGUgdGVtcHNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIk5vdHJlIMOpcXVpcGUgZMOpZGnDqWUgdm91cyBhaWRlIMOgIG1ldHRyZSBlbiBwbGFjZSB2b3RyZSBzeXN0w6htZSBkZSByw6lzZXJ2YXRpb24gbcOpZGljYWxlLiBEZXZlbmV6IHVuIGV4cGVydCBpbnN0YW50YW7DqW1lbnQgZ3LDomNlIMOgIG5vdHJlIGRvY3VtZW50YXRpb24gY29tcGzDqHRlLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogXCJjaGF0LnN2Z1wiLFxyXG4gICAgdGl0bGU6IFwiQ29tbXVuaXF1ZXogZW4gdGVtcHMgcsOpZWwgYXZlYyB2b3MgcGF0aWVudHMgZXQgcsOpZHVpc2V6IGxlcyByZW5kZXotdm91cyBtYW5xdcOpc1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTGFpc3NleiBsZXMgcGF0aWVudHMgcsOpc2VydmVyLCBhbm51bGVyIG91IHJlcG9ydGVyIGxldXJzIHJlbmRlei12b3VzIGVuIGxpZ25lIDI0aCAvIDI0IGV0IDdqIC8gNy4gUsOpZHVpc2V6IGxlcyByZW5kZXotdm91cyBtYW5xdcOpcyBncsOiY2UgYXV4IHJhcHBlbHMgYXV0b21hdGlxdWVzIHBhciBlLW1haWwuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBcImltcHJvdmUuc3ZnXCIsXHJcbiAgICB0aXRsZTogXCJBbcOpbGlvcmV6IHZvdHJlIHZpc2liaWxpdMOpIGVuIGxpZ25lIGV0IHRyb3V2ZXogZGUgbm91dmVhdXggcGF0aWVudHNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlZvdHJlIGxpc3RlIERvY3RvbGl2ZSBwZXJtZXQgYXV4IHBhdGllbnRzIGRlIHRyb3V2ZXIgZmFjaWxlbWVudCB2b3RyZSBjYWJpbmV0LiBMYWlzc2V6IGxlcyBwYXRpZW50cyByw6lzZXJ2ZXIgbGV1cnMgcmVuZGV6LXZvdXMgZW4gbGlnbmUgc3VyIG5vdHJlIHBsYXRlZm9ybWUuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiBcInN5bmMuc3ZnXCIsXHJcbiAgICB0aXRsZTogXCJTeW5jaHJvbmlzZXogbm90cmUgbG9naWNpZWwgZGUgcGxhbmlmaWNhdGlvbiBkZXMgcGF0aWVudHMgYXZlYyB2b3RyZSBpbmZyYXN0cnVjdHVyZVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRG9jdG9saXZlIHMnaW50w6hncmUgaW1tw6lkaWF0ZW1lbnQgZGFucyB2b3RyZSBpbmZyYXN0cnVjdHVyZSBleGlzdGFudGUuIFMnaW50ZXJmYWNlIGRlIG1hbmnDqHJlIHRyYW5zcGFyZW50ZSBhdmVjIGxlcyBhcHBsaWNhdGlvbnMgZGUgZ2VzdGlvbiBkZSBjYWJpbmV0IGxlcyBwbHVzIGNvdXJhbnRlcy5cIixcclxuICB9LFxyXG5dXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIgKCl7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT0ge2NsYXNzZXMuaGVhZGVyfSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCgxODBkZWcsIGhzbGEoMCwgMCUsIDEwMCUsIDAuMjUpLCBoc2xhKDAsIDAlLCAxMDAlLCAwLjI1KSksIHVybChpbWFnZS9zbGlkZXItYmcuanBlZylgfX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Q29udGFpbmVyID4gXHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgbGVmdC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxXCI+Q29uc3VsdGV6IGVuIGxpZ25lIGV0IGTDqXZlbG9wcGV6IHZvdHJlIHByYXRpcXVlPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoM1wiPk9wdGltaXNleiBsYSBnZXN0aW9uIGRlIHZvdHJlIGNhYmluZXQgbcOpZGljYWwgYXZlYyB1biBzeXN0w6htZSBkZSByw6lzZXJ2YXRpb24gZW4gbGlnbmUgZmFjaWxlIMOgIHV0aWxpc2VyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGVhZGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+IDxzcGFuPiA8TWRDaGVjayAgLz4gPC9zcGFuPiBBbcOpbGlvcmV6IHZvdHJlIHLDqWbDqXJlbmNlbWVudCBlbiBsaWduZS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gPHNwYW4+IDxNZENoZWNrIC8+IDwvc3Bhbj4gRmFjaWxpdGV6IGwnb3JnYW5pc2F0aW9uIGRlIHZvdHJlIGFjdGl2aXTDqS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4gPHNwYW4+IDxNZENoZWNrIC8+IDwvc3Bhbj5Db25zb2xpZGV6IGxhIHJlbGF0aW9uIGRlIGNvbmZpYW5jZSBhdmVjIHZvcyBwYXRpZW50cy48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIiBjbGFzc05hbWU9XCJyaWdodC1jb250ZW50XCIgaWQ9XCJpbnNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+IFZvdXMgw6p0ZXMgcHJhdGljaWVuID8gIFVuIGRlIG5vcyBleHBlcnRzIHZvdXMgcmVjb250YWN0ZSA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVkZWNpbkZvcm0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4gIFxyXG5mdW5jdGlvbiBNb3JlSW5mb3MoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2ID5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4gIFxyXG5mdW5jdGlvbiBBdmFudGFnZSgpIHtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2ID5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGZhcXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUG91cnF1b2kgbGUgbG9naWNpZWwgZG9jdG9saXZlIFBybyBlc3QtaWwgYWRhcHTDqSDDoCBtb24gb3JnYW5pc2F0aW9uID9cIixcclxuICAgIGRlc2NyaXB0aW9uOiA8cD5Ob3MgMTQwIDAwMCBwcm9mZXNzaW9ubmVscyBkZSBzYW50w6kgcGFydGVuYWlyZXMgc29udCBpc3N1cyBkZTxzdHJvbmc+IDg4IHNww6ljaWFsaXTDqXMgZGlmZsOpcmVudGVzPC9zdHJvbmc+IGV0IGRlIDxzdHJvbmc+dG91cyB0eXBlcyBk4oCZb3JnYW5pc2F0aW9uczwvc3Ryb25nPiA6IGlscyB0cmF2YWlsbGVudCBlbiBjYWJpbmV0IHNldWwgb3UgZW4gZ3JvdXBlLCBkYW5zIGRlcyDDqXRhYmxpc3NlbWVudHMgZGUgc2FudMOpLCBhdmVjIHVuIHByb2dpY2llbCBvdSBub24gZXRjLjwvcD5cclxuICB9XHJcbl1cclxuZnVuY3Rpb24gRkFRKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgZmFxcy5tYXAoKGZhcSwgaW5kZXgpPT4ge1xyXG4gICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uVHlwZSBrZXk9e2luZGV4fSBmYXE9e2ZhcX0gLz5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBY2NvcmRpb25UeXBlKHByb3BzKSB7XHJcbiAgcmV0dXJuKFxyXG4gICAgICAgIDxBY2NvcmRpb24+XHJcbiAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeVxyXG4gICAgICAgICAgICBleHBhbmRJY29uPXs8TWRFeHBhbmRNb3JlIC8+fVxyXG4gICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYS1jb250ZW50XCJcclxuICAgICAgICAgICAgaWQ9XCJwYW5lbDFhLWhlYWRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5ID57cHJvcHMuZmFxLnRpdGxlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQWNjb3JkaW9uU3VtbWFyeT5cclxuICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgICAgICB7LyogPFR5cG9ncmFwaHk+ICovfVxyXG4gICAgICAgICAgICAgIHtwcm9wcy5mYXEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIHsvKiA8L1R5cG9ncmFwaHk+ICovfVxyXG4gICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPlxyXG4gICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=