import React from "react";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoHeartOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";

import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <IoHomeOutline />
      <IoSearchOutline />
      <IoHeartOutline />
      <IoLogoWhatsapp />
    </div>
  );
};

export default Footer;
