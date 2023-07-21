import React from "react";
import Logo from "../../assets/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header container">
      <div className="header__left">
        <a href="#" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <nav>
          <ul className="nav__list">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <button className="btn login-btn">Login</button>
        <button className="btn signup-btn">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
