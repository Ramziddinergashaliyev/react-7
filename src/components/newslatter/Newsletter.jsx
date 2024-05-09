import React from "react";
import "./newsletter.scss";
import newsletterimg from "../../assets/images/product2.svg";

function Newsletter() {
  return (
    <div className="newsletter container">
      <div className="newsletter__card">
        <div className="newsletter__left">
          <h2 className="newsletter__title">Subscribe To Newsletter</h2>
          <p className="newsletter__desc">
            Get free guide about smart watches daily.{" "}
          </p>
          <div className="newsletter__form">
            <input placeholder="Enter Email address" type="text" />
            <button className="newsletter__btn">Subscribe</button>
          </div>
        </div>
        <div className="newsletter__right">
          <img src={newsletterimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
