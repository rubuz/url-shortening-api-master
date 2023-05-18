import React from "react";
import homeImg from "../../assets/illustration-working.svg";
import "./home.css";

const Home = () => {
  return (
    <section className="section container">
      <div className="home__container">
        <div className="home__title">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get deatailed insights on how
            your links are performing.
          </p>
          <button className="btn">Get started</button>
        </div>
        <div className="home__img">
          <img
            src={homeImg}
            alt="human sitting by the desk and working on a computer"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
