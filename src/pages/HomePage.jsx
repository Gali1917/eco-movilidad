import React from "react";
import Ad from "../components/Ad";
import ProductCardHome from "../components/ProductCardHome";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Ad />
      <div className="products-home-page-container">
        <ProductCardHome />
        <ProductCardHome />
        <ProductCardHome />
        <ProductCardHome />
        <ProductCardHome />

      </div>
    </div>
  );
};

export default HomePage;
