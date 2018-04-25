webpackHotUpdate(5,{

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

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

  (0, _createClass3.default)(DisputeIndex, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var disputes;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getUserDisputes('0xa80a4e5be677a1cfef80a08daa627762610149d9').call();

              case 2:
                disputes = _context.sent;
                return _context.abrupt('return', { disputes: disputes });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function DisputeIndex(props) {
    (0, _classCallCheck3.default)(this, DisputeIndex);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DisputeIndex.__proto__ || (0, _getPrototypeOf2.default)(DisputeIndex)).call(this, props));

    _this.renderCampaigns = _this.renderCampaigns.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DisputeIndex, [{
    key: 'renderCampaigns',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.currentProvider.publicConfigStore.getState().selectedAddress;

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function renderCampaigns() {
        return _ref2.apply(this, arguments);
      }

      return renderCampaigns;
    }()
  }, {
    key: 'render',
    value: function render() {
      this.renderCampaigns();

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, this.props.disputes));
    }
  }]);

  return DisputeIndex;
}(_react.Component);

exports.default = DisputeIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIndlYjMiLCJEaXNwdXRlSW5kZXgiLCJtZXRob2RzIiwiZ2V0VXNlckRpc3B1dGVzIiwiY2FsbCIsImRpc3B1dGVzIiwicHJvcHMiLCJyZW5kZXJDYW1wYWlnbnMiLCJiaW5kIiwiY3VycmVudFByb3ZpZGVyIiwicHVibGljQ29uZmlnU3RvcmUiLCJnZXRTdGF0ZSIsInNlbGVjdGVkQWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFSSxBOzs7Ozs7Ozs7Ozs7O3VCQUtNLGtCQUFBLEFBQVEsUUFBUixBQUFnQixnQkFBaEIsQUFBZ0MsOEMsQUFBaEMsQUFBOEU7O21CQUEvRjtBO2lEQUVDLEVBQUUsVUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7QUFHVDs7O3dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0pBQUEsQUFDWCxBQUVOOztVQUFBLEFBQUssa0JBQWtCLE1BQUEsQUFBSyxnQkFBTCxBQUFxQixLQUgzQixBQUdqQjtXQUNEOzs7Ozs7Ozs7Ozs7dUJBR08sY0FBQSxBQUFLLGdCQUFMLEFBQXFCLGtCQUFyQixBQUF1QyxXLEFBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFNakQsQUFDUDtXQUFBLEFBQUssQUFFTDs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFGZCxBQUNFLEFBQ0UsQUFBZ0IsQUFHckI7Ozs7O0FBL0J1QyxBOztrQkFBckIsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSGFtaXNoL0Rlc2t0b3AvcmVzb2x2ZUNvbnRyYWN0In0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45N2RkZWZjMDhjNzMwNDc2MjFiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NDkwNWM0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5J1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcHV0ZUluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcblxuICAgIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpXG4gICAgLy8gY29uc29sZS5sb2codXNlcilcbiAgICBjb25zdCBkaXNwdXRlcyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXRVc2VyRGlzcHV0ZXMoJzB4YTgwYTRlNWJlNjc3YTFjZmVmODBhMDhkYWE2Mjc3NjI2MTAxNDlkOScpLmNhbGwoKVxuXG4gICAgcmV0dXJuIHsgZGlzcHV0ZXMgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMucmVuZGVyQ2FtcGFpZ25zID0gdGhpcy5yZW5kZXJDYW1wYWlnbnMuYmluZCh0aGlzKVxuICB9XG5cbiAgYXN5bmMgcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgIGF3YWl0IHdlYjMuY3VycmVudFByb3ZpZGVyLnB1YmxpY0NvbmZpZ1N0b3JlLmdldFN0YXRlKCkuc2VsZWN0ZWRBZGRyZXNzXG4gIH1cblxuXG5cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJDYW1wYWlnbnMoKVxuXG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPnt0aGlzLnByb3BzLmRpc3B1dGVzfTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTtBQURBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9