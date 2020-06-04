webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./modules/notice.js":
/*!***************************!*\
  !*** ./modules/notice.js ***!
  \***************************/
/*! exports provided: ntc, getNtc, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ntc", function() { return ntc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNtc", function() { return getNtc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ntc = {
  NTCID: 'notice/NTCID'
};
var getNtc = function getNtc(data) {
  return {
    type: ntc.NTCID,
    data: data
  };
};
var idInitialState = {
  data: 0
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : idInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ntc.NTCID:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: state.data + 1
      });

    default:
      return state;
  }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25vdGljZS5qcyJdLCJuYW1lcyI6WyJudGMiLCJOVENJRCIsImdldE50YyIsImRhdGEiLCJ0eXBlIiwiaWRJbml0aWFsU3RhdGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLEdBQUcsR0FBRztBQUFDQyxPQUFLLEVBQUU7QUFBUixDQUFaO0FBRUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUMsSUFBSTtBQUFBLFNBQUs7QUFDM0JDLFFBQUksRUFBRUosR0FBRyxDQUFDQyxLQURpQjtBQUUzQkUsUUFBSSxFQUFKQTtBQUYyQixHQUFMO0FBQUEsQ0FBbkI7QUFLUCxJQUFNRSxjQUFjLEdBQUc7QUFDbkJGLE1BQUksRUFBRztBQURZLENBQXZCO0FBSWUsU0FBU0csT0FBVCxHQUFpRDtBQUFBLE1BQWhDQyxLQUFnQyx1RUFBeEJGLGNBQXdCO0FBQUEsTUFBUkcsTUFBUTs7QUFDNUQsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0ksU0FBS0osR0FBRyxDQUFDQyxLQUFUO0FBQ0ksNkNBQ09NLEtBRFA7QUFFSUosWUFBSSxFQUFFSSxLQUFLLENBQUNKLElBQU4sR0FBYTtBQUZ2Qjs7QUFJSjtBQUNJLGFBQU9JLEtBQVA7QUFQUjtBQVVIIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjZkNThmNDg1ZjZjOTYzYzk2NzY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbnRjID0ge05UQ0lEOiAnbm90aWNlL05UQ0lEJ307XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TnRjID0gZGF0YSA9PiAoe1xyXG4gICAgdHlwZTogbnRjLk5UQ0lELFxyXG4gICAgZGF0YVxyXG59KTtcclxuXHJcbmNvbnN0IGlkSW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZGF0YSA6IDAsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpZEluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBudGMuTlRDSUQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHN0YXRlLmRhdGEgKyAxLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcblxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=