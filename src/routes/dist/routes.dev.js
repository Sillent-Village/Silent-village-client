"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privateRoutes = exports.publicRoutes = void 0;

var _Home = _interopRequireDefault(require("../pages/Home"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var publicRoutes = [{
  path: _config["default"].routes.home,
  component: _Home["default"]
}];
exports.publicRoutes = publicRoutes;
var privateRoutes = [{}];
exports.privateRoutes = privateRoutes;