import React from "react";
import "./hero.scss";
import { FiSearch } from "react-icons/fi";
import heroImg from "../../assets/images/hero-img.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__card container">
        <div className="hero__left">
          <h1 className="hero__left__title">Discover Most Suitable Watches</h1>
          <p className="hero__left__desc">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <div className="hero__left__form">
            <FiSearch />
            <input placeholder="Find the best brands" type="text" />
            <button className="hero__btn">Search</button>
          </div>
        </div>
        <div className="hero__right">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
