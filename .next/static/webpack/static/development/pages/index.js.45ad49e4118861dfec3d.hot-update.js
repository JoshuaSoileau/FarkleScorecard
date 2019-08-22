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
    className: "jsx-4072188320",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: title,
    addPlayer: addPlayer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_components_PlayerList_PlayerList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    players: players,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4072188320",
    __self: this
  }, "div.jsx-4072188320{max-width:512px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NTLEFBRzZCLGdCQUNGLGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xuaW1wb3J0IFBsYXllckxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGxheWVyTGlzdC9QbGF5ZXJMaXN0XCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJGYXJrbGUgU2NvcmVjYXJkXCIpO1xuICBjb25zdCBbcGxheWVycywgc2V0UGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgYWRkUGxheWVyID0gbmFtZSA9PiB7XG4gICAgc2V0UGxheWVycyhbXG4gICAgICAuLi5wbGF5ZXJzLFxuICAgICAge1xuICAgICAgICBuYW1lLFxuICAgICAgICBzY29yZXM6IFtdXG4gICAgICB9XG4gICAgXSk7XG4gIH07XG5cbiAgY29uc3QgYWRkU2NvcmUgPSAocGxheWVyTmFtZSwgc2NvcmUpID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJzLmZpbHRlcigoeyBuYW1lIH0pID0+IG5hbWUgPT09IHBsYXllck5hbWUpWzBdO1xuICAgIGNvbnN0IG90aGVycyA9IHBsYXllcnMuZmlsdGVyKCh7IG5hbWUgfSkgPT4gbmFtZSAhPT0gcGxheWVyTmFtZSk7XG5cbiAgICBpZiAoIXBsYXllcikgcmV0dXJuO1xuXG4gICAgcGxheWVyLnNjb3Jlcy5wdXNoKHNjb3JlKTtcbiAgICBzZXRQbGF5ZXJzKHBsYXllcnMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgdGl0bGU9e3RpdGxlfSBhZGRQbGF5ZXI9e2FkZFBsYXllcn0gLz5cbiAgICAgIDxQbGF5ZXJMaXN0IHBsYXllcnM9e3BsYXllcnN9IC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTEycHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.45ad49e4118861dfec3d.hot-update.js.map