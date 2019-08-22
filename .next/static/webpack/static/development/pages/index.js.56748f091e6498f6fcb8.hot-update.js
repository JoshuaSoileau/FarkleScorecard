webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PlayerList/PlayerList.jsx":
/*!**********************************************!*\
  !*** ./components/PlayerList/PlayerList.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_1__);



var PlayerList = function PlayerList(_ref) {
  var players = _ref.players;
  if (!players.length) return "Click + to add players";
  return players.map;
};

/* harmony default export */ __webpack_exports__["default"] = (PlayerList);

/***/ }),

/***/ "./node_modules/react-grid-system/build/config.js":
/*!********************************************************!*\
  !*** ./node_modules/react-grid-system/build/config.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var configuration = {
  breakpoints: [576, 768, 992, 1200],
  containerWidths: [540, 750, 960, 1140],
  gutterWidth: 30,
  gridColumns: 12,
  defaultScreenClass: 'xl'
};

var getConfiguration = exports.getConfiguration = function getConfiguration() {
  return configuration;
};

var setConfiguration = exports.setConfiguration = function setConfiguration(newConfiguration) {
  configuration = _extends({}, configuration, newConfiguration);
};

/***/ }),

/***/ "./node_modules/react-grid-system/build/context/ScreenClassProvider/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-grid-system/build/context/ScreenClassProvider/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenClassContext = exports.NO_PROVIDER_FLAG = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/react-grid-system/build/utils.js");

var _config = __webpack_require__(/*! ../../config */ "./node_modules/react-grid-system/build/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */


var NO_PROVIDER_FLAG = exports.NO_PROVIDER_FLAG = 'NO_PROVIDER_FLAG';

var ScreenClassContext = exports.ScreenClassContext = _react2.default.createContext(NO_PROVIDER_FLAG);

var ScreenClassProvider = function (_PureComponent) {
  _inherits(ScreenClassProvider, _PureComponent);

  function ScreenClassProvider(props) {
    _classCallCheck(this, ScreenClassProvider);

    var _this = _possibleConstructorReturn(this, (ScreenClassProvider.__proto__ || Object.getPrototypeOf(ScreenClassProvider)).call(this, props));

    _this.state = {
      screenClass: (0, _config.getConfiguration)().defaultScreenClass
    };

    _this.screenClassRef = _react2.default.createRef();
    _this.setScreenClass = _this.setScreenClass.bind(_this);
    return _this;
  }

  _createClass(ScreenClassProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setScreenClass();
      window.addEventListener('resize', this.setScreenClass, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setScreenClass, false);
    }
  }, {
    key: 'setScreenClass',
    value: function setScreenClass() {
      var useOwnWidth = this.props.useOwnWidth;


      var source = useOwnWidth && this.screenClassRef && this.screenClassRef.current;
      var currScreenClass = (0, _utils.getScreenClass)(source);
      if (currScreenClass !== this.state.screenClass) {
        this.setState({ screenClass: currScreenClass });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var screenClass = this.state.screenClass;
      var _props = this.props,
          children = _props.children,
          useOwnWidth = _props.useOwnWidth;


      return _react2.default.createElement(
        ScreenClassContext.Provider,
        { value: screenClass },
        useOwnWidth ? _react2.default.createElement(
          'div',
          { ref: this.screenClassRef },
          children
        ) : _react2.default.createElement(
          _react2.default.Fragment,
          null,
          children
        )
      );
    }
  }]);

  return ScreenClassProvider;
}(_react.PureComponent);

ScreenClassProvider.propTypes = {
  /**
   * Children of the ScreenClassProvider.
   * This should be all your child React nodes that are using `react-grid-system`.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Boolean to determine whether own width should be used as source.
   * When provided, the screen class is derived from own dimensions instead of the window.
   */
  useOwnWidth: _propTypes2.default.bool
};
ScreenClassProvider.defaultProps = {
  useOwnWidth: false
};
exports.default = ScreenClassProvider;

/***/ }),

/***/ "./node_modules/react-grid-system/build/context/ScreenClassResolver/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-grid-system/build/context/ScreenClassResolver/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ScreenClassProvider = __webpack_require__(/*! ../ScreenClassProvider */ "./node_modules/react-grid-system/build/context/ScreenClassProvider/index.js");

