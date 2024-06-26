"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routes = require("./routes");

Object.keys(_routes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _routes[key];
    }
  });
});