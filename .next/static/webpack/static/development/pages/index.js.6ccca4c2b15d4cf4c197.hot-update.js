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
      activePlayerIndex = _ref.activePlayerIndex,
      setActivePlayerIndex = _ref.setActivePlayerIndex;
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
  }, "div.jsx-2808709856{text-align:center;margin:20px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9QbGF5ZXJMaXN0L1BsYXllckxpc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVXLEFBR2lDLGtCQUNKLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9QbGF5ZXJMaXN0L1BsYXllckxpc3QuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ncmlkLXN5c3RlbVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vUGxheWVyL1BsYXllclwiO1xuXG5jb25zdCBQbGF5ZXJMaXN0ID0gKHsgcGxheWVycywgYWN0aXZlUGxheWVySW5kZXgsIHNldEFjdGl2ZVBsYXllckluZGV4IH0pID0+IHtcbiAgaWYgKCFwbGF5ZXJzLmxlbmd0aClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgQ2xpY2sgKyB0byBhZGQgcGxheWVyc1xuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIGNvbnN0IHNvcnRlZFBsYXllcnMgPSBwbGF5ZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYS5vcmRlciA+IGIub3JkZXI7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKHNvcnRlZFBsYXllcnMpO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7c29ydGVkUGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IChcbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPFBsYXllclxuICAgICAgICAgICAgICB7Li4ucGxheWVyfVxuICAgICAgICAgICAgICBwbGF5ZXJJbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIGFjdGl2ZT17aW5kZXggPT09IGFjdGl2ZVBsYXllckluZGV4fVxuICAgICAgICAgICAgICBzZXRBY3RpdmVQbGF5ZXJJbmRleD17c2V0QWN0aXZlUGxheWVySW5kZXh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICkpfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyTGlzdDtcbiJdfQ== */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/PlayerList/PlayerList.jsx */"));
  var sortedPlayers = players.sort(function (a, b) {
    return a.order > b.order;
  });
  console.log(sortedPlayers);
  return __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, sortedPlayers.map(function (player, index) {
    return __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(_Player_Player__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, player, {
      playerIndex: index,
      active: index === activePlayerIndex,
      setActivePlayerIndex: setActivePlayerIndex,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PlayerList);

/***/ })

})
//# sourceMappingURL=index.js.6ccca4c2b15d4cf4c197.hot-update.js.map