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
    className: "jsx-3210435599" + " " + "calculator",
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
    className: "jsx-3210435599" + " " + "score",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3210435599",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, score)))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "7")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "8")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "9"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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
  }, "4")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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
  }, "5")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "6"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "1")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "2")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleScoreClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "3"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    small: true,
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Farkle")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    small: true,
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Bank")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3210435599",
    __self: this
  }, ".score.jsx-3210435599{display:block;margin-bottom:20px;border-radius:70px;position:relative;background:#333;color:white;font-size:24px;margin-bottom:20px;}.score.jsx-3210435599::before{content:\"\";display:block;padding-bottom:20%;}.score.jsx-3210435599 span.jsx-3210435599{position:absolute;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.calculator.jsx-3210435599{margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9DYWxjdWxhdG9yL0NhbGN1bGF0b3IuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFUyxBQUcyQixBQVdILEFBTU8sQUFVRixXQWZGLEdBWEssRUEyQnJCLEVBVlEsTUFDQyxDQU5ZLE1BT1IsRUFsQlEsU0FtQlAsRUFQZCxRQVhvQixFQW1CTCxnQkFsQkcsZ0JBQ0osWUFDRyxlQUNJLGVBZ0JVLElBZi9CLHVIQWdCcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9DYWxjdWxhdG9yL0NhbGN1bGF0b3IuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWdyaWQtc3lzdGVtXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuXG5jb25zdCBDYWxjdWxhdG9yID0gKCkgPT4ge1xuICBjb25zdCBbc2NvcmUsIHNldFNjb3JlXSA9IHVzZVN0YXRlKFwiMFwiKTtcblxuICBjb25zdCBoYW5kbGVTY29yZUNsaWNrID0gbnVtYmVyID0+IHtcbiAgICBjb25zdCBudW1iZXJBc1N0cmluZyA9IFN0cmluZyhudW1iZXIpO1xuXG4gICAgaWYgKHNjb3JlID09PSBcIjBcIikge1xuICAgICAgc2V0U2NvcmUobnVtYmVyQXNTdHJpbmcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFNjb3JlKHNjb3JlICsgbnVtYmVyQXNTdHJpbmcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjdWxhdG9yXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjb3JlXCI+XG4gICAgICAgICAgICAgIDxzcGFuPntzY29yZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9Pjc8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2NvcmVDbGlja30+ODwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT45PC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT40PC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9PjU8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2NvcmVDbGlja30+NjwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXszfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU2NvcmVDbGlja30+MTwvQnV0dG9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTY29yZUNsaWNrfT4yPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNjb3JlQ2xpY2t9PjM8L0J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8QnV0dG9uIHNtYWxsIGNvbG9yPVwicmVkXCI+XG4gICAgICAgICAgICAgIEZhcmtsZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICA8QnV0dG9uIHNtYWxsIGNvbG9yPVwiZ3JlZW5cIj5cbiAgICAgICAgICAgICAgQmFua1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnNjb3JlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDcwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2NvcmU6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zY29yZSBzcGFuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYWxjdWxhdG9yIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbGN1bGF0b3I7XG4iXX0= */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/Calculator/Calculator.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Calculator);

/***/ })

})
//# sourceMappingURL=index.js.4943a40df9832a4a14f9.hot-update.js.map