import React from "react";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoHeartOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";

import "../styles/footer.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <IoHomeOutline />
      <IoSearchOutline />
      {/* <IoHeartOutline /> */}
      <Link
        to="https://wa.link/y3pwr8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
};

export default Footer;
