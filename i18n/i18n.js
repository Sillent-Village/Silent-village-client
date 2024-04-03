import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LOGIN_EN from "../locales/en/login.json";
import LOGIN_VI from "../locales/vi/login.json";

export const locales = {
  EN: "English",
  Vi: "Tiếng Việt",
};

const resources = {
  EN: {
    login: LOGIN_EN,
  },
  Vi: {
    login: LOGIN_VI,
  },
};

const defaultNS = "login";

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  ns: ["login"],
  defaultNS,
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});
