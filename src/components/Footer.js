import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faInstagramSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import logoFooter from "../assets/footer_logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__container__logo">
          <img src={logoFooter} alt="logo" />
        </div>
        <div className="footer__container__nav">
          <h3>Navigation</h3>
          <nav className="footer__nav">
            <ul>
              <li>
                <Link className="footer__nav__link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="footer__nav__link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="footer__nav__link" to="/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link className="footer__nav__link" to="/reserve">
                  Reserve
                </Link>
              </li>
              <li>
                <Link className="footer__nav__link" to="/order">
                  Order
                </Link>
              </li>
              <li>
                <span className="footer__nav__link">Login</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__container__contact">
          <h3>Contact</h3>
          <p>ADDRESS: 633 N Saint Clair St, Chicago, IL 60611</p>
          <p>PHONE: +1 312-337-9400</p>
          <p>EMAIL: little_lemon@gmail.com</p>
        </div>
        <div className="footer__container__social">
          <h3>Social Media</h3>
          <FontAwesomeIcon
            icon={faFacebookSquare}
            className="footer__container__social-icon"
          />
          <FontAwesomeIcon
            icon={faInstagramSquare}
            className="footer__container__social-icon"
          />
          <FontAwesomeIcon
            icon={faTwitterSquare}
            className="footer__container__social-icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
