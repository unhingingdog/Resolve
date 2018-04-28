webpackHotUpdate(5,{

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(495);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(438);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Hamish/Desktop/resolveContract/pages/index.js?entry';


var DisputeIndex = function (_Component) {
  (0, _inherits3.default)(DisputeIndex, _Component);

  function DisputeIndex(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, DisputeIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DisputeIndex.__proto__ || (0, _getPrototypeOf2.default)(DisputeIndex)).call(this, props));

    _this.getDisputes = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(user) {
        var disuptes;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getUserDisputes(user).call();

              case 2:
                disuptes = _context.sent;
                return _context.abrupt('return', disuptes);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      user: '',
      disputes: []
    };
    return _this;
  }

  (0, _createClass3.default)(DisputeIndex, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var users, disputes;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                users = _context2.sent;
                _context2.next = 5;
                return this.getDisputes(users[0]);

              case 5:
                disputes = _context2.sent;

                this.setState({ user: users[0], disputes: disputes });

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, this.state.disputes));
    }
  }]);

  return DisputeIndex;
}(_react.Component);

exports.default = DisputeIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIndlYjMiLCJEaXNwdXRlSW5kZXgiLCJwcm9wcyIsImdldERpc3B1dGVzIiwidXNlciIsIm1ldGhvZHMiLCJnZXRVc2VyRGlzcHV0ZXMiLCJjYWxsIiwiZGlzdXB0ZXMiLCJzdGF0ZSIsImRpc3B1dGVzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJ1c2VycyIsInNldFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRUk7d0NBRXJCOzt3QkFBQSxBQUFZLE9BQU87aUJBQUE7O3dDQUFBOztrSkFBQSxBQUNYOztVQURXLEFBU25CLDBCQVRtQjswRkFTTCxpQkFBQSxBQUFPLE1BQVA7WUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFBQTtnQ0FBQTt1QkFDVyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsZ0JBQWhCLEFBQWdDLE1BRDNDLEFBQ1csQUFBc0M7O21CQUF2RDtBQURNLG9DQUFBO2lEQUFBLEFBRUw7O21CQUZLO21CQUFBO2dDQUFBOztBQUFBO29CQUFBO0FBVEs7OzJCQUFBO2dDQUFBO0FBQUE7QUFHakI7O1VBQUEsQUFBSztZQUFRLEFBQ0wsQUFDTjtnQkFMZSxBQUdqQixBQUFhLEFBRUQ7QUFGQyxBQUNYO1dBR0g7Ozs7Ozs7Ozs7Ozs7dUJBUXFCLGNBQUEsQUFBSyxJQUFMLEFBQVMsQTs7bUJBQXZCO0E7O3VCQUNpQixLQUFBLEFBQUssWUFBWSxNQUFqQixBQUFpQixBQUFNLEE7O21CQUF4QztBLHFDQUNOOztxQkFBQSxBQUFLLFNBQVMsRUFBRSxNQUFNLE1BQVIsQUFBUSxBQUFNLElBQUksVUFBaEMsQUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUdMLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFGZCxBQUNFLEFBQ0UsQUFBZ0IsQUFHckI7Ozs7O0FBNUJ1QyxBOztrQkFBckIsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSGFtaXNoL0Rlc2t0b3AvcmVzb2x2ZUNvbnRyYWN0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Hamish/Desktop/resolveContract/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Hamish/Desktop/resolveContract/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iNTk5YzI0M2U2NzVlMzExZGQxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZmVjZTJiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5J1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcHV0ZUluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuY29uc3RydWN0b3IocHJvcHMpIHtcbiAgc3VwZXIocHJvcHMpXG5cbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICB1c2VyOiAnJyxcbiAgICBkaXNwdXRlczogW11cbiAgfVxufVxuXG5nZXREaXNwdXRlcyA9IGFzeW5jICh1c2VyKSA9PiB7XG4gIGNvbnN0IGRpc3VwdGVzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldFVzZXJEaXNwdXRlcyh1c2VyKS5jYWxsKClcbiAgcmV0dXJuIGRpc3VwdGVzXG59XG5cbmFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICBjb25zdCB1c2VycyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcbiAgY29uc3QgZGlzcHV0ZXMgPSBhd2FpdCB0aGlzLmdldERpc3B1dGVzKHVzZXJzWzBdKVxuICB0aGlzLnNldFN0YXRlKHsgdXNlcjogdXNlcnNbMF0sIGRpc3B1dGVzIH0pXG59XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT57dGhpcy5zdGF0ZS5kaXNwdXRlc308L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUVBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVRBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==