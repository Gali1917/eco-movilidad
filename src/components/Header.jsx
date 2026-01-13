import React from "react";
import { LuMenu } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";

import "../styles/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="menu-container">
        <LuMenu />
      </div>
      <div className="logo-img-container">
        <img
          src="https://res.cloudinary.com/dd8a6qc45/image/upload/v1768281785/EcoMovilidad/assets/logo-split_ycatxp.png"
          alt="Logo"
        />
      </div>
      <div className="whatsapp-container">
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default Header;
