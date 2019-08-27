webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Calculator/Calculator.jsx":
/*!**********************************************!*\
  !*** ./components/Calculator/Calculator.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Calculator/Button.jsx");
var _jsxFileName = "/Users/jsoileau/Personal/FarkleScorecard/components/Calculator/Calculator.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Calculator = function Calculator(_ref) {
  var addScore = _ref.addScore;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("0"),
      score = _useState[0],
      setScore = _useState[1];

  var handleScoreClick = function handleScoreClick(number) {
    var numberAsString = String(number);

    if (score === "0") {
      setScore(numberAsString);
      return;
    }

    if (typeof number === "number") {
      setScore(String(Number(score) + number));
      return;
    }

    setScore(score + numberAsString);
  };

  return __jsx("div", {
    className: "jsx-3703052516" + " " + "calculator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3703052516" + " " + "score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3703052516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, score))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return setScore("0");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "C"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "7")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "8")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "9")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return handleScoreClick(50);
    },
    color: "lightgray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "+"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "4")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "5")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "6")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return handleScoreClick(-50);
    },
    color: "lightgray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "-"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "1")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "2")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "3")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "0"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    small: true,
    color: "red",
    onClick: function onClick() {
      addScore("0");
      setScore(0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Farkle")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    small: true,
    color: "green",
    onClick: function onClick() {
      addScore(score);
      setScore(0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Bank")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3703052516",
    __self: this
  }, ".score.jsx-3703052516{display:block;margin-bottom:20px;border-radius:70px;position:relative;background:#333;color:white;font-size:24px;margin-bottom:20px;}.score.jsx-3703052516::before{content:\"\";display:block;padding-bottom:20%;}.score.jsx-3703052516 span.jsx-3703052516{position:absolute;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.calculator.jsx-3703052516{margin-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9DYWxjdWxhdG9yL0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStHUyxBQUcyQixBQVdILEFBTU8sQUFXRixXQWhCRixHQVhLLEVBNEJyQixFQVhRLE1BQ0MsQ0FOWSxNQU9SLEVBbEJRLFNBbUJQLEVBUGQsUUFYb0IsRUFtQkwsZ0JBbEJHLGdCQUNKLFlBQ0csZUFDSSxlQWdCVSxJQWYvQix1SEFnQnFCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvanNvaWxlYXUvUGVyc29uYWwvRmFya2xlU2NvcmVjYXJkL2NvbXBvbmVudHMvQ2FsY3VsYXRvci9DYWxjdWxhdG9yLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ncmlkLXN5c3RlbVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuY29uc3QgQ2FsY3VsYXRvciA9ICh7IGFkZFNjb3JlIH0pID0+IHtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZShcIjBcIik7XG5cbiAgY29uc3QgaGFuZGxlU2NvcmVDbGljayA9IG51bWJlciA9PiB7XG4gICAgY29uc3QgbnVtYmVyQXNTdHJpbmcgPSBTdHJpbmcobnVtYmVyKTtcblxuICAgIGlmIChzY29yZSA9PT0gXCIwXCIpIHtcbiAgICAgIHNldFNjb3JlKG51bWJlckFzU3RyaW5nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG51bWJlciA9PT0gXCJudW1iZXJcIikge1xuICAgICAgc2V0U2NvcmUoU3RyaW5nKE51bWJlcihzY29yZSkgKyBudW1iZXIpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRTY29yZShzY29yZSArIG51bWJlckFzU3RyaW5nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsY3VsYXRvclwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXs5fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmVcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e3Njb3JlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTY29yZShcIjBcIil9PkM8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9Pjc8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2NvcmVDbGlja30+ODwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT45PC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNjb3JlQ2xpY2soNTApfSBjb2xvcj1cImxpZ2h0Z3JheVwiPlxuICAgICAgICAgICAgICArXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9PjQ8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2NvcmVDbGlja30+NTwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT42PC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNjb3JlQ2xpY2soLTUwKX0gY29sb3I9XCJsaWdodGdyYXlcIj5cbiAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT4xPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9PjI8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2NvcmVDbGlja30+MzwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT4wPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezZ9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRTY29yZShcIjBcIik7XG4gICAgICAgICAgICAgICAgc2V0U2NvcmUoMCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZhcmtsZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgIGNvbG9yPVwiZ3JlZW5cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWRkU2NvcmUoc2NvcmUpO1xuICAgICAgICAgICAgICAgIHNldFNjb3JlKDApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCYW5rXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuc2NvcmUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNzBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zY29yZTo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNjb3JlIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FsY3VsYXRvciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yO1xuIl19 */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/Calculator/Calculator.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ })

})
//# sourceMappingURL=index.js.81e9919e537b7df8c583.hot-update.js.map