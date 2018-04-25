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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Hamish/Desktop/resolveContract/pages/index.js?entry';


var DisputeIndex = function (_Component) {
  (0, _inherits3.default)(DisputeIndex, _Component);

  function DisputeIndex() {
    (0, _classCallCheck3.default)(this, DisputeIndex);

    return (0, _possibleConstructorReturn3.default)(this, (DisputeIndex.__proto__ || (0, _getPrototypeOf2.default)(DisputeIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(DisputeIndex, [{
    key: 'render',
    value: function render() {
      console.log(this.props.disputes);
      return _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, 'sdfsfdsdfsd');
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var disputes;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedDisputes().call();

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

  return DisputeIndex;
}(_react.Component);

exports.default = DisputeIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkRpc3B1dGVJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImRpc3B1dGVzIiwibWV0aG9kcyIsImdldERlcGxveWVkRGlzcHV0ZXMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7Ozs7Ozs7O0ksQUFFQzs7Ozs7Ozs7Ozs7NkJBUVYsQUFDUDtjQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7NkJBQU8sY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLE9BQUEsRUFBUCxBQUFPLEFBQ1I7Ozs7Ozs7Ozs7Ozt1QkFUd0Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHNCLEFBQWhCLEFBQXNDOzttQkFBdkQ7QTtpREFFQyxFQUFFLFUsQUFBRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUorQixBOztrQkFBckIsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvSGFtaXNoL0Rlc2t0b3AvcmVzb2x2ZUNvbnRyYWN0In0=