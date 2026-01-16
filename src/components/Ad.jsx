import React from "react";

import "../styles/ad.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Ad = () => {
  return (
    <div className="home-page-ad-container">
      <img src="https://res.cloudinary.com/dd8a6qc45/image/upload/v1768524590/EcoMovilidad/assets/backgroundpng-gray_q57n7q.png" alt="EcoRoa" />
      <div className="home-page-ad-text-container">
        <h2>Rodrigo Roa Pineda</h2>
        <p>
          comercial@ecoroa.org <br />
          Cra 8 n 26 06 Yopal  <br />
          3228305258 <br />
        </p>
        <Link
          className="button-home-page-ad-container"
          to="https://wa.link/y3pwr8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> Contactar
        </Link>
      </div>
    </div>
  );
};

export default Ad;
