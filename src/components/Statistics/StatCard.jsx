import React from "react";
import "./statcard.css";

const StatCard = (props) => {
  return (
    <div className="statcard__container">
      <div className="statcard__img-box">
        <img src={props.icon} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default StatCard;
