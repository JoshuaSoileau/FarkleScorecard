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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Player/Player */ "./components/Player/Player.jsx");

var _jsxFileName = "/Users/jsoileau/Personal/FarkleScorecard/components/PlayerList/PlayerList.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var PlayerList = function PlayerList(_ref) {
  var players = _ref.players,
      activePlayerIndex = _ref.activePlayerIndex;
  if (!players.length) return __jsx("div", {
    className: "jsx-2808709856",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Click + to add players", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2808709856",
    __self: this
  }, "div.jsx-2808709856{text-align:center;margin:20px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9QbGF5ZXJMaXN0L1BsYXllckxpc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVXLEFBR2lDLGtCQUNKLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9QbGF5ZXJMaXN0L1BsYXllckxpc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ncmlkLXN5c3RlbVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyL1BsYXllclwiO1xuXG5jb25zdCBQbGF5ZXJMaXN0ID0gKHsgcGxheWVycywgYWN0aXZlUGxheWVySW5kZXggfSkgPT4ge1xuICBpZiAoIXBsYXllcnMubGVuZ3RoKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBDbGljayArIHRvIGFkZCBwbGF5ZXJzXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAge3BsYXllcnMubWFwKChwbGF5ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbD5cbiAgICAgICAgICAgIDxQbGF5ZXIgey4uLnBsYXllcn0gYWN0aXZlPXtpbmRleCA9PT0gYWN0aXZlUGxheWVySW5kZXh9IC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgKSl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJMaXN0O1xuIl19 */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/PlayerList/PlayerList.jsx */"));
  return __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, players.map(function (player, index) {
    return __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(_Player_Player__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, player, {
      active: index === activePlayerIndex,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PlayerList);

/***/ })

})
//# sourceMappingURL=index.js.a4898d24d2907f5a7214.hot-update.js.map