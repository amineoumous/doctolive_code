webpackHotUpdate_N_E("pages/account/new",{

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_app_doctolive_code_patient_doctolive_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _EndPoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../EndPoint */ "./EndPoint.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _contentFR__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../contentFR */ "./contentFR.js");
/* harmony import */ var _contentEN__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../contentEN */ "./contentEN.js");
/* harmony import */ var _contentAR__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../contentAR */ "./contentAR.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");



var _jsxFileName = "C:\\app\\doctolive_code\\patient-doctolive\\components\\Login.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_app_doctolive_code_patient_doctolive_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var useOutlinedInputStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      "& $notchedOutline": {
        borderColor: "#38869C",
        borderWidth: "2px !important"
      },
      "&:hover $notchedOutline": {
        borderColor: "#38869C",
        borderWidth: "2px !important"
      },
      "&$focused $notchedOutline": {
        borderColor: "#38869C",
        borderWidth: "2px !important"
      }
    },
    focused: {},
    notchedOutline: {}
  };
});
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    },
    textField: {
      borderRadius: 13,
      borderColor: "#38869C",
      color: "#61788E"
    },
    text_info: {
      color: "#61788E",
      fontSize: 14,
      fontWeight: 500
    },
    notchedOutline: {
      borderColor: '#38869C !important',
      borderWidth: "2px !important"
    }
  };
});
function AuthForm(props) {
  _s();

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var locale = router.locale;
  var content = locale === "ar" ? _contentAR__WEBPACK_IMPORTED_MODULE_9__["default"] : locale === "en" ? _contentEN__WEBPACK_IMPORTED_MODULE_8__["default"] : _contentFR__WEBPACK_IMPORTED_MODULE_7__["default"];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      emailError = _useState3[0],
      setEmailError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      passwordError = _useState4[0],
      setPasswordError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Information incorrect"),
      messageError = _useState5[0],
      setErrorMessage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    sending: false,
    success: false,
    donneIncorecte: false
  }),
      response = _useState6[0],
      setResponse = _useState6[1];

  var validateField = function validateField(e) {
    if (e.target.name === "email") {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var emailErr = !re.test(String(email).toLowerCase());
      setEmailError(emailErr);
    } else if (e.target.name === "password") {
      var passwordLeng = password.length;
      setPasswordError(passwordLeng < 8);
    }
  };

  var submiting = function submiting(e) {
    e.preventDefault();
    setResponse(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, {
        sending: true
      });
    });

    if (!emailError) {
      var data = {
        email: email,
        password: password
      };
      fetch("".concat(_EndPoint__WEBPACK_IMPORTED_MODULE_4__["default"].BACKEND_URL, "/patient/auth"), {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(_objectSpread({}, data))
      }).then(function (r) {
        return r.json().then(function (res) {
          console.log(res);

          if (!res.error) {
            props.submiting(res);
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

            if (res.validator) {} else {
              setErrorMessage(res.message);
            }
          }
        })["catch"](function (e) {
          console.log(e.response);
          setResponse({
            sending: false,
            success: false,
            donneIncorecte: true
          });

          if (e.response.data.error) {
            setErrorMessage(e.response.data.message);
          } else {
            setErrorMessage("Une éreur inconue est survenue");
          }
        });
      })["catch"](function (e) {
        console.log(e.response);
        setResponse({
          sending: false,
          success: false,
          donneIncorecte: true
        });

        if (e.response.data.error) {
          setErrorMessage(e.response.data.message);
        } else {
          setErrorMessage("Une éreur inconue est survenue");
        }
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    component: "main",
    maxWidth: "xs",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.paper,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.form,
        onSubmit: function onSubmit(e) {
          return submiting(e, {
            email: email,
            password: password
          });
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
          value: email,
          onChange: function onChange(e) {
            return setEmail(e.target.value);
          },
          error: emailError,
          margin: "normal",
          required: true,
          fullWidth: true,
          InputProps: {
            classes: {
              notchedOutline: classes.notchedOutline
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
          id: "email",
          variant: "outlined",
          onBlur: validateField,
          label: content["new"].emailLabel,
          name: "email",
          autoComplete: "email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
          margin: "normal",
          value: password,
          variant: "outlined",
          onChange: function onChange(e) {
            return setPassword(e.target.value);
          },
          error: passwordError,
          required: true,
          fullWidth: true,
          onBlur: validateField,
          InputProps: {
            classes: {
              notchedOutline: classes.notchedOutline
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
          name: "password",
          label: content["new"].passLabel,
          type: "password",
          id: "password",
          autoComplete: "current-password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          type: "submit",
          fullWidth: true,
          variant: "contained",
          color: "primary",
          className: classes.submit,
          children: content["new"].signin
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      mt: 8,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "justify-content-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Collapse"], {
          "in": response.donneIncorecte,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: "example-collapse-text",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
              variant: "danger",
              children: [" ", messageError, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 5
  }, this);
}

_s(AuthForm, "hmre8EMf0mwaZLyCHCQivohviCw=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = AuthForm;

var _c;

$RefreshReg$(_c, "AuthForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbi5qcyJdLCJuYW1lcyI6WyJ1c2VPdXRsaW5lZElucHV0U3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJmb2N1c2VkIiwibm90Y2hlZE91dGxpbmUiLCJ1c2VTdHlsZXMiLCJwYXBlciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImF2YXRhciIsIm1hcmdpbiIsInNwYWNpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImZvcm0iLCJ3aWR0aCIsIm1hcmdpblRvcCIsInN1Ym1pdCIsInRleHRGaWVsZCIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwidGV4dF9pbmZvIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiQXV0aEZvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2NhbGUiLCJjb250ZW50IiwiY29udGVudEFSIiwiY29udGVudEVOIiwiY29udGVudEZSIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVtYWlsRXJyb3IiLCJzZXRFbWFpbEVycm9yIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJtZXNzYWdlRXJyb3IiLCJzZXRFcnJvck1lc3NhZ2UiLCJzZW5kaW5nIiwic3VjY2VzcyIsImRvbm5lSW5jb3JlY3RlIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsInZhbGlkYXRlRmllbGQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInJlIiwiZW1haWxFcnIiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJwYXNzd29yZExlbmciLCJsZW5ndGgiLCJzdWJtaXRpbmciLCJwcmV2ZW50RGVmYXVsdCIsIm9sZCIsImRhdGEiLCJmZXRjaCIsIkNvbmZpZyIsIkJBQ0tFTkRfVVJMIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInIiLCJqc29uIiwicmVzIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidmFsaWRhdG9yIiwibWVzc2FnZSIsInZhbHVlIiwic3R5bGUiLCJlbWFpbExhYmVsIiwicGFzc0xhYmVsIiwic2lnbmluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFHQSxJQUFNQSxzQkFBc0IsR0FBR0MsMkVBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNsREMsUUFBSSxFQUFFO0FBQ0osMkJBQXFCO0FBQ25CQyxtQkFBVyxFQUFFLFNBRE07QUFDSUMsbUJBQVcsRUFBQztBQURoQixPQURqQjtBQUlKLGlDQUEyQjtBQUN6QkQsbUJBQVcsRUFBRSxTQURZO0FBQ0ZDLG1CQUFXLEVBQUM7QUFEVixPQUp2QjtBQU9KLG1DQUE2QjtBQUMzQkQsbUJBQVcsRUFBRSxTQURjO0FBQ0pDLG1CQUFXLEVBQUM7QUFEUjtBQVB6QixLQUQ0QztBQVlsREMsV0FBTyxFQUFFLEVBWnlDO0FBYWxEQyxrQkFBYyxFQUFFO0FBYmtDLEdBQUw7QUFBQSxDQUFOLENBQXpDO0FBZUEsSUFBTUMsU0FBUyxHQUFHUCwyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDTyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsbUJBQWEsRUFBRSxRQUZWO0FBR0xDLGdCQUFVLEVBQUU7QUFIUCxLQURnQztBQU12Q0MsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRVosS0FBSyxDQUFDYSxPQUFOLENBQWMsQ0FBZCxDQURGO0FBRU5DLHFCQUFlLEVBQUVkLEtBQUssQ0FBQ2UsT0FBTixDQUFjQyxTQUFkLENBQXdCQztBQUZuQyxLQU4rQjtBQVV2Q0MsUUFBSSxF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O0FBQUE7QUFBQTtBQUFBLFlBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0VEOztHQTFLdUJuQixRO1VBQ050QixTLEVBQ0QwQixxRDs7O0tBRk9KLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9uZXcuZjlkNzNmNjA1YWQ1MmI3YzE1MDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCwgRm9ybUNvbnRyb2xMYWJlbCwgQ2hlY2tib3gsIEJveCwgVHlwb2dyYXBoeSwgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi8uLi9FbmRQb2ludCdcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuaW1wb3J0IGNvbnRlbnRGUiBmcm9tICcuLy4uL2NvbnRlbnRGUidcclxuaW1wb3J0IGNvbnRlbnRFTiBmcm9tICcuLy4uL2NvbnRlbnRFTidcclxuaW1wb3J0IGNvbnRlbnRBUiBmcm9tICcuLy4uL2NvbnRlbnRBUidcclxuXHJcbmltcG9ydCB7Um93LCBDb2xsYXBzZSwgQWxlcnR9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcblxyXG5jb25zdCB1c2VPdXRsaW5lZElucHV0U3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIFwiJiAkbm90Y2hlZE91dGxpbmVcIjoge1xyXG4gICAgICBib3JkZXJDb2xvcjogXCIjMzg4NjlDXCIsYm9yZGVyV2lkdGg6XCIycHggIWltcG9ydGFudFwiXHJcbiAgICB9LFxyXG4gICAgXCImOmhvdmVyICRub3RjaGVkT3V0bGluZVwiOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiBcIiMzODg2OUNcIixib3JkZXJXaWR0aDpcIjJweCAhaW1wb3J0YW50XCJcclxuICAgIH0sXHJcbiAgICBcIiYkZm9jdXNlZCAkbm90Y2hlZE91dGxpbmVcIjoge1xyXG4gICAgICBib3JkZXJDb2xvcjogXCIjMzg4NjlDXCIsYm9yZGVyV2lkdGg6XCIycHggIWltcG9ydGFudFwiXHJcbiAgICB9XHJcbiAgfSxcclxuICBmb2N1c2VkOiB7fSxcclxuICBub3RjaGVkT3V0bGluZToge31cclxufSkpO1xyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBwYXBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGF2YXRhcjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gIH0sXHJcbiAgZm9ybToge1xyXG4gICAgd2lkdGg6ICcxMDAlJywgLy8gRml4IElFIDExIGlzc3VlLlxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbiAgc3VibWl0OiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCwgMiksXHJcbiAgICBcclxuICB9LFxyXG5cclxuICB0ZXh0RmllbGQ6IHtcclxuICAgIGJvcmRlclJhZGl1czoxMyxcclxuICAgIGJvcmRlckNvbG9yOlwiIzM4ODY5Q1wiLFxyXG4gICAgY29sb3I6XCIjNjE3ODhFXCJcclxuIH0sXHJcbiB0ZXh0X2luZm86e1xyXG4gICAgIGNvbG9yOlwiIzYxNzg4RVwiLFxyXG4gICAgIGZvbnRTaXplOjE0LGZvbnRXZWlnaHQ6NTAwXHJcbiB9LFxyXG4gbm90Y2hlZE91dGxpbmU6IHsgYm9yZGVyQ29sb3I6ICcjMzg4NjlDICFpbXBvcnRhbnQnLGJvcmRlcldpZHRoOlwiMnB4ICFpbXBvcnRhbnRcIiB9XHJcbn0pKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoRm9ybShwcm9wcyl7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICBjb25zdCB7bG9jYWxlfSA9IHJvdXRlcjtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBsb2NhbGUgPT09IFwiYXJcIiA/IGNvbnRlbnRBUiA6IGxvY2FsZSA9PT0gXCJlblwiID8gY29udGVudEVOIDogY29udGVudEZSO1xyXG5cclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtlbWFpbEVycm9yLCBzZXRFbWFpbEVycm9yXT0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbWVzc2FnZUVycm9yLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJJbmZvcm1hdGlvbiBpbmNvcnJlY3RcIilcclxuXHJcbiAgY29uc3QgW3Jlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBzZW5kaW5nOmZhbHNlLFxyXG4gICAgc3VjY2VzczpmYWxzZSwgICBcclxuICAgIGRvbm5lSW5jb3JlY3RlOiBmYWxzZSAgICAgICAgICAgICAgICAgXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgdmFsaWRhdGVGaWVsZCA9IChlKSA9PiB7XHJcbiAgICBpZihlLnRhcmdldC5uYW1lID09PSBcImVtYWlsXCIpe1xyXG4gICAgICBsZXQgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICAgIGxldCBlbWFpbEVyciA9ICEgcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICBcclxuICAgICAgc2V0RW1haWxFcnJvcihlbWFpbEVycik7XHJcbiAgICB9XHJcbiAgICBlbHNlICBpZihlLnRhcmdldC5uYW1lID09PSBcInBhc3N3b3JkXCIpe1xyXG4gICAgICBsZXQgcGFzc3dvcmRMZW5nID0gcGFzc3dvcmQubGVuZ3RoIDtcclxuICAgICAgc2V0UGFzc3dvcmRFcnJvcihwYXNzd29yZExlbmcgPCA4KTtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VibWl0aW5nID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRSZXNwb25zZShvbGQgPT4gIHsgcmV0dXJuIHsuLi5vbGQsIHNlbmRpbmc6IHRydWV9fSk7XHJcblxyXG4gICAgICAgIGlmKCFlbWFpbEVycm9yKXtcclxuXHJcblxyXG4gICAgICAgICAgbGV0IGRhdGEgPSB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgICBmZXRjaChgJHtDb25maWcuQkFDS0VORF9VUkx9L3BhdGllbnQvYXV0aGAse1xyXG4gICAgICAgICAgICAgIG1ldGhvZDpcInBvc3RcIixcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHsuLi5kYXRhfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAocikgPT4gci5qc29uKClcclxuICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICBpZighcmVzLmVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN1Ym1pdGluZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe3NlbmRpbmc6IGZhbHNlLCBzdWNjZXNzOnRydWUsIGRvbm5lSW5jb3JlY3RlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7c2VuZGluZzogZmFsc2UsIHN1Y2Nlc3M6ZmFsc2UsIGRvbm5lSW5jb3JlY3RlOnRydWV9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnZhbGlkYXRvcil7XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKHJlcy5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaChlID0+eyBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHtzZW5kaW5nOiBmYWxzZSwgc3VjY2VzczpmYWxzZSwgZG9ubmVJbmNvcmVjdGU6dHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgIGlmKGUucmVzcG9uc2UuZGF0YS5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGUucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiVW5lIMOpcmV1ciBpbmNvbnVlIGVzdCBzdXJ2ZW51ZVwiKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgLmNhdGNoKGUgPT57IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe3NlbmRpbmc6IGZhbHNlLCBzdWNjZXNzOmZhbHNlLCBkb25uZUluY29yZWN0ZTp0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgaWYoZS5yZXNwb25zZS5kYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJVbmUgw6lyZXVyIGluY29udWUgZXN0IHN1cnZlbnVlXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICB9XHJcbiAgcmV0dXJuKFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIHsvKiA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPiB7Y29udGVudC5uZXcuYXV0aH0gPC9UeXBvZ3JhcGh5PiAqL31cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9eyhlKSA9PiBzdWJtaXRpbmcoZSwge2VtYWlsLCBwYXNzd29yZH0pfT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFsdWU9IHtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGVycm9yPXtlbWFpbEVycm9yfVxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgbm90Y2hlZE91dGxpbmU6IGNsYXNzZXMubm90Y2hlZE91dGxpbmVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogJyM2MTc4OEUnIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBvbkJsdXI9e3ZhbGlkYXRlRmllbGR9IFxyXG4gICAgICAgICAgICBsYWJlbD17Y29udGVudC5uZXcuZW1haWxMYWJlbH1cclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGVycm9yPXtwYXNzd29yZEVycm9yfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgb25CbHVyPXt2YWxpZGF0ZUZpZWxkfSBcclxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgbm90Y2hlZE91dGxpbmU6IGNsYXNzZXMubm90Y2hlZE91dGxpbmVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogJyM2MTc4OEUnIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGxhYmVsPXtjb250ZW50Lm5ldy5wYXNzTGFiZWx9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAge2NvbnRlbnQubmV3LnNpZ25pbn1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCb3ggbXQ9ezh9PlxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e3Jlc3BvbnNlLmRvbm5lSW5jb3JlY3RlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImV4YW1wbGUtY29sbGFwc2UtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJkYW5nZXJcIj4ge21lc3NhZ2VFcnJvcn0gPC9BbGVydD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9