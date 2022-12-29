"use strict";
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calculator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var proton_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! proton-native */ "proton-native");
/* harmony import */ var proton_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(proton_native__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var CircleButton = /*#__PURE__*/function (_Component) {
  _inherits(CircleButton, _Component);
  var _super = _createSuper(CircleButton);
  function CircleButton() {
    _classCallCheck(this, CircleButton);
    return _super.apply(this, arguments);
  }
  _createClass(CircleButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.TouchableOpacity, {
        style: {
          backgroundColor: this.props.backgroundColor,
          borderRadius: 40,
          height: 80,
          width: this.props.width || 80,
          alignItems: this.props.start ? 'flex-start' : 'center',
          justifyContent: 'center'
        },
        onPress: this.props.onPress
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Text, {
        style: {
          color: this.props.color,
          fontSize: this.props.size,
          marginLeft: this.props.start ? 25 : 0
        }
      }, this.props.children));
    }
  }]);
  return CircleButton;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
var buttonStyle = {
  primary: {
    backgroundColor: '#FC9E34',
    color: 'white',
    size: 40
  },
  secondary: {
    backgroundColor: '#A4A4A4',
    color: '#010101',
    size: 30
  },
  number: {
    backgroundColor: '#363636',
    color: 'white',
    size: 40
  }
};
var Calculator = /*#__PURE__*/function (_Component2) {
  _inherits(Calculator, _Component2);
  var _super2 = _createSuper(Calculator);
  function Calculator() {
    var _this;
    _classCallCheck(this, Calculator);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      secondary: 0,
      primary: 0,
      operator: '',
      justChanged: false,
      decimal: false
    });
    return _this;
  }
  _createClass(Calculator, [{
    key: "getButtons",
    value: function getButtons() {
      var _this2 = this;
      // this can't be an instance variable or else it won't get hot reloaded
      return [[{
        text: 'AC',
        type: 'secondary',
        onPress: function onPress() {
          return _this2.setState({
            primary: 0,
            secondary: 0,
            operator: '',
            decimal: false,
            justChanged: false
          });
        }
      }, {
        text: '+/-',
        type: 'secondary',
        onPress: function onPress() {
          return _this2.setState({
            primary: -_this2.state.primary
          });
        }
      }, {
        text: '%',
        type: 'secondary',
        onPress: function onPress() {
          return _this2.setState({
            primary: _this2.state.primary / 100
          });
        }
      }, {
        text: '÷',
        type: 'primary',
        onPress: function onPress() {
          return _this2.changeOperator('/');
        }
      }], [{
        text: '7',
        type: 'number',
        onPress: function onPress() {
          return _this2.addDigit(7);
        }
      }, {
        text: '8',
        type: 'number',
        onPress: function onPress() {
          return _this2.addDigit(8);
        }
      }, {
        text: '9',
        type: 'number',
        onPress: function onPress() {
          return _this2.addDigit(9);
        }
      }, {
        text: '×',
        type: 'primary',
        onPress: function onPress() {
          return _this2.changeOperator('*');
        }
      }], [{
        text: '4',
        type: 'number',
        onPress: function onPress() {
          return _this2.addDigit(4);
        }
      }, {
        text: '5',
        type: 'number',
        onPress: function onPress() {
          return _this2.addDigit(5);
        }
      }, {
        text: '6',
        type: 'number',
        onPress: function onPress() {
          return _this2.addDigit(6);
        }
      }, {
        text: '-',
        type: 'primary',
        onPress: function onPress() {
          return _this2.changeOperator('-');
        }
      }], [{
        text: '1',
        type: 'number',
        onPress: function onPress() {
          return _this2.addDigit(1);
        }
      }, {
        text: '2',
        type: 'number',
        onPress: function onPress() {
          return _this2.addDigit(2);
        }
      }, {
        text: '3',
        type: 'number',
        onPress: function onPress() {
          return _this2.addDigit(3);
        }
      }, {
        text: '+',
        type: 'primary',
        onPress: function onPress() {
          return _this2.changeOperator('+');
        }
      }], [{
        text: '0',
        type: 'number',
        width: 185,
        start: true,
        onPress: function onPress() {
          return _this2.addDigit(0);
        }
      }, {
        text: '.',
        type: 'number',
        onPress: function onPress() {
          return _this2.setState({
            decimal: true
          });
        }
      }, {
        text: '=',
        type: 'primary',
        onPress: function onPress() {
          return _this2.changeOperator('+');
        }
      }]];
    }
  }, {
    key: "addDigit",
    value: function addDigit(new_digit) {
      if (this.state.justChanged) {
        if (this.state.decimal) {
          this.setState({
            secondary: this.state.primary,
            primary: new_digit / 10,
            justChanged: false
          });
        } else {
          this.setState({
            secondary: this.state.primary,
            primary: new_digit,
            justChanged: false
          });
        }
      } else if (!this.state.decimal) {
        this.setState({
          primary: 10 * this.state.primary + new_digit
        });
      } else if (this.state.decimal) {
        if (this.state.primary.toString().indexOf('.') == -1) {
          this.setState({
            primary: parseFloat(this.state.primary.toString() + '.' + new_digit.toString())
          });
        } else {
          this.setState({
            primary: parseFloat(this.state.primary.toString() + new_digit.toString())
          });
        }
      }
    }
  }, {
    key: "changeOperator",
    value: function changeOperator(new_operator) {
      if (this.state.operator === '+') {
        this.setState({
          secondary: 0,
          primary: this.state.secondary + this.state.primary,
          operator: new_operator,
          justChanged: true
        });
      } else if (this.state.operator === '-') {
        this.setState({
          secondary: 0,
          primary: this.state.secondary - this.state.primary,
          operator: new_operator,
          justChanged: true
        });
      } else if (this.state.operator === '/') {
        this.setState({
          secondary: 0,
          primary: this.state.secondary / this.state.primary,
          operator: new_operator,
          justChanged: true
        });
      } else if (this.state.operator === '*') {
        this.setState({
          secondary: 0,
          primary: this.state.secondary * this.state.primary,
          operator: new_operator,
          justChanged: true
        });
      } else {
        this.setState({
          operator: new_operator,
          justChanged: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.App, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Window, {
        style: {
          width: 450,
          height: 900,
          backgroundColor: 'black'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.View, {
        style: {
          width: '100%',
          height: '30%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.Text, {
        style: {
          color: 'white',
          fontSize: 80,
          textAlign: 'right',
          marginRight: 35,
          marginBottom: 15,
          fontWeight: 200
        }
      }, this.state.primary.toString().length >= 7 ? this.state.primary.toExponential(4) : this.state.primary)), this.getButtons().map(function (buttonGroup, index1) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_1__.View, {
          key: index1.toString(),
          style: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }
        }, buttonGroup.map(function (button, index2) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CircleButton, _extends({
            key: index1.toString() + index2.toString()
          }, buttonStyle[button.type], {
            onPress: button.onPress,
            width: button.width,
            start: button.start
          }), button.text);
        }));
      })));
    }
  }]);
  return Calculator;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7649b24d347d2a27b3e9")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=main.c87c0153a5aab8868d98.hot-update.js.map