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

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-959633159" + " " + "score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-959633159",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, score)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "959633159",
    __self: this
  }, ".score.jsx-959633159{display:block;margin-bottom:20px;border-radius:70px;position:relative;background:#333;color:white;font-size:24px;margin-bottom:20px;}.score.jsx-959633159::before{content:\"\";display:block;padding-bottom:20%;}.score.jsx-959633159 span.jsx-959633159{position:absolute;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9DYWxjdWxhdG9yL0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZSxBQUdpQyxBQVdILEFBTU8sV0FMSixHQVhLLElBaUJiLE1BQ0MsQ0FOWSxNQU9SLEVBbEJRLFNBbUJQLEVBUGQsUUFYb0IsRUFtQkwsZ0JBbEJHLGdCQUNKLFlBQ0csZUFDSSxlQWdCVSxJQWYvQix1SEFnQnFCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvanNvaWxlYXUvUGVyc29uYWwvRmFya2xlU2NvcmVjYXJkL2NvbXBvbmVudHMvQ2FsY3VsYXRvci9DYWxjdWxhdG9yLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ncmlkLXN5c3RlbVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuY29uc3QgQ2FsY3VsYXRvciA9ICgpID0+IHtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZShcIjBcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY29yZVwiPlxuICAgICAgICAgICAgICA8c3Bhbj57c2NvcmV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLnNjb3JlIHtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDcwcHg7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuc2NvcmU6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zY29yZSBzcGFuIHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uPjc8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24+ODwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbj45PC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbj40PC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uPjU8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24+NjwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24+MTwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbj4yPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uPjM8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8QnV0dG9uIHNtYWxsIGNvbG9yPVwicmVkXCI+XG4gICAgICAgICAgICAgIEZhcmtsZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8QnV0dG9uIHNtYWxsIGNvbG9yPVwiZ3JlZW5cIj5cbiAgICAgICAgICAgICAgQmFua1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yO1xuIl19 */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/Calculator/Calculator.jsx */"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "7")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "8")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "9"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "4")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "5")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "6"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "1")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "2")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "3"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Farkle")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    small: true,
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Bank")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ })

})
//# sourceMappingURL=index.js.ac684aebaa28256b7420.hot-update.js.map