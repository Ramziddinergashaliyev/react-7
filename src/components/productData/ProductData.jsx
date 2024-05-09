import React from "react";
import "./productData.scss";

function ProductData({ data, close }) {
  return (
    <>
      <div onClick={() => close(null)} className="product__overly"></div>;
      <div className="product__data container">
        <div className="product__data__img">
          <img src={data.thumbnail} alt="" />
        </div>
        <div className="product__data__info">
          <h2 className="product__data__title">{data.title}</h2>
          <p className="product__data__desc">price: {data.price}</p>
          <p className="product__data__desc">stock: {data.stock}</p>
          <p className="product__data__desc">rating: {data.rating}</p>
          <p className="product__data__text">{data.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductData;
