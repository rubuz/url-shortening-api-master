import React from "react";
import "./shortener.css";

const Shortener = () => {
  return (
    <div className="shortener__container container">
      <div className="shortener__input-container">
        <div className="shortener__input-box">
          <input
            className="shortener__input"
            type="text"
            placeholder="Shorten a link here..."
          />
          {/* <span>Please add a link</span> */}
        </div>

        <button className="shortener__btn btn">Shorten it!</button>
      </div>
    </div>
  );
};

export default Shortener;
