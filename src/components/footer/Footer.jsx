import React from 'react';
import './footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>NGEBRE</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://www.instagram.com/nathy_fbg"><FaInstagram /></a>
        <a href="https://www.facebook.com/Nathnaell"><FaFacebook /></a>
        <a href="https://twitter.com/nathy_gee"><FaTwitter /></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Nathnael Gebre: All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
