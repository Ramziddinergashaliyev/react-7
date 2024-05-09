import React, { useEffect, useState } from "react";
import "./products.scss";
import ProductData from "../productData/ProductData";
// import axios from "axios";
import axios from "../../api";
import Loading from "../loading/Loading";

function Products() {
  const [product, setProduct] = useState(null);
  const [pro, setPro] = useState(null);
  const [count, setCout] = useState(1);
  const [loading, setLoading] = useState(false);
  const [option, setOption] = useState("products");
  const limit = 6;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${option}`, {
        params: {
          limit: count * limit,
        },
      })
      .then((res) => setPro(res.data[option]))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [count, option]);

  // console.log(pro, option);

  // console.log(product);

  const productsData = pro?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__card__img">
        <img onClick={() => setProduct(el)} src={el.thumbnail} alt="" />
      </div>
      <div className="products__card__info">
        <h2 className="products__card__title">brand: {el.brand}</h2>
        <p className="products__card__desc">category:{el.category}</p>
        <p className="products__card__desc">
          <del>stock: {el.stock}</del> price: {el.price}
        </p>
      </div>
    </div>
  ));

  const usersData = pro?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__card__img">
        <img onClick={() => setProduct(el)} src={el.image} alt="" />
      </div>
      <div className="products__card__info">
        <h2 className="products__card__title">firstName: {el.firstName}</h2>
        <p className="products__card__desc">lastName:{el.lastName}</p>
        <p className="products__card__desc">
          <del>stock: {el.phone}</del> price: {el.birthDate}
        </p>
      </div>
    </div>
  ));

  const recipesData = pro?.map((el) => (
    <div key={el.id} className="products__card">
      <div className="products__card__img">
        <img onClick={() => setProduct(el)} src={el.image} alt="" />
      </div>
      <div className="products__card__info">
        <h2 className="products__card__title">name: {el.name}</h2>
        <p className="products__card__desc">cuisine:{el.cuisine}</p>
        <p className="products__card__desc">
          <del>servings: {el.servings}</del> rating: {el.rating}
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <section className="products">
        <p className="products__desc">Find your favourite smart watch.</p>
        <h3 className="products__title">Our Latest Products</h3>

        <div className="select__btn container">
          <button onClick={() => setOption("products")}>Products</button>
          <button onClick={() => setOption("users")}>Users</button>
          <button onClick={() => setOption("recipes")}>Recipes</button>
        </div>

        {option === "products" ? (
          <div className="products__cards container">{productsData}</div>
        ) : option === "users" ? (
          <div className="products__cards container">{usersData}</div>
        ) : option === "recipes" ? (
          <div className="products__cards container">{recipesData}</div>
        ) : (
          <p>Nothing here!</p>
        )}
        {loading ? <Loading /> : <></>}
        <button className="products__btn" onClick={() => setCout((p) => p + 1)}>
          See more
        </button>
        {product ? <ProductData data={product} close={setProduct} /> : <></>}
      </section>
    </>
  );
}

export default Products;
