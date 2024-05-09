import React from "react";
import "./cards.scss";
import { CARDS } from "../../static/ProductsData";

function Cards() {
  const CardsData = CARDS?.map((el) => (
    <div key={el.id} className="card">
      <div className="card__img">
        <img src={el.img} alt="" />
      </div>
      <div className="card__info">
        <h2 className="card__title">{el.title}</h2>
        <p className="card__desc">{el.desc}</p>
      </div>
    </div>
  ));

  return <div className="cards container">{CardsData}</div>;
}

export default Cards;
