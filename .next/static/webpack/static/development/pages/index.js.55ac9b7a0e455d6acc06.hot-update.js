webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PlayerList/PlayerList.jsx":
/*!**********************************************!*\
  !*** ./components/PlayerList/PlayerList.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jsoileau/Personal/FarkleScorecard/components/PlayerList/PlayerList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PlayerList = function PlayerList(_ref) {
  var players = _ref.players;
  if (!players.length) return "Click + to add players";
  return __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, players.map(function (player) {
    __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PlayerList);

/***/ })

})
//# sourceMappingURL=index.js.55ac9b7a0e455d6acc06.hot-update.js.map