import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3 className="footer-title">LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">AROUND THE WEB</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGlobe /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by Route
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