var _ScreenClassProvider2 = _interopRequireDefault(_ScreenClassProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScreenClassResolver = function (_Component) {
  _inherits(ScreenClassResolver, _Component);

  function ScreenClassResolver() {
    _classCallCheck(this, ScreenClassResolver);

    return _possibleConstructorReturn(this, (ScreenClassResolver.__proto__ || Object.getPrototypeOf(ScreenClassResolver)).apply(this, arguments));
  }

  _createClass(ScreenClassResolver, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        _ScreenClassProvider.ScreenClassContext.Consumer,
        null,
        function (screenClassCheck) {
          if (screenClassCheck === _ScreenClassProvider.NO_PROVIDER_FLAG) {
            return _react2.default.createElement(
              _ScreenClassProvider2.default,
              null,
              _react2.default.createElement(
                _ScreenClassProvider.ScreenClassContext.Consumer,
                null,
                function (screenClassResolved) {
                  return children(screenClassResolved);
                }
              )
            );
          }
          return children(screenClassCheck);
        }
      );
    }
  }]);

  return ScreenClassResolver;
}(_react.Component);

ScreenClassResolver.propTypes = {
  children: _propTypes2.default.func.isRequired
};
exports.default = ScreenClassResolver;

/***/ }),

/***/ "./node_modules/react-grid-system/build/grid/Col/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-grid-system/build/grid/Col/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(/*! ./style */ "./node_modules/react-grid-system/build/grid/Col/style.js");

var _style2 = _interopRequireDefault(_style);

var _config = __webpack_require__(/*! ../../config */ "./node_modules/react-grid-system/build/config.js");

var _Row = __webpack_require__(/*! ../Row */ "./node_modules/react-grid-system/build/grid/Row/index.js");

var _ScreenClassResolver = __webpack_require__(/*! ../../context/ScreenClassResolver */ "./node_modules/react-grid-system/build/context/ScreenClassResolver/index.js");

var _ScreenClassResolver2 = _interopRequireDefault(_ScreenClassResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Col = function (_React$PureComponent) {
  _inherits(Col, _React$PureComponent);

  function Col() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Col);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Col.__proto__ || Object.getPrototypeOf(Col)).call.apply(_ref, [this].concat(args))), _this), _this.renderCol = function (gutterWidth, screenClass) {
      var _this$props = _this.props,
          children = _this$props.children,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          lg = _this$props.lg,
          xl = _this$props.xl,
          offset = _this$props.offset,
          pull = _this$props.pull,
          push = _this$props.push,
          debug = _this$props.debug,
          style = _this$props.style,
          component = _this$props.component,
          otherProps = _objectWithoutProperties(_this$props, ['children', 'xs', 'sm', 'md', 'lg', 'xl', 'offset', 'pull', 'push', 'debug', 'style', 'component']);

      var theStyle = (0, _style2.default)({
        width: {
          xs: xs,
          sm: sm,
          md: md,
          lg: lg,
          xl: xl
        },
        offset: offset,
        pull: pull,
        push: push,
        debug: debug,
        screenClass: screenClass,
        gutterWidth: gutterWidth,
        gridColumns: (0, _config.getConfiguration)().gridColumns,
        moreStyle: style
      });
      return (0, _react.createElement)(component, _extends({ style: theStyle }, otherProps, { children: children }));
    }, _this.render = function () {
      return _react2.default.createElement(
        _ScreenClassResolver2.default,
        null,
        function (screenClass) {
          return _react2.default.createElement(
            _Row.GutterWidthContext.Consumer,
            null,
            function (gutterWidth) {
              return _this.renderCol(gutterWidth, screenClass);
            }
          );
        }
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Col;
}(_react2.default.PureComponent);

Col.propTypes = {
  /**
   * Content of the column
   */
  children: _propTypes2.default.node,
  /**
   * The width of the column for screenclass `xs`, either a number between 0 and 12, or "content"
   */
  xs: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['content'])]),
  /**
   * The width of the column for screenclass `sm`, either a number between 0 and 12, or "content"
   */
  sm: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['content'])]),
  /**
   * The width of the column for screenclass `md`, either a number between 0 and 12, or "content"
   */
  md: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['content'])]),
  /**
   * The width of the column for screenclass `lg`, either a number between 0 and 12, or "content"
   */
  lg: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['content'])]),
  /**
   * The width of the column for screenclass `xl`, either a number between 0 and 12, or "content"
   */
  xl: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['content'])]),
  /**
   * The offset of this column for all screenclasses
   */
  offset: _propTypes2.default.shape({
    xs: _propTypes2.default.number,
    sm: _propTypes2.default.number,
    md: _propTypes2.default.number,
    lg: _propTypes2.default.number,
    xl: _propTypes2.default.number
  }),
  /**
   * The amount this column is pushed to the right for all screenclasses
   */
  push: _propTypes2.default.shape({
    xs: _propTypes2.default.number,
    sm: _propTypes2.default.number,
    md: _propTypes2.default.number,
    lg: _propTypes2.default.number,
    xl: _propTypes2.default.number
  }),
  /**
   * The amount this column is pulled to the left for all screenclasses
   */
  pull: _propTypes2.default.shape({
    xs: _propTypes2.default.number,
    sm: _propTypes2.default.number,
    md: _propTypes2.default.number,
    lg: _propTypes2.default.number,
    xl: _propTypes2.default.number
  }),
  /**
   * Optional styling
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])),
  /**
   * Set to apply some debug styling
   */
  debug: _propTypes2.default.bool,
  /**
   * Use your own component
   */
  component: _propTypes2.default.elementType
};
Col.defaultProps = {
  children: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  offset: {},
  push: {},
  pull: {},
  style: {},
  debug: false,
  component: 'div'
};
exports.default = Col;

