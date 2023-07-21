import React from "react";
import fb from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import ig from "../../assets/icon-instagram.svg";
import { ReactSVG } from "react-svg";
import "./footer.css";

const FooterIcons = () => {
  return (
    <div className="icon__container">
      <ReactSVG src={fb} alt="Facebook logo" />
      <ReactSVG src={twitter} alt="Twitter logo" />
      <ReactSVG src={pinterest} alt="Pinterest logo" />
      <ReactSVG src={ig} alt="Instagram logo" />
    </div>
  );
};

export default FooterIcons;
