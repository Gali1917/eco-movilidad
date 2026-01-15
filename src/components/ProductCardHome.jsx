import React from "react";
import "../styles/productCardHome.css";
import { Link } from "react-router-dom";

const ProductCardHome = ({ product }) => {
  const coste = (product?.precio * 5) / 100 + product?.precio;
  return (
    <div className="product-card-home-container">
      <div className="img-product-card-home-container">
        <img src={product?.imagenes[0]} alt="Foto producto" />
      </div>
      <div className="text-product-card-home-container">
        <div className="description-text-product-home-container">
          <h3>{product?.nombre}</h3>
          <p>{product.especificaciones?.autonomia}</p>
          <p>{product.especificaciones?.velocidad_max}</p>
          <p>${coste?.toLocaleString("es-CO")}</p>
        </div>
        <Link
          className="button-text-product-card"
          to={`/view-details/${product?.id}`}
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default ProductCardHome;