/***/ }),

/***/ "./node_modules/react-grid-system/build/grid/Col/style.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-grid-system/build/grid/Col/style.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/react-grid-system/build/utils.js");

var hasWidth = function hasWidth(widths) {
  return Object.keys(widths).reduce(function (acc, cur) {
    return acc || widths[cur];
  }, false);
};

var getWidth = function getWidth(width, gridColumns) {
  if (typeof width !== 'number') return undefined;
  var normalizedWidth = Math.max(0, Math.min(gridColumns, width));
  return 100 / gridColumns * normalizedWidth + '%';
};

exports.default = function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? {} : _ref$width,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? {} : _ref$offset,
      _ref$pull = _ref.pull,
      pull = _ref$pull === undefined ? {} : _ref$pull,
      _ref$push = _ref.push,
      push = _ref$push === undefined ? {} : _ref$push,
      debug = _ref.debug,
      screenClass = _ref.screenClass,
      gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle,
      gridColumns = _ref.gridColumns;

  var styles = _extends({
    boxSizing: 'border-box',
    minHeight: '1px',
    position: 'relative',
    paddingLeft: gutterWidth / 2 + 'px',
    paddingRight: gutterWidth / 2 + 'px',
    width: '100%'
  }, moreStyle);

  if (debug) {
    styles.outline = '1px solid silver';
    styles.background = 'rgba(0,0,0,.05)';
  }

  styles.flexBasis = '100%';
  styles.flexGrow = 0;
  styles.flexShrink = 0;
  styles.maxWidth = '100%';
  styles.marginLeft = '0%';
  styles.right = 'auto';
  styles.left = 'auto';

  _utils.screenClasses.forEach(function (size, index) {
    if (_utils.screenClasses.indexOf(screenClass) >= index) {
      var currentWidth = getWidth(width[size], gridColumns);
      var isSizedToContent = width[size] === 'content';

      styles.flexBasis = isSizedToContent ? 'auto' : currentWidth || styles.flexBasis;
      styles.width = isSizedToContent ? 'auto' : width;
      styles.maxWidth = currentWidth || styles.maxWidth;
      styles.marginLeft = getWidth(offset[size], gridColumns) || styles.marginLeft;
      styles.right = getWidth(pull[size], gridColumns) || styles.right;
      styles.left = getWidth(push[size], gridColumns) || styles.left;
    }
  });

  if (!hasWidth(width)) {
    styles.flexBasis = 0;
    styles.flexGrow = 1;
  }

  return styles;
};

/***/ }),

/***/ "./node_modules/react-grid-system/build/grid/Container/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-grid-system/build/grid/Container/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(/*! ./style */ "./node_modules/react-grid-system/build/grid/Container/style.js");

var _style2 = _interopRequireDefault(_style);

