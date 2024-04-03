"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locales = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _login = _interopRequireDefault(require("../locales/en/login.json"));

var _login2 = _interopRequireDefault(require("../locales/vi/login.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var locales = {
  EN: "English",
  Vi: "Tiếng Việt"
};
exports.locales = locales;
var resources = {
  EN: {
    login: _login["default"]
  },
  Vi: {
    login: _login2["default"]
  }
};
var defaultNS = "login";

_i18next["default"].use(_reactI18next.initReactI18next).init({
  resources: resources,
  lng: "vi",
  ns: ["login"],
  defaultNS: defaultNS,
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false
  }
});