import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/service">Services</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Our ShareRide. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;