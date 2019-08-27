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
    debugger;

    if (score === "0") {
      setScore(numberAsString);
      return;
    }

    if (typeof number === "number") {
      setScore(Number(score) + number);
      return;
    }

    setScore(score + numberAsString);
  };

  return __jsx("div", {
    className: "jsx-3703052516" + " " + "calculator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3703052516" + " " + "score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3703052516",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, score))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return handleScoreClick(0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "C"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "7")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "8")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "9")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: function onClick() {
      return handleScoreClick(50);
    },
    color: "lightgray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "+"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "4")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "5")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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
  }, "6")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    color: "lightgray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "-"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "1")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "2")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "3")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "0"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    small: true,
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Farkle")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    small: true,
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Bank")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3703052516",
    __self: this
  }, ".score.jsx-3703052516{display:block;margin-bottom:20px;border-radius:70px;position:relative;background:#333;color:white;font-size:24px;margin-bottom:20px;}.score.jsx-3703052516::before{content:\"\";display:block;padding-bottom:20%;}.score.jsx-3703052516 span.jsx-3703052516{position:absolute;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.calculator.jsx-3703052516{margin-top:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9DYWxjdWxhdG9yL0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1HUyxBQUcyQixBQVdILEFBTU8sQUFXRixXQWhCRixHQVhLLEVBNEJyQixFQVhRLE1BQ0MsQ0FOWSxNQU9SLEVBbEJRLFNBbUJQLEVBUGQsUUFYb0IsRUFtQkwsZ0JBbEJHLGdCQUNKLFlBQ0csZUFDSSxlQWdCVSxJQWYvQix1SEFnQnFCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvanNvaWxlYXUvUGVyc29uYWwvRmFya2xlU2NvcmVjYXJkL2NvbXBvbmVudHMvQ2FsY3VsYXRvci9DYWxjdWxhdG9yLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gXCJyZWFjdC1ncmlkLXN5c3RlbVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuY29uc3QgQ2FsY3VsYXRvciA9ICgpID0+IHtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZShcIjBcIik7XG5cbiAgY29uc3QgaGFuZGxlU2NvcmVDbGljayA9IG51bWJlciA9PiB7XG4gICAgY29uc3QgbnVtYmVyQXNTdHJpbmcgPSBTdHJpbmcobnVtYmVyKTtcblxuICAgIGRlYnVnZ2VyO1xuXG4gICAgaWYgKHNjb3JlID09PSBcIjBcIikge1xuICAgICAgc2V0U2NvcmUobnVtYmVyQXNTdHJpbmcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbnVtYmVyID09PSBcIm51bWJlclwiKSB7XG4gICAgICBzZXRTY29yZShOdW1iZXIoc2NvcmUpICsgbnVtYmVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRTY29yZShzY29yZSArIG51bWJlckFzU3RyaW5nKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsY3VsYXRvclwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXs5fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NvcmVcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e3Njb3JlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTY29yZUNsaWNrKDApfT5DPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT43PC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9Pjg8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2NvcmVDbGlja30+OTwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTY29yZUNsaWNrKDUwKX0gY29sb3I9XCJsaWdodGdyYXlcIj5cbiAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT40PC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9PjU8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2NvcmVDbGlja30+NjwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfSBjb2xvcj1cImxpZ2h0Z3JheVwiPlxuICAgICAgICAgICAgICAtXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9PjE8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2NvcmVDbGlja30+MjwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT4zPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9PjA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8QnV0dG9uIHNtYWxsIGNvbG9yPVwicmVkXCI+XG4gICAgICAgICAgICAgIEZhcmtsZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8QnV0dG9uIHNtYWxsIGNvbG9yPVwiZ3JlZW5cIj5cbiAgICAgICAgICAgICAgQmFua1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnNjb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDcwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2NvcmU6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zY29yZSBzcGFuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhbGN1bGF0b3Ige1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvcjtcbiJdfQ== */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/Calculator/Calculator.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ })

})
//# sourceMappingURL=index.js.61cb802676ae6d7298e3.hot-update.js.map