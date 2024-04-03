"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authService = require("../api/authService");

var _toolkit = require("@reduxjs/toolkit");

var authSlice = (0, _toolkit.createSlice)({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    user: null
  }
});
var _default = authSlice.reducer;
exports["default"] = _default;