import React, { useRef, useState, useEffect } from "react";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import languageURL from "../../assets/img/7429665.png";
import { ArrowDown } from "../../components/Icons/icons";
import { useTranslation } from "react-i18next";
// import { locales } from "../../i18n/i18n";

const cx = classNames.bind(styles);

const Register = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation("login");

  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isScrollMenu, setIsScrollMenu] = useState(false);

  const [languageValue, setLanguageValue] = useState(
    localStorage.getItem("language")
  );
  const languageArray = ["Vi", "EN"];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      changeLanguage(savedLanguage);
      setLanguageValue(savedLanguage);
    } else {
      changeLanguage("EN");
      setLanguageValue("EN");
    }
  }, []);

  const changeLanguage = (lng) => {
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newRegisterForm = { ...registerForm, [name]: value };
    setRegisterForm(newRegisterForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleShowLanguageMenu = () => {
    setIsScrollMenu(!isScrollMenu);
  };

  const hanldeChooseLanguage = (language) => {
    localStorage.setItem("language", language);
    setLanguageValue(language);
    setIsScrollMenu(false);
    changeLanguage(language);
  };

  const language = languageArray.map((language, index) => {
    return (
      <li
        className={cx({ languageActive: languageValue === language })}
        onClick={() => {
          hanldeChooseLanguage(language);
          changeLanguage(language);
        }}
      >
        {language}
      </li>
    );
  });

  return (
    <div className={cx("home")}>
      <div className={cx("home__loginForm")}>
        <h1>{t("login translator.title")}</h1>
        <form className={cx("home__loginForm--form")}>
          <label>{t("login translator.username")}</label>
          <input
            type="text"
            name="username"
            placeholder={t("login translator.username")}
            value={registerForm.username}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={registerForm.email}
            onChange={handleInputChange}
          />

          <label>{t("login translator.password")}</label>
          <input
            type={isShowPassword ? "text" : "password"}
            name="password"
            placeholder={t("login translator.password")}
            value={registerForm.password}
            onChange={handleInputChange}
          />

          <div className={cx("show-password")}>
            <div>
              <input type="checkbox" onChange={handleShowPassword} />
              <label></label> <span>{t("login translator.show password")}</span>
            </div>
          </div>

          <button type="submit">{t("login translator.register")}</button>
          <p>
            {t("login translator.exist account")}
            <Link to="/">{t("login translator.login")} </Link>
            {t("login translator.now")}
          </p>
        </form>
      </div>

      <div className={cx("menu__language")}>
        <div className={cx("menu__language--img")}>
          <img src={languageURL} alt="language" />
        </div>
        <div>
          <div
            className={cx("menu__language--showLanguage")}
            onClick={handleShowLanguageMenu}
          >
            <span>{languageValue}</span>
            <ArrowDown
              className={cx("arrowdown-icon", { "rotate-icon": isScrollMenu })}
            />
          </div>
          {isScrollMenu ? (
            <ul className={cx("menu__language--list")}>{language}</ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
