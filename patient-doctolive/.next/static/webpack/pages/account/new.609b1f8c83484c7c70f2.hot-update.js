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
      alert("jj1");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbi5qcyJdLCJuYW1lcyI6WyJ1c2VPdXRsaW5lZElucHV0U3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJmb2N1c2VkIiwibm90Y2hlZE91dGxpbmUiLCJ1c2VTdHlsZXMiLCJwYXBlciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImF2YXRhciIsIm1hcmdpbiIsInNwYWNpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsImZvcm0iLCJ3aWR0aCIsIm1hcmdpblRvcCIsInN1Ym1pdCIsInRleHRGaWVsZCIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwidGV4dF9pbmZvIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiQXV0aEZvcm0iLCJwcm9wcyIsImNsYXNzZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2NhbGUiLCJjb250ZW50IiwiY29udGVudEFSIiwiY29udGVudEVOIiwiY29udGVudEZSIiwidXNlU3RhdGUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVtYWlsRXJyb3IiLCJzZXRFbWFpbEVycm9yIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJtZXNzYWdlRXJyb3IiLCJzZXRFcnJvck1lc3NhZ2UiLCJzZW5kaW5nIiwic3VjY2VzcyIsImRvbm5lSW5jb3JlY3RlIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsInZhbGlkYXRlRmllbGQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInJlIiwiZW1haWxFcnIiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJwYXNzd29yZExlbmciLCJsZW5ndGgiLCJzdWJtaXRpbmciLCJwcmV2ZW50RGVmYXVsdCIsIm9sZCIsImFsZXJ0IiwiZGF0YSIsImZldGNoIiwiQ29uZmlnIiwiQkFDS0VORF9VUkwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiciIsImpzb24iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ2YWxpZGF0b3IiLCJtZXNzYWdlIiwidmFsdWUiLCJzdHlsZSIsImVtYWlsTGFiZWwiLCJwYXNzTGFiZWwiLCJzaWduaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLHNCQUFzQixHQUFHQywyRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ2xEQyxRQUFJLEVBQUU7QUFDSiwyQkFBcUI7QUFDbkJDLG1CQUFXLEVBQUUsU0FETTtBQUNJQyxtQkFBVyxFQUFDO0FBRGhCLE9BRGpCO0FBSUosaUNBQTJCO0FBQ3pCRCxtQkFBVyxFQUFFLFNBRFk7QUFDRkMsbUJBQVcsRUFBQztBQURWLE9BSnZCO0FBT0osbUNBQTZCO0FBQzNCRCxtQkFBVyxFQUFFLFNBRGM7QUFDSkMsbUJBQVcsRUFBQztBQURSO0FBUHpCLEtBRDRDO0FBWWxEQyxXQUFPLEVBQUUsRUFaeUM7QUFhbERDLGtCQUFjLEVBQUU7QUFia0MsR0FBTDtBQUFBLENBQU4sQ0FBekM7QUFlQSxJQUFNQyxTQUFTLEdBQUdQLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNPLFNBQUssRUFBRTtBQUNMQyxhQUFPLEVBQUUsTUFESjtBQUVMQyxtQkFBYSxFQUFFLFFBRlY7QUFHTEMsZ0JBQVUsRUFBRTtBQUhQLEtBRGdDO0FBTXZDQyxVQUFNLEVBQUU7QUFDTkMsWUFBTSxFQUFFWixLQUFLLENBQUNhLE9BQU4sQ0FBYyxDQUFkLENBREY7QUFFTkMscUJBQWUsRUFBRWQsS0FBSyxDQUFDZSxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDO0FBRm5DLEtBTitCO0FBVXZD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REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5FRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStFRDs7R0ExS3VCbkIsUTtVQUNOdEIsUyxFQUNEMEIscUQ7OztLQUZPSixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FjY291bnQvbmV3LjYwOWIxZjhjODM0ODRjN2M3MGYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQsIEZvcm1Db250cm9sTGFiZWwsIENoZWNrYm94LCBCb3gsIFR5cG9ncmFwaHksIENvbnRhaW5lcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vLi4vRW5kUG9pbnQnXHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcbmltcG9ydCBjb250ZW50RlIgZnJvbSAnLi8uLi9jb250ZW50RlInXHJcbmltcG9ydCBjb250ZW50RU4gZnJvbSAnLi8uLi9jb250ZW50RU4nXHJcbmltcG9ydCBjb250ZW50QVIgZnJvbSAnLi8uLi9jb250ZW50QVInXHJcblxyXG5pbXBvcnQge1JvdywgQ29sbGFwc2UsIEFsZXJ0fSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5cclxuY29uc3QgdXNlT3V0bGluZWRJbnB1dFN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBcIiYgJG5vdGNoZWRPdXRsaW5lXCI6IHtcclxuICAgICAgYm9yZGVyQ29sb3I6IFwiIzM4ODY5Q1wiLGJvcmRlcldpZHRoOlwiMnB4ICFpbXBvcnRhbnRcIlxyXG4gICAgfSxcclxuICAgIFwiJjpob3ZlciAkbm90Y2hlZE91dGxpbmVcIjoge1xyXG4gICAgICBib3JkZXJDb2xvcjogXCIjMzg4NjlDXCIsYm9yZGVyV2lkdGg6XCIycHggIWltcG9ydGFudFwiXHJcbiAgICB9LFxyXG4gICAgXCImJGZvY3VzZWQgJG5vdGNoZWRPdXRsaW5lXCI6IHtcclxuICAgICAgYm9yZGVyQ29sb3I6IFwiIzM4ODY5Q1wiLGJvcmRlcldpZHRoOlwiMnB4ICFpbXBvcnRhbnRcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZm9jdXNlZDoge30sXHJcbiAgbm90Y2hlZE91dGxpbmU6IHt9XHJcbn0pKTtcclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcGFwZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBhdmF0YXI6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICB9LFxyXG4gIGZvcm06IHtcclxuICAgIHdpZHRoOiAnMTAwJScsIC8vIEZpeCBJRSAxMSBpc3N1ZS5cclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIHN1Ym1pdDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6MTMsXHJcbiAgICBib3JkZXJDb2xvcjpcIiMzODg2OUNcIixcclxuICAgIGNvbG9yOlwiIzYxNzg4RVwiXHJcbiB9LFxyXG4gdGV4dF9pbmZvOntcclxuICAgICBjb2xvcjpcIiM2MTc4OEVcIixcclxuICAgICBmb250U2l6ZToxNCxmb250V2VpZ2h0OjUwMFxyXG4gfSxcclxuIG5vdGNoZWRPdXRsaW5lOiB7IGJvcmRlckNvbG9yOiAnIzM4ODY5QyAhaW1wb3J0YW50Jyxib3JkZXJXaWR0aDpcIjJweCAhaW1wb3J0YW50XCIgfVxyXG59KSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aEZvcm0ocHJvcHMpe1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblxyXG4gICAgY29uc3Qge2xvY2FsZX0gPSByb3V0ZXI7XHJcbiAgICBjb25zdCBjb250ZW50ID0gbG9jYWxlID09PSBcImFyXCIgPyBjb250ZW50QVIgOiBsb2NhbGUgPT09IFwiZW5cIiA/IGNvbnRlbnRFTiA6IGNvbnRlbnRGUjtcclxuXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBbZW1haWxFcnJvciwgc2V0RW1haWxFcnJvcl09IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXT0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW21lc3NhZ2VFcnJvciwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiSW5mb3JtYXRpb24gaW5jb3JyZWN0XCIpXHJcblxyXG4gIGNvbnN0IFtyZXNwb25zZSwgc2V0UmVzcG9uc2VdID0gdXNlU3RhdGUoe1xyXG4gICAgc2VuZGluZzpmYWxzZSxcclxuICAgIHN1Y2Nlc3M6ZmFsc2UsICAgXHJcbiAgICBkb25uZUluY29yZWN0ZTogZmFsc2UgICAgICAgICAgICAgICAgIFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlRmllbGQgPSAoZSkgPT4ge1xyXG4gICAgaWYoZS50YXJnZXQubmFtZSA9PT0gXCJlbWFpbFwiKXtcclxuICAgICAgbGV0IHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgICBsZXQgZW1haWxFcnIgPSAhIHJlLnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgXHJcbiAgICAgIHNldEVtYWlsRXJyb3IoZW1haWxFcnIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSAgaWYoZS50YXJnZXQubmFtZSA9PT0gXCJwYXNzd29yZFwiKXtcclxuICAgICAgbGV0IHBhc3N3b3JkTGVuZyA9IHBhc3N3b3JkLmxlbmd0aCA7XHJcbiAgICAgIHNldFBhc3N3b3JkRXJyb3IocGFzc3dvcmRMZW5nIDwgOCk7XHJcbiAgICAgIFxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IHN1Ym1pdGluZyA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2Uob2xkID0+ICB7IHJldHVybiB7Li4ub2xkLCBzZW5kaW5nOiB0cnVlfX0pO1xyXG5hbGVydChcImpqXCIpO1xyXG4gICAgICAgIGlmKCFlbWFpbEVycm9yICYmICFwYXNzd29yZEVycm9yKXtcclxuYWxlcnQoXCJqajFcIik7XHJcblxyXG4gICAgICAgICAgbGV0IGRhdGEgPSB7ZW1haWwsIHBhc3N3b3JkfTtcclxuXHJcbiAgICAgICAgICBmZXRjaChgJHtDb25maWcuQkFDS0VORF9VUkx9L3BhdGllbnQvYXV0aGAse1xyXG4gICAgICAgICAgICAgIG1ldGhvZDpcInBvc3RcIixcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHsuLi5kYXRhfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAocikgPT4gci5qc29uKClcclxuICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICBpZighcmVzLmVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnN1Ym1pdGluZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe3NlbmRpbmc6IGZhbHNlLCBzdWNjZXNzOnRydWUsIGRvbm5lSW5jb3JlY3RlOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRSZXNwb25zZSh7c2VuZGluZzogZmFsc2UsIHN1Y2Nlc3M6ZmFsc2UsIGRvbm5lSW5jb3JlY3RlOnRydWV9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnZhbGlkYXRvcil7XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKHJlcy5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaChlID0+eyBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgIHNldFJlc3BvbnNlKHtzZW5kaW5nOiBmYWxzZSwgc3VjY2VzczpmYWxzZSwgZG9ubmVJbmNvcmVjdGU6dHJ1ZX0pXHJcbiAgICAgICAgICAgICAgICAgIGlmKGUucmVzcG9uc2UuZGF0YS5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGUucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiVW5lIMOpcmV1ciBpbmNvbnVlIGVzdCBzdXJ2ZW51ZVwiKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgLmNhdGNoKGUgPT57IFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5yZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgc2V0UmVzcG9uc2Uoe3NlbmRpbmc6IGZhbHNlLCBzdWNjZXNzOmZhbHNlLCBkb25uZUluY29yZWN0ZTp0cnVlfSlcclxuICAgICAgICAgICAgICAgICAgaWYoZS5yZXNwb25zZS5kYXRhLmVycm9yKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJVbmUgw6lyZXVyIGluY29udWUgZXN0IHN1cnZlbnVlXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICB9XHJcbiAgcmV0dXJuKFxyXG4gICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgIHsvKiA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPiB7Y29udGVudC5uZXcuYXV0aH0gPC9UeXBvZ3JhcGh5PiAqL31cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9eyhlKSA9PiBzdWJtaXRpbmcoZSwge2VtYWlsLCBwYXNzd29yZH0pfT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgdmFsdWU9IHtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGVycm9yPXtlbWFpbEVycm9yfVxyXG4gICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgbm90Y2hlZE91dGxpbmU6IGNsYXNzZXMubm90Y2hlZE91dGxpbmVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogJyM2MTc4OEUnIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBvbkJsdXI9e3ZhbGlkYXRlRmllbGR9IFxyXG4gICAgICAgICAgICBsYWJlbD17Y29udGVudC5uZXcuZW1haWxMYWJlbH1cclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17IChlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGVycm9yPXtwYXNzd29yZEVycm9yfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgb25CbHVyPXt2YWxpZGF0ZUZpZWxkfSBcclxuICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgbm90Y2hlZE91dGxpbmU6IGNsYXNzZXMubm90Y2hlZE91dGxpbmVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3tcclxuICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogJyM2MTc4OEUnIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGxhYmVsPXtjb250ZW50Lm5ldy5wYXNzTGFiZWx9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAge2NvbnRlbnQubmV3LnNpZ25pbn1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCb3ggbXQ9ezh9PlxyXG4gICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e3Jlc3BvbnNlLmRvbm5lSW5jb3JlY3RlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImV4YW1wbGUtY29sbGFwc2UtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJkYW5nZXJcIj4ge21lc3NhZ2VFcnJvcn0gPC9BbGVydD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9