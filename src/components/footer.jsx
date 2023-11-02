import React from "react";
import"../styles/footer.css";
import logoIlab from "../Assets/logo-ilab.png";
import facebookLogo from "../Assets/logo-facebook.png"
import twitterLogo from "../Assets/logo-twitter.png"
import instagramLogo from "../Assets/logo-instagram.png"

const Footer = () => {
  return (
    <footer className="footer">
      <dif>
        <p></p>
      </dif>
      <div className="footer-left">
        <img src={logoIlab} alt="Logo" className="logo" />
        <p className="copyright">
          &copy; {new Date().getFullYear()} Your Website Name
        </p>
      </div>
      <div className="footer-right">
        <p className="content title">Services</p>
        <p className="content">Email Marketing</p>
        <p className="content">Campaigns</p>
        <p className="content">Branding</p>
        <p className="content">Offline</p>
      </div>
      <div className="footer-right">
        <p className="content title">About</p>
        <p className="content">Our Story</p>
        <p className="content">Benefits</p>
        <p className="content">Team</p>
        <p className="content">Careers</p>
      </div>
      <div className="footer-right">
        <p className="content title">Contact Us</p>
        <div className="content">
          <img
            src={facebookLogo}
            alt="Facebook"
            className="ContactLogo"
          />
          <p>Facebook</p>
        </div>
        <div className="content">
          <img
            src={twitterLogo}
            alt="Twitter"
            className="ContactLogo"
          />
          <p>Twitter</p>
        </div>
        <div className="content">
          <img
            src={instagramLogo}
            alt="Instagram"
            className="ContactLogo"
          />
          <p>Instagram</p>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
