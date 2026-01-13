import React from "react";
import Ad from "../components/Ad";
import ProductCardHome from "../components/ProductCardHome";

import productsData from "../data/products.json";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Ad />
      <div className="products-home-page-container">
        {productsData.map((product) => (
          <ProductCardHome key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