var _config = __webpack_require__(/*! ../../config */ "./node_modules/react-grid-system/build/config.js");

var _ScreenClassResolver = __webpack_require__(/*! ../../context/ScreenClassResolver */ "./node_modules/react-grid-system/build/context/ScreenClassResolver/index.js");

var _ScreenClassResolver2 = _interopRequireDefault(_ScreenClassResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$PureComponent) {
  _inherits(Container, _React$PureComponent);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          fluid = _props.fluid,
          xs = _props.xs,
          sm = _props.sm,
          md = _props.md,
          lg = _props.lg,
          xl = _props.xl,
          style = _props.style,
          component = _props.component,
          otherProps = _objectWithoutProperties(_props, ['children', 'fluid', 'xs', 'sm', 'md', 'lg', 'xl', 'style', 'component']);

      return _react2.default.createElement(
        _ScreenClassResolver2.default,
        null,
        function (screenClass) {
          return (0, _react.createElement)(component, _extends({
            style: (0, _style2.default)({
              fluid: fluid,
              xs: xs,
              sm: sm,
              md: md,
              lg: lg,
              xl: xl,
              screenClass: screenClass || _this2.state.screenClass,
              containerWidths: (0, _config.getConfiguration)().containerWidths,
              gutterWidth: (0, _config.getConfiguration)().gutterWidth,
              moreStyle: style
            })
          }, otherProps), _react2.default.createElement(
            _react2.default.Fragment,
            null,
            children,
            _react2.default.createElement('span', { style: (0, _style.getAfterStyle)() })
          ));
        }
      );
    }
  }]);

  return Container;
}(_react2.default.PureComponent);

Container.propTypes = {
  /**
   * Content of the component
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * True makes the container full-width, false fixed-width
   */
  fluid: _propTypes2.default.bool,
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xs, not present means fluid everywhere
   */
  xs: _propTypes2.default.bool,
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in sm, not present means fluid everywhere
   */
  sm: _propTypes2.default.bool,
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in md, not present means fluid everywhere
   */
  md: _propTypes2.default.bool,
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in lg, not present means fluid everywhere
   */
  lg: _propTypes2.default.bool,
  /**
   * This is in combination with fluid enabled
   * True makes container fluid only in xl, not present means fluid everywhere
   */
  xl: _propTypes2.default.bool,
  /**
   * Optional styling
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])),
  /**
   * Use your own component
   */
  component: _propTypes2.default.elementType
};
Container.defaultProps = {
  fluid: false,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  style: {},
  component: 'div'
};
exports.default = Container;

/***/ }),

/***/ "./node_modules/react-grid-system/build/grid/Container/style.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-grid-system/build/grid/Container/style.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref) {
  var fluid = _ref.fluid,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      screenClass = _ref.screenClass,
      containerWidths = _ref.containerWidths,
      gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle;

  var styles = _extends({
    boxSizing: 'border-box',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: gutterWidth / 2 + 'px',
    paddingRight: gutterWidth / 2 + 'px'
  }, moreStyle);

  if (fluid && !sm && !md && !lg && !xl) {
    return styles;
  }

  if (screenClass === 'sm' && containerWidths[0] && !sm && !xs) {
    styles.maxWidth = containerWidths[0] + 'px';
  }

  if (screenClass === 'md' && containerWidths[1] && !md) {
    styles.maxWidth = containerWidths[1] + 'px';
  }

  if (screenClass === 'lg' && containerWidths[2] && !lg) {
    styles.maxWidth = containerWidths[2] + 'px';
  }

  if (screenClass === 'xl' && containerWidths[3] && !xl) {
    styles.maxWidth = containerWidths[3] + 'px';
  }

  return styles;
};

var getAfterStyle = exports.getAfterStyle = function getAfterStyle() {
  return {
    display: 'table',
    clear: 'both'
  };
};

/***/ }),

/***/ "./node_modules/react-grid-system/build/grid/Row/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-grid-system/build/grid/Row/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GutterWidthContext = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _config = __webpack_require__(/*! ../../config */ "./node_modules/react-grid-system/build/config.js");

var _style = __webpack_require__(/*! ./style */ "./node_modules/react-grid-system/build/grid/Row/style.js");

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GutterWidthContext = exports.GutterWidthContext = _react2.default.createContext(false);

