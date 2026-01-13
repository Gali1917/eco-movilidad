import React from "react";
import productData from "../data/products.json";

import "../styles/ad.css";

const Ad = () => {
  return (
    <div className="home-page-ad-container">
      <img src={productData[0].imagenes[0]} alt={productData[0].nombre} />
      <div className="home-page-ad-text-container">
        <h2>{productData[0].nombre}</h2>
        <p>
          {productData[0].descripcion_corta} <br />
          Autonomia de {productData[0].especificaciones.autonomia} <br />
        </p>
        <button className="button-home-page-ad-container">Comprar</button>
      </div>
    </div>
  );
};

export default Ad;
