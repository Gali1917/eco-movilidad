import React from "react";
import "../styles/ad.css";

const Ad = () => {
  return (
    <div className="home-page-ad-container">
      <img
        src="https://res.cloudinary.com/dd8a6qc45/image/upload/v1767057294/EcoMovilidad/products/HALC%C3%93N_EB-4_vw2ut8.jpg"
        alt="Foto portada"
      />
      <div className="home-page-ad-text-container">
        <h2>HALCÓN EB-4</h2>
        <p>
          Eléctrica <br />4 Asientos <br />
          Autonomía 120 km
        </p>
        <button className="button-home-page-ad-container">Comprar</button>
      </div>
    </div>
  );
};

export default Ad;
