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
      children: history
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5wdXRFbGVtZW50IiwidXNlU3RhdGUiLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJoaXN0b3J5TGlzdCIsInNldEhpc3RvcnlMaXN0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGlzdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBRVFDLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRXBCQyxTQUZvQjtBQUFBLE1BRVRDLFlBRlM7O0FBQUEsbUJBR1dGLHNEQUFRLENBQUMsRUFBRCxDQUhuQjtBQUFBLE1BR3BCRyxXQUhvQjtBQUFBLE1BR1BDLGNBSE87O0FBTXZCLHNCQUFPO0FBQUEsaUNBQU07QUFBUSxjQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTTtBQUNqQ0gsb0JBQVksQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWjtBQUNBSCxzQkFBYyw0SUFBS0QsV0FBTCxJQUFrQkUsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQTNCLEdBQWQ7QUFDSCxPQUhZO0FBR1QsaUJBQVcsRUFBQztBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBTixlQUlQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKTyxFQUtOTixTQUxNLGVBTVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5PLGVBTUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5FLGVBT1A7QUFBQSxnQkFFUU87QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFhSCxDQW5CRDs7R0FBTVQsWTs7S0FBQUEsWTtBQXFCU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmVlZjBhOGE4OTY4ZTg0ZTY5ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IElucHV0RWxlbWVudCA9ICgpID0+IHtcclxuXHJcbmNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dCBdID0gdXNlU3RhdGUoXCJcIik7XHJcbmNvbnN0IFtoaXN0b3J5TGlzdCwgc2V0SGlzdG9yeUxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gPGRpdj4gPGlucHV0ICBvbkNoYW5nZT17KGUpPT4ge1xyXG4gICAgICAgIHNldElucHV0VGV4dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgc2V0SGlzdG9yeUxpc3QoWy4uLmhpc3RvcnlMaXN0LCBlLnRhcmdldC52YWx1ZV0pO1xyXG4gICAgfX0gIHBsYWNlaG9sZGVyPVwiRW50ZXIgU29tZSBUZXh0XCIvPlxyXG4gICAgPGJyLz5cclxuICAgIHtpbnB1dFRleHR9XHJcbiAgICA8aHIvPjxici8+XHJcbiAgICA8dWw+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoaXN0b3J5XHJcbiAgICAgICAgfVxyXG4gICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRFbGVtZW50OyJdLCJzb3VyY2VSb290IjoiIn0=