import React, { useState } from "react";
import "./shortener.css";
// https://api.shrtco.de/v2/shorten?url=

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [link, setLink] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url) {
      alert("Input is empty");
    } else {
      // Check if it a valid link
      const getShortLink = async () => {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await res.json();
        console.log(data);
        setLink(data.result);
        setUrl("");
      };

      getShortLink();
    }
  };

  return (
    <div className="shortener__container container">
      <form className="shortener__input-container" onSubmit={handleSubmit}>
        <div className="shortener__input-box">
          <input
            className="shortener__input"
            type="url"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          {/* <span>Please add a link</span> */}
        </div>

        <button
          type="submit"
          className="shortener__btn btn"
          onClick={handleSubmit}
        >
          Shorten it!
        </button>
      </form>
      <div></div>
    </div>
  );
};

export default Shortener;
