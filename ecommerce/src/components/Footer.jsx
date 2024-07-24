import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div>
          <h3>Product</h3>
          <ul>
            <li>Tshirt</li>
            <li>Jacket</li>
            <li>Shoes</li>
            <li>Pants</li>
            <li>Sunglasses</li>
            <li>Tuxedo</li>
          </ul>
        </div>
        <div>
          <h3>Categories</h3>
          <ul>
            <li>Man</li>
            <li>Woman</li>
            <li>Kids</li>
            <li>Gift</li>
            <li>New Arrival</li>
          </ul>
        </div>
        <div>
          <h3>Our Social Media</h3>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="newsletter">
        <h2>TULOS</h2>
        <p>Get newsletter update for upcoming product and best discount for all item</p>
        <form>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
