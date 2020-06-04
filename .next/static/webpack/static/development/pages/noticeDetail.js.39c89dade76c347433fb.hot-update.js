webpackHotUpdate("static\\development\\pages\\noticeDetail.js",{

/***/ "./pages/noticeDetail.js":
/*!*******************************!*\
  !*** ./pages/noticeDetail.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_notice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/notice */ "./modules/notice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\hyose\\Documents\\ntc_redux\\pages\\noticeDetail.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var noticeDetail = function noticeDetail(_ref) {
  _s();

  var info = _ref.info;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    dispatch(Object(_modules_notice__WEBPACK_IMPORTED_MODULE_4__["getNtc"])());
  }, []);
  var NtcId = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.notice.data;
  });
  console.log(NtcId);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, info.NTC_TITLE), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "\uACF5\uC9C0\uC0AC\uD56D \uB0B4\uC6A9"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, info.NTC_CONTENT), info.NTC_REG_DT, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "\uC0AD\uC81C"), " ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }, "\uC218\uC815")));
};

_s(noticeDetail, "yTQfgYR5r29WRtfR6n2S3hgl/5k=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

noticeDetail.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://15.165.161.162:8086/api/web/notice/NoticeInfo', {
            params: {
              NTC_ID: 269
            }
          });

        case 2:
          response = _context.sent;
          return _context.abrupt("return", {
            info: response.data.data[0]
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (noticeDetail);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ub3RpY2VEZXRhaWwuanMiXSwibmFtZXMiOlsibm90aWNlRGV0YWlsIiwiaW5mbyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJnZXROdGMiLCJOdGNJZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJub3RpY2UiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIk5UQ19USVRMRSIsIk5UQ19DT05URU5UIiwiTlRDX1JFR19EVCIsImdldEluaXRpYWxQcm9wcyIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwiTlRDX0lEIiwicmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBRTdCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pGLFlBQVEsQ0FBQ0csOERBQU0sRUFBUCxDQUFSO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLE1BQU1DLEtBQUssR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBQWpCO0FBQUEsR0FBTixDQUF6QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sS0FBWjtBQUNBLFNBQ0ksbUVBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTCxJQUFJLENBQUNZLFNBRFYsQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBSkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0taLElBQUksQ0FBQ2EsV0FEVixDQVBKLEVBVUtiLElBQUksQ0FBQ2MsVUFWVixFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLE9BQ29CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRHBCLENBWEosQ0FESjtBQWtCSCxDQTVCRDs7R0FBTWYsWTtVQUVlRyx1RCxFQU1ISSx1RDs7O0FBc0JsQlAsWUFBWSxDQUFDZ0IsZUFBYixpTUFBK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFSkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLHNEQUFWLEVBQWlFO0FBQ3BGQyxrQkFBTSxFQUFFO0FBQ0pDLG9CQUFNLEVBQUc7QUFETDtBQUQ0RSxXQUFqRSxDQUZJOztBQUFBO0FBRXJCQyxrQkFGcUI7QUFBQSwyQ0FPcEI7QUFDSHBCLGdCQUFJLEVBQUdvQixRQUFRLENBQUNYLElBQVQsQ0FBY0EsSUFBZCxDQUFtQixDQUFuQjtBQURKLFdBUG9COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQS9CO0FBWWVWLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxub3RpY2VEZXRhaWwuanMuMzljODlkYWRlNzZjMzQ3NDMzZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2V0TnRjIH0gZnJvbSAnLi4vbW9kdWxlcy9ub3RpY2UnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBub3RpY2VEZXRhaWwgPSAoe2luZm99KSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goZ2V0TnRjKCkpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgTnRjSWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5ub3RpY2UuZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhOdGNJZClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAge2luZm8uTlRDX1RJVExFfVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAg6rO17KeA7IKs7ZWtIOuCtOyaqVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtpbmZvLk5UQ19DT05URU5UfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2luZm8uTlRDX1JFR19EVH1cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuyCreygnDwvc3Bhbj4gPHNwYW4+7IiY7KCVPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcblxyXG5ub3RpY2VEZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTUuMTY1LjE2MS4xNjI6ODA4Ni9hcGkvd2ViL25vdGljZS9Ob3RpY2VJbmZvJyx7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIE5UQ19JRCA6IDI2OVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbmZvIDogcmVzcG9uc2UuZGF0YS5kYXRhWzBdXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBub3RpY2VEZXRhaWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=