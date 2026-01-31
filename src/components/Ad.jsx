import React from "react";

import "../styles/ad.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import adsData from "../data/ads.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Ad = () => {
  return (
    <div className="home-page-ad-container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 999999999, disableOnInteraction: false }}
        className="mySwiperAds"
      >
        {adsData?.map(
          (item) =>
            item.imagenes &&
            item.imagenes[0] !== "" && (
              <SwiperSlide key={item.id}>
                <img
                className="ad-image"
                  src={item.imagenes[0]}
                  alt={`${item.nombre} - ${item.descripcion_corta}`}
                />
              </SwiperSlide>
            ),
        )}
      </Swiper>
      {/* <div className="home-page-ad-text-container">
        <h2>Rodrigo Roa Pineda</h2>
        <p>
          comercial@ecoroa.org <br />
          Cra 8 n 26 06 Yopal <br />
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
      </div> */}
    </div>
  );
};

export default Ad;
