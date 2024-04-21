import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="container footer">
      
      <div className="footer-sections">
        <div align="center">
          <span className="nav-logo">
            SHRADDHA EXTENSION 
          </span><br />
          <span className="nav-logo-sub">
            Trusted Since 1980
          </span>
          <p>
            Secunderabad - 3 stores <br />
            Miyapur <br />
            Tarnaka <br />
            AS Rao Nagar <br />
            Sainikpuri <br />
            Sarath City Mall <br />
            <p><a href="tel:9515350721">+91 9515350721</a></p>
          </p>
        </div>
        <div>
          <h3>QUICK LINKS</h3>
          <p>
            <a href="#">SHOP ONLINE</a><br />
            <a href="#">Home</a><br />
            <a href="#">About</a><br />
            <a href="#">Stores</a><br />
            <a href="#">Contact</a><br />
            <a href="#">Career</a><br />
          </p>
        </div>
        <div align="center">
          <h3>SOCIAL LINKS</h3>
          <p>
            Follow us online for the latest updates! <br />
            <div className="social-icons">
              <a href='https://www.instagram.com/shraddhaextension.in' target="_"><FaInstagram /></a>
              <a href='https://www.facebook.com/AllatShraddha?mibextid=LQQJ4d' target="_"><FaFacebook /></a>
              <a href="https://wa.me/9515350721" target="_"><FaWhatsapp /></a>
            </div>
          </p>
        </div>
      </div>

      <div align="center" className="division">
        ©2024 SHRADDHA EXTENSION|ALL RIGHTS RESERVED
      </div>
    </div>
  )
}

export default Footer