'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('./secretShit'),
    infuraNodeKey = _require.infuraNodeKey;

var web3 = void 0;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  //in browser and metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //On server || metamask not running
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/' + infuraNodeKey);

  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJpbmZ1cmFOb2RlS2V5Iiwid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztlQUMwQixRQUFRLEFBQVIsQTtJQUFsQixBLHlCQUFBLEE7O0FBRVIsSUFBSSxZQUFKOztBQUVBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTVELGFBQXlFLEFBQ3ZFO0FBQ0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNEO0FBSEQsT0FHTyxBQUNMO0FBQ0E7TUFBTSxXQUFZLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsNENBQ2EsQUFEYixBQUFsQixBQUlBOztTQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDRDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0hhbWlzaC9EZXNrdG9wL3Jlc29sdmVDb250cmFjdCJ9