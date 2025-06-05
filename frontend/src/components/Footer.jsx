import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>SHOPPERS</h2>
          <p>
            At Shoppers, we're dedicated to bringing you the best shopping experience,
            focusing on quality and convenience every step of the way.
          </p>
        </div>

        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <p>Gunjan, Swati</p>
          <p>shoppers@gmail.com</p>
          <p>Jaipur, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 All rights reserved</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
