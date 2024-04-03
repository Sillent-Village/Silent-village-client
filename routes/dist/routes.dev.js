"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privateRoutes = exports.publicRoutes = void 0;

var _config = _interopRequireDefault(require("../config"));

var _Register = _interopRequireDefault(require("../pages/Register/Register"));

var _Login = _interopRequireDefault(require("../pages/Login/Login"));

var _Home = _interopRequireDefault(require("../pages/Home/Home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var publicRoutes = [{
  path: _config["default"].routes.home,
  component: _Home["default"]
}, {
  path: _config["default"].routes.login,
  component: _Login["default"]
}, {
  path: _config["default"].routes.register,
  component: _Register["default"]
}];
exports.publicRoutes = publicRoutes;
var privateRoutes = [{}];
exports.privateRoutes = privateRoutes;