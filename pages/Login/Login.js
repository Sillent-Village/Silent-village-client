import React, { useRef, useState, useEffect } from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import languageURL from "../../assets/img/7429665.png";
import { ArrowDown } from "../../components/Icons/icons";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

const Login = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isScrollMenu, setIsScrollMenu] = useState(false);
  const [languageValue, setLanguageValue] = useState("Vi");
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
    const newLoginForm = { ...loginForm, [name]: value };
    setLoginForm(newLoginForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginForm);
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleShowLanguageMenu = () => {
    setIsScrollMenu(!isScrollMenu);
  };

  const hanldeChooseLanguage = (language) => {
    setLanguageValue(language);
    setIsScrollMenu(false);
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
    <div className={cx("login")}>
      <div className={cx("login__loginForm")}>
        <h1>{t("login translator.title")}</h1>
        <form className={cx("login__loginForm--form")}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={loginForm.email}
            onChange={handleInputChange}
          />

          <label>{t("login translator.password")}</label>
          <input
            type={isShowPassword ? "text" : "password"}
            name="password"
            placeholder={t("login translator.password")}
            value={loginForm.password}
            onChange={handleInputChange}
          />

          <div className={cx("show-password")}>
            <div>
              <input type="checkbox" onChange={handleShowPassword} />
              <label></label> <span>{t("login translator.show password")}</span>
            </div>
            <a href="#">{t("login translator.password retrieval")}</a>
          </div>

          <button
            type="submit"
            onClick={() => {
              navigate("/home");
            }}
          >
            {t("login translator.login")}
          </button>
          <p>
            {t("login translator.account")}{" "}
            <Link to="/register">{t("login translator.register")} </Link>
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

export default Login;
