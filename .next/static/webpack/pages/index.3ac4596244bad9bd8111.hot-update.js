webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_react_react_hooks_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\react\\react-hooks-app\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



var InputElement = function InputElement() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      inputText = _useState[0],
      setInputText = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      historyList = _useState2[0],
      setHistoryList = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      onChange: function onChange(e) {
        setInputText(e.target.value);
        setHistoryList([].concat(Object(C_react_react_hooks_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(historyList), [e.target.value]));
      },
      placeholder: "Enter Some Text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 18
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, _this), inputText, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: historyList.map(rec)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 12
  }, _this);
};

_s(InputElement, "j9OjHn4acMDrx4daJeHG/pqDQQg=");

_c = InputElement;
/* harmony default export */ __webpack_exports__["default"] = (InputElement);

var _c;

$RefreshReg$(_c, "InputElement");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwidXNlU3RhdGUiLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJoaXN0b3J5TGlzdCIsInNldEhpc3RvcnlMaXN0IiwiZSIsInRhcmdldCIsInZhbHVlIiwibWFwIiwicmVjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQyxFQUFELENBRmhCO0FBQUEsTUFFcEJDLFNBRm9CO0FBQUEsTUFFVEMsWUFGUzs7QUFBQSxtQkFHV0Ysc0RBQVEsQ0FBQyxFQUFELENBSG5CO0FBQUEsTUFHcEJHLFdBSG9CO0FBQUEsTUFHUEMsY0FITzs7QUFNdkIsc0JBQU87QUFBQSxpQ0FBTTtBQUFRLGNBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFNO0FBQ2pDSCxvQkFBWSxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFaO0FBQ0FILHNCQUFjLDRJQUFLRCxXQUFMLElBQWtCRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBM0IsR0FBZDtBQUNILE9BSFk7QUFHVCxpQkFBVyxFQUFDO0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFOLGVBSVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpPLEVBS05OLFNBTE0sZUFNUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTk8sZUFNRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkUsZUFPUDtBQUFBLGdCQUVRRSxXQUFXLENBQUNLLEdBQVosQ0FBaUJDLEdBQWpCO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBYUgsQ0FuQkQ7O0dBQU1WLFk7O0tBQUFBLFk7QUFxQlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhYzQ1OTYyNDRiYWQ5YmQ4MTExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbnB1dEVsZW1lbnQgPSAoKSA9PiB7XHJcblxyXG5jb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHQgXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5jb25zdCBbaGlzdG9yeUxpc3QsIHNldEhpc3RvcnlMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIDxkaXY+IDxpbnB1dCAgb25DaGFuZ2U9eyhlKT0+IHtcclxuICAgICAgICBzZXRJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldEhpc3RvcnlMaXN0KFsuLi5oaXN0b3J5TGlzdCwgZS50YXJnZXQudmFsdWVdKTtcclxuICAgIH19ICBwbGFjZWhvbGRlcj1cIkVudGVyIFNvbWUgVGV4dFwiLz5cclxuICAgIDxici8+XHJcbiAgICB7aW5wdXRUZXh0fVxyXG4gICAgPGhyLz48YnIvPlxyXG4gICAgPHVsPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGlzdG9yeUxpc3QubWFwKChyZWMpKVxyXG4gICAgICAgIH1cclxuICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0RWxlbWVudDsiXSwic291cmNlUm9vdCI6IiJ9