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
      setActivePlayerIndex = _ref.setActivePlayerIndex;
  var total = scores.length && scores.reduce(function (one, two) {
    return one + two;
  }) || "0";
  return __jsx("button", {
    onClick: function onClick() {
      return setActivePlayerIndex(playerIndex);
    },
    className: "jsx-1686830345" + " " + ((active ? "is-active" : "") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1686830345",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, name), __jsx("span", {
    className: "jsx-1686830345",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, total), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1686830345",
    __self: this
  }, "div.jsx-1686830345{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-radius:8px;box-shadow:0 6px 16px rgba(0,0,0,0.2);padding:14px;margin:8px 0;}.is-active.jsx-1686830345{border:1px solid lightblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlUyxBQUcwQixBQVNjLDJCQUM3QiwrQ0FUZ0MsbUhBQ1osa0JBQ3VCLHNDQUM1QixhQUNBLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2pzb2lsZWF1L1BlcnNvbmFsL0ZhcmtsZVNjb3JlY2FyZC9jb21wb25lbnRzL1BsYXllci9QbGF5ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQbGF5ZXIgPSAoeyBuYW1lLCBzY29yZXMsIGFjdGl2ZSwgc2V0QWN0aXZlUGxheWVySW5kZXggfSkgPT4ge1xuICBjb25zdCB0b3RhbCA9XG4gICAgKHNjb3Jlcy5sZW5ndGggJiYgc2NvcmVzLnJlZHVjZSgob25lLCB0d28pID0+IG9uZSArIHR3bykpIHx8IFwiMFwiO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXthY3RpdmUgPyBcImlzLWFjdGl2ZVwiIDogXCJcIn1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVBsYXllckluZGV4KHBsYXllckluZGV4KX1cbiAgICA+XG4gICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XG4gICAgICA8c3Bhbj57dG90YWx9PC9zcGFuPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl19 */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/Player/Player.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

})
//# sourceMappingURL=index.js.bdc39cc758d9d46782d3.hot-update.js.map