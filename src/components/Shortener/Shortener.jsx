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
  const [links, setLinks] = useState([]);
  const [copyBtnText, setCopyBtnText] = useState("Copy");
  const [lastClickedIndex, setLastClickedIndex] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      alert("Input is empty");
    } else {
      try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await res.json();

        setLinks((prevLinks) => [...prevLinks, data.result]);
        setUrl("");
      } catch (error) {
        console.error("Error shortening link:", error);
      }
    }
  };

  const handleCopy = (shortLink, index) => {
    navigator.clipboard.writeText(shortLink);
    setCopyBtnText(shortLink);
    setLastClickedIndex(index);
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
      <div>
        {links.map((link, index) => (
          <div className="shortener__list-container" key={index}>
            <div className="shortener__long-link">
              <p>{link.original_link}</p>
            </div>
            <div className="shortener__short-link-container">
              <ul>
                <li className="shortener__short-link">
                  <p>{link.full_short_link}</p>
                </li>
                <li>
                  <button
                    className={`shortener__short-link-btn shortener__btn copy__btn btn ${
                      index === lastClickedIndex ? "copied" : ""
                    }`}
                    onClick={() => handleCopy(link.full_short_link, index)}
                  >
                    {index === lastClickedIndex ? "Copied!" : "Copy"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shortener;
