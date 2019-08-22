webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Calculator/Button.jsx":
/*!******************************************!*\
  !*** ./components/Calculator/Button.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jsoileau/Personal/FarkleScorecard/components/Calculator/Button.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      small = _ref.small;
  return __jsx("button", {
    onClick: onClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["146075816", [small ? "25%" : "100%"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["146075816", [small ? "25%" : "100%"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "146075816",
    dynamic: [small ? "25%" : "100%"],
    __self: this
  }, "button.__jsx-style-dynamic-selector{border-radius:70px;display:block;font-size:24px;border:1px solid darkblue;background:none;position:relative;width:100%;padding:0;margin-bottom:20px;}button.__jsx-style-dynamic-selector::before{content:\"\";display:block;padding-bottom:".concat(small ? "25%" : "100%", ";}button.__jsx-style-dynamic-selector:focus,button.__jsx-style-dynamic-selector:hover{outline:none;background:#efefef;cursor:pointer;}span.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qc29pbGVhdS9QZXJzb25hbC9GYXJrbGVTY29yZWNhcmQvY29tcG9uZW50cy9DYWxjdWxhdG9yL0J1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUVMsQUFHZ0MsQUFZUixBQU9FLEFBTUssV0FaSixFQU9LLEtBTWIsQ0F6QlEsS0EwQlAsQ0FicUMsTUFjakMsQ0FQSSxDQW5CQSxTQTJCSCxLQVBkLENBbkI0QixNQTJCYixlQWZmLEtBWGtCLGdCQUNFLGtCQUNQLFdBQ0QsU0F3Qm1CLENBdkJWLG1CQUNyQix1R0F1QnFCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvanNvaWxlYXUvUGVyc29uYWwvRmFya2xlU2NvcmVjYXJkL2NvbXBvbmVudHMvQ2FsY3VsYXRvci9CdXR0b24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgb25DbGljaywgc21hbGwgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b24gb25DbGljaz17b25DbGlja30+XG4gICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrYmx1ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvbjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAke3NtYWxsID8gXCIyNSVcIiA6IFwiMTAwJVwifTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidXR0b246Zm9jdXMsXG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19 */\n/*@ sourceURL=/Users/jsoileau/Personal/FarkleScorecard/components/Calculator/Button.jsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.c7e676f6950275625942.hot-update.js.map