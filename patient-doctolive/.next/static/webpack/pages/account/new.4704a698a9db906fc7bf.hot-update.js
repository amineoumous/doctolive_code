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
    alert("jj");

    if (!emailError && !passwordError) {
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
          lineNumber: 160,
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
          lineNumber: 185,
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
          lineNumber: 211,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
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
              lineNumber: 226,
              columnNumber: 23
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 155,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbi5qcyJdLCJuYW1lcyI6WyJ1c2VPdXRsaW5lZElucHV0U3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJmb2N1c2VkIiwibm90Y2hlZE91dGxpbmUiLCJ1c2VTdHlsZXMiLCJwYXBlciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImF2YXRhciIsIm1hcmdpbiIsInNwYWNpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImZvcm0iLCJ3aWR0aCIsIm1hcmdpblRvcCIsInN1Ym1pdCIsInRleHRGaWVsZCIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwidGV4dF9pbmZvIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiQXV0aEZvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2NhbGUiLCJjb250ZW50IiwiY29udGVudEFSIiwiY29udGVudEVOIiwiY29udGVudEZSIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVtYWlsRXJyb3IiLCJzZXRFbWFpbEVycm9yIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJtZXNzYWdlRXJyb3IiLCJzZXRFcnJvck1lc3NhZ2UiLCJzZW5kaW5nIiwic3VjY2VzcyIsImRvbm5lSW5jb3JlY3RlIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsInZhbGlkYXRlRmllbGQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInJlIiwiZW1haWxFcnIiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJwYXNzd29yZExlbmciLCJsZW5ndGgiLCJzdWJtaXRpbmciLCJwcmV2ZW50RGVmYXVsdCIsIm9sZCIsImFsZXJ0IiwiZGF0YSIsImZldGNoIiwiQ29uZmlnIiwiQkFDS0VORF9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiciIsImpzb24iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ2YWxpZGF0b3IiLCJtZXNzYWdlIiwidmFsdWUiLCJzdHlsZSIsImVtYWlsTGFiZWwiLCJwYXNzTGFiZWwiLCJzaWduaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLHNCQUFzQixHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ2xEQyxRQUFJLEVBQUU7QUFDSiwyQkFBcUI7QUFDbkJDLG1CQUFXLEVBQUUsU0FETTtBQUNJQyxtQkFBVyxFQUFDO0FBRGhCLE9BRGpCO0FBSUosaUNBQTJCO0FBQ3pCRCxtQkFBVyxFQUFFLFNBRFk7QUFDRkMsbUJBQVcsRUFBQztBQURWLE9BSnZCO0FBT0osbUNBQTZCO0FBQzNCRCxtQkFBVyxFQUFFLFNBRGM7QUFDSkMsbUJBQVcsRUFBQztBQURSO0FBUHpCLEtBRDRDO0FBWWxEQyxXQUFPLEVBQUUsRUFaeUM7QUFhbERDLGtCQUFjLEVBQUU7QUFia0MsR0FBTDtBQUFBLENBQU4sQ0FBekM7QUFlQSxJQUFNQyxTQUFTLEdBQUdQLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNPLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxtQkFBYSxFQUFFLFFBRlY7QUFHTEMsZ0JBQVUsRUFBRTtBQUhQLEtBRGdDO0FBTXZDQyxVQUFNLEVBQUU7QUFDTkMsWUFBTSxFQUFFWixLQUFLLENBQUNhLE9BQU4sQ0FBYyxDQUFkLENBREY7QUFFTkMscUJBQWUsRUFBRWQsS0FBSyxDQUFDZSxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDO0FBRm5DLEtBTitCO0FBVXZDQyxRQUFJLEVBQUU7QUFDSkMsV0FBSyxFQUFFLE1BREg7QUFDVztBQUNmQyxlQUFTLEVBQUVwQixLQUFLLENBQUNhLE9BQU4sQ0FBYyxDQUFkO0FBRlAsS0FWaUM7QUFjdkNRLFVBQU0sRUFBRTtBQUNOVCxZQUFNLEVBQUVaLEtBQUssQ0FBQ2EsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFERixLQWQrQjtBQW1CdkNTLGFBQVMsRUFBRTtBQUNUQyxrQkFBWSxFQUFDLEVBREo7QUFFVHJCLGlCQUFXLEVBQUMsU0FGSDtBQUdUc0IsV0FBSyxFQUFDO0FBSEcsS0FuQjRCO0FBd0J4Q0MsYUFBUyxFQUFDO0FBQ05ELFdBQUssRUFBQyxTQURBO0FBRU5FLGNBQVEsRUFBQyxFQUZIO0FBRU1DLGdCQUFVLEVBQUM7QUFGakIsS0F4QjhCO0FBNEJ4Q3RCLGtCQUFjLEVBQUU7QUFBRUgsaUJBQVcsRUFBRSxvQkFBZjtBQUFvQ0MsaUJBQVcsRUFBQztBQUFoRDtBQTVCd0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFnQ2UsU0FBU3lCLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXdCO0FBQUE7O0FBQ3JDLE1BQU1DLE9BQU8sR0FBR3hCLFNBQVMsRUFBekI7QUFDQSxNQUFNeUIsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUZxQyxNQUs1QkMsTUFMNEIsR0FLbEJGLE1BTGtCLENBSzVCRSxNQUw0QjtBQU1uQyxNQUFNQyxPQUFPLEdBQUdELE1BQU0sS0FBSyxJQUFYLEdBQWtCRSxrREFBbEIsR0FBOEJGLE1BQU0sS0FBSyxJQUFYLEdBQWtCRyxrREFBbEIsR0FBOEJDLGtEQUE1RTs7QUFObUMsa0JBUVhDLHNEQUFRLENBQUMsRUFBRCxDQVJHO0FBQUEsTUFROUJDLEtBUjhCO0FBQUEsTUFRdkJDLFFBUnVCOztBQUFBLG1CQVNMRixzREFBUSxDQUFDLEVBQUQsQ0FUSDtBQUFBLE1BUzlCRyxRQVQ4QjtBQUFBLE1BU3BCQyxXQVRvQjs7QUFBQSxtQkFXRkosc0RBQVEsQ0FBQyxLQUFELENBWE47QUFBQSxNQVc5QkssVUFYOEI7QUFBQSxNQVdsQkMsYUFYa0I7O0FBQUEsbUJBWUlOLHNEQUFRLENBQUMsS0FBRCxDQVpaO0FBQUEsTUFZOUJPLGFBWjhCO0FBQUEsTUFZZkMsZ0JBWmU7O0FBQUEsbUJBYUdSLHNEQUFRLENBQUMsdUJBQUQsQ0FiWDtBQUFBLE1BYTlCUyxZQWI4QjtBQUFBLE1BYWhCQyxlQWJnQjs7QUFBQSxtQkFlTFYsc0RBQVEsQ0FBQztBQUN2Q1csV0FBTyxFQUFDLEtBRCtCO0FBRXZDQyxXQUFPLEVBQUMsS0FGK0I7QUFHdkNDLGtCQUFjLEVBQUU7QUFIdUIsR0FBRCxDQWZIO0FBQUEsTUFlOUJDLFFBZjhCO0FBQUEsTUFlcEJDLFdBZm9COztBQXFCckMsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87QUFDM0IsUUFBR0EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQVQsS0FBa0IsT0FBckIsRUFBNkI7QUFDM0IsVUFBSUMsRUFBRSxHQUFHLHVKQUFUO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLENBQUVELEVBQUUsQ0FBQ0UsSUFBSCxDQUFRQyxNQUFNLENBQUN0QixLQUFELENBQU4sQ0FBY3VCLFdBQWQsRUFBUixDQUFqQjtBQUVBbEIsbUJBQWEsQ0FBQ2UsUUFBRCxDQUFiO0FBQ0QsS0FMRCxNQU1NLElBQUdKLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxJQUFULEtBQWtCLFVBQXJCLEVBQWdDO0FBQ3BDLFVBQUlNLFlBQVksR0FBR3RCLFFBQVEsQ0FBQ3VCLE1BQTVCO0FBQ0FsQixzQkFBZ0IsQ0FBQ2lCLFlBQVksR0FBRyxDQUFoQixDQUFoQjtBQUVEO0FBRUYsR0FiRDs7QUFlQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDVixDQUFELEVBQU87QUFDdkJBLEtBQUMsQ0FBQ1csY0FBRjtBQUNJYixlQUFXLENBQUMsVUFBQWMsR0FBRyxFQUFLO0FBQUUsNkNBQVdBLEdBQVg7QUFBZ0JsQixlQUFPLEVBQUU7QUFBekI7QUFBK0IsS0FBMUMsQ0FBWDtBQUNSbUIsU0FBSyxDQUFDLElBQUQsQ0FBTDs7QUFDUSxRQUFHLENBQUN6QixVQUFELElBQWUsQ0FBQ0UsYUFBbkIsRUFBaUM7QUFDL0IsVUFBSXdCLElBQUksR0FBRztBQUFDOUIsYUFBSyxFQUFMQSxLQUFEO0FBQVFFLGdCQUFRLEVBQVJBO0FBQVIsT0FBWDtBQUVBNkIsV0FBSyxXQUFJQyxpREFBTSxDQUFDQyxXQUFYLG9CQUFzQztBQUN2Q0MsY0FBTSxFQUFDLE1BRGdDO0FBRXZDQyxlQUFPLEVBQUU7QUFDTCwwQkFBZ0I7QUFEWCxTQUY4QjtBQUt2Q0MsWUFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsbUJBQW1CUixJQUFuQjtBQUxrQyxPQUF0QyxDQUFMLENBT0NTLElBUEQsQ0FRSSxVQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDQyxJQUFGLEdBQ05GLElBRE0sQ0FDRCxVQUFBRyxHQUFHLEVBQUk7QUFDWEMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaOztBQUNFLGNBQUcsQ0FBQ0EsR0FBRyxDQUFDRyxLQUFSLEVBQWM7QUFDVnZELGlCQUFLLENBQUNvQyxTQUFOLENBQWdCZ0IsR0FBaEI7QUFDQTVCLHVCQUFXLENBQUM7QUFBQ0oscUJBQU8sRUFBRSxLQUFWO0FBQWlCQyxxQkFBTyxFQUFDLElBQXpCO0FBQStCQyw0QkFBYyxFQUFFO0FBQS9DLGFBQUQsQ0FBWDtBQUNILFdBSEQsTUFHTTtBQUNGRSx1QkFBVyxDQUFDO0FBQUNKLHFCQUFPLEVBQUUsS0FBVjtBQUFpQkMscUJBQU8sRUFBQyxLQUF6QjtBQUFnQ0MsNEJBQWMsRUFBQztBQUEvQyxhQUFELENBQVg7O0FBQ0EsZ0JBQUc4QixHQUFHLENBQUNJLFNBQVAsRUFBaUIsQ0FFaEIsQ0FGRCxNQUVLO0FBQ0hyQyw2QkFBZSxDQUFDaUMsR0FBRyxDQUFDSyxPQUFMLENBQWY7QUFDRDtBQUNKO0FBRUosU0FmTSxXQWdCQSxVQUFBL0IsQ0FBQyxFQUFHO0FBQ1QyQixpQkFBTyxDQUFDQyxHQUFSLENBQVk1QixDQUFDLENBQUNILFFBQWQ7QUFDRUMscUJBQVcsQ0FBQztBQUFDSixtQkFBTyxFQUFFLEtBQVY7QUFBaUJDLG1CQUFPLEVBQUMsS0FBekI7QUFBZ0NDLDBCQUFjLEVBQUM7QUFBL0MsV0FBRCxDQUFYOztBQUNBLGNBQUdJLENBQUMsQ0FBQ0gsUUFBRixDQUFXaUIsSUFBWCxDQUFnQmUsS0FBbkIsRUFBeUI7QUFDdkJwQywyQkFBZSxDQUFDTyxDQUFDLENBQUNILFFBQUYsQ0FBV2lCLElBQVgsQ0FBZ0JpQixPQUFqQixDQUFmO0FBQ0QsV0FGRCxNQUVNO0FBQ0p0QywyQkFBZSxDQUFDLGdDQUFELENBQWY7QUFDRDtBQUNKLFNBeEJNLENBQVA7QUFBQSxPQVJKLFdBa0NXLFVBQUFPLENBQUMsRUFBRztBQUNUMkIsZUFBTyxDQUFDQyxHQUFSLENBQVk1QixDQUFDLENBQUNILFFBQWQ7QUFDRUMsbUJBQVcsQ0FBQztBQUFDSixpQkFBTyxFQUFFLEtBQVY7QUFBaUJDLGlCQUFPLEVBQUMsS0FBekI7QUFBZ0NDLHdCQUFjLEVBQUM7QUFBL0MsU0FBRCxDQUFYOztBQUNBLFlBQUdJLENBQUMsQ0FBQ0gsUUFBRixDQUFXaUIsSUFBWCxDQUFnQmUsS0FBbkIsRUFBeUI7QUFDdkJwQyx5QkFBZSxDQUFDTyxDQUFDLENBQUNILFFBQUYsQ0FBV2lCLElBQVgsQ0FBZ0JpQixPQUFqQixDQUFmO0FBQ0QsU0FGRCxNQUVNO0FBQ0p0Qyx5QkFBZSxDQUFDLGdDQUFELENBQWY7QUFDRDtBQUNKLE9BMUNMO0FBMkNEO0FBRU4sR0FwREQ7O0FBcURBLHNCQUNFLHFFQUFDLDJEQUFEO0FBQVcsYUFBUyxFQUFDLE1BQXJCO0FBQTRCLFlBQVEsRUFBQyxJQUFyQztBQUFBLDRCQUVFO0FBQUssZUFBUyxFQUFFbEIsT0FBTyxDQUFDdkIsS0FBeEI7QUFBQSw2QkFFRTtBQUFNLGlCQUFTLEVBQUV1QixPQUFPLENBQUNaLElBQXpCO0FBQStCLGdCQUFRLEVBQUUsa0JBQUNxQyxDQUFEO0FBQUEsaUJBQU9VLFNBQVMsQ0FBQ1YsQ0FBRCxFQUFJO0FBQUNoQixpQkFBSyxFQUFMQSxLQUFEO0FBQVFFLG9CQUFRLEVBQVJBO0FBQVIsV0FBSixDQUFoQjtBQUFBLFNBQXpDO0FBQUEsZ0NBQ0UscUVBQUMsMkRBQUQ7QUFDRSxlQUFLLEVBQUdGLEtBRFY7QUFFRSxrQkFBUSxFQUFFLGtCQUFDZ0IsQ0FBRDtBQUFBLG1CQUFPZixRQUFRLENBQUNlLENBQUMsQ0FBQ0MsTUFBRixDQUFTK0IsS0FBVixDQUFmO0FBQUEsV0FGWjtBQUdFLGVBQUssRUFBRTVDLFVBSFQ7QUFJRSxnQkFBTSxFQUFDLFFBSlQ7QUFLRSxrQkFBUSxNQUxWO0FBTUUsbUJBQVMsTUFOWDtBQU9FLG9CQUFVLEVBQUU7QUFDVmIsbUJBQU8sRUFBRTtBQUNMekIsNEJBQWMsRUFBRXlCLE9BQU8sQ0FBQ3pCO0FBRG5CLGFBREM7QUFJVm1GLGlCQUFLLEVBQUU7QUFDTGpFLDBCQUFZLEVBQUU7QUFEVDtBQUpHLFdBUGQ7QUFlRSx5QkFBZSxFQUFFO0FBQ2ZpRSxpQkFBSyxFQUFFO0FBQUVoRSxtQkFBSyxFQUFFO0FBQVQ7QUFEUSxXQWZuQjtBQWtCRSxZQUFFLEVBQUMsT0FsQkw7QUFtQkUsaUJBQU8sRUFBQyxVQW5CVjtBQW9CRSxnQkFBTSxFQUFFOEIsYUFwQlY7QUFxQkUsZUFBSyxFQUFFcEIsT0FBTyxPQUFQLENBQVl1RCxVQXJCckI7QUFzQkUsY0FBSSxFQUFDLE9BdEJQO0FBdUJFLHNCQUFZLEVBQUM7QUF2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQTBCRSxxRUFBQywyREFBRDtBQUNFLGdCQUFNLEVBQUMsUUFEVDtBQUVFLGVBQUssRUFBRWhELFFBRlQ7QUFHRSxpQkFBTyxFQUFDLFVBSFY7QUFJRSxrQkFBUSxFQUFHLGtCQUFDYyxDQUFEO0FBQUEsbUJBQU9iLFdBQVcsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVMrQixLQUFWLENBQWxCO0FBQUEsV0FKYjtBQUtFLGVBQUssRUFBRTFDLGFBTFQ7QUFNRSxrQkFBUSxNQU5WO0FBT0UsbUJBQVMsTUFQWDtBQVFFLGdCQUFNLEVBQUVTLGFBUlY7QUFTRSxvQkFBVSxFQUFFO0FBQ1Z4QixtQkFBTyxFQUFFO0FBQ0x6Qiw0QkFBYyxFQUFFeUIsT0FBTyxDQUFDekI7QUFEbkIsYUFEQztBQUlWbUYsaUJBQUssRUFBRTtBQUNMakUsMEJBQVksRUFBRTtBQURUO0FBSkcsV0FUZDtBQWlCRSx5QkFBZSxFQUFFO0FBQ2ZpRSxpQkFBSyxFQUFFO0FBQUVoRSxtQkFBSyxFQUFFO0FBQVQ7QUFEUSxXQWpCbkI7QUFvQkUsY0FBSSxFQUFDLFVBcEJQO0FBcUJFLGVBQUssRUFBRVUsT0FBTyxPQUFQLENBQVl3RCxTQXJCckI7QUFzQkUsY0FBSSxFQUFDLFVBdEJQO0FBdUJFLFlBQUUsRUFBQyxVQXZCTDtBQXdCRSxzQkFBWSxFQUFDO0FBeEJmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUJGLGVBb0RFLHFFQUFDLHdEQUFEO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxtQkFBUyxNQUZYO0FBR0UsaUJBQU8sRUFBQyxXQUhWO0FBSUUsZUFBSyxFQUFDLFNBSlI7QUFLRSxtQkFBUyxFQUFFNUQsT0FBTyxDQUFDVCxNQUxyQjtBQUFBLG9CQU9FYSxPQUFPLE9BQVAsQ0FBWXlEO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBbUVFLHFFQUFDLHFEQUFEO0FBQUssUUFBRSxFQUFFLENBQVQ7QUFBQSw2QkFDQSxxRUFBQyxvREFBRDtBQUFLLGlCQUFTLEVBQUMsd0JBQWY7QUFBQSwrQkFDUSxxRUFBQyx5REFBRDtBQUFVLGdCQUFJdkMsUUFBUSxDQUFDRCxjQUF2QjtBQUFBLGlDQUNNO0FBQUssY0FBRSxFQUFDLHVCQUFSO0FBQUEsbUNBQ0UscUVBQUMsc0RBQUQ7QUFBTyxxQkFBTyxFQUFDLFFBQWY7QUFBQSw4QkFBMEJKLFlBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErRUQ7O0dBeEt1Qm5CLFE7VUFDTnRCLFMsRUFDRDBCLHFEOzs7S0FGT0osUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hY2NvdW50L25ldy40NzA0YTY5OGE5ZGI5MDZmYzdiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbExhYmVsLCBDaGVja2JveCwgQm94LCBUeXBvZ3JhcGh5LCBDb250YWluZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IENvbmZpZyBmcm9tICcuLy4uL0VuZFBvaW50J1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcblxyXG5pbXBvcnQgY29udGVudEZSIGZyb20gJy4vLi4vY29udGVudEZSJ1xyXG5pbXBvcnQgY29udGVudEVOIGZyb20gJy4vLi4vY29udGVudEVOJ1xyXG5pbXBvcnQgY29udGVudEFSIGZyb20gJy4vLi4vY29udGVudEFSJ1xyXG5cclxuaW1wb3J0IHtSb3csIENvbGxhcHNlLCBBbGVydH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuXHJcbmNvbnN0IHVzZU91dGxpbmVkSW5wdXRTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgXCImICRub3RjaGVkT3V0bGluZVwiOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiBcIiMzODg2OUNcIixib3JkZXJXaWR0aDpcIjJweCAhaW1wb3J0YW50XCJcclxuICAgIH0sXHJcbiAgICBcIiY6aG92ZXIgJG5vdGNoZWRPdXRsaW5lXCI6IHtcclxuICAgICAgYm9yZGVyQ29sb3I6IFwiIzM4ODY5Q1wiLGJvcmRlcldpZHRoOlwiMnB4ICFpbXBvcnRhbnRcIlxyXG4gICAgfSxcclxuICAgIFwiJiRmb2N1c2VkICRub3RjaGVkT3V0bGluZVwiOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiBcIiMzODg2OUNcIixib3JkZXJXaWR0aDpcIjJweCAhaW1wb3J0YW50XCJcclxuICAgIH1cclxuICB9LFxyXG4gIGZvY3VzZWQ6IHt9LFxyXG4gIG5vdGNoZWRPdXRsaW5lOiB7fVxyXG59KSk7XHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHBhcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgYXZhdGFyOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLCAvLyBGaXggSUUgMTEgaXNzdWUuXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBzdWJtaXQ6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIHRleHRGaWVsZDoge1xyXG4gICAgYm9yZGVyUmFkaXVzOjEzLFxyXG4gICAgYm9yZGVyQ29sb3I6XCIjMzg4NjlDXCIsXHJcbiAgICBjb2xvcjpcIiM2MTc4OEVcIlxyXG4gfSxcclxuIHRleHRfaW5mbzp7XHJcbiAgICAgY29sb3I6XCIjNjE3ODhFXCIsXHJcbiAgICAgZm9udFNpemU6MTQsZm9udFdlaWdodDo1MDBcclxuIH0sXHJcbiBub3RjaGVkT3V0bGluZTogeyBib3JkZXJDb2xvcjogJyMzODg2OUMgIWltcG9ydGFudCcsYm9yZGVyV2lkdGg6XCIycHggIWltcG9ydGFudFwiIH1cclxufSkpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhGb3JtKHByb3BzKXtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IHtsb2NhbGV9ID0gcm91dGVyO1xyXG4gICAgY29uc3QgY29udGVudCA9IGxvY2FsZSA9PT0gXCJhclwiID8gY29udGVudEFSIDogbG9jYWxlID09PSBcImVuXCIgPyBjb250ZW50RU4gOiBjb250ZW50RlI7XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2VtYWlsRXJyb3IsIHNldEVtYWlsRXJyb3JdPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl09IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFttZXNzYWdlRXJyb3IsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIkluZm9ybWF0aW9uIGluY29ycmVjdFwiKVxyXG5cclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKHtcclxuICAgIHNlbmRpbmc6ZmFsc2UsXHJcbiAgICBzdWNjZXNzOmZhbHNlLCAgIFxyXG4gICAgZG9ubmVJbmNvcmVjdGU6IGZhbHNlICAgICAgICAgICAgICAgICBcclxuICB9KVxyXG5cclxuICBjb25zdCB2YWxpZGF0ZUZpZWxkID0gKGUpID0+IHtcclxuICAgIGlmKGUudGFyZ2V0Lm5hbWUgPT09IFwiZW1haWxcIil7XHJcbiAgICAgIGxldCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgICAgbGV0IGVtYWlsRXJyID0gISByZS50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIFxyXG4gICAgICBzZXRFbWFpbEVycm9yKGVtYWlsRXJyKTtcclxuICAgIH1cclxuICAgIGVsc2UgIGlmKGUudGFyZ2V0Lm5hbWUgPT09IFwicGFzc3dvcmRcIil7XHJcbiAgICAgIGxldCBwYXNzd29yZExlbmcgPSBwYXNzd29yZC5sZW5ndGggO1xyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKHBhc3N3b3JkTGVuZyA8IDgpO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBjb25zdCBzdWJtaXRpbmcgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHNldFJlc3BvbnNlKG9sZCA9PiAgeyByZXR1cm4gey4uLm9sZCwgc2VuZGluZzogdHJ1ZX19KTtcclxuYWxlcnQoXCJqalwiKTtcclxuICAgICAgICBpZighZW1haWxFcnJvciAmJiAhcGFzc3dvcmRFcnJvcil7XHJcbiAgICAgICAgICBsZXQgZGF0YSA9IHtlbWFpbCwgcGFzc3dvcmR9O1xyXG5cclxuICAgICAgICAgIGZldGNoKGAke0NvbmZpZy5CQUNLRU5EX1VSTH0vcGF0aWVudC9hdXRoYCx7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOlwicG9zdFwiLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoey4uLmRhdGF9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgIChyKSA9PiByLmpzb24oKVxyXG4gICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgIGlmKCFyZXMuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc3VibWl0aW5nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7c2VuZGluZzogZmFsc2UsIHN1Y2Nlc3M6dHJ1ZSwgZG9ubmVJbmNvcmVjdGU6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHtzZW5kaW5nOiBmYWxzZSwgc3VjY2VzczpmYWxzZSwgZG9ubmVJbmNvcmVjdGU6dHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZihyZXMudmFsaWRhdG9yKXtcclxuICBcclxuICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UocmVzLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKGUgPT57IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe3NlbmRpbmc6IGZhbHNlLCBzdWNjZXNzOmZhbHNlLCBkb25uZUluY29yZWN0ZTp0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgaWYoZS5yZXNwb25zZS5kYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJVbmUgw6lyZXVyIGluY29udWUgZXN0IHN1cnZlbnVlXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAuY2F0Y2goZSA9PnsgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7c2VuZGluZzogZmFsc2UsIHN1Y2Nlc3M6ZmFsc2UsIGRvbm5lSW5jb3JlY3RlOnRydWV9KVxyXG4gICAgICAgICAgICAgICAgICBpZihlLnJlc3BvbnNlLmRhdGEuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIlVuZSDDqXJldXIgaW5jb251ZSBlc3Qgc3VydmVudWVcIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gIH1cclxuICByZXR1cm4oXHJcbiAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgey8qIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+IHtjb250ZW50Lm5ldy5hdXRofSA8L1R5cG9ncmFwaHk+ICovfVxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17KGUpID0+IHN1Ym1pdGluZyhlLCB7ZW1haWwsIHBhc3N3b3JkfSl9PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICB2YWx1ZT0ge2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgZXJyb3I9e2VtYWlsRXJyb3J9XHJcbiAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgICAgICAgICAgICBub3RjaGVkT3V0bGluZTogY2xhc3Nlcy5ub3RjaGVkT3V0bGluZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiAnIzYxNzg4RScgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIG9uQmx1cj17dmFsaWRhdGVGaWVsZH0gXHJcbiAgICAgICAgICAgIGxhYmVsPXtjb250ZW50Lm5ldy5lbWFpbExhYmVsfVxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgZXJyb3I9e3Bhc3N3b3JkRXJyb3J9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICBvbkJsdXI9e3ZhbGlkYXRlRmllbGR9IFxyXG4gICAgICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgY2xhc3Nlczoge1xyXG4gICAgICAgICAgICAgICAgICBub3RjaGVkT3V0bGluZTogY2xhc3Nlcy5ub3RjaGVkT3V0bGluZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17e1xyXG4gICAgICAgICAgICAgIHN0eWxlOiB7IGNvbG9yOiAnIzYxNzg4RScgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbGFiZWw9e2NvbnRlbnQubmV3LnBhc3NMYWJlbH1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICB7Y29udGVudC5uZXcuc2lnbmlufVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJveCBtdD17OH0+XHJcbiAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17cmVzcG9uc2UuZG9ubmVJbmNvcmVjdGV9ID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXhhbXBsZS1jb2xsYXBzZS10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cImRhbmdlclwiPiB7bWVzc2FnZUVycm9yfSA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=