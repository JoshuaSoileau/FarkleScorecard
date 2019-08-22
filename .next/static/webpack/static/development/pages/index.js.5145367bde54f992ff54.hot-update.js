webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Player/Player.jsx":
/*!**************************************!*\
  !*** ./components/Player/Player.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jsoileau/Personal/FarkleScorecard/components/Player/Player.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Player = function Player(_ref) {
  var name = _ref.name;
  var total = scores.reduce(function (one, two) {
    return one + two;
  }) || "0";
  return __jsx("div", {
    className: "jsx-201746553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-201746553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, name), __jsx("span", {
    className: "jsx-201746553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, total), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "201746553",
    __self: this
  }, "div.jsx-201746553{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-radius:8px;box-shadow:0 6px 16px rgba(0,0,0,0.2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXUyxBQUcyQyxtSEFDWixrQkFDdUIsc0NBQzNDIiwiZmlsZSI6Ii9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUGxheWVyID0gKHsgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IHRvdGFsID0gc2NvcmVzLnJlZHVjZSgob25lLCB0d28pID0+IG9uZSArIHR3bykgfHwgXCIwXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxuICAgICAgPHNwYW4+e3RvdGFsfTwvc3Bhbj5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/Player/Player.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./components/PlayerList/PlayerList.jsx":
/*!**********************************************!*\
  !*** ./components/PlayerList/PlayerList.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Player/Player */ "./components/Player/Player.jsx");

var _jsxFileName = "/Users/jsoileau/Personal/FarkleScorecard/components/PlayerList/PlayerList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var PlayerList = function PlayerList(_ref) {
  var players = _ref.players;
  if (!players.length) return "Click + to add players";
  return __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, players.map(function (player) {
    return __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx(_Player_Player__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, player, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PlayerList);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=index.js.5145367bde54f992ff54.hot-update.js.map