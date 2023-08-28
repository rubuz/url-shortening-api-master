import React, { useEffect, useState } from "react";
import "./shortener.css";
// https://api.shrtco.de/v2/shorten?url=

const getLocalStorage = () => {
  let links = localStorage.getItem("links");

  if (links) {
    return JSON.parse(localStorage.getItem("links"));
  } else {
    return [];
  }
};

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState(getLocalStorage());
  const [copyBtnText, setCopyBtnText] = useState("Copy");

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
        setLinks(data.result);
        setUrl("");
      };

      getShortLink();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(links.full_short_link);
    setCopyBtnText("Copied!");
  };

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

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
      <div className="shortener__list-container">
        <div className="shortener__long-link">
          <p>{links.original_link}</p>
        </div>
        <div className="shortener__short-link-container">
          <ul>
            <li className="shortener__short-link">
              <p>{links.full_short_link}</p>
            </li>
            <li>
              <button
                className="shortener__short-link-btn shortener__btn btn"
                onClick={handleCopy}
              >
                {copyBtnText}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shortener;