var Row = function (_React$PureComponent) {
  _inherits(Row, _React$PureComponent);

  function Row() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Row.__proto__ || Object.getPrototypeOf(Row)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          style = _this$props.style,
          align = _this$props.align,
          justify = _this$props.justify,
          debug = _this$props.debug,
          nogutter = _this$props.nogutter,
          gutterWidth = _this$props.gutterWidth,
          component = _this$props.component,
          nowrap = _this$props.nowrap,
          otherProps = _objectWithoutProperties(_this$props, ['children', 'style', 'align', 'justify', 'debug', 'nogutter', 'gutterWidth', 'component', 'nowrap']);

      var theGutterWidth = (0, _config.getConfiguration)().gutterWidth;
      if (nogutter) theGutterWidth = 0;
      if (typeof gutterWidth === 'number') theGutterWidth = gutterWidth;
      var theStyle = (0, _style2.default)({
        gutterWidth: theGutterWidth,
        align: align,
        justify: justify,
        debug: debug,
        moreStyle: style,
        nowrap: nowrap
      });
      return _react2.default.createElement(component, _extends({ style: theStyle }, otherProps), _react2.default.createElement(
        GutterWidthContext.Provider,
        { value: theGutterWidth },
        children
      ));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Row;
}(_react2.default.PureComponent);

Row.propTypes = {
  /**
   * Content of the element
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Vertical column alignment
   */
  align: _propTypes2.default.oneOf(['normal', 'start', 'center', 'end', 'stretch']),
  /**
   * Horizontal column alignment
   */
  justify: _propTypes2.default.oneOf(['start', 'center', 'end', 'between', 'around', 'initial', 'inherit']),
  /**
   * No gutter for this row
   */
  nogutter: _propTypes2.default.bool,
  /**
   * Custom gutter width for this row
   */
  gutterWidth: _propTypes2.default.number,
  /**
   * Optional styling
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])),
  /**
   * Set to apply some debug styling
   */
  debug: _propTypes2.default.bool,
  /**
   * Use your own component
   */
  component: _propTypes2.default.elementType,
  /**
   * Whether the cols should not wrap
   */
  nowrap: _propTypes2.default.bool
};
Row.defaultProps = {
  align: 'normal',
  justify: 'start',
  nogutter: false,
  gutterWidth: null,
  style: {},
  debug: false,
  component: 'div',
  nowrap: false
};
exports.default = Row;

/***/ }),

/***/ "./node_modules/react-grid-system/build/grid/Row/style.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-grid-system/build/grid/Row/style.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref) {
  var gutterWidth = _ref.gutterWidth,
      align = _ref.align,
      justify = _ref.justify,
      debug = _ref.debug,
      moreStyle = _ref.moreStyle,
      nowrap = _ref.nowrap;

  // Vertical alignment
  var alignItems = align;
  if (align === 'start') alignItems = 'flex-start';
  if (align === 'end') alignItems = 'flex-end';

  // Horizontal alignment
  var justifyContent = justify;
  if (justify === 'start') justifyContent = 'flex-start';
  if (justify === 'end') justifyContent = 'flex-end';
  if (justify === 'between') justifyContent = 'space-between';
  if (justify === 'around') justifyContent = 'space-around';
  if (justify === 'center') justifyContent = 'center';
  if (justify === 'initial') justifyContent = 'initial';
  if (justify === 'inherit') justifyContent = 'inherit';

  var styles = _extends({
    marginLeft: '-' + gutterWidth / 2 + 'px',
    marginRight: '-' + gutterWidth / 2 + 'px',
    display: 'flex',
    flexWrap: nowrap ? 'nowrap' : 'wrap',
    flexGrow: 0,
    flexShrink: 0,
    alignItems: alignItems,
    justifyContent: justifyContent
  }, moreStyle);

  if (debug) {
    styles.background = 'rgba(128,128,128,.05)';
  }

  return styles;
};

/***/ }),

/***/ "./node_modules/react-grid-system/build/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-grid-system/build/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Col = __webpack_require__(/*! ./grid/Col */ "./node_modules/react-grid-system/build/grid/Col/index.js");

Object.defineProperty(exports, 'Col', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Col).default;
  }
});

