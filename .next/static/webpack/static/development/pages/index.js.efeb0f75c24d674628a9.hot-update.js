webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.jsx");
/* harmony import */ var _components_PlayerList_PlayerList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PlayerList/PlayerList */ "./components/PlayerList/PlayerList.jsx");
/* harmony import */ var _components_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Calculator/Calculator */ "./components/Calculator/Calculator.jsx");

var _jsxFileName = "/Users/jsoileau/Personal/FarkleScorecard/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var initialPlayers = [{
  name: "Player 1",
  order: 0,
  scores: []
}, {
  name: "Player 2",
  order: 1,
  scores: []
}];

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Farkle Scorecard"),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialPlayers),
      players = _useState2[0],
      setPlayers = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      activePlayerIndex = _useState3[0],
      setActivePlayerIndex = _useState3[1];

  var addPlayer = function addPlayer(name) {
    setPlayers([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(players), [{
      name: name,
      order: players.length,
      scores: []
    }]));
  };

  var addScore = function addScore(score) {
    // const player = players[activePlayerIndex];
    // const playerName = player.name;
    // const others = players.filter(({ name }) => name !== playerName);
    // if (!player) return;
    var newPlayers = players;
    newPlayers[activePlayerIndex].scores.push(score); // player.scores.push(score);
    // setPlayers([...others, player]);

    setPlayers([newPlayers]);
  };

  return __jsx("div", {
    className: "jsx-274656713",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    addPlayer: addPlayer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_components_PlayerList_PlayerList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    players: players,
    activePlayerIndex: activePlayerIndex,
    setActivePlayerIndex: setActivePlayerIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(_components_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_5__["default"], {
    addScore: addScore,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "274656713",
    __self: this
  }, "div.jsx-274656713{max-width:320px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRTLEFBRzZCLGdCQUNGLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IFBsYXllckxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGxheWVyTGlzdC9QbGF5ZXJMaXN0XCI7XG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9DYWxjdWxhdG9yL0NhbGN1bGF0b3JcIjtcblxuY29uc3QgaW5pdGlhbFBsYXllcnMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlBsYXllciAxXCIsXG4gICAgb3JkZXI6IDAsXG4gICAgc2NvcmVzOiBbXVxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQbGF5ZXIgMlwiLFxuICAgIG9yZGVyOiAxLFxuICAgIHNjb3JlczogW11cbiAgfVxuXTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZhcmtsZSBTY29yZWNhcmRcIik7XG4gIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlKGluaXRpYWxQbGF5ZXJzKTtcbiAgY29uc3QgW2FjdGl2ZVBsYXllckluZGV4LCBzZXRBY3RpdmVQbGF5ZXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBhZGRQbGF5ZXIgPSBuYW1lID0+IHtcbiAgICBzZXRQbGF5ZXJzKFtcbiAgICAgIC4uLnBsYXllcnMsXG4gICAgICB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIG9yZGVyOiBwbGF5ZXJzLmxlbmd0aCxcbiAgICAgICAgc2NvcmVzOiBbXVxuICAgICAgfVxuICAgIF0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZFNjb3JlID0gc2NvcmUgPT4ge1xuICAgIC8vIGNvbnN0IHBsYXllciA9IHBsYXllcnNbYWN0aXZlUGxheWVySW5kZXhdO1xuICAgIC8vIGNvbnN0IHBsYXllck5hbWUgPSBwbGF5ZXIubmFtZTtcbiAgICAvLyBjb25zdCBvdGhlcnMgPSBwbGF5ZXJzLmZpbHRlcigoeyBuYW1lIH0pID0+IG5hbWUgIT09IHBsYXllck5hbWUpO1xuXG4gICAgLy8gaWYgKCFwbGF5ZXIpIHJldHVybjtcblxuICAgIGxldCBuZXdQbGF5ZXJzID0gcGxheWVycztcblxuICAgIG5ld1BsYXllcnNbYWN0aXZlUGxheWVySW5kZXhdLnNjb3Jlcy5wdXNoKHNjb3JlKTtcblxuICAgIC8vIHBsYXllci5zY29yZXMucHVzaChzY29yZSk7XG4gICAgLy8gc2V0UGxheWVycyhbLi4ub3RoZXJzLCBwbGF5ZXJdKTtcbiAgICBzZXRQbGF5ZXJzKFtuZXdQbGF5ZXJzXSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciB0aXRsZT17dGl0bGV9IGFkZFBsYXllcj17YWRkUGxheWVyfSAvPlxuICAgICAgPFBsYXllckxpc3RcbiAgICAgICAgcGxheWVycz17cGxheWVyc31cbiAgICAgICAgYWN0aXZlUGxheWVySW5kZXg9e2FjdGl2ZVBsYXllckluZGV4fVxuICAgICAgICBzZXRBY3RpdmVQbGF5ZXJJbmRleD17c2V0QWN0aXZlUGxheWVySW5kZXh9XG4gICAgICAvPlxuICAgICAgPENhbGN1bGF0b3IgYWRkU2NvcmU9e2FkZFNjb3JlfSAvPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.efeb0f75c24d674628a9.hot-update.js.map