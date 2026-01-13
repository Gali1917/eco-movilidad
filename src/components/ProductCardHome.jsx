import React from 'react'
import "../styles/productCardHome.css"

const ProductCardHome = ({product}) => {
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
          <p>${product.precio?.toLocaleString('es-CO')}</p>
        </div>
        <button>Ver detalles</button>
      </div>
    </div>
  )
}

export default ProductCardHome