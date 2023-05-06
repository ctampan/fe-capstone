import React, { useState } from "react";
import logo from "../assets/Logo.svg";
import close from "../assets/cross.png";
import open from "../assets/menu.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  let mediaQuery = window.matchMedia("(max-width: 800px)").matches;
  console.log(mediaQuery);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo__container">
          <img className="header__nav__logo" src={logo} alt="logo" />
        </div>
        <nav className="header__nav">
          <div className="menu__icon__container">
            <img
              className={`menu__icon ${isOpen ? "hidden" : ""}`}
              src={open}
              alt="open menu icon"
              onClick={() => setIsOpen(!isOpen)}
            />
            <img
              className={`menu__icon ${isOpen ? "" : "hidden"}`}
              src={close}
              alt="close menu icon"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <ul className={mediaQuery ? (isOpen ? "show" : "hide") : ""}>
            <li>
              <Link
                className="header__nav__link"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="header__nav__link"
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="header__nav__link"
                to="/menu"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                className="header__nav__link"
                to="/reserve"
                onClick={() => setIsOpen(false)}
              >
                Reserve
              </Link>
            </li>
            <li>
              <Link
                className="header__nav__link"
                to="/order"
                onClick={() => setIsOpen(false)}
              >
                Order
              </Link>
            </li>
            <li>
              <span
                className="header__nav__link"
                onClick={() => setIsOpen(false)}
              >
                Login
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
