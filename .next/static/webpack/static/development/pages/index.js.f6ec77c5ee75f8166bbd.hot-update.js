webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.jsx");
/* harmony import */ var _components_PlayerList_PlayerList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PlayerList/PlayerList */ "./components/PlayerList/PlayerList.jsx");
/* harmony import */ var _components_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Calculator/Calculator */ "./components/Calculator/Calculator.jsx");


var _jsxFileName = "/Users/jsoileau/Personal/FarkleScorecard/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var initialPlayers = [{
  name: "Player 1",
  scores: []
}, {
  name: "Player 2",
  scores: []
}];

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Farkle Scorecard"),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialPlayers),
      players = _useState2[0],
      setPlayers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      activePlayerIndex = _useState3[0],
      setActivePlayerIndex = _useState3[1];

  var addPlayer = function addPlayer(name) {
    setPlayers([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(players), [{
      name: name,
      scores: []
    }]));
  };

  var addScore = function addScore(score) {
    debugger;
    var player = players[activePlayerIndex];
    var playerName = player.name;
    var others = players.filter(function (_ref) {
      var name = _ref.name;
      return name !== playerName;
    });
    if (!player) return;
    player.scores.push(score);
    setPlayers(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, player));
  };

  return __jsx("div", {
    className: "jsx-274656713",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    addPlayer: addPlayer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx(_components_PlayerList_PlayerList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    players: players,
    activePlayerIndex: activePlayerIndex,
    setActivePlayerIndex: setActivePlayerIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_components_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_6__["default"], {
    addScore: addScore,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "274656713",
    __self: this
  }, "div.jsx-274656713{max-width:320px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURTLEFBRzZCLGdCQUNGLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IFBsYXllckxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGxheWVyTGlzdC9QbGF5ZXJMaXN0XCI7XG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9DYWxjdWxhdG9yL0NhbGN1bGF0b3JcIjtcblxuY29uc3QgaW5pdGlhbFBsYXllcnMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlBsYXllciAxXCIsXG4gICAgc2NvcmVzOiBbXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQbGF5ZXIgMlwiLFxuICAgIHNjb3JlczogW11cbiAgfVxuXTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZhcmtsZSBTY29yZWNhcmRcIik7XG4gIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlKGluaXRpYWxQbGF5ZXJzKTtcbiAgY29uc3QgW2FjdGl2ZVBsYXllckluZGV4LCBzZXRBY3RpdmVQbGF5ZXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBhZGRQbGF5ZXIgPSBuYW1lID0+IHtcbiAgICBzZXRQbGF5ZXJzKFtcbiAgICAgIC4uLnBsYXllcnMsXG4gICAgICB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHNjb3JlczogW11cbiAgICAgIH1cbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBhZGRTY29yZSA9IHNjb3JlID0+IHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJzW2FjdGl2ZVBsYXllckluZGV4XTtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gcGxheWVyLm5hbWU7XG4gICAgY29uc3Qgb3RoZXJzID0gcGxheWVycy5maWx0ZXIoKHsgbmFtZSB9KSA9PiBuYW1lICE9PSBwbGF5ZXJOYW1lKTtcblxuICAgIGlmICghcGxheWVyKSByZXR1cm47XG5cbiAgICBwbGF5ZXIuc2NvcmVzLnB1c2goc2NvcmUpO1xuICAgIHNldFBsYXllcnMoe1xuICAgICAgLi4ub3RoZXJzLFxuICAgICAgLi4ucGxheWVyXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciB0aXRsZT17dGl0bGV9IGFkZFBsYXllcj17YWRkUGxheWVyfSAvPlxuICAgICAgPFBsYXllckxpc3RcbiAgICAgICAgcGxheWVycz17cGxheWVyc31cbiAgICAgICAgYWN0aXZlUGxheWVySW5kZXg9e2FjdGl2ZVBsYXllckluZGV4fVxuICAgICAgICBzZXRBY3RpdmVQbGF5ZXJJbmRleD17c2V0QWN0aXZlUGxheWVySW5kZXh9XG4gICAgICAvPlxuICAgICAgPENhbGN1bGF0b3IgYWRkU2NvcmU9e2FkZFNjb3JlfSAvPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.f6ec77c5ee75f8166bbd.hot-update.js.map