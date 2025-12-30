import React from 'react'
import "../styles/productCardHome.css"

const ProductCardHome = () => {
  return (
    <div className="product-card-home-container">
      <div className="img-product-card-home-container">
        <img src="https://res.cloudinary.com/dd8a6qc45/image/upload/v1767057296/EcoMovilidad/products/SPORT_350_ymrmaj.jpg" alt="Foto producto" />
      </div>
      <div className="text-product-card-home-container">
        <div className="description-text-product-home-container">
          <h3>SPORT 350</h3>
          <p>50 km</p>
          <p>35-40 km/h</p>
          <p>$4'500.000</p>
        </div>
        <button>Ver detalles</button>
      </div>
    </div>
  )
}

export default ProductCardHome