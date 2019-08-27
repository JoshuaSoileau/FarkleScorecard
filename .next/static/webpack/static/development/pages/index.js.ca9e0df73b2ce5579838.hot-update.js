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

  if (scores.length) {
    debugger;
  }

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
      lineNumber: 18
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3940477816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, name), __jsx("span", {
    className: "jsx-3940477816",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, total), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3940477816",
    __self: this
  }, "button.jsx-3940477816{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-radius:8px;box-shadow:0 6px 16px rgba(0,0,0,0.2);padding:14px;margin:8px 0;}button.jsx-3940477816:focus{outline:none;}.is-active.jsx-3940477816{border:2px solid violet;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QlMsQUFHMEIsQUFVQSxBQUlXLGFBSDFCLFdBSUEsa0RBZGEsV0FDbUIsbUhBQ1osa0JBQ3VCLHNDQUM1QixhQUNBLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2pzb2lsZWF1L1BlcnNvbmFsL0ZhcmtsZVNjb3JlY2FyZC9jb21wb25lbnRzL1BsYXllci9QbGF5ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAoe1xuICBuYW1lLFxuICBzY29yZXMsXG4gIGFjdGl2ZSxcbiAgcGxheWVySW5kZXgsXG4gIHNldEFjdGl2ZVBsYXllckluZGV4XG59KSA9PiB7XG4gIGlmIChzY29yZXMubGVuZ3RoKSB7XG4gICAgZGVidWdnZXI7XG4gIH1cbiAgY29uc3QgdG90YWwgPVxuICAgIChzY29yZXMubGVuZ3RoICYmIHNjb3Jlcy5yZWR1Y2UoKG9uZSwgdHdvKSA9PiBOdW1iZXIob25lKSArIE51bWJlcih0d28pKSkgfHxcbiAgICBcIjBcIjtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17YWN0aXZlID8gXCJpcy1hY3RpdmVcIiA6IFwiXCJ9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVQbGF5ZXJJbmRleChwbGF5ZXJJbmRleCl9XG4gICAgPlxuICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxuICAgICAgPHNwYW4+e3RvdGFsfTwvc3Bhbj5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZpb2xldDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl19 */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/Player/Player.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

})
//# sourceMappingURL=index.js.ca9e0df73b2ce5579838.hot-update.js.map