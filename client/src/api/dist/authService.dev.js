"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _toolkit = require("@reduxjs/toolkit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loginUser = (0, _toolkit.createAsyncThunk)("auth/login", function _callee(userCredentials) {
  var res;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res = "login";
          return _context.abrupt("return", res);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.loginUser = loginUser;