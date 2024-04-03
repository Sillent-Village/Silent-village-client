import React, { useRef, useState, useEffect } from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import music from "../../assets/img/autumn.mp3";
import ReactPlayer from "react-player/lazy";
import languageURL from "../../assets/img/7429665.png";
import { ArrowDown } from "../../components/Icons/icons";

const cx = classNames.bind(styles);

const Home = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isScrollMenu, setIsScrollMenu] = useState(false);
  const [languageValue, setLanguageValue] = useState("Vi");

  const languageArray = ["Vi", "En"];

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
        onClick={() => hanldeChooseLanguage(language)}
      >
        {language}
      </li>
    );
  });

  return (
    <div className={cx("home")}>
      <div className={cx("home__loginForm")}>
        <h1>Silent Village</h1>
        <form className={cx("home__loginForm--form")}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={loginForm.email}
            onChange={handleInputChange}
          />

          <label>Password</label>
          <input
            type={isShowPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={handleInputChange}
          />

          <div className={cx("show-password")}>
            <div>
              <input type="checkbox" onChange={handleShowPassword} />
              <label></label> <span>Show password</span>
            </div>
            <a href="#">Password retrieval</a>
          </div>

          <button type="submit">Login</button>
          <p>
            Do not have an account? <Link to="/register">Register </Link>now
          </p>
        </form>
      </div>

      {/* <audio ref={audioRef} onCanPlayThrough={handleCanPlayThrough}>
        <source src={music} type="audio/mp3" />
      </audio> */}
      {/* <ReactPlayer
        url="https://www.youtube.com/watch?v=cUmpJ2zwfVU"
        // volume
        controls
      /> */}

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

export default Home;
