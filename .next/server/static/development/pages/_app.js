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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice */ "./modules/notice.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // 액션 & 리듀서가 추가될때마다 설정

 // 미들웨어는 액션이 dispatch 되어서 리듀서에서 이를 처리하기전에 사전에 지정된 작업들을 설정
// 액션과 리듀서 사이의 중간자
// 미들웨어 설정
// composeWithDevTools - 리덕스 툴
// redux-thunk 비동기 작업 처리할 때 가장 기본적으로 사용하는 미들웨어
// thunk - 특정 작업을 나중에 하도록 미루기 위해서 함수형태로 감싼 것을 칭함

const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
}; // 액션 & 리듀서 추가하는 곳(하나의 리듀서로 통합하기 위한 작업)


const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  notice: _notice__WEBPACK_IMPORTED_MODULE_3__["default"]
}); // TODO 알아보기

const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload);

    if (state.data) nextState.data = state.data;
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  // 여러 reducer를 combineReducers에 하나로 통합해서 담고 또 그것을 createStore에 전달해준다.
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a]));
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["createWrapper"])(initStore);

/***/ }),

/***/ "./modules/notice.js":
/*!***************************!*\
  !*** ./modules/notice.js ***!
  \***************************/
/*! exports provided: ntc, getNtc, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ntc", function() { return ntc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNtc", function() { return getNtc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ntc = {
  NTCID: 'notice/NTCID'
};
const getNtc = data => ({
  type: ntc.NTCID,
  data
});
const idInitialState = {
  data: 0
};
function reducer(state = idInitialState, action) {
  switch (action.type) {
    case ntc.NTCID:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: state.data + 1
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules */ "./modules/index.js");
var _jsxFileName = "C:\\Users\\hyose\\Documents\\ntc_redux\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const WraapedApp = ({
  Component,
  pageProps
}) => {
  return __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 12
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (_modules__WEBPACK_IMPORTED_MODULE_1__["wrapper"].withRedux(WraapedApp));

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL25vdGljZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJyZXF1aXJlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwibm90aWNlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJuZXh0U3RhdGUiLCJwYXlsb2FkIiwiZGF0YSIsImluaXRTdG9yZSIsImNyZWF0ZVN0b3JlIiwidGh1bmtNaWRkbGV3YXJlIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJudGMiLCJOVENJRCIsImdldE50YyIsImlkSW5pdGlhbFN0YXRlIiwiV3JhYXBlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QUFSLENBQWtCSCxVQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHsgSFlEUkFURSwgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcclxuLy8g7JWh7IWYICYg66as65OA7ISc6rCAIOy2lOqwgOuQoOuVjOuniOuLpCDshKTsoJVcclxuaW1wb3J0IG5vdGljZSBmcm9tICcuL25vdGljZSdcclxuXHJcbi8vIOuvuOuTpOybqOyWtOuKlCDslaHshZjsnbQgZGlzcGF0Y2gg65CY7Ja07IScIOumrOuTgOyEnOyXkOyEnCDsnbTrpbwg7LKY66as7ZWY6riw7KCE7JeQIOyCrOyghOyXkCDsp4DsoJXrkJwg7J6R7JeF65Ok7J2EIOyEpOyglVxyXG4vLyDslaHshZjqs7wg66as65OA7IScIOyCrOydtOydmCDspJHqsITsnpBcclxuXHJcbi8vIOuvuOuTpOybqOyWtCDshKTsoJVcclxuLy8gY29tcG9zZVdpdGhEZXZUb29scyAtIOumrOuNleyKpCDtiLRcclxuLy8gcmVkdXgtdGh1bmsg67mE64+Z6riwIOyekeyXhSDsspjrpqztlaAg65WMIOqwgOyepSDquLDrs7jsoIHsnLzroZwg7IKs7Jqp7ZWY64qUIOuvuOuTpOybqOyWtFxyXG4vLyB0aHVuayAtIO2KueyglSDsnpHsl4XsnYQg64KY7KSR7JeQIO2VmOuPhOuhnSDrr7jro6jquLAg7JyE7ZW07IScIO2VqOyImO2Yle2DnOuhnCDqsJDsi7wg6rKD7J2EIOy5re2VqFxyXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IChtaWRkbGV3YXJlKSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZSgncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJylcclxuICAgICAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXHJcbn07XHJcbi8vIOyVoeyFmCAmIOumrOuTgOyEnCDstpTqsIDtlZjripQg6rOzKO2VmOuCmOydmCDrpqzrk4DshJzroZwg7Ya17ZWp7ZWY6riwIOychO2VnCDsnpHsl4UpXHJcbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBub3RpY2VcclxufSk7XHJcbi8vIFRPRE8g7JWM7JWE67O06riwXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBIWURSQVRFKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSwgLy8gdXNlIHByZXZpb3VzIHN0YXRlXHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHN0YXRlLmRhdGEpIG5leHRTdGF0ZS5kYXRhID0gc3RhdGUuZGF0YVxyXG4gICAgICAgIHJldHVybiBuZXh0U3RhdGVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKVxyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xyXG4gICAgLy8g7Jes65+sIHJlZHVjZXLrpbwgY29tYmluZVJlZHVjZXJz7JeQIO2VmOuCmOuhnCDthrXtlantlbTshJwg64u06rOgIOuYkCDqt7jqsoPsnYQgY3JlYXRlU3RvcmXsl5Ag7KCE64us7ZW07KSA64ukLlxyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGJpbmRNaWRkbGV3YXJlKFt0aHVua01pZGRsZXdhcmVdKSlcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihpbml0U3RvcmUpIiwiZXhwb3J0IGNvbnN0IG50YyA9IHtOVENJRDogJ25vdGljZS9OVENJRCd9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE50YyA9IGRhdGEgPT4gKHtcclxuICAgIHR5cGU6IG50Yy5OVENJRCxcclxuICAgIGRhdGFcclxufSk7XHJcblxyXG5jb25zdCBpZEluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGEgOiAwLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaWRJbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgbnRjLk5UQ0lEOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBzdGF0ZS5kYXRhICsgMSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge3dyYXBwZXJ9IGZyb20gJy4uL21vZHVsZXMnXHJcblxyXG5jb25zdCBXcmFhcGVkQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHN9KSA9PiB7XHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoV3JhYXBlZEFwcCk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9