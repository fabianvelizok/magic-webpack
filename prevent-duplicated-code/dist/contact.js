webpackJsonp([1],{

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
module.exports = __webpack_require__(377);


/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(135);

var _teachers = __webpack_require__(137);

var _teachers2 = _interopRequireDefault(_teachers);

var _react = __webpack_require__(43);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(139);

var _teachers3 = __webpack_require__(146);

var _teachers4 = _interopRequireDefault(_teachers3);

var _header = __webpack_require__(147);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components


// React
var headerContainer = document.getElementById('header');
(0, _reactDom.render)(_react2.default.createElement(_header2.default, null), headerContainer);

var teacherContainer = document.getElementById('teachers');
(0, _reactDom.render)(_react2.default.createElement(_teachers4.default, { teachers: _teachers2.default.teachers }), teacherContainer);

/***/ })

},[376]);