import React from "react";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Hero from "./components/hero/Hero";
import Cards from "./components/cards/Cards";
import Products from "./components/products/Products";
import About from "./components/about/About";
import Newsletter from "./components/newslatter/Newsletter";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cards />
        <Products />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
