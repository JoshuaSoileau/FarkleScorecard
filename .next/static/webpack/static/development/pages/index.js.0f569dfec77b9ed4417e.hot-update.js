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
    return one + two;
  }) || "0";
  return __jsx("button", {
    onClick: function onClick() {
      return setActivePlayerIndex(playerIndex);
    },
    className: "jsx-1528102340" + " " + ((active ? "is-active" : "") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1528102340",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, name), __jsx("span", {
    className: "jsx-1528102340",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, total), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1528102340",
    __self: this
  }, "button.jsx-1528102340{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-radius:8px;box-shadow:0 6px 16px rgba(0,0,0,0.2);padding:14px;margin:8px 0;}.is-active.jsx-1528102340{border:1px solid lightblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQlMsQUFHMEIsQUFTYywyQkFDN0IsK0NBVGdDLG1IQUNaLGtCQUN1QixzQ0FDNUIsYUFDQSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUGxheWVyID0gKHtcbiAgbmFtZSxcbiAgc2NvcmVzLFxuICBhY3RpdmUsXG4gIHBsYXllckluZGV4LFxuICBzZXRBY3RpdmVQbGF5ZXJJbmRleFxufSkgPT4ge1xuICBjb25zdCB0b3RhbCA9XG4gICAgKHNjb3Jlcy5sZW5ndGggJiYgc2NvcmVzLnJlZHVjZSgob25lLCB0d28pID0+IG9uZSArIHR3bykpIHx8IFwiMFwiO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXthY3RpdmUgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVBsYXllckluZGV4KHBsYXllckluZGV4KX1cbiAgICA+XG4gICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XG4gICAgICA8c3Bhbj57dG90YWx9PC9zcGFuPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl19 */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/Player/Player.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

})
//# sourceMappingURL=index.js.0f569dfec77b9ed4417e.hot-update.js.map