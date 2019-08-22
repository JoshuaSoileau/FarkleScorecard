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




var Calculator = function Calculator() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("0"),
      score = _useState[0],
      setScore = _useState[1];

  var handleScoreClick = function handleScoreClick(number) {
    var numberAsString = String(number);

    if (score === "0") {
      setScore(numberAsString);
      return;
    }

    setScore(score + numberAsString);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-959633159" + " " + "score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-959633159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, score)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "959633159",
    __self: this
  }, ".score.jsx-959633159{display:block;margin-bottom:20px;border-radius:70px;position:relative;background:#333;color:white;font-size:24px;margin-bottom:20px;}.score.jsx-959633159::before{content:\"\";display:block;padding-bottom:20%;}.score.jsx-959633159 span.jsx-959633159{position:absolute;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9DYWxjdWxhdG9yL0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCZSxBQUdpQyxBQVdILEFBTU8sV0FMSixHQVhLLElBaUJiLE1BQ0MsQ0FOWSxNQU9SLEVBbEJRLFNBbUJQLEVBUGQsUUFYb0IsRUFtQkwsZ0JBbEJHLGdCQUNKLFlBQ0csZUFDSSxlQWdCVSxJQWYvQix1SEFnQnFCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvanNvaWxlYXUvUGVyc29uYWwvRmFya2xlU2NvcmVjYXJkL2NvbXBvbmVudHMvQ2FsY3VsYXRvci9DYWxjdWxhdG9yLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ncmlkLXN5c3RlbVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuY29uc3QgQ2FsY3VsYXRvciA9ICgpID0+IHtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZShcIjBcIik7XG5cbiAgY29uc3QgaGFuZGxlU2NvcmVDbGljayA9IG51bWJlciA9PiB7XG4gICAgY29uc3QgbnVtYmVyQXNTdHJpbmcgPSBTdHJpbmcobnVtYmVyKTtcblxuICAgIGlmIChzY29yZSA9PT0gXCIwXCIpIHtcbiAgICAgIHNldFNjb3JlKG51bWJlckFzU3RyaW5nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRTY29yZShzY29yZSArIG51bWJlckFzU3RyaW5nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlXCI+XG4gICAgICAgICAgICAgIDxzcGFuPntzY29yZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuc2NvcmUge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNzBweDtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zY29yZTo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMCU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNjb3JlIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2NvcmVDbGlja30+NzwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT44PC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9Pjk8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9PjQ8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2NvcmVDbGlja30+NTwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT42PC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT4xPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9PjI8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2NvcmVDbGlja30+MzwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgICAgIDxCdXR0b24gc21hbGwgY29sb3I9XCJyZWRcIj5cbiAgICAgICAgICAgICAgRmFya2xlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXs2fT5cbiAgICAgICAgICAgIDxCdXR0b24gc21hbGwgY29sb3I9XCJncmVlblwiPlxuICAgICAgICAgICAgICBCYW5rXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3I7XG4iXX0= */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/Calculator/Calculator.jsx */"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "7")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "8")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "9"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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
  }, "4")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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
  }, "5")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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
  }, "6"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "1")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "2")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "3"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    small: true,
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Farkle")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    small: true,
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Bank")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ })

})
//# sourceMappingURL=index.js.4dd5dc8af05c7445d940.hot-update.js.map