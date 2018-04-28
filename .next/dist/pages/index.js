'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../ethereum/web3');

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