var _Container = __webpack_require__(/*! ./grid/Container */ "./node_modules/react-grid-system/build/grid/Container/index.js");

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Container).default;
  }
});

var _Row = __webpack_require__(/*! ./grid/Row */ "./node_modules/react-grid-system/build/grid/Row/index.js");

Object.defineProperty(exports, 'Row', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Row).default;
  }
});

var _Hidden = __webpack_require__(/*! ./utilities/Hidden */ "./node_modules/react-grid-system/build/utilities/Hidden/index.js");

Object.defineProperty(exports, 'Hidden', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hidden).default;
  }
});

var _Visible = __webpack_require__(/*! ./utilities/Visible */ "./node_modules/react-grid-system/build/utilities/Visible/index.js");

Object.defineProperty(exports, 'Visible', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Visible).default;
  }
});

var _ScreenClassRender = __webpack_require__(/*! ./utilities/ScreenClassRender */ "./node_modules/react-grid-system/build/utilities/ScreenClassRender/index.js");

Object.defineProperty(exports, 'ScreenClassRender', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScreenClassRender).default;
  }
});

var _ScreenClassProvider = __webpack_require__(/*! ./context/ScreenClassProvider */ "./node_modules/react-grid-system/build/context/ScreenClassProvider/index.js");

Object.defineProperty(exports, 'ScreenClassProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScreenClassProvider).default;
  }
});
Object.defineProperty(exports, 'ScreenClassContext', {
  enumerable: true,
  get: function get() {
    return _ScreenClassProvider.ScreenClassContext;
  }
});

var _config = __webpack_require__(/*! ./config */ "./node_modules/react-grid-system/build/config.js");

Object.defineProperty(exports, 'setConfiguration', {
  enumerable: true,
  get: function get() {
    return _config.setConfiguration;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-grid-system/build/utilities/Hidden/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-grid-system/build/utilities/Hidden/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(/*! ./style */ "./node_modules/react-grid-system/build/utilities/Hidden/style.js");

var style = _interopRequireWildcard(_style);

var _ScreenClassResolver = __webpack_require__(/*! ../../context/ScreenClassResolver */ "./node_modules/react-grid-system/build/context/ScreenClassResolver/index.js");

var _ScreenClassResolver2 = _interopRequireDefault(_ScreenClassResolver);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hidden = function (_React$PureComponent) {
  _inherits(Hidden, _React$PureComponent);

  function Hidden() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Hidden);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hidden.__proto__ || Object.getPrototypeOf(Hidden)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        _ScreenClassResolver2.default,
        null,
        function (screenClass) {
          return style.hidden({
            screenClass: screenClass,
            xs: _this.props.xs,
            sm: _this.props.sm,
            md: _this.props.md,
            lg: _this.props.lg,
            xl: _this.props.xl
          }) ? null : _this.props.children;
        }
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Hidden;
}(_react2.default.PureComponent);

Hidden.propTypes = {
  /**
   * Content of the component
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Hide on extra small devices
   */
  xs: _propTypes2.default.bool,
  /**
   * Hide on small devices
   */
  sm: _propTypes2.default.bool,
  /**
   * Hide on medium devices
   */
  md: _propTypes2.default.bool,
  /**
   * Hide on large devices
   */
  lg: _propTypes2.default.bool,
  /**
   * Hide on xlarge devices
   */
  xl: _propTypes2.default.bool
};
Hidden.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false
};
exports.default = Hidden;

/***/ }),

/***/ "./node_modules/react-grid-system/build/utilities/Hidden/style.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-grid-system/build/utilities/Hidden/style.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var hidden = exports.hidden = function hidden(_ref) {
  var screenClass = _ref.screenClass,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl;

  if (screenClass === 'xl') return xl;
  if (screenClass === 'lg') return lg;
  if (screenClass === 'md') return md;
  if (screenClass === 'sm') return sm;
  return xs;
};

exports.default = hidden;

/***/ }),

/***/ "./node_modules/react-grid-system/build/utilities/ScreenClassRender/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-grid-system/build/utilities/ScreenClassRender/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ScreenClassResolver = __webpack_require__(/*! ../../context/ScreenClassResolver */ "./node_modules/react-grid-system/build/context/ScreenClassResolver/index.js");

