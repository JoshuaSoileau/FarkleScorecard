webpackHotUpdate("static/development/pages/index.js",{

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
  if (!players.length) return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "\"Click + to add players\"");
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

/***/ })

})
//# sourceMappingURL=index.js.b314f1c1506711cab035.hot-update.js.map