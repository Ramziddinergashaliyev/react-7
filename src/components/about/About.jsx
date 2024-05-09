import React from "react";
import "./about.scss";
import { ABOUT } from "../../static/ProductsData";

function About() {
  const aboutCard = ABOUT?.map((el) => (
    <div key={el.id} className="about__card">
      <div className="about__card__img">
        <img src={el.img} alt="" />
      </div>
      <div className="about__card__info">
        <h2 className="about__card__title">{el.title}</h2>
        <p className="about__card__desc">{el.desc}</p>
        <img src={el.star} alt="" />
      </div>
    </div>
  ));

  return (
    <div className="about container">
      <p className="about__text">Here are our some of the best clients.</p>
      <h2 className="about__title">What People Say About Us</h2>
      <div className="about__cards">{aboutCard}</div>
    </div>
  );
}

export default About;
