import React from "react";
import"../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Sk4t3</div>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
