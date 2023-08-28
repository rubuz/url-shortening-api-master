import React from "react";
import "./statistics.css";
import brand from "../../assets/icon-brand-recognition.svg";
import records from "../../assets/icon-detailed-records.svg";
import fully from "../../assets/icon-fully-customizable.svg";
import StatCard from "./StatCard";
import Shortener from "../Shortener/Shortener";

const Statistics = () => {
  return (
    <div className="full-bg">
      <section className="section container">
        <Shortener />
        <div className="statistics__title-container">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="statistics__card-container">
          <StatCard
            icon={brand}
            title="Brand recognition"
            text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded link help instil confidence in your content."
          />
          <StatCard
            icon={records}
            title="Detailed  Records"
            text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
          <StatCard
            id="last-card"
            icon={fully}
            title="Fully Customizable"
            text="Improve brand awarness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </section>
    </div>
  );
};

export default Statistics;
