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
  var name = _ref.name,
      scores = _ref.scores,
      active = _ref.active,
      playerIndex = _ref.playerIndex,
      setActivePlayerIndex = _ref.setActivePlayerIndex;
  var total = scores.length && scores.reduce(function (one, two) {
    return Number(one) + Number(two);
  }) || "0";
  return __jsx("button", {
    onClick: function onClick() {
      return setActivePlayerIndex(playerIndex);
    },
    className: "jsx-3940477816" + " " + ((active ? "is-active" : "") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3940477816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, name), __jsx("span", {
    className: "jsx-3940477816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, total), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3940477816",
    __self: this
  }, "button.jsx-3940477816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-radius:8px;box-shadow:0 6px 16px rgba(0,0,0,0.2);padding:14px;margin:8px 0;}button.jsx-3940477816:focus{outline:none;}.is-active.jsx-3940477816{border:2px solid violet;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQlMsQUFHMEIsQUFVQSxBQUlXLGFBSDFCLFdBSUEsa0RBZGEsV0FDbUIsbUhBQ1osa0JBQ3VCLHNDQUM1QixhQUNBLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2pzb2lsZWF1L1BlcnNvbmFsL0ZhcmtsZVNjb3JlY2FyZC9jb21wb25lbnRzL1BsYXllci9QbGF5ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAoe1xuICBuYW1lLFxuICBzY29yZXMsXG4gIGFjdGl2ZSxcbiAgcGxheWVySW5kZXgsXG4gIHNldEFjdGl2ZVBsYXllckluZGV4XG59KSA9PiB7XG4gIGNvbnN0IHRvdGFsID1cbiAgICAoc2NvcmVzLmxlbmd0aCAmJiBzY29yZXMucmVkdWNlKChvbmUsIHR3bykgPT4gTnVtYmVyKG9uZSkgKyBOdW1iZXIodHdvKSkpIHx8XG4gICAgXCIwXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2FjdGl2ZSA/IFwiaXMtYWN0aXZlXCIgOiBcIlwifVxuICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlUGxheWVySW5kZXgocGxheWVySW5kZXgpfVxuICAgID5cbiAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cbiAgICAgIDxzcGFuPnt0b3RhbH08L3NwYW4+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlzLWFjdGl2ZSB7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2aW9sZXQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/Player/Player.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

})
//# sourceMappingURL=index.js.9814f31b0177c398e925.hot-update.js.map