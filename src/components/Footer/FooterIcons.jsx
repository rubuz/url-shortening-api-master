import React from "react";
import fb from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import ig from "../../assets/icon-instagram.svg";
import "./footer.css";

const FooterIcons = () => {
  return (
    <div className="icon__container">
      <img src={fb} alt="Facebook logo" />
      <img src={twitter} alt="Twitter logo" />
      <img src={pinterest} alt="Pinterest logo" />
      <img src={ig} alt="Instagram logo" />
    </div>
  );
};

export default FooterIcons;
