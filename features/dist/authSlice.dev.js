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
  },
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(_authService.loginUser.pending, function (state) {
      state.loading = true;
      state.error = null;
      state.user = null;
    }).addCase(_authService.loginUser.fulfilled, function (state, action) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    }).addCase(_authService.loginUser.rejected, function (state, action) {
      state.loading = false;
      state.user = null;
      state.error = action.error.message;
    });
  }
});
var _default = authSlice.reducer;
exports["default"] = _default;