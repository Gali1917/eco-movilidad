import React from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "../data/products.json";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();

  const product = productsData.find((item) => item.id === parseInt(id));

  const coste = (product?.precio * 5) / 100 + product?.precio;

  if (!product) {
    return <div>El producto no existe</div>;
  }

  return (
    <div className="product-detail">
      <div className="img-product-container">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {product?.imagenes &&
            product.imagenes.map((img, index) => (
              (img !== "") && ( 
              <SwiperSlide key={index}>
                <img src={img} alt={`${product.nombre} - ${index} `} className="product-image"/>
              </SwiperSlide>
            )))}
        </Swiper>
      </div>
      <div className="text-product-container">
        <h1>{product?.nombre}</h1>
        <span>${coste.toLocaleString("es-CO")}</span>
        <p className="description-product-details">
          {product?.descripcion_corta}
        </p>
        <ul>
          <li>Bateria: {product.especificaciones?.bateria}</li>
          <li>Autonomia: {product.especificaciones?.autonomia}</li>
          <li>Velocidad: {product.especificaciones?.velocidad_max}</li>
          <li>Motor: {product.especificaciones?.motor}</li>
          <li>Tiempo de carga: {product.especificaciones?.tiempo_carga}</li>
        </ul>
        <Link
          className="buy-button-product"
          to="https://wa.link/y3pwr8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> Comprar
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
