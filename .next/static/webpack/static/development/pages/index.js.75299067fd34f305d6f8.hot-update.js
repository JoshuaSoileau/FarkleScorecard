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





var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Farkle Scorecard"),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      players = _useState2[0],
      setPlayers = _useState2[1];

  var addPlayer = function addPlayer(name) {
    setPlayers([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(players), [{
      name: name,
      scores: []
    }]));
  };

  var addScore = function addScore(playerName, score) {
    var player = players.filter(function (_ref) {
      var name = _ref.name;
      return name === playerName;
    })[0];
    var others = players.filter(function (_ref2) {
      var name = _ref2.name;
      return name !== playerName;
    });
    if (!player) return;
    player.scores.push(score);
    setPlayers(players);
  };

  return __jsx("div", {
    className: "jsx-3321938468",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    addPlayer: addPlayer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_components_PlayerList_PlayerList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    players: players,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_Calculator_Calculator__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3321938468",
    __self: this
  }, "div.jsx-3321938468{max-width:375px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NTLEFBRzZCLGdCQUNGLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IFBsYXllckxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGxheWVyTGlzdC9QbGF5ZXJMaXN0XCI7XG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9DYWxjdWxhdG9yL0NhbGN1bGF0b3JcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIkZhcmtsZSBTY29yZWNhcmRcIik7XG4gIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBhZGRQbGF5ZXIgPSBuYW1lID0+IHtcbiAgICBzZXRQbGF5ZXJzKFtcbiAgICAgIC4uLnBsYXllcnMsXG4gICAgICB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHNjb3JlczogW11cbiAgICAgIH1cbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBhZGRTY29yZSA9IChwbGF5ZXJOYW1lLCBzY29yZSkgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IHBsYXllcnMuZmlsdGVyKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gcGxheWVyTmFtZSlbMF07XG4gICAgY29uc3Qgb3RoZXJzID0gcGxheWVycy5maWx0ZXIoKHsgbmFtZSB9KSA9PiBuYW1lICE9PSBwbGF5ZXJOYW1lKTtcblxuICAgIGlmICghcGxheWVyKSByZXR1cm47XG5cbiAgICBwbGF5ZXIuc2NvcmVzLnB1c2goc2NvcmUpO1xuICAgIHNldFBsYXllcnMocGxheWVycyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlciB0aXRsZT17dGl0bGV9IGFkZFBsYXllcj17YWRkUGxheWVyfSAvPlxuICAgICAgPFBsYXllckxpc3QgcGxheWVycz17cGxheWVyc30gLz5cbiAgICAgIDxDYWxjdWxhdG9yIC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.75299067fd34f305d6f8.hot-update.js.map