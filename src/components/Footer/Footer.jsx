import React from "react";
import "./footer.css";
import Logo from "../../assets/logo.svg";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <div className="full-bg-3">
      <section className="footer section container">
        <div className="footer__container">
          <div className="footer__logo">
            <a href="#" className="footer__logo">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="footer__info-container">
            <div className="footer__info-listbox">
              <ul className="list">
                <li>Features</li>
                <li>
                  <a href="">Link Shortening</a>
                </li>
                <li>
                  <a href="">Branded Links</a>
                </li>
                <li>
                  <a href="">Analytics</a>
                </li>
              </ul>
              <ul className="list">
                <li>Resources</li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Developers</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
              </ul>
              <ul className="list">
                <li>Company</li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <FooterIcons />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