var _ScreenClassResolver2 = _interopRequireDefault(_ScreenClassResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScreenClassRender = function (_React$PureComponent) {
  _inherits(ScreenClassRender, _React$PureComponent);

  function ScreenClassRender() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ScreenClassRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScreenClassRender.__proto__ || Object.getPrototypeOf(ScreenClassRender)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        _ScreenClassResolver2.default,
        null,
        function (screenClass) {
          return _this.props.render(screenClass);
        }
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ScreenClassRender;
}(_react2.default.PureComponent);

ScreenClassRender.propTypes = {
  /**
   * The function which return value will be rendered.
   * Will be called with one argument: the screen class.
   */
  render: _propTypes2.default.func.isRequired
};
exports.default = ScreenClassRender;

/***/ }),

/***/ "./node_modules/react-grid-system/build/utilities/Visible/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-grid-system/build/utilities/Visible/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(/*! ./style */ "./node_modules/react-grid-system/build/utilities/Visible/style.js");

var style = _interopRequireWildcard(_style);

var _ScreenClassResolver = __webpack_require__(/*! ../../context/ScreenClassResolver */ "./node_modules/react-grid-system/build/context/ScreenClassResolver/index.js");

var _ScreenClassResolver2 = _interopRequireDefault(_ScreenClassResolver);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visible = function (_React$PureComponent) {
  _inherits(Visible, _React$PureComponent);

  function Visible() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Visible);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Visible.__proto__ || Object.getPrototypeOf(Visible)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        _ScreenClassResolver2.default,
        null,
        function (screenClass) {
          return !style.visible({
            screenClass: screenClass,
            xs: _this.props.xs,
            sm: _this.props.sm,
            md: _this.props.md,
            lg: _this.props.lg,
            xl: _this.props.xl
          }) ? null : _this.props.children;
        }
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Visible;
}(_react2.default.PureComponent);

Visible.propTypes = {
  /**
   * Content of the component
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Show on extra small devices
   */
  xs: _propTypes2.default.bool,
  /**
   * Show on small devices
   */
  sm: _propTypes2.default.bool,
  /**
   * Show on medium devices
   */
  md: _propTypes2.default.bool,
  /**
   * Show on large devices
   */
  lg: _propTypes2.default.bool,
  /**
   * Show on xl devices
   */
  xl: _propTypes2.default.bool
};
Visible.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false
};
exports.default = Visible;

/***/ }),

/***/ "./node_modules/react-grid-system/build/utilities/Visible/style.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-grid-system/build/utilities/Visible/style.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var visible = exports.visible = function visible(_ref) {
  var screenClass = _ref.screenClass,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl;

  if (screenClass === 'xl') return xl;
  if (screenClass === 'lg') return lg;
  if (screenClass === 'md') return md;
  if (screenClass === 'sm') return sm;
  return xs;
};

exports.default = visible;

/***/ }),

/***/ "./node_modules/react-grid-system/build/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-grid-system/build/utils.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenClass = exports.screenClasses = undefined;

var _config = __webpack_require__(/*! ./config */ "./node_modules/react-grid-system/build/config.js");

var getViewPort = function getViewPort(source) {
  if (source && source.clientWidth) {
    return source.clientWidth;
  }
  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth;
  }
  return null;
}; /* global window */
/* eslint "no-console": "off" */

var screenClasses = exports.screenClasses = ['xs', 'sm', 'md', 'lg', 'xl'];

var getScreenClass = exports.getScreenClass = function getScreenClass(source) {
  var _getConfiguration = (0, _config.getConfiguration)(),
      breakpoints = _getConfiguration.breakpoints,
      defaultScreenClass = _getConfiguration.defaultScreenClass;

  var screenClass = defaultScreenClass;

  var viewport = getViewPort(source);
  if (viewport) {
    screenClass = 'xs';
    if (breakpoints[0] && viewport >= breakpoints[0]) screenClass = 'sm';
    if (breakpoints[1] && viewport >= breakpoints[1]) screenClass = 'md';
    if (breakpoints[2] && viewport >= breakpoints[2]) screenClass = 'lg';
    if (breakpoints[3] && viewport >= breakpoints[3]) screenClass = 'xl';
  }

  return screenClass;
};

/***/ })

})
//# sourceMappingURL=index.js.56748f091e6498f6fcb8.hot-update.js.map