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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'systray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var proton_native__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! proton-native */ "proton-native");
/* harmony import */ var proton_native__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(proton_native__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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




var systray = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'systray'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
  menu: {
    // you should using .png icon in macOS/Linux, but .ico format in windows
    icon: new Buffer(fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync('/.../icon.png')).toString('base64'),
    title: 'Test',
    tooltip: 'Tips',
    items: [{
      title: 'Item',
      tooltip: 'Item Tooltip',
      enabled: true
    }, {
      title: 'Exit',
      tooltip: 'bb',
      enabled: true
    }]
  },
  debug: false,
  copyDir: true
});
systray.onClick(function (action) {
  if (action.seq_id === 0) {
    console.log('Hi!');
  } else if (action.seq_id === 1) {
    systray.kill();
  }
});
var stop = function stop() {
  systray.kill(false);
};
var Example = /*#__PURE__*/function (_Component) {
  _inherits(Example, _Component);
  var _super = _createSuper(Example);
  function Example() {
    _classCallCheck(this, Example);
    return _super.apply(this, arguments);
  }
  _createClass(Example, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.App, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.Window, {
        style: {
          width: 400,
          height: 400
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.View, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(proton_native__WEBPACK_IMPORTED_MODULE_3__.TextInput, null))));
    }
  }]);
  return Example;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
proton_native__WEBPACK_IMPORTED_MODULE_3__.AppRegistry.registerComponent('example', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Example, null));

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d07234c6e2960bd80e58")
/******/ })();
/******/ 
/******/ }
;
//# sourceMappingURL=main.0e44023fd63cf0d0ae89.hot-update.js.map