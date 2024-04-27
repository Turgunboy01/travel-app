import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/home_img/logo.png";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className={`header ${mobileMenu ? "active" : ""}`}>
      <div className="container">
        <Link to={"/"}>
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="menu__links">
          <li className="close">
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/tourPage">Tour Packages</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </div>
        <div className="header__btns">
          <Link to={"/login"}>Login </Link>
          <Link to={"/signUp"}>Sign Up</Link>
          <div className="mobileMenu">
            {mobileMenu ? (
              <VscChromeClose onClick={() => setMobileMenu(false)} />
            ) : (
              <SlMenu onClick={() => setMobileMenu(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
