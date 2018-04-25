'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

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